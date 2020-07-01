import React, { useState, useEffect } from "react";
import "./itemBrandFilter.scss";
import {
    FiX,
    FiCircle,
    FiCheckCircle,
    FiCheckSquare,
    FiSquare,
} from "react-icons/fi";
// import { withRouter } from "react-router-dom";

const ItemBrandFilter = (props) => {
    //確認
    const [confirm, setConfirm] = useState(false);
    //品牌 brand
    const [byredoSelected, setByredohSelected] = useState(false);
    const [chanelSelected, setChanelSelected] = useState(false);
    const [diptyqueSelected, setDiptyqueSelected] = useState(false);
    const [jomaloneSelected, setJomaloneSelected] = useState(false);
    const [lelaboSelected, setLelaboSelected] = useState(false);
    //fragrance
    const [floralSelected, setFloralSelected] = useState(false);
    const [freshSelected, setFreshSelected] = useState(false);
    const [warmSelected, setWarmSelected] = useState(false);
    const [woodySelected, setWoodySelected] = useState(false);

    const [filterToggle, setFilterToggle] = useState(false);

    const filterSelect = (e) => {
        // console.log(e.currentTarget);
        console.log(e.currentTarget.getAttribute("name"));

        switch (e.currentTarget.getAttribute("name")) {
            case "byredo":
                setByredohSelected(!byredoSelected);
                break;
            case "chanel":
                setChanelSelected(!chanelSelected);
                break;
            case "diptyque":
                setDiptyqueSelected(!diptyqueSelected);
                break;
            case "jomalone":
                setJomaloneSelected(!jomaloneSelected);
                break;
            case "lelabo":
                setLelaboSelected(!lelaboSelected);
                break;
            case "floral":
                setFloralSelected(!floralSelected);
                break;
            case "fresh":
                setFreshSelected(!freshSelected);
                break;
            case "warm":
                setWarmSelected(!warmSelected);
                break;
            case "woody":
                setWoodySelected(!woodySelected);
                break;
            default:
                break;
        }
    };
    return (
        <>
            <section className="filter-bar position-absolute">
                <div className="filter-wrapper">
                    <div className="filter-bar-element">
                        {/* <button className="filter-bar-opener" label="Filter">
                        Filter
                    </button> */}
                        <section className="filter filter-bar-layer layer-opened">
                            <div className="filter-layer layer">
                                <div className="filter-layer-header d-flex">
                                    <span
                                        className="close-icon-box"
                                        onClick={() => setFilterToggle(false)}
                                    >
                                        <FiX className="close-icon" />
                                    </span>
                                    <h2>Filter By Brand & Fragrance</h2>
                                </div>
                                <div className="filter-layer d-flex">
                                    <div className="filter-content">
                                        <div
                                            className="category-name d-flex"
                                            name="byredo"
                                            onClick={filterSelect}
                                        >
                                            {byredoSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>Byredo</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="chanel"
                                            onClick={filterSelect}
                                        >
                                            {chanelSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>Chanel</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="diptyque"
                                            onClick={filterSelect}
                                        >
                                            {diptyqueSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>Diptyque</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="jomalone"
                                            onClick={filterSelect}
                                        >
                                            {jomaloneSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>Jo Malone Londen</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="lelabo"
                                            onClick={filterSelect}
                                        >
                                            {lelaboSelected ? (
                                                <FiCheckSquare />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>Le Labo</p>
                                        </div>
                                    </div>
                                    <div className="filter-content">
                                        <div
                                            className="category-name d-flex"
                                            name="floral"
                                            onClick={filterSelect}
                                        >
                                            {floralSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>花香調</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="fresh"
                                            onClick={filterSelect}
                                        >
                                            {freshSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>清新香調</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="warm"
                                            onClick={filterSelect}
                                        >
                                            {warmSelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>溫暖辛辣香調</p>
                                        </div>
                                        <div
                                            className="category-name d-flex "
                                            name="woody"
                                            onClick={filterSelect}
                                        >
                                            {woodySelected ? (
                                                <FiCheckSquare className="checkbox" />
                                            ) : (
                                                <FiSquare />
                                            )}
                                            <p>木質香調</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemBrandFilter;
