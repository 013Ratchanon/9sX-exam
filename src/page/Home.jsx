import { Link } from "react-router-dom"; // นำเข้า Link จาก react-router-dom
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - Background Image with welcome text */}
      <section
        className="bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/path/to/your-image.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              ยินดีต้อนรับสู่ร้านกาแฟ SUAN NAI KOON
            </h1>
            <p className="text-lg mb-6">กาแฟสด & ชา พร้อมเสิร์ฟคุณทุกวัน!</p>
            <Link to="/menu">
              <button className="bg-yellow-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition duration-300">
                สั่งซื้อทันที
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section - Showcasing Special Menu */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          เมนูพิเศษของเรา
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/path/to/coffee-image.jpg"
              alt="Espresso"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Espresso</h3>
              <p className="text-gray-500">THB 80</p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-600 transition duration-300">
                เพิ่มในตะกร้า
              </button>
            </div>
          </div>
          {/* Repeat for other products */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">เกี่ยวกับร้านของเรา</h2>
          <p className="text-lg mb-4">
            SUAN NAI KOON
            ร้านกาแฟที่เน้นคุณภาพทั้งกาแฟสดใหม่ที่คัดสรรอย่างพิถีพิถันเพื่อมอบประสบการณ์ที่ดีที่สุดให้แก่คุณ
          </p>
          <p className="text-gray-700">
            เรามุ่งมั่นที่จะสร้างความพึงพอใจให้กับลูกค้าด้วยรสชาติที่ลงตัวและบรรยากาศอบอุ่น
            ที่ทุกท่านจะได้สัมผัส
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 SUAN NAI KOON Cafe. All rights reserved.</p>
          <div className="mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100082854086320&sk=photos"
              className="text-yellow-500 mx-2"
              target="_blank" // เพิ่ม target="_blank" เพื่อเปิดในแท็บใหม่
              rel="noopener noreferrer" // เพิ่ม rel="noopener noreferrer" เพื่อความปลอดภัย
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/suannaikoon/"
              className="text-yellow-500 mx-2"
              target="_blank" // เพิ่ม target="_blank" เพื่อเปิดในแท็บใหม่
              rel="noopener noreferrer" // เพิ่ม rel="noopener noreferrer" เพื่อความปลอดภัย
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Home;
