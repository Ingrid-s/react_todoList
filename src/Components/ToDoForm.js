import React, { Component } from 'react';

import './styles/todoform.css'

class ToDoForm extends React.Component{
   constructor(){
       super()
           this.state={
            task:'',
           }
       }
    

    onChange = e => {
        e.preventDefault();
        this.setState({
            task: e.target.value,
        })
        console.log(e.target.value)
    }

    onSubmit = e =>{
        e.preventDefault();
        console.log(this.state.task)

    }


    render(){
      
        return(
          
            <div className="container form-container">
                <div className="row">
                    <div className="col">
                        <form className="form-inline mx-auto mt-5 form-section-inline">
                            <div className="form-group ">
                                <input onChange={this.onChange} name="task" type="text" className="form-control" id="addTask" placeholder="Add task" />  
                            </div>
                            <button onClick={this.onSubmit} type="submit" className="btn btn-outline-dark ml-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
      
    }
}

export default ToDoForm;