import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const PublicRoutes = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if (userData.token) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate]);

  return (
    <>
      {loading && <Loading />}
      <Outlet />
    </>
  );
};

export default PublicRoutes;
