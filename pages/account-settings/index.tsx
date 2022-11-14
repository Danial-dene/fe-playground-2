import { useHeader } from "@components/HeaderProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Settings = () => {
  const route = useRouter();
  const { setTitle } = useHeader();

  // useEffect(() => {
  //   setTitle("Settings");
  // }, []);

  route.push("/account-settings/profile");

  return null;
};

Settings.auth = true;
export default Settings;
