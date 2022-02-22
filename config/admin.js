module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd90e45bea431b77450d1a15aec59f7a3'),
  },
});
