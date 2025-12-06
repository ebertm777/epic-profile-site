/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Suporte nativo do Next 15/16 para styled-components
  compiler: {
    styledComponents: true,
  },

  // Se você estiver usando imagens remotas, pode adicionar domains aqui:
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "example.com",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
