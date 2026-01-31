const elements = [
    // Period 1
    { number: 1, symbol: "H", name: "Hydrogen", weight: 1.008, category: "nonmetal", x: 1, y: 1 },
    { number: 2, symbol: "He", name: "Helium", weight: 4.0026, category: "noble-gas", x: 18, y: 1 },
    
    // Period 2
    { number: 3, symbol: "Li", name: "Lithium", weight: 6.94, category: "alkali-metal", x: 1, y: 2 },
    { number: 4, symbol: "Be", name: "Beryllium", weight: 9.0122, category: "alkaline-earth", x: 2, y: 2 },
    { number: 5, symbol: "B", name: "Boron", weight: 10.81, category: "metalloid", x: 13, y: 2 },
    { number: 6, symbol: "C", name: "Carbon", weight: 12.011, category: "nonmetal", x: 14, y: 2 },
    { number: 7, symbol: "N", name: "Nitrogen", weight: 14.007, category: "nonmetal", x: 15, y: 2 },
    { number: 8, symbol: "O", name: "Oxygen", weight: 15.999, category: "nonmetal", x: 16, y: 2 },
    { number: 9, symbol: "F", name: "Fluorine", weight: 18.998, category: "halogen", x: 17, y: 2 },
    { number: 10, symbol: "Ne", name: "Neon", weight: 20.180, category: "noble-gas", x: 18, y: 2 },
    
    // Period 3
    { number: 11, symbol: "Na", name: "Sodium", weight: 22.990, category: "alkali-metal", x: 1, y: 3 },
    { number: 12, symbol: "Mg", name: "Magnesium", weight: 24.305, category: "alkaline-earth", x: 2, y: 3 },
    { number: 13, symbol: "Al", name: "Aluminum", weight: 26.982, category: "post-transition", x: 13, y: 3 },
    { number: 14, symbol: "Si", name: "Silicon", weight: 28.085, category: "metalloid", x: 14, y: 3 },
    { number: 15, symbol: "P", name: "Phosphorus", weight: 30.974, category: "nonmetal", x: 15, y: 3 },
    { number: 16, symbol: "S", name: "Sulfur", weight: 32.06, category: "nonmetal", x: 16, y: 3 },
    { number: 17, symbol: "Cl", name: "Chlorine", weight: 35.45, category: "halogen", x: 17, y: 3 },
    { number: 18, symbol: "Ar", name: "Argon", weight: 39.948, category: "noble-gas", x: 18, y: 3 },
    
    // Period 4
    { number: 19, symbol: "K", name: "Potassium", weight: 39.098, category: "alkali-metal", x: 1, y: 4 },
    { number: 20, symbol: "Ca", name: "Calcium", weight: 40.078, category: "alkaline-earth", x: 2, y: 4 },
    { number: 21, symbol: "Sc", name: "Scandium", weight: 44.956, category: "transition-metal", x: 3, y: 4 },
    { number: 22, symbol: "Ti", name: "Titanium", weight: 47.867, category: "transition-metal", x: 4, y: 4 },
    { number: 23, symbol: "V", name: "Vanadium", weight: 50.942, category: "transition-metal", x: 5, y: 4 },
    { number: 24, symbol: "Cr", name: "Chromium", weight: 51.996, category: "transition-metal", x: 6, y: 4 },
    { number: 25, symbol: "Mn", name: "Manganese", weight: 54.938, category: "transition-metal", x: 7, y: 4 },
    { number: 26, symbol: "Fe", name: "Iron", weight: 55.845, category: "transition-metal", x: 8, y: 4 },
    { number: 27, symbol: "Co", name: "Cobalt", weight: 58.933, category: "transition-metal", x: 9, y: 4 },
    { number: 28, symbol: "Ni", name: "Nickel", weight: 58.693, category: "transition-metal", x: 10, y: 4 },
    { number: 29, symbol: "Cu", name: "Copper", weight: 63.546, category: "transition-metal", x: 11, y: 4 },
    { number: 30, symbol: "Zn", name: "Zinc", weight: 65.38, category: "transition-metal", x: 12, y: 4 },
    { number: 31, symbol: "Ga", name: "Gallium", weight: 69.723, category: "post-transition", x: 13, y: 4 },
    { number: 32, symbol: "Ge", name: "Germanium", weight: 72.630, category: "metalloid", x: 14, y: 4 },
    { number: 33, symbol: "As", name: "Arsenic", weight: 74.922, category: "metalloid", x: 15, y: 4 },
    { number: 34, symbol: "Se", name: "Selenium", weight: 78.971, category: "nonmetal", x: 16, y: 4 },
    { number: 35, symbol: "Br", name: "Bromine", weight: 79.904, category: "halogen", x: 17, y: 4 },
    { number: 36, symbol: "Kr", name: "Krypton", weight: 83.798, category: "noble-gas", x: 18, y: 4 },
    
    // Period 5
    { number: 37, symbol: "Rb", name: "Rubidium", weight: 85.468, category: "alkali-metal", x: 1, y: 5 },
    { number: 38, symbol: "Sr", name: "Strontium", weight: 87.62, category: "alkaline-earth", x: 2, y: 5 },
    { number: 39, symbol: "Y", name: "Yttrium", weight: 88.906, category: "transition-metal", x: 3, y: 5 },
    { number: 40, symbol: "Zr", name: "Zirconium", weight: 91.224, category: "transition-metal", x: 4, y: 5 },
    { number: 41, symbol: "Nb", name: "Niobium", weight: 92.906, category: "transition-metal", x: 5, y: 5 },
    { number: 42, symbol: "Mo", name: "Molybdenum", weight: 95.95, category: "transition-metal", x: 6, y: 5 },
    { number: 43, symbol: "Tc", name: "Technetium", weight: 98, category: "transition-metal", x: 7, y: 5 },
    { number: 44, symbol: "Ru", name: "Ruthenium", weight: 101.07, category: "transition-metal", x: 8, y: 5 },
    { number: 45, symbol: "Rh", name: "Rhodium", weight: 102.91, category: "transition-metal", x: 9, y: 5 },
    { number: 46, symbol: "Pd", name: "Palladium", weight: 106.42, category: "transition-metal", x: 10, y: 5 },
    { number: 47, symbol: "Ag", name: "Silver", weight: 107.87, category: "transition-metal", x: 11, y: 5 },
    { number: 48, symbol: "Cd", name: "Cadmium", weight: 112.41, category: "transition-metal", x: 12, y: 5 },
    { number: 49, symbol: "In", name: "Indium", weight: 114.82, category: "post-transition", x: 13, y: 5 },
    { number: 50, symbol: "Sn", name: "Tin", weight: 118.71, category: "post-transition", x: 14, y: 5 },
    { number: 51, symbol: "Sb", name: "Antimony", weight: 121.76, category: "metalloid", x: 15, y: 5 },
    { number: 52, symbol: "Te", name: "Tellurium", weight: 127.60, category: "metalloid", x: 16, y: 5 },
    { number: 53, symbol: "I", name: "Iodine", weight: 126.90, category: "halogen", x: 17, y: 5 },
    { number: 54, symbol: "Xe", name: "Xenon", weight: 131.29, category: "noble-gas", x: 18, y: 5 },
    
    // Period 6
    { number: 55, symbol: "Cs", name: "Cesium", weight: 132.91, category: "alkali-metal", x: 1, y: 6 },
    { number: 56, symbol: "Ba", name: "Barium", weight: 137.33, category: "alkaline-earth", x: 2, y: 6 },
    { number: 57, symbol: "La", name: "Lanthanum", weight: 138.91, category: "lanthanide", x: 3, y: 6 },
    { number: 72, symbol: "Hf", name: "Hafnium", weight: 178.49, category: "transition-metal", x: 4, y: 6 },
    { number: 73, symbol: "Ta", name: "Tantalum", weight: 180.95, category: "transition-metal", x: 5, y: 6 },
    { number: 74, symbol: "W", name: "Tungsten", weight: 183.84, category: "transition-metal", x: 6, y: 6 },
    { number: 75, symbol: "Re", name: "Rhenium", weight: 186.21, category: "transition-metal", x: 7, y: 6 },
    { number: 76, symbol: "Os", name: "Osmium", weight: 190.23, category: "transition-metal", x: 8, y: 6 },
    { number: 77, symbol: "Ir", name: "Iridium", weight: 192.22, category: "transition-metal", x: 9, y: 6 },
    { number: 78, symbol: "Pt", name: "Platinum", weight: 195.08, category: "transition-metal", x: 10, y: 6 },
    { number: 79, symbol: "Au", name: "Gold", weight: 196.97, category: "transition-metal", x: 11, y: 6 },
    { number: 80, symbol: "Hg", name: "Mercury", weight: 200.59, category: "transition-metal", x: 12, y: 6 },
    { number: 81, symbol: "Tl", name: "Thallium", weight: 204.38, category: "post-transition", x: 13, y: 6 },
    { number: 82, symbol: "Pb", name: "Lead", weight: 207.2, category: "post-transition", x: 14, y: 6 },
    { number: 83, symbol: "Bi", name: "Bismuth", weight: 208.98, category: "post-transition", x: 15, y: 6 },
    { number: 84, symbol: "Po", name: "Polonium", weight: 209, category: "post-transition", x: 16, y: 6 },
    { number: 85, symbol: "At", name: "Astatine", weight: 210, category: "halogen", x: 17, y: 6 },
    { number: 86, symbol: "Rn", name: "Radon", weight: 222, category: "noble-gas", x: 18, y: 6 },
    
    // Period 7
    { number: 87, symbol: "Fr", name: "Francium", weight: 223, category: "alkali-metal", x: 1, y: 7 },
    { number: 88, symbol: "Ra", name: "Radium", weight: 226, category: "alkaline-earth", x: 2, y: 7 },
    { number: 89, symbol: "Ac", name: "Actinium", weight: 227, category: "actinide", x: 3, y: 7 },
    { number: 104, symbol: "Rf", name: "Rutherfordium", weight: 267, category: "transition-metal", x: 4, y: 7 },
    { number: 105, symbol: "Db", name: "Dubnium", weight: 268, category: "transition-metal", x: 5, y: 7 },
    { number: 106, symbol: "Sg", name: "Seaborgium", weight: 269, category: "transition-metal", x: 6, y: 7 },
    { number: 107, symbol: "Bh", name: "Bohrium", weight: 270, category: "transition-metal", x: 7, y: 7 },
    { number: 108, symbol: "Hs", name: "Hassium", weight: 269, category: "transition-metal", x: 8, y: 7 },
    { number: 109, symbol: "Mt", name: "Meitnerium", weight: 278, category: "transition-metal", x: 9, y: 7 },
    { number: 110, symbol: "Ds", name: "Darmstadtium", weight: 281, category: "transition-metal", x: 10, y: 7 },
    { number: 111, symbol: "Rg", name: "Roentgenium", weight: 282, category: "transition-metal", x: 11, y: 7 },
    { number: 112, symbol: "Cn", name: "Copernicium", weight: 285, category: "transition-metal", x: 12, y: 7 },
    { number: 113, symbol: "Nh", name: "Nihonium", weight: 286, category: "post-transition", x: 13, y: 7 },
    { number: 114, symbol: "Fl", name: "Flerovium", weight: 289, category: "post-transition", x: 14, y: 7 },
    { number: 115, symbol: "Mc", name: "Moscovium", weight: 290, category: "post-transition", x: 15, y: 7 },
    { number: 116, symbol: "Lv", name: "Livermorium", weight: 293, category: "post-transition", x: 16, y: 7 },
    { number: 117, symbol: "Ts", name: "Tennessine", weight: 294, category: "halogen", x: 17, y: 7 },
    { number: 118, symbol: "Og", name: "Oganesson", weight: 294, category: "noble-gas", x: 18, y: 7 },
    
    // Lanthanides (Period 6 - separate row)
    { number: 58, symbol: "Ce", name: "Cerium", weight: 140.12, category: "lanthanide", x: 4, y: 9 },
    { number: 59, symbol: "Pr", name: "Praseodymium", weight: 140.91, category: "lanthanide", x: 5, y: 9 },
    { number: 60, symbol: "Nd", name: "Neodymium", weight: 144.24, category: "lanthanide", x: 6, y: 9 },
    { number: 61, symbol: "Pm", name: "Promethium", weight: 145, category: "lanthanide", x: 7, y: 9 },
    { number: 62, symbol: "Sm", name: "Samarium", weight: 150.36, category: "lanthanide", x: 8, y: 9 },
    { number: 63, symbol: "Eu", name: "Europium", weight: 151.96, category: "lanthanide", x: 9, y: 9 },
    { number: 64, symbol: "Gd", name: "Gadolinium", weight: 157.25, category: "lanthanide", x: 10, y: 9 },
    { number: 65, symbol: "Tb", name: "Terbium", weight: 158.93, category: "lanthanide", x: 11, y: 9 },
    { number: 66, symbol: "Dy", name: "Dysprosium", weight: 162.50, category: "lanthanide", x: 12, y: 9 },
    { number: 67, symbol: "Ho", name: "Holmium", weight: 164.93, category: "lanthanide", x: 13, y: 9 },
    { number: 68, symbol: "Er", name: "Erbium", weight: 167.26, category: "lanthanide", x: 14, y: 9 },
    { number: 69, symbol: "Tm", name: "Thulium", weight: 168.93, category: "lanthanide", x: 15, y: 9 },
    { number: 70, symbol: "Yb", name: "Ytterbium", weight: 173.05, category: "lanthanide", x: 16, y: 9 },
    { number: 71, symbol: "Lu", name: "Lutetium", weight: 174.97, category: "lanthanide", x: 17, y: 9 },
    
    // Actinides (Period 7 - separate row)
    { number: 90, symbol: "Th", name: "Thorium", weight: 232.04, category: "actinide", x: 4, y: 10 },
    { number: 91, symbol: "Pa", name: "Protactinium", weight: 231.04, category: "actinide", x: 5, y: 10 },
    { number: 92, symbol: "U", name: "Uranium", weight: 238.03, category: "actinide", x: 6, y: 10 },
    { number: 93, symbol: "Np", name: "Neptunium", weight: 237, category: "actinide", x: 7, y: 10 },
    { number: 94, symbol: "Pu", name: "Plutonium", weight: 244, category: "actinide", x: 8, y: 10 },
    { number: 95, symbol: "Am", name: "Americium", weight: 243, category: "actinide", x: 9, y: 10 },
    { number: 96, symbol: "Cm", name: "Curium", weight: 247, category: "actinide", x: 10, y: 10 },
    { number: 97, symbol: "Bk", name: "Berkelium", weight: 247, category: "actinide", x: 11, y: 10 },
    { number: 98, symbol: "Cf", name: "Californium", weight: 251, category: "actinide", x: 12, y: 10 },
    { number: 99, symbol: "Es", name: "Einsteinium", weight: 252, category: "actinide", x: 13, y: 10 },
    { number: 100, symbol: "Fm", name: "Fermium", weight: 257, category: "actinide", x: 14, y: 10 },
    { number: 101, symbol: "Md", name: "Mendelevium", weight: 258, category: "actinide", x: 15, y: 10 },
    { number: 102, symbol: "No", name: "Nobelium", weight: 259, category: "actinide", x: 16, y: 10 },
    { number: 103, symbol: "Lr", name: "Lawrencium", weight: 262, category: "actinide", x: 17, y: 10 }
];

