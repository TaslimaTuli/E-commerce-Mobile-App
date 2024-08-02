import { View, Text, KeyboardAvoidingView, ScrollView, StatusBar, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import SearchIcon from "../../assets/Homepage/Search.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";
import BackLogo from "../../assets/Login&Onboarding/Back.svg";

import Accessories from "../../assets/Homepage/Categories/Accessories.svg";
import Bags from "../../assets/Homepage/Categories/Bags.svg";
import Hoodies from "../../assets/Homepage/Categories/Hoodies.svg";
import Shoes from "../../assets/Homepage/Categories/Shoes.svg";
import Shorts from "../../assets/Homepage/Categories/Shorts.svg";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
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
		<KeyboardAvoidingView className="flex-1 bg-stone-50 px-4 pt-3" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<ScrollView className="bg-stone-50" showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
				<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
				{/* Search */}
				<View className="flex-row justify-between items-center py-4">
					<TouchableOpacity className="my-2 mr-auto" onPress={() => navigation.goBack()}>
						<BackLogo />
					</TouchableOpacity>
					<View className="flex-row items-center bg-stone-200 w-5/6 px-4 rounded-full">
						<SearchIcon />
						<TextInput
							className="flex-1 text-lg py-2 text-black pl-3"
							placeholder="Search"
							cursorColor="rgb(139 92 246)"
							autoFocus={true}
							maxLength={100}
							value={searchText}
							onChange={setSearchText}
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
				<Text className="text-2xl font-bold text-black py-3">Shop by Categories</Text>
				{categories.map((category, index) => (
					<TouchableOpacity
						key={index}
						className="flex-col px-2 py-2 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-600"
						onPress={handleCategory}
					>
						<View className="flex-row justify-start items-center">
							<category.icon />
							<Text className="text-xl text-black font-semibold pl-4">{category.name}</Text>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
