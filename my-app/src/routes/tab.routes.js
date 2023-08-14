import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import Feed from "../Screens/Feed";
import New from "../Screens/New";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="feed"
                component={Feed}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name= "key" color="black" size={26}/>,
                    tabBarLabel: 'Autenticação'
                }}
            />
            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({color, size}) => <Feather name= "link" color="black" size={26}/>,
                    tabBarLabel: 'Dúvidas?'
                }}
            />
        </Tab.Navigator>
    )
}