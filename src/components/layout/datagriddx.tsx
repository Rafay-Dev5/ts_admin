import React from "react";
import { Link } from "react-router-dom";
import {
  DataGrid,
  GridActionsCellItem,
  GridEnrichedColDef,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

const DataGridDX = (props: any) => {
  return (
    <DataGrid
      {...props}
      autoHeight
      pagination
      rowsPerPageOptions={[5, 10, 50, 100]}
      initialState={{
        pagination: {
          pageSize: 10,
        },
      }}
    />
  );
};

export const handleDeleteClick = async (
  id: number,
  deleteItem: Function,
  getAll: Function,
  setInfo: Function,
  setError: Function
) => {
  //setRows(rows.filter((row) => row.id !== id));
  console.log(id);

  deleteItem(id)
    .then(() => {
      setInfo("Data Successfully Deleted!");
      getAll();
    })

    .catch((error: any) =>
      setError("Data Deletion Failed: " + JSON.stringify(error))
    );
};

export const actionMaker = (
  id: number,
  columns: GridEnrichedColDef[],
  entity: string
) => {
  return [
    <Link to={`/manage${entity}`} state={{ id: id, columns: columns }}>
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        className="textPrimary"
        color="inherit"
      />
    </Link>,
  ];
};

export default DataGridDX;
