type ActionType = { type: string, payload: Object }
export type State = {data: Array<TLine>}
export type TLine = {
    up: string,
    down: string,
    heartRate: string
}

const initialState = {
    data: [],
};

const addData = (state: State, action: ActionType) => {
    console.warn(action);
    return {
        ...state,
        data: [...state.data, action.payload],
    };
};

// eslint-disable-next-line default-param-last
export default function (state: State = initialState, action: ActionType) {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, data: action.payload };
        case 'ADD_DATA': {
            return addData(state, action);
        }
        default:
            return state;
    }
}
