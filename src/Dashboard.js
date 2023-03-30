import {
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    DesktopOutlined,
    TeamOutlined,
    SearchOutlined,
    CompressOutlined
} from '@ant-design/icons';
import { ToggleButton } from '@mui/material';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Card, Col, Row } from 'antd';




const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Admin User', '2', <DesktopOutlined />),
    getItem('Driver Managment', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider width={230} >

                <div

                    style={{
                        height: 32,
                        margin: 16,
                        width: 120,
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}

                />

                <Menu theme="dark" mode="inline" items={items} />
            </Sider>
            <Layout>

                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}>

                    <div className='col-md-6'>
                        <>
                            <SearchOutlined
                                style={{
                                    fontSize: 20,
                                    paddingLeft: 30
                                }} />
                            <CompressOutlined
                                style={{
                                    fontSize: 20,
                                    paddingLeft: 30
                                }} />
                        </>
                    </div>
                </Header>
                <Layout>
                    <div style={{ paddingLeft: "30px" }}>
                        <h2>Welcome Admin,</h2>
                        <p>Dashboard - Unwaste Network</p>
                    </div>
                </Layout>
                <Layout>
                    <div style={{  padding: '30px' }}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Layout>
                <Layout>
                    <div style={{  padding: '30px' }}>
                        <Row gutter={16}>
                            <Col span={6}
                           
                            >
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Layout>
                <Layout></Layout>
            </Layout>

        </Layout>



    );
};
export default App;