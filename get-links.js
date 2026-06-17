import https from 'https';
const urls = [
	'https://ibb.co/p6g6QfKc', 
	'https://ibb.co/MyJvzdmD', 
	'https://ibb.co/C5jTgmDb', 
	'https://ibb.co/B0TdCLD', 
	'https://ibb.co/0pkR9NZ8', 
	'https://ibb.co/C5DJQr1P', 
	'https://ibb.co/gLMWqt2s', 
	'https://ibb.co/0PPKNrV', 
	'https://ibb.co/bgbwJbtc'
];

const promises = urls.map(url => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<link rel="image_src" href="([^"]+)"/);
        resolve(url + ' -> ' + (match ? match[1] : 'not found'));
      });
    });
  });
});

Promise.all(promises).then(res => console.log(res.join('\n')));
