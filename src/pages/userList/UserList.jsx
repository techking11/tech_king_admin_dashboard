import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'

import { userRows } from "../../dummyData";
import {Link} from 'react-router-dom'
import { useState } from "react";

export default function UserList() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'Users',
    sortable: false,
    width: 160,
    renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        )
    }
  },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'transaction', headerName: 'Transaction', width: 200 },
  {
    field : "action",
    headerName : "Action",
    width : 150,
    renderCell : (params) => {
      return (
        <>
          <Link to={"/users/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        </>
      )
    }
  }
];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        checkboxSelection
      />
    </div>
  )
}
