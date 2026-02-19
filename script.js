function findRoute() {

    let pointA = document.getElementById("pointA").value;
    let pointB = document.getElementById("pointB").value;

    if(pointA === "" || pointB === ""){
        alert("Please enter both locations");
        return;
    }

    let routeA = {
        description: "Main Road (Fast but Polluted)",
        time: 20,
        aqi: 230,
        traffic: 8,
        construction: 6
    };

    let routeB = {
        description: "Internal Road",
        time: 27,
        aqi: 170,
        traffic: 5,
        construction: 2
    };

    let routeC = {
        description: "Park Route (Cleanest)",
        time: 30,
        aqi: 120,
        traffic: 2,
        construction: 1
    };

    function calculateHealthScore(route){
        let pollution = route.aqi / 500;
        let traffic = route.traffic / 10;
        let construction = route.construction / 10;

        return (pollution * 60) + (traffic * 25) + (construction * 15);
    }

    routeA.healthScore = calculateHealthScore(routeA);
    routeB.healthScore = calculateHealthScore(routeB);
    routeC.healthScore = calculateHealthScore(routeC);

    let routes = [routeA, routeB, routeC];
    routes.sort((a,b) => a.healthScore - b.healthScore);

    let result = document.getElementById("result");
    result.innerHTML = "";

    routes.forEach((route, index) => {

        let pollutionClass =
            route.aqi > 200 ? "high" :
            route.aqi > 150 ? "medium" : "low";

        let div = document.createElement("div");
        div.className = "route-card " + pollutionClass;

        div.innerHTML = `
            <h3>${index === 0 ? "🌟 Best Route" : "Route Option"}</h3>
            <p>${pointA} → ${pointB}</p>
            <p><b>${route.description}</b></p>
            <p>Time: ${route.time} mins</p>
            <p>AQI: ${route.aqi}</p>
            <p>Health Score: ${route.healthScore.toFixed(2)}</p>
        `;

        result.appendChild(div);
    });

}
