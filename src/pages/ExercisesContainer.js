import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import url from '../config'

const ExercisesComponent = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let res = await fetch(`${url}/exercises`)
                let data = await res.json()

                setData(data)
                setLoading(false)


            } catch (error) {
                setLoading(false)
                setError(error)
            }

        }
        fetchExercises();
    }, [])


    if (loading)
        return <Loading />
    if (error)
        return <FatalError />
    return (

        <React.Fragment>
            <Welcome username='Jymma' />
            <ExerciseList exercises={data} />
            <AddButton />
        </React.Fragment>

    )

}




export default ExercisesComponent