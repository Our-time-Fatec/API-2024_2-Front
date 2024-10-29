export default {
  expo: {
    name: "DaVinciCare",
    slug: "davinci-care",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    
    ios: {
      supportsTablet: true,
    },
    
    android: {
      package: "com.daVinciCodes.daVinciCare",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    
    web: {
      favicon: "./assets/favicon.png",
    },

    plugins: [
      "expo-font",
    ],

    extra: {
      eas: {
        projectId: "0a598b76-6e6a-498e-94dd-7514ff24e5f8", // Adicione o seu projectId aqui
      },
    },
  },
};
