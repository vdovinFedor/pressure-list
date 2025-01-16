export type TLine = {
    up: string,
    down: string,
    heartRate: string
    date: string,
    lineId: string,
}
export interface TDiaryNote {
    date: string;
    rate: number;
    note: string
}

export type TDairyNotes = Array<TDiaryNote>

export type TData = Array<TLine>;

export interface Measurement {
    timestamp: string;
    systolic: string;
    diastolic: string;
    pulse: string;
}
export type Measurements = Record<string, Measurement>
