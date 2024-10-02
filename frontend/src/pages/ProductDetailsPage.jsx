import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";
import { AllProducts } from "../redux/reducers/allproducttk";


const ProductDetailsPage = () => {
  const { allproducts } = useSelector((state) => state.allproducts);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allproducts && allproducts.find((i) => i._id === id);
      setData(data);
    }
  }, [data, allEvents]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {/* {
          !eventData && (
            <>
            {data && <SuggestedProduct data={data} />}
            </>
          )
        } */}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
