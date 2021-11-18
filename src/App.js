import React from 'react';
import './App.css';

function Card(props) {
  const {name,email,id} = props ;  
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/testeabacate${id}`} alt="Robozin" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}


class Card2 extends React.Component {
  
  render() {
    const {name,email,id} = this.props ;  
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/testeabacate${id}`} alt="Robozin" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }

}

export { Card };
export { Card2 };