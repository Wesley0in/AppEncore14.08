import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';

import TabRoutes from "./tab.routes";
import Profile from "../Screens/Profile";

const Drawer= createDrawerNavigator();

export default function DrawerRouters(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home"
                component={TabRoutes}
                options= {{drawerIcon: ({color, size}) => <Feather name= "search" color="black" size={26} />,
                drawerLabel: 'Início'
                }}
            />

            <Drawer.Screen 
                name="Profile"
                component={TabRoutes}
                options= {{drawerIcon: ({color, size}) => <Feather name= "user" color="black" size={26} />,
                drawerLabel: 'Perfil'
                }}
            />
        </Drawer.Navigator>
    )
}