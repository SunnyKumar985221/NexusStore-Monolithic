import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../../../Assests/css/home.css';
import ProductCard from "../ProductCard/ProductCard";
import { productData } from "../../../static/data";
const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allproducts } = useSelector((state) => state.allproducts);


  useEffect(() => {
    const allProductsData = allproducts ? [...allproducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 10);
    setData(firstFive);
    // setData(productData);
  }, [allproducts]);
  // setData(productData);  // for now

  return (
    <div className="dealContainer">
      <div className="title"><hr/>Best Deals<hr/></div>
      <div className="dealsubcontainer">
        {data && data.length !== 0 && (<>
          {data && data.map((item, index) => <ProductCard data={item} key={index} />)}
        </>)
        }
      </div>
    </div>
  );
};

export default BestDeals;
