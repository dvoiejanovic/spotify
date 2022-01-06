import { useEffect, useState } from "react";
import SettingsDialog from "components/SettingsDialog";
import Layout from "core/Layout";
import MusicCard from "components/MusicCard";
import { getRecommendations } from "services/spotify";

const HomePage = () => {
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState<boolean>(
    false
  );

  useEffect(() => {
    getRecommendations().then((recommendations) => {
      console.log(recommendations);
    })
  })

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
          <MusicCard image="image" title="LCD Soundsystem" subtitle="artist" />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
