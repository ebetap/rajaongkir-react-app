import React, { useState, useEffect } from "react";
import { useNavigate, redirect } from "react-router-dom";

import axiosInstance from "../api/axiosInstance";
import { logout, getCurrentUser } from "../services/authService";

import { Province } from "../types/Province";
import { City } from "../types/City";
import DashboardTabs from "../components/Tabs";
import Logo from "../components/Logo";

const PeriksaOngkirLacakPaket: React.FC = () => {
  const [province, setProvince] = useState<Province[]>([]);
  const [city, setCity] = useState<City[]>([]);
  const user = getCurrentUser();
  const { avatar, username, email, bio, apiKey } = user;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      console.log("User not found, should redirect to login");
      redirect("/login");
    }

    const fetchProvince = async () => {
      try {
        const res = await axiosInstance.get("/province");
        console.log("Fetch Province:", res);
      } catch (err) {
        console.log("Fetch Provice Error:", err);
      }
    };

    fetchProvince();
  }, []);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-3">
          <h1 className="font-bold text-center text-4xl mt-5">
            Dashboard Raja Ongkir!
          </h1>

          <DashboardTabs />

          <Logo />
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full">
                <img src={avatar} />
              </div>
            </div>

            <div className="mt-2 mb-2">
              <h3 className="text-center font-bold">@{username}</h3>
              <p className="text-center touch-pan-up">{email}</p>
              <p className="text-center touch-pan-up">{bio}</p>
            </div>

            <div className="mb-2">
              <h3 className="text-center font-bold">API Key</h3>
              <p className="text-center touch-pan-up">{apiKey}</p>
            </div>

            <button
              onClick={handleLogout}
              className="flex mt-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PeriksaOngkirLacakPaket;
