import React from 'react';

import './styles/todoform.css'

class ToDoForm extends React.Component{
    

    handleClick = e =>{
             console.log("Le diste click al boton")
                  
    };

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
             
};

    render(){
      
        return(
          
            <div className="container form-container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit} className="form-inline mx-auto mt-5 form-section-inline">
                            <div className="form-group ">
                                <input 
                                    onChange={this.props.onChange} 
                                    name="task" 
                                    type="text" 
                                    className="form-control" 
                                    id="addTask" 
                                    placeholder="Add task" 
                                    value={this.props.formValues.task}/>  
                            </div>
                            <button onClick={this.handleClick} className="btn btn-outline-dark ml-2">Submit</button>
                        </form>
                    </div>    
                </div>
            </div>
        );
      
    };
};

export default ToDoForm;