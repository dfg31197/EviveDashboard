import getData from '../services/metaInfo/MetaInfoService';


const MetaInfoActionTypes = {
  INITIAL_LOAD: 'MetaInfoAction/INITIAL_LOAD',
};

const MetaInfoActions = {
  initialLoad: payload => ({ type: MetaInfoActionTypes.INITIAL_LOAD, payload }),
  fetchData: () => (dispatch) => {
    getData().then((x) => { dispatch(MetaInfoActions.initialLoad(x)); })
  },
};

export {
  MetaInfoActionTypes,
  MetaInfoActions,
};
