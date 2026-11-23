const SITE_URL = "https://www.jijeforena.co.kr";

export const siteSeo = {
  siteName: "화성 향남 롯데캐슬 시그니처",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,

  defaultDescription:
    "화성 향남 롯데캐슬 시그니처 분양정보 안내. 화성시 향남읍 상신리 일원, 17개 동 1,542세대. 전용 84·102·112·120㎡ 평면도와 입지, 분양가, 견본주택 정보를 확인하세요.",

  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "화성시 만세구",
    streetAddress: "향남읍 상신리 산 13-13 일원",
    block: "향남 생활권",
    households: "총 1,542세대",
    scale: "지하 3층~지상 최고 29층 · 17개 동 · 1,542세대",
    unitTypes: [
      "84㎡A",
      "84㎡B",
      "84㎡C",
      "84㎡D",
      "84㎡E",
      "84㎡F",
      "84㎡G",
      "102㎡",
      "112㎡",
      "120㎡",
    ],
    brand: "LOTTE CASTLE",
    brands: [
      "화성 향남 롯데캐슬 시그니처",
      "롯데캐슬",
      "롯데건설㈜",
    ],
    developer: "㈜젤존",
    contractor: "롯데건설㈜",
    navigationSchemaName: "화성 향남 롯데캐슬 시그니처 주요 메뉴",
  },

  keywords: [
    "화성 향남 롯데캐슬 시그니처",
    "향남 롯데캐슬 시그니처",
    "화성 향남 롯데캐슬 시그니처 분양",
    "화성 향남 롯데캐슬 시그니처 모델하우스",
    "화성 향남 롯데캐슬 시그니처 견본주택",
    "화성 향남 롯데캐슬 시그니처 분양가",
    "화성 향남 롯데캐슬 시그니처 입주자모집공고",
    "화성 향남 롯데캐슬 시그니처 평면도",
    "화성 향남 롯데캐슬 시그니처 입지환경",
    "화성 향남 롯데캐슬 시그니처 커뮤니티",
    "화성 향남 롯데캐슬 시그니처 1542세대",
    "향남 롯데캐슬 84㎡",
    "향남 롯데캐슬 102㎡",
    "향남 롯데캐슬 112㎡",
    "향남 롯데캐슬 120㎡",
    "향남읍 상신리 아파트",
    "향남역 아파트",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      { name: "호수배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "인지세 납부안내", path: "/SalesInfo/stampTax" },
      { name: "계약서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84㎡", path: "/FloorPlan/59A" },
      { name: "102㎡", path: "/FloorPlan/59B" },
      { name: "112㎡", path: "/FloorPlan/84A" },
      { name: "120㎡", path: "/FloorPlan/84B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "화성 향남 롯데캐슬 시그니처",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 화성 향남 롯데캐슬 시그니처",
    description:
      "롯데건설이 시공하는 화성 향남 롯데캐슬 시그니처의 브랜드와 향남읍에 들어서는 1,542세대 주거 단지를 소개합니다.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처의 브랜드와 단지 정보를 홍보영상으로 살펴보세요.",
    menu: "브랜드소개",
    robots: "noindex, follow",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성시 만세구 향남읍 상신리 산 13-13 일원, 지하 3층~지상 최고 29층, 17개 동 1,542세대의 사업개요를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처의 특별공급, 일반공급, 당첨자 발표, 서류접수와 계약 일정을 입주자모집공고 기준으로 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 1,542세대의 공급정보와 전용 84㎡A~G, 102㎡, 112㎡, 120㎡ 주택형 및 타입별 세대수를 확인하세요.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 입주자모집공고의 청약 자격, 공급금액, 계약 일정, 주택형과 주요 유의사항을 확인하세요.",
    menu: "분양안내",
  }),

  stampTax: page({
    path: "/SalesInfo/stampTax",
    title: "인지세 납부안내 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 공급계약에 따른 인지세 납부 대상과 준비사항을 공고 기준으로 살펴보세요.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 당첨자 자격 확인과 공급계약에 필요한 제출서류, 준비사항, 견본주택 위치를 안내합니다.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지안내 | 화성 향남 롯데캐슬 시그니처",
    description:
      "서해선 향남역과 향남 1·2지구의 쇼핑·의료·행정시설 등 화성 향남 롯데캐슬 시그니처의 입지환경을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 화성 향남 롯데캐슬 시그니처",
    description:
      "향남 생활권, 1,542세대 롯데캐슬 단지, 전용 84~120㎡ 주택형, 조경과 커뮤니티 계획을 살펴보세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 17개 동의 위치와 광장, 산책로 및 단지 내 공간 구성을 배치도에서 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처의 동·호수 위치와 84㎡A~G, 102㎡, 112㎡, 120㎡ 주택형별 배치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처에 계획된 실내수영장, 피트니스, GX룸, 실내골프, 작은도서관 등의 커뮤니티를 살펴보세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84: page({
    path: "/FloorPlan/59A",
    title: "84㎡ A~G 평면도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 전용 84㎡A·B·C·D·E·F·G의 7개 타입 평면과 세대 구성을 한 페이지에서 비교하세요.",
    menu: "타입안내",
    priority: 0.9,
  }),

  floorPlan94: page({
    path: "/FloorPlan/59B",
    title: "102㎡ 평면도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 전용 102㎡, 총 56세대 주택형의 평면과 공간 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "112㎡ 평면도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 전용 112㎡, 총 78세대 주택형의 평면과 공간 구성을 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan111: page({
    path: "/FloorPlan/84B",
    title: "120㎡ 평면도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 전용 120㎡, 총 77세대 주택형의 평면과 공간 구성을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 E-모델하우스에서 공개된 세대 내부 공간과 주거 설계를 온라인으로 살펴보세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처 관심고객등록과 견본주택 위치, 공급정보 및 상담 안내를 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 화성 향남 롯데캐슬 시그니처",
    description:
      "화성 향남 롯데캐슬 시그니처의 사업개요, 입지환경, 커뮤니티와 공급 관련 언론보도 및 분양 소식을 살펴보세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 화성 향남 롯데캐슬 시그니처",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 화성 향남 롯데캐슬 시그니처의 사업안내, 분양안내, 입지환경, 평면도 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

const normalizeSeoPath = (pathname = "/") => {
  let cleanPath = pathname || "/";

  try {
    if (/^https?:\/\//.test(cleanPath)) {
      cleanPath = new URL(cleanPath).pathname;
    }
  } catch {
    cleanPath = "/";
  }

  cleanPath = decodeURI(cleanPath)
    .split("?")[0]
    .split("#")[0]
    .replace(/\/$/, "");

  return cleanPath.toLowerCase() || "/";
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    normalizeSeoPath(value.path),
    key,
  ])
);

export const seoPageList = Object.values(seoPages).filter(
  (item) => item.robots !== "noindex, follow"
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const normalizedPath = normalizeSeoPath(pathname);
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/promotion/press")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;
  if (normalizedPath.includes("/promotion/customer")) return seoPages.customer;

  return seoPages.notFound;
};