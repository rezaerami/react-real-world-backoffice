const selectors = {
  auth: state => state.get('auth'),
  accessToken: state => state.get('auth').accessToken,
  user: state => state.get('auth').user,
  isLoggedIn: state => !!state.get('auth').accessToken,
};
export default selectors;
