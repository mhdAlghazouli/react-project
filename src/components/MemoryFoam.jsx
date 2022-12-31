import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";




const MemoryFoam = () => {
  const [ memoryFoamDB, setMemoryFoamDB ] = useState(null);

  useEffect(() => {
    fetch("https://mhdalghazouli.github.io/data-of-react-project/")
    .then(res => res.json())
    .then(data => {
      setMemoryFoamDB(data[0]["memory-foam"])
    })
  },[]);
  


  return ( 
    <div>
      <div style={{
        "margin" : "30px"
      }} className='d-flex flex-column justify-content-center align-items-center'>
        
        <h2>Memory foam Mattresses</h2>
        <p>Relax, we’ve got your back. And your side and stomach, too.</p>
        
      </div>
      {memoryFoamDB && memoryFoamDB.map(mattress => (
        
        <Link to={`/memory-foam/${mattress.id}`} style={{
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
 
export default MemoryFoam;