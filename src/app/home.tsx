import { View , Text, Alert} from "react-native";
import { useEffect, useState } from "react";

import { api } from "@/services/api";


import { Places } from "@/components/places";
import { PlaceProps } from "@/components/place"
import { Categories, CategoriesProps } from "@/components/categories";


type MarketsProps = PlaceProps & {
    
}

export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")
    const [markets, setMarket] = useState<MarketsProps[]>([])

    async function fatchCategories() {
        try {
            const {data} = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias","Não foi possível carregar as categorias.")
        }
    }
    
    async function fatchMarkets(){
        try {
            if (!category){
                return
            }

            const {data} = await api.get("/markets/category/" + category)
            setMarket(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Locais", "Não foi possível carregar os locais")
        }
    }

    useEffect(() => {
        fatchCategories()
    }, [])

    useEffect(() => {
        fatchMarkets()
    }, [category])

    return (
        <View style={{flex: 1, backgroundColor: "#CECECE"}}>
            <Categories data={categories} onSelect={setCategory} selected={category}></Categories>
            <Places data={markets}></Places>
        </View>
    )
}