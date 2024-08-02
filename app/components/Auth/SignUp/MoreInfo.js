import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, Animated, Easing, ScrollView } from "react-native";
import React, { useState, useRef } from "react";

import More from "../../../assets/Login&Onboarding/More.svg";
import { useNavigation } from "@react-navigation/native";

export default function MoreInfo() {
	const [shopFor, setShopFor] = useState("Men");
	const [ageRange, setAgeRange] = useState("");
	const [showDropdown, setShowDropdown] = useState(false);

	const ageRanges = ["18-25", "26-35", "36-45", "46-60", "60+"];

	// Initialize animation values
	const dropdownHeight = useRef(new Animated.Value(0)).current; // Initial height of 0
	const rotateValue = useRef(new Animated.Value(0)).current; // Initial rotation value of 0

	const toggleDropdown = () => {
		if (showDropdown) {
			// Collapse animation
			Animated.parallel([
				Animated.timing(dropdownHeight, {
					toValue: 0, // Collapse to height of 0
					duration: 300,
					easing: Easing.linear, // Linear easing for smooth transition
					useNativeDriver: false, // Use JavaScript thread for layout changes
				}),
				Animated.timing(rotateValue, {
					toValue: 0, // Rotate back to 0
					duration: 300,
					easing: Easing.linear, // Linear easing for smooth transition
					useNativeDriver: true, // Use native driver for better performance
				}),
			]).start(() => setShowDropdown(false)); // Update state after animation
		} else {
			// Expand animation
			setShowDropdown(true); // Set dropdown to visible
			Animated.parallel([
				Animated.timing(dropdownHeight, {
					toValue: 200, // Expand to height of 200
					duration: 300,
					easing: Easing.linear, // Linear easing for smooth transition
					useNativeDriver: false, // Use JavaScript thread for layout changes
				}),
				Animated.timing(rotateValue, {
					toValue: 1, // Rotate to 1 (interpolated to '180deg')
					duration: 300,
					easing: Easing.linear, // Linear easing for smooth transition
					useNativeDriver: true, // Use native driver for better performance
				}),
			]).start();
		}
	};

	// Interpolate rotation value from 0 to 180 degrees
	const rotateInterpolate = rotateValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "180deg"],
	});

	// Apply interpolated rotation to animated style
	const animatedStyle = {
		transform: [{ rotate: rotateInterpolate }],
	};

	const isFormComplete = shopFor !== "" && ageRange !== "";

	const navigation = useNavigation();
	const handleSignup = () => {
		navigation.navigate("Home");
	};

	return (
		<SafeAreaView className="flex-1 bg-stone-50 px-5 py-3">
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<Text className="text-3xl font-bold text-black pb-3 pt-16">Tell us about yourself</Text>
			<Text className="text-lg text-black mt-8">Who do you shop for?</Text>
			<View className="flex-row my-5">
				<TouchableOpacity
					className={`flex-1 items-center py-3 rounded-full ${shopFor === "Men" ? "bg-violet-500" : "bg-stone-200"}`}
					onPress={() => setShopFor("Men")}
				>
					<Text className={`text-lg ${shopFor === "Men" ? "text-gray-50" : "text-black"}`}>Men</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={`flex-1 items-center py-3 rounded-full ml-3 ${shopFor === "Women" ? "bg-violet-500" : "bg-stone-200"}`}
					onPress={() => setShopFor("Women")}
				>
					<Text className={`text-lg ${shopFor === "Women" ? "text-gray-50" : "text-black"}`}>Women</Text>
				</TouchableOpacity>
			</View>
			{/* Dropdown */}
			<Text className="text-lg text-black mt-8 mb-4">How old are you?</Text>
			<TouchableOpacity className="flex-row items-center justify-between mx-4 px-5 py-4 rounded-full bg-stone-200" onPress={toggleDropdown}>
				<Text className="text-lg text-black">{ageRange || "Age Range"}</Text>
				<Animated.View style={animatedStyle}>
					<More />
				</Animated.View>
			</TouchableOpacity>
			{showDropdown && (
				<Animated.View style={{ height: dropdownHeight }} className="mx-4 mt-2 rounded-lg bg-stone-100 shadow-md shadow-stone-500 overflow-hidden">
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
								<Text className="text-lg text-black">{range}</Text>
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
					<Text className="text-gray-50 text-lg ">Finish</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
