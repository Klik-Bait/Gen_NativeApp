import { GENYMOTION_URL, MY_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const API_URL = MY_URL || GENYMOTION_URL || "http://localhost/users";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  isLoading: true, // Loading state to check for stored auth data
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
        token: null,
        isLoading: false,
      };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email, password) => {
    try {
      console.log(email, password);
      console.log(API_URL);
      const response = await fetch(
        `${API_URL}?email=${email}&password=${password}`
      );
      console.log(response);
      const users = await response.json();

      console.log(users);
      if (users.length > 0) {
        const user = users[0];

        await SecureStore.setItemAsync("token", user.token);
        await AsyncStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: { user, token: user.token } });
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    await AsyncStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        console.log("loadUser");
        const storedToken = await SecureStore.getItemAsync("token");
        const storedUser = await AsyncStorage.getItem("user");

        if (storedToken && storedUser) {
          dispatch({
            type: "LOGIN",
            payload: { user: JSON.parse(storedUser), token: storedToken },
          });
        } else {
          dispatch({ type: "FINISH_LOADING" });
        }
      } catch (error) {
        console.error("Error loading user:", error);
        await SecureStore.deleteItemAsync("token");
        await AsyncStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
