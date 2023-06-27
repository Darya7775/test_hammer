import React, { useEffect, useState } from 'react';
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients} from "store/slices/clients-slice";
import ClientView from './client-views';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

function ClientsList() {

  const dispatch = useDispatch();
  
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(fetchClients());
  }, []);

  const select = useSelector(state => ({
    clients: Object.values(state.clients.entities),
  }));

  const callbacks = {
    deleteUser: userId => {
        message.success({ content: `Deleted user ${userId}`, duration: 2 });

    },
        
    showUserProfile: userInfo => {
        setUserProfileVisible(true);
        setData(userInfo);
        console.log(userInfo)
    },
            
    closeUserProfile: () => {
        setUserProfileVisible(false);
    },

	saveCurrentClient: (id) => {
		localStorage.removeItem('currentClient');
		localStorage.setItem('currentClient', id);
	}
  };
  		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				render: (_, elm) => (
					<Link to={`${APP_PREFIX_PATH}/main/clients/edit-profile/*`} onClick={() => callbacks.saveCurrentClient(elm.id)}>{elm.name}</Link>
				)
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => a.website.length - b.website.length,
				},
			},
			{
				title: 'Location',
				dataIndex: 'location',
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right d-flex justify-content-end">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => callbacks.showUserProfile(elm)} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {callbacks.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
  
  return (
    <Card bodyStyle={{'padding': '0px'}}>
        <div className="table-responsive">
            <Table columns={tableColumns} dataSource={select.clients} rowKey='id' />
		</div>
        <ClientView data={data} visible={userProfileVisible} close={callbacks.closeUserProfile}/>
	</Card>
  )
}

export default ClientsList;
