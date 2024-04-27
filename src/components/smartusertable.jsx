import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


export default function SmartUserTable() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/users/')
      .then((responce) => {
        setRows(responce.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  
const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'surname',
    headerName: 'Фамилия',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Имя',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 110,
    editable: true,
  },
];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[4]}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
      />
    </Box>
  );
}