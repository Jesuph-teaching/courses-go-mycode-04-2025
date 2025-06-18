const accept = true;
const postTicket = async function () {
	if (accept) {
		return 'You have been accepted';
	} else {
		throw new Error('You have been refused');
	}
};
/* const postTicket = new Promise(function (resolve, reject) {
	if (accept) {
		resolve();
	} else {
		reject();
	}
}); */

postTicket()
	.then(() => {
		console.log('Accepted');
	})
	.catch(() => {
		console.error('refused');
	});
