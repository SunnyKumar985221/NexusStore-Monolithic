import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SellerProtectedRoute = () => {
    const { loading, isSeller } = useSelector((state) => state.seller);

    if (loading === false) {
        return isSeller ? <Outlet /> : <Navigate to="/shop-login" replace />;
    }

    return null;
};

export default SellerProtectedRoute;

