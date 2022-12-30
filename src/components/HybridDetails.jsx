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




const HybridDetails = () => {

  const { id } = useParams();
  const [hybridDetailsData, setHybridDetailsData] = useState(null)
  const [hybridPrice, setHybridPrice] = useState("")
  const [hybridSize, setHybridSize] = useState("");
  
  useEffect(() => {

    for(let i = 0 ; i < data.hybrid.length; i++ ){
      
      if(data.hybrid[i].id === Number(id)){
        setHybridDetailsData(data.hybrid[i])
      }
    }
  },[])

  

  function handleSubmit(e) {
    setHybridSize(e.target.value)
    if(e.target.value === "Twin"){
      setHybridPrice(hybridDetailsData.price[0])
    }else if(e.target.value === "Twin XL"){
      setHybridPrice(hybridDetailsData.price[1])
    }else if(e.target.value === "Full"){
      setHybridPrice(hybridDetailsData.price[2])
    }else if(e.target.value === "Queen"){
      setHybridPrice(hybridDetailsData.price[3])
    }else if(e.target.value === "King"){
      setHybridPrice(hybridDetailsData.price[4])
    }else if(e.target.value === "California King"){
      setHybridPrice(hybridDetailsData.price[5])
    }
    return hybridPrice
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
      name : hybridDetailsData.name,
      id : hybridDetailsData.id,
      price: hybridPrice,
      size: hybridSize,
      photo: hybridDetailsData.photo
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
              <Image src={hybridDetailsData && hybridDetailsData.photo} alt="under working" fluid/>
            </Col>
            <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "start", "alignItems": "start","marginTop" : "5px"}}>
              <Card.Title style={{"color" : "#222"}}>
                {hybridDetailsData && hybridDetailsData.name}
              </Card.Title>
              
              <Rating name="read-only" value={hybridDetailsData && hybridDetailsData.rate} readOnly precision={0.5}/>

              <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                {hybridDetailsData && hybridDetailsData.title}
              </Card.Text>

              <div style={{"display": "flex", "marginBottom": "5px"}}>
                <Button style={{"marginRight" : "3px"}} size="sm" value={hybridDetailsData && hybridDetailsData.size[0]} onClick={(e) => handleSubmit(e)}>{hybridDetailsData && hybridDetailsData.size[0]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={hybridDetailsData && hybridDetailsData.size[1]} onClick={(e) => handleSubmit(e)}>{hybridDetailsData && hybridDetailsData.size[1]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={hybridDetailsData && hybridDetailsData.size[2]} onClick={(e) => handleSubmit(e)}>{hybridDetailsData && hybridDetailsData.size[2]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={hybridDetailsData && hybridDetailsData.size[3]} onClick={(e) => handleSubmit(e)}>{hybridDetailsData && hybridDetailsData.size[3]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={hybridDetailsData && hybridDetailsData.size[4]} onClick={(e) => handleSubmit(e)}>{hybridDetailsData && hybridDetailsData.size[4]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={hybridDetailsData && hybridDetailsData.size[5]} onClick={(e) => handleSubmit(e)}>{hybridDetailsData && hybridDetailsData.size[5]}</Button>
              </div>
              <div>
                <h5>Price: ${hybridPrice}</h5>
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
          <p>{hybridDetailsData && hybridDetailsData.des}</p>
        </div>
      </Container>
    </div>
   );
}
 
export default HybridDetails;