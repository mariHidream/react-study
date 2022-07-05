# 9장 컴포넌트 스타일링

* 일반 CSS
* Sass 
* CSS Module 
* styled-components : 스타일을 자바스크립트 파일에 내장시키는 방법


## 일반 CSS
- 이름 짓는 규칙
    - BEM 네이밍 : 해당클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방법
- CSS Selector

## Sass 
- Sass(Syntactically Awesome Style Sheets)(문법적으로 매우 멋진 스타일시트)
    - 스타일 코드의 재활용성이 높고, 코드의 가독성을 높여 유지보수가 쉽다
    - Sass, Scss 지원
    ``` Sass
        $font-stack: Helvetica, sans-serif
        $primary-color: #333


        body
        font: 100% $font-stack
        color: $primary-color
    ```
    ``` Scss
        $font-stack: Helvetica, sans-serif;
        $primary-color: #333;
        
        body {
            font: 100% $font-stack;
            color: $primary-color;
        }
    ```
 * npm add node-sass (터미널에서 설치하기)
 * 문법 :  $(변수 선언), & (?현재클래스선택)

## CSS Module 
  - CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, 
    즉 [파일 이름]_[클래스 이름]__[해시값] 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술
## styled-components
 - 'CSS-in-JS' : 자바스크립트 파일 안에 스타일을 선언하는 방식
    yarn add styled-components
    npm add styled-components


