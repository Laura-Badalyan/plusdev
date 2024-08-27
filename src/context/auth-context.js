import { AUTH_KEYS } from '../helpers/constants';
import { useLocalStorage } from '../hooks/use-local-storage';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const AuthContext = createContext();

const localStorageUser = localStorage.getItem(AUTH_KEYS.USER);

function AuthProvider(props) {
  const [user, setUser] = useState(() => (localStorageUser ? JSON.parse(localStorageUser) : null));
  const { setItem, removeItem } = useLocalStorage();

  const addUser = useCallback(
    (user) => {
      setItem(AUTH_KEYS.USER, JSON.stringify(user));
      setUser(user);
    },
    [setItem]
  );

  const addToken = useCallback(
    (token) => {
      setItem(AUTH_KEYS.TOKEN, token || '');
    },
    [setItem]
  );

  const removeUser = useCallback(() => {
    setUser(null);
    removeItem(AUTH_KEYS.USER);
    removeItem(AUTH_KEYS.TOKEN);
  }, [removeItem]);

  const login = useCallback(
    (user) => {
      addUser(user?.user || null);
      addToken(user?.access_token);
    },
    [addToken, addUser]
  );

  const logout = useCallback(() => {
    removeUser();
  }, [removeUser]);

  const providerValues = useMemo(() => ({ user, login, logout }), [login, logout, user]);
  return <AuthContext.Provider value={providerValues} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
