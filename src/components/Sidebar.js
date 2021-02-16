import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { accentColor, linkColor } from '../variables';
import Popup from "reactjs-popup";

/* 
* Move modalStyle to separate file
* Fix SMTP contact issue
*/

const SidebarStyle = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${accentColor};
  position: fixed;
  max-width: 400px;
  padding: 20px;
  color: #fff;
  img {
    margin-top: 40px;
    margin-left: 140px;
    width: 80px;
    filter: grayscale(70%);
  }
  #sidebar-text {
    text-align: center;
    padding: 10px;
    line-height: 25px;
    margin-top: 30px;
    font-size: 1.1em;
  }
  .sidebar-top-link {
    display: flex;
    justify-content: center;
    margin: 30px;
    li {
      margin: 10px;
      img {
        width: 30px;
        margin: auto;
      }
    }
  }
  .sidebar-navigation {
    margin-top: 50px;
    max-width: 400px;
    &:hover a {
      opacity: .4;
    }
    a {
      padding-left: 10px;
      position: relative;
      display: block;
      max-width: 500px;
      padding: 20px 20px 20px 45px;
      color: #000;
      background-color: #fAfAfA;
    }
    a, a:before {
      transition: all .4s;
    }
    a:before {
      content: "";
      position: absolute;
      left:0; bottom:0; top:0;
      width: 20px;
      background-color: #2A7784;
    }
    a:hover, a:focus {
      opacity: 1;
      padding-left: 55px;
    }
    a:focus:before, a:hover:before {
      width: 30px;
    }
  }
  .contact-button {
    padding: 15px;
    font-size: 18px;
    letter-spacing: 3px;
    width: 340px;
    margin-top: 40px;
    margin-left: 20px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    &:hover {
      letter-spacing: 6px;
      box-shadow: -1px 5px 5px 0px rgba(0,0,0,0.40);
      transition-duration: 0.5s;
    }
}
`;

const ModalStyle = styled.div`
  .close {
    position: absolute;
    right: 15px;
    top: 7px;
    font-size: 22px;
    cursor: pointer;
  }
  .contact-header {
    margin-top: 20px;
    color: #000;
    padding: 20px;
    font-size: 24px;
    text-align: center;
    letter-spacing: 5px;
  }
  form {
    font-family: 'Robot', sans-serif;
    margin-top: 10px;
    padding: 30px;
    font-size: 16px;
    .form-input {
      display: flex;
      justify-content: space-between;
      #form-left {
        display: flex;
        flex-direction: column;
        input {
          outline: none;
          padding: 15px 5px;
          border: 1px solid #fff;
          border-bottom: 1px solid lightgray;
          width: 400px;
          margin-bottom: 20px;
          &:focus {
            border-bottom: 1px solid ${linkColor}; 
            transition-duration: 0.5s;
          }
        }
      }
      #form-right {
        textarea {
          outline: none;
          border: 1px solid lightgray;
          padding: 10px;
          width: 400px;
          height: 160px;
          resize: none;
          overflow: auto;
          &:focus {
            border: 1px solid ${linkColor}; 
            transition-duration: 0.5s;
          }
        }
      }
    }
    .actions {
      margin-top: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      span {
        color: #000;
        padding: 10px;
      }
      .send-button {
        width: 150px;
        padding: 15px;
        font-size: 16px;
        border: 1px solid #fff;
        border-radius: 1px;
        cursor: pointer;
        outline: none;
        &:hover {
          background-color: ${linkColor};
          letter-spacing: 3px;
          transition-duration: 0.5s;
          &:focus {
            background-color: ${linkColor};
          }
        }
      }
    }
  }
`;

const Sidebar = () => {
  const contactPopUp = () => (
    <ModalStyle>
      <Popup trigger={<button className="contact-button">CONTACTO</button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="contact-header">CONTACTO</div>
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
    </ModalStyle>
  );
  return (
    <SidebarStyle>
      <div className='sidebar'>
          <div className='sidebar-top'>
              <img src='https://image.flaticon.com/icons/svg/876/876019.svg' alt='code icon'/>
              <p id='sidebar-text'>Desarrolladora web front-end con conocimientos de SEO, diseño y marketing</p>
          </div>
          <div className='sidebar-navigation'>
              <Link to="/">Inicio</Link>
              <Link to="/sobre-mi">Sobre mí</Link>
              <Link to="/porfolio">Porfolio</Link>
              <Link to="/cv">Currículum</Link>
          </div>
          {contactPopUp()}
          <div className='sidebar-top-link'>
              <li><a href='https://www.linkedin.com/in/vinyetescribano/' target="_blank" rel="noopener noreferrer"><img src='https://image.flaticon.com/icons/svg/1946/1946531.svg' alt='linkedin'></img></a></li>        
              <li><a href='https://github.com/Vinyet' target="_blank" rel="noopener noreferrer"><img src='https://image.flaticon.com/icons/svg/25/25657.svg' alt='github'></img></a></li>        
          </div>
      </div>
    </SidebarStyle>
  )
}

export default Sidebar;

