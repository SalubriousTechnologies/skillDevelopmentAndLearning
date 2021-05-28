# Setting up a React Native App Project

Follow the following practices to ensure consistency across projects

1. Use Expo when creating a new project
2. Always use yarn with Expo projects
3. At the top level there should be a src folder which should contain all the custom code of the project
4. Add eslint and prettier to the project

- Use the [eslint-config-react-native-community](https://github.com/facebook/react-native/tree/master/packages/eslint-config-react-native-community) to add prettier and eslint to the project

- After adding the package, update your `package.json` by adding the below code to the object in the file

```
"eslintConfig": {
  "extends": "@react-native-community",
  "rules": {
    "quotes": [2, "double", {"avoidEscape": true}]
  }
}
```

5. Add [styled-components](https://styled-components.com/docs/basics#react-native) package using yarn and use it in the project
6. Setup a theme, by
   - Creating a folder `/src/theme`
   - Now in this folder create files for colors, fonts, spacing each of which will export objects for easier referencing to items like bg.primary, text.error, fontWeight.bold, and so on.
   - For fonts, add [expo-font and expo-google-fonts](https://docs.expo.io/guides/using-custom-fonts/) package to the repo. Good fonts to start with are
   - Load each of the fonts into the `App.js` before using them in the custom files
   - Import each of these files into an `index` file and combine them into an object
   -
7. Create a components folder in `/src` and save all components in this
8. When creating a component make a folder for the component name inside `/src/components` and then this component folder will contain components and their styles in a single location, when naming files that contain only the styles associated with a component, name them with a `.styles.js` suffix.
9. Use `SafeAreaView` for iOS and for Android use `currentHeight` from `StatusBar` to address notch and status bar overlap (marginTop)
10. Add the package [react-native-svg](https://docs.expo.io/guides/using-custom-fonts/) to use SVG files in the project.
11. Use custom components to manage spacing/positioning.
<!-- 12. TODO Add a sample spacing component to the repository for reference -->
