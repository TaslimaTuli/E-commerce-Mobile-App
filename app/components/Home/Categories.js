import { View, Text, StatusBar, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

import Accessories from "../../assets/Homepage/Categories/Accessories.svg";
import Bags from "../../assets/Homepage/Categories/Bags.svg";
import Hoodies from "../../assets/Homepage/Categories/Hoodies.svg";
import Shoes from "../../assets/Homepage/Categories/Shoes.svg";
import Shorts from "../../assets/Homepage/Categories/Shorts.svg";

export default function Categories() {
	const categories = [
		{ name: "Hoodies", icon: Hoodies },
		{ name: "Shorts", icon: Shorts },
		{ name: "Shoes", icon: Shoes },
		{ name: "Bag", icon: Bags },
		{ name: "Accessories", icon: Accessories },
	];
	return (
		<SafeAreaView className="flex-1 bg-white px-4 pt-7">
			<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
			<TouchableOpacity className="py-5 w-0">
				<BackLogo />
			</TouchableOpacity>
			<Text className="text-3xl font-bold text-black pb-3">Shop by Categories</Text>

			{categories.map((category, index) => (
				<TouchableOpacity key={index} className="flex-col px-2 py-2 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-600">
					<View className="flex-row justify-start items-center">
						<category.icon />
						<Text className="text-xl text-black font-semibold pl-4">{category.name}</Text>
					</View>
				</TouchableOpacity>
			))}
		</SafeAreaView>
	);
}
