function Cnvs(state = {}, action) {
   console.log("Cnvs reducing action " + action.type);
   switch(action.type) {
   case 'GET_CNVS':
      return state.concat(action.cnvs);
   default:
      return state;
   }
}

export default Cnvs;
