const BASE_SERVICE_URL = "http://localhost:3001";

const fetchUsers = () => {
    return fetch(`${BASE_SERVICE_URL}/users`);
}

export default {
    fetchUsers,
};