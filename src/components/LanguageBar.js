import React from 'react';
import styled from 'styled-components';


const LanguageBarStyle = styled.div`
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    position: fixed;
    p {
        display: inline-block;
        letter-spacing: 3px;
        right: 0;
        margin: 8px;
        padding-right: 25px;
        position: fixed;
    }
`;

const LanguageBar = () => {
    return (
        <LanguageBarStyle>
            <p><a href="/">ES</a> / <a href="/">EN</a></p>
        </LanguageBarStyle>
    )
}

export default LanguageBar;