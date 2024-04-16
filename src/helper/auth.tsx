import { redirect } from "react-router-dom";

export function getAuthToken() {
  const storedItem = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (!storedItem || new Date().getTime() > storedItem.expiry) {
    localStorage.removeItem("isLoggedIn");
  }
  return storedItem;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const isLoggedIn = getAuthToken();
  console.log("test");

  if (!isLoggedIn) {
    console.log("test in");
    return redirect("/");
  }
  return null;
}
