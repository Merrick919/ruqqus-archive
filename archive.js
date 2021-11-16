import dotenv from "dotenv";
dotenv.config()
import fetch from "node-fetch";
import fs from "fs";
import chalk from "chalk";

const cookie = process.env.COOKIE;
const pages = process.env.PAGES;

function timeNowISO() {
	let timeNow = new Date();
	let timeNowISO = timeNow.toISOString();

	return timeNowISO;
}

function consoleLog(message) {
    console.log(chalk.blue(timeNowISO()) + " " + message + '\n');
}

async function getGuilds(pageNumber) {
    
    try {

        let options = {
            headers: {
                "cookie": cookie
            }
        };
		
		let url = "http://api.ruqqus.com/api/v2/guilds?sort=subs&page=" + pageNumber;
		let filePath = "./data/guilds/" + "guilds-" + pageNumber + ".json";
		
		let response = await fetch(url, options);
		let data = await response.json();

		fs.writeFile(filePath, JSON.stringify(data), error => {
			if (error) {
				consoleLog(chalk.red("An error occured:") + "\n" + "                         fs.writeFile\n" + "                         dataType - guilds\n" + "                         pageNumber - " + pageNumber);
			} else {
				consoleLog(chalk.green("File write success:") + "\n" + "                         fs.writeFile\n" + "                         dataType - guilds\n" + "                         pageNumber - " + pageNumber);
			}
		});
		
    } catch (err) {
        console.error(err);
        consoleLog(chalk.red("An error occured:") + "\n" + "                         dataType - guilds\n" + "                         pageNumber - " + pageNumber);
    }

}

for (let i = 1; i <= pages; i ++) {
    getGuilds(i);
	consoleLog("Getting guilds - page " + i);
}