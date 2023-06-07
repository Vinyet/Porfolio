import styled from 'styled-components';
import { accentColor, white } from '../variables';


const SobreMiStyles = styled.div`
    margin-left: 500px;
    margin-right: 50px;
    max-width: 90em;
    h3 {
        background-color: ${accentColor};
        color: ${white};
        text-align: center;
        padding: 20px;
    }
    .about-me-text {
        border-top: 1px solid lightgray;
        line-height: 26px;
    }
    .personality-type {
        margin-top: 50px;
        margin-bottom: 100px;
        border-top: 1px solid lightgray;
        ul {
            padding: 15px;
        }
        li {
            padding-inline-start: 0.35em;
            &::marker {
              content: "❭";
              color: ${accentColor};
            }
          }
    }
    .split-container {
        display: flex;
        margin-right: 50px;
        height: 320px;
        .traits-animation {
            .traits {
                cursor: pointer;
                padding: 5px 20px;
                width: 200px;
                &:hover {
                    letter-spacing: 2px;
                    transition-duration: 0.7s;
                }
            }
        }
        .trait-explanation {
            min-width: 1210px;
            .trait-display {
                display: flex;
                height: 100%;
                max-height: 100%;
                p {
                    flex: 1;
                    line-height: 26px;
                }
                img {
                    flex: 1;
                    max-width: 400px;
                    height: auto;
                    display: block;
                    margin-right: 100px;
                    filter: grayscale(90%);
                }
            }
        }
    }
`;

export default SobreMiStyles;