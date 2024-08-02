import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import MasterCard from "../../assets/Cart/MasterCard.svg";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
	const cards = ["****4187", "****9387"];

	const navigation = useNavigation();

	return (
		<KeyboardAvoidingView className="flex-1 bg-stone-50" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-stone-50">
				<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-stone-50 px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center mt-5">
						<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl px-24 mr-12">Payment</Text>
					</View>

					{/* Cards */}
					<Text className="text-black font-bold text-lg text-left pt-4">Cards</Text>
					{cards.map((a, index) => (
						<View key={index} className="flex-row justify-between items-center py-6 px-5 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
							<Text className="text-base text-black ">{a}</Text>
							<View className="mr-48">
								<MasterCard />
							</View>
							<TouchableOpacity className="" onPress={() => navigation.navigate("AddCard")}>
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
