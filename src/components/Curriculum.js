import React from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { accentColor } from '../variables';


const CurriculumStyle = styled.div`
    .cv-container {
        border: 1px solid gray;
        border-radius: 15px;
        margin: 0px 50px 100px 480px;
        max-width: 72%;
        height: fit-content;
        h3 {
            letter-spacing: 10px;
            padding-top: 10px;
            padding-left: 10px;
            min-width: 300px; /* responsive */
            max-width: 300px;
            text-align: left;
        }
        .cv-work-experience, .cv-education, .cv-key-skills, .cv-languages {
            display: flex;
            justify-content: space-around;
            padding: 30px;
            .job-titles {
                flex: 4;
                .job-title {
                    margin-bottom: 0px;
                }
            }
            .education-boxes {
                flex: 4;
                h4 {
                    margin-bottom: 0px;
                }
            }
            .key-skills-list {
                flex: 4;
                .key-skills {
                    display: flex;
                    justify-content: flex-start;
                    border-bottom: none;
                    padding: 0;
                    margin: 0;
                    li {
                        list-style-type: none;
                        width: 33%;              
                        font-sze: 18px;
                        ::before {
                            content: "✔"; 
                            padding-right: 12px;
                            color: ${accentColor};
                        }
                    }
                    }
            }
            }
            .language-container {
                flex: 4; /* make it pretty */
            }
        }
    }
`;

const Curriculum = () => {
   const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <CurriculumStyle>
            <animated.div style={props} className="cv-container">
                <section className="cv-work-experience">
                    <h3>EXPERIENCIA PROFESIONAL</h3>
                    <div className="job-titles">
                        <h4 className="job-title">CEO</h4>
                        <small><em>Clover</em> | Septiembre 2020 - Actual</small>
                        <p>Redacción de contenidos académicos, marketing, publicidad digital, branding, mentoría.</p>
                        <h4 className="job-title">Directora de Contenidos Académicos</h4>
                        <small><em>IM Digital Business School</em> | Septiembre 2017 - Julio 2020</small>
                        <p>Coordinadora del Departamento de Redacción Académica. Redacción, actualización y edición de contenidos de marketing digital y negocios. Gestión de equipo.</p>           
                        <h4 className="job-title">Fundadora</h4>
                        <small><em>The Daily Fandom</em> | January 2014 - September 2017</small>
                        <p>Creación de sitio web de entretenimiento en lengua inglesa. Redacción y edición de contenidos. Mantenimiento siti Wordpress.org. Gestión de equipo. Community management. Email marketing.</p> 
                    </div>
                </section>
                <section className="cv-education">
                    <h3>FORMACIÓN</h3>
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
                <section className="cv-key-skills">
                    <h3>OTRAS HABILIDADES</h3>
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
                <section className="cv-languages">
                    <h3>IDIOMAS</h3>
                    <div className="language-container">
                        <ul>
                            <li>Español: Nativo</li>
                            <li>Catalán: Nativo</li>
                            <li>Inglés: Muy alto (A1)</li>
                            <li>Alemán: Básico</li>
                        </ul>
                    </div>
                </section>
        </animated.div>
        </CurriculumStyle>
    )
}

export default Curriculum;