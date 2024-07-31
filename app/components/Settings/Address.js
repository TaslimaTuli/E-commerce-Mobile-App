import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function Address() {
	const addresses = ["2715 Ash Dr. San Jose, South Dakota 83475", "2715 Ash Dr. San Jose, South Dakota 83475"];

	return (
		<KeyboardAvoidingView className="flex-1 bg-white" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-white">
				<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center mt-7 mb-2">
						<TouchableOpacity className="w-0">
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl px-36">Address</Text>
					</View>

					{addresses.map((a, index) => (
						<View key={index} className="py-6 px-3 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
							<View className="flex-row justify-between items-center px-2">
								<Text className="text-base text-black mr-20" numberOfLines={1} ellipsizeMode="tail">
									{a}
								</Text>
								<TouchableOpacity className="">
									<Text className="text-base font-semibold text-violet-500 ">Edit</Text>
								</TouchableOpacity>
							</View>
						</View>
					))}
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
