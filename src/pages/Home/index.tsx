import { useEffect, useState } from "react";
import SettingsDialog from "components/SettingsDialog";
import Layout from "core/Layout";
import MusicCard from "components/MusicCard";
import { getRecommendations } from "services/spotify";

const HomePage = () => {
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState<boolean>(
    false
  );
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    getRecommendations().then((recommendations) => {
      setImage(recommendations.tracks[0].album.images?.[1].url)
    })
  }, [])

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
          <MusicCard image={image} title="LCD Soundsystem" subtitle="artist" />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
