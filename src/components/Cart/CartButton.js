import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = () => {
	const dispatch = useDispatch();

	// update the carButton quantity
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	);
};

export default CartButton;
