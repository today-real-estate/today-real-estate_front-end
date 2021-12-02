<div align="center">
  <br />
  <img src="./readme_assets/today-real-estate_logo.png" alt="오늘의 부동산" />
  <br />
  <h1>오늘의 부동산</h1>
  <br />
</div>

## 목차

1. [**웹 서비스 소개**](#1)
2. [**기술 스택**](#2)
3. [**주요 기능**](#3)
4. [**프로젝트 구성도**](#4)
5. [**데모 영상**](#5)
6. [**개발 팀 소개**](#6)
7. [**개발 기간**](#7)
8. [**실행 방법**](#8)

<br />

<div id="1"></div>

## 💁 웹 서비스 소개

[공공 데이터 포탈](https://www.data.go.kr/data/15057511/openapi.do)에서 제공하는 아파트 실거래가 데이터를 활용하여 사용자가 이사를 하고자 하는 동네에서의 아파트 매매 정보 및 주변 편의 시설 정보를 제공하는 **부동산 서비스**

<br />

[**🔗 '오늘의 부동산' Back-end 저장소로 바로가기 Click !**](https://github.com/today-real-estate/today-real-estate_back-end.git) 👈

> 새 창 열기 방법 : CTRL+click (on Windows and Linux) | CMD+click (on MacOS)

<br />

<div id="2"></div>

## 🛠 기술 스택

### **Front-end**

| <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="SCSS" width="50px" height="50px" /> | <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" width="50px" height="50px" /> |
| :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------- |
|                                                             HTML5                                                              |                                                             CSS3                                                             |                                                        SCSS                                                         | JavaScript(ES6)                                                                                                                 |

| <img src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg" alt="Vue.js" width="50px" height="50px" /> | <img src="https://yamoo9.github.io/vuex/images/vuex.png" alt="Vuex" width="50px" height="50px" /> |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
|                                                             Vue.js                                                              |                                               Vuex                                                |

| <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Ant Design" width="50px" height="50px" /> |
| :---------------------------------------------------------------------------------------------------------------------------: |
|                                                          Ant Design                                                           |

### **Back-end**

| <img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" width="50px" height="50px" /> | <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F0101CE3E51A8D88901" alt="Jsoup" width="50px" height="50px" /> | <img src="https://perfectacle.github.io/2018/07/22/spring-boot-2-env/thumb.png" alt="Spring boot" width="50px" height="50px" /> |
| :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                                             Java                                                             |                                                                                         Jsoup                                                                                         |                                                           Spring boot                                                           |

| <img src="https://media.vlpt.us/images/wavvy1022/post/d05e49ea-341a-4e6a-80db-ff322533464a/jpa.png" alt="JPA" width="50px" height="50px" /> |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                     JPA                                                                     |

| <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" width="50px" height="50px" /> |
| :----------------------------------------------------------------------------------------------------------------------------: |
|                                                             MySQL                                                              |

### **Version Control**

| <img src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" width="50px" height="50px" /> | <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="GitHub" width="50px" height="50px" /> |
| :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
|                                                        Git                                                        |                                                         GitHub                                                         |

<br />

<div id="3"></div>

## 💡 주요 기능

|                     기능                     |                                                                                            내용                                                                                             |
| :------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     지역별 아파트 매매 정보 제공 서비스      |                                      동 검색을 통한 아파트 매매 정보를 제공합니다.<br /> 시 · 구 · 동 옵션 선택을 통한 아파트 매매 정보를 제공합니다.                                       |
| 최저가 · 최고가 아파트 매매 정보 제공 서비스 |                                                           검색한 지역별 아파트 목록에서의 최저가 · 최고가 매매 정보를 제공합니다.                                                           |
|      선택한 아파트의 로드뷰 제공 서비스      |                                       선택한 아파트 주변의 카카오 로드뷰를 제공하여 사용자가 아파트 주변의 환경을 확인할 수 있는 서비스를 제공합니다.                                       |
|        주변 편의시설 정보 제공 서비스        |                                                              은행 · 마트 · 약국 · 주유소 · 카페 · 편의점 정보들을 제공합니다.                                                               |
|               관심목록 서비스                |                                                  관심목록 등록을 통해 등록한 아파트 매물을 관심목록 페이지에서 한 번에 확인할 수 있습니다.                                                  |
|               추천 매물 서비스               |                                  랜덤으로 아파트 매물을 추천합니다. (로그인 전)<br />사용자의 최근 검색어를 바탕으로 아파트 매물을 추천합니다. (로그인 후)                                  |
|             1대1 문의하기 서비스             | 고객센터에 1대1 문의를 할 수 있는 서비스입니다. (수정 및 삭제가 가능합니다.)<br />관리자 아이디로 로그인 시 모든 사용자들의 1대1 문의를 확인할 수 있으며 답글을 남기거나 삭제가 가능합니다. |
|        오늘의 부동산 뉴스 제공 서비스        |                                                  실시간 네이버 부동산 뉴스 페이지 크롤링을 통해 당일 부동산 뉴스를 사용자에게 제공합니다.                                                   |
|             회원정보 수정 서비스             |                                                         사용자가 이름 및 닉네임을 변경할 수 있는 회원정보 수정 서비스를 제공합니다.                                                         |

<br />

<div id="4"></div>

## 📂 프로젝트 구성도

|                              아키텍처(Architecture)                              |
| :------------------------------------------------------------------------------: |
| <img src="./readme_assets/architecture.png" alt="Architecture" width="1100px" /> |

|                      개체-관계 모델(ERD)                       |
| :------------------------------------------------------------: |
| <img src="./readme_assets/ERD.png" alt="ERD" width="1100px" /> |

<br />

<div id="5"></div>

## 🎥 데모 영상

|                    메인 페이지 (로그인 전)                    |
| :-----------------------------------------------------------: |
| <img src="./readme_assets/main-page.gif" alt="메인 페이지" /> |

> 로그인 전에는 랜덤으로 매물을 추천합니다.

|                           회원가입                           |
| :----------------------------------------------------------: |
| <img src="./readme_assets/signup-page.gif" alt="회원가입" /> |

|                        로그인                        |
| :--------------------------------------------------: |
| <img src="./readme_assets/login.gif" alt="로그인" /> |

> 아이디 저장 기능을 제공합니다.

|                                  시 · 구 · 동 옵션 선택을 통한 아파트 매매 정보 검색                                  |
| :-------------------------------------------------------------------------------------------------------------------: |
| <img src="./readme_assets/search-with-select-option.gif" alt="시 · 구 · 동 옵션 선택을 통한 아파트 매매 정보 검색" /> |

> 검색된 목록에서 최저가 · 최고가 매물을 뱃지로 표시합니다.

> 상세 정보에서 아파트 주변의 로드뷰 기능을 제공합니다.

|                                동 이름을 통한 아파트 매매 정보 검색                                |
| :------------------------------------------------------------------------------------------------: |
| <img src="./readme_assets/search-with-dong-name.gif" alt="동 이름을 통한 아파트 매매 정보 검색" /> |

|                            최근 검색어를 기반으로 추천매물 서비스                             |
| :-------------------------------------------------------------------------------------------: |
| <img src="./readme_assets/recommendation.gif" alt="최근 검색어를 기반으로 추천매물 서비스" /> |

|                                주변 편의시설 정보 제공 서비스                                |
| :------------------------------------------------------------------------------------------: |
| <img src="./readme_assets/convenient-facilities.gif" alt="주변 편의시설 정보 제공 서비스" /> |

> 은행, 마트, 약국, 주유소, 카페, 편의점 정보를 제공하고 카카오 맵 상세 정보 페이지로도 링크를 제공합니다.

|                          관심목록 서비스                           |
| :----------------------------------------------------------------: |
| <img src="./readme_assets/liked-list.gif" alt="관심목록 서비스" /> |

|            1대1 문의 서비스 (등록, 조회, 수정, 삭제)             |
| :--------------------------------------------------------------: |
| <img src="./readme_assets/inquiry.gif" alt="1대1 문의 서비스" /> |

|                               운영진 1대1 문의 관리 서비스                               |
| :--------------------------------------------------------------------------------------: |
| <img src="./readme_assets/inquiry-with-admin.gif" alt="운영진 1대1 문의 관리 서비스 " /> |

> 운영진 계정으로 로그인 시 모든 사용자들이 남긴 1대1 문의들을 확인할 수 있고 답변을 등록하거나 삭제할 수 있습니다.

|                             오늘의 부동산 뉴스 제공 서비스                             |
| :------------------------------------------------------------------------------------: |
| <img src="./readme_assets/today-news-page.gif" alt="오늘의 부동산 뉴스 제공 서비스" /> |

> 네이버 부동산 뉴스 페이지 실시간 크롤링을 통해 부동산 뉴스 정보와 링크를 제공합니다.

|                          회원정보 수정 서비스                          |
| :--------------------------------------------------------------------: |
| <img src="./readme_assets/user-info.gif" alt="회원정보 수정 서비스" /> |

|                               404 Not Found 페이지                               |
| :------------------------------------------------------------------------------: |
| <img src="./readme_assets/404-not-found-page.gif" alt="404 Not Found 페이지 " /> |

> 사용자가 URL을 직접 조작하여 잘못된 페이지로 이동하지 않도록 404 Not Found 페이지를 구현하였습니다.

|                           스켈레톤 UI와 로딩 스핀 적용                           |
| :------------------------------------------------------------------------------: |
| <img src="./readme_assets/skeleton-ui.gif" alt="스켈레톤 UI와 로딩 스핀 적용" /> |
|       <img src="./readme_assets/loading-spin.gif" alt="로딩 스핀 적용" />        |

> 더 나은 UX를 사용자에게 제공하기 위해 스켈레톤 UI와 로딩 스핀을 사용하여 단순히 빈 흰색 화면을 보여주지 않고 컨텐츠가 렌더링 되고 있음을 인지시킵니다.

|                       첫 페이지 렌더링 속도 측정 (약 3초 이내)                       |
| :----------------------------------------------------------------------------------: |
| <img src="./readme_assets/initial-rendering.gif" alt="첫 페이지 렌더링 속도 측정" /> |

> 싱글 페이지 애플리케이션의 단점인 초기 구동 속도가 느린 것을 보완하기 위해 첫 페이지에서 크롬의 동시 HTTP 요청 최대 건수 6건 이하로 HTTP 요청을 설계를 하여 첫 페이지 렌더링 속도를 약 3초 이하로 개발하였습니다.

> 첫 페이지 렌더링 속도가 5초가 넘어가게 되면 많은 사용자가 이탈한다는 통계 보고서를 참고하였습니다.

<br />

<div id="6"></div>

## 👪 개발 팀 소개

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JeongHwan-dev">
        <img src="https://avatars.githubusercontent.com/u/68452755?v=4" alt="박정환 프로필" width="150px" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jhj960918">
        <img src="https://avatars.githubusercontent.com/u/65895403?v=4" alt="진형준 프로필" width="150px" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/JeongHwan-dev">
        박정환<br />(Front-end)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jhj960918">
        진형준<br />(Back-end)
      </a>
    </td>
</table>

<br />

|  이름  |   역할    |                                                                                                                                                                           개발 내용                                                                                                                                                                            |
| :----: | :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 박정환 | Front-end | 지역별 아파트 매매 정보 검색 서비스 개발<br />아파트 상세 정보 제공 서비스 개발<br />최저가 · 최고가 정보 제공 서비스 개발<br />주변 편의시설 정보 제공 서비스 개발<br />추천 매물 서비스 개발<br />관심목록 서비스 개발<br />1대1 문의하기 서비스<br />오늘의 부동산 뉴스 제공 서비스 개발<br />로그인 및 회원가입 서비스 개발<br />회원정보 수정 서비스 개발 |
| 진형준 | Back-end  |                                                  지역별 아파트 매매 정보 검색 서비스 도메인 개발<br />추천 매물 서비스 도메인 개발<br />관심목록 서비스 도메인 개발<br />1대1 문의 서비스 도메인 개발<br />회원 관련 도메인 개발<br />관심목록 서비스 도메인 개발<br />오늘의 부동산 뉴스 크롤링<br />DB 설계                                                  |

<br />

<div id="7"></div>

## 📅 개발 기간

21.11.16. ~ 21.11.26. (11일)

<br />

<div id='8'></div>

## 💻 실행 방법

### client 실행

1. **원격 저장소 복제**

```bash
$ git clone https://github.com/today-real-estate/today-real-estate_front-end.git
```

2. **프로젝트 폴더로 이동**

```bash
$ cd today-real-estate_front-end
```

3. **필요한 node_modules 설치**

```bash
$ npm install
```

4. **개발 서버 실행**

```bash
$ npm run serve
```

<br />

### server 실행

1. **원격 저장소 복제**

```bash
$ git clone https://github.com/today-real-estate/today-real-estate_back-end.git
```

2. **프로젝트 폴더로 이동**

```bash
$ cd today-real-estate_back-end
```

3. **main 메서드 실행하기**
