import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
color={snap.color}
disableAlpha
presetColors={[
"#51e2f5",

"#9df9ef",

"#edf756",

"#ffa8B6",

"#a28089",

"#a0d2eb",

"#e5eaf5",

"#d0bdf4",

"#8458B3",

"#a28089",

"#ff1d58",

"#f75990",

"#fff685",

"#00DDFF",

"#0049B7",

"#ff1e00",

"#e8f9fd",

"#59ce8f",

"#f43a09",

"#ffb766",

"#c2edda",

"#68d388"

]}
onChange={(color) => state.color = color.hex}
      />
      
    </div>
  )
}

export default ColorPicker

// #51e2f5

// #9df9ef

// #edf756

// #ffa8B6

// #a28089
// #a0d2eb

// #e5eaf5

// #d0bdf4

// #8458B3

// #a28089

// #ff1d58

// #f75990

// #fff685

// #00DDFF

// #0049B7

// #ff1e00

// #e8f9fd

// #59ce8f

// #f43a09

// #ffb766

// #c2edda

// #68d388