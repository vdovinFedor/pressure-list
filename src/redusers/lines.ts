import { ADD_DATA, DELETE, INIT } from '../actions/pressureListActions';
import { type TLine } from '../types';

type ActionType = { type: string; payload: Object };
export type State = { data: Array<TLine> }

const initialState = {
    data: [],
};

const addData = (state: State, action: ActionType) => {
    // eslint-disable-next-line no-console
    console.warn(action);
    return {
        ...state,
        data: [...state.data, action.payload],
    };
};

const deleteData = (state: State, action: ActionType) => {
    // eslint-disable-next-line no-console
    console.warn(action);
    return {
        ...state,
        data: [...state.data, action.payload],
    };
};

// eslint-disable-next-line default-param-last
export default function (state: State = initialState, action: ActionType) {
    switch (action.type) {
        case INIT:
            return { ...state, data: action.payload };
        case ADD_DATA: {
            return addData(state, action);
        }
        case DELETE: {
            return {
                ...state,
                data: state.data.filter((l: TLine) => l.lineId !== action.payload),
            };
        }
        default:
            return state;
    }
}
