import React from 'react'
import ReactDom from 'react-dom'

import bigList from './bigList'
import propsChanges from './propsChanges'
import stateChanges from './stateChanges'
import bothChanges from './bothChanges'
import noChanges from './noChanges'
import specialChanges from './specialChanges'
import ssr from './ssr'

import whyDidYouRender from './whyDidYouRender'

const demosList = [
  bigList,
  propsChanges,
  stateChanges,
  bothChanges,
  noChanges,
  specialChanges,
  ssr
]

const domMenuElement = document.getElementById('menu')
const domDemoElement = document.getElementById('demo')

function changeDemo(demoFn){
  console.clear && console.clear() // eslint-disable-line no-console
  React.__REVERT_WHY_DID_YOU_RENDER__ && React.__REVERT_WHY_DID_YOU_RENDER__()
  ReactDom.unmountComponentAtNode(domDemoElement)
  setTimeout(() => {
    demoFn({whyDidYouRender, domElement: domDemoElement})
  }, 1)
}

changeDemo(demosList[6].fn)

const DemoLink = ({name, fn}) => (
  <li><a href="#" onClick={() => changeDemo(fn)}>{name}</a></li>
)

const Menu = () => (
  <div>
    <h1>whyDidYouRender Demos</h1>
    <h3>
      <span style={{backgroundColor: '#dad'}}>&nbsp;Open the console&nbsp;</span>
      &nbsp;and click on one of the demos
    </h3>
    <ul>
      {demosList.map(demoData => <DemoLink key={demoData.name} {...demoData}/>)}
    </ul>
  </div>
)

ReactDom.render(<Menu/>, domMenuElement)
