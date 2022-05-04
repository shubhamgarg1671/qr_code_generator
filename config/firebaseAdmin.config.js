const admin = require('firebase-admin');

const serviceAccount = require('../qr-code-generator-44c6b-firebase-adminsdk-3sqs4-cab34513aa.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;