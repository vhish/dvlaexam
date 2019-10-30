import React from 'react';

const Answer = ({choice}) => {
    return (
      <>
        <input type="radio"
          name={choice}
          value={choice.id}
        /> {choice.content} 
        <br/>
     </>    
        
    
    )
}

export default Answer;