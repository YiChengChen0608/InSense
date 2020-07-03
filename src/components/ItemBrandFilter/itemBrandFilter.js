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
    //解構
    const {
        brandOrCategory,
        name,
        filterToggle,
        setFilterToggle,
        otherClass,
        originalCardData,
        setItemCardData,
    } = props;

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
    //filter
    useEffect(() => {
        console.log(originalCardData);
        const filterBrandArray = [];
        byredoSelected && filterBrandArray.push(1);
        chanelSelected && filterBrandArray.push(2);
        diptyqueSelected && filterBrandArray.push(3);
        jomaloneSelected && filterBrandArray.push(4);
        lelaboSelected && filterBrandArray.push(5);
        console.log("Brand", filterBrandArray);

        const filterFragranceArray = [];
        floralSelected && filterFragranceArray.push(1);
        freshSelected && filterFragranceArray.push(2);
        warmSelected && filterFragranceArray.push(3);
        woodySelected && filterFragranceArray.push(4);
        console.log("Fragrance", filterFragranceArray);

        if (!filterBrandArray.length && !filterFragranceArray.length) {
            console.log("original", originalCardData);
            setItemCardData(originalCardData);
        } else {
            const newCardData = originalCardData.filter((item) => {
                //先判斷有沒有在brand
                const brandId = item.brandId;
                const findBrand = filterBrandArray.length
                    ? filterBrandArray.findIndex((el) => {
                          return brandId.toString() === el.toString()
                              ? true
                              : false;
                      })
                    : 1;
                // if (filterBrand > -1) return true;//union聯集

                //再判斷有沒有在fragrance
                const fragranceId = item.fragranceId;
                const findFragrance = filterFragranceArray.length
                    ? filterFragranceArray.findIndex((el) => {
                          return fragranceId.toString() === el.toString()
                              ? true
                              : false;
                      })
                    : 1;
                // if (findFragrance > -1) return true;//union聯集
                if (findBrand > -1 && findFragrance > -1) return true;
            });
            console.log("newCardData", newCardData);
            setItemCardData(newCardData);
        }
    }, [
        byredoSelected,
        chanelSelected,
        diptyqueSelected,
        jomaloneSelected,
        lelaboSelected,
        floralSelected,
        freshSelected,
        warmSelected,
        woodySelected,
    ]);

    const filterClear = () => {
        setByredohSelected(false);
        setChanelSelected(false);
        setDiptyqueSelected(false);
        setJomaloneSelected(false);
        setLelaboSelected(false);
        setFloralSelected(false);
        setFreshSelected(false);
        setWarmSelected(false);
        setWoodySelected(false);
    };

    useEffect(() => {
        filterClear();
    }, [name]);
    return (
        <>
            <section
                className={`filter-bar-brand position-absolute ${otherClass}`}
            >
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
                                    <div className="filter-content-2">
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
                                    <div className="filter-content-2">
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
                                        <div className="btn-clear-box">
                                            <button
                                                className="btn-clear"
                                                onClick={filterClear}
                                            >
                                                Clear All
                                            </button>
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
