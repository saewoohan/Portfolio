import { ProjectInfo } from './utils'

const ideaNetworking: ProjectInfo = {
  id: 'ideaNetworking',
  title: 'Idea Networking',
  front: {
    imageSize: 7,
    date: '2023.10 ~ 2023.12',
    description: `하고싶은 프로젝트에 대한 아이디어는 넘치지만 함께할 사람을 찾기 어려워 하는 사람들을 위한 앱 서비스 플랫폼입니다.
경력에 대한 요소를 제거하고, 아이디어와 열정만으로 팀을 구성할 수 있도록 도우며, 아이디어를 실현할 수 있는 기회를 제공합니다.
SNS서비스도 동시에 제공하며 채팅, 게시판 등의 기능을 제공하여 이용자들끼리의 적극적인 소통 및 상호작용을 중심으로 기획하였습니다.`,
    descriptionHightlight: ['아이디어', '프로젝트', 'SNS', '소통', '상호작용'],
    details: [
      {
        label: '주요 기능',
        text: '채팅, SNS, 게시판',
      },

      {
        label: 'Frontend',
        text: 'SwiftUI, Moya, SendBird',
      },
      {
        label: 'Bakend',
        text: 'Django, DjangoRestFramework, Postgresql, Aws',
      },
      {
        label: 'AppStore',
        text: 'https://apps.apple.com/kr/app/ideanetworking/id6472627149',
      },
      {
        label: 'Github',
        text: 'https://github.com/ProjectInTheClass/IdeaNetworking',
      },
      {
        label: '소개영상',
        text: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      },
    ],
  },
  back: {
    taskDetails: {
      frontEnd: {
        contents: [
          'SendBird를 활용한 채팅 기능 구현',
          'SendBird를 활용한 푸시알림 기능 구현',
          '뉴스 리스트 구현 및 뉴스 상세 페이지 구현',
        ],
        highlights: ['SendBird', '뉴스', '채팅', '푸시알림'],
        contribute: 25,
      },
      backEnd: {
        contents: [
          '뉴스 리스트 CRUD API 구현',
          'SendBird와 연동하여 DataBase에 저장하는 API 구현',
        ],
        highlights: ['CRUD', 'DataBase', 'API'],
        contribute: 25,
      },
    },
    takeaway: {
      contents: [
        'UIKit이 아닌 SwiftUI로 처음 만들어 본 네이티브 앱입니다. 기존에 해보았던 UIKit과는 다른 방식으로 View를 구성하고, MVVM구조를 적극적으로 사용해서 ViewModel에 대해서 더 깊이 이해할 수 있었습니다.',
        'DjangoRestFramework을 통해 간단한 API를 구현하고, DataBase와 연동하는 방법을 배울 수 있었습니다. 백엔드 구현의 많은 부분을 담당하지는 않았지만, Django의 강력함을 느낄 수 있었습니다.',
        '제한되어 있는 프로젝트 마감일으로 인해, 채팅에 SendBird라는 솔루션 API를 사용하였는데, 때로는 직접 구현하는 것보다 외부 API를 사용하는 것이 더 시간적, 기능적으로나 효율적일 수 있다는 것을 깨달았습니다.',
      ],
      highlights: [
        'SwiftUI',
        'MVVM',
        'ViewModel',
        'UIKit',
        'DjangoRestFramework',
        'Django',
        'DataBase',
        'API',
        'SendBird',
      ],
    },
  },
}

