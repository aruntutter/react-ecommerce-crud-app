import "./Category.css";
import iconFashion from "../../assets/category-icons/fashion-icon.png";
import iconShirt from "../../assets/category-icons/shirt-icon.png";
import iconJacket from "../../assets/category-icons/jacket-icon.png";
import iconMobile from "../../assets/category-icons/mobile-icon.png";
import iconLaptop from "../../assets/category-icons/laptop-icon.png";
import iconShoe from "../../assets/category-icons/shoes-icon.png";
import iconHome from "../../assets/category-icons/home-icon.png";
import iconBook from "../../assets/category-icons/book-icon.png";

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
  return (
    <div className="category-scroll-container">
      <div className="category-scroll">
        {category.map((item, index) => (
          <div className="category-item" key={index}>
            <div className="category-image">
              <img src={item.image} alt="img" />
              {/* <div class="overlay"></div> */}
            </div>
            <h1 className="category-name">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
