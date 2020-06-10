import React from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import {accentColor} from '../variables';


const MainStyles = styled.div`
.main {
    margin-left: 550px;
    margin-bottom: 150px;
    max-width: 90em;
    h3 {
        background-color: ${accentColor};
        color: #fff;
        text-align: center;
        padding: 20px;
    }
    .skills-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        .skills-box-row {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
            padding: 10px;
            .skill {
                display: flex;
                flex-direction: column;
                img {
                    margin: auto;
                    width: 100px;
                    height: 100px;
                }
                p {
                    text-align: center;
                    font-size: 18px;
                    line-height: 27px;
                    max-width: 250px;
                }
            #firebase img {
                height: 90px;
                width: 70px;
            }
            #sass img {
                height: 80px;
                width: 140px;
            }
        }
    }
    .learning-box-row {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        img {
            margin: auto;
            width: 100px;
            height: 100px;
        }
        #redux img {
            height: 100px;
            width: 120px;
        }
        #cypress img {
            height: 50px;
            width: 140px;
            margin-top: 25px;
        }
    }
}
`;


const Main = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
            <MainStyles>
            <animated.div style={props} className='main'>
                <h3>¿QUÉ PUEDO HACER?</h3>
                <div className="skills-box">
                    <div className="skills-box-row">
                        <div className="skill" id="html5">
                            <img src="https://pngimage.net/wp-content/uploads/2018/06/html5-logo-png-6.png" alt="html5"></img>
                            <p>Maquetar webs utilizando las convenciones de HTML5 teniendo siempre en mente el SEO: keywords, meta tags, etc.</p>
                        </div>
                        <div className="skill" id="css3">
                            <img src="https://i.pinimg.com/originals/a3/2f/83/a32f83aa2c675058e4a05a0fd4da05eb.png" alt="css"></img>
                            <p>Maquetar una web responsive con CSS3, utilizando animaciones y transiciones. Utilizo metodología BEM.</p>
                        </div>
                        <div className="skill" id="javascript">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"></img>
                            <p>Programar una web o aplicación web utilizando JavaScript ES6. Puedo utilizar jQuery si se requiere.</p>
                        </div>
                    </div>
                    <div className="skills-box-row">  
                        <div className="skill" id="sass">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/sass-226054.png" alt="sass"></img>
                            <p>Integrar Sass en proyectos web para cohesionar los estilos de una web o aplicación.</p>
                        </div>
                        <div className="skill" id="react">
                            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="react"></img>
                            <p>Desarrollar aplicaciones web con React.js mediante el uso de hooks e interactuando con APIs.</p>
                        </div>
                        <div className="skill" id="firebase">
                            <img src="https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png" alt="firebase"></img>
                            <p>Cear y gestionar bases de datos en Firebase, manejando colecciones y el registro y autenticación de usuarios.</p>
                        </div>
                    </div>    
                </div>
                <h3>¿QUÉ ESTOY APRENDIENDO?</h3>
                <div className="skills-box">
                    <div className="learning-box-row">
                        <div className="skill">
                            <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="typescript"></img>
                        </div>
                        <div className="skill" id="redux">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="redux"></img>
                        </div>
                        <div className="skill" id="cypress">
                            <img src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/77608/cypress-bw.png" alt="cypress"></img>
                        </div>
                    </div>
                </div>
            </animated.div>
            </MainStyles>
    )
}

export default Main;