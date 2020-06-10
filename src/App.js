import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import Theme from './customHooks/Theme';
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


function App() {
  return (
    <div>
     <Router>
      <Theme.Provider value={{Theme}}>
      <LanguageBar/>
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
        </Theme.Provider>
     </Router>
    </div>
  );
}




export default App;
