import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  //품별 정보를 위한 usestate
  const [product, setProduct] = useState({
    1: {
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    2: {
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    3: {
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  });
  //옵션만 왜 따로 usestate를 해준것인가?
  //선택된 욥션값을 저장하고 변경하기 위해
  const [option, setOption] = useState("");
  //품목별 id값을 자동으로 부여하여 상품에 대한 코드를 개개인으로 짜지 않을 수 있다.
  const { id } = useParams();
  const selectProduct = product[id];
  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            상품{id}
          </div>
          <div>
            {/* params를 사용한 공통부분 */}
            <h3>이름: {selectProduct.name}</h3>
            <h3>가격: {selectProduct.price}</h3>
            <h3>좋아요: {selectProduct.likes}</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              //품목별 옵션에 들어가는 value가 다르기 때문에 클릭시 각 옵션에 맞는 값을 불러오게한다.
              //onchange이벤트를 사용
              //value값을 옵션으로 안주면 정의 되지 않아 계속 에러가 생긴다.(중요))
              onChange={(e) => setOption(e.target.value)}
              value={option}
            >
              {/* 맵함수를 통해 onchange를 통해 갖고온 value들을 재정의하여 UI에 표현  */}
              {selectProduct.options.map((option, information) => (
                <option key={information}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
