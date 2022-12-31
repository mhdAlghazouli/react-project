import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Rating from '@mui/material/Rating';
import data from "./adjustable.json"



const PillowDetails = () => {

  const { id } = useParams();
  const [pillowDetailData, setPillowDetailData] = useState(null)
  const [pillowPrice, setPillowPrice] = useState("")
  const [pillowSize, setPillowSize] = useState("")
  
  useEffect(() => {

    for(let i = 0 ; i < data.pillows.length; i++ ){
      
      if(data.pillows[i].id === Number(id)){
        setPillowDetailData(data.pillows[i])
      }
    }
  },[])
 

  function handleSubmit(e) {
    setPillowSize(e.target.value)
    if(e.target.value === "Classic Standard"){
      setPillowPrice(pillowDetailData.price[0])
    }else if(e.target.value === "Classic Thick"){
      setPillowPrice(pillowDetailData.price[1])
    }
    
    return pillowPrice
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
      name : pillowDetailData.name,
      id: pillowDetailData.id,
      price: pillowPrice,
      size: pillowSize,
      photo: pillowDetailData.photo
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
              <Image src={pillowDetailData && pillowDetailData.photo} alt="under working" fluid/>
            </Col>
            <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "start", "alignItems": "start","marginTop" : "5px"}}>
              <Card.Title style={{"color" : "#222"}}>
                {pillowDetailData && pillowDetailData.name}
              </Card.Title>
              
              <Rating name="read-only" value={pillowDetailData && pillowDetailData.rate} readOnly precision={0.5}/>

              <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                {pillowDetailData && pillowDetailData.title}
              </Card.Text>

              <div style={{"display": "flex", "marginBottom": "5px"}}>
                <Button style={{"marginRight" : "3px"}} size="sm" value={pillowDetailData && pillowDetailData.size[0]} onClick={(e) => handleSubmit(e)}>{pillowDetailData && pillowDetailData.size[0]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={pillowDetailData && pillowDetailData.size[1]} onClick={(e) => handleSubmit(e)}>{pillowDetailData && pillowDetailData.size[1]}</Button>
              </div>
              <div>
                <h5>Price: ${pillowPrice}</h5>
              </div>
              <div style={{"marginBottom": "5px"}}>
                <Button onClick={cartHandle}>Add to cart</Button>
              </div>
            </Col>
          </Row>
        </Card>
        <div style={{"marginTop": "15px"}} className='d-flex flex-column justify-content-center align-items-center'>
          <Button onClick={handleSubmit2}>More Details</Button>
        </div>
        <div style={{"marginTop": "15px", "display": "none"}} id="hiddenDiv">
          <p>{pillowDetailData && pillowDetailData.des}</p>
        </div>
      </Container>
    </div>
   );
}
 
export default PillowDetails;