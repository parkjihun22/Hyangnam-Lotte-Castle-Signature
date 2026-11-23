import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "향남 생활권에 자리한<br />화성 향남 롯데캐슬 시그니처",
    contentText:
      "경기도 화성시 만세구 향남읍 상신리 산 13-13 일원<br />향남 1·2지구의 생활시설을 이용할 수 있는 입지",
  },
  {
    img: section2Image2,
    titleText: "서해선 향남역과 함께하는<br />광역 교통환경",
    contentText:
      "현재 이용 가능한 서해선 향남역과 주변 도로망<br />신안산선 향남 연장 및 KTX 직결사업 추진·계획",
  },
  {
    img: section2Image3,
    titleText: "쇼핑부터 의료·행정까지<br />향남의 생활 인프라",
    contentText:
      "롯데시네마와 화성중앙종합병원, 만세구청 등<br />향남 1·2지구에 형성된 다양한 생활시설",
  },
  {
    img: section2Image4,
    titleText: "산책과 휴식을 더하는<br />단지 내 조경 공간",
    contentText:
      "광장과 산책로, 휴게공간 및 어린이놀이터 계획<br />일상 속에서 걷고 쉬며 시간을 보낼 수 있는 단지",
  },
  {
    img: section2Image5,
    titleText: "롯데건설이 선보이는<br />롯데캐슬 브랜드 단지",
    contentText:
      "실내수영장과 피트니스, 작은도서관 등 커뮤니티 계획<br />운동과 휴식, 가족의 일상을 위한 다양한 공간",
  },
  {
    img: section2Image6,
    titleText: "총 17개 동, 1,542세대<br />화성 향남 롯데캐슬 시그니처",
    contentText:
      "지하 3층부터 지상 최고 29층 규모의 롯데캐슬 아파트<br />전용 84㎡·102㎡·112㎡·120㎡ 주택형 구성",
  },
];
const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
  <div>향남 생활권의 편리한 일상과</div>
  <div>롯데캐슬의 여유로운 주거 공간</div>
  <div>화성 향남 롯데캐슬 시그니처에서 만나보세요.</div>
</div>
      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="화성 향남 롯데캐슬 시그니처 입지환경 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "화성 향남 롯데캐슬 시그니처 입지환경 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `화성 향남 롯데캐슬 시그니처 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
