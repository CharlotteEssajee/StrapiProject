module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5d8486e3c0302d158fc0fefa6ed119bc'),
  },
});
