import * as ActionTypes from './actionTypes';


const BASE_URL = 'http://localhost:5000/'


export const fetchFishSpecies = () => dispatch => {
 return fetch(BASE_URL + 'fish/')
        .then( response => response.json())
        .then( fish => dispatch( populateFish(fish)));
}


export const populateFish = (fish) => ({
    type: ActionTypes.GET_FISH_SPECIES,
    payload: fish
});


export const fetchRivers = () => dispatch => {
    return fetch(BASE_URL + 'rivers/')
           .then( response => response.json())
           .then( rivers => dispatch( populateRivers(rivers)));
   }
   

export const populateRivers = (rivers) => ({
    type: ActionTypes.GET_RIVERS,
    payload: rivers
   });


export const fetchRiverSections = () => dispatch => {
    return fetch(BASE_URL + 'riverSections/')
           .then( response => response.json())
           .then( riverSections => dispatch( populateRiverSections(riverSections)));
   }
   

export const populateRiverSections = (riverSections) => ({
    type: ActionTypes.GET_RIVER_SECTION,
    payload: riverSections
   });


export const fetchAllCatches = () => dispatch => {
    return fetch(BASE_URL + 'catch/')
           .then( response => response.json())
           .then( catches => dispatch( populateCatches(catches)));
   }


export const fetchCatches = (species, river, riverSection) => dispatch => {
    return fetch(BASE_URL + `catch/catches/${species}/${river}/${riverSection}`)
           .then( response => response.json())
           .then( catches => dispatch( populateCatches(catches)));
   }
   

export const populateCatches = (catches) => ({
    type: ActionTypes.GET_CATCHES_HISTORICAL,
    payload: catches
   });


export const AddCatch = (species, river, riverSection, quantity, isWild) => {
    const values = {species, river, riverSection, quantity, isWild};
    fetch(BASE_URL + 'feedback', {
        method: 'POST',
        body: JSON.stringify(values)
    })
        .then(response => response.json())
        .then(data => {
        console.log('Success', data)
        })
        .catch(err => {
        console.log(err)
        })
}