type TPayload = {
    up: string,
    down: string,
    heartRate: string
}
type TAddDataType = {
    type: string;
    payload: TPayload
}
export function addData(payload: TPayload): TAddDataType {
    return {
        type: 'ADD_DATA',
        payload,
    };
}
export function initData(payload: TPayload): TAddDataType {
    return {
        type: 'ADD_DATA',
        payload,
    };
}
