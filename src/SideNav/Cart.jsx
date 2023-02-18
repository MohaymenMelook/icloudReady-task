import { Context } from "../Context/Context";
import React, { useContext, useEffect } from "react";
import Footer from "../footer/Footer";
import rectangle from "../image/Rectangle 32.png";
import cart_img from "../image/cart@3x.png";
import "./SideNav.css";
import Navbar from "../Navbar/Navbar";
import {
  Row,
  Table,
  Popconfirm,
  Divider,
  Col,
  Button,
  Alert,
  Space,
} from "antd";
import {
  CloseCircleOutlined,
  DeleteFilled,
  CaretUpFilled,
  CaretDownFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, setToggleCart, setCart, setToggleKitchen } =
    useContext(Context);
  useEffect(() => {
    setToggleKitchen(false);
  }, []);
  const handleCloseBtn = () => {
    setToggleCart(false);
    navigate("/");
  };

  const deleteProduct = (key) => {
    const newcart = cart.filter((product) => product.key !== key);
    setCart(newcart);
  };

  const increment = (product) => {
    product.quantity += 1;
    setCart([...cart]);
  };
  const decrement = (product) => {
    product.quantity -= 1;
    if (product.quantity === 0) {
      const newcart = cart.filter((item) => item.key !== product.key);
      setCart([...newcart]);
    } else {
      setCart([...cart]);
    }
  };

  const empty_cart = (
    <div className="emptyCart text-center">
      <img className="w-100" src={cart_img} alt="empty-card" />
      <h6 className="mt-3">Your run cart is empty!</h6>
      <span className="text-muted">start add your requests here</span>
    </div>
  );

  // const columns = [
  //   {
  //     key: 1,
  //     title: "Product",
  //     dataIndex: "product",
  //     key: "product",
  //   },
  //   {
  //     key: 2,
  //     title: "Qty.",
  //     dataIndex: "quantity",
  //     key: "quantity",
  //   },
  //   {
  //     key: 3,
  //     title: "remove",
  //     dataIndex: "",
  //     key: "x",
  //     render: (_, record) => (
  //       <Popconfirm
  //         title="Sure to delete?"
  //         onConfirm={() => deleteProduct(record.key)}
  //       >
  //         <DeleteFilled
  //           style={{ color: "red", marginLeft: "6px", cursor: "pointer" }}
  //         />
  //       </Popconfirm>
  //     ),
  //   },
  // ];

  // const table = (
  //   <div className="w-100">
  //     <Table columns={columns} dataSource={cart} pagination={false} />
  //   </div>
  // );

  const product = (
    <div className="w-100">
      <Divider style={{ marginTop: "0", marginBottom: "15px" }} />
      <Row>
        <Col md={{ span: 14 }} style={{ marginLeft: "28px" }}>
          Product
        </Col>
        <Col md={{ span: 4 }}>Qty.</Col>
        <Col md={{ span: 4 }}>Remove</Col>
        <Divider style={{ marginTop: "15px" }} />
      </Row>

      {cart.map((product, index) => {
        return (
          <Row key={index}>
            <Col
              md={{ span: 15 }}
              style={{ marginLeft: "6px" }}
              className="d-flex"
            >
              <div className="img_product">
                <img
                  src={rectangle}
                  style={{ width: "17px", height: "17px" }}
                />
              </div>
              <div>
                <div>{product.product}</div>
                <div className="price">{`Default Title ,${product.price}DTSU`}</div>
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <Row className="quantity">
                <Col md={{ span: 8 }}>{product.quantity}</Col>
                <Col md={{ span: 8 }}>
                  <span>
                    <CaretUpFilled
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        increment(product);
                      }}
                    />
                  </span>
                  <span>
                    <CaretDownFilled
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        decrement(product);
                      }}
                    />
                  </span>
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 4 }}>
              <Popconfirm
                title="Sure to delete?"
                onClick={() => deleteProduct(product.key)}
              >
                <DeleteFilled
                  style={{
                    color: "#DC1C6A",
                    marginLeft: "18px",
                    cursor: "pointer",
                    fontSize: "22px",
                  }}
                />
              </Popconfirm>
            </Col>
            <Divider />
          </Row>
        );
      })}
      <Row>
        <Col md={{ span: 17 }} style={{ marginLeft: "16px" }}>
          subtotal
        </Col>
        <Col md={{ span: 3 }} className="subTotal">
          1.00DTSUs
        </Col>
      </Row>
      <Row style={{ marginTop: "15px" }}>
        <Col md={{ span: 10 }} style={{ marginLeft: "16px" }}>
          new Payment
        </Col>
        <Col md={{ span: 12 }} className="subTotal">
          No,inclusive in your package
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col md={{ span: 17 }} style={{ marginLeft: "16px" }}>
          Total Unites Consumed{" "}
        </Col>
        <Col md={{ span: 3 }} className="subTotal">
          1.00DTSUs
        </Col>
      </Row>
      <Row>
        <div className="btn mt-2">
          <Button
            shape="round"
            size="large"
            style={{
              backgroundColor: "#0097C2",
              color: "#FFFFFF",
              width: "323px",
              height: "48px",
            }}
          >
            Checkout
          </Button>
        </div>
      </Row>
      <Row>
        <div className="btn mt-2">
          <Button
            shape="round"
            size="large"
            style={{
              color: "#0097C2",
              width: "323px",
              height: "48px",
              border: "2px solid #0097C2",
            }}
          >
            Back to Run informartion
          </Button>
        </div>
      </Row>
      <Row className="justify-content-center">
        <Space>
          <Alert
            description="You have made a great choose let's Run and be ready"
            type="warning"
            style={{ width: "323px" }}
          />
        </Space>
      </Row>
      <Row className="mt-2 justify-content-center">
        <Alert
          description="some requests can take a week or more to delivered"
          type="info"
          showIcon
          style={{ width: "323px" }}
        />
      </Row>
    </div>
  );
  return (
    <>
      <div className="cartContainer">
        <div className="navContainer">
          <Navbar />
        </div>
        <div className="  vh-100 ">
          <div id="Nav">
            <Row className="header_side_nav">
              <div className="d-flex align-items-center">
                <CloseCircleOutlined
                  className="closeBtn"
                  onClick={handleCloseBtn}
                />
                <h6 className="run_cart">Your Run Cart</h6>
              </div>
              <div className="requestContainer">
                <h6 className="requestNum">request in your run</h6>
                <div className="d-flex justify-content-center  ">
                  <span
                    className={`rounded-circle d-flex justify-content-center align-items-center numbericon ml-1`}
                  >
                    {cart.length}
                  </span>
                </div>
              </div>
            </Row>
            <Row>{cart.length === 0 ? empty_cart : product}</Row>
          </div>
        </div>
        <div className="footerCart">
          <Footer />
        </div>
      </div>
    </>
  );
}
