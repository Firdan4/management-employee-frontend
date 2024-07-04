import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setUserData } from "../redux/slice/userDataSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { refreshToken } from "../api/auth";
import Loading from "./Loading";
import { useEffect, useState } from "react";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    tryRefreshToken();
  }, []);

  const tryRefreshToken = async () => {
    try {
      const res = await refreshToken();
      const { email, firstName, lastName } = res.data.user;

      dispatch(
        setUserData({
          email,
          firstName,
          lastName,
          token: res.data.accessToken,
        })
      );
      setLoading(false);
    } catch (error) {
      localStorage.removeItem("userData");
      navigate("/login");
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
