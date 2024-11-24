export type TLine = {
    up: string,
    down: string,
    heartRate: string
    date: string,
    lineId: string,
}

export type TData = Array<TLine>;

export interface Measurement {
    timestamp: string;
    systolic: string;
    diastolic: string;
    pulse: string;
}
export type Measurements = Record<string, Measurement>
