import React from 'react';

const Answer = ({choice}) => {
    return (
      <>
       
         <li>
            <div className="form-check">
                <input className="form-check-input"
                       type="radio" name={choice}
                       id="exampleRadios1" 
                       value={choice.id} 
                       checked />
                  <label className="form-check-label" for="exampleRadios1">
                    {choice.content}
                  </label>
            </div>
        </li>
     </>    
        
    
    )
}

export default Answer;