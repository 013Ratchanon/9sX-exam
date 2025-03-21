import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Order = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.price.replace("THB ", ""));
      totalPrice += price * item.quantity;
    });
    return totalPrice;
  };

  // ฟังก์ชันสร้างเนื้อหาของใบเสร็จ
  const generateReceiptContent = () => {
    let receiptContent = `
      <div class="text-center font-sans">
        <h2 class="text-3xl font-bold mb-2">SUAN NAI KOON - Cafe</h2>
        <p class="text-xl font-semibold">ใบเสร็จการสั่งซื้อ</p>
        <p class="text-sm text-gray-600">Order Date: ${new Date().toLocaleString()}</p>
        <hr class="border-dashed border-2 my-4 border-gray-300">
        <table class="w-full table-auto border-separate border-spacing-0.5">
          <thead>
            <tr>
              <th class="px-3 py-2 border-b text-center">สินค้า</th>
              <th class="px-3 py-2 border-b text-center">ราคา</th>
              <th class="px-3 py-2 border-b text-center">ความหวาน</th>
              <th class="px-3 py-2 border-b text-center">จำนวน</th>
              <th class="px-3 py-2 border-b text-center">ราคารวม</th>
            </tr>
          </thead>
          <tbody>
    `;

    let totalPrice = 0;

    cartItems.forEach((item) => {
      const totalItemPrice =
        parseFloat(item.price.replace("THB ", "")) * item.quantity;
      totalPrice += totalItemPrice;

      receiptContent += `
        <tr>
          <td class="px-3 py-2 border-b text-center">${item.name}</td>
          <td class="px-3 py-2 border-b text-center">${item.price}</td>
          <td class="px-3 py-2 border-b text-center">${item.sweetness}</td>
          <td class="px-3 py-2 border-b text-center">${item.quantity}</td>
          <td class="px-3 py-2 border-b text-center">${totalItemPrice} THB</td>
        </tr>
      `;
    });

    receiptContent += `
        </tbody>
      </table>
      <p class="text-xl font-semibold text-right mt-4">ราคารวมทั้งหมด: ${totalPrice} THB</p>
      <hr class="border-dashed border-2 my-4 border-gray-300">
      <p class="text-sm text-gray-600">ขอบคุณที่ใช้บริการ!</p>
    </div>
    `;

    return receiptContent;
  };

  // ฟังก์ชันสำหรับการพิมพ์ใบเสร็จ
  const printReceipt = () => {
    const receiptContent = generateReceiptContent();
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>ใบเสร็จการสั่งซื้อ</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 10px;
            }
            h2 {
              text-align: center;
              font-size: 24px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              padding: 8px;
              border: 1px solid #ddd;
              text-align: center;
            }
            th {
              background-color: #f9f9f9;
            }
            hr {
              border-top: 2px dashed #ccc;
            }
          </style>
        </head>
        <body>
          ${receiptContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // ฟังก์ชันสำหรับการสั่งซื้อ
  const handlePlaceOrder = () => {
    // สามารถทำการส่งข้อมูลการสั่งซื้อไปที่เซิร์ฟเวอร์ได้ที่นี่
    // สำหรับตอนนี้ เราจะพิมพ์ใบเสร็จออกมา
    printReceipt();
    // ลบสินค้าจากตะกร้าหลังจากสั่งซื้อ
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">รายการสั่งซื้อ</h1>
        {cartItems.length === 0 ? (
          <p>ไม่มีสินค้าในตะกร้า</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-center">รูปภาพ</th>
                  <th className="py-2 px-4 border-b text-center">สินค้า</th>
                  <th className="py-2 px-4 border-b text-center">ราคา</th>
                  <th className="py-2 px-4 border-b text-center">ความหวาน</th>
                  <th className="py-2 px-4 border-b text-center">จำนวน</th>
                  <th className="py-2 px-4 border-b text-center">ลบ</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.name}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.price}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.sweetness}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {item.quantity}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-right">
              <p className="text-xl font-semibold">
                ราคารวม: {calculateTotalPrice()} THB
              </p>
            </div>
          </div>
        )}
        <div className="mt-6 flex justify-end">
          {cartItems.length > 0 && (
            <button
              onClick={handlePlaceOrder}
              className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600"
            >
              สั่งซื้อ
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Order;
