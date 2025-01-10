import React from "react";
import "./ItemList.css";

const ItemList = ({ items }) => {
    return (
        <div className="itemlist-container">
            <ul className="itemlist">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        <p>이름: {item.name}</p>
                        <p>가격: {item.price}</p>
                        <p>유형: {item.type}</p>
                        <p>구입 날짜: {item.purchaseDate}</p>
                        {item.showMemo && <p>메모: {item.memo}</p>}
                        <p>재구매 의사: {item.repurchase === "yes" ? "한다" : "안한다"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ItemList;