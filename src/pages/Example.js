import React, { useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p> Your Cliked {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
           </button>
        </div>
    )
}


export default Example