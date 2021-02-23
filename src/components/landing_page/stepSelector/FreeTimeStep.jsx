import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { InputGroup } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const FreeTimeStep = forwardRef((props, ref) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useImperativeHandle(ref, () => ({getDates: () => {return {start: startDate, end: endDate}}}), [startDate, endDate]);

    const handleStartDateChange = (e) => {
        setStartDate(e);
    }
    const handleEndDateChange = (e) => {
        setEndDate(e);
    }
    return (
        <InputGroup>
        <DatePicker
            className="mx-sm-2 form-control"
            selected={startDate}
            onChange={handleStartDateChange}
            placeholderText="Select start date"
            minDate={new Date()}
        />
        <DatePicker
            className="mx-sm-2 form-control"
            selected={endDate}
            onChange={handleEndDateChange}
            placeholderText="Select start date"
            minDate={new Date()}
        />
        </InputGroup>
    );
});

export default FreeTimeStep;