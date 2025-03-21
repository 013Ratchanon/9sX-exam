import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const products = [
    {
      id: 1,
      name: "ชาเขียวนม",
      price: "THB 65",
      image: "src/image/green milk.jpg",
    },
    {
      id: 2,
      name: "เลม่อนโซดา",
      price: "THB 40",
      image: "src/image/lemon soda.jpg",
    },
    {
      id: 3,
      name: "สตอเบอรรี่โซดา",
      price: "THB 40",
      image: "src/image/strawberry.jpg",
    },
    {
      id: 4,
      name: "โกโก้เย็น",
      price: "THB 50",
      image: "src/image/cocoa.jpg",
    },
    {
      id: 5,
      name: "ชาไทยเย็น",
      price: "THB 50",
      image: "src/image/tea thai.jpg",
    },
  ];

  const MenuCard = ({ product }) => {
    return (
      <div className="px-6 py-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
        <NavLink to={`/menu/${product.id}`} className="block">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg transform transition duration-500 ease-in-out hover:scale-110"
            />
            {/* Add a dark overlay effect */}
            <div className="absolute inset-0 bg-black opacity-20"></div>
          </div>
          <div className="pt-4">
            <div className="flex items-center justify-between text-lg">
              <h3 className="font-semibold text-gray-800 hover:text-yellow-600 transition duration-300">
                {product.name}
              </h3>
              <h3 className="font-semibold text-yellow-600">{product.price}</h3>
            </div>
            <hr className="border-t border-gray-300 mt-3" />
          </div>
        </NavLink>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          เมนูคาเฟ่
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
