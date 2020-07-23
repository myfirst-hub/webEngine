import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout, Menu } from 'antd'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { AppState } from '../../store/app-state'
import './index.less'

const { Header, Content, Footer, Sider } = Layout

@inject('appState') @observer
export default class Home extends React.Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
    // do something here
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.count = 3
        resolve(true)
      })
    })
  }

  changeName(event) {
    this.props.appState.changeName(event.target.value)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        <Layout>
          <Sider
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<BarChartOutlined />}>
                nav 4
              </Menu.Item>
              <Menu.Item key="5" icon={<CloudOutlined />}>
                nav 5
              </Menu.Item>
              <Menu.Item key="6" icon={<AppstoreOutlined />}>
                nav 6
              </Menu.Item>
              <Menu.Item key="7" icon={<TeamOutlined />}>
                nav 7
              </Menu.Item>
              <Menu.Item key="8" icon={<ShopOutlined />}>
                nav 8
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>,
      </div>
    )
  }
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
