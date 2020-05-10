import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line

// import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
// import { lightBlue, pink } from 'material-ui/colors'

import App from './views/App'
import appState from './store/app-state'

// ReactDOM.hydrate(<App />, document.getElementById('root'))

// const createApp = (TheApp) => {
//   class Main extends React.Component {
//     // Remove the server-side injected CSS.
//     componentDidMount() {
//       const jssStyles = document.getElementById('jss-server-side');
//       if (jssStyles && jssStyles.parentNode) {
//         jssStyles.parentNode.removeChild(jssStyles);
//       }
//     }

//     render() {
//       return <TheApp />
//     }
//   }
//   return Main
// }

const root = document.getElementById('root')
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

// render(createApp(App))
render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default // eslint-disable-line
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    // render(createApp(NextApp))
    render(NextApp)
  })
}
