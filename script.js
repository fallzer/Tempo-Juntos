// ===============================
// CONFIGURAÇÃO INICIAL
// ===============================
const startDate = new Date('2025-07-06T12:30:00-04:00'); // ANO-MÊS-DIA e HORÁRIO de início

// ===============================
// FUNÇÃO PRINCIPAL: CONTADOR
// ===============================
function updateCounter() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime(); // Diferença total em milissegundos

    // --- Total de Dias desde o início do namoro ---
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('happy-days').textContent = `${totalDays} dias`;

    // --- Total de Horas (linha "Um total de X horas") ---
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    document.getElementById('total-hours').textContent = totalHours.toLocaleString('pt-BR');

    // --- Cálculo de Anos e Meses completos ---
    // Compara ano e mês calendário entre startDate e now
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    // Ajuste: se os meses ficaram negativos, volta um ano
    if (months < 0) {
        years--;
        months += 12;
    }

    // --- Monta a data de referência (mesmo dia/hora do início, avançado por anos+meses) ---
    // Ex: se início foi 06/jul/2025 às 12h30, e hoje é 06/mai/2026,
    // a refDate será 06/mai/2026 às 12h30 (antes de validar se passou ou não)
    const refDate = new Date(startDate);
    refDate.setFullYear(startDate.getFullYear() + years);
    refDate.setMonth(startDate.getMonth() + months);

    // Ajuste: se a refDate ainda não chegou (ex: são 10h e o início é 12h30),
    // significa que o mês ainda não "completou" — volta um mês
    if (refDate > now) {
        months--;
        if (months < 0) {
            years--;
            months += 12;
        }
        refDate.setMonth(refDate.getMonth() - 1);
    }

    // --- Diferença em milissegundos desde a última virada de mês (com horário!) ---
    // Isso garante que dias/horas/minutos/segundos respeitam o horário de início
    const timeSinceRef = now.getTime() - refDate.getTime();
    let secondsTotal = Math.floor(timeSinceRef / 1000);

    // Extrai cada unidade de tempo
    const seconds = secondsTotal % 60;
    secondsTotal = Math.floor(secondsTotal / 60);
    const minutes = secondsTotal % 60;
    secondsTotal = Math.floor(secondsTotal / 60);
    const hours = secondsTotal % 24;
    secondsTotal = Math.floor(secondsTotal / 24);
    const days = secondsTotal; // Dias restantes desde a última virada de mês

    // --- Atualiza os elementos HTML ---
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Inicia o contador imediatamente e atualiza a cada segundo
updateCounter();
setInterval(updateCounter, 1000);

// ===============================
// SWIPER CONFIGURAÇÃO
// ===============================
var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 0,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    // --- Autoplay (opcional) ---
    // autoplay: {
    //     delay: 5000, // 5 segundos por slide
    //     disableOnInteraction: false, // Continua mesmo após interação
    // },
});
