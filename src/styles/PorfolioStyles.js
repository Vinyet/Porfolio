import styled from 'styled-components';
import {accentColor, backgroundColor} from '../variables';


const PorfolioStyles = styled.div`
    max-width: 90em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 500px;
    margin-right: 50px;
    margin-bottom: 150px;
    h3 {
        background-color: ${accentColor};
        color: #fff;
        text-align: center;
        padding: 20px;
        font-size: 1.7em;
        letter-spacing: 10px; 
    }
    .porfolio-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .proyecto {
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 300px;
            flex-basis: calc(33.33% - 10px);
            margin-bottom: 20px;
            padding: 10px;
            &:hover {
                background-color: ${backgroundColor};
                transition-duration: 0.5s;
            }
            img {
                max-height: 70px;
                max-width: 100%;
                height: 70px;
                width: auto;
                margin: auto;
            }
            p {
                padding-top: 40px;
                text-align: center;
                line-height: 25px;
            }
        }
    }
`;

export default PorfolioStyles;