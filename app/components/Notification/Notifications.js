import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, useColorScheme } from "react-native";
import React from "react";

import Notification_with_dot from "../../assets/Notifications/Notification_with_dot.svg";
import Notification_with_dot_White from "../../assets/Notifications/Notification_with_dot_White.svg";
import Notification from "../../assets/Notifications/Notification.svg";
import NotificationW from "../../assets//Notifications/NotificationW.svg";

export default function Notifications() {
	const color = useColorScheme();

	const notifications = [
		{
			details: "Gilbert, you placed an order. Check your order history for full details.",
			icon: color === "light" ? Notification_with_dot : Notification_with_dot_White,
		},
		{ details: "Gilbert, thank you for shopping with us. We have canceled order #24568.", icon: color === "light" ? Notification : NotificationW },
		{
			details: "Gilbert, your Order #24568 has been confirmed. Check your order history for full details.",
			icon: color === "light" ? Notification : NotificationW,
		},
	];

	return (
		<SafeAreaView className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-4`}>
			<StatusBar
				backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={color === "light" ? "dark-content" : "light-content"}
			/>
			<ScrollView showsVerticalScrollIndicator={false} className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
				<View className="flex items-center justify-center mt-7 mb-2">
					<Text className={`text-xl font-extrabold ${color === "light" ? "text-black" : "text-white"}`}>Notifications</Text>
				</View>
				<View className="my-4 px-2">
					{notifications.map((notification, index) => (
						<TouchableOpacity
							key={index}
							className={`flex-col px-4 py-4 mt-2 ${color === "light" ? "bg-stone-100" : "bg-gray-800"} rounded-lg shadow-sm ${
								color === "light" ? "shadow-stone-500" : "shadow-gray-700"
							}`}
						>
							<View className="flex-row justify-start items-center space-x-2">
								<notification.icon />
								<Text className={`text-base ${color === "light" ? "text-black" : "text-white"} px-4`} numberOfLines={2} ellipsizeMode="tail">
									{notification.details}
								</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
