let tickets = 2;

const ticket1 = new Promise((res, rej) => {
	if (tickets > 0) {
		console.log('acceted 1');
		setTimeout(() => {
			res('Your issue has been solved');
		}, 2000);
		tickets -= 1;
	} else {
		rej('We are out of tickets today.');
	}
});
const ticket2 = new Promise((res, rej) => {
	if (tickets > 0) {
		console.log('acceted 2');
		setTimeout(() => {
			res('Your issue has been solved');
		}, 2000);
		tickets -= 1;
	} else {
		rej('We are out of tickets today.');
	}
});
const ticket3 = new Promise((res, rej) => {
	if (tickets > 0) {
		console.log('acceted 3');
		setTimeout(() => {
			res('Your issue has been solved');
		}, 2000);
		tickets -= 1;
	} else {
		rej('We are out of tickets today.');
	}
});

ticket1
	.then((message) => {
		console.log(message);
	})
	.catch((message) => {
		console.error(message);
	});
ticket2
	.then((message) => {
		console.log(message);
	})
	.catch((message) => {
		console.error(message);
	});
ticket3
	.then((message) => {
		console.log(message);
	})
	.catch((message) => {
		console.error(message);
	});
