const hospitalWhitelist = [];
const fetchHospitals = async () => {
  const hospitals = await fetch("/autoCompleteHospital", {
    method: "GET",
  });
  const hospitalData = await hospitals.json();
  console.log(hospitalData);
  hospitalData.data.forEach((el) => {
    hospitalWhitelist.push(el.name);
  });
};
fetchHospitals();
console.log(hospitalWhitelist);
const specializationsInput = document.querySelector(".specializations_input");
const specializationsTagify = new Tagify(specializationsInput, {
  enforceWhitelist: true,
  whitelist: [
    "Family Physician",
    "Internal Medicine Physician",
    "Pediatrician",
    "Obstetrician",
    "Gynecologist",
    "Surgeon",
    "Psychiatrist",
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Infectious Disease Physician",
    "Nephrologist",
    "Ophthalmologist",
    "Otolaryngologist",
    "Pulmonologist",
    "Neurologist",
    "Physician Executive",
    "Radiologist",
    "Anesthesiologist",
    "Oncologist",
  ],
});
const achievements = document.querySelector(".achievements_input");
const achievmentsTagify = new Tagify(achievements);
const qualifications = document.querySelector(".qualifications_input");
const qualificationsTagify = new Tagify(qualifications);
const awards = document.querySelector(".awards_input");
const awardsTagify = new Tagify(awards);
const hospitalInput = document.querySelector(".hospital_list_input");
const hospitalInputTagify = new Tagify(hospitalInput, {
  whitelist: hospitalWhitelist,
  enforceWhitelist: true,
});

const slot_duration = document.querySelector('input[name="slotDuration"]');
const slotTagify = new Tagify(slot_duration, {
  whitelist: ["60 Mins", "45 Mins", "30 Mins", "15 Mins"],
  mode: "select",
  dropdown: {
    className: "color-blue",
    enabled: 1,
    maxItems: 4,
    position: "text",
    closeOnSelect: true,
    highlightFirst: true,
  },
});
