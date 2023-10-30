const promise = new Promise((resolve, reject) => {
	// Generate random number between 0 and 9
	const randomInt = Math.floor(Math.random() * 10);

	if (randomInt % 2 === 0) {
		// Success
		setTimeout(() => resolve('done'), 2000);
	} else {
		// Failure
		setTimeout(() => reject('error'), 2000);
	}
});

// Your solution(s) to exercise001 here!

// Using .then.catch chaining
promise.then((response) => {
	console.log(`Yay! Promise resolved with response: ${response}`)
})
.catch((error) => {
    console.log(`Boo. Promise rejected with response: ${error}`);
})

// Async Await with try catch
const getPromiseResponse = async () => {
	try {
		const response = await promise;
		console.log(`Yay! Promise resolved with response: ${response}`);
	} catch (error) {
		console.log(`Boo. Promise rejected with response: ${error}`);
	}
};

getPromiseResponse();


// Top level Await ES12 (2022)
try {
	const response = await promise;
	console.log(`Yay! Promise resolved with response: ${response}`);
} catch (error) {
	console.log(`Boo. Promise rejected with response: ${error}`);
}
