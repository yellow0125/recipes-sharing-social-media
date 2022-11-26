import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import MainButton from '../components/UI/MainButton';
import Row from '../components/UI/Row';
import Input from '../components/UI/Input';
import Column from '../components/UI/Column';
import Colors from '../constants/Colors';
import { container } from '../constants/Style';
import { writeUserProfileToDB } from '../firebase/firestore';

export default function EditProfile({ navigation, route }) {
    const currentUserData = route.params.userData;
    const key = currentUserData.key;
    const [username, setUsername] = useState(currentUserData.username);
    const [gender, setGender] = useState(currentUserData.gender);
    const [country, setCountry] = useState(currentUserData.country);

    function submitHandler() {
        Alert.alert("Submit", "Are you sure to update your profile?", [
            { text: "No", style: "cancel" },
            { text: "Yes", style: "default", onPress: submitOperation }
        ]);
    }

    function resetHandler() {
        Alert.alert("Reset", "Are you sure to reset your profile information?", [
            { text: "No", style: "cancel" },
            { text: "Yes", style: "default", onPress: resetOperation }
        ]);
    }

    // store all the information into firebase
    function submitOperation() {
        if (username.length > 0) {
            writeUserProfileToDB({ username, gender, country, key })
            navigation.goBack();
            return;
        }
        else {
            Alert.alert("Invalid input", "Please check your username", [
                { text: "OK", style: "destructive", onPress: resetOperation }
            ]);
            return;
        }

    }

    function resetOperation() {
        setUsername(currentUserData.username);
        setGender(currentUserData.gender);
        setCountry(currentUserData.country);
    }

    return (
        <View style={container.containerAdd}>
            <Text style={styles.title}>Edit Your Profile</Text>
            <Column>
                <Input label="Username" value={username} f_onChange={setUsername} />

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Gender</Text>
                    <Picker
                        label="Gender"
                        selectedValue={gender}
                        onValueChange={(itemValue) =>
                            setGender(itemValue)
                        }>
                        <Picker.Item label="Please Select" value="defaultG" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Hiden" value="Hiden" />
                    </Picker>
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Country</Text>
                    <Picker
                        label="Country"
                        selectedValue={country}
                        mode={'dropdown'}
                        onValueChange={(itemValue) =>
                            setCountry(itemValue)
                        }>
                        <Picker.Item label="Please Select" value="defaultL" />
                        <Picker.Item label="China" value="China" />
                        <Picker.Item label="Japan" value="Japan" />
                        <Picker.Item label="Italy" value="Italy" />
                    </Picker>
                </View>




            </Column>
            <Row style={styles.buttonsContainer}>
                <MainButton style={styles.buttons} onPress={resetHandler} mode='light'>Reset</MainButton>
                <MainButton style={styles.buttons} onPress={submitHandler} mode='light'>Submit</MainButton>
            </Row>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: Colors.BgDarkGreen,
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 12,
    },
    buttonsContainer: {
        justifyContent: 'center',
        marginTop: 20,
    },
    buttons: {
        marginHorizontal: 8,
        minWidth: 100,
    },
    text: {
        marginLeft: 18,
    },
    dropdown: {
        borderColor: "#B7B7B7",
        height: 50,
    },
    pickerContainer: {
        marginLeft: 20
    },
    pickerLabel: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});