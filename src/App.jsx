import React, { Component } from 'react';
import './App.css';
import Card_1 from './Components/Card/Card_1';
// import Card_2 from './Components/Card/Card_2';
// import Card_3 from './Components/Card/Card_3';
import userData from './assets/UserData.js'

function App() {
  return (
    <>
      <section>
        <h1>Business Card APP (using HTML and CSS only)</h1>
        {userData.map(({color, name, email, phone, group, batch}, i) => (
  <div className='container-2' key = {i}>
    <Card_1
      color={color}
      name={name}
      email={email}
      number={phone}
      batch={batch}
      group={group}
    />
  </div>
))}

      </section>
    </>
  );
}

export default App;

// // destructuring
// {
//   object.map({ color, name, email, phone }, i) => {
//     return (
//       <Card_1
//         color={color}
//         color={color}
//          color={color}
//         color={color}
//       />
//       )
//   }
// }


// for class Components
// let { color, name, email, phone } = this.props 

// for functional Components it's doesn't need this 