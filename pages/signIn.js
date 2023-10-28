import { initializeApp } from "firebase/app";
import Style from "./signIn.module.css";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBiTk7i3ArRwxdKpPHLX4y2YTfeEILHvoU",
  authDomain: "devathone-c1811.firebaseapp.com",
  projectId: "devathone-c1811",
  storageBucket: "devathone-c1811.appspot.com",
  messagingSenderId: "285179397803",
  appId: "1:285179397803:web:9f43eafc424ca914a459ee",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function SignIn() {
  const [signData, setSignData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const HandleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, signData.email, signData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/dashboard");
        setSignData({ ...signData, email: "", password: "", user_name: "" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error, "error");
      });
  };
  return (
    <>
      <div className={Style.signcontainver}>
        <div className={Style.signinForm}>
          <h1 className={Style.heding}>Sign In</h1>
          <form onSubmit={HandleSubmit}>
            <div className={Style.formInpout}>
              <label className={Style.label}>Email</label>
              <input
                className={Style.input}
                placeholder="Enter Email"
                onChange={(e) => {
                  setSignData({ ...signData, email: e.target.value });
                }}
              />
            </div>
            <div className={Style.formInpout}>
              <label className={Style.label}>Password</label>
              <input
                className={Style.input}
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setSignData({ ...signData, password: e.target.value });
                }}
              />
            </div>
            <p>
              If you don't have an account{" "}
              <a
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => router.back()}
              >
                Sign Up
              </a>{" "}
            </p>
            <button className={Style.signbtn} type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
