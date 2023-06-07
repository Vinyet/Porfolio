import styled from 'styled-components';
import { accentColor } from '../variables';


const CurriculumStyles = styled.div`
    .cv-container {
        margin-left: 480px;
        margin-right: 50px;
        margin-bottom: 50px;
        border: 1px solid black;
        background-color: lightgray;
        h3 {
            letter-spacing: 10px;
            padding-top: 10px;
            padding-left: 10px;
            min-width: 300px;
            max-width: 300px;
            text-align: left;
        }
        li {
            list-style-type: none;
            width: 33%;              
            ::before {
                content: "✔"; 
                padding-right: 12px;
                color: ${accentColor};
            }
        }
        .cv-work-experience, .cv-education, .cv-languages, .cv-key-skills {
            display: flex;
            padding: 20px;
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
            .language-container {
                flex: 1;
            }
            .key-skills-list {
                flex: 4;
                .key-skills {
                    display: flex;
                    justify-content: flex-start;
                    padding: 0;
                    margin: 0;
                    }
                }
            }
        }
    }
`;

export default CurriculumStyles;