import React from 'react';
import {useSpring, animated} from 'react-spring';
import PorfolioStyles from '../styles/PorfolioStyles';


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
                        <img src="https://cdn-icons-png.flaticon.com/128/9320/9320748.png" alt="prioritizer-logo"></img>
                        <p><strong>Prioritizer</strong> es un bot que determina cuál de tus tareas es la prioritaria en función de los criterios del usuario.</p>
                    </div>
                    <div className="proyecto" id="porfolio">
                        <img src="https://cdn-icons-png.flaticon.com/128/6165/6165120.png" alt="next-posts-logo"></img>
                        <p>Una simple aplicación para hacer brainstorming para próximos posts para escribir.</p>
                    </div>
                    <div className="proyecto" id="porfolio">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AAAAwMDD09PT7+/s6OjphYWHAwMAsLCzExMQbGxtRUVE3Nzc0NDR3d3deXl5JSUmfDipYAAABKElEQVR4nO3caw6CMBCFUUQEfPDY/2rdgAlpmziDnm8DN+d3m+k6SZIkSZIkSZKk3+z+6Nt63KMJB02X1qZowkGEhITxERISxkdISBgfISFhfISEhPEREhLGR0hIGB8hIWF8hISE8RESEsZHSEgY3+8Lh2trQzRBkiRJkiRJkqQzNlR0rtHn61bYsjYL16V09PWsHpvLX462ZuFWPjpXj/XlY2OzcCwf7QkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJP7e1HlUYKn7ufVUYEiFh/ggJ80dImD9CwvwREuaPkDB/hIT5IyTMHyFh/ggJ80dImD9CwvwREuaPkDB/hP8srLgqGFL9VcF97s/QvFcLJUmSJEmSJEmSvtgbYe9Jk2k8IqcAAAAASUVORK5CYII=" alt="unsplash-logo"></img>
                        <p>Un clon del sitio web de imágenes Unsplash.</p>
                    </div>
                    <div className="proyecto" id="porfolio">
                        <img src="https://cdn-icons-png.flaticon.com/512/6528/6528597.png" alt="porfolio-logo"></img>
                        <p>¡Este <strong>porfolio</strong>!</p>
                    </div>
                </animated.div>
            </div>
        </PorfolioStyles>
    )
}

export default Porfolio;