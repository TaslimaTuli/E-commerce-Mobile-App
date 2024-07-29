import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import Done from "../../assets/Notifications/Done.svg";
import NotDone from "../../assets/Notifications/NotDone.svg";
import Order_notification from "../../assets/Notifications/Order_notification.svg";

export default function OrderDetails() {
	const orderStatus = [
		{ name: "Delivered", date: "28 May", icon: NotDone, gray: true },
		{ name: "Shipped", date: "28 May", icon: Done },
		{ name: "Order Confirmed", date: "28 May", icon: Done },
		{ name: "Order Placed", date: "28 May", icon: Done },
	];

	return (
		<SafeAreaView className="flex-1 bg-white">
			<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
			<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
				<View className="flex-row items-center justify-center  mt-7 mb-6">
					<TouchableOpacity className=" w-0">
						<BackLogo />
					</TouchableOpacity>
					<Text className="text-black font-bold text-lg px-32">Order #456765</Text>
				</View>
				<View className="px-4">
					{orderStatus.map((notification, index) => (
						<View key={index} className="flex-col px-2.5 py-4 mt-2 rounded-lg ">
							<View className="flex-row justify-between items-center space-x-4 py-1">
								<notification.icon />
								<Text className={`text-base ${notification.gray ? "text-gray-400" : "text-black"} text-left flex-1`}>{notification.name}</Text>
								<Text className={`text-sm ${notification.gray ? "text-gray-400" : "text-black"} text-right`}>{notification.date}</Text>
							</View>
						</View>
					))}
					<Text className="font-extrabold text-lg mt-4 text-black">Order Items</Text>
					<View className="bg-stone-100 px-5 py-5 mt-3 rounded-lg flex-row justify-between items-center">
						<View className="flex-row items-center">
							<Order_notification />
							<Text className="text-base ml-4 text-black ">4 items</Text>
						</View>
						<Text className="text-violet-500 text-sm font-bold">View All</Text>
					</View>
					<Text className="font-extrabold text-lg mt-8 text-black">Shipping details</Text>
					<View className="bg-stone-100 px-5 py-5 mt-3 rounded-lg">
						<Text className="text-base text-black ">2715 Ash Dr. San Jose, South Dakota 83475</Text>
						<Text className="text-base mt-2 text-black ">121-224-7890</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
