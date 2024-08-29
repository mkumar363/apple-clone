import React from "react";
import styled from "styled-components";
import three from '../assets/three.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscription = () => {
  const notify =()=>toast.info('Under Construction ....', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "colored",
    
    });

  
  return (
    <Container>
      <div className="big_container">
        <div className="logo_container">
          <img
            className="apple_logo"
            src={three}
            alt="logo"
          />
        </div>

        <div className="plan_container">
        <div className="plans" style={{
  marginTop: "10px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  borderBottomLeftRadius: "15px",
  borderBottomRightRadius: "15px"
}}>

            <h2 style={{marginTop:"10px"}}>Voice Plan</h2>
            <h3>$4.99/month</h3>
            <hr />
            <p>1 person</p>
            <p>Siri on Apple device</p>
            <p>Songs,playlists,stations</p>
            <p>All Apple devices</p>
            <button style={{
  backgroundColor: "red",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer"
}} onClick={notify}>Buy</button>
          </div>

          <div className="plans" style={{
  marginTop: "10px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  borderBottomLeftRadius: "15px",
  borderBottomRightRadius: "15px"
}}>
            <h2 style={{marginTop:"10px"}}>Individual Plan</h2>
            <h3>$9.99/month</h3>
            <hr />
            <p>1 person</p>
            <p>Siri on Apple device</p>
            <p>Songs,playlists,stations,videos</p>
            <p>All Apple devices + supported </p>
           <button style={{
  backgroundColor: "red",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer"
}} onClick={notify}>Buy</button>

          </div>

          <div className="plans" style={{
  marginTop: "10px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  borderBottomLeftRadius: "15px",
  borderBottomRightRadius: "15px"
}}>
            <h2 style={{marginTop:"10px"}}>Family Plan</h2>
            <h3>$14.99/month</h3>
            <hr />
            <p>6 people</p>
            <p>Siri on Apple device</p>
            <p>Songs,playlists,stations,videos</p>
            <p>All Apple devices + supported</p>
            <button style={{
  backgroundColor: "red",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer"
}} onClick={notify}>Buy</button>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;

const Container = styled.div`
  position: fixed;
  width: 90%;
  height: 87vh;
  ${'' /* left: 20%;
  top: 92px; */}
  flex: 1;
  padding: 10px;
  background-color: rgba(60, 60, 67, 0.18);
  overflow: scroll;

  .big_container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .logo_container {
    display: flex;
    justify-content: center;
    .apple_logo {
      height: 100px;
      width: 250px;
    }
  }
  .plan_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    overflow: visible;
   

    .plans {
      background-color: hsla(0, 0%, 100%, 0.92);
    
      margin: 10px;
      height: 300px;
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: .8;
    
      p {
        font-weight: 500;
      }
      hr {
        width: 70%;
        margin-left: 10%;
        height: 2px;
        background-color: red;
      }
      
    }
    
  }
`;
