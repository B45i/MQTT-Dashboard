const mosca = require('mosca');


const port = process.env.PORT || 3000;

const moscaSettings = {
	http: {
		port: port,
		bundle: true,
		static: './public'
	}
};

const server = new mosca.Server(moscaSettings);

server.on('clientConnected', client => {
	console.log('client connected', client.id);
});

// Received a  message
server.on('published', (packet, client) => {
	console.log('Published', packet.payload);
});

// Server is Ready
server.on('ready', () => {
	console.log('Mosca server is up and running');
});
