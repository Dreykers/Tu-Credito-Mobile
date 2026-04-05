import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <QueryClientProvider>
                    <AuthProvider>
                        <ToastProvider>
                            <NavigationContainer>
                                <RootNavigator />
                            </NavigationContainer>
                        </ToastProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
};

export default App;
