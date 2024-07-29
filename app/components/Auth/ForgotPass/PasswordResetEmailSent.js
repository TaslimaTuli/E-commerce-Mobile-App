import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from "react-native";
import React, { useState } from "react";

import Email from "../../../assets/Login&Onboarding/Email.svg";

export default function PasswordResetEmailSent() {
	const [Password, setPassword] = useState("");

	return (
		<SafeAreaView className="flex-1 bg-stone-50 px-5 items-center justify-center">
			<StatusBar backgroundColor={"rgb(250 250 249)"} barStyle={"dark-content"} />
			<View className="items-center justify-center space-y-7">
				<Email />
				<Text className="text-3xl font-bold text-black text-center">We Sent you an Email to reset your password.</Text>
				{/* Button */}
				<TouchableOpacity className=" py-3 px-6 rounded-full bg-violet-500">
					<Text className="text-lg font-semibold text-gray-50">Return to Login</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
