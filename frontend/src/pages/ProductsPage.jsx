import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import '../Assests/css/product.css';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const { allproducts, loading } = useSelector((state) => state.allproducts);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      setData(allproducts);
    } else {
      const d = allproducts && allproducts.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, [allproducts]);

  return (
    <>
      {loading ? (<h1>Loading</h1>) : (
        <div>
          <Header activeHeading={3} />
          <div className="prductContainer">
            {data && data.map((items, index) => <ProductCard data={items} key={index} />)}
            {data && data.length === 0 ? (<h1 className="text-center text-white">Please Wait!</h1>) : null}
          </div>
          <Footer />
        </div>
      )
      }
    </>
  );
};

export default ProductsPage;
