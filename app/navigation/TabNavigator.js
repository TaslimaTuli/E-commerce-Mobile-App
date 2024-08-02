import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import HomeViolet from "../assets/BottomTab/HomeViolet.svg";
import NotificationViolet from "../assets/BottomTab/NotificationViolet.svg";
import OrderViolet from "../assets/BottomTab/OrderViolet.svg";
import SettingsViolet from "../assets/BottomTab/SettingsViolet.svg";

import HomeIcon from "../assets/BottomTab/HomeIcon.svg";
import NotificationIcon from "../assets/BottomTab/NotificationIcon.svg";
import OrderIcon from "../assets/BottomTab/OrderIcon.svg";
import SettingsIcon from "../assets/BottomTab/SettingsIcon.svg";

import Home from "../components/Home/Home";
import Notifications from "../components/Notification/Notifications";
import Order from "../components/Orders/Orders";
import Settings from "../components/Settings/Settings";

export default function TabNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarHideOnKeyboard: true,
				tabBarStyle: {
					backgroundColor: "rgb(250 250 249)",
					height: 80,
					borderTopWidth: 0,
					elevation: 0,
					// shadowOpacity: 0,
					// shadowRadius: 0,
					// shadowOffset: { width: 0, height: 0 },
				},
			}}
		>
			<Tab.Screen
				name={"HomeTab"}
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <HomeViolet /> : <HomeIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"NotificationTab"}
				component={Notifications}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <NotificationViolet /> : <NotificationIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"OrderTab"}
				component={Order}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <OrderViolet /> : <OrderIcon />),
					unmountOnBlur: true,
				}}
			/>
			<Tab.Screen
				name={"SettingsTab"}
				component={Settings}
				options={{
					tabBarIcon: ({ focused }) => (focused ? <SettingsViolet /> : <SettingsIcon />),
					unmountOnBlur: false,
				}}
			/>
		</Tab.Navigator>
	);
}
