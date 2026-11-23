import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",

  title: "화성 향남 롯데캐슬 시그니처 타입안내",

  description:
    "화성 향남 롯데캐슬 시그니처의 전용 84㎡A·84㎡B·84㎡C·84㎡D 평면을 확인해 보세요. 타입별 공간 구성과 동선을 비교하며 원하는 주택형을 살펴보실 수 있습니다.",

  plans: [
    {
      id: "84A",
      type: "84㎡A",
      name: "84㎡A",
      summary:
        "총 291세대로 구성되는 84㎡A 타입의 평면과 공간 구성을 확인해 보세요.",

      image: unit01,
      alt: "화성 향남 롯데캐슬 시그니처 84㎡A 평면도",

      link: "/FloorPlan/59A",
    },

    {
      id: "84B",
      type: "84㎡B",
      name: "84㎡B",
      summary:
        "총 136세대로 구성되는 84㎡B 타입의 평면과 공간 구성을 확인해 보세요.",

      image: unit02,
      alt: "화성 향남 롯데캐슬 시그니처 84㎡B 평면도",

      link: "/FloorPlan/59B",
    },

    {
      id: "84C",
      type: "84㎡C",
      name: "84㎡C",
      summary:
        "총 412세대로 구성되는 84㎡C 타입의 평면과 공간 구성을 확인해 보세요.",

      image: unit03,
      alt: "화성 향남 롯데캐슬 시그니처 84㎡C 평면도",

      link: "/FloorPlan/84A",
    },

    {
      id: "84D",
      type: "84㎡D",
      name: "84㎡D",
      summary:
        "총 89세대로 구성되는 84㎡D 타입의 평면과 공간 구성을 확인해 보세요.",

      image: unit04,
      alt: "화성 향남 롯데캐슬 시그니처 84㎡D 평면도",

      link: "/FloorPlan/84B",
    },
  ],
};