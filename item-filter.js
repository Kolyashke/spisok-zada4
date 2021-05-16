import React from 'react'

class ItemFilter extends React.Component{
    render(){
        return(
            <div className="container">   
                    <div className="btn-group" role="group" aria-label="Basic example" >
                        <button className="btn btn-info"> Все </button>
                        <button className="btn btn-outline-secondary">Активно</button> 
                        <button className="btn btn-outline-secondary">Сделано</button> 
                    </div>
        </div>
        )
    }
}

export default ItemFilter;