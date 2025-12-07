# MemePot: Trust, Safety, Fun

> Memecore 체인 기반 스테이킹 + 이벤트풀 Defi 플랫폼

## 🔗 링크

- **배포 사이트**: https://memepot-nextjs.vercel.app/
- **Figma (SmartContract ↔ FrontEnd)**: https://www.figma.com/board/756OTTRE4HHBnXwx2K8UmF/memepot_schema
- **Figma (PM ↔ FrontEnd)**: https://www.figma.com/board/i4zEEoy9isQfJjAH99ZAI7/프론트-결과물

## 📖 프로젝트 개요

MemePot은 Memecore 블록체인 생태계를 위한 DeFi 플랫폼으로, 사용자가 토큰을 스테이킹하고 다양한 이벤트 풀에 참여하여 보상을 획득할 수 있는 통합 솔루션입니다.

### 주요 기능

- **스테이킹**: ERC20 토큰 예치 및 APY 기반 보상
- **이벤트 풀**: 토큰 기반 이벤트 참여 및 당첨자 보상 시스템
- **통합 대시보드**: 스테이킹, 이벤트, 리워드 현황 통합 조회
- **가격 오라클**: 실시간 토큰 가격 및 USD 환산

## 🏗 아키텍처

### Smart Contract Layer

```
EventPoolManager      → 이벤트풀 생성·참여·당첨자 관리
StakingManager        → 토큰 예치·언스테이크·보상 계산
RewardsManager        → 통합 보상 적립 및 클레임
PriceOracle           → 토큰 가격 조회 및 USD 환산
UserDashboard         → 사용자 데이터 집계 뷰
TokenBalanceHelper    → 잔액 조회 헬퍼
```

### Frontend Layer

```
Next.js 15 (App Router) + React 19
├── RainbowKit        → 지갑 연결
├── Wagmi + Viem      → 블록체인 상호작용
├── TanStack Query    → 비동기 데이터 관리
└── Zustand           → 전역 상태 관리
```

## 🌐 배포 정보

### Network

- **Network**: Memecore Insectarium Testnet
- **Chain ID**: 43522
- **Explorer**: TBD

### Deployed Contracts

| Contract               | Address                                      | Description                                                |
| ---------------------- | -------------------------------------------- | ---------------------------------------------------------- |
| **EventPoolManager**   | `0x4A7171345E8A456c5DA452232AD355C1B27D6B4e` | 이벤트풀 생성·참여·포인트·당첨자 보상 관리                 |
| **StakingManager**     | `0x9238e156A5bcb6a626Be9239b58168E57ea5e27f` | 스테이킹 풀, 예치·언스테이크, 포인트/리워드 연계           |
| **RewardsManager**     | `0x2bAB7Ca7EABB652eaf9C70096b4c0b0167F7F8Fc` | 스테이킹/이벤트 보상 적립·클레임 관리 (네이티브 지급)      |
| **PriceOracle**        | `0x86A8c942c26912aaa4d1233B8dcfC3064E9Adb11` | 토큰 가격 및 USD 환산값 조회                               |
| **UserDashboard**      | `0x0725141885640d31Fe23457C6a198476720331Bb` | 유저 단일 조회용 대시보드 집계 (스테이킹+이벤트+리워드 뷰) |
| **TokenBalanceHelper** | `0x0314b85D7bcFEdAC5dAfD590A39Bd941074A6B2A` | 유저의 네이티브·ERC20 잔액 조회 헬퍼                       |
| **USDC**               | `0x4c6DE24521345caE4A19292D51e2c1801EF23b30` | 데모용 USDC MockERC20 토큰                                 |
| **USDT**               | `0xaADfb15ddca8c43f15338cA60f3fC4b645Bc9D2E` | 데모용 USDT MockERC20 토큰                                 |

## 🛠 기술 스택

### Smart Contract

- **Solidity** `^0.8.20`
- **Hardhat** `~2.22.10` - 개발 프레임워크
- **OpenZeppelin Contracts** `~5.0.2` - 보안 검증된 컨트랙트 라이브러리
- **Ethers.js** `~6.13.2` - 블록체인 인터랙션
- **Hardhat Deploy** `^1.0.4` - 배포 관리
- **TypeChain** `~8.3.2` - 타입 안전한 컨트랙트 인터페이스

### Frontend

- **Next.js** `15.4.8` - React 프레임워크 (App Router)
- **React** `~19.0.0`
- **TypeScript** `~5.8.0`
- **Tailwind CSS** `4.1.3` - 스타일링
- **DaisyUI** `5.0.9` - UI 컴포넌트 라이브러리
- **Wagmi** `2.16.4` - React Hooks for Ethereum
- **Viem** `2.34.0` - TypeScript 이더리움 인터페이스
- **RainbowKit** `2.2.8` - 지갑 연결 UI
- **TanStack Query** `~5.59.15` - 비동기 상태 관리
- **Zustand** `~5.0.0` - 전역 상태 관리

### Development Tools

- **Yarn** `3.2.3` - 패키지 매니저
- **ESLint** `~9.23.0` - 코드 린팅
- **Prettier** `~3.5.3` - 코드 포매팅
- **Hardhat Gas Reporter** `~2.2.1` - 가스 비용 분석
- **Solidity Coverage** `~0.8.13` - 테스트 커버리지

## 📁 프로젝트 구조

```
memepot/
├── packages/
│   ├── hardhat/                      # 스마트 컨트랙트 계층
│   │   ├── contracts/
│   │   │   ├── Staking.sol           # 토큰 예치 & 이자 생성
│   │   │   ├── EventPoolManager.sol  # 이벤트 풀 로직
│   │   │   ├── UserDashboard.sol     # 데이터 어그리게이터
│   │   │   └── RewardManager.sol     # 리워드 발급 & 계산
│   │   └── deploy/                   # 배포 스크립트
│   │
│   └── nextjs/                       # 프론트엔드 애플리케이션
│       ├── app/
│       │   ├── page.tsx              # 랜딩페이지
│       │   ├── ready/                # 메인사이트 진입 전 페이지
│       │   ├── about/                # 프로젝트 소개
│       │   ├── staking/              # 스테이킹
│       │   ├── eventpool/            # 이벤트 풀 메인
│       │   ├── eventpool/detail      # 이벤트 풀 상세
│       │   └── dashboard/            # 사용자 대시보드
│       └── components/               # 재사용 컴포넌트
```

## 🚀 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/MEMEKATHON-MemePot/memepot.git
cd memepot

# 2. 의존성 설치
yarn install

# 3. 환경 변수 설정
cp packages/hardhat/.env.example packages/hardhat/.env
cp packages/nextjs/.env.example packages/nextjs/.env

# 4. 컨트랙트 배포 (Insectarium Testnet)
### default = insectarium
cd packages/hardhat
yarn deploy

# 5. 프론트엔드 실행
cd ../nextjs
yarn dev
# → http://localhost:3000 접속
```

## 🔑 환경 변수 설정

```bash
# packages/nextjs/.env.local
NEXT_PUBLIC_CHAIN_ID=43522
NEXT_PUBLIC_RPC_URL=https://insectarium-rpc.example.com

# packages/hardhat/.env
DEPLOYER_PRIVATE_KEY=YOUR_PK
MEMECORE_RPC_URL=https://insectarium-rpc.example.com
```

🔥 MEMCORE x MEMEPOT 🔥
