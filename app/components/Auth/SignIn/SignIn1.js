import { View, Text, StatusBar, TextInput, TouchableOpacity, KeyboardAvoidingView, useColorScheme } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AppleLogo from "../../../assets/Login&Onboarding/Apple.svg";
import AppleWhite from "../../../assets/Login&Onboarding/AppleWhite.svg";
import FbLogo from "../../../assets/Login&Onboarding/Fb.svg";
import GoogleLogo from "../../../assets/Login&Onboarding/Google.svg";

export default function SignIn1() {
	const color = useColorScheme();
	const [email, setEmail] = useState("");

	const navigation = useNavigation();
	const handleNext = () => {
		navigation.navigate("SignIn2");
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
			<Text className={`text-4xl font-bold ${color === "light" ? "text-black" : "text-stone-200"} pt-16 pb-3`}>Sign In</Text>
			<TextInput
				className={`${color === "light" ? "bg-stone-200 text-black" : "bg-gray-700 text-stone-200"} mx-1 my-5 py-3 px-2 text-lg rounded`}
				placeholder="Email Address"
				placeholderTextColor={color === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
				blurOnSubmit={true}
				keyboardType="email-address"
				cursorColor={"rgb(139 92 246)"}
				maxLength={320}
				value={email}
				onChangeText={setEmail}
			/>
			<TouchableOpacity
				className={`items-center justify-center py-3 rounded-full ${email ? "bg-violet-500" : "bg-violet-200"}`}
				disabled={!email}
				onPress={handleNext}
			>
				<Text className="text-lg font-semibold text-gray-50">Continue</Text>
			</TouchableOpacity>
			<View className="flex-row py-4">
				<Text className={`text-sm ${color === "light" ? "text-black" : "text-stone-200"}`}>Don't have an Account?</Text>
				<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
					<Text className={`text-sm ${color === "light" ? "text-black" : "text-stone-200"} font-bold ml-1`}>Create One</Text>
				</TouchableOpacity>
			</View>
			<View className="mt-16 space-y-4">
				<TouchableOpacity
					className={`flex-row items-center justify-center ${color === "light" ? "bg-stone-200" : "bg-gray-700"} py-3 px-4 rounded-full`}
				>
					{color === "light" ? <AppleLogo /> : <AppleWhite />}
					<Text className={`${color === "light" ? "text-black" : "text-stone-200"} text-lg font-semibold mx-20`}>Continue With Apple</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={`flex-row items-center justify-center ${color === "light" ? "bg-stone-200" : "bg-gray-700"} py-3 px-4 rounded-full`}
				>
					<GoogleLogo />
					<Text className={`${color === "light" ? "text-black" : "text-stone-200"} text-lg font-semibold mx-20`}>Continue With Google</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className={`flex-row items-center justify-center ${color === "light" ? "bg-stone-200" : "bg-gray-700"} py-3 px-4 rounded-full`}
				>
					<FbLogo />
					<Text className={`${color === "light" ? "text-black" : "text-stone-200"} text-lg font-semibold mx-[70]`}>Continue With Facebook</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
