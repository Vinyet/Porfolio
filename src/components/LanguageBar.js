import React, { useState } from 'react';
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
    const [ language, setLanguage ] = useState();

    const handleSelectLanguage = e => {
        setLanguage(e.target.value);
    }

    return (
        <LanguageBarStyle>  
        <select value={language} onChange={handleSelectLanguage}>
            <option value='es'>ES</option>
            <option value='en'>EN</option>
        </select>
        </LanguageBarStyle>  
    )
}

export default LanguageBar;
