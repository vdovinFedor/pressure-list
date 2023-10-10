import React from 'react';
import './Button.css';

type Props = {
  label: string;
  onClick: (event: any) => void;
};
function Button(props: Props) {
    const {
        label, onClick,
    } = props;
    return (
        <button onClick={onClick} type="submit">{label}</button>
    );
}

export default Button;
