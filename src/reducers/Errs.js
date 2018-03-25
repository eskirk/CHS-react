export default function Errs(state = [], action) {
   console.log("Errs reducing action " + action.type);
   switch(action.type) {
   case 'LOGIN_ERR':
      return state.concat(action.details);
   case 'REGISTER_ERR':
      return state.concat(action.details);
   case 'DUP_TITLE':
      return state.concat(action.details);
   case 'LONG_TITLE':
      return state.concat('Title greater than 80 characters');
   case 'CLEAR_ERRS':
      return [];
   default:
      return state;
   }
}
