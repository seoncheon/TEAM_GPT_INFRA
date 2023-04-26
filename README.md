<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/willowmike/EGG-MONEY-BANK">
    <img src="images/egg.gif" alt="Logo">
  </a>

  <h3 align="center">EGGMONEY Web Banking Service</h3>

  <p align="center">
    Banking service to test penetration methods 
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://eggmoneybank.com">View Demo</a>
    ·
    <a href="https://github.com/willowmike/EGG-MONEY-BANK/issues">Report Bug</a>
    ·
    <a href="https://github.com/willowmike/EGG-MONEY-BANK/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<h3>Bulletin Board</h3>
 <img src="images/board.png">
<h3>Banking</h3>
 <img src="images/banking.png">

We created a vulnerable web banking service to test out various web penetration methods like SQL injection, cross site scripting, request forgery... and so on.

This project is developed based on <a>https://github.com/rewanthtammana/Damn-Vulnerable-Bank</a>, kindly provided by Rewanth Tammana and his team.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section lists all major frameworks/libraries used to develop this project.

* [![Node][Node.js]][Node-url]
* [![Mysql][MySql]][Mysql-url]
* [![Express][Expresss]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
 
This is an instruction of how you may set up your project locally.

### Installation
_
This is a list of things you need to set up a server and how to install them._

1. clone git
  ```sh
  git clone https://github.com/willowmike/EGG-MONEY-BANK.git
  ```

2. install npm in each WEB, API
  ```sh
  npm install
  ```

3. start npm in each WEB, API
  ```sh
  npm start
  ```

4. set up mysql using the script "database.sql"
  ```sh
  source 'database.sql'
  ```

5. set up config in WEB
  ```sh
  edit www in "bin" folder
  edit db.js in "middlewares" folder
  edit ipcheck.js in "middlewares" folder
  edit config.js in root directory
  ```

5. set up config in API
  ```sh
  edit www in "bin" folder
  edit config.json in "middlewares" folder
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

This is some examples of how this project can be used. 

<h3>Notice Board</h3>
 <img src="images/notice.png">
<h3>QnA</h3>
 <img src="images/qna.png">
<h3>Banking</h3>
 <img src="images/banking.png">
<h3>Beneficiary</h3>
 <img src="images/benef.png">
<h3>Transactions List</h3>
 <img src="images/list.png">
<h3>Transaction</h3>
 <img src="images/transaction.png">


_For more examples, please refer to the [eggmoneybank](http://www.eggmoneybank.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [O] English
    - [O] Korean

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Seperate WEB Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)
Seperate API Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Check out DVBA (https://github.com/rewanthtammana/Damn-Vulnerable-Bank)

Huge Thanks to Neil (https://github.com/othneildrew/Best-README-Template) 

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/willowmike/EGG-MONEY-BANK/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/willowmike/EGG-MONEY-BANK/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/willowmike/EGG-MONEY-BANK/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/willowmike/EGG-MONEY-BANK/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/willowmike/EGG-MONEY-BANK/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/banking.png
[product-screenshot1]: images/board.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=green
[MySql]: https://img.shields.io/badge/mysql-000000?style=for-the-badge&logo=mysql&logoColor=skyblue
[Expresss]: https://img.shields.io/badge/express-eeeeee?style=for-the-badge&logo=express&logoColor=black
[Node-url]: https://nodejs.org/en/
[Mysql-url]: https://www.mysql.com/
[Express-url]: https://expressjs.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

