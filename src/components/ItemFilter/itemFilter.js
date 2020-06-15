import React from "react";
import "./itemFilter.scss";
import { FiX } from "react-icons/fi";
import { withRouter } from "react-router-dom";

const ItemFilter = (props) => {
    return (
        <>
           <aside>
            <div class="leaving">
                <label for="aside-toggle">
                <FiX className="" />   
                </label> 
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <input id="search" type="text" class="form-control">
                        <label for="search" class="float-title">Search</label>
                    </div>
                </div>
                <div class="col-auto">
                    <button type="button" class="search">
                        
                    </button>
                </div>
            </div>
            <div>
                <div class="custom-control custom-radio custom-control-inline mr-5">
                    <input type="radio" id="Woman" name="gender" class="custom-control-input">
                    <label class="custom-control-label" for="Woman">Woman</label>
                </div>
    
                <div class="custom-control custom-radio custom-control-inline ml-5">
                    <input type="radio" id="Man" name="gender" class="custom-control-input">
                    <label class="custom-control-label" for="Man">Man</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline ml-5">
                    <input type="radio" id="All" name="gender" class="custom-control-input">
                    <label class="custom-control-label" for="All">All</label>
                </div>
            </div>
        </aside>
        </>
    );
};

export default ItemFilter;
