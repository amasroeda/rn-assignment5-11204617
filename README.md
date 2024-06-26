# rn-assignment5-11204617
**HOMEPAGE**
The Homepage component is the first screen displayed, it can also be opened by pressing the home button
- Displays user name and a welcome back message.
- Shows a picture of the credit card
- There are buttons to see the sent, received, loans, and topups made on the account
- Users can see the transactions they made on their accounts
- There is a navigation bar which allows them to move to other screens like the settings

**Components Used:**
- `SafeAreaView`: Ensures that the content is rendered within the safe area boundaries of the device.
- `useContext` : To access the current theme context (light or dark mode) within the component.
- `ScrollView`: Allows scrolling of content within the screen.
- `View`: Containers for layout structuring.
- `Text`: Text elements for displaying transactions
- `Image`: Profile picture, icons, and company logos.
- `StatusBar`: Manages the appearance of the status bar, including its style (light or dark content).

**SETTINGS**
Settings page is the screen displayed when you press the setting button in the navigation bar.
- It displays the options like "Language", "My Profile", "Contact Us", "Change Password", "Privacy Policy"

**Components Used:**
- `useContext`: To access and manipulate the theme context (light or dark mode) within the component.
- `SafeAreaView`: Ensures that the UI elements are displayed within the safe area boundaries of a device.
 - `ScrollView`: Provides a scrollable container for the settings content.
- `View`: Containers to structure the layout.
- `Text`: Text elements for titles and other text.
- `Image`: Displays images within the UI, specifically the next image.
- `StatusBar`: Manages the appearance of the status bar.
- `Switch`: Provides a toggle switch for enabling or disabling dark mode.

**Navigation**
- The navigation.js file sets up the navigation for the application using React Navigation's tab and stack navigators. 

**Custom Theme**
The `customTheme.js` file defines a custom dark theme for the application. 

**Theme Context**
The `themeContext.js` file provides a context for managing the application's theme state.

**SCREENSHOTS**
![Screenshot 1](../rn-assignment5-11204617/my-app/assets/Screenshot1.jpeg)
![Screenshot 2](../rn-assignment5-11204617/my-app/assets/Screenshot2.jpeg)
![Screenshot 3](../rn-assignment5-11204617/my-app/assets/Screenshot3.jpeg)
![Screenshot 4](../rn-assignment5-11204617/my-app/assets/Screenshot4.jpeg)
![Screenshot 5](../rn-assignment5-11204617/my-app/assets/Screenshot5.jpeg)
![Screenshot 6](../rn-assignment5-11204617/my-app/assets/Screenshot6.jpeg)
