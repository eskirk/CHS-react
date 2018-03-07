import * as api from '../api';

// Prss functions
export function signIn(credentials, cb) {
   console.log("signIn action creator");
   return (dispatch, prevState) => {
      api.signIn(credentials)
         .then((userInfo) => dispatch({
            user: userInfo,
            type: "SIGN_IN"
         }))
         .then(() => {
            if (cb) cb();
         })
         .catch((error) => {
            console.log("Sign in error" + error);
            dispatch({
               type: 'LOGIN_ERR',
               details: error
            });
         });
      // setTimeout(() => dispatch({user: credentials, type: "SIGN_IN"}), 2000);
   };
}

export function register(data, cb) {
   console.log("register action creator");
   return (dispatch, prevState) => {
      api.register(data)
         .then(() => {
            if (cb) cb();
         })
         .catch(error => {
            console.log("Registration error" + error);
            dispatch({
               type: 'REGISTER_ERR',
               details: error
            });
         });
   };
}


export function signOut(cb) {
   return (dispatch, prevState) => {
      api.signOut()
         .then(() => dispatch({
            type: 'SIGN_OUT'
         }))
         .then(() => {
            if (cb) cb();
         })
         .catch((err) => {
            console.log("Sign out error!");
            dispatch({
               type: "ERROR",
               err
            });
         });
   };
}

// Error functions
export function postError(type, details, cb) {
   return (dispatch, prevState) => {
      dispatch({
         type,
         details
      });
      if (cb)
         cb();
   };
}

export function clearErrors(cb) {
   return (dispatch, prevState) => {
      dispatch({
         type: "CLEAR_ERRS"
      });
      if (cb)
         cb();
   };
}

// Cnvs functions
export function getCnvs(cb) {
   console.log('getting conversations');
   return (dispatch, prevState) => {
      api.getCnvs()
         .then((cnvs) => dispatch({
            cnvs: cnvs,
            type: "GET_CNVS"
         }))
         .then(() => {
            if (cb) cb();
         })
         .catch((err) => {
            console.log('Could not get conversations');
            dispatch({
               type: "ERROR",
               err
            });
         });
   }
}