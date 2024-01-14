import {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Routes} from './src/routes';
import {StatusBar} from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {colors} from './src/core/themes';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState<boolean>(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    Montserrat_400Regular,
                    Montserrat_500Medium,
                    Montserrat_600SemiBold,
                    Montserrat_700Bold,
                });
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return (
            <View>
                <Text>Load</Text>
            </View>
        );
    }


    return (
        <View
            onLayout={onLayoutRootView}
            style={{flex: 1, backgroundColor: colors.body}}
        >
            <Routes/>
            <StatusBar backgroundColor={colors.body}/>
        </View>
    );
}
