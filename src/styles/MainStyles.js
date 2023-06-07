import styled from 'styled-components';
import {accentColor} from '../variables';


const MainStyles = styled.div`
    .main {
        margin-left: 500px;
        margin-bottom: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 {
            background-color: ${accentColor};
            color: #fff;
            text-align: center;
            padding: 20px;
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
        }
        .skills-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
            .skills-box-row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-items: center;
                margin-bottom: 20px;
                padding: 30px;
                .skill {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 300px;
                    height: 300px;
                    border-radius: 5px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    margin: 10px;
                    padding: 20px;
                    img {
                        margin-bottom: 10px;
                        width: 100px;
                    }
                    p {
                        text-align: center;
                        line-height: 20px;
                    }
                }
            }
        }
        .learning-box-row {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            margin-bottom: 30px;
            .skill {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 200px;
                background-color: #fff;
                border-radius: 50%;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                margin: 10px;
                padding: 20px;
            }
            img {
                width: 80px;
            }
        }
    }
`;

export default MainStyles;