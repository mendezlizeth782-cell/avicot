import { useRouter } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { auth } from '../firebaseConfig';

type User = { id: string; name?: string; email?: string; role?: string } | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (payload: { name: string; email: string; password: string; role?: string }) => Promise<void>;
  updateRole: (role: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser: FirebaseUser | null) => {
      if (fbUser) {
        setUser({ id: fbUser.uid, name: fbUser.displayName ?? undefined, email: fbUser.email ?? undefined });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/');
    } catch (err: any) {
      const message = err?.message ?? 'No se pudo iniciar sesión';
      Alert.alert('Error', message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (payload: { name: string; email: string; password: string; role?: string }) => {
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      if (cred.user && payload.name) {
        try {
          await updateProfile(cred.user, { displayName: payload.name });
        } catch (e) {
          console.warn('updateProfile failed', e);
        }
      }
      // do not navigate automatically here; registration flow will continue (e.g. collect role)
    } catch (err: any) {
      const message = err?.message ?? 'No se pudo registrar';
      Alert.alert('Error', message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await fbSignOut(auth);
      setUser(null);
      router.replace('/');
    } catch (err) {
      console.warn('signOut error', err);
    } finally {
      setLoading(false);
    }
  };

  const updateRole = async (role: string) => {
    // update local user state with role; persistence in DB can be added later
    setUser((prev) => (prev ? { ...prev, role } : prev));
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, updateRole, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
