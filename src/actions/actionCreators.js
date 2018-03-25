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

// Msgs functions
export function getMsgs(cnvId, cb) {
   console.log('getting messages');
   return (dispatch, prevState) => {
      api.getMsgs(cnvId)
         .then((msgs) => dispatch({
            msgs: msgs,
            type: "GET_MSGS"
         }))
         .then(() => {
            if (cb) cb();
         })
         .catch((err) => {
            console.log('could not get messages');
            dispatch({
               type: "ERROR",
               err
            })
         })
   }
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

export function getCnvsOwner(owner, cb) {
   console.log('getting cnvs with owner ' + owner);
   return (dispatch, prevState) => {
      api.getCnvsOwner(owner)
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

export function postCnv(body, cb) {
   return (dispatch, prevState) => {
      api.postCnv(body)
         .then((res) => dispatch({
            type: "POST_CNVS"
         }))
         .then(() => {
            if (cb) cb()
         })
         .catch((err) => {
            console.log('Could not post conversation');
            console.log(err);
            dispatch({
               type: "LONG_TITLE",
               details: err
            })
         });
   }
}

export function postMsg(cnvId, body, cb) {
   return (dispatch, prevState) => {
      api.postMsg(cnvId, body)
         .then((res) => dispatch({
            type: "POST_MSG"
         }))
         .then(() => {
            if (cb) cb()
         })
         .catch((err) => {
            console.log('Could not post message');
            console.log(err);
            dispatch({
               type: "ERROR",
               details: err
            })
         })
   }
}

export function delCnv(cnvId, cb) {
   console.log('deleting conversation ' + cnvId);
   return (dispatch, prevState) => {
      api.delCnv(cnvId)
         .then((res) => console.log(res));
   }
}

export function putCnv(cnvId, body, cb) {
   console.log('updating conversation ' + cnvId + ' ' + body);
   return (dispatch, prevState) => {
      api.putCnv(cnvId, body)
         .then(() => {
            if (cb) cb()
         })
         .catch((err) => {
            console.log('Could not put message');
            console.log(err);
            dispatch({
               type: 'DUP_TITLE',
               details: err
            })
         })
   }
}

export function getCnv(cnvId, cb) {
   console.log('getting conversation ' + cnvId);
   return (dispatch, prevState) => {
      api.getCnv(cnvId)
         .then((cnv) => dispatch({
            cnv: cnv,
            type: "GET_CNV"
         }))
         .then(() => {
            if (cb) cb();
         })
         .catch((err) => {
            console.log('could not get conversation');
            console.log(err);
            dispatch({
               type: 'ERROR',
               details: err
            })
         })
   }
}