// Enhanced element descriptions
const elementDescriptions = {
    1: "Hydrogen is the lightest and most abundant element in the universe. It's a colorless, odorless gas that forms water when burned with oxygen. Hydrogen fuels stars through nuclear fusion.",
    2: "Helium is a noble gas that's lighter than air. It's used in balloons, as a cooling medium for MRI machines, and in breathing mixtures for deep-sea diving. It was first discovered in the Sun's spectrum.",
    3: "Lithium is the lightest metal and is used in rechargeable batteries for phones and electric vehicles. It's also used in psychiatric medications to treat bipolar disorder.",
    6: "Carbon is the basis for all known life on Earth. It forms more compounds than any other element and exists in several allotropes including diamond, graphite, and graphene. Carbon dating is used to determine the age of ancient objects.",
    7: "Nitrogen makes up 78% of Earth's atmosphere. It's essential for proteins and DNA in living organisms. Liquid nitrogen is used as a coolant in scientific and medical applications.",
    8: "Oxygen is essential for most life forms. It makes up about 21% of Earth's atmosphere and is the third most abundant element in the universe. Oxygen therapy is used in medical treatments.",
    13: "Aluminum is the most abundant metal in Earth's crust. It's lightweight, corrosion-resistant, and used in everything from aircraft to beverage cans. It was once more valuable than gold!",
    14: "Silicon is the second most abundant element in Earth's crust. It's essential for computer chips and solar cells. Silicon Valley is named after this element's importance in technology.",
    26: "Iron is the most common element on Earth by mass. It's crucial for steel production and is essential for blood hemoglobin in animals. The Earth's core is mostly iron.",
    29: "Copper has been used for thousands of years. It's an excellent conductor of electricity and heat, and is used in wiring and plumbing. The Statue of Liberty is made of copper.",
    47: "Silver has the highest electrical conductivity of any element. It's used in jewelry, photography, and electronic components. Silver nanoparticles have antibacterial properties.",
    50: "Tin has been used since antiquity in bronze alloys. It's used to coat other metals to prevent corrosion (tin cans). Tin cries' when bent due to crystal structure changes.",
    79: "Gold has been highly valued throughout history for its beauty and resistance to tarnish. It's used in jewelry, electronics, and as a financial standard. All the gold ever mined would fit in about three Olympic-sized swimming pools.",
    82: "Lead has been used since ancient times for pipes, roofing, and weights. It's dense and corrosion-resistant but toxic. Lead-acid batteries are still widely used in vehicles.",
    92: "Uranium is the heaviest naturally occurring element. It's used as fuel in nuclear power plants and was used in the first atomic bombs. Uranium glass glows green under UV light.",
    
    // Default description for elements without specific descriptions
    default: "This element has unique chemical properties and plays important roles in various industrial, biological, or technological applications. Research continues to uncover new uses and characteristics of this element."
};

// Function to get description for any element
function getElementDescription(elementNumber) {
    return elementDescriptions[elementNumber] || elementDescriptions.default;
}