import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Profile from "../../assets/Homepage/Profile.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import Arrow_R_w from "../../assets/Notifications/Arrow_R_w.svg";

export default function Settings() {
	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	return (
		<SafeAreaView className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"}`}>
			<StatusBar
				backgroundColor={colorScheme === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={colorScheme === "light" ? "dark-content" : "light-content"}
			/>
			<ScrollView showsVerticalScrollIndicator={false} className={`flex-1 ${colorScheme === "light" ? "bg-stone-50" : "bg-gray-900"} px-6`}>
				{/* header */}
				<View className="items-center justify-center pt-20">
					<Profile height={100} width={100} />
					<View
						className={`flex-row items-center justify-between space-x-6 py-4 px-4 mt-8 w-full ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-700"}`}
					>
						<View className="space-y-1">
							<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"} font-medium`}>Gilbert Jones</Text>
							<Text className={`text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"}`}>Glbertjones001@gmail.com</Text>
							<Text className={`text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"}`}>121-224-7890</Text>
						</View>
						<TouchableOpacity>
							<Text className={`text-base font-semibold ${colorScheme === "light" ? "text-violet-500" : "text-violet-400"}`}>Edit</Text>
						</TouchableOpacity>
					</View>

					{/* other settings */}
					<TouchableOpacity
						className={`flex-row items-center justify-between space-x-6 py-4 px-4 mt-8 w-full ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-700"}`}
						onPress={() => navigation.navigate("Address")}
					>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>Address</Text>
						{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}
					</TouchableOpacity>
					<TouchableOpacity
						className={`flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-700"}`}
						onPress={() => navigation.navigate("Wishlist")}
					>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>Wishlist</Text>
						{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}
					</TouchableOpacity>
					<TouchableOpacity
						className={`flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-700"}`}
						onPress={() => navigation.navigate("Payment")}
					>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>Payment</Text>
						{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}
					</TouchableOpacity>
					<TouchableOpacity
						className={`flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-700"}`}
						// onPress={() => navigation.navigate("Help")}
					>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>Help</Text>
						{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}
					</TouchableOpacity>
					<TouchableOpacity
						className={`flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full ${
							colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"
						} rounded-lg shadow-sm ${colorScheme === "light" ? "shadow-stone-500" : "shadow-gray-700"}`}
						// onPress={() => navigation.navigate("Support")}
					>
						<Text className={`text-lg ${colorScheme === "light" ? "text-black" : "text-white"}`}>Support</Text>
						{colorScheme === "light" ? <ArrowRight /> : <Arrow_R_w />}
					</TouchableOpacity>

					{/* sign out */}
					<TouchableOpacity className="mt-16" onPress={() => navigation.navigate("SignIn1")}>
						<Text className={`text-base font-bold ${colorScheme === "light" ? "text-red-500" : "text-red-400"}`}>Sign Out</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
