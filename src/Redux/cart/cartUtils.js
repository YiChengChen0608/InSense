export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.itemId === cartItemToAdd.itemId
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.itemId === cartItemToAdd.itemId
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.itemId === cartItemToRemove.itemId
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.itemId !== cartItemToRemove.itemId);
  }

  return cartItems.map(cartItem =>
    cartItem.itemId === cartItemToRemove.itemId
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


