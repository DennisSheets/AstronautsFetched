window.addEventListener("load", function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        response.json().then(function(json) {
            json1 = json.sort(function(a, b){return b.hoursInSpace-a.hoursInSpace});

            const container = document.getElementById("container");
            container.innerHTML = `<p>Total Astronauts: ${json1.length}<p>`;

            let color = "red"
 
            for (let i = 0; i < json1.length; i++) {
                if(json[i].active === true) {
                    color = "green";
                }
                container.innerHTML +=`
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json1[i].firstName} ${json1[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json1[i].hoursInSpace}</li>
                                <li style = "color:${color}">Active: ${json1[i].active}</li>
                                <li>Skills: ${json1[i].skills}</li>
                            </ul>
                        </div>
                    <img class="avatar" src="${json1[i].picture}">
                    </div>
                `
            }; 
        });
    });
});