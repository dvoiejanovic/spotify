import "./MusicCard.scoped.scss";

interface IMusicCardProps {
  image: string;
  title: string;
  subtitle: string;
}

const MusicCard = (props: IMusicCardProps) => {
  const { image, title, subtitle } = props;
  return (
    <div className="music-card">
      <img src={image} alt="Music card" className="image" />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default MusicCard;
