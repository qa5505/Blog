import React from 'react'
import Navbar from 'COMPONENT/layout/'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

const App = ({ children, location }) => (
  <div id="myblog-container">
    <Navbar location={location} />
    { DevTools && <DevTools /> }
  </div>
)

export default App
