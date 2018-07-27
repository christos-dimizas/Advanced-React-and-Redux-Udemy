export default ({dispatch}) => next => action => {
    // Check to see if the action has a promise on its 'payload' property.
    // If it does, then wait for it to resolve, but if it doesn't
    // send the action on next middleware
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    // When the promise resolve, get the data and create a new action
    // with this data and dispatch it.
    action.payload.then((response) => {
        const newAction = {...action, payload: response};
        dispatch(newAction);
    });
}
