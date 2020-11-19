import React, { useState } from 'react';
import {useTrail, useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { accentColor } from '../variables';


const SobreMiStyles = styled.div`
    margin-left: 500px;
    margin-bottom: 150px;
    max-width: 90em;
    h3 {
        background-color: ${accentColor};
        color: #fff;
        text-align: center;
        padding: 20px;
    }
    .about-me-text {
        padding: 20px;
        margin-top: 50px;
        margin-bottom: 100px;
        border-top: 1px solid lightgray;
        span {
            width: 100%;
            background-color: lightgray;
            color: gray;
            font-size: 20px;
        }
        p {
            font-size: 18px;
            line-height: 25px;
        }
    }
    .split-container {
        display: flex;
        width: 90em;
        height: 320px;
        .traits-animation {
            .traits {
                cursor: pointer;
                padding: 5px 20px;
                width: 200px;
                &:hover {
                    letter-spacing: 2px;
                    transition-duration: 0.7s;
                }
            }
        }
        .trait-explanation {
            min-width: 1210px;
            .trait-display {
                display: flex;
                height: 100%;
                max-height: 100%;
                p {
                    flex: 1;
                    font-size: 18px;
                    line-height: 25px;
                }
                img {
                    flex: 1;
                    max-width: 450px;
                    height: auto;
                    display: block;
                    margin: auto;
                    filter: grayscale(90%);
                }
            }
        }
    }
`;

const traits = ['FORTALEZAS', 'DEBILIDADES', 'ME INTERESA', 'NO ME INTERESA'];
const config = { mass: 10, tension: 2000, friction: 250 }

const SobreMi = () => {
    const [fortalezas, setFortalezas] = useState(false);
    const [debilidades, setDebilidades] = useState(false);
    const [intereses, setIntereses] = useState(false);
    const [noInteresa, setNoInteresa] = useState(false);
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    const trail = useTrail(traits.length, {
        config,
        opacity: 1,
        x: 0,
        height: 30,
        padding: '25px',
        marginLeft: '-20px',
        from: { opacity: 0, x: 20, height: 0 },
    })

    const handleTrait = (e) => {
        // optimize + case
        if (e.currentTarget.textContent === traits[0]) {
            setFortalezas(true);
            setDebilidades(false);
            setIntereses(false);
            setNoInteresa(false);
        } else if (e.currentTarget.textContent === traits[1]) {
            setDebilidades(true);
            setFortalezas(false);
            setIntereses(false);
            setNoInteresa(false);
        } else if (e.currentTarget.textContent === traits[2]) {
            setIntereses(true);
            setFortalezas(false);
            setDebilidades(false);
            setNoInteresa(false);
        } else if (e.currentTarget.textContent === traits[3]) {
            setNoInteresa(true);
            setFortalezas(false);
            setDebilidades(false);
            setIntereses(false);
        }
    }

    return (
        <SobreMiStyles>
            <h3>SOBRE MÍ</h3>
            <div className="sobre-mi-container">
                <div className="split-container">
                    <div className="traits-animation">
                        {trail.map(({ x, height, ...rest }, index) => (
                            <animated.div
                                key={traits[index]}
                                className="traits-display"
                                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                                <animated.div style={{ height }} className="traits" name={traits[index]} onClick={handleTrait}>
                                    {traits[index]}
                                </animated.div>
                            </animated.div>
                        ))}
                    </div>
                    <div className="trait-explanation">
                        {(fortalezas) ? <animated.div class='trait-display' style={props}>
                            <p>Soy muy ambiciosa y siempre voy más allá en todos mis trabajos, anticipándome a posibles oportunidades y retos. Tabajo bien (incluso mejor) bajo presión y me motivan los retos. Soy muy organizada y se me da bien liderar equipos.</p>
                            <img src='fortalezas.svg' alt='fortalezas-icon'/>
                        </animated.div> : null}
                        {(debilidades) ? <animated.div class='trait-display' style={props}>
                            <p>Para no faltar al cliché del programador, soy individualista, autodidacta y me llevo mejor con las máquinas que con las personas.</p>
                            <img src='debilidades.svg' alt='debilidades-icon'/>
                        </animated.div> : null}
                        {(intereses) ? <animated.div class='trait-display' style={props}>
                            <ul><li>Accesibilidad web</li><li>Blockchain</li><li>El reto que plantea la inteligencia artificial</li><li>Astronomía</li></ul>
                            <img src='intereses.svg' alt='intereses-icon'/>
                        </animated.div> : null}
                        {(noInteresa) ? <animated.div class='trait-display' style={props}>
                            <ul><li>Móviles</li></ul>
                            <img src='nointeresa.svg' alt='nointeresa-icon'/>
                        </animated.div> : null}
                    </div> 
                </div>
                <div className="about-me-text">
                    <span>PLANIFICADORA - LÓGICA - ESTRATEGA - AUTODIDACTA - TENAZ</span>
                    <p>Si tuviera que definir mi perfil con una sola palabra, esta sería <strong>HÍBRIDO</strong>.</p>
                    <p>Me gradué en <strong>Periodismo</strong> en el año 2015 con el objetivo de dedicarme a la <strong>divulgación científica</strong>, pues siempre me ha apasionado la ciencia y la tecnología, y creo en el poder de la palabra para aportar mi granito de arena el mundo.
                    La vida me llevó a complimentar mis habilidades comunicativas con estudios en <strong>publicidad</strong>, <strong>marketing</strong>, <strong>fotografía</strong> y <strong>comunicación audiovisual</strong>. Hará cosa de tres años añadí la <strong>programación web</strong> a mi colección.</p>
                    <p>Actualmente me dedico a buscarme la vida fusionando todos estos conocimientos, y a seguir formándome.</p>
                </div>
            </div>
        </SobreMiStyles>
    )
}


export default SobreMi;
