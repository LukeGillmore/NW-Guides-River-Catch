import * as ActionTypes from './actionTypes';


const DEFAULT_STATE = {
    species: [],
    rivers: [],
    riverSections: [],
    catches: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case ActionTypes.GET_FISH_SPECIES:
            return { ...state, species: action.payload}
        case ActionTypes.GET_RIVERS:
            return { ...state, rivers: action.payload}
        case ActionTypes.GET_RIVER_SECTION:
            return { ...state, riverSections: action.payload}
        case ActionTypes.GET_CATCHES_HISTORICAL:
            return { ...state, catches: action.payload}

        default:
            return state;
    }
}