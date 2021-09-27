import authentication from 'features/OnBoarding/authenticationSlice';
import { joinOrgReducer } from './joinOrgReducer';

//Include all the reducer to combine and provide to configure store.

const rootReducer = {
  authentication,
  joinOrgReducer,
};

export default rootReducer;
