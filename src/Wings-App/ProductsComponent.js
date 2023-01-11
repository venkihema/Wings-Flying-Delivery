import "./Wings.css";
export function ProductsComponent({
  id = {},
  name = {},
  onclick = () => {},
  image = {},
}) {
  return (
    <div className="each_product">
      <div style={{ paddingRight: "20px" }} className="imageDiv">
        <img src={image} alt="food" />
      </div>
      {/* <label>{id}</label> */}
      <span>{name}</span>
      <button onClick={() => onclick(id)}>Add to Cart</button>
    </div>
  );
}
