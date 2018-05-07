import { MiscActionTypes } from '../../actions/Misc'
const initState = {
  isSideBarExtended: false,
  isSideBarToggled: false,
};

const MiscReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch(type) {
    case MiscActionTypes.HOVER_SIDEBAR:
      return {
        ...state,
        isSideBarExtended: !state.isSideBarExtended
      };

    case MiscActionTypes.TOGGLE_SIDEBAR:
    return {
      ...state,
      isSideBarToggled: !state.isSideBarToggled
    }
    default:
      return state;
  }
};

export default MiscReducer;
