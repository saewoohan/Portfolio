import { ProjectInfo } from './utils'

/**
 *   UIKit이 아닌 SwiftUI로 처음으로 만들어본 네이티브 앱입니다. 채팅을 구현하는 과정에서 sendbird를 사용했는데, 때로는 직접 구현하는 것보다 외부 라이브러리를 사용하는 것이 더 시간과 성능측면에서 효율적일 수 있다는 것을 느꼈습니다.
  백엔드로는 처음으로 Django를 사용하여 진행하였습니다. 백엔드 부분의 많은 부분을 담당하지는 않았지만, 짧게나마 DjangoRestFramework의 강력함을 느낄 수 있었습니다.
 */
const ideaNetworking: ProjectInfo = {
  id: 'ideaNetworking',
  imageSize: 7,
  title: 'Idea Networking',
  subTitle: '2023.10 ~ 2023.12',
  description: `하고싶은 프로젝트에 대한 아이디어는 넘치지만 함께할 사람을 찾기 어려워 하는 사람들을 위한 앱 서비스 플랫폼입니다.
경력에 대한 요소를 제거하고, 아이디어와 열정만으로 팀을 구성할 수 있도록 도우며, 아이디어를 실현할 수 있는 기회를 제공합니다.
SNS서비스도 동시에 제공하며 채팅, 게시판 등의 기능을 제공하여 이용자들끼리의 적극적인 소통 및 상호작용을 중심으로 기획하였습니다.`,
  descriptionHightlight: [
    '아이디어',
    '프로젝트',
    'UIKit',
    'SwiftUI',
    'sendbird',
    'DjangoRestFramework',
    'Django',
  ],
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
}

/**
 * Google Map을 메인 기능으로 사용하여 현재 사용자의 위치를 추적하고 거리를 계산해야하는데, 안드로이드와 IOS의 위치 정보제공 방식이 달라서 이 부분에서 많은 어려움을 겪었습니다. 하지만 이를 통해 익숙한 IOS 말고도 Android에 대해서 조금 더 깊게 알 수 있는 기회였습니다.
Nest.js를 처음 사용하는 프로젝트였는데, 각 모듈에 대한 기본적인 이해와 사용법을 익힐 수 있었습니다. 또한, Node.js express와 달리 어느정도의 규칙과 제약을 통해 유지보수가 용이하다는 것을 느꼈습니다.
 */
const traB: ProjectInfo = {
  id: 'traB',
  imageSize: 5,
  title: 'TraB',
  subTitle: '2023.12 ~ 2024.02',
  description: `플로깅 (조깅을 하며 쓰레기를 줍는 캠페인)을 돕는 앱 서비스입니다.
실시간 위치를 기반으로 사용자들이 쓰레기를 줍는 활동을 기록하고, 여타 조깅앱 처럼 조깅 기록들을 기록할 수 있습니다.
이때, 조깅 중 주운 쓰레기를 휴대폰 카메라로 촬영하면 학습된 AI를 통해 종류 분류 할 수 있습니다. 분류된 쓰레기를 통해 개인 캐릭터를 키우며 소소한 행복을 느낄 수 있는 서비스입니다.`,
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
}

const walgaAdmin: ProjectInfo = {
  id: 'walgaAdmin',
  imageSize: 5,
  title: 'WalgaAdmin',
  subTitle: '2023.12 ~',
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
}

const walga: ProjectInfo = {
  id: 'walga',
  imageSize: 5,
  title: 'Walga',
  subTitle: '2023.12 ~',
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
}

export const projectInfos: ProjectInfo[] = [
  ideaNetworking,
  traB,
  walgaAdmin,
  walga,
]
