import React from 'react';
import styled from 'styled-components';
import Navbar from './components/navbar/NavbarSection';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import InfoSection  from './components/InfoSection/InfoSection';


import Contact from '../src/pages/ContactPage';
import HomePage from './pages/HomePage';
import OwnerPage from './pages/OwnerPage';
import ArticlePage from './pages/ArticlePage';
import ProfilePage from './pages/ProfilePage';
import Pricing from './pages/Pricing';
const Container=styled.div`
width:100%;
padding:0px;
margin:0px;
position:relative;
font-family: 'Comic Neue';
`
function App() {
  return (
    <Container>
      <Router>
        <Navbar>

        </Navbar>
        <Switch>
        <Route path="/infosection" component={InfoSection}></Route>
        <Route path='/Contact' component={Contact}></Route>
        <Route  path='/' exact component={HomePage}></Route>
        <Route path='/owner' component={OwnerPage}></Route>
        <Route path='/article' component={ArticlePage}></Route>
        <Route path='/desc' component={ProfilePage}></Route>
        <Route path='/pricing' component={Pricing}></Route>
        </Switch>
        
      </Router>
    

    </Container>
  )
}

export default App;
