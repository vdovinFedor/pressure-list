import React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

function PressureChart({ data }: any) {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    // width={500}
                    // height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="timestamp"
                        interval={0}
                        tickFormatter={(timestamp) => format(new Date(timestamp), 'd MMM', { locale: ru })}
                    />
                    <YAxis />
                    <Tooltip
                        labelFormatter={(timestamp) => `Дата: ${format(new Date(timestamp), 'd MMMM, HH:mm')}`}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="systolic"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="diastolic"
                        stroke="#82ca9d"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="natural"
                        dataKey="pulse"
                        stroke="red"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PressureChart;
