import React, { useState, useEffect } from "react";
import "./itemCategoryFilter.scss";
import { FiX } from "react-icons/fi";
// import { withRouter } from "react-router-dom";

const categoryItem = [
    { itemName: "室內香氣", name: "home-scents" },
    { itemName: "沐浴清潔", name: "" },
    { itemName: "乳液與保養油", name: "" },
    { itemName: "手部保養", name: "" },
    { itemName: "香水", name: "" },
    { itemName: "髮香噴霧與隨身香水", name: "" },
];

const ItemCategoryFilter = (props) => {
    const [filterToggle, setFilterToggle] = useState(false);
    return (
        <>
            <section className="filter-bar">
                <div className="filter-wrapper">
                    <div className="filter-bar-element">
                        <button className="filter-bar-opener" label="Filter">
                            Filter
                        </button>
                        <section className="filter filter-bar-layer layer-opened">
                            <div className="filter-layer layer">
                                <div className="filter-layer-header">
                                    <span
                                        className="close-icon"
                                        onClick={() => setFilterToggle(false)}
                                    >
                                        <FiX className="close-icon" />
                                    </span>

                                    <h2>Filter</h2>
                                </div>
                                <div className="filter-content">
                                    <h3 className="filter-title">Category</h3>
                                </div>
                                <section className="category-filter"></section>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemCategoryFilter;
