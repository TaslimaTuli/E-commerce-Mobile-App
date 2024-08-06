import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import Arrow_R_w from "../../assets/Notifications/Arrow_R_w.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import LoveWhite from "../../assets/Homepage/Top_Selling/LoveWhite.svg";

export default function Wishlist() {
	const lists = [
		{ name: "My Favorite", quantity: "12 Products" },
		{ name: "T-shirt", quantity: "4 Products" },
	];

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
					<View className="flex-row items-center justify-center mt-5">
						<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
							{colorScheme === "light" ? <BackLogo /> : <BackDark />}
						</TouchableOpacity>
						<Text className={`font-bold text-xl px-24 mr-12 ${colorScheme === "light" ? "text-black" : "text-white"}`}>Wishlist</Text>
					</View>

					{lists.map((a, index) => (
						<TouchableOpacity
							key={index}
							className={`py-4 px-3 mt-4 rounded-lg shadow-sm ${
								colorScheme === "light" ? "bg-stone-100 shadow-stone-500" : "bg-gray-700 shadow-black"
							}`}
							onPress={() => navigation.navigate("Favorite")}
						>
							<View className="flex-row justify-between items-center px-2">
								{colorScheme === "light" ? <Love height={25} width={25} /> : <LoveWhite height={25} width={25} />}
								<View className="mr-36">
									<Text className={`text-base font-bold mb-2 ${colorScheme === "light" ? "text-black" : "text-white"}`}>{a.name}</Text>
									<Text className={`text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"}`}>{a.quantity}</Text>
								</View>
								<View className="">{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}</View>
							</View>
						</TouchableOpacity>
					))}
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
