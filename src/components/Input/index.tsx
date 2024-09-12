import React from 'react';
import './Input.css';

type Props = {
  label: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

function Input(props: Props) {
    const {
        label, value, onChange, name,
    } = props;
    return (
        <div className="grid col-end-1">
            <p className="mr-2 label">{label}</p>
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
