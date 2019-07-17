import React from 'react';

import ToDoForm from '../Components/ToDoForm';
import View from '../Components/View';


class Taskview extends React.Component {
    state = { form: {
        task: '',
    } };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }
    render(){
        return (
            <div>
                <div className="row">
                <div className="col-6">
                    <ToDoForm 
                        onChange={this.handleChange} 
                        formValues={this.state.form}
                    />
                </div>
                <div className="col-6">
                    <View 
                        task={this.state.form.task}
                    />
                </div>

                </div>

                
                

                
            </div>
        )
    }
}

export default Taskview;