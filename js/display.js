export class Display {
    displayGames(data) {
        let box = ``;
        for (let i = 0; i < data.length; i++) {
            box += `<div class="col">
            <div class="card bg-transparent" data-id="${data[i].id}">
                <div class="card-body">
                    <figure>
                        <img src="${data[i].thumbnail}" alt="game" class="card-img-top">
                    </figure>
                    <div class="card-text small">
                        <div class="hstack justify-content-between">
                            <h6>${data[i].title}</h6>
                            <a href="#" class="btn btn-primary btn-sm">free</a>
                        </div>
                        <p class="small text-center opacity-50 mb-0">
                         ${data[i].short_description.split(" ", 4)}
                        </p>
                    </div>
                </div>
                <div class="card-footer hstack justify-content-between small">
                    <span class="badge text-uppercase">${data[i].genre}</span>
                    <span class="badge">${data[i].platform}</span>
                </div>
            </div>
        </div>`
        }
        document.querySelector("#gamedata").innerHTML = box;
    }


    displayDetails(data) {
        let item = ` <div class="col-md-4">
        <figure>
            <img src="${data.thumbnail}" alt="game" class="w-100">
        </figure>
    </div>
    <div class="col-md-8">
        <div class="content">
            <h3>Title: ${data.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
            <p class="small">
            ${data.description}
            </p>
            <a class="btn btn-outline-warning" target="_blank"
                href="${data.game_url}">Show Game</a>
        </div>
    </div>`;
        document.querySelector("#detailsData").innerHTML = item;
    }
}
