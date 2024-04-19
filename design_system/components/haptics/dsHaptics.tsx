import * as Haptics from 'expo-haptics';

export const DSHapticSucess: ()=> void = () => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
    )
};

export const DSHapticError: ()=> void = () => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Error
    )
};

export const DSHapticWarning: ()=> void = () => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Warning
    )
};