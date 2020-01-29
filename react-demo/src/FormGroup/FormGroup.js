import React from 'react';
import './styles.css';

export class FormGroup extends React.Component {
  render() {
    return (
      <div className="parent">
        <div className="title">{ this.props.title }</div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default FormGroup;



/* Alternative: */

const Wrap = ({ children }) => <div>{children}</div>

export function WrapSample() {
  return (<Wrap><h1>Hello word</h1></Wrap>);
}