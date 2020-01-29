import React from 'react';

export class CustomInput extends React.Component {
  render() {
    return (
      <div>
        <input {...this.props} />
      </div>
    );
  }
}
export default CustomInput;

// We can restrict to only pass some props to child
export class CustomInputRestricted extends React.Component {
  render() {
    const { value, disabled, placeholder, label, onChange, onFocus, onBlur, readonly } = this.props;
    return (
      <div>
        <input
          {...this.props}
          label={label}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          readonly={readonly}
        />
      </div>
    );
  }
}
