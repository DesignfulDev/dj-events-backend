module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3f805707e2929d67a4f875bc6e5c913'),
  },
});
