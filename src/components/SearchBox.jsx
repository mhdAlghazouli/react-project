import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import "./style.css"
import { BrowserRouter as Router, Route, Routes as Switch, Link  } from 'react-router-dom';

const SearchBox = ({ searchData }) => {

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const wordEnter = event.target.value;
    const newFilter = searchData.filter((value) => {
      return value.name.toLowerCase().includes(wordEnter.toLowerCase());
    });
    if(wordEnter === "") {
      setFilteredData([])
    }else{
      setFilteredData(newFilter)
    }
   
    
  }
  
  return ( 
    <div >
      <Row className='search-container'>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleFilter(e)}/>
          </Form>
        </Col>
          {filteredData.length !== 0 && (
        <Col className='searchCol'>
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return <div key={value.name}>
                
                <Nav.Link className='dataItem'  as={Link} to={value.link} onClick={() => setFilteredData([])} ><p>{value.name}</p></Nav.Link>
                
                </div> 
            })}
          </div>
        </Col>
          )}
      </Row>

      
      
      
      
    </div>

  );
}

export default SearchBox;