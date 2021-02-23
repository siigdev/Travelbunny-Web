import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

const DepatureStep = forwardRef((props, ref) => {
    const [cityName, setCity] = useState('Copenhagen');
    useImperativeHandle(ref, () => ({getDepartureCity: () => {return cityName}}), [cityName]);

    const handleChange = (e) => {
        setCity(e.target.value);
    }
    
    return (
        <InputGroup>
            <Form.Control
                type="text"
                className="mx-sm-2"
                id="input-city"
                aria-describedby="city-help"
                defaultValue={cityName}
                onChange={handleChange}
            />
        </InputGroup>
    );
});

export default DepatureStep;