const traB: ProjectInfo = {
  id: 'traB',
  title: 'TraB',
  front: {
    imageSize: 5,
    date: '2023.12 ~ 2024.02',
    description: `플로깅 (조깅을 하며 쓰레기를 줍는 캠페인)을 돕는 앱 서비스입니다.
실시간 위치를 기반으로 사용자들이 쓰레기를 줍는 활동을 기록하고, 여타 조깅앱 처럼 조깅 기록들을 기록할 수 있습니다.
이때, 조깅 중 주운 쓰레기를 휴대폰 카메라로 촬영하면 학습된 AI를 통해 쓰레기의 종류를 분류 할 수 있습니다. 분류된 쓰레기를 통해 개인 캐릭터를 키우며 소소한 행복을 느낄 수 있는 서비스입니다.`,
    descriptionHightlight: ['플로깅', '조깅', '쓰레기'],
    details: [
      {
        label: '주요 기능',
        text: '캐릭터 키우기, 조깅, 쓰레기 분류, 건강 기록',
      },
      {
        label: 'Frontend',
        text: 'Flutter, Riverpod, Google Map',
      },
      {
        label: 'Bakend',
        text: 'Nest.js, Postgresql, FireBase, Google Cloud',
      },
      {
        label: 'AppStore',
        text: 'https://apps.apple.com/kr/app/trab/id6475684228',
      },
      {
        label: 'Github',
        text: 'https://github.com/TrashWouldBe',
      },
      {
        label: '소개영상',
        text: 'https://m.youtube.com/watch?v=dMWZC6rCCDw&feature=youtu.be',
      },
    ],
  },
  back: {
    taskDetails: {
      frontEnd: {
        contents: [
          'Google Map을 활용한 현재 위치 추적 및 거리 계산',
          'Kakao, Google, Apple 소셜 로그인 구현',
          '개인 캐릭터 키우기 및 캐릭터와 상호작용 기능 구현',
          '조깅 데이터 계산 및 저장 기능 구현',

          'Riverpod을 사용한 MVVM 패턴 적용',
        ],
        highlights: [
          'Google Map',
          '캐릭터',
          '조깅',
          'AI',
          '소셜 로그인',
          'Riverpod',
          'MVVM',
        ],
        contribute: 100,
      },
      backEnd: {
        contents: [
          'Kakao, Google, Apple 소셜 로그인 API 구현',
          'Nest.js를 활용한 간단한 API 구현',
        ],
        highlights: ['소셜 로그인', 'Nest.js', 'API'],
        contribute: 50,
      },
    },
    takeaway: {
      contents: [
        'Google Map을 메인 기능으로 사용하여 현재 사용자의 위치를 추적하고 거리를 계산해야하는데, Android와 IOS의 위치 정보제공 방식이 달라서 이 부분에서 많은 어려움을 겪었습니다. 하지만 이를 통해 익숙한 IOS 말고도 Android의 정책에 대해서도 조금 더 깊게 알 수 있는 기회였습니다.',
        '익숙하지 않은 Android의 배포에 자신이 없었는데, 앞으로 어떤 앱이든 IOS, Android 모두 어렵지 않게 개발부터 배포과정까지 도맡아 할 수 있을 거라는 자신감을 얻었습니다.',
        '같은 팀원들이 개발 경험이 없는 팀원들이라, 많은 부분의 책임을 맡게 되었습니다. 무사히 프로젝트를 마친 후 개발에 중요한 것은 개발 실력보다는 팀원끼리의 소통과 협업임을 깨달았으며, 이를 통해 팀원들과의 소통 능력을 키울 수 있었던 기회였습니다.',
      ],
      highlights: ['Google Map', 'Android', 'IOS', '소통', '협업'],
    },
  },
}

const walgaAdmin: ProjectInfo = {
  id: 'walgaAdmin',
  title: 'WalgaAdmin',
  front: {
    imageSize: 5,
    date: '2023.12 ~',
    description: `창업팀으로 진행하는 프로젝트로, 강아지 유치원 예약 및 관리를 위한 B2B 앱 서비스입니다.
강아지 유치원을 운영하는 사장님들이 강아지를 예약하고 관리하는데 어려움을 겪는 것을 보고, 이를 해결하기 위해 시작하게 되었습니다.
아직 정식 론칭은 아니지만 꾸준히 디벨롭 중이며, 현재는 강아지 유치원 사장님들과 사용자들의 피드백을 받아 서비스를 개선하고 있습니다.`,
    descriptionHightlight: ['유치원', '예약'],
    details: [
      {
        label: '주요 기능',
        text: '예약 및 고객관리, 채팅',
      },
      {
        label: 'Frontend',
        text: 'Flutter, Riverpod',
      },
      {
        label: 'Bakend',
        text: 'Node.js, Postgresql, Express, FireBase, Aws',
      },
      {
        label: 'AppStore',
        text: 'https://apps.apple.com/kr/app/walgaadmin/id6462873748',
      },
      {
        label: 'PlayStore',
        text: 'https://play.google.com/store/apps/details?id=com.walcome.walgaAdminApp',
      },
    ],
  },
  back: {
    taskDetails: {
      frontEnd: {
        contents: [
          '강아지 유치원 예약 및 관리 기능 구현 및 캘린더를 사용한 일정 관리 기능 구현',
          '채팅 기능 구현 및 FCM을 통한 푸시알림 기능 구현',
          'Riverpod을 사용한 MVVM 패턴 적용',
        ],
        highlights: ['채팅', 'FCM', '캘린더', 'Riverpod', 'MVVM'],
        contribute: 100,
      },
      backEnd: {
        contents: [
          'AWS S3를 활용한 이미지 업로드 API 구현',
          'Kakao, Google, Apple 소셜 로그인 API 구현',
          'Node.js, Express, Apollo Server을 사용한 GraphQL API 구현',
          'Postgresql을 사용한 DataBase 구축, FireBase를 사용한 푸시알림 API 구현',
          'Subscription, Mutation을 사용한 실시간 채팅 구현',
          'AWS EC2, RDS, S3, Route53, CloudFront, Google Cloud를 사용한 스테이지 단계 별 서버 배포 및 CICD 관리',
        ],
        highlights: [
          '소셜 로그인',
          'Nest.js',
          'API',
          '서버 배포',
          'CICD',
          'Postgresql',
          'FireBase',
          'AWS',
          'Google Cloud',
        ],
        contribute: 70,
      },
    },
    takeaway: {
      contents: [
        'CTO 혹은 프로젝트 장으로써, 프로젝트의 전체적인 흐름을 파악하고, 팀원들의 역량을 파악하여 업무를 분배하는 것이 중요하다는 것을 깨달았습니다. 팀원들의 역량을 파악하여 업무를 분배하고, 팀원들이 더 잘 할 수 있는 일을 맡겨주어 효율적으로 프로젝트를 진행할 수 있었습니다.',
        '팀원들과의 소통이 원활하지 않아 프로젝트가 지연되는 경우가 많았는데, JIRA 및 Git Review Rule 등 여러가지 방법을 통해서 소통을 더욱 증진하고자 노력했고 이를 통해 조금 더 팀원들을 이해하고 소통하는 방법을 배울 수 있었던 기회였습니다.',
      ],
      highlights: ['소통', '협업', '업무', '분배', 'JIRA', 'Git Review Rule'],
    },
  },
}

