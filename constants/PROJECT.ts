const PROJECT = [
  {
    id: 0,
    title: 'SG DNC.',
    images: [
      '/assets/png/projects/sg/1.png',
      '/assets/png/projects/sg/2.png',
      '/assets/png/projects/sg/3.png',
      '/assets/png/projects/sg/4.png',
    ],
    date: '2022.03 - 2022.07',
    stack: ['React', 'emotion', 'TypeScript', 'AWS EC2', 'Nest.js', 'Postgres'],
    description: {
      main: [
        '세종시에 위치한 부동산 스타트업 (SG 산업) 웹사이트의 외주를 받아서 제작 중입니다.',
      ],
      detail: [
        '디자인과 기획부터 직접 준비하며 구현했습니다.',
        '공지사항과 "Contact Us" 페이지 관리를 위해 가장 기본적인 풀스택 구축 (백엔드 (NestJS), 서버 (EC2), 데이터베이스 (Postgres)) 를 사용하였습니다.',
        '사용자들의 시각적 즐거움을 주기위해 framer-motion 사용하였습니다.',
      ],
    },
    link: {
      www: 'https://www.sgdnc.co.kr',
      github: 'https://www.github.com/donghakang/sg',
    },
  },
  {
    id: 1,
    title: 'CAKK',
    images: [
      '/assets/png/projects/cakk/1.png',
      '/assets/png/projects/cakk/2.png',
      '/assets/png/projects/cakk/3.png',
      '/assets/png/projects/cakk/4.png',
      '/assets/png/projects/cakk/5.png',
    ],
    date: '2022.03 - 2022.07',
    stack: ['Next.js', 'emotion', 'TypeScript'],
    description: {
      main: [
        '프로그라피는 프론트엔드, 백엔드, 디자이너로 구성된 개발동아리 입니다. 각 2명씩 총 6명이 팀을 만들어 사이드 프로젝트를 진행합니다.',
        '케이크크는 주문제작 케이크를 주문하는 사용자들이 카카오 오픈채팅과 인스타그램을 이용하여 주문하는 불편함을 개선해주기 위해 만든 플랫폼입니다.',
      ],
      detail: [
        '메인 페이지, 지도 뷰 페이지, 소개 페이지를 담당하여 개발하였습니다.',
        '원활한 마케팅과 사용자 수를 파악하기 위해 Google Analytics를 사용했습니다.',
        '사용자들의 이목을 끌고 흥미를 유도하기 위해 framer-motion을 이용하여 애니메이션을 구현하였습니다',
        '곂치는 컴포넌트를 재사용하고 파악하기 위해 storybook을 도입하여 중복되는 컴포넌트들을 제거 했습니다.',
        '프로젝트 초반 같이 프론트엔드를 개발하는 동료와 merge 실수가 빈번히 생겨 gitflow 도입하였습니다.',
      ],
    },
    link: {
      www: 'https://www.cakk.site',
    },
  },
  {
    id: 2,
    title: 'DICOM Web Viewer',
    images: [
      '/assets/png/projects/dcm/1.png',
      '/assets/png/projects/dcm/2.png',
      '/assets/png/projects/dcm/3.gif',
      '/assets/png/projects/dcm/4.gif',
    ],
    date: '2022.03 - 2022.07',
    stack: ['Next.js', 'emotion', 'TypeScript'],
    description: {
      main: [
        '서울대학교병원 영상의학과에서 환경부 과제에 참여했으며 COPD, asthma 등 다양한 폐 환자들의 이미지를 클러스터링 하는 연구를 진행하고 있습니다.',
        '제가 기획 및 개발한 DICOM Web Viewer / Pulmorad는 CT이미지를 웹 상에서 보여주는 어플리케이션 입니다.',
        '저의 소프트웨어는 현재 11개의 병원 영상의학과에서 과제를 위해 사용중이고, 미국에 있는 MD.ai 과 Gradient Health(메디컬 이미징 회사)에서 협업 제안을 받았습니다.',
      ],
      detail: [
        '디자인과 기획부터 직접 준비하며 구현했습니다.',
        '웹 뿐만 아니라 데스크탑 소프트웨어를 주로 사용하시는 사용자들(의사선생님들)과 업데이트가 자주되는 단점을 보완하기 위해 기존 Electron.js 로 진행한 프로젝트를 PWA로 변경했습니다.',
        '복잡해진 코드와 많아지는 props를 방지하기 위해 redux-toolkit를 도입하였고 실제로 코드 오류 수정시간을 단축했습니다.',
        '서울대병원을 포함한 11개의 병원 영상의학과에서 폐 사진을 공유하기 위해 만든 CT이미지뷰어 웹사이트를 관리하는 작업을 했습니다.',
        '사용자 및 그룹 로그인 기능에 필요한 REST API를 Fastapi를 사용하여 직접 개발 했습니다.',
        '데이터베이스, Keycloak (로그인 API), 백엔드, 프론트엔드 자동 빌드를 위해 Docker를 사용했습니다.',
      ],
    },
    link: {
      www: 'https://dcm.lamis.life',
      github: 'https://www.github.com/donghakang/dicom-web-viewer',
    },
  },
  {
    id: 3,
    title: 'Momokji',
    images: [
      '/assets/png/projects/github/1.gif',
      '/assets/png/projects/github/2.png',
      '/assets/png/projects/github/3.png',
      '/assets/png/projects/github/4.png',
      '/assets/png/projects/github/5.png',
    ],
    date: '2022.03 - 2022.07',
    stack: ['Next.js', 'emotion', 'TypeScript'],
    description: {
      main: [
        'UX에 집착해보는 나만의 웹사이트.',
        '개발자라면 충분히 개인 블로그를 만들어야 하지 않나? 라는 개인적인 생각을 토대로 제작한 개인 블로그 입니다.',
        '현재 이 웹 사이트를 이용하여 개인 공부 기록을 하고 있으며, 현재 더 쉽게 업로드 하는 방법을 구축하기 위해 보수 작업 중입니다.',
      ],
      detail: [
        '개인 블로그를 공유하고 사용자들의 유입하기 위해 만든 개인 블로그 이며 현재 방문자 수는 100명 정도 됩니다. 이를 파악하기 위해 Google Analytics를 사용하였습니다.',
        'SaaS를 이용하여 웹사이트를 배포했습니다.',
        '사용자들의 시각적 즐거움을 주기위해 Three.js, framer-motion 사용하였습니다.',
        '곂치는 컴포넌트를 재사용하고 파악하기 위해 storybook을 도입하여 중복되는 컴포넌트들을 제거 했습니다.',
        '많은 사용자들이 핸드폰으로 유입한다는 점을 고려하여 Responsive Web Design으로 개발하였습니다.',
      ],
    },
    link: {
      www: 'https://donghakang.github.io',
      github: 'https://www.github.com/donghakang/donghakang.github.io',
    },
  },
  {
    id: 4,
    title: 'moreon-morein',
    images: [
      '/assets/png/projects/github/1.gif',
      '/assets/png/projects/github/2.png',
      '/assets/png/projects/github/3.png',
      '/assets/png/projects/github/4.png',
      '/assets/png/projects/github/5.png',
    ],
    date: '2022.03 - 2022.07',
    stack: ['Next.js', 'emotion', 'TypeScript'],
    description: {
      main: [
        'UX에 집착해보는 나만의 웹사이트.',
        '개발자라면 충분히 개인 블로그를 만들어야 하지 않나? 라는 개인적인 생각을 토대로 제작한 개인 블로그 입니다.',
        '현재 이 웹 사이트를 이용하여 개인 공부 기록을 하고 있으며, 현재 더 쉽게 업로드 하는 방법을 구축하기 위해 보수 작업 중입니다.',
      ],
      detail: [
        '개인 블로그를 공유하고 사용자들의 유입하기 위해 만든 개인 블로그 이며 현재 방문자 수는 100명 정도 됩니다. 이를 파악하기 위해 Google Analytics를 사용하였습니다.',
        'SaaS를 이용하여 웹사이트를 배포했습니다.',
        '사용자들의 시각적 즐거움을 주기위해 Three.js, framer-motion 사용하였습니다.',
        '곂치는 컴포넌트를 재사용하고 파악하기 위해 storybook을 도입하여 중복되는 컴포넌트들을 제거 했습니다.',
        '많은 사용자들이 핸드폰으로 유입한다는 점을 고려하여 Responsive Web Design으로 개발하였습니다.',
      ],
    },
    link: {
      www: 'https://donghakang.github.io',
      github: 'https://www.github.com/donghakang/donghakang.github.io',
    },
  },
  // {
  //   id: 3,
  //   title: 'github.io',
  //   images: [
  //     '/assets/png/projects/github/1.gif',
  //     '/assets/png/projects/github/2.png',
  //     '/assets/png/projects/github/3.png',
  //     '/assets/png/projects/github/4.png',
  //     '/assets/png/projects/github/5.png',
  //   ],
  //   date: '2022.03 - 2022.07',
  //   stack: ['Next.js', 'emotion', 'TypeScript'],
  //   description: {
  //     main: [
  //       'UX에 집착해보는 나만의 웹사이트.',
  //       '개발자라면 충분히 개인 블로그를 만들어야 하지 않나? 라는 개인적인 생각을 토대로 제작한 개인 블로그 입니다.',
  //       '현재 이 웹 사이트를 이용하여 개인 공부 기록을 하고 있으며, 현재 더 쉽게 업로드 하는 방법을 구축하기 위해 보수 작업 중입니다.',
  //     ],
  //     detail: [
  //       '개인 블로그를 공유하고 사용자들의 유입하기 위해 만든 개인 블로그 이며 현재 방문자 수는 100명 정도 됩니다. 이를 파악하기 위해 Google Analytics를 사용하였습니다.',
  //       'SaaS를 이용하여 웹사이트를 배포했습니다.',
  //       '사용자들의 시각적 즐거움을 주기위해 Three.js, framer-motion 사용하였습니다.',
  //       '곂치는 컴포넌트를 재사용하고 파악하기 위해 storybook을 도입하여 중복되는 컴포넌트들을 제거 했습니다.',
  //       '많은 사용자들이 핸드폰으로 유입한다는 점을 고려하여 Responsive Web Design으로 개발하였습니다.',
  //     ],
  //   },
  //   link: {
  //     www: 'https://donghakang.github.io',
  //     github: 'https://www.github.com/donghakang/donghakang.github.io',
  //   },
  // },
]

export default PROJECT
