import { useCharacterAnimations } from "../contexts/CharacterAnimations";


const Interface = () => {

    const { animations, animationIndex, setAnimationIndex } =
        useCharacterAnimations();
    return (
        <div style={{ position: 'absolute', bottom: '0', right: '0' }}>

            {animations.map((animation, index) => (
                <button
                    key={animation}
                    onClick={() => setAnimationIndex(index)}
                >{animation}</button>
            ))}

        </div>
    )
}

export default Interface;