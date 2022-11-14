import { useHeader } from "@components/HeaderProvider";
import AccountSettingsTabLayout from "@components/settings/AccountSettingsTabLayout";
import { Button, Card } from "antd";
import { useEffect } from "react";

const Notifications = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Settings");
  }, []);

  return (
    <div className="p-9">
      <Card style={{ width: "640px", height: "244px" }}>
        <div className=" grid grid-rows-3 gap-6 font-bold text-xl mb-3">
          <div>Notifications</div>
          <div>Desktop</div>
          <div>Mobile App</div>
        </div>

        <Button
          type="primary"
          className="mr-[16px] rounded-[8px]  w-[104px] h-[48px]"
        >
          Save
        </Button>
      </Card>
    </div>
  );
};

Notifications.auth = true;
Notifications.Layout = AccountSettingsTabLayout;

export default Notifications;
