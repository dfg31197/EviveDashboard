import { MetaInfoActionTypes } from '../../actions/MetaInfo'

const initState = {
  isFetched: false,
  data: {},
};

const MetaInfoReducer = (state = initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case MetaInfoActionTypes.INITIAL_LOAD:
      return {
        isFetched: true,
        data: {
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default MetaInfoReducer;
