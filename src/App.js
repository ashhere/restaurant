import React from 'react';
import './App.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ViewListIcon from '@material-ui/icons/ViewList';



import {
          BrowserRouter as Router ,
          Link,
          Route
        } from "react-router-dom";
import {Nav,Navbar , NavLink} from "react-bootstrap";        

import Home from "./component/Home"
import RestaurantList from "./component/RestaurantList";
import RestaurantDetail from "./component/RestaurantDetail";
import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantUpdate from "./component/RestaurantUpdate";
import RestaurantSearch from "./component/RestaurantSearch";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

function App() {
  return (
    <div>   
    <Router>

    <Navbar bg="light" expand="lg">
  <Link to = "/">Home <HomeOutlinedIcon/> </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

      {/* <Nav.Link href="/"><Link to = "/"><HomeOutlinedIcon/> Home</Link></Nav.Link> */}
      <Nav.Link href="/list"><Link to = "/list">List <ViewListIcon/></Link></Nav.Link>
      {/* <Nav.Link href="/detail"><Link to = "/detail">Detail</Link></Nav.Link> */}
      <Nav.Link href="/create"><Link to = "/create">Create <AddCircleOutlineIcon/></Link></Nav.Link>
      {/* <Nav.Link href="/update"><Link to = "/update/:id">Update</Link></Nav.Link> */}
      {/* <Nav.Link href="/search"><Link to = "/search">Search</Link></Nav.Link> */}
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     


      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/detail/:id">
        <RestaurantDetail />
      </Route>

      <Route path="/create">
        <RestaurantCreate />
      </Route>

      <Route exact path="/update/:id">
        <RestaurantUpdate />
      </Route>

      <Route path="/search">
        <RestaurantSearch />
      </Route>

      <Route path="/list">
        <RestaurantList />
      </Route>


    </Router>


    </div>

     )
}

export default App;
