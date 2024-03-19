import "./Category.css";
import iconFashion from "../../assets/category-icons/fashion-icon.png";
import iconShirt from "../../assets/category-icons/shirt-icon.png";
import iconJacket from "../../assets/category-icons/jacket-icon.png";
import iconMobile from "../../assets/category-icons/mobile-icon.png";
import iconLaptop from "../../assets/category-icons/laptop-icon.png";
import iconShoe from "../../assets/category-icons/shoes-icon.png";
import iconHome from "../../assets/category-icons/home-icon.png";
import iconBook from "../../assets/category-icons/book-icon.png";
import { useNavigate } from "react-router-dom";

const category = [
  {
    image: iconFashion,
    name: "Fashion",
  },
  {
    image: iconShirt,
    name: "Shirt",
  },
  {
    image: iconJacket,
    name: "Jacket",
  },
  {
    image: iconMobile,
    name: "Mobile",
  },
  {
    image: iconLaptop,
    name: "Laptop",
  },
  {
    image: iconShoe,
    name: "Shoe",
  },
  {
    image: iconHome,
    name: "Home",
  },
  {
    image: iconBook,
    name: "Book",
  },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="category-scroll-container">
      <div className="category-scroll">
        {category.map((item, index) => (
          <div
            className="category-item"
            onClick={() => navigate(`/category/${item.name}`)}
            key={index}
          >
            <div className="category-image">
              <img src={item.image} alt="img" />
            </div>
            <h1 className="category-name">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
