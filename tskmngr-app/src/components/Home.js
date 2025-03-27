import React from 'react';

function Home() {
  function lnkuserefdemo1(){
    let msgText = "# app::lnkuserefdemo1"
    console.log(msgText)
  }
 
  const lnkusestatedemo1 = () => {
    let msgText = "# app::lnkusestatedemo1"
    console.log(msgText)
   }
 
  return (
    <>
          <p>Demo react app v3.15</p>
          <div>
            <a href="#" onClick={lnkuserefdemo1}>useRef demo 1</a><p></p>
            <a href="#" >useRef demo 2</a><p></p>
            <a href="#" onClick={lnkusestatedemo1}>useState demo 1</a><p></p>              
          </div>
          <div>
            [display info]
          </div>
          <p>Footer @ 2025</p>
    </>
  );
}

export default Home;