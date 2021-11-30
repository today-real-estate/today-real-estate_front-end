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

[공공 데이터 포탈](https://www.data.go.kr/data/15057511/openapi.do)에서 제공하는 아파트 실거래가 데이터를 활용하여 사용자가 이사를 하고자 하는 동네에서의 아파트 매매가 정보 및 주변 편의 시설 정보를 제공하는 **부동산 서비스**

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

### **Back-end**

| <img src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" alt="Java" width="50px" height="50px" /> | <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F0101CE3E51A8D88901" alt="Jsoup" width="50px" height="50px" /> | <img src="https://perfectacle.github.io/2018/07/22/spring-boot-2-env/thumb.png" alt="Spring boot" width="50px" height="50px" /> |
| :--------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|                                                             Java                                                             |                                                                                         Jsoup                                                                                         |                                                           Spring boot                                                           |

| <img src="https://media.vlpt.us/images/wavvy1022/post/d05e49ea-341a-4e6a-80db-ff322533464a/jpa.png" alt="JPA" width="50px" height="50px" /> | <img src="https://i.pinimg.com/originals/0b/11/2c/0b112c6a99631dd3bd98fa9fc91f51f1.png" alt="MyBatis" width="50px" height="50px" /> |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
|                                                                     JPA                                                                     |                                                               MyBatis                                                               |

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

|                     메인 페이지                      |
| :--------------------------------------------------: |
| <img src="./readme_assets/.gif" alt="메인 페이지" /> |

<br />

<div id="6"></div>

## 👪 개발 팀 소개

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JeongHwan-dev">
        <img src="https://avatars.githubusercontent.com/u/68452755?v=4" alt="박정환 프로필" width="100px" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/alveloper">
        <img src="https://avatars.githubusercontent.com/u/65895403?v=4" alt="진형준 프로필" width="100px" />
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
      <a href="https://github.com/alveloper">
        진형준<br />(Back-end)
      </a>
    </td>
</table>

<br />

|  이름  |   역할    |                                                                                                                                                              개발 내용                                                                                                                                                               |
| :----: | :-------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| 박정환 | Front-end | 지역별 아파트 매매 정보 검색 서비스 개발<br />아파트 상세 정보 제공 서비스 개발<br />최저가 · 최고가 정보 제공 서비스 개발<br />주변 편의시설 정보 제공 서비스 개발<br />추천 매물 서비스 개발<br />1대1 문의하기 서비스<br />오늘의 부동산 뉴스 제공 서비스 개발<br />로그인 및 회원가입 서비스 개발<br />회원정보 수정 서비스 개발 |
| 진형준 | Back-end  |                                                                                                                                                                 ...                                                                                                                                                                  |

<br />

<div id="7"></div>

## 📅 개발 기간

21.11.16 ~ 21.11.26 (11일)

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
