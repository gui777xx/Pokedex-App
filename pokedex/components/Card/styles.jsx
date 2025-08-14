import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 8,
        height: 120,
        elevation: 8,
        marginVertical: 15,
        cursor: 'pointer',
    },
    info: {
        flex: 0.2,
        marginLeft: 20,
        marginTop: 14,
    },
    numero: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    nome: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '800',
        marginBottom: 5
    },
    ImageContainer: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 140,
        height: 140,
        right: 10,
        position: 'absolute',
        top: -20,
    },
    });