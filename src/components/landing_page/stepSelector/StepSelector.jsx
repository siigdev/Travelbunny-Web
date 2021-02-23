import React, { useState, Suspense, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Loading from '../../global/Loading';

const TripLengthStep = React.lazy(() => import('../stepSelector/TripLengthStep'));
const DepatureStep = React.lazy(() => import('../stepSelector/DepartureStep'));
const FreeTimeStep = React.lazy(() => import('../stepSelector/FreeTimeStep'));

const StepSelector = () => {
  const [step, setStep] = useState(1);
  const [tripLengthState, setTripLength] = useState();
  const [departureState, setDeparture] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const tripLength = useRef();
  const departure = useRef();
  const freeTime = useRef();

  const submit = () => {
      console.log("done")
  };

  const setFormStep = (stepValue) => {
    if (step < 1 || step > 3) return;
    if(departure.current !== undefined && departure.current !== null)
      setDeparture(departure.current.getDepartureCity())

    if(tripLength.current !== undefined && tripLength.current !== null)
      setTripLength(tripLength.current.getTripLength());

    if(freeTime.current !== undefined && freeTime.current !== null) {
      setStartDate(freeTime.current.getDates().start)
      setEndDate(freeTime.current.getDates().start)
    }
    setStep(stepValue);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (<TripLengthStep ref={tripLength}/>);
      case 2:
        return (<DepatureStep ref={departure}/>);
      case 3:
        return (<FreeTimeStep ref={freeTime}/>);

      default:
        return null;
    }
  };

  return (
    <div>
      <div>{step} of 3</div>
      <Form>
            <Suspense fallback={<Loading />}>
              <React.Fragment>{renderStep()}</React.Fragment>
            </Suspense>

            
      </Form>

      <progress value={step * 33} max="100" style={{ marginTop: '25px' }}>
        {step * 33}%
      </progress>
      <div>
        <Button variant="light" disabled={step <= 1} onClick={() => setFormStep(step - 1)}>Back</Button>
        {step >= 3 ?
            <Button onClick={submit}>Submit</Button>
            :         
            <Button onClick={() => setFormStep(step + 1)}>Next</Button>
            }

      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
    return {
        searchOptions: state.trip.searchOptions
    }
}
export default connect(mapStateToProps)(StepSelector)