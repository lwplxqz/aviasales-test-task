/* eslint-disable class-methods-use-this */
export default class API {
	API_BASE = 'https://aviasales-test-api.kata.academy';

	getTickets = async () => {
		const idResponse = await fetch(`${this.API_BASE}/search`);
		const { searchId } = await idResponse.json();

		const response = await fetch(
			`${this.API_BASE}/tickets?searchId=${searchId}`
		);
		const { tickets } = await response.json();
		console.log(tickets);
		return tickets;
	};
}
