import { Image, Text, View, Pressable } from "react-native";
import { Styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSourcce = require("../../assets/images/header.png");

export default function Header({ title, back = false }) {
    const router = useRouter();

    return (
        <View style={Styles.container}>
            <View style={Styles.imageContainer}>
                <Image source={imageSourcce} style={Styles.image} />
            </View>
            <View style={Styles.titleContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {
                        back &&
                        <Pressable onPress={() => router.back()} style={Styles.backButton}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </Pressable>
                    }
                    <Text style={Styles.title}>{title}</Text>
                </View>
                <Text style={{ fontSize: 16 }}>
                    {!back ? "encontre seu pokemom favorito aqui." : "Aqui está o seu pokemon"}
                </Text>
            </View>
        </View>
    );
}
