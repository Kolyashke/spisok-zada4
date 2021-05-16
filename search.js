import React from 'react'

const SearchPanel=()=>{
    const searchStyle ={fontSize:' 20px'}
    return(
    
          <input type="text" className="form-control" style={searchStyle} placeholder="Ask me everything"/>
              
    )
}
export default SearchPanel;