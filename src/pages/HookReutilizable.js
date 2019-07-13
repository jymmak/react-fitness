import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import useFetch from '../hooks/useFetch';
import url from '../config'

const HookReutilizable = () => {
    const { data, loading, error } = useFetch(`${url}/exercises`)

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




export default HookReutilizable