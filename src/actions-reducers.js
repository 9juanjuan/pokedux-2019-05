// ==============================================
// STATE
import initialCards from './base.json'
import { 
    createStore,
    combineReducers
    } from 'redux'
import { statement } from '@babel/template';
// console.log(initialState)

const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT = 'uncaught';

const initialState = {
    ...initialCards, // This spreads the cards: [...] into this spot to initialState 
    // cards: initialCards.cards /// This line is the equivalent of ...initialCards
    visibilityFilter: VISIBILITY_ALL
};
//State is an object with cards as a property

// Cards is an array of objects
// { cards : [ {}, {}, {} ]}

// In terms of a react component, what would trigger a dispatch?
//====================================================
// ACTIONS + ACTION CREATORS 
const ACTION_CATCH = 'catch'; 

export function catchCard (id) {
     return {
        type: ACTION_CATCH,
        payload: {
             id,
        }
    }
}
window.catchCard = catchCard;

const ACTION_VISIBILITY_ALL = VISIBILITY_ALL;
const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

export function setVisibilityAll() {
    return {
        type: ACTION_VISIBILITY_ALL
    };
}

export function setVisibilityCaught() {
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}
export function setVisibilityUncaught() {
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    };
}

window.catchCard = setVisibilityAll;
window.catchCard = setVisibilityCaught;
window.catchCard = setVisibilityUncaught;


//===================================================
// REDUCER

// initial state is an array (cards reducer manages an array)
export function cards (state=initialState.cards, action={type: ''}) {
    console.log(`cards got called with ${action.payload}`)
    switch(action.type) {
        case ACTION_CATCH: 
        console.log(`cards got called with ${action.payload.id}`)
            // find the card, set it to "caught"
            const newState = state.map (card=> {
                    if(card.id === action.payload.id) {
                        return {
                            ...card,
                            isCaught: true 
                        }
                    } else {
                        return card;     
                    } 
                })
            ;
            // Whatever is returned by the reducer is
            //automatically used by the store as the
            // new version of the state 
            return newState;
        break;
        default:
            return state; 
        break;
    }
}
// visibility reducer manages a string 
export function visibility( state=initialState.visibilityFilter, action={type: ''}) {
    switch (action.type) {
        case ACTION_VISIBILITY_ALL:
            return VISIBILITY_ALL;
        break;
        case ACTION_VISIBILITY_CAUGHT:
            return VISIBILITY_CAUGHT;
        break;
        case ACTION_VISIBILITY_UNCAUGHT:
            return VISIBILITY_UNCAUGHT ;
        break;
        default:
            return state; 
        break;
    }
}
// combines both reducers
export const rootReducer = combineReducers({
    cards: cards,
    visiblityFilter: visibility
})