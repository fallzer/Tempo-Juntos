// ===============================
// CONFIGURAÇÃO INICIAL
// ===============================
const startDate = new Date('2025-07-06T12:30:00-04:00'); // ANO-MÊS-DIA

// ===============================
// FUNÇÃO PRINCIPAL: CONTADOR
// ===============================
function updateCounter() {
    const now = new Date();
    const diff = now.getTime() - startDate.getTime(); // Diferença em milissegundos

    // --- Total de Dias desde o início do namoro ---
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('happy-days').textContent = `${totalDays} dias`;

    // --- Total de Horas (linha "Um total de X horas") ---
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    document.getElementById('total-hours').textContent = totalHours.toLocaleString('pt-BR');

    // --- Cálculo Detalhado (Anos, Meses, Dias, Horas, Minutos, Segundos) ---
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    // Ajuste de dias negativos (quando o dia atual ainda não atingiu o dia do mês de início)
    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Ajuste de meses negativos (quando ainda não chegou o mês de início do relacionamento)
    if (months < 0) {
        years--;
        months += 12;
    }

    // --- Cálculo de tempo desde a última virada de mês/ano ---
    const refDate = new Date(startDate);
    refDate.setFullYear(startDate.getFullYear() + years);
    refDate.setMonth(startDate.getMonth() + months);

    // Garante que a data de referência nunca ultrapasse o "agora"
    if (refDate > now) {
        refDate.setMonth(refDate.getMonth() - 1);
    }

    // --- Diferença em segundos desde a referência ---
    const timeSinceRef = now.getTime() - refDate.getTime();
    let secondsTotal = Math.floor(timeSinceRef / 1000);

    const seconds = secondsTotal % 60;
    secondsTotal = Math.floor(secondsTotal / 60);

    const minutes = secondsTotal % 60;
    secondsTotal = Math.floor(secondsTotal / 60);

    const hours = secondsTotal % 24;
    secondsTotal = Math.floor(secondsTotal / 24);

    const currentDays = secondsTotal; // Dias restantes do mês atual

    // --- Atualiza os elementos HTML ---
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = currentDays;
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
