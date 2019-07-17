import React from 'react';

class View extends React.Component {
    render(){
        return(
            <div className="col-6">
                <div>
                    <h3>Task to do</h3>
                    <span>{this.props.task}</span>
                
                </div>
        </div>
        )
        
    }
}
export default View;