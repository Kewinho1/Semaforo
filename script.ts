//Enum que define o estado do semáforo
enum TrafficLightState {
    Red = 'red',
    Yellow = 'Yellow',
    Green = 'green',
}

//Obtendo as Divs de Luz
const redLight = document.getElementById('red') as HTMLDivElement;
const yellowLight = document.getElementById('yellow') as HTMLDivElement;
const greenLight = document.getElementById('green') as HTMLDivElement;

//Variavel para armazenar o estado atual do semaforo
let currentState: TrafficLightState = TrafficLightState.Red;

//Funçao para alternar entre as cores do semáforo
function changeLight(){
//Remover a classe 'active' de todas as luzes
redLight.classList.remove('active');
yellowLight.classList.remove('active');
greenLight.classList.remove('active');

// Acender a luz correta com base no estado atual

switch (currentState) {
    case TrafficLightState.Red:
        redLight.classList.add('active');
        currentState = TrafficLightState.Green;
        break
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
function starTrafficLight(){
    setInterval(changeLight, 3000);
}

//Iniciar o ciclo do semáforo assim que a pagina carregar
window.onload = starTrafficLight;
