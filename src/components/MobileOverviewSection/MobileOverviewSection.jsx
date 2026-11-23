// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>현장명</strong>
          <span>화성 향남 롯데캐슬 시그니처</span>
        </li>
  
        <li>
          <strong>대지위치</strong>
          <span>경기도 화성시 만세구 향남읍 상신리 산 13-13 일원</span>
        </li>
  
        <li>
          <strong>단지규모</strong>
          <span>
            총 1,542세대 / 지하 3층 ~ 지상 최고 29층 / 총 17개 동
          </span>
        </li>
  
        <li>
          <strong>입주예정</strong>
          <span>2029년 12월 예정</span>
        </li>
  
        <li>
          <strong>주차대수</strong>
          <span>
            총 2,263대 / 아파트 2,236대 · 근린생활시설 27대
          </span>
        </li>
  
        <li>
          <strong>주택형</strong>
          <span>
            전용 84㎡A · 84㎡B · 84㎡C · 84㎡D · 84㎡E ·
            84㎡F · 84㎡G · 102㎡ · 112㎡ · 120㎡
          </span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="화성 향남 롯데캐슬 시그니처 사업지 위치 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="화성 향남 롯데캐슬 시그니처 향남 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            향남의 생활과 롯데캐슬의 공간을 담은
            <br />
            화성 향남 롯데캐슬 시그니처
          </p>
        </div>
  
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
  ];
  
  function PremiumSlider() {
    const slides = [
      {
        img: slide1,
        title: "향남 생활권에 자리한 입지",
        desc:
          "경기도 화성시 만세구 향남읍 상신리 산 13-13 일원<br/>향남 1·2지구의 쇼핑·의료·행정시설 이용<br/>향남제약산업단지와 발안일반산업단지 인접",
      },
      {
        img: slide2,
        title: "전용 84㎡부터 120㎡까지",
        desc:
          "전용 84㎡A·B·C·D·E·F·G의 7개 타입<br/>전용 102㎡·112㎡·120㎡ 주택형 구성<br/>타입별 평면과 공간 구성을 비교할 수 있는 선택지",
      },
      {
        img: slide3,
        title: "총 1,542세대 롯데캐슬 단지",
        desc:
          "지하 3층부터 지상 최고 29층, 총 17개 동<br/>총 1,542세대 규모의 롯데캐슬 아파트<br/>아파트 주차 2,236대 계획",
      },
      {
        img: slide4,
        title: "서해선 향남역과 광역 교통 계획",
        desc:
          "현재 이용 가능한 서해선 향남역<br/>신안산선 향남 연장사업 추진<br/>서해선·경부고속선 KTX 직결사업 계획",
      },
      {
        img: slide5,
        title: "운동과 휴식을 위한 커뮤니티",
        desc:
          "실내수영장과 피트니스, GX룸, 실내골프 계획<br/>키즈카페와 작은도서관 등 가족을 위한 공간<br/>게스트하우스를 비롯한 입주민 편의시설 계획",
      },
      {
        img: slide6,
        title: "일상에 여유를 더하는 단지 조경",
        desc:
          "단지 내 광장과 산책로, 휴게공간 계획<br/>어린이놀이터와 주민운동시설 등 조성 예정<br/>향남 생활시설과 함께 누리는 주거환경",
      },
    ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
      <div className={styles.preTitle}>HANWHA FORENA JIJE STATION</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img
  src={heroImage} className={styles.heroImage} alt="화성 향남 롯데캐슬 시그니처 단지 조감도"/>

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
