class PeriodicTable {
    constructor() {
        this.elements = elements;
        this.filteredElements = [...elements];
        this.init();
    }

    init() {
        this.renderTable();
        this.setupEventListeners();
    }

    renderTable() {
        const table = document.getElementById('periodic-table');
        table.innerHTML = '';

        // Create 10 rows (7 main periods + lanthanides + actinides + 1 spacer)
        for (let y = 1; y <= 10; y++) {
            for (let x = 1; x <= 18; x++) {
                const element = this.findElementAt(x, y);
                const cell = this.createCell(element, x, y);
                table.appendChild(cell);
            }
        }

        // Add labels for lanthanides and actinides
        this.addSpecialRowLabels();
    }

    findElementAt(x, y) {
        return this.filteredElements.find(el => el.x === x && el.y === y);
    }

    createCell(element, x, y) {
        const cell = document.createElement('div');
        
        if (element) {
            cell.className = `element ${element.category}`;
            cell.innerHTML = `
                <div class="element-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
                <div class="element-weight">${element.weight.toFixed(2)}</div>
            `;
            cell.addEventListener('click', () => this.showElementDetail(element));
            
            // Add tooltip
            cell.title = `${element.name} (${element.symbol}) - ${this.formatCategory(element.category)}`;
        } else {
            cell.className = 'empty';
            
            // Add special spacing for lanthanides/actinides area
            if (y === 8) {
                cell.style.gridRow = '8';
                cell.style.gridColumn = '1 / -1';
                cell.style.height = '20px';
                cell.style.backgroundColor = 'transparent';
            }
        }

        return cell;
    }

    addSpecialRowLabels() {
        const table = document.getElementById('periodic-table');
        
        // Add lanthanides label
        const lanthanidesLabel = document.createElement('div');
        lanthanidesLabel.className = 'row-label';
        lanthanidesLabel.textContent = 'Lanthanides';
        lanthanidesLabel.style.gridRow = '9';
        lanthanidesLabel.style.gridColumn = '1 / 4';
        lanthanidesLabel.style.display = 'flex';
        lanthanidesLabel.style.alignItems = 'center';
        lanthanidesLabel.style.justifyContent = 'center';
        lanthanidesLabel.style.fontSize = '0.8rem';
        lanthanidesLabel.style.color = '#fff';
        lanthanidesLabel.style.fontWeight = 'bold';
        table.appendChild(lanthanidesLabel);

        // Add actinides label
        const actinidesLabel = document.createElement('div');
        actinidesLabel.className = 'row-label';
        actinidesLabel.textContent = 'Actinides';
        actinidesLabel.style.gridRow = '10';
        actinidesLabel.style.gridColumn = '1 / 4';
        actinidesLabel.style.display = 'flex';
        actinidesLabel.style.alignItems = 'center';
        actinidesLabel.style.justifyContent = 'center';
        actinidesLabel.style.fontSize = '0.8rem';
        actinidesLabel.style.color = '#fff';
        actinidesLabel.style.fontWeight = 'bold';
        table.appendChild(actinidesLabel);
    }

    showElementDetail(element) {
        const detail = document.getElementById('element-detail');
        const detailInfo = document.getElementById('detail-info');
        
        const description = getElementDescription(element.number);

        detailInfo.innerHTML = `
            <h2 style="color: inherit;">${element.name} (${element.symbol})</h2>
            <div class="element-properties">
                <p><strong>Atomic Number:</strong> ${element.number}</p>
                <p><strong>Atomic Weight:</strong> ${element.weight}</p>
                <p><strong>Category:</strong> ${this.formatCategory(element.category)}</p>
                <p><strong>Position:</strong> Period ${this.getPeriod(element.y)}, Group ${element.x}</p>
            </div>
            <div class="element-description">
                <p>${description}</p>
            </div>
            <div class="element-fun-fact">
                <p><strong>Fun Fact:</strong> ${this.getFunFact(element)}</p>
            </div>
        `;

        // Set color based on element category
        detailInfo.style.color = this.getCategoryColor(element.category);
        detail.style.display = 'flex';
    }

