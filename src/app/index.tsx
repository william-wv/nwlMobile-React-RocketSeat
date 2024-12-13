import { View } from "react-native"
import { IconPlus } from "@tabler/icons-react-native"
import { router } from "expo-router"


import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"
import { Button } from "@/components/button"

export default function Index(){
    return (
        <View 
            style={{   
                flex: 1, 
                padding: 40,
                gap:40
            }}>
            s
            <Welcome></Welcome>

            <Steps></Steps>

            <Button onPress={ () => router.navigate("/home")}>
                {/* <Button.Icon icon={IconPlus}></Button.Icon> */}
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}