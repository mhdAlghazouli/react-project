import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Rating from '@mui/material/Rating';



const SpringsDetails = () => {

  const { id } = useParams();
  const [springsDetailsData, setSpringsDetailsData] = useState(null)
  const [springsPrice, setSpringsPrice] = useState("")
  const [springsSize, setSpringsSize] = useState("")
  
  useEffect(() => {
    fetch("https://zzmattressandmore.herokuapp.com/springs/" + id)
    .then(res => res.json())
    .then(data => {
      setSpringsDetailsData(data)
    })
  },[])
 

  function handleSubmit(e) {
    setSpringsSize(e.target.value)
    if(e.target.value === "Twin"){
      setSpringsPrice(springsDetailsData.price[0])
    }else if(e.target.value === "Twin XL"){
      setSpringsPrice(springsDetailsData.price[1])
    }else if(e.target.value === "Full"){
      setSpringsPrice(springsDetailsData.price[2])
    }else if(e.target.value === "Queen"){
      setSpringsPrice(springsDetailsData.price[3])
    }else if(e.target.value === "King"){
      setSpringsPrice(springsDetailsData.price[4])
    }else if(e.target.value === "California King"){
      setSpringsPrice(springsDetailsData.price[5])
    }
    return springsPrice
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
      name : springsDetailsData.name,
      id: springsDetailsData.id,
      price: springsPrice,
      size: springsSize,
      photo: springsDetailsData.photo
    }
    if(localStorage.getItem('cart') == null){
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
              <Image src={springsDetailsData && springsDetailsData.photo} alt="under working" fluid/>
            </Col>
            <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "start", "alignItems": "start","marginTop" : "5px"}}>
              <Card.Title style={{"color" : "#222"}}>
                {springsDetailsData && springsDetailsData.name}
              </Card.Title>
              
              <Rating name="read-only" value={springsDetailsData && springsDetailsData.rate} readOnly precision={0.5}/>

              <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                {springsDetailsData && springsDetailsData.title}
              </Card.Text>

              <div style={{"display": "flex", "marginBottom": "5px"}}>
                <Button style={{"marginRight" : "3px"}} size="sm" value={springsDetailsData && springsDetailsData.size[0]} onClick={(e) => handleSubmit(e)}>{springsDetailsData && springsDetailsData.size[0]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={springsDetailsData && springsDetailsData.size[1]} onClick={(e) => handleSubmit(e)}>{springsDetailsData && springsDetailsData.size[1]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={springsDetailsData && springsDetailsData.size[2]} onClick={(e) => handleSubmit(e)}>{springsDetailsData && springsDetailsData.size[2]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={springsDetailsData && springsDetailsData.size[3]} onClick={(e) => handleSubmit(e)}>{springsDetailsData && springsDetailsData.size[3]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={springsDetailsData && springsDetailsData.size[4]} onClick={(e) => handleSubmit(e)}>{springsDetailsData && springsDetailsData.size[4]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={springsDetailsData && springsDetailsData.size[5]} onClick={(e) => handleSubmit(e)}>{springsDetailsData && springsDetailsData.size[5]}</Button>
              </div>
              <div>
                <h5>Price: ${springsPrice}</h5>
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
          <p>{springsDetailsData && springsDetailsData.des}</p>
        </div>
      </Container>
    </div>
   );
}
 
export default SpringsDetails;