import { connect } from 'react-redux';

import VisibilityButton from '../components/VisibilityButton';

import { 
    setVisibilityAll, 
    setVisibilityCaught,
    setVisibilityUncaught  
    } from '../actions-reducers'

const mapStateToProps = (state) => {
    return {
      visibilityFilter: state.visibility
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleAll: () => {
            dispatch(setVisibilityAll());
        },
        handleCaught: () => {
            dispatch(setVisibilityCaught());
        },
        handleUncaught: () => {
            dispatch(setVisibilityUncaught());
        }
    };
};

const wireUpTheComponent = connect(mapStateToProps, mapDispatchToProps);
const smartVisibilityButton = wireUpTheComponent(VisibilityButton)
export default smartVisibilityButton;