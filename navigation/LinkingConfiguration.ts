import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "one",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "two",
            },
          },
        },
      },
      Auth: {
        screens: {
          AuthWelcome: "AuthWelcome",
        },
      },
      NotFound: "*",
    },
  },
};
