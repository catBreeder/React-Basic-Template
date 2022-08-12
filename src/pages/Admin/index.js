import {Outlet} from 'react-router-dom';
import { 
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    MailOutlined,
    VideoCameraOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import './index.css'
import { Layout,Menu,Button } from 'antd';
import React,{ useState } from 'react';
import {useLocation,Link} from 'react-router-dom'
const {Header,Sider,Content} = Layout;

function getItem(label,key,icon,children,type){
    return {
        label,
        key,
        icon,
        children,
        type
    }
}
const items =[
    getItem(<Link to='/user/info'>Account Setting</Link>,'/user/info',<VideoCameraOutlined/>),
    getItem(<Link to='/user/recharge'>Center Payment</Link>,'/user/recharge',<UploadOutlined/>),
    getItem(<Link to='/addressbook/index'>Address Book</Link>,'/addressbook/index',<VideoCameraOutlined/>),
    getItem('My Order', 'sub1', <MailOutlined />, [
        getItem(<Link to='/express/orderlist'>Order Center</Link>, '/express/orderlist')
    ]),
    getItem(<Link to='/localdeliveryorder/index'>Create Order</Link>,'/localdeliveryorder/index',<VideoCameraOutlined/>),
    getItem(<Link to='/incomingoutgoings/index'>Transaction History</Link>,'/incomingoutgoings/index',<VideoCameraOutlined/>),
]
function AdminLayout(){
    const [collapsed,setCollapsed] = useState(false);
    const location = useLocation();
    let selectKey = location.pathname;
    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className='logo'></div>
                    <Menu  defaultSelectedKeys={[selectKey]}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        items={items}>
                        
                    </Menu>
                </Sider>
                <Layout className='site-layout'>
                    <Header className='site-layout-background header' style={{padding:0}}>
                        <div>
                            <Button
                                type="primary"
                                onClick={()=>setCollapsed(!collapsed)}
                                style={{
                                    marginLeft:20,marginRight:40
                                }}
                            >
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </Button>
                            <strong className='color_red'>Balance : 18025.60</strong>
                        </div> 
                        <div className='d_flex user-name-info'>
                            <p className='user-name'>TomAndJerry</p>
                            <p className='user-logout'><PoweroffOutlined/> Login out</p>
                        </div>  
                    </Header>  
                    <Content className='site-layout-background' 
                    style={{margin:'24px 16px',padding:24,minHeight:825}}>
                        <Outlet/>
                    </Content>  
                </Layout>
            </Layout>
            
        </div>
    )
}
export default AdminLayout;