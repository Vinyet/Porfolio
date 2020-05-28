import React from 'react';
import {useSpring, animated} from 'react-spring';


const Curriculum = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div style={props} className="cv-container">
                <section className="cv-work-experience">
                    <h3>Experiencia profesional</h3>
                    <div className="job-titles">
                        <h4 className="job-title">Programadora aplicación front-end</h4>
                        <small><em>Skylab Coders</em> | Marzo 2020 - Actual</small>
                        <p>Desarrollo y diseño de Bizzlock, una aplicación web front-end hecha con React.js y Firebase para valorar la experiencia laboral de los usuarios de forma anónima.</p>
                        <h4 className="job-title">Jefa de Redacción</h4>
                        <small><em>IM Digital Business School</em> | Septiembre 2017 - Actual</small>
                        <p>Coordinadora del Departamento de Redacción Académica. Redacción, actualización y edición de contenidos de marketing digital y negocios. Gestión de equipo.</p>           
                        <h4 className="job-title">Fundadora</h4>
                        <small><em>The Daily Fandom</em> | January 2014 - September 2017</small>
                        <p>Creación de sitio web de entretenimiento en lengua inglesa. Redacción y edición de contenidos. Mantenimiento siti Wordpress.org. Gestión de equipo. Community management. Email marketing.</p> 
                    </div>
                </section>
                <section className="cv-education">
                    <h3>Formación</h3>
                    <div className="education-boxes">
                        <div className="education-information">
                        <h4>Web Development Bootcamp</h4>
                        <sub><em>Skylab Coders Academy</em></sub>
                        <p>Bootcamp presencial de 300 horas en desarrollo y diseño web front-end, aprendiendo buenas prácticas con clean code. Pair programming y uso de metodologías Agile y Kanban en la coordinación del trabajo en equipo.</p>
                        </div>
                        <div className="education-information">
                        <h4>Grado en Periodismo</h4>
                        <sub><em>Universitat Rovira i Virgili | 2011-2015</em></sub>
                        <p>Carrera de Periodismo, cursada juntamente con asignaturas de Comunicación Audiovisual y de Publicidad y Relaciones Públicas.</p>
                        </div>
                    </div>    
                </section>
                <section className="key-skills">
                    <h3>Otras habilidades</h3>
                    <div className="key-skills-list">
                        <ul className="key-skills">
                            <li>Trabajo en equipo</li>
                            <li>Redacción y edición</li>
                            <li>Fotografía</li>
                        </ul>
                        <ul className="key-skills">
                            <li>Organización de tareas</li>
                            <li>Inglés nivel avanzado </li>
                            <li>Adobe Photoshop</li>
                        </ul>
                        <ul className="key-skills">
                            <li>Metodologías Agile</li>
                            <li>Montaje de ordenadores</li>
                            <li>Adobe Premiere</li>
                        </ul>
                    </div>
                </section>
        </animated.div>
    )
}

export default Curriculum;