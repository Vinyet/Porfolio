import React from 'react';
import {useTrail, animated} from 'react-spring';


const traits = ['PLANIFICADORA', 'LÓGICA', 'ESTRATEGA', 'AUTODIDACTA', 'TENAZ'];
const config = { mass: 10, tension: 2000, friction: 400 }

const SobreMi = () => {
    const trail = useTrail(traits.length, {
        config,
        opacity: 1,
        x: 0,
        height: 30,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <div className="sobre-mi-container">
        <h3>SOBRE MÍ</h3>
            {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
                key={traits[index]}
                className="traits-display"
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                <animated.div style={{ height }}>{traits[index]}</animated.div>
            </animated.div>
            ))}
        </div>
    )
}


export default SobreMi;
