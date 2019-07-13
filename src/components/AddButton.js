import React from 'react'
import buttonPlus from '../images/button-plus.png'
import {Link}  from 'react-router-dom'

const AddButton = ()=>(
    <Link to="/exercise/new">
    <img className="Fitness-Add" src={buttonPlus} alt='buttonPlus' />
    </Link>
)


export default AddButton