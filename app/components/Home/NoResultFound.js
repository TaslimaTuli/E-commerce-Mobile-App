import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from "react-native";
import React from "react";

import Search from "../../assets/Homepage/SearchBig.svg";
import SearchSmall from "../../assets/Homepage/Search.svg";
import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function NoResultFound() {
	return (
		<SafeAreaView className="flex-1 bg-stone-50  items-center justify-center">
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />

			<View className="flex-row justify-between items-center absolute top-7">
				<TouchableOpacity className="my-2 mr-auto">
					<BackLogo />
				</TouchableOpacity>
				<View className="flex-row items-center bg-stone-200 w-5/6 px-4 rounded-full">
					<SearchSmall />
					<TextInput className="flex-1 text-lg py-2 text-black pl-3" placeholder="Search" cursorColor="rgb(139 92 246)" maxLength={100} />
				</View>
			</View>
			<View className="items-center justify-center space-y-5 px-8">
				<Search />
				<Text className="text-3xl font-medium text-black text-center">Sorry, we couldn't find any matching result for your Search.</Text>
				{/* Button */}
				<TouchableOpacity className=" py-3 px-4 rounded-full bg-violet-500">
					<Text className="text-base font-semibold text-gray-50">Explore Categories</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
