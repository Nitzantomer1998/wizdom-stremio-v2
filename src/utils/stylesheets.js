const STYLESHEET = `
* {
   box-sizing: border-box;
}

body,
html {
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
}

html {
   background-size: auto 100%;
   background-size: cover;
   background-position: center center;
   background-repeat: no-repeat;
   background-attachment:fixed;
}

body {
   display: flex;
   flex-direction: column;
   font-family: 'Open Sans', Arial, sans-serif;
   color: white;
}

h1 {
   font-size: 4.5vh;
   font-weight: 700;
}

h2 {
   font-size: 2.2vh;
   font-weight: normal;
   font-style: italic;
   opacity: 0.8;
}

h3 {
   font-size: 2.2vh;
}

h1,
h2,
h3,
p {
   margin: 0;
   text-shadow: 0 0 1vh rgba(0, 0, 0, 0.15);
}

p {
   font-size: 1.75vh;
}

ul {
   font-size: 1.75vh;
   margin: 0;
   margin-top: 1vh;
   padding-left: 3vh;
}

a {
   color: white
}

a.install-link {
   text-decoration: none
}

button {
   border: 0;
   outline: 0;
   color: white;
   background: #8A5AAB;
   padding: 1.2vh 3.5vh;
   margin: auto;
   text-align: center;
   font-family: 'Open Sans', Arial, sans-serif;
   font-size: 2.2vh;
   font-weight: 600;
   cursor: pointer;
   display: block;
   box-shadow: 0 0.5vh 1vh rgba(0, 0, 0, 0.2);
   transition: box-shadow 0.1s ease-in-out;
}

button:hover {
   box-shadow: none;
}

button:active {
   box-shadow: 0 0 0 0.5vh white inset;
}

#addon {
   width: 40vh;
   margin: auto;
}

.github {
   color: #3F3F44;
   margin-bottom: 10px;
   display: inline-block;
   width: 100%;
   background: #f5f5f5;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   padding: 5px 10px 5px 10px;
   line-height: 40px;
   border-bottom: 1px solid #e5e5e5;
   border-top-right-radius: 3px;
   border-top-left-radius: 3px;
   font-size: 13px;
   font-weight: 700;
}

.github, .fa {
   font-size: 30px;
   margin-right: 10px;
}

.markdown {
   padding: 70px 30px 30px 30px;
   margin: 50px 50px 50px 50px;
   background-color: #FCFCFC;
   border: 1px solid #e5e5e5;
   border-radius: 4px;
   padding: 30px;
   padding-top: 70px;
   position: relative;
   word-wrap: break-word;
   box-shadow: 0 4px 8px 12px rgba(0,0,0,0.2);
   border-radius: 5px;
}

.logo {
   height: 14vh;
   width: 14vh;
   margin: auto;
   margin-bottom: 3vh;
}

.logo img {
   width: 100%;
}

.name, .version {
   display: inline-block;
   vertical-align: top;
}

.name {
   line-height: 5vh;
}

.version {
   position: absolute;
   line-height: 5vh;
   margin-left: 1vh;
   opacity: 0.8;
}

.contact {
   margin-top: 50px;
   width: 100%;
   text-align: center;
}

.contact a {
   font-size: 1.4vh;
   font-style: italic;
}

.separator {
   margin-bottom: 4vh;
}
`

export default STYLESHEET;