    getPeriod(y) {
        // Convert grid row to actual period
        if (y <= 7) return y;
        if (y === 9) return 6; // Lanthanides are in period 6
        if (y === 10) return 7; // Actinides are in period 7
        return y;
    }

    getCategoryColor(category) {
        const colors = {
            'alkali-metal': '#ff6b6b',
            'alkaline-earth': '#ffa726',
            'transition-metal': '#29b6f6',
            'post-transition': '#66bb6a',
            'metalloid': '#ab47bc',
            'nonmetal': '#ec407a',
            'halogen': '#7e57c2',
            'noble-gas': '#26c6da',
            'lanthanide': '#5c6bc0',
            'actinide': '#ef5350'
        };
        return colors[category] || '#333';
    }

    formatCategory(category) {
        const categoryNames = {
            'alkali-metal': 'Alkali Metal',
            'alkaline-earth': 'Alkaline Earth Metal',
            'transition-metal': 'Transition Metal',
            'post-transition': 'Post-Transition Metal',
            'metalloid': 'Metalloid',
            'nonmetal': 'Nonmetal',
            'halogen': 'Halogen',
            'noble-gas': 'Noble Gas',
            'lanthanide': 'Lanthanide',
            'actinide': 'Actinide'
        };
        return categoryNames[category] || category;
    }

    getFunFact(element) {
        const funFacts = {
            1: "Hydrogen is the only element that can exist without neutrons!",
            2: "Helium was discovered on the Sun before it was found on Earth.",
            6: "Diamond and graphite are both made of pure carbon - just arranged differently!",
            8: "Oxygen makes up about 65% of the human body by mass.",
            13: "Aluminum was once considered a precious metal - Napoleon III served state dinners on aluminum plates!",
            14: "Pure silicon is a semiconductor, which makes modern computers possible.",
            26: "The Eiffel Tower grows about 6 inches in summer due to thermal expansion of iron.",
            29: "The average home contains about 400 pounds of copper in wiring and plumbing.",
            47: "The word 'silver' comes from the Anglo-Saxon word 'seolfor'.",
            79: "A single gram of gold can be beaten into a sheet of 1 square meter!",
            82: "The Romans used lead to make water pipes - the word 'plumbing' comes from 'plumbum', the Latin word for lead.",
            92: "Uranium is about 40 times more abundant than silver in the Earth's crust."
        };
        
        return funFacts[element.number] || "This element has fascinating properties that scientists continue to study!";
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('search').addEventListener('input', (e) => {
            this.filterElements(e.target.value.toLowerCase());
        });

        // Category filter
        document.getElementById('category-filter').addEventListener('change', (e) => {
            this.filterByCategory(e.target.value);
        });

        // Close detail view
        document.getElementById('close-detail').addEventListener('click', () => {
            document.getElementById('element-detail').style.display = 'none';
        });

        // Close detail when clicking outside
        document.getElementById('element-detail').addEventListener('click', (e) => {
            if (e.target.id === 'element-detail') {
                e.target.style.display = 'none';
            }
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.getElementById('element-detail').style.display = 'none';
            }
        });
    }

    filterElements(searchTerm) {
        if (!searchTerm) {
            this.filteredElements = [...this.elements];
        } else {
            this.filteredElements = this.elements.filter(element => 
                element.name.toLowerCase().includes(searchTerm) ||
                element.symbol.toLowerCase().includes(searchTerm) ||
                element.number.toString().includes(searchTerm)
            );
        }
        this.renderTable();
    }

    filterByCategory(category) {
        if (category === 'all') {
            this.filteredElements = [...this.elements];
        } else {
            this.filteredElements = this.elements.filter(element => 
                element.category === category
            );
        }
        this.renderTable();
    }
}

// Initialize the periodic table when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PeriodicTable();
});