   
    import React, { Alert } from "react-bootstrap";
    import Doctor from "./images/Doctor.jpg";
    import Donar from "./images/Donar.jpg";
    import Recipient from "./images/Recipient.jpg";
    import TrackVisibility from 'react-on-screen';
    import { Button } from 'react-bootstrap';
    import Donors from "./Donors";
    

  
    
    
    const Welcome=()=>{
      return(
        
          <div className="main">
            
              <div className="block1">
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={Donar} className="image" ></img>
                            </div>}
                        </TrackVisibility>
                  
                      <h3 className="fade-in-text"><b>Donor</b></h3>
                      <p className="text">“People are more willing <br/>
                      to give when they see generosity <br/> 
                      as part of who they are”</p>

                      <form>
                            <Button variant="btn btn-success" onClick={() => Donors.push('/donors')}>DONOR</Button>
                        </form>

                             
              </div>
              <div className="block2">
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={Recipient} className="image"></img>
                        </div>}
                    </TrackVisibility>
                 
                      <h3 className="fade-in-text"><b>Recipient</b></h3>
                      <p className="text">“The measure of life is not<br/>
                        its duration but its donation.”</p>
                      <center>  <button className="btn">RECIPIENT</button></center>
              </div>
              <div className="block3">
                <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={Doctor} className="image"></img>
                            </div>}
                        </TrackVisibility>
                    
                
                      <h3 className="fade-in-text"><b>Doctor</b></h3>
                      <p className="text">“Health is hearty, <br/>
                      health is harmony, <br/>
                      health is happiness.”</p>
                      <center> <button className="btn">DOCTOR</button></center>
              </div>
              
              
          </div>
    );
    }

    export default Welcome;
