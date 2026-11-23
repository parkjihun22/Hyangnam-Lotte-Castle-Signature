import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",

  title: "일상에 여유를 더하는 단지와 커뮤니티",

  description:
    "화성 향남 롯데캐슬 시그니처는 총 17개 동, 1,542세대 규모로 조성됩니다. 단지배치와 조경 계획, 운동·휴식·교육을 위한 커뮤니티 시설을 함께 살펴보세요.",

  backgroundImage: bgImage,

  banner: {
    image: bannerImage,
    alt: "화성 향남 롯데캐슬 시그니처 단지 전경",
  },

  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",

      title: "17개 동, 1,542세대의 단지 구성",

      description:
        "화성 향남 롯데캐슬 시그니처의 단지배치도에서 동별 위치와 출입 동선, 조경 공간을 확인해 보세요. 단지 내에는 광장과 산책로, 어린이놀이터와 주민운동시설 등이 계획되어 있습니다.",

      image: layoutImage,
      alt: "화성 향남 롯데캐슬 시그니처 단지 배치도",
    },

    {
      id: "complex-design",
      label: "단지 특화설계",

      title: "산책과 휴식을 위한 조경 공간",

      description:
        "단지 곳곳에 산책로와 휴게공간, 수경시설 및 광장 등이 계획되어 있습니다. 일상 속에서 걷고 쉬며 시간을 보낼 수 있는 단지 조경을 살펴보세요.",

      image: designImage,
      alt: "화성 향남 롯데캐슬 시그니처 단지 조경 계획",
    },

    {
      id: "community-space",
      label: "커뮤니티",

      title: "운동부터 휴식까지, 다양한 커뮤니티",

      description:
        "실내수영장, 피트니스, GX룸, 실내골프를 비롯해 키즈카페, 작은도서관, 게스트하우스 등이 계획되어 있습니다. 입주민의 운동과 여가, 자녀 돌봄을 위한 커뮤니티 공간을 확인해 보세요.",

      image: communityImage,
      alt: "화성 향남 롯데캐슬 시그니처 커뮤니티 시설 계획",
    },
  ],
};