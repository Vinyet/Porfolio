import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { accentColor } from '../variables';
import Popup from "reactjs-popup";
 

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
    padding: 5px;
    line-height: 30px;
    margin-top: 30px;
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
      color: #777;
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
      background-color: #7F8C9A;
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
    font-size: 16px;
    letter-spacing: 5px;
    width: 200px;
    margin-top: 50px;
    margin-left: 100px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #fff;
    &:hover {
      letter-spacing: 6px;
      transition-duration: 0.3s;
    }
}
`;
const ModalStyle = styled.div`
  a {
    padding: 15px;
    cursor: pointer;
  }
  .contact-header {
    padding: 20px;
    font-size: 24px;
    font-weight: 600;
    width: 15%;
    margin: auto;
    letter-spacing: 5px;
  }
  form {
    padding: 30px;
    width: 35%;
    margin: auto;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    input[type="text"] {
        outline: none;
        padding: 15px;
        border: 1px solid #fff;
        border-bottom: 1px solid lightgray;
        width: 400px;
        margin-bottom: 20px;
        border-radius: 1px;
    }
    textarea {
        outline: none;
        border: 1px solid #fff;
        border-bottom: 1px solid lightgray;
        padding: 20px;
        border: 1px solid lightgray;
        width: 400px;
        height: 100px;
        border-radius: 1px;
        resize: none;
    }
  }
  .send-button, .cancel-button {
    padding: 10px;
    width: 130px;
    margin-left: 20px;
    margin-bottom: 20px;
    border: 1px solid #fff;
    border-radius: 1px;
    cursor: pointer;
  }
`;

const Sidebar = ({ props }) => {
  /*const { darkTheme } = props;
  const [ theme, setTheme ] = useState(false);*/

  const handleTheme = (e) => {
   // e.target.checked ? setTheme(darkTheme) : setTheme(false);
    // consumer if true? 
  }


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
    </ModalStyle>
  );


    return (
      <SidebarStyle>
        <div className='sidebar'>
            <div className='sidebar-top'>
                <img src='https://image.flaticon.com/icons/svg/876/876019.svg' alt='vinyet escribano'/>
                <p id='sidebar-text'>Desarrolladora web front-end con conocimientos de SEO, diseño y marketing</p>
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

            <input type="checkbox" onChange={handleTheme}></input>
        </div>
      </SidebarStyle>
    )
}

export default Sidebar;