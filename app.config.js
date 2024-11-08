// app.config.js
export default ({ config }) => ({
  ...config,
  name: "Da vinci Care",
  slug: "da-vinci-care",
  version: "1.0.0",
  "owner": "lucasdwn",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light", // ou 'automatic' para alternância automática
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain", // ou 'cover'
    backgroundColor: "#ffffff"
  },
  android: {
    package: "com.davincicodes.davincicare", // Ex: com.exemplo.nomeapp
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    },
    permissions: [], // adicione permissões aqui se necessário
  },
  ios: {
    bundleIdentifier: "com.davincicodes.davincicare",
    supportsTablet: true
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ["**/*"],
  plugins: [
    [
      "expo-image-picker",
      {
        photosPermission: "O aplicativo precisa de permissão para acessar suas fotos."
      }
    ]
  ],
  extra: {
    "eas": {
      "projectId": "3ca638f1-162a-4a04-85ba-31178b6ffb1e"
    }
  }
});
