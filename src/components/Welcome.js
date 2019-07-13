import React from 'react'
import './styles/welcome.css'

const Welcome = ({username})=>(
    <div className="container">
    <div className="Fitness-User-Info">
        <h1>Hello {username}</h1>
        <p>Let's workout to get someome gains</p>
    </div>
</div>
    
)

export default Welcome