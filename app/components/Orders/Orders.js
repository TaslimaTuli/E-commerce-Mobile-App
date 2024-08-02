import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Order_notification from "../../assets/Notifications/Order_notification.svg";
import Arrow_right from "../../assets/Notifications/Arrow_right.svg";

export default function Order() {
	const [selectedStatus, setSelectedStatus] = useState("Processing"); // default selected status
	const navigation = useNavigation();
	const handleDetails = () => {
		navigation.navigate("OrderDetails");
	};

	const orders = [
		{ orderNo: "Order #456765", icon: Order_notification, items: "4 items" },
		{ orderNo: "Order #454569", icon: Order_notification, items: "2 items" },
		{ orderNo: "Order #454809", icon: Order_notification, items: "1 items" },
	];
	const orderStatus = [{ name: "Processing" }, { name: "Shipped" }, { name: "Delivered" }, { name: "Returned" }, { name: "Canceled" }];

	return (
		<SafeAreaView className="flex-1 bg-stone-50 px-4">
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-stone-50">
				<View className="flex items-center justify-center mt-7 mb-6">
					<Text className="text-black font-extrabold text-xl">Orders</Text>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
					<View className="flex-row space-x-2 px-2 py-1">
						{orderStatus.map((category, index) => (
							<TouchableOpacity
								key={index}
								className={`items-center justify-center px-2.5 py-1.5 rounded-full ${
									selectedStatus === category.name ? "bg-violet-500" : "bg-stone-100"
								}`}
								onPress={() => setSelectedStatus(category.name)}
							>
								<Text className={`text-base ${selectedStatus === category.name ? "text-white" : "text-black"}`}>{category.name}</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				<View className="my-4 px-2">
					{orders.map((order, index) => (
						<TouchableOpacity
							key={index}
							className="flex-col px-2.5 py-4 mt-2 bg-stone-100 rounded-lg shadow-sm shadow-stone-500"
							onPress={handleDetails}
						>
							<View className="flex-row justify-start items-center space-x-2">
								<order.icon />
								<View className="flex-col pr-28">
									<Text className="text-base text-black px-7 ">{order.orderNo}</Text>
									<Text className="text-sm text-gray-500 px-7 ">{order.items}</Text>
								</View>
								<Arrow_right />
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
