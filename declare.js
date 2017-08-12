const Nightmare = require('nightmare');
const nightmare = Nightmare({
    show: true,
    webPreferences: {
        partition: 'nopersist'
    },
});

const username = 'wisnugro';
const password = '12345678';
const search = '#jogja';
const comment = 'keren';
const posts = 10;