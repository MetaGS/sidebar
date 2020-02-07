import React, {useEffect} from 'react';


export default function(WrappedComponent){
   
    return function(props){
        let inputRef = React.createRef();
        useEffect(() => {
          inputRef.current.focus();  
    
          return () => {
          };
        }, [])
        return <WrappedComponent {...props} inputRef={inputRef}/>
    }
}