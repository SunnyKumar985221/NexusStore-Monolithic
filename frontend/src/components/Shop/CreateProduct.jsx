import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../static/data";
import '../../Assests/css/shop.css';
import { CreateNewProduct } from "../../redux/reducers/producttk";
import { successAlert, errorAlert, loaderEnd, loaderStart } from "../Alerts/alerts";

const CreateProduct = () => {
  const { user } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const [name, setName] = useState("Nike Shoe");
  const [description, setDescription] = useState("Nice shoe");
  const [category, setCategory] = useState("Shoe");
  const [tags, setTags] = useState("Shoe");
  const [originalPrice, setOriginalPrice] = useState(10);
  const [discountPrice, setDiscountPrice] = useState(10);
  const [stock, setStock] = useState(10);
  const [images, setImages] = useState([]);


  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !description || !category || !tags || !originalPrice || !stock) {
        errorAlert("Please fill in all the required fields.");
        return;
      }
      loaderStart(e);

      const newForm = new FormData();
      newForm.append("name", name);
      newForm.append("description", description);
      newForm.append("category", category);
      newForm.append("tags", tags);
      newForm.append("originalPrice", originalPrice);

      if (discountPrice) {
        newForm.append("discountPrice", discountPrice);
      }

      newForm.append("stock", stock);
      newForm.append("shopId", user._id);

      images.forEach((image) => {
        newForm.append("images", image);
      });

      let data = await dispatch(CreateNewProduct(newForm));
      if (data.payload) {
        setName('');
        setDescription('');
        setCategory('');
        setTags('');
        setOriginalPrice('');
        setDiscountPrice('');
        setStock('');
        setImages([]);
      }
      loaderEnd(e);
    } catch (error) {
      console.error("Error adding product:", error);
      errorAlert('Product not added. An error occurred.');
    }
  };


  return (
    <div className="formArea">
      <h1 className="text-center">Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input type="text" name="name" value={name} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setName(e.target.value)} placeholder="Enter your product name..." />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea cols="30" rows="8" type="text" name="description" value={description} className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setDescription(e.target.value)} placeholder="Enter your product description..." ></textarea>
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select className="w-full mt-2 border h-[35px] rounded-[5px]" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Choose a category">Choose a category</option>
            {categoriesData && categoriesData.map((i) => (
              <option value={i.title} key={i.title}>
                {i.title}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input type="text" name="tags" value={tags} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setTags(e.target.value)} placeholder="Enter your product tags..." />
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input type="number" name="price" value={originalPrice} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setOriginalPrice(e.target.value)} placeholder="Enter your product price..." />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input type="number" name="price" value={discountPrice} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setDiscountPrice(e.target.value)} placeholder="Enter your product price with discount..." />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input type="number" name="price" value={stock} className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" onChange={(e) => setStock(e.target.value)} placeholder="Enter your product stock..." />
        </div>
        <br />
        <div>

          {/* upload images  */}
          <div class='createProduct'>
            <input type="file" id="upload" multiple onChange={handleImageChange} />
            <label htmlFor="upload"><AiOutlinePlusCircle size={30} color="#555" /> <span>Add Image</span></label>
            <div className="images">
              {images && images.map((i) => (
                <img src={URL.createObjectURL(i)} key={i} alt="" />
              ))}
            </div>
          </div>

          <br />
          <div>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
