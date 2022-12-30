/* eslint-disable class-methods-use-this */
export default class API {
    apiBase = 'https://aviasales-test-api.kata.academy'

    async getSearchId() {
        const response = await fetch(`${this.apiBase}/search`)
        if (!response.ok) throw new Error('Перезагрузите страницу!')
        const data = await response.json()
        return data
    }

    async getTickets(searchId) {
        const response = await fetch(`${this.apiBase}/tickets?searchId=${searchId}`)
        if (!response.ok) throw new Error('500 Server')

        return response
    }
}

