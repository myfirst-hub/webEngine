import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import { JssProvider } from 'react-jss'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './views/App'
import { createStoreMap } from './store/store'

// 让mbox在服务端渲染的时候不会重复渲染
useStaticRendering(true)

// {appStore: xxx}
export default (stores, routerContext, sheetsRegistry, jss, theme, url) => (
  <Provider {...stores}>
    <StaticRouter context={routerContext} location={url}>
      <JssProvider registry={sheetsRegistry} jss={jss}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
