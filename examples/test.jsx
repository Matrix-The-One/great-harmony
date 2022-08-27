import qs from 'qs'
import React, { useState } from 'react'
import path from  'path'
import { useEffect } from 'react'

const App = () => {
  const [num, setNum] = useState(1)

  return (
    <div onClick={() => setNum(num + 1)}>
      {'jack'} - {num}

      <a href='http://www.baidu.com' target='_blank'>
        baidu
      </a>

      {[1, 2].map(i => (
        <span>{i}</span>
      ))}
    </div>
  )
}

export default App
