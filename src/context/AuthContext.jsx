import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [user]);

  const signup = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.find(u => u.email === userData.email)) {
          reject(new Error("User already exists"));
          return;
        }
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
        resolve(true);
      }, 800); // simulate network delay
    });
  };

  const login = async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const foundUser = users.find(
          u => u.email === credentials.email && u.password === credentials.password
        );
        
        if (foundUser) {
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          resolve(true);
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 800);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}