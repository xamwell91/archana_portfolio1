import React from "react";
import Container from 'react-bootstrap/Container';


const  Home = () => {
  return (
    <Container className="home tc">
      <div className="navy tc">
        <p className="title tc animate__animated animate__zoomInDown">
          {/**Change with your name */}
          <span>Hi, my name is <span className="name">Archana Limbu Magar</span></span>
        </p>
        <p className="subTitle tc animate__animated animate__zoomInDown">
          {/**Write what type of developer you are */}
          <span>I'm a <span className="profession">Beautician and lovely wife of Mr. Samuel Thapa Magar</span></span>
        </p>
      </div>
    </Container>
  );
}

export default Home