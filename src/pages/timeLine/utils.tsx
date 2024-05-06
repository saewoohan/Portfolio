import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import SchoolIcon from '@mui/icons-material/School'

export const events = (isMobile: boolean) => [
  {
    date: '2019.03 ~',
    icon: <SchoolIcon fontSize={isMobile ? 'small' : 'medium'} />,
    title: '한양대학교 입학',
    description: '컴퓨터소프트웨어학부 19학번',
  },
  {
    date: '2021.02 ~ 2022-11',
    icon: <MilitaryTechIcon fontSize={isMobile ? 'small' : 'medium'} />,
    title: '군 입대',
    description: '공군병장 만기전역',
  },
  {
    date: '2023.12 ~ 2024.06',
    icon: <LaptopMacIcon fontSize={isMobile ? 'small' : 'medium'} />,
    title: '(주)벳칭',
    description: 'PC 프론트엔드 개발자 인턴 (React, TypeScript, Electron)',
  },
]
