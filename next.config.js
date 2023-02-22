/** @type {import('next').NextConfig} */

module.exports = {
  env:{
    EMAIL_KEY : process.env.EMAIL_KEY
  },

  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] }}
    ]
  }
}
