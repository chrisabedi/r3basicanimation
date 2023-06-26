import {usePlane} from '@react-three/cannon'
import { useRef, useEffect } from 'react';
import {useLoader} from '@react-three/fiber'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
export default function Ground(){

    const [ref] = usePlane(
        () => ({ 
          type: 'Static', 
          rotation: [-Math.PI / 2, 0, 0] }
        ), 
        useRef(null)
      );

      const gridMap = useLoader(
        TextureLoader,
        process.env.PUBLIC_URL + "/textures/grid.png"
      );
      
      useEffect(() => {
        if (!gridMap) return;
    
        gridMap.anisotropy = 16;
      }, [gridMap]);

      return (
        <mesh
        ref={ref}>
       <planeGeometry args={[12, 12]} />
        <meshBasicMaterial
          opacity={0.325}
          transparent={true}
          alphaMap={gridMap}
          color={"purple"}
        />
        </mesh>

      )
}