import React from 'react'
import {
  Link,
  BrowserRouter,
  Route,
} from 'react-router-dom'
// import Helmet from 'react-helmet'
// import { Layout, Menu } from 'antd'
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UploadOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons'
import './index.less'
import Routes from '../config/router'

// const { Header, Content, Footer, Sider } = Layout

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    // return (<div>
    //   <Helmet>
    //     <title>This is topic list</title>
    //     <meta name="description" content="This is description" />
    //   </Helmet>
    //   <Layout>
    //     <Sider
    //       // collapsible={true}
    //       collapsible
    //       style={{
    //         overflow: 'auto',
    //         height: '100vh',
    //         position: 'fixed',
    //         left: 0,
    //       }}
    //     >
    // <div className="logo" />
    //       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    //         <Menu.Item key="1" icon={<UserOutlined />}>
    //           nav 1
    //         </Menu.Item>
    //         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
    //           nav 2
    //         </Menu.Item>
    //         <Menu.Item key="3" icon={<UploadOutlined />}>
    //           nav 3
    //         </Menu.Item>
    //         <Menu.Item key="4" icon={<BarChartOutlined />}>
    //           nav 4
    //         </Menu.Item>
    //         <Menu.Item key="5" icon={<CloudOutlined />}>
    //           nav 5
    //         </Menu.Item>
    //         <Menu.Item key="6" icon={<AppstoreOutlined />}>
    //           nav 6
    //         </Menu.Item>
    //         <Menu.Item key="7" icon={<TeamOutlined />}>
    //           nav 7
    //         </Menu.Item>
    //         <Menu.Item key="8" icon={<ShopOutlined />}>
    //           nav 8
    //         </Menu.Item>
    //       </Menu>
    //     </Sider>
    //     <Layout className="site-layout" style={{ marginLeft: 200 }}>
    //       <Header className="site-layout-background" style={{ padding: 0 }} />
    //       <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
    //         <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
    //           <Routes />
    //         </div>
    //       </Content>
    //       <Footer style={{ textAlign: 'center' }}>work hard Created by Sun</Footer>
    //     </Layout>
    //   </Layout>,
    // </div>);

    return (
      <div>
        <div className="logo" />
        <div>this is app 1235</div>
        <Routes key="routes" />
      </div>
    );
  }
}
