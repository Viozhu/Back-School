<br/>
<p align="center">
  <a href="https://github.com/Viozhu/Back-School">
    <img src="https://cdn-icons-png.flaticon.com/512/55/55281.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Calendar Back</h3>

  <p align="center">
   This is the calendar back repository from Numen
    <br/>
    <br/>
    <a href=""><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
  <a href="https://github.com/Viozhu/Back-School/issues">Report Bug</a> - 
    <a href="https://github.com/Viozhu/Back-School/issues">Request Feature</a>
  </p>
</p>

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Authors](#authors)

## About The Project

The project is focused on the control of the classes, teachers, tutors and tls of the numen academy.
In which you can create courses, assign classes, assign teachers to said classes, among other things.

## Built With

<p align="center"> 
<img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/> 
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />  
<img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />  
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/> 
  </p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone [https://github.com/Viozhu/Back-School.git](https://github.com/Viozhu/Back-School.git)
```

3. Install NPM packages

```sh
npm install
```

4. Enter your Env in `./`

```JS
DATABASE_URL = 'ENTER YOUR DATABASE URL';
```

5. Generate the prisma client

```sh
npx prisma generate
```

### New Migration

1. Add the new feature in `./prisma/schema.prisma`

- Generate the new migration in <strong> DEV </strong>
```sh
npx prisma migrate dev --name (migrate name)
```

- Generate the new migration in <strong> PROD </strong> 
```sh
npx prisma migrate deploy
```

## Roadmap

Building

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/Viozhu/Back-School/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **Viozhu** - *FullStack Developer* - [Viozhu](https://github.com/Viozhu/)

