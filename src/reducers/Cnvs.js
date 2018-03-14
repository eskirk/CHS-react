export default function Cnvs(state = {}, action) {
   console.log("Cnvs reducing action " + action.type);
   switch(action.type) {
   case 'GET_CNVS':
      console.log(action.cnvs);
      return action.cnvs;
   case 'GET_CNV':
      console.log('GET CNV');
      console.log(action.cnv);
      return action.cnv;
   case 'GET_MSGS':
      console.log('GET MSGS');
      console.log(action.msgs);
      return action.msgs;
   case 'POST_CNVS':
      console.log('POST CNVS');
      return action.prevState;
   case 'POST_MSG':
      console.log('POST MSG');
      return action.prevState;
   case 'PUT_CNVS':
      console.log('PUT CNVS');
      return action.prevState;
   default:
      return state;
   }
}
