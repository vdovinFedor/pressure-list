import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function PressureTable(props: any) {
    const { data } = props;
    const [rows, setRows] = useState([]);
    console.log('124');
    useEffect(() => setRows(data), [data]);

    const columns: GridColDef[] = [
        { field: 'timestamp', headerName: 'Дата', width: 150 },
        { field: 'systolic', headerName: 'Систолическое', width: 130 },
        { field: 'diastolic', headerName: 'Диастолическое', width: 130 },
        { field: 'pulse', headerName: 'Пульс', width: 100 },
    ];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5 },
                    },
                }}
                // pageSizeOptions={[100]}
                disableRowSelectionOnClick
            />
        </div>
    );
}

export default PressureTable;
