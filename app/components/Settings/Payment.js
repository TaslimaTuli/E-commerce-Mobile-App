import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import Arrow_R_w from "../../assets/Notifications/Arrow_R_w.svg";
import MasterCard from "../../assets/Cart/MasterCard.svg";

export default function Payment() {
	const colorScheme = useColorScheme(); // Determine the color scheme (light or dark)
	const navigation = useNavigation();

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
					{/* Header */}
					<View className="flex-row items-center justify-center mt-5">
						<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
							{colorScheme === "light" ? <BackLogo /> : <BackDark />}
						</TouchableOpacity>
						<Text className={`text-xl font-bold px-24 mr-12 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Payment</Text>
					</View>

					{/* Cards */}
					<Text className={`text-lg font-bold text-left pt-4 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Cards</Text>
					{["****4187", "****9387"].map((card, index) => (
						<TouchableOpacity
							key={index}
							className={`flex-row justify-between items-center py-6 px-5 mt-4 ${
								colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
							} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-600"}`}
							onPress={() => navigation.navigate("AddCard")}
						>
							<Text className={`text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}>{card}</Text>
							<View className="mr-48">
								<MasterCard />
							</View>
							<View>{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}</View>
						</TouchableOpacity>
					))}

					{/* Paypal */}
					<Text className={`text-lg font-bold text-left pt-10 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Paypal</Text>
					<View
						className={`flex-row justify-between items-center py-6 px-5 mt-4 ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-600"}`}
					>
						<Text className={`text-base ${colorScheme === "light" ? "text-black" : "text-white"}`}>Cloth@gmail.com</Text>
						<View>{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
