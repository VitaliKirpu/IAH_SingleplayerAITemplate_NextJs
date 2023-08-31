export const INIT_SYSTEM = 'INIT_SYSTEM';
export const ADD_LOG = 'ADD_LOG';
export const PLAYER_STATE = 'PLAYER_STATE';
export const GAME_STATE = 'GAME_STATE';

export const initSystem = () => ({
    type: INIT_SYSTEM,
});
export const addLog = (message) => ({
    type: ADD_LOG,
    _message : message
});
export const updateGameState = (newState) => ({
    type: GAME_STATE,
    _newState : newState
});
export const updatePlayerState = (newState) => ({
    type: PLAYER_STATE,
    _newState : newState
});

