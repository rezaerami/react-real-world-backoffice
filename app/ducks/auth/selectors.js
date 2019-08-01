const selectors = {
  auth: state => state.get('auth'),
  accessToken: state => state.get('auth').accessToken,
  user: state => state.get('auth').user,
};
export default selectors;
