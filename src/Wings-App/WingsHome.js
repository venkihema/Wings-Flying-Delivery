import Products from "./products.json";
import { ProductsComponent } from "./ProductsComponent";
import "./Wings.css";
import { useEffect, useState } from "react";
import { CartComponent } from "./CartComponent";
export function WingsHome() {
  const [cartItems, setCartItems] = useState([]);
  const [addCart, setAddCart] = useState("");
  const key = "datakey";

  const addToCartHandler = (id) => {
    const product = Products.find((item) => item.id === id);
    const existingItemInCart = cartItems.find((item) => item.id === id);

    let updatedCart = {};
    if (!existingItemInCart) {
      //Add item to the cart
      updatedCart = [...cartItems, { ...product, count: 1 }];
    } else {
      //Update the count
      updatedCart = cartItems.map((item) => {
        if (item.id === id) {
          return { ...product, count: existingItemInCart.count + 1 };
        } else {
          return item;
        }
      });
    }
    setCartItems(updatedCart);
    localStorage.setItem(key, JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key));
    setCartItems(data);
  }, []);

  const deleteHandler = (id) => {
    const deleted = cartItems.filter((item) => item.id !== id);
    setCartItems(deleted);
    localStorage.setItem(key, JSON.stringify(deleted));
  };

  const clearCart = () => {
    const cleared = [];
    setCartItems(cleared);

    localStorage.setItem(key, JSON.stringify(cleared));
    setAddCart("Add items to your cart");
  };

  console.log(cartItems);

  return (
    <div className="homePage">
      <h1 style={{ marginBottom: "50px" }}>Wings Flying Delivery</h1>
      <div className="content_page">
        <div className="product_page">
          {Products.map((product) => (
            <ProductsComponent
              id={product.id}
              name={product.productName}
              onclick={addToCartHandler}
              image={product.image}
              key={Math.random()}
            />
          ))}
        </div>
        <div className="cart_page">
          <div>
            <h4
              style={{
                margin: "0px 0px 20px 0px",
                padding: "0px",
                textAlign: "center",
              }}
            >
              Welcome to your Cart
            </h4>
          </div>
          {cartItems.map((item) => (
            <CartComponent
              data={item.productName}
              image={item.image}
              deleteHandler={deleteHandler}
              id={item.id}
              count={item.count}
              key={Math.random()}
            />
          ))}
          {cartItems.length !== 0 && (
            <div style={{ width: "40%", margin: "auto", paddingTop: "30px" }}>
              <button
                style={{
                  width: "100%",
                  height: "40px",
                  background: "red",
                  border: "2px solid orange",
                  boxShadow: "5px 5px  10px grey",
                }}
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          )}
          <div>
            {cartItems.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "50%",
                }}
              >
                <h2>{addCart}</h2>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
