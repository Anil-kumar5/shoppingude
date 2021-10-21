import React from 'react';

class Styles extends React.Component {
    render() {
      let x=1;
      console.log(x);
      {
          let x =2;
          console.log(x)
      }
      console.log(x)
     return (
            <div>
                <h1>welcome anil kumar</h1>
                <a href="https://techouts.com" target="_blank">
                    <img src='./techouts.png' alt="techoutspng"
                        className="imglink" />
                </a>
                <div>
                    <p id="techouts">
                        Techouts
                    </p>
                </div>

                <div >
                    <img src="./pic1.jpg" className="images one" />
                    <img src="./pic2.jpg" className="images two" />
                    <img src="./pic3.jpg" className="images three" />
                </div>
                <p className="before">anil kumar</p>
                
        
            </div>
        );
    }
}
export default Styles