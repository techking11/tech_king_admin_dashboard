import "./productlist.css";

import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';

import { productRows } from "../../dummyData";
import {Link} from 'react-router-dom';
import { useState } from "react";

export default function ProductList() {

    const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'product',
    headerName: 'Product',
    sortable: false,
    width: 160,
    renderCell: (params) => {
        return (
          <div className="productListUser">
            <img src={params.row.img} alt="" className="productListImg" />
            {params.row.name}
          </div>
        )
    }
  },
  { field: 'stock', headerName: 'Stock', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'price', headerName: 'Price', width: 200 },
  {
    field : "action",
    headerName : "Action",
    width : 150,
    renderCell : (params) => {
      return (
        <>
          <Link to={"/products/" + params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
        </>
      )
    }
  }
];

  return (
    <div className='productList'>
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
