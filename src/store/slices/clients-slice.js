import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const clientsAdapter = createEntityAdapter();
const initialState = clientsAdapter.getInitialState({
  status: "idle",
  error: null,
  statusOneClient: "idle",
  oneClient: {}
});
// запрос всех клиентов
export const fetchClients = createAsyncThunk("clients/data", async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    const data = result.map(item => ({id: item.id, name: item.name, email: item.email, location: item.address.city, phone: item.phone, website: item.website, company: item.company, address: item.address}))

    return data;
});
// запрос одного клиентаы
export const fetchOneClient = createAsyncThunk("client/data", async(id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const result = await response.json();

  return result;
});

const clientsSlice = createSlice({
  name: "clients",
  initialState,

  extraReducers(builder) {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = "succeeded";
        clientsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchOneClient.pending, (state) => {
        state.statusOneClient = "loading";
      })
      .addCase(fetchOneClient.fulfilled, (state, action) => {
        state.statusOneClient = "succeeded";
        state.oneClient = action.payload;
      })
      .addCase(fetchOneClient.rejected, (state, action) => {
        state.statusOneClient = "failed";
      })
  }
});

export default clientsSlice.reducer;

export const {
  selectAll: selectAllClients,
  selectById: selectClientById,
  selectIds: selectClientIds
} = clientsAdapter.getSelectors(state => state.clients);