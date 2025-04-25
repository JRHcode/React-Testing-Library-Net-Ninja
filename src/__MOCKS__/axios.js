const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Frodo",
                    last: "Baggins"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/39.jpg"
                },
                login: {
                    username: "Gandalf"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}