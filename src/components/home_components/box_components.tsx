import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	Button,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../themes/constants";
import { CircleIcon } from "../../assets/icon/24px";
import Modal from "react-native-modal";
import { url } from "../../api/request";

interface Props {
	title?: string;
	name?: string;
	text?: string;
	onPress?: any;
	imgUrl?: ReturnType<typeof require>;
	circle?: boolean;
	active?: boolean;
	activeLeft?: boolean;
	img?: ReturnType<typeof require>;
	imgBoolean?: boolean;
	isActive?: boolean;
	setActive?: () => void;
}

const BoxComponents = ({
	title,
	name,
	text,
	onPress = () => {},
	imgUrl,
	circle = false,
	active = false,
	activeLeft = false,
	imgBoolean = false,
	img,
	isActive,
	setActive,
}: Props) => {
	const [state, setState] = useState(false);

	return (
		<View style={{ flexDirection: "row" }}>
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={onPress}
				style={styles.container}
			>
				{!imgBoolean ? (
					<ImageBackground style={styles.image} source={imgUrl}>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text style={styles.textHeader}>{name}</Text>
							{circle ? (
								<View style={{ alignItems: "flex-end" }}>
									<TouchableOpacity
										activeOpacity={0.7}
										onPress={() => setState(true)}
										style={{
											paddingLeft: 15,
											paddingVertical: 5,
										}}
									>
										<CircleIcon />
									</TouchableOpacity>
									{isActive ? (
										<TouchableOpacity
											activeOpacity={0.7}
											style={styles.btn}
											onPress={setActive}
										>
											<Text style={styles.btnText}>
												Удалить
											</Text>
										</TouchableOpacity>
									) : null}
								</View>
							) : null}
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<View style={{ flex: 2 }}>
								<Text style={styles.textFooter}>{title}</Text>
							</View>
							<View style={{ flex: 1, alignItems: "flex-end",}}>
								{active ? (
									<TouchableOpacity
										onPress={() => setState(false)}
										style={styles.btnOne}
									>
										{isActive ? (
											<TouchableOpacity
												onPress={setActive}
												style={styles.red}
											/>
										) : null}
									</TouchableOpacity>
								) : (
									<Text style={styles.textHeader}>
										{text}
									</Text>
								)}
							</View>
						</View>
					</ImageBackground>
				) : (
					<ImageBackground
						style={styles.image}
						source={{ uri: `${img}` }}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<Text style={styles.textHeader}>{name}</Text>
							{circle ? (
								<View style={{ alignItems: "flex-end" }}>
									<TouchableOpacity
										activeOpacity={0.7}
										onPress={() => setState(true)}
										style={{
											paddingLeft: 15,
											paddingVertical: 5,
										}}
									>
										<CircleIcon />
									</TouchableOpacity>
									{state ? (
										<TouchableOpacity
											activeOpacity={0.7}
											style={styles.btn}
											onPress={() => setState(false)}
										>
											<Text style={styles.btnText}>
												Удалить
											</Text>
										</TouchableOpacity>
									) : null}
								</View>
							) : null}
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<View style={{ flex: 2 }}>
								<Text style={styles.textFooter}>{title}</Text>
							</View>
							<View style={{ flex: 1, alignItems: "flex-end" }}>
								{active ? (
									<TouchableOpacity
										onPress={() => setState(true)}
										style={styles.btnOne}
									>
										{isActive ? (
											<TouchableOpacity
												onPress={setActive}
												style={styles.red}
											/>
										) : null}
									</TouchableOpacity>
								) : (
									<Text style={styles.textHeader}>
										{text}
									</Text>
								)}
							</View>
						</View>
					</ImageBackground>
				)}
			</TouchableOpacity>
			{activeLeft ? (
				<View style={styles.btnContainer}>
					<TouchableOpacity
						onPress={() => setState(true)}
						style={styles.btnTwo}
					>
						{state ? (
							<TouchableOpacity
								onPress={() => setState(false)}
								style={styles.color}
							/>
						) : null}
					</TouchableOpacity>
				</View>
			) : null}
		</View>
	);
};

export default BoxComponents;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		borderRadius: 16,
		marginVertical: 15,
		overflow: "hidden",
		flex: 1,
	},
	image: {
		height: 160,
		paddingHorizontal: 20,
		paddingVertical: 20,
		justifyContent: "space-between",
	},
	textHeader: {
		fontSize: 17,
		color: COLORS.WHITE,
		fontWeight: "700",
	},
	textFooter: {
		fontSize: 14,
		color: COLORS.WHITE,
		fontWeight: "400",
	},
	btn: {
		backgroundColor: COLORS.DELETE_BLACK,
		width: 130,
		paddingVertical: 11,
		borderRadius: 6,
		right: -12,
	},
	btnText: {
		color: COLORS.WHITE,
		textAlign: "center",
		fontSize: 11,
		fontWeight: "400",
	},
	btnOne: {
		width: 20,
		height: 20,
		borderWidth: 1,
		borderColor: COLORS.WHITE,
		borderRadius: 3,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	red: {
		height: "95%",
		width: "90%",
		backgroundColor: COLORS.RED,
	},
	btnContainer: {
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	btnTwo: {
		width: 30,
		height: 30,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: COLORS.GRAY_ONE,
		alignItems: "center",
		justifyContent: "center",
	},
	color: {
		height: "95%",
		width: "90%",
		backgroundColor: COLORS.RED,
		borderRadius: 5,
	},
});
