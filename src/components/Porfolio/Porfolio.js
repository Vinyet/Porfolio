import React from 'react';
import {useSpring, animated} from 'react-spring';


const Porfolio = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div style={props} className="porfolio-container">
            <div className="proyecto" id="bizzlock">
                <img src="/" alt="bizzlock-logo"></img>
                <h4>Bizzlock</h4>
                <p>Bizzlock es un proyecto...</p>
                <a href="https://github.com/Vinyet/bizzlock/tree/master/bizzlock-app">Ir a Bizzlock</a>
            </div>
            <div className="proyecto" id="todolist">
                <img src="/" alt="todotoday-logo"></img>
                <h4>ToDo ToDay</h4>
                <p>todotoday</p>
                <a href="https://github.com/Vinyet/bizzlock/tree/master/bizzlock-app">Ir a ToDo ToDay</a>
            </div>
            <div className="proyecto" id="porfolio">
                <h4>Porfolio</h4>
                <p>¡Esta web!</p>
            </div>
        </animated.div>
    )
}

export default Porfolio;

