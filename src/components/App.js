import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import ExercisesContainer from '../pages/ExercisesContainer'
import Example from '../pages/Example'
import NotFound from '../pages/NotFound'
import HookReutilizable from '../pages/HookReutilizable';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/exercise' component={Exercises} />
            <Route exact path='/exercise/new' component={ExerciseNewContainer} />
            <Route exact path='/example' component={Example} />
            <Route exact path='/exercise/container' component={ExercisesContainer} />
            <Route exact path='/hook/reutilizable' component={HookReutilizable} />
          
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>



)

export default App