/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css'

import Footer from 'components/Footer'

import styles from './styles.css'

function App(props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={styles.wrapper}>
        {props.children}
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}

App.propTypes =
  { children: React.PropTypes.node
  }

export default App
