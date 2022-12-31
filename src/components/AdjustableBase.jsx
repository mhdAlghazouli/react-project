import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";





const AdjustableBase = () => {
  const [ adjustableDB, setAdjustableDB ] = useState(null);

  useEffect(() => {
    fetch("https://mhdalghazouli.github.io/data-of-react-project/")
    .then(res => res.json())
    .then(data => {
      
      setAdjustableDB(data[0].adjustable)
    })
  },[adjustableDB]);
  
  return ( 
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{
        "margin" : "30px"
      }}>
        
        <h2>Adjustable Bases</h2>
        <p>Position yourself for optimal sleep at the touch of a button.</p>
        
      </div>
      {adjustableDB && adjustableDB.map(adjustable => (
        
        <Link to={`/adjustable/${adjustable.id}`} style={{
          "textDecoration": "none",
          "color": "black"
        }} key={adjustable.id}>
          <Container  >
          

            <Card style={{
              "marginTop" : "15px",
              "boxShadow" : "0 4px 8px 0 rgba(0, 0, 0, 0.4)"
            }} className="cardList">
              <Row>
                <Col md={4}>
                  <Image src={adjustable.photo} fluid/>
                </Col>
                <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "start"}}>
                  
                    <Card.Title style={{"color" : "#222"}}>
                      {adjustable.name}
                    </Card.Title>
                    <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                      {adjustable.title}
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
 
export default AdjustableBase;