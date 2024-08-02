import { View, Text, StatusBar, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

import Order from "../../assets/Notifications/Order.svg";

export default function NoOrders() {
	return (
		<SafeAreaView className="flex-1 bg-stone-50 px-5 items-center justify-center">
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<View className="absolute top-10 items-center">
				<Text className="text-black font-extrabold text-xl">Orders</Text>
			</View>
			<View className="items-center justify-center space-y-5 ">
				<Order />
				<Text className="text-2xl font-bold text-black text-center">No Orders yet</Text>
				{/* Button */}
				<TouchableOpacity className=" py-3 px-4 rounded-full bg-violet-500">
					<Text className="text-base font-semibold text-gray-50">Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
