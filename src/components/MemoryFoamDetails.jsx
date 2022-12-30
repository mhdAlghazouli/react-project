import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Rating from '@mui/material/Rating';



const MemoryFoamDetails = () => {

  const { id } = useParams();
  const [memoryFoamDetailsData, setMemoryFoamDetailsData] = useState(null)
  const [memoryFoamPrice, setMemoryFoamPrice] = useState("");
  const [memoryFoamSize, setMemoryFoamSize] = useState('')
  
  useEffect(() => {
    fetch("https://zzmattressandmore.herokuapp.com/memory-foam/" + id)
    .then(res => res.json())
    .then(data => {
      setMemoryFoamDetailsData(data)
    })
  },[]);

  function handleSubmit(e) {
    setMemoryFoamSize(e.target.value)
    if(e.target.value === "Twin"){
      setMemoryFoamPrice(memoryFoamDetailsData.price[0])
    }else if(e.target.value === "Twin XL"){
      setMemoryFoamPrice(memoryFoamDetailsData.price[1])
    }else if(e.target.value === "Full"){
      setMemoryFoamPrice(memoryFoamDetailsData.price[2])
    }else if(e.target.value === "Queen"){
      setMemoryFoamPrice(memoryFoamDetailsData.price[3])
    }else if(e.target.value === "King"){
      setMemoryFoamPrice(memoryFoamDetailsData.price[4])
    }else if(e.target.value === "California King"){
      setMemoryFoamPrice(memoryFoamDetailsData.price[5])
    }
    return memoryFoamPrice
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
      name : memoryFoamDetailsData.name,
      id: memoryFoamDetailsData.id,
      price: memoryFoamPrice,
      size: memoryFoamSize,
      photo: memoryFoamDetailsData.photo
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
              <Image src={memoryFoamDetailsData && memoryFoamDetailsData.photo} alt="under working" fluid/>
            </Col>
            <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "start", "alignItems": "start","marginTop" : "5px"}}>
              <Card.Title style={{"color" : "#222"}}>
                {memoryFoamDetailsData && memoryFoamDetailsData.name}
              </Card.Title>
              
              <Rating name="read-only" value={memoryFoamDetailsData && memoryFoamDetailsData.rate} readOnly precision={0.5}/>

              <Card.Text style={{"textAlign": "left", "color" : "#666"}}>
                {memoryFoamDetailsData && memoryFoamDetailsData.title}
              </Card.Text>

              <div style={{"display": "flex", "marginBottom": "5px"}}>
                <Button style={{"marginRight" : "3px"}} size="sm" value={memoryFoamDetailsData && memoryFoamDetailsData.size[0]} onClick={(e) => handleSubmit(e)}>{memoryFoamDetailsData && memoryFoamDetailsData.size[0]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={memoryFoamDetailsData && memoryFoamDetailsData.size[1]} onClick={(e) => handleSubmit(e)}>{memoryFoamDetailsData && memoryFoamDetailsData.size[1]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={memoryFoamDetailsData && memoryFoamDetailsData.size[2]} onClick={(e) => handleSubmit(e)}>{memoryFoamDetailsData && memoryFoamDetailsData.size[2]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={memoryFoamDetailsData && memoryFoamDetailsData.size[3]} onClick={(e) => handleSubmit(e)}>{memoryFoamDetailsData && memoryFoamDetailsData.size[3]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={memoryFoamDetailsData && memoryFoamDetailsData.size[4]} onClick={(e) => handleSubmit(e)}>{memoryFoamDetailsData && memoryFoamDetailsData.size[4]}</Button>
                <Button style={{"marginRight" : "3px"}} size="sm" value={memoryFoamDetailsData && memoryFoamDetailsData.size[5]} onClick={(e) => handleSubmit(e)}>{memoryFoamDetailsData && memoryFoamDetailsData.size[5]}</Button>
              </div>
              <div>
                <h5>Price: ${memoryFoamPrice}</h5>
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
          <p>{memoryFoamDetailsData && memoryFoamDetailsData.des}</p>
        </div>
      </Container>
    </div>
   );
}
 
export default MemoryFoamDetails;