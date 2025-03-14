import { ProfileCard } from "../../component/ProfileCard/ProfileCard";

export const ProfileListPage = () => {
  const myName = "장의영";

  return (
    <div>
      <ProfileCard
        profile={{
          image:
            "https://i.namu.wiki/i/izVXkClWRy9-s5DAkC_lGo3za4Zy9seGH1V6AM0qZJzsckE9eWe6-Hp-1OvJm_DkVv7BL7U0Ar7QB89ApaklkQ.webp",
          name: "장의영",
          description:
            "안녕하세요 간단하게 자기소개 할게요. 저는 28세 남자 입니다. 취미는 기타를 연주하고 있어요.",
        }}
        isMyProfile={true}
      />
      <ProfileCard
        profile={{
          image:
            "https://i.namu.wiki/i/4ogJmNJ7gDE7lXE2GhOEotxBu85fEgteoKczyTuFnnmb60Cgl0CQsTKUFXkNCAQfFLH_dlzmMtGQYbqXmtgsOw.webp",
          name: "김영훈",
          description:
            "소극적인 성격임에도 불구하고, 적극적으로 일을 처리하는 것을 좋아합니다. 취미는 독서입니다.",
        }}
      />
      <ProfileCard
        profile={{
          image:
            "https://i.namu.wiki/i/Q6BIqhZWqyhBAFmeZoOWIFO2Ttw1X0xOimLTY0WyohXIadIRIoxaAWc6yoggyEKohkI3aDCoKXsBlp6rvL-MFg.webp",
          name: "김태환",
          description:
            "안녕하세요~ 저는 김태환입니다. 취미는 영화감상이고, 특기는 노래입니다. 잘 부탁드립니다.",
        }}
      />
    </div>
  );
};
