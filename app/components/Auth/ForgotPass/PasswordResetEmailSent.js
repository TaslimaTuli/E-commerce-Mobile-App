import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, useColorScheme } from "react-native";
import React from "react";

import Email from "../../../assets/Login&Onboarding/Email.svg";
import { useNavigation } from "@react-navigation/native";

export default function PasswordResetEmailSent() {
	const color = useColorScheme();
	const navigation = useNavigation();
	const handleSubmit = () => {
		navigation.navigate("SignIn1");
	};

	return (
		<SafeAreaView className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-5 items-center justify-center`}>
			<StatusBar
				backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={color === "light" ? "dark-content" : "light-content"}
			/>
			<View className="items-center justify-center space-y-7">
				<Email fill={color === "light" ? "black" : "white"} />
				<Text className={`text-3xl font-bold text-center ${color === "light" ? "text-black" : "text-stone-200"}`}>
					We sent you an email to reset your password.
				</Text>
				{/* Button */}
				<TouchableOpacity className="py-3 px-6 rounded-full bg-violet-500" onPress={handleSubmit}>
					<Text className="text-lg font-semibold text-gray-50">Return to Login</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
