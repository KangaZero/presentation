/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  exclude: {
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
  pwa: {
    dest: "public",
    skipWaiting: true,
    buildId: "my-app",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
    // eslint-disable-next-line no-undef
    disable: process.env.NODE_ENV === "development",
  },
});

// webpack.config.js
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = {
  // ...
  plugins: [
    // remove pwa property from here
    new GenerateSW({
      // other options...
    }),
  ],
};

// const nextConfig = {
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   }
// };
// const nextConfig = {
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     buildId: 'my-app',
//     runtimeCaching: [
//       {
//         urlPattern: /^https?.*/,
//         handler: 'NetworkFirst',
//         options: {
//           cacheName: 'offlineCache',
//           expiration: {
//             maxEntries: 200
//           }
//         }
//       }
//     ]
//   },
// };

// module.exports = withPWA(nextConfig);

// export default nextConfig;
