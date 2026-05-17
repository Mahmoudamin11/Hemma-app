// context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AuthContextType = {
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // context/AuthContext.tsx
  useEffect(() => {
    const MIN_SPLASH_MS = 2000; // minimum time to show splash
    const start = Date.now();

    supabase.auth.getSession().then(({ data: { session } }) => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, MIN_SPLASH_MS - elapsed);

      setTimeout(() => {
        setSession(session);
        setLoading(false);
      }, remaining);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      // setSession(null)
    });

    return () => subscription.unsubscribe();
  }, []);
  // useEffect(() => {
  //   // 1. Load existing session from SecureStore on app start
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //     setLoading(false);
  //   });

  

  //   return () => subscription.unsubscribe();
  // }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    // onAuthStateChange will fire automatically → session becomes null → redirects to login
  };

  return (
    <AuthContext.Provider value={{ session, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
