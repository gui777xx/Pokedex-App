import { Button, ScrollView, TouchableOpacity, View } from "react-native";
import {POKEMON_TYPE_COLORS} from "../../utils/colors";
import { styles } from "./styles";
import Button  from "react-native";

export default function Card({ pokemon }) {
    return (
        <TouchableOpacity
        style={[styles.container, 
            { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}` },
        ]}>
            <View style={styles.info}>
                <Text style={styles.numero}>#{pokemon.Numero}</Text>
                <Text style={styles.nome}>#{pokemon.Nome}</Text>
                <ScrollView horizontal>
                    {pokemon.Tipo.map((tipo) => (
                        <Button tipo={tipo} key={tipo.Nome}/>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: pokemon.Image }} style={styles.imagem}/>
            </View>
        </TouchableOpacity>
    );
}