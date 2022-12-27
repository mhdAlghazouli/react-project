import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./style.css"


const Home = () => {
  return ( 
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 slideImage"
            src="https://mlilyusa.com/wp-content/uploads/2021/08/side-sleeping.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='slideText'>Zz Mattress</h3>
            <p className='slideText'>With you every sleep of the way.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slideImage"
            src="https://mlilyusa.com/wp-content/uploads/2022/10/hero-image-sleeping-woman.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className='slideText'>Zz Mattress</h3>
            <p className='slideText'>Proudly Made in the USA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item bg="dark">
          <img
            className="d-block w-100 slideImage"
            src="https://mlilyusa.com/wp-content/uploads/2022/10/MadeInUSA-banner-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption >
            <h3 className='slideText'>Zz Mattress</h3>
            <p className='slideText'>
            Find the mattress of your dreams.
            </p>
          </Carousel.Caption >
        </Carousel.Item>
      </Carousel>

    
      <Row className='news'>
        <Col sm={6}>
          <div className='left-side'>
            <h6>RECENT NEWS</h6>
            <h2>Zz Mattress Gives Away 180 Mattresses</h2>
            <p>Zz Mattress was featured on CBS’ Daytime Emmy Award-winning talk show THE TALK following a promise to give 180 essential workers, volunteers and single parents a free Fusion Luxe queen sized mattress.</p>
            <Button variant="primary">Learn More</Button>
          </div>
        </Col>
        <Col sm={6}><div className='right-side'><img src="https://mlilyusa.com/wp-content/uploads/2020/06/2022-5-23_FusionLuxe_HS_Model_002_09-1536x1024.jpg" alt="" /></div></Col>
      </Row>

      <Row className="kids">
        <Col sm={4}>
          <div className='left-side '>
            
            <h2>Pay Over Time With Zz Mattress</h2>
            <p>Financing as low as 0% APR for 12 months plus lease-to-own plans.*</p>
            <Button variant="light" className='kidsBtn' style={{

              "color" : "#0275d8"
            }
            }>Learn More</Button>
          </div>
        </Col>
        <Col sm={8}><div className='right-side'><img src="https://mlilyusa.com/wp-content/uploads/2022/10/cta-block-images-koalifi.jpg" alt="" /></div></Col>
      </Row>
      
    </div>
  );
}

export default Home;