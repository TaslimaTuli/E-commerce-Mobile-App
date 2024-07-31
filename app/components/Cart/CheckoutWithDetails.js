import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";
import MasterCard from "../../assets/Cart/MasterCard.svg";

export default function CheckoutWithDetails() {
	const orders = [
		{ big: "2715 Ash Dr. San Jose, South Dakota 83475", small: "Shipping Address", icon: View },
		{ big: "****4187", small: "Payment Method", icon: MasterCard },
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
						<Text className="text-black font-bold text-xl px-36">Checkout</Text>
					</View>

					<View className="flex-grow mb-6">
						{orders.map((order, index) => (
							<View key={index} className="flex-col py-3 px-2 mt-4 bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
								<View className="flex-row items-center">
									<View className="flex-1 pl-2 space-y-2">
										<Text className="text-sm text-stone-500">{order.small}</Text>
										<View className="flex-row space-x-2 items-center">
											<Text className="text-base text-black " numberOfLines={1} ellipsizeMode="tail">
												{order.big}
											</Text>
											<order.icon />
										</View>
									</View>
									<TouchableOpacity className="ml-20 ">
										<ArrowRight />
									</TouchableOpacity>
								</View>
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
							<TouchableOpacity className="flex-row justify-between px-6 py-3 rounded-full items-center bg-violet-500">
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
