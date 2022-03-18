import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import firebase from "firebase/compat/app";
import { useRouter } from "next/router";
import "firebase/compat/analytics";

if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };
  firebase.initializeApp(firebaseConfig);
}

export const FirebaseContext =
  createContext<firebase.analytics.Analytics | null>(null);

const FirebaseTrackingProvider = (props: { children: ReactNode }) => {
  const router = useRouter();
  const [tracking, setTracking] = useState<firebase.analytics.Analytics | null>(
    null
  );

  useEffect(() => {
    setTracking(firebase.analytics());

    const handleRouteChange = (url: string) => {
      if (!tracking) {
        return;
      }
      tracking.logEvent("page_view", {
        page_location: url,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [tracking, router]);

  return (
    <FirebaseContext.Provider value={tracking}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext)

export default FirebaseTrackingProvider;
