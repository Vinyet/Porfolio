import React from 'react';
import {useSpring, animated} from 'react-spring';


const Main = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <>
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
                        <div className="skill" id="typescript">TYPESCRIPT</div>
                        <div className="skill" id="redux">REDUX</div>
                        <div className="skill" id="python">STYLED COMPONENTS</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default Main;