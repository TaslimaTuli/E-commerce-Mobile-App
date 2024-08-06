import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";

import Bell from "../../assets/Notifications/Bell.svg";
import { useNavigation } from "@react-navigation/native";

export default function NoNotification() {
	const color = useColorScheme();
	const navigation = useNavigation();

	return (
		<SafeAreaView className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-5 items-center justify-center`}>
			<StatusBar
				backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={color === "light" ? "dark-content" : "light-content"}
			/>
			<View className="absolute top-10 items-center">
				<Text className={`text-xl font-extrabold ${color === "light" ? "text-black" : "text-white"}`}>Notifications</Text>
			</View>
			<View className="items-center justify-center space-y-5">
				<Bell />
				<Text className={`text-2xl font-bold ${color === "light" ? "text-black" : "text-white"} text-center`}>No Notification yet</Text>
				{/* Button */}
				<TouchableOpacity className="py-3 px-4 rounded-full bg-violet-500" onPress={() => navigation.navigate("MoreCategories")}>
					<Text className={`text-base font-semibold ${color === "light" ? "text-gray-50" : "text-gray-200"}`}>Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
