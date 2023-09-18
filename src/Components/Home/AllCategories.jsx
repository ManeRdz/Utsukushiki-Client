import { useNavigate } from "react-router-dom";
import cama from "../../assets/cama.webp";
import cutBed from "../../assets/cutBed.png";
import laptop from "../../assets/laptop.jpg";
import cutLaptop from "../../assets/cutLaptop.png";
import bañera from "../../assets/bañera.jpg";
import cutBañera from "../../assets/cutBañera.png";
import lavadora from "../../assets/lavadora.jpg";
import cutLavadora from "../../assets/cutLavadora.png";
import sofa from "../../assets/sofa.jpg";
import cutSofa from "../../assets/cutSofa.png";
import kitchen from "../../assets/kitchen.jpg";
import cutStove from "../../assets/cutStove.png";
import { useContext } from "react";
import { Context } from "../../context/Context";

const AllCategories = () => {
  const navigate = useNavigate();
  const { setFilters, filters } = useContext(Context);
  const categories = [
    {
      category: "Kitchen",
      original: kitchen,
      cut: cutStove,
    },
    {
      category: "Cleaning Solutions",
      original: lavadora,
      cut: cutLavadora,
    },
    {
      category: "Living Room",
      original: sofa,
      cut: cutSofa,
    },
    {
      category: "Technology",
      original: laptop,
      cut: cutLaptop,
    },
    {
      category: "Bedroom",
      original: cama,
      cut: cutBed,
    },
    {
      category: "Bathroom",
      original: bañera,
      cut: cutBañera,
    },
  ];
  const handleClick = (category) => {
    navigate(`/products`);
    setFilters({ ...filters, category: category });
    window.scrollTo({ top: 0 });
  };
  return (
    <section className="allCategories">
      <h3 className="allCategoriesTitle">
        <span>Explore</span> all categories
      </h3>
      <div className="categories">
        {categories.map((e) => (
          <div key={e.category} className="categoryContainer">
            <h4 className="categoryTitle">{e.category}</h4>
            <div className="imgs-box" onClick={() => handleClick(e.category)}>
              <img
                src={e.original}
                alt="category-img"
                className="category-img"
              />
              <img src={e.cut} alt="category-modal" className="cut-img" />
              <span className="modal"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllCategories;
