import React, { useState, useEffect } from "react";
import "./itemBrandFilter.scss";
import { FiX } from "react-icons/fi";
// import { withRouter } from "react-router-dom";

const brandItem = [
    { itemName: "BYREDO", name: "byredo", pathUrl: "/itemlist" },
    { itemName: "CHANEL", name: "chanel" },
    { itemName: "DIPTYQUE", name: "diptyque" },
    { itemName: "Jo Malone London", name: "jomalonelondon" },
    { itemName: "LeLabo", name: "lelabo" },
];

const ItemBrandFilter = (props) => {
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

export default ItemBrandFilter;
