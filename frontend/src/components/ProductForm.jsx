import React from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="mx-20 my-5">
      <form onSubmit={saveProduct}>
        <label className="text-lg">Product Image</label>
        <br />
        <code>Supported Formats: jpg, jpeg, png</code>
        <br />
        <input
          className="my-3"
          type="file"
          name="image"
          onChange={(e) => handleImageChange(e)}
        />
        {imagePreview != null ? (
          <div className="mb-5">
            <img className="rounded shadow" width="30%" height="30%" src={imagePreview} alt="" />
          </div>
        ) : (
          <p className="mb-5 text-red-500">No image set for this product.</p>
        )}

        <label className="text-lg">Product Name:</label>
        <br />
        <input
          className="my-3 ml-4"
          type="text"
          placeholder="Product name"
          name="name"
          value={product?.name}
          onChange={handleInputChange}
        />
        <br />

        <label className="text-lg">Product Category:</label>
        <br />
        <select
          className="my-3 ml-4"
          type="text"
          placeholder="Product Category"
          name="category"
          defaultValue={product?.category}
          onChange={handleInputChange}
        >
          <option  value='shoes'>Shoes</option>
          <option  value='apparel'>Apparel</option>

        </select>
        <br />

        <label className="text-lg">Product Price:</label>
        <br />
        <input
          className="my-3 ml-4"
          type="number"
          placeholder="Product Price"
          name="price"
          value={product?.price}
          onChange={handleInputChange}
        />
        <br />

        <label className="text-lg">Product Quantity:</label>
        <br />
        <input
          className="my-3 ml-4"
          type="text"
          placeholder="Product Quantity"
          name="quantity"
          value={product?.quantity}
          onChange={handleInputChange}
        />
        <br />

        <label className="text-lg">Trending:</label>
        <br />
        <select
          className="my-3 ml-4"
          type="text"
          placeholder="Trending"
          name="trending"
          defaultValue={product?.trending}
          onChange={handleInputChange}
        >
          <option  value='no'>No</option>
          <option  value='yes'>Yes</option>

        </select>
        <br />

        <label className="text-lg">Sale:</label>
        <br />
        <select
          className="my-3 ml-4"
          type="text"
          placeholder="Sale"
          name="sale"
          defaultValue={product?.sale}
          onChange={handleInputChange}
        >
          <option  value='no'>No</option>
          <option  value='yes'>Yes</option>
        </select>
        <br />

        <label className="text-lg">Best Seller:</label>
        <br />
        <select
          className="my-3 ml-4"
          type="text"
          placeholder="Best Seller"
          name="bestseller"
          defaultValue={product?.bestseller}
          onChange={handleInputChange}
        >
          <option  value='no'>No</option>
          <option  value='yes'>Yes</option>
        </select>
        <br />


        <label className="text-lg">Person:</label>
        <br />
        <select
          className="my-3 ml-4"
          type="text"
          placeholder="Person"
          name="person"
          defaultValue={product?.person}
          onChange={handleInputChange}
        >
          <option  value='men'>Men</option>
          <option  value='women'>Women</option>
          <option  value='boy'>Boy</option>
          <option  value='girl'>Girl</option>

        </select>
        <br />

        <label className="text-lg">Specific Category:</label>
        <br />
        <select
          className="my-3 ml-4"
          type="text"
          placeholder="Specific Category"
          name="specific_category"
          defaultValue={product?.specific_category}
          onChange={handleInputChange}
        >
          <option  value='slip_ons'>Slip ons</option>
          <option  value='formal_shoes'>Formal Shoes</option>
          <option  value='casual_shoes'>Casual Shoes</option>
          <option  value='athleisure'>Athleisure</option>
          <option  value='chappals'>Chappals</option>
          <option  value='sandals'>Sandals</option>
          <option  value='hoodies_and_sweats'>Hoodies & Sweats</option>
          <option  value='track_suit'>Track Suit</option>
          <option  value='jackets'>Jackets</option>
          <option  value='trousers'>Trousers</option>
          <option  value='chinos'>Chinos</option>
          <option  value='shorts'>Shorts</option>
          <option  value='tees'>Tees</option>
          <option  value='athletics'>Athletics</option>
          <option  value='pumps'>Pumps</option>
          <option  value='heels'>Heels</option>
          <option  value='sports_wear'>Sports Wear</option>
          <option  value='yoga_pants'>Yoga Pants</option>
          <option  value='school_shoes'>School Shoes</option>

        </select>
        <br />

        <label>Product Description:</label>
        <br />
        <ReactQuill theme="snow" value={description} onChange={setDescription} 
        modules={ProductForm.modules} formats={ProductForm.formats}
        />

        <div>
          <button className="bg-blue-300 px-10 py-3 rounded mt-5" type="submit">
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};


ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
