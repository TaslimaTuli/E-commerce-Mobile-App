import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import Arrow_right from "../../assets/Notifications/Arrow_right.svg";

export default function Checkout() {
	const navigation = useNavigation();

	const orders = [
		{ big: "Add Shipping Address", small: "Shipping Address", screen: "AddAddress" },
		{ big: "Add Payment Method", small: "Payment Method", screen: "AddCard" },
	];

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
						<Text className="text-black font-bold text-xl px-24 mr-14">Checkout</Text>
					</View>

					<View className="flex-grow mb-6">
						{orders.map((order, index) => (
							<View key={index} className="flex-col py-3 px-2 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
								<TouchableOpacity className="flex-row items-center" onPress={() => navigation.navigate(order.screen)}>
									<View className="flex-1 pl-2 space-y-2">
										<Text className="text-sm  text-stone-500">{order.small}</Text>
										<Text className="text-base text-black">{order.big}</Text>
									</View>
									<View>
										<Arrow_right />
									</View>
								</TouchableOpacity>
							</View>
						))}
					</View>
					<View className="py-2 mt-auto">
						<View className="flex-row justify-between py-1 px-4">
							<Text className="text-lg text-stone-400">Subtotal</Text>
							<Text className="text-lg text-black">$200</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4">
							<Text className="text-lg text-stone-400">Shipping Cost</Text>
							<Text className="text-lg text-black">$8.00</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4">
							<Text className="text-lg text-stone-400">Tax</Text>
							<Text className="text-lg text-black">$0.00</Text>
						</View>
						<View className="flex-row justify-between py-1 px-4 mb-6">
							<Text className="text-lg text-stone-400">Total</Text>
							<Text className="text-lg text-black font-bold">$208.00</Text>
						</View>

						<View className="py-4 px-4 ">
							<TouchableOpacity
								className="flex-row justify-between px-6 py-3 rounded-full items-center bg-violet-500"
								onPress={() => navigation.navigate("CheckoutWithDetails")}
							>
								<Text className="text-gray-50 text-sm font-bold">$208.00</Text>
								<Text className="text-gray-50 text-lg">Place Order</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}
