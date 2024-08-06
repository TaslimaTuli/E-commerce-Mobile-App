import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, useColorScheme } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import Accessories from "../../assets/Homepage/Categories/Accessories.svg";
import Bags from "../../assets/Homepage/Categories/Bags.svg";
import Hoodies from "../../assets/Homepage/Categories/Hoodies.svg";
import Shoes from "../../assets/Homepage/Categories/Shoes.svg";
import Shorts from "../../assets/Homepage/Categories/Shorts.svg";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
	const color = useColorScheme();
	const navigation = useNavigation();

	const handleCategory = () => {
		navigation.navigate("MoreCategories");
	};

	const categories = [
		{ name: "Hoodies", icon: Hoodies },
		{ name: "Shorts", icon: Shorts },
		{ name: "Shoes", icon: Shoes },
		{ name: "Bag", icon: Bags },
		{ name: "Accessories", icon: Accessories },
	];

	return (
		<SafeAreaView className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-4 pt-7`}>
			<StatusBar
				backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={color === "light" ? "dark-content" : "light-content"}
			/>
			<TouchableOpacity className="my-4 mr-auto" onPress={() => navigation.goBack()}>
				{color === "light" ? <BackLogo /> : <BackDark />}
			</TouchableOpacity>
			<Text className={`text-3xl font-bold ${color === "light" ? "text-black" : "text-white"} pb-3`}>Shop by Categories</Text>

			{categories.map((category, index) => (
				<TouchableOpacity
					key={index}
					className={`flex-col px-2 py-2 mt-4 ${color === "light" ? "bg-stone-100" : "bg-gray-800"} rounded-lg shadow-sm ${
						color === "light" ? "shadow-stone-600" : "shadow-gray-700"
					}`}
					onPress={handleCategory}
				>
					<View className="flex-row justify-start items-center">
						<category.icon />
						<Text className={`text-xl ${color === "light" ? "text-black" : "text-white"} font-semibold pl-4`}>{category.name}</Text>
					</View>
				</TouchableOpacity>
			))}
		</SafeAreaView>
	);
}
