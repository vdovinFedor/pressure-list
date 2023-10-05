import React from 'react';
import './Input.css';

type Props = {
  label: string;
  value: string;
  onChange: (arg0: any) => void;
  name: string;
};

function Input(props: Props) {
    const {
        label, value, onChange, name,
    } = props;
    return (
        <div className="flex items-center mb-3">
            <h1 className="mr-3">{label}</h1>
            <input
                type="number"
                value={value}
                onChange={onChange}
                name={name}
                className="input"
            />
        </div>
    );
}

export default Input;
