import { View } from "react-native"
import { router } from "expo-router"

import { HomeHeader } from "@/components/HomeHeader"
import { Target } from "@/components/Target"
import { List } from "@/components/List"
import { Button } from "@/components/Button"

const summary = {
	total: "R$ 2.680,00",
	input: { label: "Entradas", value:"R$ 6,184.90"},
	output: { label: "Saídas", value:"-R$ 883.65"},
}

const targets = [
	{
		id: "1",
		name:"Apple Watch",
		current: "50%",
		percentage:"R$ 580,00",
		target: "R$ 1.790,00",
	},
	{
		id: "2",
		name:"Comprar uma cadeira ergonômica",
		current: "75%",
		percentage:"R$900,00",
		target: "R$ 1.200,00",
	},
	{
		id: "3",
		name:"Fazer uma viagem para o Rio de Janeiro",
		current: "75%",
		percentage:"R$ 1.200,00",
		target: "R$ 3.000,00",
	}
]

export default function index(){
	return (
		<View style={{ flex: 1}}>
			<HomeHeader data={ summary } />

			<List
				title="Metas" 
				data={targets}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<Target 
						data={item}
						onPress={() => router.navigate(`/in-progress/${item.id}`)}
					/>
				)}
				emptyMessage="Nenhuma meta. Clique em nova meta para criar."
				containerStyle={{ paddingHorizontal: 24}}
			/>
			<View style={{ padding: 24, paddingBottom: 32 }}>
				<Button title="Nova Meta" onPress={() => router.navigate("/target")}/>
			</View>
		</View>
	)
}