import React from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
 

const Sidebar = () => {

    const contactPopUp = () => (
        <Popup trigger={<button className="contact-button">CONTACTO</button>} modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="contact-header">CONTACTO</div>
              <div className="content">
                {" "}
                <form action="POST">
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Empresa" required />
                    <textarea placeholder="Mensaje"></textarea>
                </form>
              </div>
              <div className="actions">
                <Popup
                  trigger={<button className="send-button" style={{marginLeft: '410px'}}>ENVIAR</button>}
                  position="top center"
                  closeOnDocumentClick
                >
                  <span>
                    ¡Gracias!
                  </span>
                </Popup>
                <button
                  className="cancel-button"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </Popup>
    );


    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src='https://image.flaticon.com/icons/svg/876/876019.svg' alt='vinyet escribano'/>
                <p id='sidebar-text'>Desarrolladora web front-end con conocimientos de SEO, diseño y marketing.</p>
                <div className='sidebar-top-link'>
                <li><a href='https://www.linkedin.com/in/vinyetescribano/'><img src='https://image.flaticon.com/icons/svg/1946/1946531.svg' alt='linkedin'></img></a></li>        
                <li><a href='https://github.com/Vinyet'><img src='https://image.flaticon.com/icons/svg/25/25657.svg' alt='github'></img></a></li>        
                </div>
            </div>
            <div className='sidebar-navigation'>
                <Link to="/">Inicio</Link>
                <Link to="/sobre-mi">Sobre mí</Link>
                <Link to="/porfolio">Porfolio</Link>
                <Link to="/cv">Currículum</Link>
            </div>
            {contactPopUp()}
        </div>
    )
}

export default Sidebar;