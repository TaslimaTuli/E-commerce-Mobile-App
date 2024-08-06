import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, useColorScheme } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Order_notification from "../../assets/Notifications/Order_notification.svg";
import OrderW from "../../assets/Notifications/OrderW.svg";
import Arrow_right from "../../assets/Notifications/Arrow_right.svg";
import Arrow_R_w from "../../assets/Notifications/Arrow_R_w.svg";

export default function Order() {
	const color = useColorScheme();
	const [selectedStatus, setSelectedStatus] = useState("Processing");
	const navigation = useNavigation();
	const handleDetails = () => {
		navigation.navigate("OrderDetails");
	};

	const orders = [
		{ orderNo: "Order #456765", items: "4 items" },
		{ orderNo: "Order #454569", items: "2 items" },
		{ orderNo: "Order #454809", items: "1 item" },
	];
	const orderStatus = [{ name: "Processing" }, { name: "Shipped" }, { name: "Delivered" }, { name: "Returned" }, { name: "Canceled" }];

	return (
		<SafeAreaView className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-4`}>
			<StatusBar
				backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={color === "light" ? "dark-content" : "light-content"}
			/>
			<ScrollView showsVerticalScrollIndicator={false} className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
				<View className="flex items-center justify-center mt-7 mb-6">
					<Text className={`text-xl font-extrabold ${color === "light" ? "text-black" : "text-white"}`}>Orders</Text>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
					<View className="flex-row space-x-2 px-2 py-1">
						{orderStatus.map((category, index) => (
							<TouchableOpacity
								key={index}
								className={`items-center justify-center px-2.5 py-1.5 rounded-full ${
									selectedStatus === category.name
										? color === "light"
											? "bg-violet-500"
											: "bg-violet-700"
										: color === "light"
										? "bg-stone-100"
										: "bg-gray-800"
								}`}
								onPress={() => setSelectedStatus(category.name)}
							>
								<Text
									className={`text-base ${
										selectedStatus === category.name ? "text-white" : color === "light" ? "text-black" : "text-gray-300"
									}`}
								>
									{category.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				<View className="my-4 px-2">
					{orders.map((order, index) => (
						<TouchableOpacity
							key={index}
							className={`flex-col px-3 py-4 mt-2 rounded-lg shadow-sm ${
								color === "light" ? "bg-stone-100 shadow-stone-500" : "bg-gray-700 shadow-gray-600"
							}`}
							onPress={handleDetails}
						>
							<View className="flex-row justify-start items-center space-x-2">
								{color === "light" ? <Order_notification /> : <OrderW />}

								<View className="flex-col pr-28">
									<Text className={`text-base ${color === "light" ? "text-black" : "text-white"} px-6`}>{order.orderNo}</Text>
									<Text className={`text-sm ${color === "light" ? "text-gray-500" : "text-gray-300"} px-6`}>{order.items}</Text>
								</View>
								{color === "light" ? <Arrow_right /> : <Arrow_R_w />}
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
