export default function Cnvs(state = {}, action) {
   console.log("Cnvs reducing action " + action.type);
   switch(action.type) {
   case 'GET_CNVS':
      console.log('CNVS');
      console.log(action.cnvs);
      return action.cnvs;
   default:
      return state;
   }
}
