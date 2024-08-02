import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";

export default function Address() {
	const addresses = ["2715 Ash Dr. San Jose, South Dakota 83475", "2715 Ash Dr. San Jose, South Dakota 83475"];
	const navigation = useNavigation();

	return (
		<KeyboardAvoidingView className="flex-1 bg-stone-50" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<SafeAreaView className="flex-1 bg-stone-50">
				<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
				<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-stone-50 px-4" contentContainerStyle={{ flexGrow: 1 }}>
					{/* header */}
					<View className="flex-row items-center justify-center mt-5 ">
						<TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
							<BackLogo />
						</TouchableOpacity>
						<Text className="text-black font-bold text-xl px-24 mr-12">Address</Text>
					</View>

					{addresses.map((a, index) => (
						<View key={index} className="py-6 px-3 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
							<View className="flex-row justify-between items-center px-2">
								<Text className="text-base text-black mr-20" numberOfLines={1} ellipsizeMode="tail">
									{a}
								</Text>
								<TouchableOpacity className="" onPress={() => navigation.navigate("AddAddress")}>
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
