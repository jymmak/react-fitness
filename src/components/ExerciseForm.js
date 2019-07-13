import React from 'react'
import '../components/styles/exerciseForm.css'

const ExerciseForm = ( {onChange,onSubmit,form}) =>(
    <div className="container">

    <form onSubmit={onSubmit}>
        <div className="from-group">
            <input type="text" className="form-control"
                placeholder="title" name="title"
                onChange={onChange}
                value={form.title}
            />
        </div>

        <div className="from-group">
            <input type="text" className="form-control" placeholder="description"
                name="description"
                onChange={onChange}
                value={form.description}
            />
        </div>
        <div className="from-group">
            <input type="text" className="form-control" placeholder="img"
                name="img"
                onChange={onChange}
                value={form.img}
            />
        </div>
        <div className="from-group">
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="leftColor"
                        name="leftColor"
                        onChange={onChange}
                        value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="rightColor"
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />
                </div>
            </div>
        </div>
        <button type="text" className="btn btn-primary" >Submit</button>





    </form>




</div>
)

export default ExerciseForm