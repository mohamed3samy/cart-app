import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

// Fetching Data
export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				"https://cart-app-36408-default-rtdb.firebaseio.com/cart-app.json"
			);

			if (!response.ok) {
				throw new Error("Could not fetch cart data!");
			}

			const data = await response.json();
			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity,
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		}
	};
};

/*
 * Sending Cart Data.
 * handling http states feedback.
 * using an action creator Thunk.
 */
export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "Pending",
				title: "Sending...",
				message: "Sending Cart Data!",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://cart-app-36408-default-rtdb.firebaseio.com/cart-app.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items,
						totalQuantity: cart.totalQuantity,
					}),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed.");
			}
		};

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success!",
					message: "Sent cart data successfully",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		}
	};
};
