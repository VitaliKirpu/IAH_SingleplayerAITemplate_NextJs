module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'http://127.0.0.1:6800/:path*',
          },
        ]
      },
  };