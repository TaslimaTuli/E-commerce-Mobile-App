import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";

export default function Wishlist() {
	const lists = [
		{ name: "My Favorite", quantity: "12 Products" },
		{ name: "T-shirt", quantity: "4 Products" },
	];

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
						<Text className="text-black font-bold text-xl px-36">Wishlist</Text>
					</View>

					{lists.map((a, index) => (
						<View key={index} className="py-4 px-3 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
							<View className="flex-row justify-between items-center px-2">
								<TouchableOpacity className="">
									<Love height={25} width={25} />
								</TouchableOpacity>
								<View className="mr-20">
									<Text className="text-base text-black mr-20 font-bold mb-2">{a.name}</Text>
									<Text className="text-base text-stone-500 mr-20">{a.quantity}</Text>
								</View>
								<TouchableOpacity className="">
									<ArrowRight />
								</TouchableOpacity>
							</View>
						</View>
					))}
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
