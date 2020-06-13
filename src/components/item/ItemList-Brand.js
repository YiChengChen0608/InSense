import React from "./node_modules/react";
import "../../styles/class/itemList.scss";
import { FiBookmark } from "./node_modules/react-icons/fi";
import { withRouter } from "react-router-dom";

function ProductList(props) {
    const [mycart, setMycart] = useState([]);
    const [dataLoading, setDataLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [productName, setProductName] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateCartToLocalStorage = (value) => {
        // 開啟載入指示
        //setDataLoading(true)

        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

        console.log("currentCart", currentCart);

        const newCart = [...currentCart, value];
        localStorage.setItem("cart", JSON.stringify(newCart));

        console.log("newCart", newCart);
        // 設定資料
        setMycart(newCart);
        setProductName(value.name);
        handleShow();
        //alert('已成功加入購物車')
    };

    // componentDidMount 一開始就會開始載入資料
    useEffect(() => {}, []);

    // componentDidUpdate(相依mycart)
    // 每次total資料有變動就會3秒後關掉載入指示
    useEffect(() => {
        // setTimeout(() => {
        //   setDataLoading(false)
        // }, 500)
        //alert('已成功加入購物車')
    }, [mycart]);

    const messageModal = (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            
    );

    const spinner = (
        <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    );

    const display = (
        <>
           
        </>
    );

    return (
        <>
            <>
                {messageModal}
                <div className="container">
                    {dataLoading ? spinner : display}
                </div>
            </>
        </>
    );
}

export default withRouter(itemList);

const ProductList = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={props.src} />
                </div>
                <div className="card-content d-flex justify-content-between align-items-center">
                    <p>{props.date}</p>
                    <FiShare2 className="share-icon" />
                </div>
                <p className="card-name">{props.className}</p>
                <a
                    className="card-btn text-center"
                    href="javascript:;"
                    role="button"
                >
                    參加
                </a>
            </div>
        </>
    );
};

export default ClassCard;
