import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import React from "react";

import Profile from "../../assets/Homepage/Profile.svg";
import ArrowRight from "../../assets/Notifications/Arrow_right.svg";

export default function Settings() {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
			<ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white px-6">
				{/* header */}
				<View className=" items-center justify-center pt-20">
					<Profile height={100} width={100} />
					<View className="flex-row items-center justify-between space-x-6 py-4 px-4 mt-8 w-full bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<View className="space-y-1">
							<Text className="text-lg text-black font-medium">Gilbert Jones</Text>
							<Text className="text-base text-stone-500">Glbertjones001@gmail.com</Text>
							<Text className="text-base text-stone-500 ">121-224-7890</Text>
						</View>
						<TouchableOpacity>
							<Text className="text-base font-semibold text-violet-500 ">Edit</Text>
						</TouchableOpacity>
					</View>

					{/* other settings */}
					<TouchableOpacity className="flex-row items-center justify-between space-x-6 py-4 px-4 mt-8 w-full bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<Text className="text-lg text-black">Address</Text>
						<ArrowRight />
					</TouchableOpacity>
					<TouchableOpacity className="flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<Text className="text-lg text-black">Wishlist</Text>
						<ArrowRight />
					</TouchableOpacity>
					<TouchableOpacity className="flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<Text className="text-lg text-black">Payment</Text>
						<ArrowRight />
					</TouchableOpacity>
					<TouchableOpacity className="flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<Text className="text-lg text-black">Help</Text>
						<ArrowRight />
					</TouchableOpacity>
					<TouchableOpacity className="flex-row items-center justify-between space-x-6 py-4 px-4 mt-2 w-full bg-stone-100 rounded-lg shadow-sm shadow-stone-500">
						<Text className="text-lg text-black">Support</Text>
						<ArrowRight />
					</TouchableOpacity>

					{/* sign out */}
					<TouchableOpacity className="mt-16">
						<Text className="text-base font-bold text-red-500">Sign Out</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
