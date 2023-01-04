module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdsr3eo2i3mrfonpl7q0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_2so9'),
      user: env('DATABASE_USERNAME', 'jojo'),
      password: env('DATABASE_PASSWORD', 'vTm5Yijj0DfDDwhPnwl8cV67uUIhOEar'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
