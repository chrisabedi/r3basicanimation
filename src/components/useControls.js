import React, {useState, useEffect } from 'react';

export const useControls = () => {
  let [controls, setControls] = useState({});

  useEffect(()=> { 
    const keyDownPressHandler = (e) => {
      setControls((controls)=> ({...controls, [e.key.toLowerCase()]: true}));
    }
    const keyUpPressHandler = (e) => {
      setControls ((controls) => ({...controls, [e.key.toLowerCase()]: false }));
    }

    window.addEventListener('keydown',keyDownPressHandler);
    window.addEventListener('keyup',keyUpPressHandler);
    return () => {
      window.removeEventListener('keydown',keyDownPressHandler)
      window.removeEventListener('keyup',keyUpPressHandler);
    }
    },[]);

    useEffect(()=> {

      if (controls.arrowdown)  console.log('controls pressed with value of ',controls)
      if (controls.arrowup)    console.log('controls pressed with value of ',controls)
      if (controls.arrowleft)  console.log('controls pressed with value of ',controls)
      if (controls.arrowright) console.log('controls pressed with value of ',controls)
  
    })
  

  return controls;
};
