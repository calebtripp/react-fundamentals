// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// todo original box, works for xc 1
// function Box(props) {
//   return (
//     <div
//       className={`box ${props.className}`}
//       style={{...props.style, fontStyle: 'italic'}}
//     >
//       {props.children}
//     </div>
//   )
// }

function Box(props) {
  // works for xc2 test.
  return (
    <div
      className={`box box--${props.size}`}
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
//
// const smallBoxFour = Box({
//   // this works.
//   className: 'box box--small',
//   style: {backgroundColor: 'lightblue', fontStyle: 'italic'},
//   children: 'small lightblue box 4',
// })
//
// const smallBox = // this works.
//   (
//     <div
//       className={'box box--small'}
//       style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//     >
//       small lightblue box
//     </div>
//   )
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
// const element = (
//   <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue Box component test
//   </Box>
// )

//this is a test for xc2
const boxXC2Test = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box xc2 test
  </Box>
)

const boxXC2MediumTest = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box xc2 test
  </Box>
)

const boxXC2LargeTest = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box xc2 test
  </Box>
)

function App() {
  return (
    <div>
      {/*{smallBox}*/}
      {/*{smallBoxTwo} this does not work. */}
      {/*{Box( this does not work.*/}
      {/*  'box box--small',*/}
      {/*  {*/}
      {/*    backgroundColor: 'lightblue',*/}
      {/*    fontStyle: 'italic',*/}
      {/*  },*/}
      {/*  'small lightblue box two',*/}
      {/*)}*/}
      {/*{Box({*/}
      {/*  className: 'box box--small',*/}
      {/*  style: {backgroundColor: 'lightblue', fontStyle: 'italic'},*/}
      {/*  children: 'small lightblue box 3',*/}
      {/*})}*/}
      {/*{smallBoxFour}*/}
      {boxXC2Test}
      {boxXC2MediumTest}
      {boxXC2LargeTest}
      {/*{element}*/}
      {/*{mediumBox}*/}
      {/*{largeBox}*/}
    </div>
  )
}

export default App
