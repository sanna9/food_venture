import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

function useRestrauntMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      setResInfo(json?.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
}

export default useRestrauntMenu;
