import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";




const Pillows = () => {
  const [ pillowDB, setPillowDB ] = useState(null);

  useEffect(() => {
    fetch("https://mhdalghazouli.github.io/data-of-react-project/")
    .then(res => res.json())
    .then(data => {
      console.log(data[0].pillows)
      setPillowDB(data[0].pillows)
    })
  },[]);



  return ( 
    <div>
      <div style={{
        "margin" : "30px"
      }} className='d-flex flex-column justify-content-center align-items-center'>
        
        <h2>Pillows</h2>
        <p>Sweet dreams in the making.</p>
        
      </div>
      {pillowDB && pillowDB.map(pillow => (
        
        <Link to={`/Pillows/${pillow.id}`} style={{
          "textDecoration": "none",
          "color": "black"
        }} key={pillow.id}>
          <Container  >
          

            <Card style={{
              "marginTop" : "15px",
              "boxShadow" : "0 4px 8px 0 rgba(0, 0, 0, 0.4)"
            }} className="cardList">
              <Row>
                <Col md={4}>
                  <Image src={pillow.photo} fluid/>
                </Col>
                <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "start"}}>
                  
                    <Card.Title style={{"color" : "#222"}}>
                      {pillow.name}
                    </Card.Title>
                    <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                      {pillow.title}
                    </Card.Text>
                </Col>
              </Row>
            </Card>
          
            
          </Container>
        </Link>
      ))}
      
      

    </div>
   );
}
 
export default Pillows;