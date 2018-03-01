export default function Errs(state = [], action) {
   console.log("Errs reducing action " + action.type);
   switch(action.type) {
   case 'LOGIN_ERR':
   case 'REGISTER_ERR':
      return state.concat(action.details);
   case 'CLEAR_ERRS':
      return [];
   default:
      return state;
   }
}
