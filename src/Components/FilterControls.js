// FilterControls.js
import React, { useState } from "react";
import "./FilterControls.css";

const FilterControls = ({ onFilterChange }) => {
    const [filter, setFilter] = useState({
        type: "",
        sort: "latest",
        dateRange: { start: "", end: "" }, // dateRange 초기값을 올바르게 정의
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value, // 일반 필드 업데이트
        }));
    };

    const handleDateChange = (e) => {
        const { name, value } = e.target;
        setFilter((prevFilter) => ({
            ...prevFilter,
            dateRange: { ...prevFilter.dateRange, [name]: value }, // dateRange 업데이트
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange(filter); // 부모로 상태 전달
    };

    return (
        <div className="filter-controls">
            <form onSubmit={handleSubmit}>
                <div className="filter-control">
                    <label>유형</label>
                    <input type="text" name="type" value={filter.type} onChange={handleChange} />
                </div>
                <div className="filter-control">
                    <label>정렬</label>
                    <select name="sort" value={filter.sort} onChange={handleChange}>
                        <option value="latest">최신 순</option>
                        <option value="oldest">오래된 순</option>
                        <option value="priceHigh">가격 높은 순</option>
                        <option value="priceLow">가격 낮은 순</option>
                    </select>
                </div>
                <div className="filter-control">
                    <label>시작 날짜</label>
                    <input
                        type="date"
                        name="start"
                        value={filter.dateRange.start} // dateRange.start 참조
                        onChange={handleDateChange}
                    />
                </div>
                <div className="filter-control">
                    <label>종료 날짜</label>
                    <input
                        type="date"
                        name="end"
                        value={filter.dateRange.end} // dateRange.end 참조
                        onChange={handleDateChange}
                    />
                </div>
                <button type="submit">필터 적용</button>
            </form>
        </div>
    );
};

export default FilterControls;