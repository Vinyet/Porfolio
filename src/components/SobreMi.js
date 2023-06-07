import React, { useState } from 'react';
import {useTrail, useSpring, animated} from 'react-spring';
import SobreMiStyles from '../styles/SobreMiStyles';


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
        switch (e.currentTarget.textContent) {
          case traits[0]:
            setFortalezas(true);
            setDebilidades(false);
            setIntereses(false);
            setNoInteresa(false);
            break;
          case traits[1]:
            setDebilidades(true);
            setFortalezas(false);
            setIntereses(false);
            setNoInteresa(false);
            break;
          case traits[2]:
            setIntereses(true);
            setFortalezas(false);
            setDebilidades(false);
            setNoInteresa(false);
            break;
          case traits[3]:
            setNoInteresa(true);
            setFortalezas(false);
            setDebilidades(false);
            setIntereses(false);
            break;
          default:
            break;
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
                            <p>Soy muy ambiciosa y siempre voy más allá en todos mis trabajos, anticipándome a posibles oportunidades y retos. Trabajo bien bajo presión y me motivan los retos. Soy muy organizada y se me da bien liderar equipos.</p>
                            <img src='fortalezas.svg' alt='fortalezas-icon'/>
                        </animated.div> : null}
                        {(debilidades) ? <animated.div class='trait-display' style={props}>
                            <p>Para no faltar al cliché del programador, soy individualista, autodidacta y me llevo mejor con las máquinas que con las personas. No me gustan los teléfonos.</p>
                            <img src='debilidades.svg' alt='debilidades-icon'/>
                        </animated.div> : null}
                        {(intereses) ? <animated.div class='trait-display' style={props}>
                            <p>El blockchain, el dilema que plantea la inteligencia artificial, la filosofía y la astronomía.</p>
                            <img src='intereses.svg' alt='intereses-icon'/>
                        </animated.div> : null}
                        {(noInteresa) ? <animated.div class='trait-display' style={props}>
                            <p>Los móviles, la burocracia, y cuando la forma se antepone al contenido.</p>
                            <img src='nointeresa.svg' alt='nointeresa-icon'/>
                        </animated.div> : null}
                    </div> 
                </div>
                <div className="about-me-text">
                    <p>Si tuviera que definir mi perfil con una sola palabra, esta sería <strong>HÍBRIDO</strong>.</p>
                    <p>Me gradué en <strong>Periodismo</strong> en el año 2015 con el objetivo de dedicarme a la <strong>divulgación científica</strong>, pues siempre me ha apasionado la ciencia y la tecnología, y creo en el poder de la palabra para aportar mi granito de arena el mundo.
                    La vida me llevó a complimentar mis habilidades comunicativas con estudios en <strong>publicidad</strong>, <strong>marketing</strong>, <strong>fotografía</strong> y <strong>comunicación audiovisual</strong>. Hará cosa de tres años añadí la <strong>programación web</strong> a mi colección.</p>
                    <p>Actualmente me dedico a buscarme la vida fusionando todos estos conocimientos, y a seguir formándome.</p>
                </div>
                <div className="personality-type">
                    <h4>Tipo de Personalidad</h4>
                    <p>Mi tipo de personalidad es <strong><a href="https://www.16personalities.com/es/personalidad-intj">INTJ</a></strong>.</p>
                    <ul className="anlist">
                        <li><strong>Introverted.</strong> Gano mi energía estando en mi propio mundo, pasando tiempo a solas en mi cabeza. Prefiero pensar primero en mis ideas, y sólo luego compartirlas.</li>
                        <li><strong>INtuitive.</strong> Aprendo viendo la "big picture" y las temáticas. Pienso en cómo la información se conecta a gran escala.</li>
                        <li><strong>Thinking.</strong> Tomo decisiones basándome en los pros y en los contras. Me fijo en las consequencias lógicas y observo desde un punto de vista objetivo.</li> 
                        <li><strong>Judging.</strong> Tengo miles de agendas, listas y planificadores. Me gusta la rutina y tener el día estructurado.</li>
                    </ul>
                </div>
            </div>
        </SobreMiStyles>
    )
}


export default SobreMi;
