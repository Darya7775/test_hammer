import React, { Component } from 'react';
import { Drawer, Divider } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	FileTextOutlined,
	ShopOutlined,
	GlobalOutlined
} from '@ant-design/icons';

export class ClientView extends Component {
	render() {
		const { data, visible, close} = this.props;

		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				open={visible}
			>
				<div className="text-center mt-3">
					<h3 className="mt-2 mb-0">{data?.name}</h3>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">id: {data?.id}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{data?.email? data?.email: '-'}</span>
					</p>
					<p>
						<GlobalOutlined />
						<span className="ml-3 text-dark">{data?.website}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">COMPANY</h6>
					<p>
						<ShopOutlined />
						<span className="ml-3 text-dark">{data?.company?.name}</span>
					</p>
					<p>
						<FileTextOutlined />
						<span className="ml-3 text-dark">{data?.company?.catchPhrase}</span>
					</p>
					<p>
						<FileTextOutlined />
						<span className="ml-3 text-dark">{data?.company?.bs}</span>
					</p>
				</div>
			</Drawer>
		)
	}
}

export default ClientView;
