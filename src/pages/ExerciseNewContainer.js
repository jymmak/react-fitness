import React from 'react'
import ExerciseNew from './ExerciseNew'
import url from '../config'

class ExerciseNewContainer extends React.Component {
    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
    }
    handleChange = e => {

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        console.log(this.state)
        try {
          
            this.setState({
                loading: false
            })

            this.props.history.push(`${url}/exercises`)

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }
    render() {

        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />

    }
}
export default ExerciseNewContainer