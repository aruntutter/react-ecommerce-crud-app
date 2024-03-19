import { useParams, useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const CategoryPage = () => {
  const { categoryname } = useParams();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const navigate = useNavigate();

  // filter product
  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.toLowerCase().includes(categoryname.toLowerCase())
  );
  console.log(filterProduct);
  console.log(categoryname);

  return (
    <Layout>
      <div className="heading">
        <h2>{categoryname}</h2>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="product-card-container">
          {/* Product */}
          {filterProduct.length > 0 ? (
            <>
              {filterProduct.map((item, index) => {
                const { id, title, price, productImageUrl } = item;
                return (
                  <div key={index} className="product-card">
                    <div
                      className="product-image"
                      onClick={() => navigate(`/productinfo/${id}`)}
                    >
                      <img
                        src={productImageUrl}
                        alt={title}
                        className="product-image"
                      />
                    </div>
                    <div className="product-details">
                      <p className="website-name">ezBuy</p>
                      <h2 className="product-title">
                        {title.substring(0, 25)}
                      </h2>
                      <p className="product-price">&#8377;{price}</p>
                      <div className="add-to-cart-btn">
                        <button>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>No {categoryname} Found!</>
          )}
        </div>
      )}
    </Layout>
  );
};

export default CategoryPage;
