import { StyleSheet, View } from 'react-native'

export default function Column({ children, style }) {
    return (
            <View style={[styles.default_style, style]}>
                {children}
            </View>
    );
}

const styles = StyleSheet.create({
    default_style: {
        flexDirection: 'column',
    },
});