const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid data received.");
  }

  return data;
}