import { useState } from "react";
import SettingsDialog from "../../components/SettingsDialog";
import Layout from "../../core/Layout";

const HomePage = () => {
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] =
    useState<boolean>(false);

  const openSettingsDialog = () => {
    setIsSettingsDialogOpen(true);
  };

  const closeSettingsDialog = () => {
    setIsSettingsDialogOpen(false);
  };

  return (
    <div>
      <Layout>
        <div>
          Teksts
          <button onClick={openSettingsDialog}>Open Dialog</button>
          <SettingsDialog
            open={isSettingsDialogOpen}
            closeDialog={closeSettingsDialog}
          />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
