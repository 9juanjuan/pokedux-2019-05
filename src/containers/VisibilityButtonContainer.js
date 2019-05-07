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
        handleClick: (label) => {
            dispatch(setVisibilityAll(label));
        },
        handleClick: (label) => {
            dispatch(setVisibilityCaught(label));
        },
        handleClick: (label) => {
            dispatch(setVisibilityUncaught(label));
        }
    };
};

const wireUpTheComponent = connect(mapStateToProps, mapDispatchToProps);
const smartVisibilityButton = wireUpTheComponent(VisibilityButton)
export default smartVisibilityButton;