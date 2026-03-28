import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYnZkMk0rZyCsk5tJbDcYtlFPyr4mm1MQ",
  authDomain: "academyschool-3c2b1.firebaseapp.com",
  projectId: "academyschool-3c2b1",
  storageBucket: "academyschool-3c2b1.firebasestorage.app",
  messagingSenderId: "711551887575",
  appId: "1:711551887575:web:ce103dcdca06918a93e892",
  measurementId: "G-GM3KBLBX9J"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export { logEvent }; // سنستخدم هذا لتتبع الأحداث يدوياً
