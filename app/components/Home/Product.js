import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import More from "../../assets/Login&Onboarding/More.svg";

import Product1 from "../../assets/Homepage/Products/Product1.svg";
import Product2 from "../../assets/Homepage/Products/Product2.svg";
import Product3 from "../../assets/Homepage/Products/Product3.svg";

import Plus from "../../assets/Homepage/Products/Plus.svg";
import Minus from "../../assets/Homepage/Products/Minus.svg";

import User1 from "../../assets/Homepage/Products/User1.svg";
import User2 from "../../assets/Homepage/Products/User2.svg";
import Rating from "../../assets/Homepage/Products/Rating.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";
import Selected from "../../assets/Homepage/Selected.svg";

export default function Product() {
	const [sizeModalVisible, setSizeModalVisible] = useState(false);
	const [colorModalVisible, setColorModalVisible] = useState(false);
	const [selectedSize, setSelectedSize] = useState("S");
	const [selectedColor, setSelectedColor] = useState("#B3B68B");
	const [quantity, setQuantity] = useState(1);

	const sizes = ["S", "M", "L", "XL", "2XL"];

	const colors = [
		{ name: "Orange", color: "#EC6D26" },
		{ name: "Black", color: "#272727" },
		{ name: "Red", color: "#FA3636" },
		{ name: "Yellow", color: "#F4BD2F" },
		{ name: "Blue", color: "#4468E5" },
		{ name: "Lemon", color: "#B3B68B" },
	];

	return (
		<>
			<ScrollView className="bg-white px-4" showsVerticalScrollIndicator={false}>
				<SafeAreaView className="bg-white">
					<StatusBar backgroundColor={"rgb(255 255 255)"} barStyle={"dark-content"} />
					<View className="pt-10 flex-row justify-between items-center">
						<TouchableOpacity className="w-0">
							<BackLogo />
						</TouchableOpacity>
						<TouchableOpacity className="px-5 w-0">
							<Love />
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

					{/* product name and price */}
					<Text className="text-2xl text-black font-bold">Men's Harrington Jacket</Text>
					<Text className="text-lg text-violet-500 font-bold py-1">$148.00</Text>

					{/* Preferences */}
					<View className="py-5 space-y-2">
						{/* Size */}
						<TouchableOpacity
							className="flex-row items-center justify-between mx-1 px-5 py-4 rounded-full bg-stone-100 shadow-sm shadow-stone-400"
							onPress={() => setSizeModalVisible(true)}
						>
							<Text className="text-lg text-black">Size</Text>
							<Text className="text-lg text-black font-black pl-44">{selectedSize}</Text>
							<More />
						</TouchableOpacity>

						{/* Color */}
						<TouchableOpacity
							className="flex-row items-center justify-between mx-1 px-5 py-4 rounded-full bg-stone-100 shadow-sm shadow-stone-400"
							onPress={() => setColorModalVisible(true)}
						>
							<Text className="text-lg text-black">Color</Text>
							<View className="rounded-full p-2 ml-[170]" style={{ backgroundColor: selectedColor }} />
							<More />
						</TouchableOpacity>

						{/* Quantity */}
						<View className="flex-row items-center justify-between px-3.5 py-2 rounded-full bg-stone-100 shadow-sm shadow-stone-400">
							<Text className="text-lg text-black">Quantity</Text>
							<View className="flex-row items-center justify-center space-x-6  ml-[128]">
								<TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
									<Plus />
								</TouchableOpacity>
								<Text className="text-lg text-black font-black">{quantity}</Text>
								<TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
									<Minus />
								</TouchableOpacity>
							</View>
						</View>
					</View>

					{/* Description */}
					<Text className="py-1 pb-4 text-stone-500 text-base tracking-widest">
						Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of
						room to layer underneath, while the soft corduroy keeps it casual and timeless.
					</Text>

					{/* Shipping & Returns */}
					<Text className="text-lg text-black font-bold pb-2">Shipping & Returns</Text>
					<Text className="text-base tracking-widest text-stone-500 pb-2">Free standard shipping and free 60-day returns.</Text>

					{/* Reviews */}
					<View className="py-3">
						<Text className="text-lg text-black font-bold pb-4">Reviews</Text>
						<Text className="text-3xl text-black font-black">4.5 Ratings</Text>
						<Text className="text-base text-stone-500 pt-4">213 Reviews</Text>
						<View className="py-5">
							<View className="flex-row justify-between items-center">
								<User1 />
								<Text className="text-base text-black font-bold pr-36">Alex Morgan</Text>
								<Rating />
							</View>
							<Text className="py-2 text-stone-500 text-base tracking-wider">
								Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive
								accessories.
							</Text>
							<Text className="text-sm text-black font-bold">12 days ago</Text>
						</View>
						<View className="pb-32 pt-1">
							<View className="flex-row justify-between items-center">
								<User2 />
								<Text className="text-base text-black font-bold pr-36">Alex Morgan</Text>
								<Rating />
							</View>
							<Text className="py-2 text-stone-500 text-base tracking-wider">
								Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive
								accessories.
							</Text>
							<Text className="text-sm text-black font-bold">12 days ago</Text>
						</View>
					</View>
				</SafeAreaView>
			</ScrollView>

			{/* Add to cart */}
			<TouchableOpacity className="flex-row items-center justify-between py-4 mb-6 mx-4 rounded-full bg-violet-500 shadow-lg shadow-black">
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
					<TouchableOpacity
						className="flex-1 w-full"
						activeOpacity={1}
						onPress={() => {
							setSizeModalVisible(false);
						}}
					>
						<View className="flex-1" />
					</TouchableOpacity>
					<View className="bg-white  pt-4 px-4 rounded-t-3xl">
						<View className="flex-row justify-between items-center mb-5">
							<Text className="text-2xl text-black font-black ml-40">Size</Text>
							<TouchableOpacity onPress={() => setSizeModalVisible(false)} className="">
								<Cancel />
							</TouchableOpacity>
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
											item === selectedSize ? " bg-violet-500" : "bg-stone-100"
										}  shadow-sm shadow-stone-400`}
									>
										<Text className={`text-lg font-extrabold  ${item === selectedSize ? "text-white" : "text-black"}`}>{item}</Text>
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
					<TouchableOpacity
						className="flex-1 w-full"
						activeOpacity={1}
						onPress={() => {
							setColorModalVisible(false);
						}}
					>
						<View className="flex-1" />
					</TouchableOpacity>
					<View className="bg-white rounded-t-3xl pt-4 px-4">
						<View className="flex-row justify-between items-center mb-5">
							<Text className="text-2xl text-black font-black ml-40">Color</Text>
							<TouchableOpacity onPress={() => setColorModalVisible(false)} className="">
								<Cancel />
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
											item.color === selectedColor ? " bg-violet-500" : "bg-stone-100"
										}  shadow-sm shadow-stone-400`}
									>
										<Text className={`text-lg font-extrabold  ${item.color === selectedColor ? "text-white" : "text-black"}`}>
											{item.name}
										</Text>
										<View className="flex-row items-center justify-center space-x-10">
											<View
												className={`rounded-full ${item.color === selectedColor ? "p-2.5 border-stone-100 border-2" : "p-3"}`}
												style={{
													backgroundColor: item.color,
												}}
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
		</>
	);
}
