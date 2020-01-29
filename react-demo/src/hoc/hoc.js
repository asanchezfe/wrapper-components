import React from 'react';

function withButton(WrappedComponent, message) {
  return class WithButton extends React.Component {
    render() {
      //   const data = this.props.data.filter(filter); data={data}
      return (
        <div>
            {message}
          <WrappedComponent type="password" {...this.props}>{this.props.children}</WrappedComponent>
         <button>Do something!</button>
        </div>
      );
    }
  }
}

export default withButton;
