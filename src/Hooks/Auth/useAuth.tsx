import { useEffect, useState } from "react";
import { useFirebase } from "react-redux-firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../Config/FireBase";

export default function useAuth() {
  const [authUser, setAuthUser] = useState<User | null>();

  const user = useFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setAuthUser(user || null)
    );

    return () => {
      unsubscribe();
    };
  }, [user]);

  return authUser;
}
