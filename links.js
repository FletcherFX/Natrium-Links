const links = {
    officialSite: "https://fletcherfx.github.io/natrium/",
    minecraftInside: "https://minecraft-inside.ru/modpacks/194696-natrium.html",
    githubRepo: "https://github.com/FletcherFX/natrium",
    telegramChat: "https://t.me/NatriumChat",
    telegramChannel: "https://t.me/NatriumProject",
    bugReport: "https://t.me/JavaFixerTEXbot",
    donationAlerts: "https://www.donationalerts.com/r/fletcherfx",
    modrinth: "javascript:void(0)"
};

document.getElementById("site-link").href = links.officialSite;
document.getElementById("mineinside-link").href = links.minecraftInside;
document.getElementById("github-link").href = links.githubRepo;
document.getElementById("tgchat-link").href = links.telegramChat;
document.getElementById("tgchannel-link").href = links.telegramChannel;
document.getElementById("bug-link").href = links.bugReport;
document.getElementById("da-link").href = links.donationAlerts;
document.getElementById("modrinth-link").href = links.modrinth;

const translations = {
    RU: {
        site: "Официальный сайт",
        mine: "Minecraft Inside",
        github: "GitHub репозиторий",
        tgchat: "Telegram Chat",
        tgchannel: "Telegram Channel",
        bug: "Сообщить о баге",
        da: "Donation Alerts",
        modrinth: "Modrinth — скоро"
    },
    EN: {
        site: "Official Website",
        mine: "Minecraft Inside",
        github: "GitHub Repository",
        tgchat: "Telegram Chat",
        tgchannel: "Telegram Channel",
        bug: "Report a Bug",
        da: "Donation Alerts",
        modrinth: "Modrinth — coming soon"
    }
};

let currentLang = "RU";
const langBtn = document.getElementById("lang-btn");

const txtSite = document.getElementById("txt-site");
const txtMine = document.getElementById("txt-mine");
const txtGithub = document.getElementById("txt-github");
const txtTgchat = document.getElementById("txt-tgchat");
const txtTgchannel = document.getElementById("txt-tgchannel");
const txtBug = document.getElementById("txt-bug");
const txtDa = document.getElementById("txt-da");
const txtModrinth = document.getElementById("txt-modrinth");

langBtn.addEventListener("click", () => {
    if (currentLang === "RU") {
        currentLang = "EN";
    } else {
        currentLang = "RU";
    }
    
    langBtn.textContent = currentLang;
    
    txtSite.textContent = translations[currentLang].site;
    txtMine.textContent = translations[currentLang].mine;
    txtGithub.textContent = translations[currentLang].github;
    txtTgchat.textContent = translations[currentLang].tgchat;
    txtTgchannel.textContent = translations[currentLang].tgchannel;
    txtBug.textContent = translations[currentLang].bug;
    txtDa.textContent = translations[currentLang].da;
    txtModrinth.textContent = translations[currentLang].modrinth;
});
