import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes as Switch, Link  } from 'react-router-dom';
import Home from './Home';
import AdjustableBase from './AdjustableBase';
import Pillows from './Pillows';
import AdjustableBaseDetails from './AdjustableBaseDetails';
import PillowDetails from './PillowDetails';
import MemoryFoam from './MemoryFoam';
import Hybrid from './Hybrid';
import MemoryFoamDetails from './MemoryFoamDetails';
import HybridDetails from './HybridDetails';
import Mattresses from './Mattresses';
import SearchBox from './SearchBox';
import searchData from "./searchData.json";
import "./style.css";

function CollapsibleExample() {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>ZzMattress</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <NavDropdown title="Mattresses" id="collasible-nav-dropdown">
                <NavDropdown.Item href="./memory-foam">Memory Foam</NavDropdown.Item>
                <NavDropdown.Item href="./hybrid">
                  Hybrid
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Springs</NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
              <Nav.Link as={Link} to={"/adjustable-base"}>Adjustable Base</Nav.Link>
              <Nav.Link as={Link} to={"/Pillows"}>Pillows</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"/>
            <Button variant="light" style={{"color": "#0275d8"}}>Search</Button>
          </Form> */}
          <SearchBox searchData={ searchData } />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/adjustable-base' element={<AdjustableBase />} />
          <Route path='/Pillows' element={<Pillows />} />
          <Route path='/adjustable-base/:id' element={<AdjustableBaseDetails />}/>
          <Route path='/Pillows/:id' element={<PillowDetails />}/>
          <Route path='/memory-foam' element={<MemoryFoam />} />
          <Route path='/memory-foam/:id' element={<MemoryFoamDetails />} />
          <Route path='/hybrid' element={<Hybrid />} />
          <Route path='/hybrid/:id' element={<HybridDetails />} />
          <Route path='/mattresses' element={<Mattresses />}/>
        </Switch>
      </div>

    </Router>
  );
}

export default CollapsibleExample;