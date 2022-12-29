import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Rating from '@mui/material/Rating';




const AdjustableBaseDetails = () => {

  const { id } = useParams();
  const [adjDetailData, setAdjDetailData] = useState(null)
  const [adjPrice, setAdjPrice] = useState("")
  const [adjSize, setAdjSize] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3001/adjustable/" + id)
    .then(res => res.json())
    .then(data => {
      setAdjDetailData(data)
    })
  },[])
  

  function handleSubmit(e) {
    setAdjSize(e.target.value)
    if(e.target.value === "Twin XL"){
      setAdjPrice(adjDetailData.price[0])
    }else if(e.target.value === "Full"){
      setAdjPrice(adjDetailData.price[1])
    }
    else if(e.target.value === "Queen"){
      setAdjPrice(adjDetailData.price[2])
    }
    else if(e.target.value === "King"){
      setAdjPrice(adjDetailData.price[3])
    }
    return adjPrice
  }
  
  function handleSubmit2() {
    if(document.getElementById("hiddenDiv").style.display === "block"){

      document.getElementById("hiddenDiv").style.display = "none"
    }else{
      document.getElementById("hiddenDiv").style.display = "block"
    }
  }

  function cartHandle() {
    const newCartData = {
      name : adjDetailData.name,
      price: adjPrice ,
      id: adjDetailData.id,
      size: adjSize,
      photo : adjDetailData.photo
      
    }
   
    if(localStorage.getItem('cart') == null  ){
      localStorage.setItem('cart', '[]');
    }
    
    let oldCartData = JSON.parse(localStorage.getItem('cart'));
    if(!oldCartData.find(i => i.id === newCartData.id)){
      oldCartData.push(newCartData);
      localStorage.setItem('cart', JSON.stringify(oldCartData));
      alert('added to your cart')
    }else{
      alert('already in your cart')
    }
      

  }

  return ( 
    <div>
      <Container>
        <Card style={{
              "marginTop" : "15px",
              "boxShadow" : "0 4px 8px 0 rgba(0, 0, 0, 0.4)"
            }} >
          <Row>
            <Col md={4}>
              <Image src={adjDetailData && adjDetailData.photo} alt="under working" fluid/>
            </Col>
            <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "start", "alignItems": "start","marginTop" : "5px"}}>
              <Card.Title style={{"color" : "#222"}}>
                {adjDetailData && adjDetailData.name}
              </Card.Title>
              
              <Rating name="read-only" value={adjDetailData && adjDetailData.rate} readOnly precision={0.5}/>

              <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                {adjDetailData && adjDetailData.title}
              </Card.Text>

              <div style={{"display": "flex", "marginBottom": "5px"}}>
                <Button style={{"marginRight" : "3px"}} size="sm" value={adjDetailData && adjDetailData.size[0]} onClick={(e) => handleSubmit(e)}>{adjDetailData && adjDetailData.size[0]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={adjDetailData && adjDetailData.size[1]} onClick={(e) => handleSubmit(e)}>{adjDetailData && adjDetailData.size[1]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={adjDetailData && adjDetailData.size[2]} onClick={(e) => handleSubmit(e)}>{adjDetailData && adjDetailData.size[2]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={adjDetailData && adjDetailData.size[3]} onClick={(e) => handleSubmit(e)}>{adjDetailData && adjDetailData.size[3]}</Button>
              </div>
              <div>
                <h5>Price: ${adjPrice}</h5>
              </div>
              <div style={{"marginBottom": "5px"}}>
                <Button onClick={cartHandle}>Add to cart</Button>
              </div>
            </Col>
          </Row>
        </Card>
        <div style={{"marginTop": "15px"}}>
          <Button onClick={handleSubmit2}>More Details</Button>
        </div>
        <div style={{"marginTop": "15px", "display": "none"}} id="hiddenDiv">
          <ul style={{"listStyle": "none", "color": "#666"}}>
            <li><b>{adjDetailData && adjDetailData.des[0]}</b></li>
            <li><b>{adjDetailData && adjDetailData.des[1]}</b></li>
            <li><b>{adjDetailData && adjDetailData.des[2]}</b></li>
          </ul>
        </div>
      </Container>
    </div>
   );
}
 
export default AdjustableBaseDetails;