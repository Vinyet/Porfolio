import React from 'react';
import styled from 'styled-components';
import { accentColor } from '../variables';


const HeaderStyle = styled.div`
    margin-left: 500px;
    display: flex;
    justify-content: space-around;
    width: 90em;
    .description {
        padding: 20px;
        width: 800px;
        letter-spacing: 1px;
        p {
            line-height: 30px;
            span { font-weight: 800; }
        }
        h2 {
            font-weight: bold;
            letter-spacing: 3px;
            margin-bottom: -30px;
            font-size: 40px;
        }
        h4 {
            padding-left: 80px;
            letter-spacing: 4px;
            color: ${accentColor};
            margin-bottom: 50px;
        }
    }
    img {
        border-radius: 100px;
        margin: 50px auto;
        width: 180px;
        height: 220px;
        filter: saturate(150%);
    }

`;


const Header = () => {
    return (
        <HeaderStyle>
            <div className="description">
                <h2>Vinyet Escribano</h2>
                <h4>Front-End Developer</h4>
                <p>Desarrolladora web <span>front-end</span> junior. Especializada en <span>SEO</span>, <span>UI</span>, <span>UX</span> y <span>accesibilidad web</span>. Sueño con un <span>Internet descentralizado &#10084;</span></p>
            </div>
            <div className="photo">
                <img src='myAvatar2.jpeg' alt='vinyet escribano'></img>
            </div>
        </HeaderStyle>
    )
}

export default Header;