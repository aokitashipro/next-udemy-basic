'use client'
import { useState } from "react"

export default function ClientComponent() {
    const [ count, setCount ] = useState(0)
    console.log('Client')
    return (
    <div>
        クライアント
        <button onClick={()=> setCount(count + 1) } >Count: {count}</button>
    </div>
  )
}
