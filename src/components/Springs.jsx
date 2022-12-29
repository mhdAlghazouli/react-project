import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";




const Springs = () => {
  const [ springsDB, setSpringsDB ] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/springs")
    .then(res => res.json())
    .then(data => {
      setSpringsDB(data)
    })
  },[]);
 


  return ( 
    <div>
      <div style={{
        "margin" : "30px"
      }}>
        
        <h2>Springs Mattresses</h2>
        <p>Relax, we’ve got your back. And your side and stomach, too.</p>
        
      </div>
      {springsDB && springsDB.map(mattress => (
        
        <Link to={`/springs/${mattress.id}`} style={{
          "textDecoration": "none",
          "color": "black"
        }} key={mattress.id}>
          <Container  >
          

            <Card style={{
              "marginTop" : "15px",
              "boxShadow" : "0 4px 8px 0 rgba(0, 0, 0, 0.4)"
            }} className="cardList">
              <Row>
                <Col md={4}>
                  <Image src={mattress.photo} fluid/>
                </Col>
                <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "start"}}>
                  
                    <Card.Title style={{"color" : "#222"}}>
                      {mattress.name}
                    </Card.Title>
                    <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                      {mattress.title}
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
 
export default Springs;