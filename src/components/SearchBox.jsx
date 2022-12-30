import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch, Link  } from 'react-router-dom';
import "./style.css";

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
              onChange={handleFilter}/>
          </Form>
        </Col>
          {filteredData.length !== 0 && (
        <Col className='searchCol'>
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return <div key={value.name}>
                
                <a className='dataItem'  href={value.link}><p>{value.name}</p></a>
                
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