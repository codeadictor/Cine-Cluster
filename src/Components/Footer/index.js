import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsLinkedin, BsGithub, BsFacebook, BsYoutube, BsWebsite } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            
                            <ul className='socialIconsList'>
                      
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/codeadictor-pranshu" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        
                        
                        <li>
                            <a rel="noreferrer" href="https://github.com/codeadictor" target="_blank">
                                <BsGithub />
                            </a>
                        </li>

                          <li>
                            <a rel="noreferrer" href="https://www.facebook.com/codeadictor" target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
        
                        <li>
                            <a rel="noreferrer" href="https://www.youtube.com/@Supportive_Soul" target="_blank">
                                <BsYoutube />
                            </a>
                        </li> 
                        
                        
                    </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Learn Coding With Codeadictor , 2023. Developed and Designed  by <a href="https://www.linkedin.com/in/codeadictor-pranshu/" target="_blank" rel="noreferrer">Pranshu Yadav</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;
