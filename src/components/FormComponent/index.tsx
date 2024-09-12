import React, { useState } from 'react';
import './FormComponent.css';
import Input from '../Input';
import { type TLine } from '../../types';
import Button from '../Button';

type Props = {
  subAction: (_: TLine) => void;
};
function FormComponent(props: Props) {
    const defaultValues = {
        up: '',
        down: '',
        heartRate: '',
        date: new Date().toDateString(),
        lineId: '',
    };
    const { subAction } = props;
    const [inputs, handleChangeInput] = useState(defaultValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        const { value } = event.target;
        handleChangeInput((v) => ({ ...v, [name]: value }));
    };
    const reset = () => handleChangeInput(defaultValues);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        subAction(inputs);
        reset();
    };
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div>
                    <Input
                        value={inputs.up}
                        label="Верхнее"
                        onChange={handleChange}
                        name="up"
                    />
                    <Input
                        value={inputs.down}
                        label="Нижнее"
                        onChange={handleChange}
                        name="down"
                    />
                    <Input
                        value={inputs.heartRate}
                        label="Пульс"
                        onChange={handleChange}
                        name="heartRate"
                    />
                </div>
                <div className="flex justify-center mt-2">
                    <Button onClick={handleSubmit} label="OK" />
                </div>
            </form>
        </div>
    );
}

export default FormComponent;
