import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';

function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ background: 'linear-gradient( #EC7D30, #3F3F3F,#05060A)',padding:0, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <Navbar bg="black" variant="dark" expand="lg" style={{ width: '100%' }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
             <div className="navbar-brand dropdown">
              <button className="btn navbar-brand dropdown-toggle no-arrow" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-bars fa-xl"></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-center" style={{ fontSize: '24px' }} href="#">ACTIVITY & INFORMATION</a></li>
                <li><a className="dropdown-item text-center" style={{ fontSize: '24px' }} href="#">VISION</a></li>
                <li><a className="dropdown-item text-center" style={{ fontSize: '24px' }} href="#">APPLYING</a></li>
                <li><a className="dropdown-item text-center" style={{ fontSize: '24px' }} href="#">ACCOMPLISHMENT</a></li>
                <li><a className="dropdown-item text-center" style={{ fontSize: '24px' }} href="#">CONTACT</a></li>
              </ul>
             </div>
            </Nav>
           <Navbar.Brand href="#" className="mx-auto" >
            <img src={logo} style={{ height: 40 }} alt="logo" />
           </Navbar.Brand>
          </Navbar.Collapse>
      </Navbar>

      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px 30px', borderRadius: '10px', textAlign: 'center', marginTop: '20px',width:500,height:300,boxShadow:'initial' }}>
        <h1 style={{ color: '#FF4500', padding: '30px 30px' }}>-SUBMITED-</h1>
        <h2 >THANK YOU </h2>
        <h2 > FOR APPLYING!!!</h2>
      </div>
      
      <Button variant="dark" type="submit" 
              style={{ marginTop: '0px', backgroundColor: '#EC7D30', color: '#000000', borderRadius: 16, fontSize:25 }} onClick={() => navigate('/')}>RETURN</Button>
      
      
      <Footer/>
    </Container>
  );
}

export default ThankYouPage;

