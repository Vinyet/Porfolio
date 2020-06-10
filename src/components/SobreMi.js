import React from 'react';
import {useTrail, animated} from 'react-spring';
import styled from 'styled-components';
import { accentColor } from '../variables';


const SobreMiStyles = styled.div`
    .sobre-mi-container {
        margin-left: 550px;
        max-width: 90em;
        height: 500px;
        h3 {
            background-color: ${accentColor};
            text-align: center;
            color: #fff;
            padding: 20px;
        }
        .traits {
            cursor: pointer;
            text-align: center;
            padding: 20px;
            max-width: 150px;
            border-bottom: 1px solid lightgray;
        }
    }
`;

const traits = ['PLANIFICADORA', 'LÓGICA', 'ESTRATEGA', 'AUTODIDACTA', 'TENAZ'];
const config = { mass: 10, tension: 3000, friction: 400 }

const SobreMi = () => {
    const trail = useTrail(traits.length, {
        config,
        opacity: 1,
        x: 0,
        height: 30,
        padding: '25px',
        marginLeft: '-20px',
        from: { opacity: 0, x: 20, height: 0 },
    })

    const handleTrait = () => {
        // show div with explanation
    }

    return (
        <SobreMiStyles>
            <div className="sobre-mi-container">
            <h3>SOBRE MÍ</h3>
                {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={traits[index]}
                    className="traits-display"
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <animated.div style={{ height }} className="traits" onClick={handleTrait}>
                        {traits[index]}
                    </animated.div>
                </animated.div>
                ))}
            </div>
        </SobreMiStyles>
    )
}


export default SobreMi;
