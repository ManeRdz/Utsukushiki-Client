import comfort from "../../assets/comfort.jpg";
import cleaningappliances from "../../assets/cleaningappliances.jpg";
import electronic from "../../assets/electronic.webp";
import technology from "../../assets/technology.jpeg";
import decoration from "../../assets/decoration.avif";
import bestprice from "../../assets/bestprice.png";
import quality from "../../assets/quality.png";
import customerService2 from "../../assets/customerService2.png";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WelcomeSection = () => {
  const { darkMode } = useContext(Context);
  const naveg = useNavigate();
  const weOffer = [
    {
      title: "Comfort",
      image: comfort,
    },
    {
      title: "Cleaning Appliances",
      image: cleaningappliances,
    },
    {
      title: "Technology",
      image: technology,
    },
    {
      title: "Decoration",
      image: decoration,
    },
    {
      title: "Electronic",
      image: electronic,
    },
  ];
  return (
    <section
      className={darkMode ? "welcomesec darkContentContainers" : "welcomesec"}
    >
      <div className="welcome-info-container">
        <h1 className={darkMode ? "title darkTitle" : "title"}>UTSUKUSHIKI</h1>
        <h2 className="subtitle">
          Improve your space with elegant and functional products
        </h2>
        <p className="w-sec-p">
          Discover everything that utsukushiki has for you:
        </p>
      </div>
      <div className="swiper-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {weOffer.map((item) => (
            <SwiperSlide key={item.title} className="card-swiper-slide">
              <div
                onClick={() => {
                  naveg("/products");
                }}
                className="card-container"
              >
                <img className="card-img" src={item.image} alt={item.title} />
                <article className="card-title-container">
                  <h3 className="card-title">{item.title}</h3>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-sec-imgs-container">
        <div className="w-sec-img-container">
          <label className="w-sec-img-label">The best prices</label>
          <img src={bestprice} alt="bestprice" className="w-sec-img" />
        </div>
        <div className="w-sec-img-container">
          <label className="w-sec-img-label">The best quality</label>
          <img src={quality} alt="quality" className="w-sec-img" />
        </div>
        <div className="w-sec-img-container">
          <label className="w-sec-img-label">The best customer service</label>
          <img
            src={customerService2}
            alt="customerservice"
            className="w-sec-img"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
