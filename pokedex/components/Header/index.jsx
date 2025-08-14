import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSourcce = require("../../assets/images/header.jpg");

export default function Header({ title, back = false }) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSourcce} style={styles.image} />
            </View>
            <View style={styles.titleContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {
                        back &&
                        <Pressable onPress={() => router.back()} style={styles.backButton}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </Pressable>
                    }
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={{ fontSize: 16 }}>
                    {!back ? "encontre seu pokemom favorito aqui." : "Aqui está o seu pokemon"}
                </Text>
            </View>
        </View>
    );
}
