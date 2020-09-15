import React from 'react';

  export const formatJSON = (label) =>{
    if(label != null){ 
      return <div><pre>{ JSON.stringify(label, null, 2) }</pre></div>
      }
      else
       return "";
  };