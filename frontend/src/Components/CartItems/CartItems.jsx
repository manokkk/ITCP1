import React, { useState, useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from '../Assets/cart-cross_icon.png';
import { Snackbar, Button } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, updateCartItemQuantity } = useContext(ShopContext);
  const [isQuantityConfirmationVisible, setQuantityConfirmationVisible] = useState(false);
  const [isRemoveConfirmationVisible, setRemoveConfirmationVisible] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  // Snackbar queue state
  const [snackbarQueue, setSnackbarQueue] = useState([]);

  // Handle Snackbar open/close
  const handleSnackbarOpen = (message) => {
    setSnackbarQueue((prevQueue) => [...prevQueue, message]);
  };

  const handleSnackbarClose = () => {
    setSnackbarQueue((prevQueue) => prevQueue.slice(1)); // Remove the first (oldest) message
  };

  // Snackbar Alert component
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleQuantityDecrease = (e, product) => {
    if (cartItems[product.id] === 1) {
      setProductToRemove(product);
      setQuantityConfirmationVisible(true);
    } else {
      updateCartItemQuantity(product.id, cartItems[product.id] - 1);
      handleSnackbarOpen(`${product.name} quantity decreased`);
    }
  };

  const handleRemoveFromCart = (product) => {
    setProductToRemove(product);
    setRemoveConfirmationVisible(true);
  };

  const handleConfirmQuantityRemove = () => {
    if (productToRemove) {
      removeFromCart(productToRemove.id);
      handleSnackbarOpen(`${productToRemove.name} removed from cart`);
    }
    setQuantityConfirmationVisible(false);
  };

  const handleCancelQuantityRemove = () => {
    setQuantityConfirmationVisible(false);
  };

  const handleConfirmRemoveFromCart = () => {
    if (productToRemove) {
      updateCartItemQuantity(productToRemove.id, 0); // Completely remove the product from the cart
      handleSnackbarOpen(`${productToRemove.name} removed from cart`);
    }
    setRemoveConfirmationVisible(false);
  };

  const handleCancelRemoveFromCart = () => {
    setRemoveConfirmationVisible(false);
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Image</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <p>{e.name}</p>
                <img src={e.image} className="carticon-product-icon" alt={e.name} />
                <p>₱{e.new_price}</p>
                <div className="cartitems-quantity-wrapper">
                  <button onClick={(event) => handleQuantityDecrease(event, e)}>-</button>
                  <span>{cartItems[e.id]}</span>
                  <button onClick={() => updateCartItemQuantity(e.id, cartItems[e.id] + 1)}>+</button>
                </div>
                <p>₱{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => handleRemoveFromCart(e)}
                  alt="Remove item"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {isQuantityConfirmationVisible && productToRemove && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <h3>Are you sure you want to remove {productToRemove.name} from the cart?</h3>
            <button onClick={handleConfirmQuantityRemove}>Yes</button>
            <button onClick={handleCancelQuantityRemove}>No</button>
          </div>
        </div>
      )}

      {isRemoveConfirmationVisible && productToRemove && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <h3>Are you sure you want to remove {productToRemove.name} from the entire cart?</h3>
            <button onClick={handleConfirmRemoveFromCart}>Yes</button>
            <button onClick={handleCancelRemoveFromCart}>No</button>
          </div>
        </div>
      )}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₱{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₱{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="general-feedback">
          <p>Do you have any feedback or reviews?</p>
          <div className="general-feedbox">
            <input type="text" placeholder="Enter here.." />
            <button>Submit</button>
          </div>
        </div>
      </div>

      
      {snackbarQueue.map((message, index) => (
        <Snackbar
          key={index}
          open={true}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleSnackbarClose} severity="info">
            {message}
          </Alert>
        </Snackbar>
      ))}
    </div>
  );
};

export default CartItems;
