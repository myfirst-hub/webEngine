import React from 'react'
import {
  Link,
  BrowserRouter,
} from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do something here
  }

  render() {
    // return <div>this is app 1235</div>
    return [
      // <div key="banner">
      //   <Link to="/">首页</Link>
      //   <br />
      //   <Link to="/detail">详情页</Link>
      //   <br />
      //   <Link to="/test">测试接口页</Link>
      // </div>,
      <Routes key="routes" />,
    ]
  }
}
