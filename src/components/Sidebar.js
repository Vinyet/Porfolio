import React from 'react';
import { Link } from 'react-router-dom';
import SidebarStyles from '../styles/SidebarStyles';
import ModalStyles from '../styles/ModalStyles';
import Popup from "reactjs-popup";


const Sidebar = () => {
  const contactPopUp = () => (
    <ModalStyles>
      <Popup trigger={<button className="contact-button">CONTACTO</button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="contact-header">CONTÁCTAME (Próximamente...)</div>
            <div className="content">
              {" "}
              <form action="mailto:vinyetescribano@protonmail.com" method="post" enctype="text/plain">
                <div className="form-input">
                  <div id='form-left'>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="text" name="subject" placeholder="Asunto" required />
                  </div>
                  <div id='form-right'>
                    <textarea name="message" placeholder="Mensaje"></textarea>
                  </div>
                </div>
                  <div className="actions">
                    <Popup
                      trigger={<input type="submit" className="send-button" value="ENVIAR"></input>}
                      position="top center"
                      closeOnDocumentClick>
                      <span>
                        ¡Gracias! :-)
                      </span>
                    </Popup>
                  </div>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </ModalStyles>
  );
  return (
    <SidebarStyles>
      <div className='sidebar'>
          <div className='sidebar-top'>
              <img src='https://cdn-icons-png.flaticon.com/512/6528/6528597.png' alt='code icon'/>
          </div>
          <div className='sidebar-navigation'>
              <Link to="/">Inicio</Link>
              <Link to="/sobre-mi">Sobre mí</Link>
              <Link to="/porfolio">Porfolio</Link>
              <Link to="/cv">Currículum</Link>
          </div>
          {contactPopUp()}
          <div className='sidebar-top-link'>
              <li><a href='https://www.linkedin.com/in/vinyetescribano/' target="_blank" rel="noopener noreferrer"><img src='https://multiventas.com/wp-content/uploads/2020/12/linkedin-icon-256x256-1.png' alt='linkedin'></img></a></li>        
              <li><a href='https://github.com/Vinyet' target="_blank" rel="noopener noreferrer"><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github'></img></a></li>        
          </div>
      </div>
    </SidebarStyles>
  )
}

export default Sidebar;

