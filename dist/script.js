//Enum que define o estado do semáforo
var TrafficLightState;
(function (TrafficLightState) {
    TrafficLightState["Red"] = "red";
    TrafficLightState["Yellow"] = "Yellow";
    TrafficLightState["Green"] = "green";
})(TrafficLightState || (TrafficLightState = {}));
//Obtendo as Divs de Luz
var redLight = document.getElementById('red');
var yellowLight = document.getElementById('yellow');
var greenLight = document.getElementById('green');
//Variavel para armazenar o estado atual do semaforo
var currentState = TrafficLightState.Red;
//Funçao para alternar entre as cores do semáforo
function changeLight() {
    //Remover a classe 'active' de todas as luzes
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
    // Acender a luz correta com base no estado atual
    switch (currentState) {
        case TrafficLightState.Red:
            redLight.classList.add('active');
            currentState = TrafficLightState.Green;
            break;
        case TrafficLightState.Yellow:
            yellowLight.classList.add('active');
            currentState = TrafficLightState.Red;
            break;
        case TrafficLightState.Green:
            greenLight.classList.add('active');
            currentState = TrafficLightState.Yellow;
            break;
    }
}
//Função que inicia o ciclo do semaforo
function starTrafficLight() {
    setInterval(changeLight, 3000);
}
//Iniciar o ciclo do semáforo assim que a pagina carregar
window.onload = starTrafficLight;
