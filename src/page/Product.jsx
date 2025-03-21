import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSweet, setSelectedSweet] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleClick = (sweet) => {
    setSelectedSweet(sweet);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(isNaN(newQuantity) || newQuantity < 1 ? 1 : newQuantity);
  };

  const handleAddToCart = () => {
    if (!selectedSweet) {
      alert("กรุณาเลือกระดับความหวาน");
      return;
    }

    const orderItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      sweetness: selectedSweet,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, orderItem];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    navigate("/order");
  };

  const products = [
    {
      id: 1,
      name: "ชาเขียวนม",
      price: "THB 65",
      image: "/image/green milk.jpg",
    },
    {
      id: 2,
      name: "เลม่อนโซดา",
      price: "THB 40",
      image: "/image/lemon soda.jpg",
    },
    {
      id: 3,
      name: "สตอเบอรรี่โซดา",
      price: "THB 40",
      image: "/image/strawberry.jpg",
    },
    {
      id: 4,
      name: "โกโก้เย็น",
      price: "THB 50",
      image: "/image/cocoa.jpg",
    },
    {
      id: 5,
      name: "ชาไทยเย็น",
      price: "THB 50",
      image: "/image/tea thai.jpg",
    },
  ];

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>ไม่พบสินค้า</div>;
  }

  return (
    <div className="flex justify-center items-center py-12 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="relative p-6 flex justify-center items-center w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <div className="p-6 w-full md:w-1/2">
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <div className="mt-6">
            <span className="text-2xl font-bold text-gray-800">
              {product.price}
            </span>
          </div>

          <div className="mt-4">
            <h4 className="text-lg font-semibold">ระดับความหวาน</h4>
            <div className="flex space-x-2 mt-2">
              {["หวานน้อย", "หวานปานกลาง", "หวานมาก"].map((sweet) => (
                <button
                  key={sweet}
                  onClick={() => handleClick(sweet)}
                  className={`py-2 px-4 border rounded-lg ${
                    selectedSweet === sweet ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {sweet}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">จำนวน</h4>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 border rounded-md px-2 py-1"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            เพิ่มลงตะกร้า
          </button>

          {/* ปุ่มย้อนกลับ */}
          <button
            onClick={() => navigate(-1)} // ใช้ navigate(-1) เพื่อย้อนกลับหน้าก่อนหน้า
            className="mt-4 bg-gray-400 text-white py-2 px-6 rounded-lg hover:bg-gray-500 transition"
          >
            ย้อนกลับ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
