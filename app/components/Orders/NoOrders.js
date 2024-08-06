import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, useColorScheme } from "react-native";
import React from "react";

import Order from "../../assets/Notifications/Order.svg";
import { useNavigation } from "@react-navigation/native";

export default function NoOrders() {
	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	return (
		<SafeAreaView className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"} px-5 items-center justify-center`}>
			<StatusBar
				backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
			/>
			<View className={`absolute top-10 items-center`}>
				<Text className={`text-xl font-extrabold  ${colorScheme === "light" ? "text-black" : "text-white"}`}>Orders</Text>
			</View>
			<View className={`items-center justify-center space-y-5`}>
				<Order />
				<Text className={`text-2xl font-bold text-center ${colorScheme === "light" ? "text-black" : "text-white"}`}>No Orders yet</Text>
				{/* Button */}
				<TouchableOpacity className="py-3 px-4 rounded-full bg-violet-500" onPress={() => navigation.navigate("MoreCategories")}>
					<Text className={`text-base font-semibold ${colorScheme === "light" ? "text-gray-50" : "text-gray-200"}`}>Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
