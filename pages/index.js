import { useState } from "react";
import { initializeApp } from "firebase/app";
import Style from "./sing.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
// import swal from "sweetalert";
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

const auth = getAuth();
export default function Home() {
  const [signData, setSignData] = useState({
    email: "",
    password: "",
    user_name: "",
  });
  const router = useRouter();
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(signData.email, signData.password, "test");
    createUserWithEmailAndPassword(auth, signData.email, signData.password)
      .then((data) => {
        console.log(data, "daat");

        router.push("/dashboard");
        setSignData({ ...signData, email: "", password: "", user_name: "" });
      })
      .catch((error) => {
        console.log(error, "-> error");
      });
  };
  return (
    <>
      <div className={Style.signcontainver}>
        <div className={Style.image}>
          <img
            src="/product-img.avif"
            alt="Product Image"
            className=" w-full"
            style={{ height: "100vh" }}
          />
        </div>
        <div className={Style.formCenter}>
          <div className={Style.signinForm}>
            <h1 className={Style.heding}>Sign Up</h1>
            <form onSubmit={HandleSubmit}>
              <div className={Style.formInpout}>
                <label className={Style.label}>User Name</label>
                <input
                  className={Style.input}
                  placeholder="Enter UserName"
                  name="user_name"
                  onChange={(e) => {
                    setSignData({ ...signData, user_name: e.target.value });
                  }}
                />
              </div>
              <div className={Style.formInpout}>
                <label className={Style.label}>Email</label>
                <input
                  className={Style.input}
                  placeholder="Enter Email"
                  name="email"
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
                  name="password"
                  onChange={(e) => {
                    setSignData({ ...signData, password: e.target.value });
                  }}
                />
              </div>
              <p>
                If you have an account{" "}
                <a style={{ color: "blue", cursor: "pointer" }} href="/signIn">
                  Sign In
                </a>{" "}
              </p>
              <button className={Style.signbtn} type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
