export const setActiveTrack = (activeTrack) => ({
  type: "SET_ACTIVE_TRACK",
  payload: activeTrack,
});

export const playTrack = () => ({
  type: "PLAY_TRACK",
  payload: true,
});

export const pauseTrack = () => ({
  type: "PLAY_TRACK",
  payload: false,
});
