import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, Animated, Easing, ScrollView, useColorScheme } from "react-native";
import React, { useState, useRef } from "react";

import More from "../../../assets/Login&Onboarding/More.svg";
import { useNavigation } from "@react-navigation/native";

export default function MoreInfo() {
	const colorScheme = useColorScheme();
	const [shopFor, setShopFor] = useState("Men");
	const [ageRange, setAgeRange] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);

	const ageRanges = ["18-25", "26-35", "36-45", "46-60", "60+"];

	const dropdownHeight = useRef(new Animated.Value(0)).current;
	const rotateValue = useRef(new Animated.Value(0)).current;

	const toggleDropdown = () => {
		if (showDropdown) {
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
			]).start(() => setShowDropdown(false));
		} else {
			setShowDropdown(true);
			Animated.parallel([
				Animated.timing(dropdownHeight, {
					toValue: 200,
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

	const isFormComplete = shopFor !== "" && ageRange !== "";

	const navigation = useNavigation();
	const handleSignup = () => {
		navigation.navigate("Home");
	};

	return (
		<SafeAreaView className={`flex-1 px-5 py-3 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
			<StatusBar
				backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
			/>
			<Text className={`text-3xl font-bold pb-3 pt-16 ${colorScheme === "light" ? "text-black" : "text-stone-200"}`}>Tell us about yourself</Text>
			<Text className={`text-lg mt-8 ${colorScheme === "light" ? "text-black" : "text-stone-200"}`}>Who do you shop for?</Text>
			<View className="flex-row my-5">
				<TouchableOpacity
					className={`flex-1 items-center py-3 rounded-full ${
						shopFor === "Men" ? "bg-violet-500" : colorScheme === "light" ? "bg-stone-200" : "bg-gray-700"
					}`}
					onPress={() => setShopFor("Men")}
				>
					<Text className={`text-lg ${shopFor === "Men" ? "text-gray-50" : colorScheme === "light" ? "text-black" : "text-stone-200"}`}>Men</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={`flex-1 items-center py-3 rounded-full ml-3 ${
						shopFor === "Women" ? "bg-violet-500" : colorScheme === "light" ? "bg-stone-200" : "bg-gray-700"
					}`}
					onPress={() => setShopFor("Women")}
				>
					<Text className={`text-lg ${shopFor === "Women" ? "text-gray-50" : colorScheme === "light" ? "text-black" : "text-stone-200"}`}>Women</Text>
				</TouchableOpacity>
			</View>
			<Text className={`text-lg mt-8 mb-4 ${colorScheme === "light" ? "text-black" : "text-stone-200"}`}>How old are you?</Text>
			<TouchableOpacity
				className={`flex-row items-center justify-between mx-4 px-5 py-4 rounded-full ${colorScheme === "light" ? "bg-stone-200" : "bg-gray-700"}`}
				onPress={toggleDropdown}
			>
				<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-stone-200"}`}>{ageRange || "Age Range"}</Text>
				<Animated.View style={animatedStyle}>
					<More fill={colorScheme === "light" ? "black" : "white"} />
				</Animated.View>
			</TouchableOpacity>
			{showDropdown && (
				<Animated.View
					style={{ height: dropdownHeight }}
					className={`mx-4 mt-2 rounded-lg ${colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"} shadow-md overflow-hidden`}
				>
					<ScrollView>
						{ageRanges.map((range, index) => (
							<TouchableOpacity
								key={index}
								className="px-5 py-3"
								onPress={() => {
									setAgeRange(range);
									toggleDropdown();
								}}
							>
								<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-stone-200"}`}>{range}</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
				</Animated.View>
			)}
			<View className="flex-1 justify-end pb-8">
				<TouchableOpacity
					className={`mx-4 py-4 rounded-full items-center ${isFormComplete ? "bg-violet-500" : "bg-violet-200"}`}
					disabled={!isFormComplete}
					onPress={handleSignup}
				>
					<Text className="text-gray-50 text-lg">Finish</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
