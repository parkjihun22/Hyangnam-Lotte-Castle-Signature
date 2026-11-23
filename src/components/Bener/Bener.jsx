import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "화성 향남 롯데캐슬 시그니처" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="화성 향남 롯데캐슬 시그니처 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "화성향남롯데캐슬시그니처",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "평면안내",
    "평면도",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화성 향남 롯데캐슬 시그니처의 브랜드와 단지 정보를 만나보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          경기도 화성시 향남읍에 조성되는 롯데캐슬의 주거 공간을
          소개합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          사업개요부터 입지환경, 평면정보와 견본주택 안내까지
          확인해 보세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화성 향남 롯데캐슬 시그니처의 사업개요와 공급정보를
          안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          지하 3층부터 지상 29층, 17개 동, 총 1,542세대 규모와
          공식 입주자모집공고를 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          전용 84㎡A~G·102㎡·112㎡·120㎡의 주택형과 타입별
          평면정보를 살펴보실 수 있습니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화성 향남 롯데캐슬 시그니처
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화성 향남 롯데캐슬 시그니처의 입지환경을 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          경기도 화성시 만세구 향남읍 상신리 일원에 들어서는
          단지의 위치와 주변 환경을 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          교통·생활·교육 환경과 단지 주변의 주요 시설을
          한곳에서 살펴보세요.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화성 향남 롯데캐슬 시그니처의 단지 구성을 확인해 보세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 17개 동, 1,542세대의 단지배치와 동·호수 정보를
          안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          커뮤니티와 주차 계획 등 단지 내 주요 시설을
          살펴보실 수 있습니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          화성 향남 롯데캐슬 시그니처의 분양 소식과
          견본주택 정보를 안내합니다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록과 방문 안내를 통해 공급정보 및
          견본주택 관련 소식을 확인해 보세요.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      화성 향남 롯데캐슬 시그니처 홈페이지에서 사업개요,
      입지환경, 공급정보와 평면정보를 확인하세요.
    </div>
  );
};