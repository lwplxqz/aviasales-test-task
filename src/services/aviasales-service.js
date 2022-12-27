/* eslint-disable class-methods-use-this */
export default class API {
    apiBase = 'https://aviasales-test-api.kata.academy'

    async getSearchId() {
        const response = await fetch(`${this.apiBase}/search`)

        const data = await response.json()
        return data
    }

    async getTickets(searchId) {
        const response = await fetch(`${this.apiBase}/tickets?searchId=${searchId}`)


        return response
    }
}

