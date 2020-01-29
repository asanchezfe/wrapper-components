import React from 'react';
import './Multiple.css';

export function MultipleSlots(props) {
    return (
      <div className="layout">
        <div className="top">{props.top}</div>
        <div className="left">{props.left}</div>
        <div className="center">{props.center}</div>
      </div>
    );
  }
  
 export function Left(props) {
    return (<b>left bar</b>);
  }
  
  export function Content(props) {
    return (<div>Captain hooks content</div>);
  }
  