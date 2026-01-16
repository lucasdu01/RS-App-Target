import { fontFamily } from "@/theme/fontFamily"
import { router } from "expo-router"
import { Button, Text, View } from "react-native"

export default function index(){
	return (
		<View style={{ flex: 1, justifyContent: "center"}}>
			<Text style={{ fontFamily: fontFamily.bold, fontSize: 34}}>Expo Router</Text>

			<Button 
				title="Nova Meta"
				onPress={() => router.navigate("/target")}
			/>

			<Button 
				title="Transação"
				onPress={() => router.navigate("/transaction/132")}
			/>

			<Button 
				title="Progresso"
				onPress={() => router.navigate("/in-progress/12")}
			/>
		</View>
	)
}