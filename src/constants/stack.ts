import colors from '../constants/colors';

export default {
    animationEnabled: false,
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0
        }
    }),
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.black
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
}