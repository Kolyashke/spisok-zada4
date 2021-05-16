import React from 'react'

const Header=({Todo, Done})=>{
    return(
        <div className="container">
            <div className="row">

                <div className="col-6">
                    <h1> Мой список дел</h1>
                </div>

                <div className="col-6 mt-3 text-secondary">
                        <h4> {Todo} активно, {Done} сделано </h4>
                </div>
                
            </div>
        </div>
    )
}

export default Header;