import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import AppleLogo from "../../../assets/Login&Onboarding/Apple.svg";
import FbLogo from " ../../../assets/Login&Onboarding/Fb.svg";
import GoogleLogo from "../../../assets/Login&Onboarding/Google.svg";
import BackLogo from "../../../assets/Login&Onboarding/Back.svg";

export default function SignUpForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isFormValid = firstName && lastName && email && password;

	return (
		<KeyboardAvoidingView className="flex-1 bg-gray-50 px-5 py-3" behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<StatusBar backgroundColor={"rgb(248 250 252)"} barStyle={"dark-content"} />
			<TouchableOpacity className="py-4 w-0">
				<BackLogo />
			</TouchableOpacity>
			<Text className="text-4xl font-bold text-black pb-3">Create Account</Text>
			<TextInput
				className="bg-gray-200 mx-1 mt-5 py-3 px-2 text-lg text-black rounded"
				placeholder="First Name"
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={firstName}
				onChangeText={setFirstName}
			/>
			<TextInput
				className="bg-gray-200 mx-1 my-5 py-3 px-2 text-lg text-black rounded"
				placeholder="Last Name"
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={lastName}
				onChangeText={setLastName}
			/>
			<TextInput
				className="bg-gray-200 mx-1  py-3 px-2 text-lg text-black rounded"
				placeholder="Email Address"
				blurOnSubmit={true}
				keyboardType="email-address"
				cursorColor={"rgb(139 92 246)"}
				maxLength={320}
				value={email}
				onChangeText={setEmail}
			/>
			<TextInput
				className="bg-gray-200 mx-1 my-5 py-3 px-2 text-lg text-black rounded"
				placeholder="Password"
				blurOnSubmit={true}
				cursorColor={"rgb(139 92 246)"}
				maxLength={100}
				value={password}
				onChangeText={setPassword}
			/>
			{/* Button */}
			<TouchableOpacity
				className={`items-center justify-center my-5 py-3 rounded-full ${isFormValid ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!isFormValid}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>
			<View className="flex-row py-5">
				<Text className="text-sm text-black">Forgot Password ?</Text>
				<TouchableOpacity>
					<Text className="text-sm text-black font-bold ml-1">Reset</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
