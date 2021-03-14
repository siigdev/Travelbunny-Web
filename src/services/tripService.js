export const saveTripToState = (trip) => {
    return Promise.resolve(trip)
}
export const saveTripsToState = (trips) => {
    return Promise.resolve(trips)
}
export const reserveTrip = (trip) => {
    return Promise.resolve(trip)
}
export const saveSearchOptions = (tripLengthState, departureState, startDate, endDate) => {
    return Promise.resolve({tripLength: tripLengthState, departure: departureState, startDate: startDate, endDate: endDate});
}