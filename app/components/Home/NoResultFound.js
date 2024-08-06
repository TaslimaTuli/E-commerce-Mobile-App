import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput, useColorScheme } from "react-native";
import React from "react";

import Search from "../../assets/Homepage/SearchBig.svg";
import SearchWhite from "../../assets/Homepage/SearchWhite.svg";
import SearchSmall from "../../assets/Homepage/Search.svg";
import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import { useNavigation } from "@react-navigation/native";

export default function NoResultFound() {
	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	return (
		<SafeAreaView className={`flex-1 ${colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50"} items-center justify-center`}>
			<StatusBar
				backgroundColor={colorScheme === "dark" ? "rgb(17 24 39)" : "rgb(250 250 249)"}
				barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
			/>

			<View className="flex-row justify-between items-center absolute top-7">
				<TouchableOpacity className="my-2 mr-auto">{colorScheme === "light" ? <BackLogo /> : <BackDark />}</TouchableOpacity>
				<View className={`flex-row items-center ${colorScheme === "dark" ? "bg-gray-800" : "bg-stone-200"} w-5/6 px-4 rounded-full`}>
					{colorScheme === "light" ? <SearchSmall /> : <SearchWhite />}
					<TextInput
						className={`flex-1 text-lg py-2 ${colorScheme === "dark" ? "text-white" : "text-black"} pl-3`}
						placeholder="Search"
						placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
						cursorColor="rgb(139 92 246)"
						maxLength={100}
					/>
				</View>
			</View>
			<View className="items-center justify-center space-y-5 px-8">
				<Search />
				<Text className={`text-3xl font-medium text-center ${colorScheme === "dark" ? "text-white" : "text-black"}`}>
					Sorry, we couldn't find any matching result for your Search.
				</Text>
				{/* Button */}
				<TouchableOpacity className="py-3 px-4 rounded-full bg-violet-500" onPress={() => navigation.navigate("MoreCategories")}>
					<Text className="text-base font-semibold text-gray-50">Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
