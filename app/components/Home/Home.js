import { View, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, TextInput, ScrollView, Animated, Easing, useColorScheme } from "react-native";
import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

import Profile from "../../assets/Homepage/Profile.svg";
import More from "../../assets/Login&Onboarding/More.svg";
import MoreWhite from "../../assets/Login&Onboarding/MoreWhite.svg";
import Cart from "../../assets/Homepage/Cart.svg";
import Search from "../../assets/Homepage/Search.svg";
import SearchWhite from "../../assets/Homepage/SearchWhite.svg";

import Accessories from "../../assets/Homepage/Categories/Accessories.svg";
import Bags from "../../assets/Homepage/Categories/Bags.svg";
import Hoodies from "../../assets/Homepage/Categories/Hoodies.svg";
import Shoes from "../../assets/Homepage/Categories/Shoes.svg";
import Shorts from "../../assets/Homepage/Categories/Shorts.svg";

import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Shoe from "../../assets/Homepage/Top_Selling/Shoe.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";

export default function Home() {
	const colorScheme = useColorScheme();
	const [shopFor, setShopFor] = useState("Men");
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [searchText, setSearchText] = useState("");

	const navigation = useNavigation();

	const dropdownHeight = useRef(new Animated.Value(0)).current;
	const rotateValue = useRef(new Animated.Value(0)).current;

	const toggleDropdown = () => {
		if (dropdownVisible) {
			Animated.parallel([
				Animated.timing(dropdownHeight, {
					toValue: 0,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: false,
				}),
				Animated.timing(rotateValue, {
					toValue: 0,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
			]).start(() => setDropdownVisible(false));
		} else {
			setDropdownVisible(true);
			Animated.parallel([
				Animated.timing(dropdownHeight, {
					toValue: 90,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: false,
				}),
				Animated.timing(rotateValue, {
					toValue: 1,
					duration: 300,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
			]).start();
		}
	};

	const rotateInterpolate = rotateValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "180deg"],
	});

	const animatedStyle = {
		transform: [{ rotate: rotateInterpolate }],
	};

	const handleSelectOption = (option) => {
		setShopFor(option);
		toggleDropdown();
	};

	const categories = [
		{ name: "Hoodies", icon: Hoodies },
		{ name: "Shorts", icon: Shorts },
		{ name: "Shoes", icon: Shoes },
		{ name: "Bag", icon: Bags },
		{ name: "Accessories", icon: Accessories },
	];

	const topSellingItems = [
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Max Cirro Men's Slides", price: "$55.00", discount: "$100.97", icon: Shoe },
		{ name: "Max Cirro Men's Slides", price: "$55.00", discount: "$100.97", icon: Shoe },
	];

	const handleCategory = () => {
		navigation.navigate("MoreCategories");
	};
	const handleSearch = () => {
		navigation.navigate("SearchResults");
	};

	return (
		<KeyboardAvoidingView
			className={`flex-1 px-4 pt-3 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView className={colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"} showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
				<StatusBar
					backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
					barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
				/>
				{/* Header */}
				<View className="flex-row items-center justify-between py-2 px-2 mt-4">
					<TouchableOpacity onPress={() => navigation.navigate("SettingsTab")}>
						<Profile />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={toggleDropdown}
						className={`flex-row items-center justify-between py-3 px-4 rounded-full space-x-1 ${
							colorScheme === "light" ? "bg-stone-200" : "bg-gray-700"
						}`}
					>
						<Text className={`font-bold text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}>{shopFor}</Text>
						<Animated.View style={animatedStyle}>{colorScheme === "light" ? <More /> : <MoreWhite />}</Animated.View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate("Cart")}>
						<Cart />
					</TouchableOpacity>
				</View>
				{dropdownVisible && (
					<Animated.View
						style={{ height: dropdownHeight }}
						className={`absolute top-16 z-[1] left-0 right-0 ${
							colorScheme === "light" ? "bg-stone-50" : "bg-gray-600"
						} items-center justify-center rounded-lg mx-36 mt-2 p-1 shadow-md`}
					>
						<TouchableOpacity className="py-1" onPress={() => handleSelectOption("Men")}>
							<Text className={colorScheme === "light" ? "text-black text-base" : "text-white text-base"}>Men</Text>
						</TouchableOpacity>
						<TouchableOpacity className="py-1" onPress={() => handleSelectOption("Women")}>
							<Text className={colorScheme === "light" ? "text-black text-base" : "text-white text-base"}>Women</Text>
						</TouchableOpacity>
						<TouchableOpacity className="py-1" onPress={() => handleSelectOption("Kids")}>
							<Text className={colorScheme === "light" ? "text-black text-base" : "text-white text-base"}>Kids</Text>
						</TouchableOpacity>
					</Animated.View>
				)}

				{/* Search */}
				<View className={`flex-row items-center ${colorScheme === "light" ? "bg-stone-200" : "bg-gray-700"} mx-1 mt-5 px-4 rounded-full`}>
					{colorScheme === "light" ? <Search /> : <SearchWhite />}
					<TextInput
						className={`flex-1 text-lg pl-3 ${colorScheme === "light" ? "text-black" : "text-white"}`}
						placeholder="Search"
						placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
						cursorColor={"rgb(139 92 246)"}
						maxLength={100}
						onPress={() => navigation.navigate("Search")}
						// onSubmitEditing={handleSearch}
						value={searchText}
						onChangeText={setSearchText}
					/>
					{searchText ? (
						<TouchableOpacity onPress={() => setSearchText("")}>
							<Cancel />
						</TouchableOpacity>
					) : null}
				</View>
				{/* Categories */}
				<View className="pt-8 flex-row items-center justify-between px-1">
					<Text className={`text-xl font-bold ${colorScheme === "light" ? "text-black" : "text-white"}`}>Categories</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Categories")}>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>See All</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
					<View className="flex-row space-x-4">
						{categories.map((category, index) => (
							<TouchableOpacity key={index} className="items-center" onPress={handleCategory}>
								<category.icon />
								<Text className={`mt-2 text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}>{category.name}</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				{/* Top Selling */}
				<View className="pt-8 flex-row items-center justify-between px-1">
					<Text className={`text-xl font-bold ${colorScheme === "light" ? "text-black" : "text-white"}`}>Top Selling</Text>
					<TouchableOpacity>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>See All</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
					<View className="flex-row space-x-3">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity
								key={index}
								className={`rounded-xl overflow-hidden pb-5 w-[159] ${colorScheme === "light" ? "bg-stone-100" : "bg-gray-700"}`}
								onPress={() => navigation.navigate("Product")}
							>
								<item.icon />
								<TouchableOpacity className=" absolute top-2 right-3">
									<Love />
								</TouchableOpacity>
								<Text
									className={`mt-2 px-1.5 text-base font-medium ${colorScheme === "light" ? "text-black" : "text-white"}`}
									numberOfLines={1}
									ellipsizeMode="tail"
								>
									{item.name}
								</Text>
								<View className="flex-row space-x-3">
									<Text className={`mt-1 px-1.5  text-base font-black ${colorScheme === "light" ? "text-black" : "text-white"}`}>
										{item.price}
									</Text>
									{item.discount && (
										<Text className={`mt-1 text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"} line-through`}>
											{item.discount}
										</Text>
									)}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				{/* New In */}
				<View className="pt-8 flex-row items-center justify-between px-1">
					<Text className={`text-xl font-bold ${colorScheme === "light" ? "text-black" : "text-white"}`}>New In</Text>
					<TouchableOpacity>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>See All</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 pb-3">
					<View className="flex-row space-x-3 mb-4">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity
								key={index}
								className={`rounded-xl overflow-hidden pb-5 w-[159] ${colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"}`}
								onPress={() => navigation.navigate("Product")}
							>
								<item.icon />
								<TouchableOpacity className=" absolute top-2 right-3">
									<Love />
								</TouchableOpacity>
								<Text
									className={`mt-2 px-1.5 text-base font-medium ${colorScheme === "light" ? "text-black" : "text-white"}`}
									numberOfLines={1}
									ellipsizeMode="tail"
								>
									{item.name}
								</Text>
								<View className="flex-row space-x-3">
									<Text className={`mt-1 px-1.5  text-base font-black ${colorScheme === "light" ? "text-black" : "text-white"}`}>
										{item.price}
									</Text>
									{item.discount && (
										<Text className={`mt-1 text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"} line-through`}>
											{item.discount}
										</Text>
									)}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
