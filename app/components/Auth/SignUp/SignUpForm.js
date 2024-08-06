import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, useColorScheme } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../../assets/Login&Onboarding/BackDark.svg";

export default function SignUpForm() {
	const color = useColorScheme();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isFormValid = firstName && lastName && email && password;

	const navigation = useNavigation();
	const handleNext = () => {
		navigation.navigate("MoreSignUp");
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
			<Text className={`text-4xl font-bold ${color === "light" ? "text-black" : "text-stone-200"} pb-3`}>Create Account</Text>
			<TextInput
				className={`${color === "light" ? "bg-stone-200 text-black" : "bg-gray-700 text-stone-200"} mx-1 mt-5 py-3 px-2 text-lg rounded`}
				placeholder="First Name"
				placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={firstName}
				onChangeText={setFirstName}
			/>
			<TextInput
				className={`${color === "light" ? "bg-stone-200 text-black" : "bg-gray-700 text-stone-200"} mx-1 my-5 py-3 px-2 text-lg rounded`}
				placeholder="Last Name"
				placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={lastName}
				onChangeText={setLastName}
			/>
			<TextInput
				className={`${color === "light" ? "bg-stone-200 text-black" : "bg-gray-700 text-stone-200"} mx-1 py-3 px-2 text-lg rounded`}
				placeholder="Email Address"
				placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
				blurOnSubmit={true}
				keyboardType="email-address"
				cursorColor={"rgb(139 92 246)"}
				maxLength={320}
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				className={`${color === "light" ? "bg-stone-200 text-black" : "bg-gray-700 text-stone-200"} mx-1 my-5 py-3 px-2 text-lg rounded`}
				placeholder="Password"
				placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={password}
				onChangeText={setPassword}
			/>
			<TouchableOpacity
				className={`items-center justify-center my-5 py-3 rounded-full ${isFormValid ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!isFormValid}
				onPress={handleNext}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>
			<View className="flex-row py-5">
				<Text className={`text-sm ${color === "light" ? "text-black" : "text-stone-200"}`}>Forgot Password?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
					<Text className={`text-sm ${color === "light" ? "text-black" : "text-stone-200"} font-bold ml-1`}>Reset</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
