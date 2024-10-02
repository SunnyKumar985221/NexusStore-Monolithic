import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { categoriesData } from "../../static/data";
import { createEvent } from "../../redux/reducers/eventtk";
import { successAlert, loaderStart, loaderEnd, errorAlert } from "../Alerts/alerts";

const CreateEvent = () => {
  const { user } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [images, setImages] = useState([]);

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    setStartDate(startDate);
    setEndDate(null);
    document.getElementById("end-date").min = minEndDate.toISOString.slice(0, 10);
  }

  const handleEndDateChange = (e) => {
    if (!startDate) {
      errorAlert('First Select the Start Date');
      setEndDate(null);
      return false;
    }
    const endDate = new Date(e.target.value);
    setEndDate(endDate);
  };

  const today = new Date().toISOString().slice(0, 10);
  const minEndDate = startDate ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10) : "";

  const handleImageChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    newForm.append("originalPrice", originalPrice);
    newForm.append("discountPrice", discountPrice);
    newForm.append("stock", stock);
    newForm.append("shopId", user._id);
    newForm.append("start_Date", startDate.toISOString());
    newForm.append("Finish_Date", endDate.toISOString());
    images.forEach((image) => {
      newForm.append("images", image);
    });

    loaderStart(e);
    const resp = await dispatch(createEvent(newForm));
    loaderEnd(e);

    if (resp.payload === null) {
      successAlert("Event Added Successfully");
      setName("");
      setDescription("");
      setCategory("");
      setTags("");
      setOriginalPrice("");
      setDiscountPrice("");
      setStock("");
      setStartDate(null);
      setEndDate(null);
      setImages([]);
    } else {
      errorAlert('Something Went Wrong');
    }

  };


  return (
    <>
      <div className="form-main-container">
        <div className="form-container">
          <div className="input-container">
            <div className="input-header"><hr /><span>Add New Event</span><hr /></div>
            <form onSubmit={handleSubmit}>
              <div className="input-body">

                <div className="fullinput-row">
                  <div className="input-box">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder=" " />
                    <label>Event Product Name</label>
                  </div>
                  <div className="input-box">
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                      <option value="Choose a category">Choose a category</option>
                      {categoriesData && categoriesData.map((i) => (<option value={i.title} key={i.title}>{i.title}</option>))}
                    </select>
                    <label>Select Product Category</label>
                  </div>
                </div>

                <div className="fullinput-row">
                  <div className="input-box">
                    <input type="text" name="price" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} placeholder=" " />
                    <label>Product Price</label>
                  </div>
                  <div className="input-box">
                    <input type="text" name="discountprice" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} placeholder=" " />
                    <label>Discount Product Price</label>
                  </div>

                </div>

                <div className="fullinput-row">
                  <div className="input-box">
                    <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder=" " />
                    <label>Product Tags</label>
                  </div>
                  <div className="input-box">
                    <input type="text" name="price" value={stock} onChange={(e) => setStock(e.target.value)} placeholder=" " />
                    <label>In Stock</label>
                  </div>
                </div>

                <div className="fullinput-row">
                  <div className="input-box">
                    <input type="date" name="startdate" id="start-date" value={startDate ? startDate.toISOString().slice(0, 10) : ""} onChange={handleStartDateChange} min={today} placeholder=" " />
                    <label>Event Start Date</label>
                  </div>
                  <div className="input-box">
                    <input type="date" name="enddate" id="start-date" value={endDate ? endDate.toISOString().slice(0, 10) : ""} onChange={handleEndDateChange} min={minEndDate} placeholder=" " />
                    <label>Event End Date</label>
                  </div>
                </div>

                <div className="fullinput-row">
                  <div className="input-box textarea">
                    <textarea placeholder='' rows='4' cols='15' onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                    <label>Description</label>
                  </div>
                </div>
              </div>

              <div className="multiple-image-box">
                <div className="image-item">
                  <label htmlFor='images' style={{ 'display': "flex", 'alignItems': 'center', 'gap': '5px' }}><AiOutlinePlusCircle size={30} />Add Images</label>
                  <input type="file" id="images" name='images' multiple onChange={handleImageChange} className="d-none" />
                </div>

                {images && images.map((items, index) => (<>
                  <div className="image-item">
                    <img src={URL.createObjectURL(items)} key={index} alt='image' className="itemimage" />
                  </div>
                </>))}
              </div>

              <div className="input-footer">
                <button type="submit">Save Event</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
