import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

export default function Address() {
	const addresses = ["2715 Ash Dr. San Jose, South Dakota 83475", "2715 Ash Dr. San Jose, South Dakota 83475"];
	const navigation = useNavigation();
	const colorScheme = useColorScheme();

	return (
		<KeyboardAvoidingView
			className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<SafeAreaView className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
				<StatusBar
					backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
					barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
				/>
				<ScrollView
					showsVerticalScrollIndicator={false}
					className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"} px-4`}
					contentContainerStyle={{ flexGrow: 1 }}
				>
					{/* header */}
					<View className="flex-row items-center justify-center mt-5 ">
						<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
							{colorScheme === "light" ? <BackLogo /> : <BackDark />}
						</TouchableOpacity>
						<Text className={`font-bold text-xl px-24 mr-12 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Address</Text>
					</View>

					{addresses.map((a, index) => (
						<View
							key={index}
							className={`py-6 px-3 mt-4 rounded-lg shadow-sm ${
								colorScheme === "light" ? "bg-stone-100 shadow-stone-500" : "bg-gray-700 shadow-gray-700"
							}`}
						>
							<View className="flex-row justify-between items-center px-2">
								<Text
									className={`text-base mr-20 ${colorScheme === "light" ? "text-black" : "text-white"}`}
									numberOfLines={1}
									ellipsizeMode="tail"
								>
									{a}
								</Text>
								<TouchableOpacity onPress={() => navigation.navigate("AddAddress")}>
									<Text className="text-base font-semibold text-violet-500">Edit</Text>
								</TouchableOpacity>
							</View>
						</View>
					))}
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
