import styled from 'styled-components';


const ToggleStyles = styled.label`
    .check-box {
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px 20px;
    }
    input[type="checkbox"] {
        position: relative;
        appearance: none;
        width: 50px;
        height: 20px;
        background: #ccc;
        border-radius: 50px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.4s;
        &:checked {
        background: #7da6ff;
        &::after {
            position: absolute;
            content: "";
            width: 20px;
            height: 20px;
            top: 0;
            left: 0;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            transform: scale(1.1);
            transition: 0.4s;
        }
    }
    &:checked::after {
    left: 50%;
    }
}
`;

export default ToggleStyles;