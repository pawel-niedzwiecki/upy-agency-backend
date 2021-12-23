module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3446088696bae09b088ac55a44a9ef22'),
  },
});
