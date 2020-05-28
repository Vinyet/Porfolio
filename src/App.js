import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import Porfolio from './components/Porfolio/Porfolio';
import SobreMi from './components/SobreMi/SobreMi';
import Curriculum from './components/Curriculum/Curriculum';
import NotFound from './components/NotFound';
import './index.scss';


function App() {
  return (
    <div>
     <Router>
      <Header/>
       <Sidebar/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/porfolio" component={Porfolio}/>
          <Route path="/sobre-mi" component={SobreMi}/>
          <Route path="/cv" component={Curriculum}/>
          <Route path="/" component={NotFound}/>
          </Switch>
        <Footer/>
     </Router>
    </div>
  );
}



export default App;
