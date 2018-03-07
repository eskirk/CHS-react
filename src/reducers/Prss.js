export default function Prss(state = {}, action) {
   console.log("Prss reducing action " + action.type);
   switch(action.type) {
   case 'SIGN_IN':
      console.log(action.user);
      return action.user;
   case 'SIGN_OUT':
      return {}; // Clear user state
   default:
      return state;
   }
}
