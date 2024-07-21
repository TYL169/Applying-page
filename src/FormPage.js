import React from 'react';
import { Form, Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
function FormPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };

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

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', width: '100%' }}>
        <h2 style={{
          backgroundColor: 'black',
          color: 'white',
          width: '60%',
          height: '127px',
          margin: '30px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '28px',
          fontSize: '50px',
          textAlign: 'center', 
        }}>Join Computer Club</h2>
      </div>

      <Form style={{ width: '100%', marginBottom: '20px' }} onSubmit={handleSubmit}>
        <Row className="justify-content-center" style={{ width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Col xs={12} md={8} lg={6}>
            <Form.Group controlId="formGmail">
              <Form.Label style={{ color: 'white' }}></Form.Label>
              <Form.Control type="email" placeholder="GMAIL:" 
                style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginLeft: '-25%' }}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label style={{ color: 'white' }}></Form.Label>
              <Form.Control type="password" placeholder="PASSWORD:" 
                style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)',width: '150%', height: 50, borderRadius: 28,marginLeft: '-25%' }}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="ชื่อ:" 
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginLeft: '-51%' }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formStudentId">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="รหัสนักศึกษา:" 
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginRight: '-40%'}}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Col>
                <Form.Group controlId="formFaculty">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="คณะ:"  
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginLeft: '-51%' }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formDepartment">
                  <Form.Label style={{ color: 'white' }}></Form.Label>
                  <Form.Control type="text" placeholder="สาขา:" 
                    style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '150%', height: 50, borderRadius: 28,marginRight: '-40%' }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formReason">
              <Form.Label style={{ color: 'white' }}></Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="เหตุผลที่อยากเข้าชมรม:" 
                style={{ background: 'linear-gradient(to bottom, #D9D9D9, #737373)', width: '149%', height: 150, borderRadius: 28,marginLeft:'-25%'}}
              />
            </Form.Group>

            <Button variant="dark" type="submit" 
              style={{ marginTop: '20px', backgroundColor: '#EC7D30', color: '#000000', borderRadius: 16,fontSize:25 }}>SUBMIT</Button>
          </Col>
        </Row>
      </Form>

      <Footer/>
    </Container>
  );
}

export default FormPage;
