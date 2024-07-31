import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import MasterCard from "../../assets/Cart/MasterCard.svg";

export default function Payment() {
	const cards = ["****4187", "****9387"];

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
						<Text className="text-black font-bold text-xl px-36">Payment</Text>
					</View>

					{/* Cards */}
					<Text className="text-black font-bold text-lg text-left pt-4">Cards</Text>
					{cards.map((a, index) => (
						<View key={index} className="flex-row justify-between items-center py-6 px-5 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
							<Text className="text-base text-black ">{a}</Text>
							<TouchableOpacity className="mr-48">
								<MasterCard />
							</TouchableOpacity>
							<TouchableOpacity className="">
								<ArrowRight />
							</TouchableOpacity>
						</View>
					))}

					{/* Paypal */}
					<Text className="text-black font-bold text-lg text-left pt-10">Paypal</Text>
					<View className="flex-row justify-between items-center py-6 px-5 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<Text className="text-base text-black ">Cloth@gmail.com</Text>

						<TouchableOpacity className="">
							<ArrowRight />
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
