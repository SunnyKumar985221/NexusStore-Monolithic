import '../../../Assests/css/home.css';
import kidswear from '../../../Assests/images/kidswear.png';
import menswear from '../../../Assests/images/menswear.png';
import womenswear from '../../../Assests/images/womenswear.png';
import costume from '../../../Assests/images/costume.png';



const FeaturedProduct = () => {
  // const [data, setData] = useState([]);
  // const { allproducts } = useSelector((state) => state.allproducts);


  // useEffect(() => {
  //   const allProductsData = allproducts ? [...allproducts] : [];
  //   const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
  //   const firstFive = sortedData && sortedData.slice(0, 5);
  //   setData(firstFive);
  //   // setData(productData);
  // }, [allproducts]);
  // // setData(productData);  // for now

  return (
    <div className="featureContainer">
      <div className="featuresubContainer">
        <div className="title">Best Fashion Collection</div>
        <div className='items'>

          <div className='item'>
            <img src={kidswear} alt='kidswear' />
            <span>Kid's Wear</span>
          </div>

          <div className='item'>
            <img src={menswear} alt='menswear' />
            <span>Mens's Wear</span>
          </div>

          <div className='item'>
            <img src={womenswear} alt='womenswear' />
            <span>Women's Wear</span>
          </div>

          <div className='item'>
            <img src={costume} alt='costume' />
            <span>Costume Special</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
