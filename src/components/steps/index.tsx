import {View , Text } from "react-native"
import {IconMapPin, IconQrcode, IconTicket} from "@tabler/icons-react-native"
 
import {s} from "./styles"
import { Step } from "../step"


export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}> Veja como funciona: </Text>

            <Step 
                icon= {IconMapPin}
                title="Encontre o estabelecimento "
                description="Veja locais perto de você que são parceiros Nearby">
            </Step>

            <Step 
                icon= {IconQrcode}
                title="Ative o seu cupom com QR Code "
                description="Escaneie o código no estabelecimento para usar o benifício">
            </Step>

            <Step 
                icon={IconTicket}
                title="Garanta as vantagens perto de você "
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimento">
            </Step>
                    
            
        </View>
        
    )
}