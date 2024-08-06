import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";

import Success from "../../assets/Cart/Success.svg";
import { useNavigation } from "@react-navigation/native";

export default function OrderSuccess() {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-violet-500">
			<StatusBar backgroundColor={"rgb(139 92 246)"} barStyle={"light-content"} />
			<View className="absolute top-32">
				<Success />
			</View>

			<View
				className={`absolute bottom-0 items-center justify-center w-full rounded-t-2xl h-96 ${
					colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
				}`}
			>
				<Text className={`text-3xl font-bold text-center px-14 tracking-widest ${colorScheme === "light" ? "text-black" : "text-white"}`}>
					Order Placed Successfully
				</Text>
				<Text className={`text-lg text-center py-6 ${colorScheme === "light" ? "text-gray-500" : "text-gray-400"}`}>
					You will receive an email confirmation
				</Text>
				<TouchableOpacity className="py-3 px-28 mt-24 rounded-full bg-violet-500" onPress={() => navigation.navigate("OrderTab")}>
					<Text className="text-base font-semibold text-gray-50">See Order Details</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
