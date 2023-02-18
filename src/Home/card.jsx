import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import path6 from "../image/Path6.png";

function Card({ id, img, title, body, price, AddToCart, AddToKitchen }) {
  return (
    <div className=" text-white">
      <div className=" border rounded-4 bg-white">
        <div className="text-center">
          <img className=" my-4" src={img} alt={`${title}`} />
        </div>
        <div
          id={`${id}`}
          className="border border-5 border-white rounded-4 p-3"
        >
          <h6>{title}</h6>
          <p style={{ height: "52px" }}>{body}</p>
          <div className=" d-flex justify-content-between align-content-center mt-2">
            <span className="mt-2">{price} DTSU*</span>
            <div className=" d-flex">
              <div
                id="cardIcon"
                className=" rounded-circle d-flex justify-content-center align-items-center mx-1"
                onClick={AddToKitchen}
              >
                <img src={path6} width="16px" height="16px" alt="share_icon" />
              </div>

              <Button
                id="buttonIcon"
                shape="circle"
                icon={<PlusOutlined style={{ fontSize: "17px" }} />}
                onClick={AddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
