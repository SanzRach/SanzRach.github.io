const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const daysContainer = document.getElementById("days");
const monthYearText = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar() {
    daysContainer.innerHTML = "";
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    monthYearText.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = i;

        if (i === currentDate.getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear()) {
            dayElement.classList.add("today");
        }

        daysContainer.appendChild(dayElement);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();