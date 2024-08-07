import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "react-native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import LoveWhite from "../../assets/Homepage/Top_Selling/LoveWhite.svg";
import More from "../../assets/Login&Onboarding/More.svg";
import MoreWhite from "../../assets/Login&Onboarding/MoreWhite.svg";

import Product1 from "../../assets/Homepage/Products/Product1.svg";
import Product2 from "../../assets/Homepage/Products/Product2.svg";
import Product3 from "../../assets/Homepage/Products/Product3.svg";

import Plus from "../../assets/Homepage/Products/Plus.svg";
import Minus from "../../assets/Homepage/Products/Minus.svg";

import User1 from "../../assets/Homepage/Products/User1.svg";
import User2 from "../../assets/Homepage/Products/User2.svg";
import Rating from "../../assets/Homepage/Products/Rating.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";
import CancelW from "../../assets/Homepage/CancelW.svg";
import Selected from "../../assets/Homepage/Selected.svg";
import { useNavigation } from "@react-navigation/native";

export default function Product() {
	const [sizeModalVisible, setSizeModalVisible] = useState(false);
	const [colorModalVisible, setColorModalVisible] = useState(false);
	const [selectedSize, setSelectedSize] = useState("S");
	const [selectedColor, setSelectedColor] = useState("#B3B68B");
	const [quantity, setQuantity] = useState(1);

	const navigation = useNavigation();
	const colorScheme = useColorScheme();

	const sizes = ["S", "M", "L", "XL", "2XL"];
	const colors = [
		{ name: "Orange", color: "#EC6D26" },
		{ name: "Black", color: "#272727" },
		{ name: "Red", color: "#FA3636" },
		{ name: "Yellow", color: "#F4BD2F" },
		{ name: "Blue", color: "#4468E5" },
		{ name: "Lemon", color: "#B3B68B" },
	];

	const bgColor = colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50";
	const textColor = colorScheme === "dark" ? "text-white" : "text-black";

	return (
		<View className={`flex-1 ${bgColor}`}>
			<ScrollView className={`px-4 ${bgColor}`} showsVerticalScrollIndicator={false}>
				<SafeAreaView className={`pt-10 ${bgColor}`}>
					<StatusBar
						backgroundColor={colorScheme === "dark" ? "rgb(17 24 39)" : "rgb(250 250 249)"}
						barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
					/>
					<View className="flex-row justify-between items-center">
						<TouchableOpacity onPress={() => navigation.goBack()}>{colorScheme === "light" ? <BackLogo /> : <BackDark />}</TouchableOpacity>
						<TouchableOpacity className={`p-3 rounded-full ${colorScheme === "light" ? "bg-stone-200" : "bg-gray-700"}`}>
							{colorScheme === "light" ? <Love height={15} width={15} /> : <LoveWhite height={15} width={15} />}
						</TouchableOpacity>
					</View>

					{/* Product Pictures */}
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View className="py-5 flex-row justify-between items-center space-x-2">
							<Product1 />
							<Product2 />
							<Product3 />
						</View>
					</ScrollView>

					{/* Product name and price */}
					<Text className={`text-2xl ${textColor} font-bold`}>Men's Harrington Jacket</Text>
					<Text className="text-lg text-violet-500 font-bold py-1">$148.00</Text>

					{/* Preferences */}
					<View className=" py-5 space-y-2">
						{/* Size */}
						<TouchableOpacity
							className={`flex-row items-center justify-between mx-1 px-5 py-4 rounded-full ${
								colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100 shadow-sm shadow-stone-400"
							} `}
							onPress={() => setSizeModalVisible(true)}
						>
							<Text className={`text-lg ${textColor}`}>Size</Text>
							<Text className={`text-lg font-black pl-44 ${textColor}`}>{selectedSize}</Text>
							{colorScheme === "dark" ? <MoreWhite /> : <More />}
						</TouchableOpacity>

						{/* Color */}
						<TouchableOpacity
							className={`flex-row items-center justify-between mx-1 px-5 py-4 rounded-full ${
								colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100 shadow-sm shadow-stone-400"
							} `}
							onPress={() => setColorModalVisible(true)}
						>
							<Text className={`text-lg ${textColor}`}>Color</Text>
							<View className="rounded-full p-2 ml-[170]" style={{ backgroundColor: selectedColor }} />
							{colorScheme === "dark" ? <MoreWhite /> : <More />}
						</TouchableOpacity>

						{/* Quantity */}
						<View
							className={`flex-row items-center justify-between px-3.5 py-2 rounded-full ${
								colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100 shadow-sm shadow-stone-400"
							} `}
						>
							<Text className={`text-lg ${textColor}`}>Quantity</Text>
							<View className="flex-row items-center justify-center space-x-6 ml-[128]">
								<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
									<Plus />
								</TouchableOpacity>
								<Text className={`text-lg font-black ${textColor}`}>{quantity}</Text>
								<TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
									<Minus />
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/* Description */}
					<Text className={`py-1 pb-4 text-stone-500 text-base tracking-widest ${textColor}`}>
						Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of
						room to layer underneath, while the soft corduroy keeps it casual and timeless.
					</Text>

					{/* Shipping & Returns */}
					<Text className={`text-lg ${textColor} font-bold pb-2`}>Shipping & Returns</Text>
					<Text className={`text-base tracking-widest text-stone-500 pb-2 ${textColor}`}>Free standard shipping and free 60-day returns.</Text>

					{/* Reviews */}
					<View className="py-3">
						<Text className={`text-lg ${textColor} font-bold pb-4`}>Reviews</Text>
						<Text className={`text-3xl font-black ${textColor}`}>4.5 Ratings</Text>
						<Text className={`text-base text-stone-500 pt-4 ${textColor}`}>213 Reviews</Text>
						<View className="py-5">
							<View className="flex-row justify-between items-center">
								<User1 />
								<Text className={`text-base font-bold pr-36 ${textColor}`}>Alex Morgan</Text>
								<Rating />
							</View>
							<Text className={`py-2 text-stone-500 text-base tracking-wider ${textColor}`}>
								Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive
								accessories.
							</Text>
							<Text className={`text-sm font-bold ${textColor}`}>12 days ago</Text>
						</View>
						<View className="pb-32 pt-1">
							<View className="flex-row justify-between items-center">
								<User2 />
								<Text className={`text-base font-bold pr-36 ${textColor}`}>Alex Morgan</Text>
								<Rating />
							</View>
							<Text className={`py-2 text-stone-500 text-base tracking-wider ${textColor}`}>
								Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive
								accessories.
							</Text>
							<Text className={`text-sm font-bold ${textColor}`}>12 days ago</Text>
						</View>
					</View>
				</SafeAreaView>
			</ScrollView>

			{/* Add to cart */}
			<TouchableOpacity
				className={`flex-row items-center justify-between py-4 mb-6 mx-4 rounded-full ${
					colorScheme === "dark" ? "bg-violet-600" : "bg-violet-500"
				} shadow-lg shadow-black`}
				onPress={() => navigation.navigate("Cart")}
			>
				<Text className="text-lg font-bold text-white px-5">$148.00</Text>
				<Text className="text-lg font-medium text-white px-5">Add to Bag</Text>
			</TouchableOpacity>

			{/* Size Modal */}
			<Modal
				visible={sizeModalVisible}
				statusBarTranslucent={true}
				onRequestClose={() => setSizeModalVisible(false)}
				transparent={true}
				animationType="slide"
			>
				<View className="flex-1 justify-end" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
					<TouchableOpacity className="flex-1 w-full" activeOpacity={1} onPress={() => setSizeModalVisible(false)}>
						<View className="flex-1" />
					</TouchableOpacity>
					<View className={`bg-stone-50 pt-4 px-4 rounded-t-3xl ${bgColor}`}>
						<View className="flex-row justify-between items-center mb-5">
							<Text className={`text-2xl ${textColor} font-black ml-40`}>Size</Text>
							<TouchableOpacity onPress={() => setSizeModalVisible(false)}>{colorScheme === "light" ? <Cancel /> : <CancelW />}</TouchableOpacity>
						</View>
						<View className="h-[350]">
							<ScrollView showsVerticalScrollIndicator={false}>
								{sizes.map((item, index) => (
									<TouchableOpacity
										key={index}
										onPress={() => {
											setSelectedSize(item);
											setSizeModalVisible(false);
										}}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full ${
											item === selectedSize ? "bg-violet-500" : `${colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100"}`
										} shadow-sm shadow-stone-400`}
									>
										<Text className={`text-lg font-extrabold ${item === selectedSize ? "text-white" : textColor}`}>{item}</Text>
										<View className="flex-row items-center justify-center space-x-10">
											{item === selectedSize ? <Selected /> : <View></View>}
										</View>
									</TouchableOpacity>
								))}
							</ScrollView>
						</View>
					</View>
				</View>
			</Modal>

			{/* Color Modal */}
			<Modal
				visible={colorModalVisible}
				statusBarTranslucent={true}
				onRequestClose={() => setColorModalVisible(false)}
				transparent={true}
				animationType="slide"
			>
				<View className="flex-1 justify-end" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
					<TouchableOpacity className="flex-1 w-full" activeOpacity={1} onPress={() => setColorModalVisible(false)}>
						<View className="flex-1" />
					</TouchableOpacity>
					<View className={`bg-stone-50 rounded-t-3xl pt-4 px-4 ${bgColor}`}>
						<View className="flex-row justify-between items-center mb-5">
							<Text className={`text-2xl ${textColor} font-black ml-40`}>Color</Text>
							<TouchableOpacity onPress={() => setColorModalVisible(false)}>
								{colorScheme === "light" ? <Cancel /> : <CancelW />}
							</TouchableOpacity>
						</View>
						<View className="h-[350] pb-4">
							<ScrollView showsVerticalScrollIndicator={false}>
								{colors.map((item, index) => (
									<TouchableOpacity
										key={index}
										onPress={() => {
											setSelectedColor(item.color);
											setColorModalVisible(false);
										}}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full ${
											item.color === selectedColor ? "bg-violet-500" : `${colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100"}`
										} shadow-sm shadow-stone-400`}
									>
										<Text className={`text-lg font-extrabold ${item.color === selectedColor ? "text-white" : textColor}`}>{item.name}</Text>
										<View className="flex-row items-center justify-center space-x-10">
											<View
												className={`rounded-full ${item.color === selectedColor ? "p-2.5 border-stone-100 border-2" : "p-3"}`}
												style={{ backgroundColor: item.color }}
											/>
											{item.color === selectedColor ? <Selected /> : <View className="mr-[16.5]"></View>}
										</View>
									</TouchableOpacity>
								))}
							</ScrollView>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}
