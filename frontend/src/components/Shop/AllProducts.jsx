import { AiOutlineEye, AiOutlineDelete } from '../../Assests/icons/icons';
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GetAllProducts } from "../../redux/reducers/producttk";
import { deleteProduct } from "../../redux/reducers/producttk";


const AllProducts = () => {
  const { data, loading } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProducts(user._id));
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteProduct(id));
    dispatch(GetAllProducts(user._id));
  };
console.log("nexus",loading);
  const columns = [
    { field: "id", headerName: "Product Id", flex: 0.2 },
    { field: "name", headerName: "Name", flex: 0.8 },
    { field: "price", headerName: "Price", flex: 0.8 },
    { field: "Stock", headerName: "Stock", type: "number", flex: 0.5 },
    { field: "sold", headerName: "Sold out", type: "number", flex: 0.5 },
    {
      field: "Preview", flex: 0.5, headerName: "", type: "number", sortable: false,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </NavLink>
          </>
        );
      },
    },
    {
      field: "Delete", flex: 0.5, headerName: "", type: "number", sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  data && data.products.forEach((item, index) => {
    row.push({
      id: item._id,
      name: item.name,
      price: "US$ " + item.discountPrice,
      Stock: item.stock,
      sold: item?.sold_out,
    });
  });

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllProducts;
