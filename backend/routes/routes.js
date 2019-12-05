const router = app => {
    app.use((request, response, next) => {
        response.set('Access-Control-Allow-Origin', ['*'])
        next();
    });

    app.get('/teams/', (request, response) => {        
        response.send(teams);
    });
}

module.exports = router;

teams = [{ 
        "id": "1", 
        "scores": "0", 
        "position": "10", 
        "name": "КОНАР", 
    }, 
    { 
        "id": "2", 
        "scores": "1", 
        "position": "9", 
        "name": "ИНТЕРСВЯЗЬ", 
    }, 
    { 
        "id": "3", 
        "scores": "2", 
        "position": "8", 
        "name": "Уральская Кузница", 
    }, 
    { 
        "id": "4", 
        "scores": "3", 
        "position": "7", 
        "name": "ЮУрГУ", 
    }, 
    { 
        "id": "5", 
        "scores": "4", 
        "position": "6", 
        "name": "Газпром", 
    }, 
    { 
        "id": "6", 
        "scores": "5", 
        "position": "5", 
        "name": "ЧТС", 
    }, 
    { 
        "id": "7", 
        "scores": "6", 
        "position": "4", 
        "name": "СШОР-1", 
    }, 
    { 
        "id": "8", 
        "scores": "7", 
        "position": "3", 
        "name": "Плазматех ", 
    }, 
    { 
        "id": "9", 
        "scores": "8", 
        "position": "2", 
        "name": "УралГУФК", 
    }, 
    { 
        "id": "10", 
        "scores": "9", 
        "position": "1", 
        "name": "Буревестник", 
    },
];