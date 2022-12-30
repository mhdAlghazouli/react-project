import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes as Switch, Link  } from 'react-router-dom';
// import Home from './Home';
// import AdjustableBase from './AdjustableBase';
// import Pillows from './Pillows';
// import AdjustableBaseDetails from './AdjustableBaseDetails';
// import PillowDetails from './PillowDetails';
// import MemoryFoam from './MemoryFoam';
// import Hybrid from './Hybrid';
// import MemoryFoamDetails from './MemoryFoamDetails';
// import HybridDetails from './HybridDetails';
// import Springs from './Springs';
// import SpringsDetails from "./SpringsDetails";
// import Mattresses from './Mattresses';
// import Cart from './Cart';
import SearchBox from './SearchBox';
import searchData from "./searchData.json";
import "./style.css";

function CollapsibleExample() {

  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
        <Container >
          <Navbar.Brand as={Link} to={"/"}>ZzMattress</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <NavDropdown title="Mattresses" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/memory-foam"}>Memory Foam</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/hybrid"}>
                  Hybrid
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/springs"}>Springs</NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
              <Nav.Link as={Link} to={"/adjustable"}>Adjustable Base</Nav.Link>
              <Nav.Link as={Link} to={"/Pillows"}>Pillows</Nav.Link>
              <Nav.Link as={Link} to={"/cart"}><ShoppingCartIcon /></Nav.Link>
            </Nav>
          <SearchBox searchData={ searchData } />
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </div>
  );
}

export default CollapsibleExample;