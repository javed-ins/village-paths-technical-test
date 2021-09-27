const intialState = {
  organizations: [],
  loading: true,
};

export const joinOrgReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ORG:
      return {
        ...state,
        loading: true,
      };
    case SET_ORG:
      return {
        ...state,
        organizations: action.organizations,
        loading: false,
      };
    default:
      return state;
  }
};

export const GET_ORG = 'GET_ORG';
export const SET_ORG = 'SET_ORG';

export const getOrg = () => {
  console.log('Action Dispath');
  return { type: GET_ORG };
};

export const setOrg = (organizations) => {
  console.log('Action Dispath');
  return {
    type: SET_ORG,
    organizations,
  };
};
