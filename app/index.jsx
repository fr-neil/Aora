import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import { CustomButton, Loader } from '../components';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
    const [isLoading, isLoggedIn] = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href='/home' />;
    return (
        <SafeAreaView className='bg-primary h-full'>
            <Loader isLoading={isLoading} />

            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='items-center justify-start w-full min-h-[85vh] px-4'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[130px] h-[84px]'
                    />
                    <Image
                        source={images.cards}
                        className='w-full max-w-[300px] h-[300px]'
                        resizeMode='contain'
                    />
                    <View className='relative mt-5'>
                        <Text className='text-white text-center font-bold text-3xl'>
                            Discover Endless Possibilities with
                            <Text className='text-secondary-200'>Aora</Text>
                        </Text>
                        <Image
                            source={images.path}
                            className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>
                        Where creativity meets innovation: Embark on a journey
                        of limitless exploration with Aora!
                    </Text>
                    <CustomButton
                        title='Continue with Email'
                        handlePress={() => router.push('/sign-in')}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' barStyle='light-content' />
        </SafeAreaView>
    );
}
