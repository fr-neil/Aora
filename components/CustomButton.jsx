import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({
    title,
    containerStyles,
    handlePress,
    textStyles,
    isLoading,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary justify-center items-center min-h-[62px] rounded-xl ${containerStyles} ${
                isLoading ? 'opacity-50' : ''
            }`}
            disabled={isLoading}
        >
            <Text
                className={`text-primary font-psemibold text-lg ${textStyles}`}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
