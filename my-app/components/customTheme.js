import { DarkTheme } from '@react-navigation/native';


const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#27273A',
  },
};

export { CustomDarkTheme };
