# ruqqus-archive

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

## Configuration

Create a .env file with the variables below:

- `COOKIE` (the value is your cookie from [ruqqus.com](https://ruqqus.com/) (this is so you can log in and access the API))
- `PAGES` (the value is the last page you want to archive up to - it archives from page 1 to the page value you provide)

Example .env file:

```
COOKIE=session_ruqqus=.iDdi9JU56CbyA_csy5d8aICyb3cboi8-Cni3ycn_co9ac8yuWOy
PAGES=100
```

## Usage

```bash
node main.js
```

If you are using nodemon:

```bash
nodemon main.js
```

## About the incomplete archive data

I had a lot of school work to do and did not spend much time on this project. When I did have free time, I first started testing the archiving - coincidently, that was the time of the deadline - Ruqqus's API closed in the middle of an archive test. I had overestimated the time I had before the deadline. The data published here is all I have been able to archive.

As far as I know, there is no full archive of Ruqqus. There is a partial archive available at [https://ruqqus-archives.netlify.app/](https://ruqqus-archives.netlify.app/).