import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback, useColorScheme } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import BackLogo from "../../assets/Login&Onboarding/Back.svg";
import BackDark from "../../assets/Login&Onboarding/BackDark.svg";

import Jacket from "../../assets/Homepage/Top_Selling/Jacket.svg";
import Hoodie1 from "../../assets/Homepage/Hoodie1.svg";
import Hoodie2 from "../../assets/Homepage/Hoodie2.svg";
import Hoodie3 from "../../assets/Homepage/Hoodie3.svg";

import Love from "../../assets/Homepage/Top_Selling/Love.svg";
import Search from "../../assets/Homepage/Search.svg";
import SearchWhite from "../../assets/Homepage/SearchWhite.svg";
import Cancel from "../../assets/Homepage/Cancel.svg";
import Selected from "../../assets/Homepage/Selected.svg";
import Filter from "../../assets/Homepage/Filter.svg";
import More from "../../assets/Login&Onboarding/More.svg";
import MoreWhite from "../../assets/Login&Onboarding/MoreWhite.svg";

export default function SearchResult() {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState("");
	const [selectedSortBy, setSelectedSortBy] = useState("");
	const [selectedGender, setSelectedGender] = useState("");
	const [selectedDeals, setSelectedDeals] = useState("");
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [searchText, setSearchText] = useState("");

	const topSellingItems = [
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
		{ name: "Men's Harrington Jacket", price: "$148.00", icon: Jacket },
		{ name: "Men's Fleece Pullover Hoodie", price: "$100.00", discount: "$100.97", icon: Hoodie1 },
		{ name: "Fleece Skate Hoodie", price: "$110.00", discount: "$100.97", icon: Hoodie2 },
		{ name: "Men's Ice-Dye Pullover Hoodie", price: "$128.97", discount: "$100.97", icon: Hoodie3 },
	];

	const sortBy = ["Recommended", "Newest", "Lowest - Highest Price", "Highest - Lowest Price"];
	const gender = ["Men", "Women", "Kids"];
	const deals = ["On Sale", "Free Shipping Eligible"];

	const handleModalOpen = (type) => {
		setModalType(type);
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleClear = (type) => {
		switch (type) {
			case "Deals":
				setSelectedDeals("");
				break;
			case "Sort By":
				setSelectedSortBy("");
				break;
			case "Gender":
				setSelectedGender("");
				break;
			case "Price":
				setMinPrice("");
				setMaxPrice("");
				break;
			default:
				break;
		}
		handleModalClose();
	};

	const handleSelect = (item, type) => {
		switch (type) {
			case "Deals":
				setSelectedDeals(item);
				break;
			case "SortBy":
				setSelectedSortBy(item);
				break;
			case "Gender":
				setSelectedGender(item);
				break;
			default:
				break;
		}
		handleModalClose();
	};

	const renderFilterButton = (type, selected, defaultText) => {
		const isSelected = Boolean(selected);
		const buttonStyles = `flex-row items-center justify-between px-4 py-2 rounded-full space-x-1 ${
			isSelected ? "bg-violet-500" : colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100"
		}`;
		const textStyles = `text-base ${isSelected ? "text-white" : colorScheme === "dark" ? "text-white" : "text-black"}`;
		const icon = isSelected ? <MoreWhite /> : colorScheme === "dark" ? <MoreWhite /> : <More />;

		return (
			<TouchableOpacity className={buttonStyles} onPress={() => handleModalOpen(type)}>
				<Text className={textStyles}>{selected || defaultText}</Text>
				{icon}
			</TouchableOpacity>
		);
	};

	const getSelectedFiltersCount = () => {
		let count = 0;
		if (selectedSortBy) count++;
		if (selectedGender) count++;
		if (selectedDeals) count++;
		if (minPrice && maxPrice) count++;
		return count;
	};

	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	return (
		<>
			<SafeAreaView className={`flex-1 ${colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50"} px-4 pt-4`}>
				<ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode="on-drag">
					<StatusBar
						backgroundColor={colorScheme === "dark" ? "rgb(17 24 39)" : "rgb(250 250 249)"}
						barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
					/>

					{/* Header */}
					<View className="flex-row justify-between items-center py-4">
						<TouchableOpacity className="my-2 mr-auto" onPress={() => navigation.goBack()}>
							{colorScheme === "light" ? <BackLogo /> : <BackDark />}
						</TouchableOpacity>
						<View className={`flex-row items-center ${colorScheme === "dark" ? "bg-gray-700" : "bg-stone-200"} w-5/6 px-4 rounded-full`}>
							{colorScheme === "light" ? <Search /> : <SearchWhite />}
							<TextInput
								className={`flex-1 text-lg py-2 ${colorScheme === "dark" ? "text-white" : "text-black"} pl-3`}
								placeholder="Search"
								placeholderTextColor={colorScheme === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"}
								cursorColor="rgb(139 92 246)"
								maxLength={100}
								value={searchText}
								onChange={setSearchText}
							/>
							{searchText ? (
								<TouchableOpacity onPress={() => setSearchText("")} className="">
									<Cancel />
								</TouchableOpacity>
							) : null}
						</View>
					</View>

					{/* Filters */}
					<ScrollView horizontal showsHorizontalScrollIndicator={false} className="">
						<View className="flex-row space-x-2 px-2 py-1">
							<View
								className={`flex-row items-center justify-between px-3 py-2 rounded-full ${
									getSelectedFiltersCount() > 0 ? " bg-violet-500" : colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100"
								}`}
							>
								<Filter />
								<Text
									className={`text-base ${
										getSelectedFiltersCount() > 0 ? " text-white" : colorScheme === "dark" ? "text-white" : "text-black"
									} `}
								>
									{getSelectedFiltersCount()}
								</Text>
							</View>

							{renderFilterButton("Deals", selectedDeals, "Deals")}
							{renderFilterButton("Price", minPrice && maxPrice ? `$${minPrice} - $${maxPrice}` : "", "Price")}
							{renderFilterButton("Sort By", selectedSortBy, "Sort By")}
							{renderFilterButton("Gender", selectedGender, "Gender")}
						</View>
					</ScrollView>

					{/* Result */}
					<Text className={`text-base py-3 ${colorScheme === "dark" ? "text-white" : "text-black"}`}>53 Results Found</Text>

					<View className="flex-row flex-wrap justify-between items-center pb-7 px-3 space-y-3">
						{topSellingItems.map((item, index) => (
							<TouchableOpacity
								key={index}
								className={`rounded-xl overflow-hidden pb-5 w-[159] ${colorScheme === "light" ? "bg-stone-100" : "bg-gray-700"}`}
								onPress={() => navigation.navigate("Product")}
							>
								<item.icon />
								<TouchableOpacity className=" absolute top-2 right-3">
									<Love />
								</TouchableOpacity>
								<Text
									className={`mt-2 px-1.5 text-base font-medium ${colorScheme === "light" ? "text-black" : "text-white"}`}
									numberOfLines={1}
									ellipsizeMode="tail"
								>
									{item.name}
								</Text>
								<View className="flex-row space-x-3">
									<Text className={`mt-1 px-1.5  text-base font-black ${colorScheme === "light" ? "text-black" : "text-white"}`}>
										{item.price}
									</Text>
									{/* {item.discount && (
										<Text className={`mt-1 text-base ${colorScheme === "light" ? "text-stone-500" : "text-gray-400"} line-through`}>
											{item.discount}
										</Text>
									)} */}
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
			</SafeAreaView>

			{/* Modals */}
			<Modal animationType="slide" transparent visible={showModal} statusBarTranslucent onRequestClose={handleModalClose}>
				<View className="flex-1 justify-end" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
					<TouchableWithoutFeedback onPress={handleModalClose}>
						<View className="flex-1" />
					</TouchableWithoutFeedback>
					<View className={`h-[500] ${colorScheme === "dark" ? "bg-gray-900" : "bg-stone-50"} pt-4 px-4 rounded-t-3xl`}>
						<View className="flex-row justify-between items-center mb-6 px-2">
							<TouchableOpacity onPress={() => handleClear(modalType)}>
								<Text className={`text-lg ${colorScheme === "dark" ? "text-white" : "text-black"}`}>Clear</Text>
							</TouchableOpacity>
							<Text className={`text-2xl font-black ${colorScheme === "dark" ? "text-white" : "text-black"}`}>{modalType}</Text>
							<TouchableOpacity onPress={handleModalClose}>
								<Cancel />
							</TouchableOpacity>
						</View>
						<ScrollView showsVerticalScrollIndicator={false}>
							{modalType === "Sort By" &&
								sortBy.map((item, index) => (
									<TouchableOpacity
										key={index}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full  shadow-sm ${
											item === selectedSortBy ? "bg-violet-500" : colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100 shadow-stone-400"
										} `}
										onPress={() => handleSelect(item, "SortBy")}
									>
										<Text
											className={`text-lg font-extrabold ${
												item === selectedSortBy ? "text-white" : colorScheme === "dark" ? "text-white" : "text-black"
											}`}
										>
											{item}
										</Text>
										{item === selectedSortBy && <Selected />}
									</TouchableOpacity>
								))}
							{modalType === "Gender" &&
								gender.map((item, index) => (
									<TouchableOpacity
										key={index}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full shadow-sm  ${
											item === selectedGender ? "bg-violet-500" : colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100 shadow-stone-400"
										} `}
										onPress={() => handleSelect(item, "Gender")}
									>
										<Text
											className={`text-lg font-extrabold ${
												item === selectedGender ? "text-white" : colorScheme === "dark" ? "text-white" : "text-black"
											}`}
										>
											{item}
										</Text>
										{item === selectedGender && <Selected />}
									</TouchableOpacity>
								))}
							{modalType === "Deals" &&
								deals.map((item, index) => (
									<TouchableOpacity
										key={index}
										className={`flex-row items-center justify-between mb-3 px-5 py-4 rounded-full shadow-sm ${
											item === selectedDeals ? "bg-violet-500" : colorScheme === "dark" ? "bg-gray-700" : "bg-stone-100 shadow-stone-400"
										} `}
										onPress={() => handleSelect(item, "Deals")}
									>
										<Text
											className={`text-lg font-extrabold ${
												item === selectedDeals ? "text-white" : colorScheme === "dark" ? "text-white" : "text-black"
											}`}
										>
											{item}
										</Text>
										{item === selectedDeals && <Selected />}
									</TouchableOpacity>
								))}
							{modalType === "Price" && (
								<View className="pb-2">
									<TextInput
										className={`mx-1 mt-3 py-3 px-5 text-lg rounded-full ${
											colorScheme === "dark" ? "bg-gray-700 text-white" : "bg-stone-200 text-black"
										}`}
										placeholder="Min Price"
										keyboardType="numeric"
										placeholderTextColor={colorScheme === "dark" ? "rgb(156 163 175)" : "rgb(107 114 128)"}
										value={minPrice}
										onChangeText={setMinPrice}
									/>
									<TextInput
										className={`mx-1 mt-3 py-3 px-5 text-lg rounded-full ${
											colorScheme === "dark" ? "bg-gray-700 text-white" : "bg-stone-200 text-black"
										}`}
										placeholder="Max Price"
										keyboardType="numeric"
										placeholderTextColor={colorScheme === "dark" ? "rgb(156 163 175)" : "rgb(107 114 128)"}
										value={maxPrice}
										onChangeText={setMaxPrice}
										onSubmitEditing={handleModalClose}
									/>
								</View>
							)}
						</ScrollView>
					</View>
				</View>
			</Modal>
		</>
	);
}
