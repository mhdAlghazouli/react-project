import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';




const Cart = () => {
  const [cartData, setCartData] = useState([]);
  let sum = 0;
  

 let data = JSON.parse(localStorage.getItem("cart"));
 
 useEffect(() => {
   setCartData(data);
  },[]);

  for(let i = 0; i < cartData.length; i++){
    sum += Number(cartData[i].price)
  }

  const handleDelete = (e, id) => {
    const filtered = cartData.filter(el => el.id !== id);
    setCartData(filtered);
    localStorage.setItem('cart', JSON.stringify(filtered));
  }

  function handleCheckOut() {
    alert("your payment has been received, thanks for shopping with us");
    localStorage.setItem('cart', "[]");
    window.location.href = "/"
  }
  
  
  return ( 
    <div className='d-flex flex-column justify-content-center align-items-center' >
      {cartData.length===0  ?<p>Oops...  Your Cart is Empty</p>: <div> {cartData.map(el =>( 
      <div  key={el.id} >
        <Card style={{
              "marginTop" : "15px",
              "boxShadow" : "0 4px 8px 0 rgba(0, 0, 0, 0.4)"
            }} >
          <Row>
            <Col md={4}>
              <Image src={el && el.photo} alt="under working" fluid/>
            </Col>
            <Col md={8} style={{"display" : "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center","marginTop" : "5px"}}>
              <Card.Title style={{"color" : "#222"}}>
                {el && el.name}
              </Card.Title>
              <Card.Text>
                Size: {el.size}
              </Card.Text>
              <Card.Text>
                Price: ${el.price}
              </Card.Text>

              <Button variant="danger" value={el.id} onClick={(e,id) => handleDelete(e.target.value, el.id)}>Remove</Button>
            </Col>
          </Row>
        </Card>
        
      </div>
       
        )) }<div className='d-flex flex-column justify-content-center align-items-center'> <Button  style={{"marginTop": "15px", "marginBottom": "15px"}} onClick={handleCheckOut}>Total is:{<span className="text-danger"> ${sum}</span>} Click to checkout</Button></div> </div>    }
        
        
    </div>
   );
}
 
export default Cart;