import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView, useColorScheme } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Hoodie1 from "../../assets/Homepage/Hoodie1.svg";
import Hoodie2 from "../../assets/Homepage/Hoodie2.svg";
import Hoodie3 from "../../assets/Homepage/Hoodie3.svg";

import Love from "../../assets/Homepage/Top_Selling/RedHeart.svg";

export default function Favorites() {
	const navigation = useNavigation();
	const colorScheme = useColorScheme();

	const topSellingItems = [
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
	];

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
						<Text className={`font-bold text-xl px-[75] mr-10 ${colorScheme === "light" ? "text-black" : "text-white"}`}>My Favorites (12)</Text>
					</View>

					{/* Cards */}
					<View className="flex-row flex-wrap space-y-4 px-3 justify-between items-center">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity
								key={index}
								className={`rounded-xl overflow-hidden pb-5 w-[159] ${colorScheme === "light" ? "bg-stone-100" : "bg-gray-800"}`}
								onPress={() => navigation.navigate("Product")}
							>
								<item.icon />
								<TouchableOpacity className=" absolute top-2 right-3">
									<Love />
								</TouchableOpacity>
								<Text
									className={`mt-2 px-1.5 text-base font-medium ${colorScheme === "light" ? "text-black" : "text-white"}`}
									numberOfLines={1}
									ellipsizeMode="tail"
								>
									{item.name}
								</Text>
								<View className="flex-row space-x-3">
									<Text className={`mt-1 px-1.5  text-base font-black ${colorScheme === "light" ? "text-black" : "text-white"}`}>
										{item.price}
									</Text>
									{item.discount && (
										<Text className={`mt-1 text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"} line-through`}>
											{item.discount}
										</Text>
									)}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
