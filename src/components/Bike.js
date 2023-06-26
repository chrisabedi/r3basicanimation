import { useLoader } from "@react-three/fiber";
import { GLTFLoader,DracoLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Bike() {

  const gltf = useLoader(GLTFLoader, 
    process.env.PUBLIC_URL + "/models/cyberpunk_bike/scene.gltf");

    console.log(gltf)

  return (
    <mesh>
    <primitive
    object = {gltf.scene}
    position = {[0,1,0]}
    
    />
    </mesh>
  )

  
}