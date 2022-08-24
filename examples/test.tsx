import React, { useState } from 'react'
import { useEffect } from 'react'
import { Foo } from './test'

const App = () => {
  const [num, setNum] = useState<number>(1)
  const [foo, setFoo] = useState<Foo>({})

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
