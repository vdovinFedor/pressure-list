import React, { useState } from 'react';
import './FormComponent.css';
import Input from '../Input';
import { TLine } from '../../redusers/lines';
import Button from '../Button';

type Props = {
  subAction: (arg0: TLine) => void;
};
function FormComponent(props: Props) {
    const defaultValues = {
        up: '',
        down: '',
        heartRate: '',
    };
    const { subAction } = props;
    const [inputs, handleChangeInput] = useState(defaultValues);

    const handleChange = (event: any) => {
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
        <div className="flex justify-center flex-wrap mt-6">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between">
                    <Input
                        value={inputs.up}
                        label="Верхнее"
                        onChange={(e) => handleChange(e)}
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

                <Button onClick={handleSubmit} label="OK" />
            </form>
        </div>
    );
}

export default FormComponent;
