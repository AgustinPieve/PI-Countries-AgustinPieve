import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_CONTINENTS = "GET_COUNTRIES_BY_CONTINENTS";
export const ORDER_ASC_DES = "ORDER_ASC_DES";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_BY_ACTIVITIES = "GET_COUNTRIES_BY_ACTIVITIES";
export const GET_COUNTRIES_BY_ID = "GET_COUNTRIES_BY_ID";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
//Traigo a todos los paises

export const getCountries = () => {
  return async function (dispatch) {
      const response = await fetch("http://localhost:3001/countries");
      const data = await response.json();
      return dispatch({
          type: GET_COUNTRIES,
          payload: data,
      });
  };
};


export const getActivities = () => {
    return async function (dispatch) {
      const response = await axios.get("http://localhost:3001/activities");
      return dispatch({ type: GET_ACTIVITIES,
                        payload: response.data });
    };
  };
  
  //Traer pais por nombre
  export const getCountriesByName = (name) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/countries?name=${name}`);
        dispatch({ type: GET_COUNTRIES_BY_NAME,
                   payload: response.data });
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  
  export const getCountriesByContinents = (continent) => {
    return {
      type: GET_COUNTRIES_BY_CONTINENTS,
      payload: continent,
    };
  };
  
  export const getCountriesByActivities = (activity) => {
    return {
      type: GET_COUNTRIES_BY_ACTIVITIES,
      payload: activity,
    };
  };
  
  export const orderAsdDes = (order) => {
    return {
      type: ORDER_ASC_DES,
      payload: order,
    };
  };
  export const orderPopulation = (order) => {
    return {
      type: ORDER_POPULATION,
      payload: order,
    };
  };
  
  export const getCountryById = (id) => {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        dispatch({ type: GET_COUNTRIES_BY_ID, payload: response.data });
      } catch (error) {
        alert(error.message);
      }
    };
  };
  
  export const createActivity = (activity) => {
    return async function (dispatch) {
      try {
        const response = await axios.post("http://localhost:3001/activities", activity);
        alert(response.data.message);
        return dispatch({
          type: CREATE_ACTIVITY,
          payload: response,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  };