import dotenv from "dotenv";
dotenv.config()
import fetch from "node-fetch";
import fs from "fs";
import chalk from "chalk";

// leftpad?

const cookie = process.env.COOKIE;

function timeNowISO() {
	let timeNow = new Date();
	let timeNowISO = timeNow.toISOString();
	
	return timeNowISO;
}

function consoleLog(message) {
    console.log(chalk.blue(timeNowISO()) + " " + message + '\n');
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

async function getGuilds(pageNumber) {
    
    try {
		
        let options = false;

        options = {
            headers: {
                "cookie": cookie
            }
        };
		
		let url = "http://ruqqus.com/api/v2/guilds?sort=subs&page=" + pageNumber;
		let filePath = "./guilds/" + "guilds-" + pageNumber + ".json";

        // let jsonData;
        // jsonData = fetch(url, options).then(res => console.log(res.text));
		
		let response = await fetch(url, options);
		let data = await response.json();

		fs.writeFile(filePath, JSON.stringify(data), error => {
			if (error) {
				consoleLog(chalk.red("An error occured:") + "\n" + "                        fs.writeFile\n" + "                        dataType - guilds\n" + "                        pageNumber - " + pageNumber);
			} else {
				consoleLog(chalk.green("File write success:") + "\n" + "                        fs.writeFile\n" + "                        dataType - guilds\n" + "                        pageNumber - " + pageNumber);
			}
		});
		
    } catch (err) {
        console.error(err);
        consoleLog(chalk.red("An error occured:") + "\n" + "                        dataType - guilds\n" + "                        pageNumber - " + pageNumber);
    }

}

setInterval(function() {
    getGuilds(i);
	consoleLog("Getting guild - page " + i);
    i++;

    if(i == 10)
        clearInterval(interval);
}, 2000);