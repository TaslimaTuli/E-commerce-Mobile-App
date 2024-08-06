import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, useColorScheme } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../../assets/Login&Onboarding/BackDark.svg";

export default function ForgotPass() {
	const color = useColorScheme();
	const [Password, setPassword] = useState("");

	const navigation = useNavigation();
	const handleSubmit = () => {
		navigation.navigate("ResetEmailSent");
	};

	return (
		<KeyboardAvoidingView
			className={`flex-1 ${color === "light" ? "bg-stone-50" : "bg-gray-900"} px-5 py-3`}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<StatusBar
				backgroundColor={color === "light" ? "rgb(250 250 249)" : "rgb(17 24 39)"}
				barStyle={color === "light" ? "dark-content" : "light-content"}
			/>
			<TouchableOpacity className="my-4 mr-auto" onPress={() => navigation.goBack()}>
				{color === "light" ? <BackLogo /> : <BackDark />}
			</TouchableOpacity>
			<Text className={`text-4xl font-bold ${color === "light" ? "text-black" : "text-stone-200"} pb-3`}>Forgot Password</Text>
			<TextInput
				className={`${color === "light" ? "bg-stone-200 text-black" : "bg-gray-700 text-stone-200"} mx-1 my-5 py-3 px-2 text-lg rounded`}
				placeholder="Enter email address"
				placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={Password}
				onChangeText={setPassword}
			/>
			<TouchableOpacity
				className={`items-center justify-center py-3 rounded-full ${Password ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!Password}
				onPress={handleSubmit}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}
