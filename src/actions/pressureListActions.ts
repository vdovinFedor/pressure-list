import { TData, TLine } from '../types';

type TAddDataType = {
  type: string;
  payload: TLine;
};
type TInitData = {
    type: string;
    payload: TData
}
export const ADD_DATA: 'ADD_DATA' = 'ADD_DATA';
export const INIT: 'INIT' = 'INIT';
export function addData(payload: TLine): TAddDataType {
    return {
        type: ADD_DATA,
        payload,
    };
}
export function initData(payload: TData): TInitData {
    return {
        type: INIT,
        payload,
    };
}
