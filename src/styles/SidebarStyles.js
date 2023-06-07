import styled from 'styled-components';
import { accentColor } from '../variables';


const SidebarStyles = styled.div`
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

export default SidebarStyles;