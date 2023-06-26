
import { useState, useEffect } from 'react';

// export const useControls = (objectApi) => {
//   let [controls, setControls] = useState({});

//   useEffect(()=> { 
//     const keyDownPressHandler = (e) => {
//       setControls((controls)=> ({...controls, [e.key.toLowerCase()]: true}));
//     }
//     const keyUpPressHandler = (e) => {
//       setControls ((controls) => ({...controls, [e.key.toLowerCase()]: false }));
//     }

//     window.addEventListener('keydown',keyDownPressHandler);
//     window.addEventListener('keyup',keyUpPressHandler);
//     return () => {
//       window.removeEventListener('keydown',keyDownPressHandler)
//       window.removeEventListener('keyup',keyUpPressHandler);
//     }
//     },[]);

//     useEffect(()=> {

//     if (controls.arrowdown)  objectApi.applyLocalImpulse([0, -5, 0], [0, 0, +1]);
//     if (controls.arrowup)    objectApi.applyLocalImpulse([0, -5, 0], [0, 0, -1]);
//     if (controls.arrowleft)  objectApi.applyLocalImpulse([0, -5, 0], [-0.5, 0, 0]);
//     if (controls.arrowright) objectApi.applyLocalImpulse([0, -5, 0], [+0.5, 0, 0]);
  
//     })
  
    
//   return controls;
// };

/*****************
 * Player Controls
 ****************/
export const useControls = () => {
  const keys = { KeyW: 'forward', KeyS: 'backward', KeyA: 'left', KeyD: 'right', Space: 'jump' };
  const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState({ forward: false, backward: false, left: false, right: false, jump: false });

  useEffect(() => {
    const handleKeyDown = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) => setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};