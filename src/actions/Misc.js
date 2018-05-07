const MiscActionTypes = {
  TOGGLE_SIDEBAR: 'MiscActionTypes/TOGGLE_SIDEBAR',
  HOVER_SIDEBAR: 'MiscActionTypes/HOVER_SIDEBAR',
};

const MiscActions = {
  toggleSidebar: (payload) => ({type: MiscActionTypes.TOGGLE_SIDEBAR, payload}),
  hoverSidebar: (payload) => ({type : MiscActionTypes.HOVER_SIDEBAR, payload}),
}

export {
  MiscActionTypes,
  MiscActions,
}
