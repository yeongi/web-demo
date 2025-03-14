import styles from "./ProfileCard.module.css";

type ProfileCard = {
  profile: {
    image: string;
    name: string;
    description: string;
  };
  isMyProfile?: boolean;
};

export const ProfileCard = ({ profile, isMyProfile }: ProfileCard) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={profile.image} alt={profile.name} width={100} height={100} />
        {isMyProfile && (
          <span className={styles.myProfileBadge}> **내 프로필** </span>
        )}
        <div className="profile-details">
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      </div>
    </div>
  );
};
