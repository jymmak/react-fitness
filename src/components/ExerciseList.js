import React from 'react'
import Card from './Card'

const ExerciseList = ({ exercises }) => (
    <div>
        {exercises.map((exercise) => (

            <Card
                key={exercise.id}
             {...exercise}
            />

        )
        )}
    </div>


)



export default ExerciseList