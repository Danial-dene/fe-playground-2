/** @type {import('next').NextConfig} */

const withAntdLess = require("next-plugin-antd-less");
const path = require("path");

const nextConfig = withAntdLess({
  // modifyVars: { "@primary-color": "#04f" }, // optional
  lessVarsFilePath: "./src/styles/variables.less", // optional
  lessVarsFilePathAppendToEndOfContent: true, // optional
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {
    // ...
    mode: "local",
    localIdentName: "[hash:base64:8]", // invalid! for Unify getLocalIdent (Next.js / CRA), Cannot set it, but you can rewritten getLocalIdentFn
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    // ...
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  // for Next.js ONLY
  nextjs: {
    localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  },

  // Other Config Here...

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // test: /\.(js|ts)x?$/,
        and: [/\.(js|ts)x?$/],
      },

      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
  reactStrictMode: false,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_AUTH_JWT_SECRET: process.env.NEXT_AUTH_JWT_SECRET,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GRAPHQL_URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    NEXT_PUBLIC_GRAPHQL_SUBSCRIPTION: process.env.NEXT_PUBLIC_GRAPHQL_SUBSCRIPTION,
    API_SCHEMA_PATH: process.env.API_SCHEMA_PATH,
    GRAPHQL_SCHEMA_PATH: process.env.GRAPHQL_SCHEMA_PATH,
  },
  images: {
    domains: ['jslandplc.com', 'sg-rpfs.pgimgs.com'],
  },
});

module.exports = nextConfig;
