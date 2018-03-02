import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import Prss from './Prss';
import Errs from './Errs';
import Cnvs from './Cnvs';

const rootReducer = combineReducers({Prss, Errs, Cnvs});

export default rootReducer;
