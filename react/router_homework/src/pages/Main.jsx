import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Main() {
  const [product, setProduct] = useState([
    { name: "멋진 바지", price: 20000 },
    { name: "멋진 셔츠", price: 10000 },
    { name: "멋진 신발", price: 30000 },
  ]);
  const navigate = useNavigate();
  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 여름 추천템 🔥</h2>

          <div
            link
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {/* 맵함수를 통해서 재배열 후 다시 뿌려준다 */}
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
          </div>

          <Link to="/products">더보기</Link>
        </section>

        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
