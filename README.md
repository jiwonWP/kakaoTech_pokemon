# 🧢 나만의 포켓몬 도감

![cover](./public/pokemon.png)

**React 기반 포켓몬 도감 프로젝트**입니다. 포켓몬을 선택해 나만의 대시보드를 만들고, 각 포켓몬의 상세 정보도 확인할 수 있어요!

---

## 🚀 주요 기능

| 기능 항목                 | 설명                                                                 |
|--------------------------|----------------------------------------------------------------------|
| 🎴 포켓몬 리스트          | TMDB처럼 카드 형태로 포켓몬 목록을 표시                              |
| ➕ 포켓몬 선택             | '추가' 버튼으로 포켓몬을 나만의 도감에 등록 (최대 6마리)            |
| ❌ 포켓몬 삭제             | 대시보드에서 '삭제' 버튼으로 등록 해제                              |
| 🔍 디테일 페이지           | 포켓몬을 클릭해 상세 설명 페이지로 이동 가능                         |
| 💾 상태 유지              | Context API + LocalStorage로 상태 유지 (페이지 전환, 새로고침 포함) |
| 💬 UI 피드백              | react-toastify를 통한 사용자 피드백                                 |

src/
│
├── components/
│ ├── Dashboard.jsx
│ ├── PokemonCard.jsx
│ └── PokemonList.jsx
│
├── contexts/
│ └── DexContext.js
│
├── pages/
│ ├── Home.jsx
│ ├── Dex.jsx
│ └── PokemonDetail.jsx
│
├── mock.js
├── App.jsx
└── main.jsx

