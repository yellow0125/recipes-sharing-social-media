import React, { Component } from 'react'
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchUser } from '../redux/actions/index';
import MainButton from '../components/UI/MainButton';
import Colors from "../constants/Colors";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LocationsRecipes from "../screens/LocationsRecipes";
import AllRecipes from "../screens/AllRecipes";
import AddRecipes from "../screens/AddRecipes";
import CollectedRecipes from "../screens/CollectedRecipes";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export class Main extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ navigation, route }) => {
          return {
            headerStyle: { backgroundColor: Colors.BgDarkGreen },
            headerTintColor: 'white',
            tabBarStyle: { backgroundColor: Colors.BgDarkGreen },
            tabBarInactiveTintColor: Colors.White,
            tabBarActiveTintColor: Colors.BgLighterYellow,
            headerTitleAlign: 'center',
            // headerRight: () => {
            //   return <MainButton onPress={() => navigation.navigate('Profile')} >Username</MainButton>
            // }
          }
        }}
      >
        <Tab.Screen name="Locations" component={LocationsRecipes}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="location" size={size} color={color} />,
            headerTitle: "Locations",
          }}
        />
        <Tab.Screen name="All" component={AllRecipes}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="list" size={size} color={color} />,
            headerTitle: "All Recipes",
          }}
        />
        <Tab.Screen name="Add" component={AddRecipes}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" size={size} color={color} />,
            headerTitle: "Add your Recipes",
          }}
        />
        <Tab.Screen name="Collected" component={CollectedRecipes}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="heart" size={size} color={color} />,
            headerTitle: "Your Favorite Recipes",
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} />,
            headerTitle: "My Profile",
          }}
        />
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({
  
}, dispatch);


export default connect(mapStateToProps, mapDispatchProps)(Main);
