import React, { useState } from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Porfolio from './components/Porfolio';
import SobreMi from './components/SobreMi';
import Curriculum from './components/Curriculum';
import LanguageBar from './components/LanguageBar';
import NotFound from './components/NotFound';
import './index.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';


function App() {  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
            <GlobalStyles />
            <LanguageBar/>
            <button className="toggle-btn" onClick={toggleTheme}><img src="https://image.flaticon.com/icons/svg/107/107753.svg"></img></button>
            <Header/>
            <Sidebar/>
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/porfolio" component={Porfolio}/>
                <Route path="/sobre-mi" component={SobreMi}/>
                <Route path="/cv" component={Curriculum}/>
                <Route path="/" component={NotFound}/>
                </Switch>
            <Footer>&copy; Vinyet Escribano, 2020</Footer>
            </>
        </ThemeProvider>
     </Router>
    </div>
  );
}

export default App;

