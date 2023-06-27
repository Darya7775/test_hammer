import React, { useEffect } from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOneClient } from "store/slices/clients-slice";

function EditProfile() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const id = localStorage.getItem("currentClient");

	useEffect(() => {
		dispatch(fetchOneClient(id));
	}, [id]);

	const select = useSelector(state => ({
		client: state.clients.oneClient,
		status: state.clients.statusOneClient
	}));
	const address = {...select.client.address};

	const callbacks = {
		onFinish: () => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				message.success({ content: 'Done!', key, duration: 1 });
				navigate('/app/main/clients/clients-list');
			}, 1000);
		},

		onFinishFailed: errorInfo => {
			console.log('Failed:', errorInfo);
		},
	};

	return (
		<>{select.status === 'succeeded' ?
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{
								'name': select.client.name,
								'email': select.client.email,
								'username': select.client.username,
								'phoneNumber': select.client.phone,
								'website': select.client.website,
								'street': `${address.street}, ${address.suite}`,
								'city': address.city,
								'postcode': address.zipcode
							}
						}
						onFinish={callbacks.onFinish}
						onFinishFailed={callbacks.onFinishFailed}
					>
								<Row>
									<Col xs={24} sm={24} md={24} lg={16}>
										<Row gutter={ROW_GUTTER}>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="Name"
													name="name"
													rules={[
														{
															required: true,
															message: 'Please input your name!',
														},
													]}
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="Username"
													name="username"
													rules={[
														{
															required: true,
															message: 'Please input your username!'
														},
													]}
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="Email"
													name="email"
													rules={[{
														required: true,
														type: 'email',
														message: 'Please enter a valid email!'
													}]}
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="Phone Number"
													name="phoneNumber"
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="Website"
													name="website"
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={24}>
												<Form.Item
													label="Address"
													name="street"
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="City"
													name="city"
												>
													<Input />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={12}>
												<Form.Item
													label="Post code"
													name="postcode"
												>
													<Input />
												</Form.Item>
											</Col>
										</Row>
										<Button type="primary" htmlType="submit">
											Save Change
										</Button>
									</Col>
								</Row>
					</Form>
				</div>
		 : null}
		</>
	)
};

export default EditProfile;
