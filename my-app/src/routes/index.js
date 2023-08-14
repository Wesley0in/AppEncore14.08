import {NavigationContainer} from '@react-navigation/native'
import DrawerRouters from './drawer.routes'

export default function Routes(){
    return(
        <NavigationContainer>
            <DrawerRouters />
        </NavigationContainer>
    )
}