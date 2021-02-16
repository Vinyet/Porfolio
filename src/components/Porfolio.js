import React from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import {accentColor, backgroundColor} from '../variables';


const PorfolioStyles = styled.div`
    margin-left: 500px;
    margin-bottom: 150px;
    max-width: 90em;
    h3 {
        background-color: ${accentColor};
        color: #fff;
        text-align: center;
        padding: 20px;
        font-size: 1.7em;
        letter-spacing: 10px; 
    }
    .porfolio-container {
        max-width: 90em;
        display: flex;
        justify-content: space-around;
        .proyecto {
            display: flex;
            padding: 10px;
            width: 25%;
            flex-direction: column;
            margin: 30px;
            &:hover {
                background-color: ${backgroundColor};
                transition-duration: 0.5s;
            }
            img {
                max-height: 70px;
                max-width: 100%;
                height: 70px;
                width: auto;
                margin: 0 auto;
            }
            p {
                padding-top: 40px;
                text-align: center;
                line-height: 25px;
            }
        }
    }
`;

const Porfolio = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <PorfolioStyles>
            <div>
               <h3>PORFOLIO</h3>
                <animated.div style={props} className="porfolio-container">
                    <div className="proyecto" id="bizzlock">
                        <img src="/test.png" alt="bizzlock-logo"></img>
                        <p><strong><a href="https://github.com/Vinyet/bizzlock/tree/master/bizzlock-app" target="_blank noopener noreferrer">Bizzlock</a></strong> es una aplicación web para valorar la experiencia laboral en una empresa, y consultar opiniones de otros.</p>
                    </div>
                    <div className="proyecto" id="todolist">
                        <img src="/to_do_icon.png" alt="prioritizer-logo"></img>
                        <p><strong><a href="https://github.com/Vinyet/todotoday" target="_blank noopener noreferrer">ToDo ToDay</a></strong> es un planificador Kanban diario basado en el drag-and-drop de cosas por hacer, en proceso y finalizadas.</p>
                    </div>
                    <div className="proyecto" id="prioritizer">
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/2875/2875765.svg" alt="prioritizer-logo"></img>
                        <p><strong>Prioritizer</strong> es un bot que determina cuál de tus tareas es la prioritaria en función de los criterios del usuario.</p>
                    </div>
                    <div className="proyecto" id="porfolio">
                        <img src="https://image.flaticon.com/icons/svg/876/876019.svg" alt="porfolio-logo"></img>
                        <p>¡Este <strong>porfolio</strong>!</p>
                    </div>
                </animated.div>
            </div>
        </PorfolioStyles>
    )
}

export default React.memo(Porfolio)