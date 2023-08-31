import {INIT_SYSTEM,ADD_LOG,PLAYER_STATE,GAME_STATE} from "@/app/actions";

const initialState = {
    logData: [],
    systemInitialized: false,
    gameState : {},
    playerState : ""
};

const coreState = (state = initialState, action) => {

    switch (action.type) {
        case ADD_LOG:

            const newItem = action._message;
            const updatedItems = [...state.logData, newItem];

            return {
            ...state,
            logData: updatedItems,
        };

        case INIT_SYSTEM:

            return {
                ...state,
                systemInitialized: true,
            };

        case PLAYER_STATE:

            return {
                ...state,
                playerState: action._newState,
            };

        case GAME_STATE:

            return {
                ...state,
                gameState: action._newState,
            };


        default:
            return state;
    }
};

export default coreState;