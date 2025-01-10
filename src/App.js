import React from "react";
import './App.css';
import AddItem from "./Components/AddItem";
import ItemList from "./Components/ItemList";
import FilterControls from "./Components/FilterControls";


function App() {
    const [items, setItems] = React.useState([]);
    const [filter, setFilter] = React.useState({
        type: "",
        sort: "latest",
        dataRange: {start: "", end: ""}
    });

    const handleAddItem = (newItem) => {
        setItems((prevState) => [newItem, ...prevState]);
    };

    const handleFilter = (filter) => {
        setFilter(filter);
    };

    const filteredItems = items.filter((item) => {
        const {type, dateRange} = filter;
        // dateRange가 undefined인 경우 기본값 처리
        const startDate = dateRange?.start || "";
        const endDate = dateRange?.end || "";

        const inType = type ? item.type === type : true;

        const inDateRange =
            startDate && endDate
                ? new Date(item.purchaseDate) >= new Date(startDate) && new Date(item.purchaseDate) <= new Date(endDate)
                : true;
        return inType && inDateRange;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (filter.sort) {
            case "priceHigh":
                return b.price - a.price;
            case "priceLow":
                return a.price - b.price;
            case "latest":
                return new Date(b.purchaseDate) - new Date(a.purchaseDate);
            case "oldest":
                return new Date(a.purchaseDate) - new Date(b.purchaseDate);
            default:
                return 0;
        }
    });

    return (
        <div className="app-container">
            <AddItem onAddItem={handleAddItem}/>
            <FilterControls onFilterChange={handleFilter}/>
            <ItemList items={sortedItems}/>
        </div>
    );
}

export default App;
