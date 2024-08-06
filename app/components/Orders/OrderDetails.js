import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import Done from "../../assets/Notifications/Done.svg";
import NotDone from "../../assets/Notifications/NotDone.svg";
import Order_notification from "../../assets/Notifications/Order_notification.svg";
import OrderW from "../../assets/Notifications/OrderW.svg";

export default function OrderDetails() {
	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	const orderStatus = [
		{ name: "Delivered", date: "28 May", icon: NotDone, gray: true },
		{ name: "Shipped", date: "28 May", icon: Done },
		{ name: "Order Confirmed", date: "28 May", icon: Done },
		{ name: "Order Placed", date: "28 May", icon: Done },
	];

	return (
		<SafeAreaView className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
			<StatusBar
				backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
			/>
			<ScrollView showsVerticalScrollIndicator={false} className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
				<View className={`flex-row items-center justify-center mt-7 mb-6 ${colorScheme === "light" ? "text-black" : "text-white"}`}>
					<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
						{colorScheme === "light" ? <BackLogo /> : <BackDark />}
					</TouchableOpacity>
					<Text className={`font-bold text-lg px-20 mr-12 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Order #456765</Text>
				</View>
				<View className="px-4">
					{orderStatus.map((notification, index) => (
						<View key={index} className={`flex-col px-2.5 py-4 mt-2 rounded-lg ${colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"}`}>
							<View className="flex-row justify-between items-center space-x-4 py-1">
								<notification.icon />
								<Text
									className={`text-base ${
										notification.gray ? "text-gray-500" : colorScheme === "light" ? "text-black" : "text-white"
									} text-left flex-1`}
								>
									{notification.name}
								</Text>
								<Text
									className={`text-sm ${
										notification.gray
											? colorScheme === "light"
												? "text-gray-400"
												: "text-gray-600"
											: colorScheme === "light"
											? "text-black"
											: "text-white"
									} text-right`}
								>
									{notification.date}
								</Text>
							</View>
						</View>
					))}

					{/* Order Items */}
					<Text className={`font-extrabold text-lg mt-4 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Order Items</Text>
					<View
						className={`bg-stone-100 px-5 py-5 mt-3 rounded-lg flex-row justify-between items-center ${
							colorScheme === "dark" ? "bg-gray-800" : "bg-stone-100"
						}`}
					>
						<View className="flex-row items-center">
							{colorScheme === "light" ? <Order_notification /> : <OrderW />}
							<Text className={`text-base ml-4 ${colorScheme === "light" ? "text-black" : "text-white"}`}>4 items</Text>
						</View>
						<Text className="text-violet-500 text-sm font-bold">View All</Text>
					</View>
					<Text className={`font-extrabold text-lg mt-8 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Shipping details</Text>
					<View className={`bg-stone-100 px-5 py-5 mt-3 rounded-lg ${colorScheme === "dark" ? "bg-gray-800" : "bg-stone-100"}`}>
						<Text className={`text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}>2715 Ash Dr. San Jose, South Dakota 83475</Text>
						<Text className={`text-base mt-2 ${colorScheme === "light" ? "text-black" : "text-white"}`}>121-224-7890</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
