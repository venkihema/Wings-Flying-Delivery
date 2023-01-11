import "./Wings.css";
export function CartComponent({
  data = {},
  deleteHandler = () => {},
  id = {},
  image = {},
  count = {},
}) {
  return (
    <div key={Math.random()} className="cart_items">
      <div style={{ paddingRight: "20px" }} className="imageDiv">
        <img src={image} alt="food" />
      </div>
      <div style={{ textAlign: "left  " }} className="labelDiv">
        <label>{data}</label>
        {count > 1 ? <label> * {count}</label> : ""}
      </div>

      <button className="buttonDiv" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </div>
  );
}
