const generate = document.getElementById("generator");
const popupVerse = document.getElementById("popup-verse");
const verseReference = document.getElementById("verse-reference");
const verseCard = document.querySelector(".verse-card");

const generateCard = generate.addEventListener("click", async () => {
 const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
 const data = await response.json();
 console.log(data);
 const verse = data[0].text;
 const book = data[0].bookname;
 const chapter = data[0].chapter;
 const verseNumber = data[0].verse;
popupVerse.textContent = `${verse}`;
verseReference.textContent = `- ${book} ${chapter}:${verseNumber}`;
verseCard.classList.add("show");
        
});


