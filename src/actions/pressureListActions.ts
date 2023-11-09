import { type TData, type TLine } from '../types';

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
export const DELETE: 'DELETE' = 'DELETE';
export function addData(payload: TLine): TAddDataType {
    const lineId = crypto.randomUUID();
    return {
        type: ADD_DATA,
        payload: { ...payload, lineId },
    };
}
export function initData(payload: TData): TInitData {
    return {
        type: INIT,
        payload,
    };
}
export function deleteData(payload: string): {type: string, payload: string} {
    console.log(payload, '12');
    return {
        type: DELETE,
        payload,
    };
}
