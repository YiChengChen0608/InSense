import React from 'react';
import { connect } from 'react-redux';

import SubmitButton from '../SubmitButton/submitButton';
import { addItem } from '../../Redux/cart/cartAction';
import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <SubmitButton inverted>
        加入購物車
      </SubmitButton>
      {/* <SubmitButton onClick={() => addItem(item)} inverted>
        Add to cart
      </SubmitButton> */}
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
