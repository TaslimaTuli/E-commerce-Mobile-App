import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import React from "react";

import Cart from "../../assets/Cart/Cart.svg";
import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function EmptyCart() {
	return (
		<SafeAreaView className="flex-1 bg-white  items-center justify-center">
			<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
			<View className="absolute top-10 left-5 items-center">
				<BackLogo />
			</View>
			<View className="items-center justify-center space-y-5 px-7">
				<Cart />
				<Text className="text-3xl font-bold text-black text-center">Your Cart is Empty.</Text>
				{/* Button */}
				<TouchableOpacity className=" py-3 px-4 rounded-full bg-violet-500">
					<Text className="text-base font-semibold text-gray-50">Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
