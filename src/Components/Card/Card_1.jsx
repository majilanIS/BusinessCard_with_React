import React from 'react';
import './Card.css'; // ✅ Just import it normally

function Card_1(props) {
  let { color, name, email, number, batch, group } = props
  return (
    <div className={`container ${color}`}>
      <h2>Evangadi INC.</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Number: <a href="#">{number}</a></p>
      {props.batch &&<p>Batch:{batch}</p>}
      <p>Group: {group}</p>
    </div>
  );
}

export default Card_1;