const walga: ProjectInfo = {
  id: 'walga',
  title: 'Walga',
  front: {
    imageSize: 5,
    date: '2023.12 ~',
    description: `창업팀으로 진행하는 프로젝트로, WalgaAdmin과 연동되는 B2C 앱 서비스입니다.
강아지 유치원을 운영하는 사장님들이 편리하게 예약을 관리할 수 있도록, 사용자들이 강아지 유치원을 예약하고 관리할 수 있는 서비스입니다.
WalgaAdmin과 공통되는 로직이 많기에, 여러 서비스에서 공통적으로 컴포넌트나 로직을 관리할 수 있는 방법에 대해서 많이 고민하게 된 프로젝트입니다.`,
    descriptionHightlight: ['B2C', '예약', '유치원'],
    details: [
      {
        label: '주요 기능',
        text: '예약, 유치원 찾기, 채팅',
      },
      {
        label: 'Frontend',
        text: 'Flutter, Riverpod',
      },
      {
        label: 'Bakend',
        text: 'Node.js, Postgresql, Express, FireBase, Aws',
      },
      {
        label: 'AppStore',
        text: 'https://apps.apple.com/kr/app/walga/id6462883045',
      },
      {
        label: 'PlayStore',
        text: '업로드 예정입니다.',
      },
    ],
  },
  back: {
    taskDetails: {
      frontEnd: {
        contents: [
          '강아지 유치원 예약 및 관리 기능 구현 및 캘린더를 사용한 일정 관리 기능 구현',
          '채팅 기능 구현 및 FCM을 통한 푸시알림 기능 구현',
          'Riverpod을 사용한 MVVM 패턴 적용',
        ],
        highlights: ['채팅', 'FCM', '캘린더', 'Riverpod', 'MVVM'],
        contribute: 100,
      },
      backEnd: {
        contents: [
          'AWS S3를 활용한 이미지 업로드 API 구현',
          'Kakao, Google, Apple 소셜 로그인 API 구현',
          'Node.js, Express, Apollo Server을 사용한 GraphQL API 구현',
          'Postgresql을 사용한 DataBase 구축, FireBase를 사용한 푸시알림 API 구현',
          'Subscription, Mutation을 사용한 실시간 채팅 구현',
          'AWS EC2, RDS, S3, Route53, CloudFront, Google Cloud를 사용한 스테이지 단계 별 서버 배포 및 CICD 관리',
        ],
        highlights: [
          '소셜 로그인',
          'Nest.js',
          'API',
          '서버 배포',
          'CICD',
          'Postgresql',
          'FireBase',
          'AWS',
          'Google Cloud',
        ],
        contribute: 70,
      },
    },
    takeaway: {
      contents: [
        'WalgaAdmin과 공통되는 UI나 로직이 많은데, 이를 어떻게 공통으로 관리할지에 대해 많은 고민을 하게 되었습니다. 이를 통해 여러 서비스에서 공통적으로 사용되는 컴포넌트나 로직을 처음으로 Package방식으로 관리하게 된 프로젝트입니다.',
        'Riverpod을 사용한 상태관리와 MVVM패턴을 깊게 적용하면서, 상태관리에 대한 이해도를 높일 수 있었으며, 효율적인 상태관리와 그에 따른 좋은 아키텍처 구조는 무엇인지 진지하게 고민하게 되었던 프로젝트였습니다.',
      ],
      highlights: ['MVVM', 'Riverpod', 'UI', 'Package', '상태관리', '아키텍처'],
    },
  },
}

export const projectInfos: ProjectInfo[] = [
  ideaNetworking,
  traB,
  walgaAdmin,
  walga,
]
