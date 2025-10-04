// --- CONFIGURAÇÃO CHAVE: MUDAR PARA A SUA DATA DE INÍCIO DO NAMORO ---
const startDate = new Date('2025-07-06T12:30:00'); // ANO-MÊS-DIA
// Exemplo: 20 de Janeiro de 2022. Use o formato ANO-MÊS-DIA.
// --- FIM DA CONFIGURAÇÃO ---


function updateCounter() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime(); // Diferença em milissegundos


    // Diferença em dias totais desde o início do namoro
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Atualiza apenas o span
    document.getElementById('happy-days').textContent = `${totalDays} dias`;


    

    // 1. Cálculo de Tempo Total (para a linha "Um total de X horas")
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    document.getElementById('total-hours').textContent = totalHours.toLocaleString('pt-BR');


    // 2. Cálculo de Tempo Detalhado (Anos, Meses, Dias, Horas, Minutos, Segundos)

    // A contagem detalhada é mais complexa devido aos meses e anos terem durações variáveis.
    // Vamos usar a diferença total (diff) para calcular Anos/Meses e o restante para Dias/Horas/Minutos/Segundos.

    // A - Anos e Meses (Calculado com base em datas para precisão)
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        // Calcula os dias no mês anterior
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    
    // B - Dias, Horas, Minutos, Segundos (Restante do tempo)
    // O contador de dias, horas, minutos e segundos *dentro do mês atual* é o que vai atualizar em tempo real.
    
    // Criamos uma nova data que representa o "início" do mês ou ano atual do relacionamento
    const refDate = new Date(startDate);
    refDate.setFullYear(startDate.getFullYear() + years);
    refDate.setMonth(startDate.getMonth() + months);

    const timeSinceRef = now.getTime() - refDate.getTime();
    
    let secondsTotal = Math.floor(timeSinceRef / 1000);

    const seconds = secondsTotal % 60;
    secondsTotal = Math.floor(secondsTotal / 60);

    const minutes = secondsTotal % 60;
    secondsTotal = Math.floor(secondsTotal / 60);

    const hours = secondsTotal % 24;
    secondsTotal = Math.floor(secondsTotal / 24);

    const currentDays = secondsTotal; // Os dias que sobraram para completar o mês

    // Atualiza os elementos HTML
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    // Aqui usamos o contador de dias que sobra, que é o estilo da imagem original.
    document.getElementById('days').textContent = currentDays; 
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Inicia o contador imediatamente e atualiza a cada segundo
updateCounter(); 
setInterval(updateCounter, 1000);



var swiper = new Swiper(".swiper",{
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,   
    speed: 600, 
    preventClicks: true,    
    SlidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350, 
        modifier: 1,
        slideShadows: true,
    },

    // passar a foto sozinho
    //autoplay: {
    //delay: 5000, // a cada 5000 = 5sec
    //disableOnInteraction: false, //Mesmo que o usuário mexa, o autoplay continua rodando normalmente depois do tempo definido.
    //}
    

})