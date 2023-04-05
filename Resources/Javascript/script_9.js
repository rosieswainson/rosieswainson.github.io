// ---------  MAIN HEADING AND NAVBAR

const mainHeading = document.getElementById("main-heading").innerHTML = "Style Guide Generator";
const mainFont = document.getElementById("main-heading").style.fontFamily = "Syne, sans-serif";

// How to change multiple elements with the same class name
const headingFont = document.getElementsByClassName("fontclass")

for (let i = 0; i < headingFont.length; i++) {
    headingFont[i].style.fontFamily = "Syne, sans-serif";
  }
// console.log(headingFont)

function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



// --------- INTRO PARAGRAPH


const introduction = () => {
    const text1 = ["A website style guide, also known as a design system or brand guidelines, is a set of rules and standards that define how a website should look and function. It typically includes information about typography, color palettes, layout, imagery, iconography, and other visual elements. The purpose of a website style guide is to ensure consistency and coherence across a website's design and to communicate the brand's visual identity to users."]
    const text2 = ["For web designers, a website style guide can be an incredibly helpful tool. By establishing a clear set of design guidelines, designers can save time and effort by avoiding the need to make design decisions from scratch for each new page or feature. Additionally, a style guide can help ensure that all members of a design team are on the same page and working towards a shared vision. Finally, a well-designed style guide can help improve the user experience by creating a cohesive and memorable visual identity for the website."]

    document.getElementById("introduction").innerHTML = `<p class="introduction2">${text1}<p>
                                                        <p class="introduction2">${text2}<p>`;

}


// --------- GENERATOR BUTTONS ------------

// --------- HEADER FONT BUTTON

const displayFont = document.getElementById("display-font")

const generateDisplayFont = () => {
    const displayElement = document.getElementsByClassName("displayfont");

    const randomFonts = [
        'Abril Fatface',
        'Bungee Shade', 
        'Dela Gothic One', 
        'Fugaz One', 
        'Luckiest Guy', 
        'Shrikhand',
        'Syne',
        'Alkatra',
        'Gruppo',
        'Lobster',
        'Righteous',
        'Bebas Neue',
        'Comfortaa',
        'Rowdies',
        'Carter One'
    ]

    const font = randomFonts[Math.floor(Math.random()*randomFonts.length)];

    for (let i = 0; i < displayElement.length; i++) {
        displayElement[i].style.fontFamily = font;
    }

    const whatFont = document.getElementById("what-font-display")

    whatFont.innerHTML = `<h2>This font <br>is called <br>${font}</h2>`;
}
generateDisplayFont();

displayFont.addEventListener("click", generateDisplayFont)


// --------- SERIF FONT BUTTON

const serifFont = document.getElementById("san-font");

const generateSerifFont = () => {
    const serifElement = document.getElementsByClassName("seriffont");

    const randomFonts = [
        'Roboto Slab',
        'Playfair Display',
        'Merriweather',
        'Lora',
        'PT Serif',
        'Noto Serif',
        'Libre Baskerville',
        'Source Serif Pro',
        'Bitter',
        'Cormorant Garamond'
    ]

    const font = randomFonts[Math.floor(Math.random()*randomFonts.length)];

    for (let i = 0; i < serifElement.length; i++) {
        serifElement[i].style.fontFamily = font;
    }

    const whatFont = document.getElementById("what-font-serif")

    whatFont.innerHTML = `<h2>This font <br>is called <br>${font}</h2>`;

}

generateSerifFont();

serifFont.addEventListener("click", generateSerifFont)


// --------- SANS SERIF FONT BUTTON


const sanSerifFont = document.getElementById("sanserif-font")

const generateSanSerifFont = () => {
    const sanSerif = document.getElementsByClassName("sanfont");

    const randomFonts = [
        'Karla',
        'Poppins', 
        'Montserrat', 
        'Raleway',
        'Roboto',
        'Open Sans',
        'Source Sans Pro',
        'Roboto Condensed',
        'Inter',
        'Oswald',
        'Noto Sans',
        'Nunito Sans',
        'Work Sans'
    ]

    const font = randomFonts[Math.floor(Math.random()*randomFonts.length)];


    for (let i = 0; i < sanSerif.length; i++) {
        sanSerif[i].style.fontFamily = font;
    }

    const whatFont = document.getElementById("what-font-sanserif")

    whatFont.innerHTML = `<h2>This font <br>is called <br>${font}</h2>`;

}
generateSanSerifFont();

sanSerifFont.addEventListener("click", generateSanSerifFont)

// --------- COLOUR PALETTE


const container = document.querySelector(".colour-palette");
const colourBtn = document.querySelector(".colour-btn");

const maxPaletteBoxes = 4;

const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // creating a new 'li' element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="circle" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        // adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}

generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    // Copying the hex value, updating the text to copied, 
    // and changing text back to original hex value after 1 second
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!")); // showing alert if color can't be copied
}

colourBtn.addEventListener("click", generatePalette);
