import React from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import {accentColor, backgroundColor} from '../variables';


const PorfolioStyles = styled.div`
    h3 {
        background-color: ${accentColor};
        color: #fff;
        text-align: center;
        padding: 20px;
        margin-left: 550px;
        max-width: 75em;
    }
    .porfolio-container {
        margin-left: 550px;
        max-width: 90em;
        display: flex;
        justify-content: space-around;
        .proyecto {
            display: flex;
            flex-direction: column;
            width: 300px;
            padding: 30px;
            margin-top: 30px;
            &:hover {
                background-color: ${backgroundColor};
                transition-duration: 0.5s;
            }
            img {
                max-width: 200px;
                max-height: 80px;
                margin: 0 auto;
            }
            p {
                margin-top: 30px;
                font-size: 20px;
                line-height: 28px;
                span {
                    background-color: ${backgroundColor};
                }
            }
        }
    }
`;

const Porfolio = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <PorfolioStyles>
            <h3>PORFOLIO</h3>
            <animated.div style={props} className="porfolio-container">
                <div className="proyecto" id="bizzlock">
                    <img src="/test.png" alt="bizzlock-logo"></img>
                    <p><strong><a href="https://github.com/Vinyet/bizzlock/tree/master/bizzlock-app" target="_blank noopener noreferrer">Bizzlock</a></strong> es una aplicación web para valorar la experiencia laboral en una empresa en particular, y consultar opiniones de otros.</p>
                    <p><span>React.js</span> | <span>Firebase</span></p>
                </div>
                <div className="proyecto" id="todolist">
                    <img src="todotoday.png" alt="todotoday-logo"></img>
                    <p><strong><a href="https://github.com/Vinyet/bizzlock/tree/master/bizzlock-app" target="_blank noopener noreferrer">ToDo ToDay</a></strong> es un planificador de cosas por hacer, haciendo y hechas cada día</p>
                    <p><span>HTML</span> | <span>CSS</span> | <span>JavaScript</span> | <span>jQuery</span></p>
                </div>
                <div className="proyecto" id="porfolio">
                    <img src="https://image.flaticon.com/icons/svg/876/876019.svg" alt="porfolio-logo"></img>
                    <p>¡Este <strong>porfolio web</strong>!</p>
                    <p><span>React.js</span> | <span>Styled Components</span> | <span>Firebase</span></p>
                </div>
                <div className="proyecto" id="prioritizer">
                    <img src="" alt="prioritizer-logo"></img>
                    <p><strong>Prioritizer</strong> es un bot que determina cuál de tus tareas es la prioritaria en función de los criterios del usuario.</p>
                    <p><span>React.js</span> | <span>Styled Components</span> | <span>Firebase</span></p>
                </div>
            </animated.div>
        </PorfolioStyles>
    )
}

export default React.memo(Porfolio)