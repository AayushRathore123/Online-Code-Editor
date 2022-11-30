import React from "react";
import Homenav from "./homenav";
import "./Home.css";
import card1 from "../images/card1.jpeg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.png";
export default function Home() {
  return (
    <div className="mainpge">
      <Homenav />
      
        <div id="intro">
        <p className="intro">
        
          Online compilers or code editors are tools which allows you to compile source code and
          execute it online in your desired programming language. They significantly reduce the hardware and software
          needed by programmers to work on any given project by storing and
          executing source code online. The compiler is essential for execution of the
          program. It transforms text-based source code into object code, an
          executable file type. Every system would take up a lot of space if the
          compiler were forced to run manually. It would also need to be
          properly configured if it wasn't installed using the default
          parameters. The majority of apps and the interfaces that go along with
          them in today's environment operate online. Therefore, these online tools are very helpful.
        </p>
        </div>

<h1 className="feature">Features</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={card1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Run Your Code</h5>
                  <p className="card-text">
                  It allows the user to compile their own code.
                  Even without registering the user can solve their problem
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={card2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Practice Questions</h5>
                  <p className="card-text">
                   To improve coding , Practice questions are also included.
                   A list of questions on different topics are available.
                   User can check the progress in the dashboard section.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={card3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Language</h5>
                  <p className="card-text">
                    
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
