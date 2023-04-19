
import { Display } from "./display.js";


class Games {
    constructor() {

        let item = document.querySelectorAll(".menu a");
        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener("click", (eventinfo) => {
                let activeitem = document.querySelector(".menu .active");
                activeitem.classList.remove("active");
                eventinfo.target.classList.add("active");
                this.getGames(eventinfo.target.getAttribute("data-category"))
            })
        }
    }

    async getGames(catagory) {
        const loading = document.querySelector('.loading-item');
        loading.classList.remove('d-none');

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '891c8b5d08msh75d30af5070e461p1b143cjsne0a9e3e4c994',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            }
        };

        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catagory}`, options);
        const finalres = await res.json();

        new Display().displayGames(finalres);

        this.getGameID();
        loading.classList.add("d-none");
    }

    getGameID() {
        let card = document.querySelectorAll(".card");
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener("click", function () {
                const id = card[i].getAttribute("data-id");
                document.querySelector(".game").classList.add("d-none");
                document.querySelector(".details").classList.remove("d-none");
                new Details().getDetails(id);
            })
        }
    }
}



class Details {
    constructor() {
        document.querySelector("#closeBtn").addEventListener("click", () => {
            document.querySelector(".game").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        })
    }

    async getDetails(gameID) {
        const loading = document.querySelector('.loading-item');
        loading.classList.remove("d-none");

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };
        const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`, options);
        const finalres = await res.json();

        new Display().displayDetails(finalres);

        loading.classList.add("d-none");
    }
}

new Games().getGames('mmorpg')




