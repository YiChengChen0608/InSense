import React from "react";
import "./itemFilter.scss";
import { FiX } from "react-icons/fi";
import { withRouter } from "react-router-dom";

const ItemFilter = (props) => {
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
                                    <button className="close-icon">
                                        <FiX className="close-icon" />
                                    </button>
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

export default ItemFilter;
