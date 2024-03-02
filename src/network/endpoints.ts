const BASE_URL = "https://api.github.com"

export const USERS_ENDPOINT : string = `${BASE_URL}/users`

export const getReposEndPoint = (ownerName: string) :  string => {
    return `${USERS_ENDPOINT}/${ownerName}/repos`
}