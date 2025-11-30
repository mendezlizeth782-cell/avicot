module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Keep other plugins here
      'react-native-reanimated/plugin', // must be last
    ],
  };
};
