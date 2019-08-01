const selectors = {
  core: state => state.get('core'),
  loading: state => state.get('core').loading,
};
export default selectors;
