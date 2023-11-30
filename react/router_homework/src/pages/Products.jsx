import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([
    { name: "멋진 바지", price: 20000 },
    { name: "멋진 셔츠", price: 10000 },
    { name: "멋진 신발", price: 30000 },
  ]);
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {product.map((item, index) => {
            return (
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <div
                  onClick={() => {
                    navigate(`/products/${index + 1}`);
                  }}
                >
                  {item.name}
                </div>
                <div>{item.price}</div>
              </div>
            );
          })}
          <button>가격별로 보기</button>
        </div>
      </div>
    </>
  );
}

export default Products;
