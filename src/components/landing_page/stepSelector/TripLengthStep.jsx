import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

const TripLengthStep = forwardRef((props, ref) => {
    const [tripLength, setTripLength] = useState(14);
    useImperativeHandle(ref, () => ({getTripLength: () => {return tripLength}}), [tripLength]);

    const handleChange = (e) => {
        setTripLength(e.target.value);
    }

    return (
        <InputGroup>
            <Form.Control
                type="text"
                className="mx-sm-2"
                id="input-city"
                aria-describedby="city-help"
                defaultValue={tripLength}
                onChange={handleChange}
            />
        </InputGroup>
    );
});

export default TripLengthStep;