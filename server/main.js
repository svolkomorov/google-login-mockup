Meteor.startup(() => {
  ServiceConfiguration.configurations.upsert(
      { service: 'google' },
      {
        $set: {
          clientId: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          secret: 'YOUR_SECRET',
        },
      },
  );
});
