import React, { useState, Suspense, useRef } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Loading from '../../global/Loading';
import { saveSearchoptions } from '../../../actions/tripActions/tripActions'

const TripLengthStep = React.lazy(() => import('../stepSelector/TripLengthStep'));
const DepatureStep = React.lazy(() => import('../stepSelector/DepartureStep'));
const FreeTimeStep = React.lazy(() => import('../stepSelector/FreeTimeStep'));

const StepSelector = (props) => {
  const [step, setStep] = useState(1);
  const [tripLengthState, setTripLength] = useState();
  const [departureState, setDeparture] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const tripLength = useRef();
  const departure = useRef();
  const freeTime = useRef();

  const submit = () => {
    if(freeTime.current !== undefined && freeTime.current !== null) {
      setStartDate(freeTime.current.getDates().start)
      setEndDate(freeTime.current.getDates().start)
    }
    props.saveSearchoptions(tripLengthState, departureState, startDate, endDate);

    let startDateISO = startDate.toISOString().slice(0, 10);
    let endDateISO = endDate.toISOString().slice(0, 10);

    props.history.push({
        pathname: `/Browse/${startDateISO}/${endDateISO}/${departureState}/${tripLengthState}/DK/`,
        res: "response",
        new:  true
    })
  };

  const setFormStep = (stepValue) => {
    if (step < 1 || step > 3) return;
    if(departure.current !== undefined && departure.current !== null)
      setDeparture(departure.current.getDepartureCity())

    if(tripLength.current !== undefined && tripLength.current !== null)
      setTripLength(tripLength.current.getTripLength());


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

const mapDispatchToProps = (dispatch) => {
  return {
      saveSearchoptions: (tripLengthState, departureState, startDate, endDate) => dispatch(saveSearchoptions(tripLengthState, departureState, startDate, endDate))
  }
}
export default connect(null, mapDispatchToProps)(StepSelector)