import { View, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, TextInput, ScrollView, Animated, Easing } from "react-native";
import React, { useState, useRef } from "react";

import Profile from "../../assets/Homepage/Profile.svg";
import More from "../../assets/Login&Onboarding/More.svg";
import Cart from "../../assets/Homepage/Cart.svg";
import Search from "../../assets/Homepage/Search.svg";

import Accessories from "../../assets/Homepage/Categories/Accessories.svg";
import Bags from "../../assets/Homepage/Categories/Bags.svg";
import Hoodies from "../../assets/Homepage/Categories/Hoodies.svg";
import Shoes from "../../assets/Homepage/Categories/Shoes.svg";
import Shorts from "../../assets/Homepage/Categories/Shorts.svg";

import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Shoe from "../../assets/Homepage/Top_Selling/Shoe.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";

export default function Home() {
	const [shopFor, setShopFor] = useState("Men");
	const [dropdownVisible, setDropdownVisible] = useState(false);

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

	return (
		<KeyboardAvoidingView className="flex-1 bg-white px-4 pt-3 " behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<ScrollView className="bg-white " showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
				<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
				{/* header */}
				<View className="flex-row items-center justify-between py-2 px-2 mt-4 ">
					<TouchableOpacity>
						<Profile />
					</TouchableOpacity>
					<TouchableOpacity onPress={toggleDropdown} className="flex-row items-center justify-between py-3 px-4 rounded-full space-x-1 bg-stone-200">
						<Text className="font-bold text-black text-base">{shopFor}</Text>
						<Animated.View style={animatedStyle}>
							<More />
						</Animated.View>
					</TouchableOpacity>
					<TouchableOpacity>
						<Cart />
					</TouchableOpacity>
				</View>
				{dropdownVisible && (
					<Animated.View
						style={{ height: dropdownHeight }}
						className="absolute top-16 z-[1] left-0 right-0 bg-stone-50 items-center justify-center rounded-lg mx-36 mt-2 p-1 shadow-sm shadow-stone-600"
					>
						<TouchableOpacity className="py-1" onPress={() => handleSelectOption("Men")}>
							<Text className="text-black text-base">Men</Text>
						</TouchableOpacity>
						<TouchableOpacity className="py-1" onPress={() => handleSelectOption("Women")}>
							<Text className="text-black text-base">Women</Text>
						</TouchableOpacity>
						<TouchableOpacity className="py-1" onPress={() => handleSelectOption("Kids")}>
							<Text className="text-black text-base">Kids</Text>
						</TouchableOpacity>
					</Animated.View>
				)}

				{/* Search */}
				<View className="flex-row items-center bg-stone-200 mx-1 mt-5 px-4 rounded-full ">
					<Search />
					<TextInput
						className="flex-1 text-lg text-black pl-3 "
						placeholder="Search"
						cursorColor={"rgb(139 92 246)"}
						maxLength={100}
						// value={}
						// onChangeText={}
					/>
				</View>
				{/* Categories */}
				<View className="pt-8 flex-row items-center justify-between px-1">
					<Text className="text-xl text-black font-bold">Categories</Text>
					<TouchableOpacity>
						<Text className="text-lg text-black ">See All</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
					<View className="flex-row space-x-4">
						{categories.map((category, index) => (
							<TouchableOpacity key={index} className="items-center">
								<category.icon />
								<Text className="mt-2 text-base text-black">{category.name}</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				{/* Top Selling */}
				<View className="pt-8 flex-row items-center justify-between px-1">
					<Text className="text-xl text-black font-bold">Top Selling</Text>
					<TouchableOpacity>
						<Text className="text-lg text-black ">See All</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
					<View className="flex-row space-x-3">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity key={index} className=" bg-stone-100 rounded-xl pb-5 pt-3 px-2 w-[173]">
								<TouchableOpacity className="items-end mr-2">
									<Love />
								</TouchableOpacity>

								<item.icon />
								<Text className="mt-2 text-base text-black font-medium " numberOfLines={1} ellipsizeMode="tail">
									{item.name}
								</Text>
								<View className="flex-row space-x-3">
									<Text className="mt-1 text-base text-black font-black">{item.price}</Text>
									{item.discount && <Text className="mt-1 text-base text-stone-500 line-through">{item.discount}</Text>}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				{/* New In */}
				<View className="pt-8  flex-row items-center justify-between px-1">
					<Text className="text-xl text-black font-bold">New In</Text>
					<TouchableOpacity>
						<Text className="text-lg text-black ">See All</Text>
					</TouchableOpacity>
				</View>
				<ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 pb-3">
					<View className="flex-row space-x-3 mb-4">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity key={index} className=" bg-stone-100 rounded-xl pb-5 pt-3 px-2 w-[173]">
								<TouchableOpacity className="items-end mr-2">
									<Love />
								</TouchableOpacity>

								<item.icon />
								<Text className="mt-2 text-base text-black font-medium " numberOfLines={1} ellipsizeMode="tail">
									{item.name}
								</Text>
								<View className="flex-row space-x-3">
									<Text className="mt-1 text-base text-black font-black">{item.price}</Text>
									{item.discount && <Text className="mt-1 text-base text-stone-500 line-through">{item.discount}</Text>}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
