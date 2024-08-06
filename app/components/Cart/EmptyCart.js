import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";

import Cart from "../../assets/Cart/Cart.svg";
import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

export default function EmptyCart() {
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView className={`flex-1 items-center justify-center ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
			<StatusBar
				backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
			/>
			<View className="absolute top-10 left-5 items-center">{colorScheme === "light" ? <BackLogo /> : <BackDark />}</View>
			<View className="items-center justify-center space-y-5 px-7">
				<Cart />
				<Text className={`text-3xl font-bold text-center ${colorScheme === "light" ? "text-black" : "text-white"}`}>Your Cart is Empty.</Text>
				{/* Button */}
				<TouchableOpacity className="py-3 px-4 rounded-full bg-violet-500">
					<Text className="text-base font-semibold text-gray-50">Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
