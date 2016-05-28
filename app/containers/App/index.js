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

import {
cyan500, cyan700,
grey100, grey300, grey400, grey500,
pinkA200,
white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const reelTheme = getMuiTheme({
  palette: {
    textColor: '#222426',
    alternateTextColor: '#d8d8d8',
    primary1Color: white,
    primary2Color: '#fdd90c',
    primary3Color: grey400,
    accent1Color: '#fdd90c',
  },
  appBar: {
    height: 50,
  },
})

function App(props) {
  return (
    <MuiThemeProvider muiTheme={reelTheme}>
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
