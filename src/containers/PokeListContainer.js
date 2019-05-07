// A "smart" container has three jobs: 
// Grab stuff from redux
// grab a dumb component
// smash them together.

import { connect } from 'react-redux'
import PokeList from '../components/PokeList'

// We have two jobs: -
// -tell it how to map redux state to react props 
// - tell it how to map redux dispatch to react props

// "translate" from redux state to react props
const mapStateToProps = (state) => {
    // return our own custom props object
    return {
        // react: redux 
        cards: state.cards
    }
};


// const makeComponentSmart
const wireUpTheComponent = connect(mapStateToProps);
const SmartPokeList = wireUpTheComponent(PokeList);

export default SmartPokeList; 