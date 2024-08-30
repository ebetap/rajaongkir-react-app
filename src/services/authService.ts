import { faker } from "@faker-js/faker";

const USER_KEY = "authUser";

// Simulate user authentication with fake data
const authenticateUser = (username: string, password: string): boolean => {
  return username === "testuser" && password === "password123";
};

// Generate fake user data
const generateFakeUser = () => {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    apiKey: process.env.REACT_APP_RAJAONGKIR_API_KEY,
    avatar: faker.image.avatarGitHub(),
    bio: faker.person.bio(),
  };
};

// Login function
export const login = (username: string, password: string): boolean => {
  if (authenticateUser(username, password)) {
    const user = generateFakeUser();
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    return true;
  }
  return false;
};

// Logout function
export const logout = () => {
  localStorage.removeItem(USER_KEY);
};

// Get the currently authenticated user
export const getCurrentUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};
