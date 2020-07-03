import React, { useState, useEffect } from "react";
import "./itemCategoryFilter.scss";
import {
    FiX,
    FiCircle,
    FiCheckCircle,
    FiCheckSquare,
    FiSquare,
} from "react-icons/fi";
// import { withRouter } from "react-router-dom";

const ItemCategoryFilter = (props) => {
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

    //category
    const [bodyWashSelected, setBodyWashSelected] = useState(false);
    const [lotionsOilsSelected, setLotionsOilsSelected] = useState(false);
    const [handsCareSelected, setHandsCareSelected] = useState(false);
    const [perfumeSelected, setPerfumeSelected] = useState(false);
    const [hairMistSelected, setHairMistSelected] = useState(false);
    const [homeScentsSelected, setHomeScentsSelected] = useState(false);
    //fragrance
    const [floralSelected, setFloralSelected] = useState(false);
    const [freshSelected, setFreshSelected] = useState(false);
    const [warmSelected, setWarmSelected] = useState(false);
    const [woodySelected, setWoodySelected] = useState(false);

    const filterSelect = (e) => {
        // console.log(e.currentTarget);
        console.log(e.currentTarget.getAttribute("name"));

        switch (e.currentTarget.getAttribute("name")) {
            case "bodyWash":
                setBodyWashSelected(!bodyWashSelected);
                break;
            case "lotionsOils":
                setLotionsOilsSelected(!lotionsOilsSelected);
                break;
            case "handsCare":
                setHandsCareSelected(!handsCareSelected);
                break;
            case "perfume":
                setPerfumeSelected(!perfumeSelected);
                break;
            case "hairMist":
                setHairMistSelected(!hairMistSelected);
                break;
            case "homeScents":
                setHomeScentsSelected(!homeScentsSelected);
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
        const filterCategoryArray = [];
        bodyWashSelected && filterCategoryArray.push(4);
        lotionsOilsSelected && filterCategoryArray.push(5);
        handsCareSelected && filterCategoryArray.push(6);
        perfumeSelected && filterCategoryArray.push(7);
        hairMistSelected && filterCategoryArray.push(8);
        homeScentsSelected && filterCategoryArray.push(3);
        console.log("Category", filterCategoryArray);

        const filterFragranceArray = [];
        floralSelected && filterFragranceArray.push(1);
        freshSelected && filterFragranceArray.push(2);
        warmSelected && filterFragranceArray.push(3);
        woodySelected && filterFragranceArray.push(4);
        console.log("Fragrance", filterFragranceArray);

        if (!filterCategoryArray.length && !filterFragranceArray.length) {
            console.log("original", originalCardData);
            setItemCardData(originalCardData);
        } else {
            const newCardData = originalCardData.filter((item) => {
                //先判斷有沒有在category
                const itemCategoryId = item.itemCategoryId;
                const findCategory = filterCategoryArray.length
                    ? filterCategoryArray.findIndex((el) => {
                          return itemCategoryId.toString() === el.toString()
                              ? true
                              : false;
                      })
                    : 1;
                // if (findCategory > -1) return true;//union聯集

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
                if (findCategory > -1 && findFragrance > -1) return true;
            });
            console.log("newCardData", newCardData);
            setItemCardData(newCardData);
        }
    }, [
        bodyWashSelected,
        lotionsOilsSelected,
        handsCareSelected,
        perfumeSelected,
        hairMistSelected,
        homeScentsSelected,
        floralSelected,
        freshSelected,
        warmSelected,
        woodySelected,
    ]);

    const filterClear = () => {
        setBodyWashSelected(false);
        setLotionsOilsSelected(false);
        setHandsCareSelected(false);
        setPerfumeSelected(false);
        setHairMistSelected(false);
        setHomeScentsSelected(false);
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
                className={`filter-bar-cat position-absolute ${otherClass}`}
            >
                <div className="filter-wrapper">
                    <div className="filter-bar-element">
                        <section className="filter filter-bar-layer layer-opened">
                            <div className="filter-layer-header d-flex">
                                <span
                                    className="close-icon-box"
                                    onClick={() => setFilterToggle(false)}
                                >
                                    <FiX className="close-icon" />
                                </span>
                                <h2>Filter By Category & Fragrance</h2>
                            </div>

                            <div className="filter-layer d-flex">
                                <div className="filter-content">
                                    <div
                                        className="category-name d-flex"
                                        name="bodyWash"
                                        onClick={filterSelect}
                                    >
                                        {bodyWashSelected ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>沐浴清潔</p>
                                    </div>
                                    <div
                                        className="category-name d-flex "
                                        name="lotionsOils"
                                        onClick={filterSelect}
                                    >
                                        {lotionsOilsSelected ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>乳液與保養油</p>
                                    </div>
                                    <div
                                        className="category-name d-flex "
                                        name="handsCare"
                                        onClick={filterSelect}
                                    >
                                        {handsCareSelected ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>手部保養</p>
                                    </div>
                                    <div
                                        className="category-name d-flex "
                                        name="perfume"
                                        onClick={filterSelect}
                                    >
                                        {perfumeSelected ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>香水</p>
                                    </div>
                                    <div
                                        className="category-name d-flex "
                                        name="hairMist"
                                        onClick={filterSelect}
                                    >
                                        {hairMistSelected ? (
                                            <FiCheckSquare />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>髮香噴霧與隨身香水</p>
                                    </div>
                                    <div
                                        className="category-name d-flex "
                                        name="homeScents"
                                        onClick={filterSelect}
                                    >
                                        {homeScentsSelected ? (
                                            <FiCheckSquare className="checkbox" />
                                        ) : (
                                            <FiSquare />
                                        )}
                                        <p>室內香氛</p>
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
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemCategoryFilter;
