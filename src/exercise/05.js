// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box(props) {
  return (
    <div
      className={`box ${props.className}`}
      style={{...props.style, fontStyle: 'italic'}}
    >
      {props.children}
    </div>
  )
}

// const smallBoxTwo = Box( // this does not work.
//   'box box--small',
//   {
//     backgroundColor: 'lightblue',
//     fontStyle: 'italic',
//   },
//   'small lightblue box two',
// )

const smallBoxFour = Box({
  // this works.
  className: 'box box--small',
  style: {backgroundColor: 'lightblue', fontStyle: 'italic'},
  children: 'small lightblue box 4',
})

const smallBox = // this works.
  (
    <div
      className={'box box--small'}
      style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
    >
      small lightblue box
    </div>
  )
const mediumBox = (
  <div
    className={'box box--medium'}
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className={'box box--large'}
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)
// this is the test for the exercise and produces as intended.
const element = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue Box component test
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {/*{smallBoxTwo} this does not work. */}
      {/*{Box( this does not work.*/}
      {/*  'box box--small',*/}
      {/*  {*/}
      {/*    backgroundColor: 'lightblue',*/}
      {/*    fontStyle: 'italic',*/}
      {/*  },*/}
      {/*  'small lightblue box two',*/}
      {/*)}*/}
      {Box({
        className: 'box box--small',
        style: {backgroundColor: 'lightblue', fontStyle: 'italic'},
        children: 'small lightblue box 3',
      })}
      {smallBoxFour}
      {element}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
