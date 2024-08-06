import { View, Text, KeyboardAvoidingView, ScrollView, StatusBar, TextInput, TouchableOpacity, useColorScheme } from "react-native";
import React, { useState } from "react";

import SearchIcon from "../../assets/Homepage/Search.svg";
import SearchWhite from "../../assets/Homepage/SearchWhite.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";
import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

import Accessories from "../../assets/Homepage/Categories/Accessories.svg";
import Bags from "../../assets/Homepage/Categories/Bags.svg";
import Hoodies from "../../assets/Homepage/Categories/Hoodies.svg";
import Shoes from "../../assets/Homepage/Categories/Shoes.svg";
import Shorts from "../../assets/Homepage/Categories/Shorts.svg";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
	const color = useColorScheme();
	const navigation = useNavigation();

	const [searchText, setSearchText] = useState("");
	const categories = [
		{ name: "Hoodies", icon: Hoodies },
		{ name: "Shorts", icon: Shorts },
		{ name: "Shoes", icon: Shoes },
		{ name: "Bag", icon: Bags },
		{ name: "Accessories", icon: Accessories },
	];

	const handleSearch = () => {
		navigation.navigate("SearchResults");
	};

	const handleCategory = () => {
		navigation.navigate("MoreCategories");
	};

	return (
		<KeyboardAvoidingView
			className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-4 pt-3`}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView className={`${color === "light" ? "bg-stone-50" : "bg-gray-900"}`} showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
				<StatusBar
					backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
					barStyle={color === "light" ? "dark-content" : "light-content"}
				/>
				{/* Search */}
				<View className={`flex-row justify-between items-center py-4 ${color === "light" ? "text-black" : "text-white"}`}>
					<TouchableOpacity className="my-2 mr-auto" onPress={() => navigation.goBack()}>
						{color === "light" ? <BackLogo /> : <BackDark />}
					</TouchableOpacity>
					<View className={`flex-row items-center ${color === "light" ? "bg-stone-200" : "bg-gray-700"} w-5/6 px-4 rounded-full`}>
						{color === "light" ? <SearchIcon /> : <SearchWhite />}
						<TextInput
							className={`flex-1 text-lg py-2 ${color === "light" ? "text-black" : "text-white"} pl-3`}
							placeholder="Search"
							placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
							cursorColor="rgb(139 92 246)"
							autoFocus={true}
							maxLength={100}
							value={searchText}
							onChangeText={setSearchText}
							onSubmitEditing={handleSearch}
						/>
						{searchText ? (
							<TouchableOpacity onPress={() => setSearchText("")} className="">
								<Cancel />
							</TouchableOpacity>
						) : null}
					</View>
				</View>

				{/* Categories */}
				<Text className={`text-2xl font-bold ${color === "light" ? "text-black" : "text-white"} py-3`}>Shop by Categories</Text>
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
							<Text className={`text-xl font-semibold pl-4 ${color === "light" ? "text-black" : "text-white"}`}>{category.name}</Text>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
