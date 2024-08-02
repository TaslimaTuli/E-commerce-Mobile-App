import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn1 from "../components/Auth/SignIn/SignIn1";
import SignIn2 from "../components/Auth/SignIn/SignIn2";

import SignUpForm from "../components/Auth/SignUp/SignUpForm";
import MoreInfo from "../components/Auth/SignUp/MoreInfo";

import ForgotPass from "../components/Auth/ForgotPass/ForgotPass";
import PasswordResetEmailSent from "../components/Auth/ForgotPass/PasswordResetEmailSent";
import Home from "../components/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Categories from "../components/Home/Categories";
import MoreCategories from "../components/Home/MoreCategories";
import Product from "../components/Home/Product";
import Notifications from "../components/Notification/Notifications";
import TabNavigator from "./TabNavigator";
import SearchResult from "../components/Home/SearchResults";
import Order from "../components/Orders/Orders";
import OrderDetails from "../components/Orders/OrderDetails";
import Address from "../components/Settings/Address";
import Wishlist from "../components/Settings/Wishlist";
import Payment from "../components/Settings/Payment";
import AddAddress from "../components/Settings/AddAddress";
import Favorites from "../components/Settings/Favorites";
import AddCard from "../components/Settings/AddCard";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Cart/CheckOut";
import CheckoutWithDetails from "../components/Cart/CheckoutWithDetails";
import OrderSuccess from "../components/Cart/OrderSuccess";
import Search from "../components/Home/Search";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animationEnabled: false,
					animation: "slide_from_right",
				}}
			>
				{/* Sign In */}
				<Stack.Screen name="SignIn1" component={SignIn1} />
				<Stack.Screen name="SignIn2" component={SignIn2} />
				{/* Sign Up */}
				<Stack.Screen name="SignUp" component={SignUpForm} />
				<Stack.Screen name="MoreSignUp" component={MoreInfo} />
				{/* Forgot Pass */}
				<Stack.Screen name="ForgotPass" component={ForgotPass} />
				<Stack.Screen name="ResetEmailSent" component={PasswordResetEmailSent} />
				{/* Home screen */}
				<Stack.Screen name="Home" component={TabNavigator} />
				<Stack.Screen name="Search" component={Search} />
				{/* Cart */}
				<Stack.Screen name="Cart" component={Cart} />
				<Stack.Screen name="Checkout" component={Checkout} />
				<Stack.Screen name="CheckoutWithDetails" component={CheckoutWithDetails} />
				<Stack.Screen name="OrderSuccess" component={OrderSuccess} />
				{/* Categories */}
				<Stack.Screen name="Categories" component={Categories} />
				<Stack.Screen name="MoreCategories" component={MoreCategories} />
				<Stack.Screen name="Product" component={Product} />
				<Stack.Screen name="SearchResults" component={SearchResult} />
				{/* ..... */}
				{/* Notifications */}
				<Stack.Screen name="Notifications" component={Notifications} />
				{/* Orders */}
				<Stack.Screen name="Order" component={Order} />
				<Stack.Screen name="OrderDetails" component={OrderDetails} />
				{/* Settings */}
				<Stack.Screen name="Address" component={Address} />
				<Stack.Screen name="AddAddress" component={AddAddress} />
				<Stack.Screen name="Wishlist" component={Wishlist} />
				<Stack.Screen name="Favorite" component={Favorites} />
				<Stack.Screen name="Payment" component={Payment} />
				<Stack.Screen name="AddCard" component={AddCard} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
