import { session } from "/src/services/session.js";

function useUser() {
  const user = session.get("user") || {};
  return {
    loggedIn: !!user.username,
    ...user,
  };
}

export { useUser };
