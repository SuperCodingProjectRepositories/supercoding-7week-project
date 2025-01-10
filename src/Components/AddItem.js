import React from 'react';
import './AddItem.css';

const AddItem = ({onAddItem}) => {
    const [formData, setFormData] = React.useState({
        name: "",
        price: "",
        type: "",
        purchaseDate: "",
        memo: "",
        showMemo: false,
        repurchase: "",
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => (
            {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }
        ));
    }

    const handeSubmit = (e) => {
        e.preventDefault();
        onAddItem(formData);
        setFormData({
            name: "",
            price: "",
            type: "",
            purchaseDate: "",
            memo: "",
            showMemo: false,
            repurchase: "",
        });
    }

    return (
        <div className="container">
            <form className={"addItemForm"} onSubmit={handeSubmit}>
                <div className="itemForm-list">
                    <label>이름</label>
                    <input type={"text"} name={"name"} value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="itemForm-list">
                    <label>가격</label>
                    <input type={"number"} name={"price"} value={formData.price} onChange={handleChange} required/>
                </div>
                <div className="itemForm-list">
                    <label>유형</label>
                    <input type={"text"} name={"type"} value={formData.type} onChange={handleChange} required/>
                </div>
                <div className="itemForm-list">
                    <label>구입 날짜</label>
                    <input type={"date"} name={"purchaseDate"} value={formData.purchaseDate} onChange={handleChange}
                           required/>
                </div>
                <div className="itemForm-list">
                    <label>메모
                        <input type={"checkbox"} name={"showMemo"} value={formData.showMemo} onChange={handleChange}/>
                    </label>
                    {formData.showMemo && (
                        <input type={'text'} name={"memo"} value={formData.memo} onChange={handleChange}/>
                    )}
                </div>
                <div className="itemForm-list">
                    <label>재구매 의사</label>
                    <div>
                        <input type={"radio"} id={'repurchase-yes'} name="repurchase" value={"yes"}
                               checked={formData.repurchase === "yes"} onChange={handleChange}/>
                        <label htmlFor={'repurchase-yes'}>한다</label>
                        <input type={"radio"} id={'repurchase-no'} name="repurchase" value={"no"}
                        checked={formData.repurchase === "no"} onChange={handleChange}/>
                        <label htmlFor={"repurchase-no"}>안한다.</label>
                    </div>
                </div>
                <button type={"submit"}>추가하기</button>
            </form>
        </div>
    );
};

export default AddItem;