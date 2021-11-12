# ruqqus-archive

Work in progress 🚧

## Description

ruqqus-archive is a tool to archive content from [ruqqus.com](https://ruqqus.com/) ([ruqqus](https://github.com/ruqqus/ruqqus/)) and to display the content on a website.

## Requirements

- [Node.js](https://nodejs.org/)
- [npm](http://www.npmjs.com/)

## Installation

Clone the repository.

```bash
git clone https://github.com/Merrick919/ruqqus-archive.git
```

Enter the directory.

```bash
cd ruqqus-archive/
```

Install the dependencies.

- chalk
- dotenv
- node-fetch
- nodemon (optional, it just helps with the development process)

```bash
npm install
```

Create a .env file with the variable `COOKIE` - the value is your cookie from [ruqqus.com](https://ruqqus.com/) (this is so you can log in and access the API).