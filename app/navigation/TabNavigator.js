import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useColorScheme } from "react-native";

// Import icons for light mode
import HomeIcon from "../assets/BottomTab/HomeIcon.svg";
import NotificationIcon from "../assets/BottomTab/NotificationIcon.svg";
import OrderIcon from "../assets/BottomTab/OrderIcon.svg";
import SettingsIcon from "../assets/BottomTab/SettingsIcon.svg";

// Import icons for dark mode
import HomeWhite from "../assets/BottomTab/HomeWhite.svg";
import NotificationWhite from "../assets/BottomTab/NotificationWhite.svg";
import OrderWhite from "../assets/BottomTab/OrderWhite.svg";
import SettingsWhite from "../assets/BottomTab/SettingsWhite.svg";

// Import icons for focused state
import HomeViolet from "../assets/BottomTab/HomeViolet.svg";
import NotificationViolet from "../assets/BottomTab/NotificationViolet.svg";
import OrderViolet from "../assets/BottomTab/OrderViolet.svg";
import SettingsViolet from "../assets/BottomTab/SettingsViolet.svg";

// Import screens
import Home from "../components/Home/Home";
import Notifications from "../components/Notification/Notifications";
import Order from "../components/Orders/Orders";
import Settings from "../components/Settings/Settings";

export default function TabNavigator() {
	const colorScheme = useColorScheme();
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					backgroundColor: colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)",
					height: 80,
					borderTopWidth: 0,
					elevation: 0,
				},
			}}
		>
			<Tab.Screen
				name="HomeTab"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <HomeViolet /> : colorScheme === "light" ? <HomeIcon /> : <HomeWhite />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name="NotificationTab"
				component={Notifications}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <NotificationViolet /> : colorScheme === "light" ? <NotificationIcon /> : <NotificationWhite />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name="OrderTab"
				component={Order}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <OrderViolet /> : colorScheme === "light" ? <OrderIcon /> : <OrderWhite />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name="SettingsTab"
				component={Settings}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <SettingsViolet /> : colorScheme === "light" ? <SettingsIcon /> : <SettingsWhite />),
					unmountOnBlur: false,
				}}
			/>
		</Tab.Navigator>
	);
}
