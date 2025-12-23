window.questionRegistry = window.questionRegistry || {};
window.questionRegistry["physics_12th_ch3"] = [
    {
        numb: 1,
        question: "The storage battery of a car has an emf of 12 V. If the internal resistance of the battery is 0.4 Ω, what is the maximum current that can be drawn from the battery?",
        answer: "30 A",
        options: ["30 A", "12 A", "4.8 A", "20 A"],
        explanation: "Maximum current I = E/r = 12 / 0.4 = 30 A (R=0 for max current)."
    },
    {
        numb: 2,
        question: "A battery of emf 10 V and internal resistance 3 Ω is connected to a resistor. If the current is 0.5 A, what is the resistance of the resistor?",
        answer: "17 Ω",
        options: ["17 Ω", "20 Ω", "3 Ω", "12 Ω"],
        explanation: "I = E / (R + r) => 0.5 = 10 / (R + 3) => R + 3 = 20 => R = 17 Ω."
    },
    {
        numb: 3,
        question: "Three resistors 1 Ω, 2 Ω and 3 Ω are combined in series. What is the total resistance?",
        answer: "6 Ω",
        options: ["6 Ω", "1 Ω", "3 Ω", "11 Ω"],
        explanation: "Rs = R1 + R2 + R3 = 1 + 2 + 3 = 6 Ω."
    },
    {
        numb: 4,
        question: "If 1 Ω, 2 Ω, 3 Ω resistors in series are connected to a 12 V battery, what is the potential drop across the 2 Ω resistor?",
        answer: "4 V",
        options: ["4 V", "2 V", "6 V", "12 V"],
        explanation: "Current I = V / Rs = 12 / 6 = 2 A. V2 = I * R2 = 2 * 2 = 4 V."
    },
    {
        numb: 5,
        question: "Three resistors 2 Ω, 4 Ω and 5 Ω are combined in parallel. What is the total resistance?",
        answer: "20/19 Ω",
        options: ["20/19 Ω", "11 Ω", "1.5 Ω", "19/20 Ω"],
        explanation: "1/Rp = 1/2 + 1/4 + 1/5 = (10+5+4)/20 = 19/20. So Rp = 20/19 Ω."
    },
    {
        numb: 6,
        question: "At room temperature (27.0 °C) the resistance of a heating element is 100 Ω. If resistance becomes 117 Ω and α = 1.70 x 10⁻⁴ °C⁻¹, what is the temperature?",
        answer: "1027 °C",
        options: ["1027 °C", "1000 °C", "1170 °C", "270 °C"],
        explanation: "Rt = R0(1 + αΔt) => 117 = 100(1 + 1.7x10⁻⁴ * (t-27)) => 0.17 = 1.7x10⁻⁴ * (t-27) => 1000 = t-27 => t = 1027 °C."
    },
    {
        numb: 7,
        question: "A wire of length 15 m and area 6.0 x 10⁻⁷ m² has resistance 5.0 Ω. Its resistivity is:",
        answer: "2.0 x 10⁻⁷ Ω m",
        options: ["2.0 x 10⁻⁷ Ω m", "1.0 x 10⁻⁷ Ω m", "3.0 x 10⁻⁷ Ω m", "0.2 x 10⁻⁷ Ω m"],
        explanation: "ρ = RA / l = 5 * 6x10⁻⁷ / 15 = 2.0 x 10⁻⁷ Ω m."
    },
    {
        numb: 8,
        question: "A silver wire has resistance 2.1 Ω at 27.5 °C and 2.7 Ω at 100 °C. The temperature coefficient α is:",
        answer: "0.0039 °C⁻¹",
        options: ["0.0039 °C⁻¹", "0.0019 °C⁻¹", "0.0059 °C⁻¹", "0.039 °C⁻¹"],
        explanation: "α = (R2-R1) / (R1(t2-t1)) = (2.7-2.1) / (2.1 * (100-27.5)) = 0.6 / (2.1 * 72.5) ≈ 0.0039 °C⁻¹."
    },
    {
        numb: 9,
        question: "Current in a circuit is I. If the drift velocity is doubled, the current becomes:",
        answer: "2I",
        options: ["2I", "I/2", "4I", "I"],
        explanation: "I = neAVd. So I ∝ Vd."
    },
    {
        numb: 10,
        question: "A metre bridge balance point is 39.5 cm from end A when Y = 12.5 Ω. The resistance X is:",
        answer: "8.16 Ω",
        options: ["8.16 Ω", "12.5 Ω", "19.7 Ω", "3.95 Ω"],
        explanation: "X = (l / (100-l)) * Y = (39.5 / 60.5) * 12.5 ≈ 8.16 Ω."
    },
    {
        numb: 11,
        question: "Why are connections between resistors in a Wheatstone bridge made of thick copper strips?",
        answer: "To minimize resistance of connections",
        options: ["To minimize resistance of connections", "To increase current", "To look beautiful", "To prevent heating"],
        explanation: "Thick strips have large area, hence very small resistance, ensuring bridge values are accurate."
    },
    {
        numb: 12,
        question: "In a potentiometer, a cell of 1.25 V gives balance at 35 cm. If balance shifts to 63 cm, the new cell's emf is:",
        answer: "2.25 V",
        options: ["2.25 V", "1.5 V", "2.0 V", "2.5 V"],
        explanation: "E2 = (l2 / l1) * E1 = (63 / 35) * 1.25 = 1.8 * 1.25 = 2.25 V."
    },
    {
        numb: 13,
        question: "The terminal voltage of a battery during charging is V =:",
        answer: "E + Ir",
        options: ["E + Ir", "E - Ir", "IR", "V/R"],
        explanation: "During charging, supply voltage must overcome emf and internal drop."
    },
    {
        numb: 14,
        question: "Number density of electrons in copper is 8.5 x 10²⁸ m⁻³. For I=3A, l=3m, A=2x10⁻⁶ m², drift time is:",
        answer: "7.5 hours approx",
        options: ["7.5 hours approx", "1 hour", "24 hours", "10 minutes"],
        explanation: "t = neAl / I = (8.5x10²⁸ * 1.6x10⁻¹⁹ * 2x10⁻⁶ * 3) / 3 = 2.72 x 10⁴ s ≈ 7.55 hours."
    },
    {
        numb: 15,
        question: "Internal resistance of a cell depends on:",
        answer: "All of the above",
        options: ["Distance between electrodes", "Nature of electrolyte", "Area of electrodes", "All of the above"],
        explanation: "Standard factors affecting internal resistance."
    },
    {
        numb: 16,
        question: "Kirchhoff's first law (ΣI = 0) is based on conservation of:",
        answer: "Charge",
        options: ["Charge", "Energy", "Mass", "Momentum"],
        explanation: "Junction rule implies charge doesn't accumulate at a point."
    },
    {
        numb: 17,
        question: "Kirchhoff's second law (ΣV = 0) is based on conservation of:",
        answer: "Energy",
        options: ["Energy", "Charge", "Mass", "Momentum"],
        explanation: "Loop rule implies total work done in a closed path is zero."
    },
    {
        numb: 18,
        question: "Ohm's law is valid for:",
        answer: "Metallic conductors at constant temperature",
        options: ["Metallic conductors at constant temperature", "Semiconductors", "Diodes", "Electrolytes"],
        explanation: "Ohm's law requires physical conditions to remain constant."
    },
    {
        numb: 19,
        question: "The resistivity of insulators ______ with increase in temperature.",
        answer: "Decreases",
        options: ["Decreases", "Increases", "Stays same", "Becomes zero"],
        explanation: "More carriers are generated due to thermal energy."
    },
    {
        numb: 20,
        question: "Potentiometer is preferred over voltmeter for measuring emf because:",
        answer: "It draws no current at balance point",
        options: ["It draws no current at balance point", "It is smaller", "It is cheaper", "It is more robust"],
        explanation: "It measures the 'true' emf without any internal drop since I=0."
    },
    {
        numb: 21,
        question: "SI unit of current density is:",
        answer: "A / m²",
        options: ["A / m²", "A m", "A / m", "None"],
        explanation: "J = I / A."
    },
    {
        numb: 22,
        question: "Mobility of electrons (μ) is defined as:",
        answer: "Vd / E",
        options: ["Vd / E", "E / Vd", "Vd * E", "neAVd"],
        explanation: "Drift velocity per unit electric field."
    },
    {
        numb: 23,
        question: "When n identical resistors are in series, R_eq is:",
        answer: "nR",
        options: ["nR", "R/n", "R + n", "n²R"],
        explanation: "Resistances add up in series."
    },
    {
        numb: 24,
        question: "When n identical resistors are in parallel, R_eq is:",
        answer: "R/n",
        options: ["R/n", "nR", "R - n", "R/n²"],
        explanation: "1/R_eq = n/R."
    },
    {
        numb: 25,
        question: "The power dissipated in a resistor is:",
        answer: "I²R",
        options: ["I²R", "IR", "V/R", "IV²"],
        explanation: "P = VI = (IR)I = I²R."
    },
    {
        numb: 26,
        question: "Electric energy is measured in:",
        answer: "kWh",
        options: ["kWh", "kW", "Watt", "Volt"],
        explanation: "Energy = Power * Time."
    },
    {
        numb: 27,
        question: "1 kWh is equal to:",
        answer: "3.6 x 10⁶ J",
        options: ["3.6 x 10⁶ J", "1000 J", "3600 J", "1 J"],
        explanation: "1000W * 3600s = 3.6x10⁶ J."
    },
    {
        numb: 28,
        question: "In mixed grouping, current is max when external R equals:",
        answer: "Internal Resistance of bank (nr/m)",
        options: ["Internal Resistance of bank (nr/m)", "Zero", "Infinite", "R/n"],
        explanation: "Maximum Power Transfer Theorem."
    },
    {
        numb: 29,
        question: "Wheatstone bridge is most sensitive when all four resistances are:",
        answer: "Of same order",
        options: ["Of same order", "Very large", "Very small", "Zero"],
        explanation: "Accuracy is highest when P, Q, R, S are comparable."
    },
    {
        numb: 30,
        question: "The resistance of a conductor is R. If stretched to double its length, new R is:",
        answer: "4R",
        options: ["4R", "2R", "R/2", "R/4"],
        explanation: "l becomes 2l, A becomes A/2. R' = ρ(2l)/(A/2) = 4R."
    },
    {
        numb: 31,
        question: "Color code for a resistor with Gold as 4th band means tolerance is:",
        answer: "5%",
        options: ["5%", "10%", "20%", "1%"],
        explanation: "Gold = 5%, Silver = 10%, No color = 20%."
    },
    {
        numb: 32,
        question: "Electron flow direction is:",
        answer: "From low potential to high",
        options: ["From low potential to high", "From high potential to low", "Same as current", "Circular"],
        explanation: "Electrons are negative and move towards positive."
    },
    {
        numb: 33,
        question: "Dimension of resistance is:",
        answer: "[ML²T⁻³A⁻²]",
        options: ["[ML²T⁻³A⁻²]", "[ML²T⁻²A⁻²]", "[MLT⁻³A⁻¹]", "[M⁻¹L⁻²T⁴A²]"],
        explanation: "R = V/I = [ML²T⁻³A⁻¹] / [A] = [ML²T⁻³A⁻²]."
    },
    {
        numb: 34,
        question: "Unit of conductivity (σ) is:",
        answer: "Ω⁻¹ m⁻¹",
        options: ["Ω⁻¹ m⁻¹", "Ω m", "Ω / m", "m / Ω"],
        explanation: "Reciprocal of resistivity."
    },
    {
        numb: 35,
        question: "Which material has negative temperature coefficient of resistance?",
        answer: "Silicon",
        options: ["Silicon", "Copper", "Aluminum", "Silver"],
        explanation: "Semiconductors have negative α."
    },
    {
        numb: 36,
        question: "When a bird sits on a high voltage wire, it's not shocked because:",
        answer: "Potential difference across its body is zero",
        options: ["Potential difference across its body is zero", "It's an insulator", "Wire is insulated", "Current is low"],
        explanation: "Zero PD means zero current through bird."
    },
    {
        numb: 37,
        question: "Current is a ______ quantity.",
        answer: "Scalar",
        options: ["Scalar", "Vector", "Tensor", "Dimensionless"],
        explanation: "Current follows algebraic addition, not vector addition."
    },
    {
        numb: 38,
        question: "Drift velocity of electrons is approx:",
        answer: "10⁻⁴ m/s",
        options: ["10⁻⁴ m/s", "10⁸ m/s", "3 x 10⁸ m/s", "0"],
        explanation: "Very slow average motion due to collisions."
    },
    {
        numb: 39,
        question: "The resistivity of alloys is _____ than constituent metals.",
        answer: "Higher",
        options: ["Higher", "Lower", "Same", "Zero"],
        explanation: "Impurities and alloying increase scattering."
    },
    {
        numb: 40,
        question: "Slide wire bridge works on the principle of:",
        answer: "Balanced Wheatstone Bridge",
        options: ["Balanced Wheatstone Bridge", "Potentiometer", "Ohm's Law", "Faraday's Law"],
        explanation: "Uses ratio of lengths for balancing."
    },
    {
        numb: 41,
        question: "Resistance of an ideal ammeter should be:",
        answer: "Zero",
        options: ["Zero", "Infinite", "1 Ω", "High"],
        explanation: "To not affect the current being measured."
    },
    {
        numb: 42,
        question: "Resistance of an ideal voltmeter should be:",
        answer: "Infinite",
        options: ["Infinite", "Zero", "1 Ω", "Low"],
        explanation: "To not draw any current from the circuit."
    },
    {
        numb: 43,
        question: "A fuse wire should have:",
        answer: "Low melting point and high resistance",
        options: ["Low melting point and high resistance", "High melting point", "Low resistance", "Thick diameter"],
        explanation: "To melt quickly under high current."
    },
    {
        numb: 44,
        question: "Potentiometer wire is generally made of:",
        answer: "Constantan / Manganin",
        options: ["Constantan / Manganin", "Copper", "Silver", "Iron"],
        explanation: "Alloys with very low temperature coefficient of resistance."
    },
    {
        numb: 45,
        question: "Terminal potential V of a cell in open circuit is:",
        answer: "V = E",
        options: ["V = E", "V < E", "V > E", "V = 0"],
        explanation: "No current means no internal voltage drop (Ir=0)."
    },
    {
        numb: 46,
        question: "Terminal potential V of a cell while discharging is:",
        answer: "V = E - Ir",
        options: ["V = E - Ir", "V = E + Ir", "V = E", "V = 0"],
        explanation: "Internal resistance reduces available voltage."
    },
    {
        numb: 47,
        question: "Superconductors have resistivity equal to:",
        answer: "Zero",
        options: ["Zero", "Infinite", "Very high", "Negative"],
        explanation: "At critical temperature, resistance vanishes."
    },
    {
        numb: 48,
        question: "Sensitivity of potentiometer can be increased by:",
        answer: "Increasing length of wire",
        options: ["Increasing length of wire", "Increasing current", "Decreasing length", "Using thick wire"],
        explanation: "Reduces potential gradient, allowing smaller measurements."
    },
    {
        numb: 49,
        question: "Unit of potential gradient is:",
        answer: "V / m",
        options: ["V / m", "V m", "V / m²", "N / C"],
        explanation: "Potential drop per unit length."
    },
    {
        numb: 50,
        question: "External resistance R for maximum power from cell (E, r) is:",
        answer: "R = r",
        options: ["R = r", "R = 2r", "R = 0", "R = ∞"],
        explanation: "Condition for maximum power transfer."
    },
    {
        numb: 51,
        question: "For an Ohmic conductor, the V-I graph is:",
        answer: "A straight line passing through origin",
        options: ["A straight line passing through origin", "A parabola", "A curve", "Horizontal line"],
        explanation: "V = IR. Since V is proportional to I, the graph is linear."
    },
    {
        numb: 52,
        question: "The slope of the V-I graph for a conductor represents:",
        answer: "Resistance",
        options: ["Resistance", "Conductance", "Resistivity", "Current"],
        explanation: "V/I = R. Hence slope of V vs I is Resistance."
    },
    {
        numb: 53,
        question: "The slope of I-V graph for a conductor represents:",
        answer: "Conductance",
        options: ["Conductance", "Resistance", "Current Density", "Potential"],
        explanation: "I/V = 1/R = G (Conductance)."
    },
    {
        numb: 54,
        question: "Dimension of resistivity (ρ) is:",
        answer: "[ML³T⁻³A⁻²]",
        options: ["[ML³T⁻³A⁻²]", "[ML²T⁻³A⁻²]", "[ML³T⁻³A⁻¹]", "[MLT⁻³A⁻²]"],
        explanation: "ρ = RA/l = ([ML²T⁻³A⁻²] * [L²]) / [L] = [ML³T⁻³A⁻²]."
    },
    {
        numb: 55,
        question: "Ohm's law in vector form is relating:",
        answer: "J = σE",
        options: ["J = σE", "V = IR", "E = ρJ", "P = VI"],
        explanation: "J (Current density) is proportional to E (Electric field)."
    },
    {
        numb: 56,
        question: "Relating conductivity (σ) and resistivity (ρ):",
        answer: "σ = 1/ρ",
        options: ["σ = 1/ρ", "σ = ρ", "σ = ρ²", "σ = 1/ρ²"],
        explanation: "Conductivity is the reciprocal of resistivity."
    },
    {
        numb: 57,
        question: "Resistance of a wire of radius r is R. If radius is doubled, new resistance is:",
        answer: "R/4",
        options: ["R/4", "R/2", "2R", "4R"],
        explanation: "R ∝ 1/A ∝ 1/r². If r becomes 2r, R becomes R/4."
    },
    {
        numb: 58,
        question: "When a conductor is heated, its resistance:",
        answer: "Increases",
        options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
        explanation: "Thermal vibrations increase, leading to more frequent collisions of electrons."
    },
    {
        numb: 59,
        question: "When a semiconductor is heated, its resistance:",
        answer: "Decreases",
        options: ["Decreases", "Increases", "Stays same", "Becomes zero"],
        explanation: "The number of free charge carriers increases exponentially with temperature."
    },
    {
        numb: 60,
        question: "A material having almost zero temperature coefficient of resistance is:",
        answer: "Manganin",
        options: ["Manganin", "Copper", "Aluminum", "Silver"],
        explanation: "Alloys like Manganin and Constantan are used for standard resistors."
    },
    {
        numb: 61,
        question: "Emf of two cells E₁ and E₂ in series is:",
        answer: "E₁ + E₂",
        options: ["E₁ + E₂", "E₁ - E₂", "E₁ * E₂", "E₁ / E₂"],
        explanation: "Potentials add up in series orientation."
    },
    {
        numb: 62,
        question: "Emf of two identical cells (E) in parallel is:",
        answer: "E",
        options: ["E", "2E", "E/2", "Zero"],
        explanation: "In parallel, the potential difference remains the same across branches."
    },
    {
        numb: 63,
        question: "Nichrome is used as heating element because of its:",
        answer: "High resistivity and high melting point",
        options: ["High resistivity and high melting point", "Low resistance", "Thinness", "Shiny surface"],
        explanation: "It doesn't oxidize easily and provides high resistance for heat generation."
    },
    {
        numb: 64,
        question: "Tungsten is used for bulb filaments because of its:",
        answer: "Very high melting point",
        options: ["Very high melting point", "High conductivity", "Low cost", "Elasticity"],
        explanation: "It can withstand white heat without melting."
    },
    {
        numb: 65,
        question: "A shunt is a ______ resistance connected in ______ with a galvanometer.",
        answer: "Low, Parallel",
        options: ["Low, Parallel", "High, Parallel", "Low, Series", "High, Series"],
        explanation: "Shunt bypasses most current to convert galvanometer to ammeter."
    },
    {
        numb: 66,
        question: "To convert a galvanometer into a voltmeter, we connect:",
        answer: "High resistance in series",
        options: ["High resistance in series", "Low resistance in parallel", "High resistance in parallel", "Low resistance in series"],
        explanation: "Series resistance limits current and allows measuring high voltages."
    },
    {
        numb: 67,
        question: "Condition for balanced Wheatstone bridge (P, Q, R, S) is:",
        answer: "P/Q = R/S",
        options: ["P/Q = R/S", "PR = QS", "P+Q = R+S", "P-Q = R-S"],
        explanation: "Ratio of resistances in adjacent arms must be equal."
    },
    {
        numb: 68,
        question: "Why do we use Manganin for standard resistors?",
        answer: "Low temperature coefficient and high resistivity",
        options: ["Low temperature coefficient and high resistivity", "High conductivity", "It's a magnet", "Low cost"],
        explanation: "Ensures resistance stays constant despite heat / temp changes."
    },
    {
        numb: 69,
        question: "Drift velocity is ______ than the random thermal velocity of electrons.",
        answer: "Much smaller",
        options: ["Much smaller", "Much larger", "Equal", "Zero"],
        explanation: "Random speed is ~10⁵ m/s, drift speed is ~10⁻⁴ m/s."
    },
    {
        numb: 70,
        question: "If the length of a potentiometer wire is increased, its sensitivity:",
        answer: "Increases",
        options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
        explanation: "Longer wire means smaller potential gradient (V/l), allowing finer balance."
    },
    {
        numb: 71,
        question: "Dimensional formula for conductivty (σ) is:",
        answer: "[M⁻¹L⁻³T³A²]",
        options: ["[M⁻¹L⁻³T³A²]", "[ML³T⁻³A⁻²]", "[M⁻¹L⁻²T⁴A²]", "[MLT⁻³A⁻¹]"],
        explanation: "Inverse of resistivity dimensionality."
    },
    {
        numb: 72,
        question: "Unit of electric susceptibility is:",
        answer: "Dimensionless",
        options: ["Dimensionless", "Farad", "Volt", "Coulomb"],
        explanation: "It is a ratio constant."
    },
    {
        numb: 73,
        question: "Ampere-hour (Ah) is the unit of:",
        answer: "Electric Charge",
        options: ["Electric Charge", "Energy", "Current", "Power"],
        explanation: "Q = I * t. Ampere * Hour = Current * Time = Charge."
    },
    {
        numb: 74,
        question: "Watt-hour (Wh) is the unit of:",
        answer: "Electric Energy",
        options: ["Electric Energy", "Power", "Voltage", "Charge"],
        explanation: "E = P * t. Watt * Hour = Power * Time = Energy."
    },
    {
        numb: 75,
        question: "The current flowing through a conductor is directly proportional to:",
        answer: "Drift velocity",
        options: ["Drift velocity", "Mass of electron", "Time", "None"],
        explanation: "I = neAVd."
    },
    {
        numb: 76,
        question: "In a series combination of resistors, which quantity is same for all?",
        answer: "Current",
        options: ["Current", "Potential Difference", "Power", "Resistivity"],
        explanation: "Charge has only one path to flow."
    },
    {
        numb: 77,
        question: "In a parallel combination of resistors, which quantity is same for all?",
        answer: "Potential Difference",
        options: ["Potential Difference", "Current", "Power", "Heat generated"],
        explanation: "Each resistor is connected directly across the source terminals."
    },
    {
        numb: 80,
        question: "Fuses are always connected in ______ with the ______ wire.",
        answer: "Series, Phase/Live",
        options: ["Series, Phase/Live", "Parallel, Neutral", "Series, Earth", "Parallel, Phase"],
        explanation: "To cut off supply to the entire circuit in case of overload."
    },
    {
        numb: 81,
        question: "The first three bands on a resistor are Brown, Black, Red. Its value is:",
        answer: "1000 Ω",
        options: ["1000 Ω", "100 Ω", "10 Ω", "120 Ω"],
        explanation: "Brown(1), Black(0), Red(x10²). 10 x 100 = 1000 Ω."
    },
    {
        numb: 82,
        question: "Potentiometer measures the ______ of a cell.",
        answer: "True Electromotive Force (EMF)",
        options: ["True Electromotive Force (EMF)", "Current", "Internal Resistance only", "Total energy"],
        explanation: "Since it draws no current at balance point, it avoids internal resistance drop."
    },
    {
        numb: 83,
        question: "Work done in moving charge q through potential V is:",
        answer: "qV",
        options: ["qV", "q/V", "V/q", "qV²"],
        explanation: "Definition of potential: V = W/q."
    },
    {
        numb: 84,
        question: "A cell has emf E and internal resistance r. If connected to R=r, the terminal voltage is:",
        answer: "E/2",
        options: ["E/2", "E", "E/4", "Zero"],
        explanation: "V = E * R / (R+r). If R=r, V = E * r / (2r) = E/2."
    },
    {
        numb: 85,
        question: "Cells are connected in parallel when the external resistance is ______ internal resistance.",
        answer: "Much smaller than",
        options: ["Much smaller than", "Much larger than", "Equal to", "Infinite"],
        explanation: "Parallel grouping is effective when internal resistance is high and load is low."
    },
    {
        numb: 86,
        question: "Cells are connected in series when the external resistance is ______ internal resistance.",
        answer: "Much larger than",
        options: ["Much larger than", "Much smaller than", "Equal to", "Zero"],
        explanation: "Series grouping provides higher total emf to overcome high load resistance."
    },
    {
        numb: 87,
        question: "One electron volt (eV) is equal to energy of electron moved through:",
        answer: "1 Volt",
        options: ["1 Volt", "10 Volts", "1.6 Volts", "0.1 Volt"],
        explanation: "1 eV = 1.6 x 10⁻¹⁹ J."
    },
    {
        numb: 88,
        question: "Direction of current in an electrolyte is due to flow of:",
        answer: "Both positive and negative ions",
        options: ["Both positive and negative ions", "Electrons only", "Protons only", "Neutral atoms"],
        explanation: "Dissociated ions move towards respective electrodes."
    },
    {
        numb: 89,
        question: "Carrier density (n) in insulators is:",
        answer: "Very small",
        options: ["Very small", "Infinite", "Same as metals", "Large"],
        explanation: "Hence they do not conduct electricity."
    },
    {
        numb: 90,
        question: "Relaxation time (τ) ______ with increase in temperature of metals.",
        answer: "Decreases",
        options: ["Decreases", "Increases", "Stays same", "Doubles"],
        explanation: "Increased thermal vibration leads to more frequent scattering."
    },
    {
        numb: 91,
        question: "The area under Current (I) vs Time (t) graph gives:",
        answer: "Total Charge",
        options: ["Total Charge", "Work Done", "Power", "Voltage"],
        explanation: "Q = ∫ I dt."
    },
    {
        numb: 92,
        question: "If two resistors R₁ and R₂ are in series, power dissipation ratio is:",
        answer: "P₁ / P₂ = R₁ / R₂",
        options: ["P₁ / P₂ = R₁ / R₂", "P₁ / P₂ = R₂ / R₁", "1:1", "None"],
        explanation: "P = I²R. Since I is same, P ∝ R."
    },
    {
        numb: 93,
        question: "If two resistors R₁ and R₂ are in parallel, power dissipation ratio is:",
        answer: "P₁ / P₂ = R₂ / R₁",
        options: ["P₁ / P₂ = R₂ / R₁", "P₁ / P₂ = R₁ / R₂", "1:1", "None"],
        explanation: "P = V²/R. Since V is same, P ∝ 1/R."
    },
    {
        numb: 94,
        question: "The resistance of an ideal ammeter is:",
        answer: "Zero",
        options: ["Zero", "Infinite", "1 Ω", "High"],
        explanation: "So that it doesn't drop any voltage in the circuit line."
    },
    {
        numb: 95,
        question: "The resistance of an ideal voltmeter is:",
        answer: "Infinite",
        options: ["Infinite", "Zero", "1 Ω", "Low"],
        explanation: "So that it doesn't draw any current from parallel branches."
    },
    {
        numb: 96,
        question: "To increase the range of an ammeter, we should use a ______ shunt.",
        answer: "Smaller",
        options: ["Smaller", "Larger", "Constant", "None"],
        explanation: "Smaller R_s bypasses more current from the galvanometer."
    },
    {
        numb: 97,
        question: "To increase the range of a voltmeter, we should use a ______ series resistor.",
        answer: "Larger",
        options: ["Larger", "Smaller", "Constant", "None"],
        explanation: "Larger R_high absorbs more voltage for the same max current."
    },
    {
        numb: 98,
        question: "Kirchhoff's laws are applied to circuits using ______ current.",
        answer: "Both AC and DC",
        options: ["Both AC and DC", "Only DC", "Only AC", "None"],
        explanation: "Based on universal conservation principles."
    },
    {
        numb: 99,
        question: "Metre bridge wire is usually 1 metre long. What is it made of?",
        answer: "Manganin / Constantan",
        options: ["Manganin / Constantan", "Steel", "Aluminum", "Iron"],
        explanation: "High resistance and low temp coefficient alloys."
    },
    {
        numb: 100,
        question: "The ratio of drift velocity (Vd) to electric field (E) is called:",
        answer: "Mobility",
        options: ["Mobility", "Conductivity", "Resistance", "Charge density"],
        explanation: "μ = Vd / E."
    },
    {
        numb: 101,
        question: "The SI unit of conductance is:",
        answer: "Siemen (S)",
        options: ["Siemen (S)", "Ohm", "Ohm-metre", "Volt/Ampere"],
        explanation: "1 Siemen = 1 / Ohm."
    },
    {
        numb: 102,
        question: "A carbon resistor has bands: Yellow, Violet, Orange, Silver. Its resistance is:",
        answer: "47 kΩ ± 10%",
        options: ["47 kΩ ± 10%", "4.7 kΩ ± 5%", "470 Ω ± 20%", "47 kΩ ± 5%"],
        explanation: "Yellow(4), Violet(7), Orange(10³), Silver(10%). Value = 47 x 10³ = 47000 Ω."
    },
    {
        numb: 103,
        question: "As a dry cell gets older, its internal resistance:",
        answer: "Increases",
        options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
        explanation: "Internal chemical changes and electrolyte depletion increase resistance."
    },
    {
        numb: 104,
        question: "For 'n' identical cells in series, the total circuit current I is:",
        answer: "nE / (R + nr)",
        options: ["nE / (R + nr)", "E / (R + nr)", "nE / (R + r/n)", "E / (R + r)"],
        explanation: "Total Emf = nE, Total Resistance = R + nr."
    },
    {
        numb: 105,
        question: "For 'm' identical cells in parallel, the total circuit current I is:",
        answer: "E / (R + r/m)",
        options: ["E / (R + r/m)", "mE / (R + mr)", "E / (mR + r)", "mE / (R + r)"],
        explanation: "Total Emf = E, Total Internal Resistance = r/m."
    },
    {
        numb: 106,
        question: "In a mixed grouping of 'n' cells in series per row and 'm' rows, current is:",
        answer: "mnE / (mR + nr)",
        options: ["mnE / (mR + nr)", "nE / (R + nr/m)", "mE / (R + nr)", "mnE / (R + r)"],
        explanation: "Total Emf = nE. Total r = nr/m. I = nE / (R + nr/m) = mnE / (mR + nr)."
    },
    {
        numb: 107,
        question: "Kirchhoff's First Law is based on the principle of conservation of:",
        answer: "Charge",
        options: ["Charge", "Energy", "Mass", "Momentum"],
        explanation: "Total current entering a junction = total current leaving."
    },
    {
        numb: 108,
        question: "Kirchhoff's Second Law is based on the principle of conservation of:",
        answer: "Energy",
        options: ["Energy", "Charge", "Mass", "Momentum"],
        explanation: "Total potential change in a closed loop is zero."
    },
    {
        numb: 109,
        question: "Potential gradient of a potentiometer wire is:",
        answer: "Potential drop per unit length",
        options: ["Potential drop per unit length", "Total potential", "Current density", "Resistance per unit length"],
        explanation: "k = V / L."
    },
    {
        numb: 110,
        question: "During charging of a battery, terminal voltage V relates to emf E as:",
        answer: "V > E",
        options: ["V > E", "V < E", "V = E", "V = 0"],
        explanation: "V = E + Ir. Voltage must overcome internal resistance and back emf."
    },
    {
        numb: 111,
        question: "Who discovered superconductivity in 1911?",
        answer: "Kamerlingh Onnes",
        options: ["Kamerlingh Onnes", "Ohm", "Faraday", "Newton"],
        explanation: "Discovered it while studying Mercury at 4.2 K."
    },
    {
        numb: 112,
        question: "The critical temperature for Mercury to become a superconductor is:",
        answer: "4.2 K",
        options: ["4.2 K", "7.2 K", "10 K", "0 K"],
        explanation: "Standard experimental value."
    },
    {
        numb: 113,
        question: "The expulsion of magnetic field from a superconductor is called:",
        answer: "Meissner Effect",
        options: ["Meissner Effect", "Seebeck Effect", "Peltier Effect", "Hall Effect"],
        explanation: "Superconductors are perfectly diamagnetic."
    },
    {
        numb: 114,
        question: "Materials that obey Ohm's law (V ∝ I) are called:",
        answer: "Ohmic conductors",
        options: ["Ohmic conductors", "Non-ohmic conductors", "Insulators", "Superconductors"],
        explanation: "Typically metals like Copper and Aluminum."
    },
    {
        numb: 115,
        question: "Resistivity is a property of the ______.",
        answer: "Material",
        options: ["Material", "Dimensions", "Shape", "Mass"],
        explanation: "It depends only on nature of material and temperature."
    },
    {
        numb: 116,
        question: "The resistance of a ______ decreases with increase in temperature.",
        answer: "Thermistors (Negative α type)",
        options: ["Thermistors (Negative α type)", "Silver wire", "Copper wire", "Nichrome wire"],
        explanation: "Specifically designed semiconductors."
    },
    {
        numb: 117,
        question: "Resistance of human body when skin is dry is approximately:",
        answer: "10,000 Ω to 100,000 Ω",
        options: ["10,000 Ω to 100,000 Ω", "1 Ω", "10 Ω", "Infinite"],
        explanation: "Dry skin acts as a good insulator."
    },
    {
        numb: 118,
        question: "Why is a DC ammeter not suitable for measuring AC?",
        answer: "Average value of AC over a cycle is zero",
        options: ["Average value of AC over a cycle is zero", "AC is too high", "DC ammeters are fragile", "None"],
        explanation: "Pointer will vibrate around zero due to frequency."
    },
    {
        numb: 119,
        question: "The heat produced in a conductor (Joule's Law) is proportional to:",
        answer: "Square of the current",
        options: ["Square of the current", "Current", "Square root of current", "Inverse of current"],
        explanation: "H = I²Rt."
    },
    {
        numb: 120,
        question: "Joule heating in a resistor is an ______ process.",
        answer: "Irreversible",
        options: ["Irreversible", "Reversible", "Isothermal", "Adiabatic"],
        explanation: "Heat cannot be converted back to electric current spontaneously."
    },
    {
        numb: 121,
        question: "The phenomenon of producing emf by maintaining two junctions at different temperatures is:",
        answer: "Seebeck Effect",
        options: ["Seebeck Effect", "Peltier Effect", "Thomson Effect", "Joule Effect"],
        explanation: "Basis of Thermocouples."
    },
    {
        numb: 122,
        question: "The reverse of Seebeck effect is called:",
        answer: "Peltier Effect",
        options: ["Peltier Effect", "Seebeck Effect", "Thomson Effect", "Hall Effect"],
        explanation: "Passing current creates temperature difference at junctions."
    },
    {
        numb: 123,
        question: "Thermocouples are used to measure:",
        answer: "Temperature",
        options: ["Temperature", "Pressure", "Mass", "Volume"],
        explanation: "Convert thermal gradients into measurable voltage."
    },
    {
        numb: 124,
        question: "The temperature at which thermoelectric power is zero is:",
        answer: "Neutral temperature",
        options: ["Neutral temperature", "Inversion temperature", "Curie temperature", "Absolute zero"],
        explanation: "At this point, emf is maximum."
    },
    {
        numb: 125,
        question: "At Inversion temperature, the thermo-emf becomes:",
        answer: "Zero and reverses sign",
        options: ["Zero and reverses sign", "Maximum", "Infinite", "Stays same"],
        explanation: "Standard behavior of thermocouples."
    },
    {
        numb: 126,
        question: "A device consisting of several thermocouples in series is a:",
        answer: "Thermopile",
        options: ["Thermopile", "Potentiometer", "Voltmeter", "Ammeter"],
        explanation: "Used to detect very small amounts of radiant heat."
    },
    {
        numb: 127,
        question: "Inside a superconductor, the electric field (E) is:",
        answer: "Zero",
        options: ["Zero", "Infinite", "Constant", "V/L"],
        explanation: "Infinite conductivity implies E = J/σ = J/∞ = 0."
    },
    {
        numb: 128,
        question: "One Ampere-second is equal to:",
        answer: "One Coulomb",
        options: ["One Coulomb", "One Volt", "One Watt", "One Joule"],
        explanation: "Q = I * t."
    },
    {
        numb: 129,
        question: "Work done by a cell of emf 'E' in moving charge 'Q' is:",
        answer: "EQ",
        options: ["EQ", "E/Q", "Q/E", "EQ²"],
        explanation: "Definition of Emf: Energy per unit charge."
    },
    {
        numb: 130,
        question: "If Voltage is constant, Power dissipated is inversely proportional to:",
        answer: "Resistance",
        options: ["Resistance", "Current", "Length", "Area"],
        explanation: "P = V² / R."
    },
    {
        numb: 131,
        question: "Which bulb glows brighter in SERIES: 100W or 60W (labeled at 220V)?",
        answer: "60W bulb",
        options: ["60W bulb", "100W bulb", "Both same", "None"],
        explanation: "60W bulb has higher resistance (R = V²/P). In series, P_act = I²R. Higher R means more power."
    },
    {
        numb: 132,
        question: "Which bulb glows brighter in PARALLEL: 100W or 60W (labeled at 220V)?",
        answer: "100W bulb",
        options: ["100W bulb", "60W bulb", "Both same", "None"],
        explanation: "In parallel, Voltage is same. P_act = V²/R. Smaller R (100W) means more power."
    },
    {
        numb: 133,
        question: "Domestic electricity connections are always in:",
        answer: "Parallel",
        options: ["Parallel", "Series", "Mixed", "None"],
        explanation: "Ensures each appliance gets full voltage independently."
    },
    {
        numb: 134,
        question: "In standard wiring, the color of Earth wire is:",
        answer: "Green or Yellow",
        options: ["Green or Yellow", "Red", "Black", "Blue"],
        explanation: "For safety grounding."
    },
    {
        numb: 135,
        question: "In standard wiring, the color of Neutral wire is:",
        answer: "Black or Blue",
        options: ["Black or Blue", "Red", "Brown", "Green"],
        explanation: "Returns the current to source."
    },
    {
        numb: 136,
        question: "In standard wiring, the color of Phase/Live wire is:",
        answer: "Red or Brown",
        options: ["Red or Brown", "Black", "Green", "Neutral"],
        explanation: "Carries current from source to appliance."
    },
    {
        numb: 137,
        question: "The emf 'E' of a cell is its terminal voltage 'V' when:",
        answer: "R = ∞ (Open Circuit)",
        options: ["R = ∞ (Open Circuit)", "R = 0", "R = r", "V = 0"],
        explanation: "No current flows, so no internal drop."
    },
    {
        numb: 138,
        question: "Potentiometer sensitivity increases if the potential gradient is:",
        answer: "Decreased",
        options: ["Decreased", "Increased", "Infinite", "Zero"],
        explanation: "Lower k = V/L means longer length per volt, better resolution."
    },
    {
        numb: 139,
        question: "What is 'Figure of Merit' of a galvanometer?",
        answer: "Current required for unit deflection",
        options: ["Current required for unit deflection", "Total current", "Total resistance", "Material constant"],
        explanation: "k = I / θ."
    },
    {
        numb: 140,
        question: "A galvanometer can be made 'dead beat' using:",
        answer: "Eddy currents in metal frame",
        options: ["Eddy currents in metal frame", "Shunts", "High resistors", "Liquid damping"],
        explanation: "Induced currents oppose motion to stop oscillations."
    },
    {
        numb: 141,
        question: "Specific resistance of a wire depends on its:",
        answer: "Material",
        options: ["Material", "Length", "Area", "Resistance"],
        explanation: "Constant for a given substance."
    },
    {
        numb: 142,
        question: "Standard cell used in potentiometer is often the:",
        answer: "Cadmium cell (Weston cell)",
        options: ["Cadmium cell (Weston cell)", "Leclanche cell", "Dry cell", "Lead acid battery"],
        explanation: "Maintains a constant emf over time."
    },
    {
        numb: 143,
        question: "While finding balance point, a high resistance is used in series with galvanometer to:",
        answer: "Protect the galvanometer from high current",
        options: ["Protect the galvanometer from high current", "Increase sensitivity", "Change balance point", "Decrease length"],
        explanation: "Limited current prevents coil damage during coarse adjustment."
    },
    {
        numb: 144,
        question: "Does the balance point change if driver cell internal resistance changes?",
        answer: "No (as long as driver V > test emf)",
        options: ["No (as long as driver V > test emf)", "Yes", "Depends on wire", "Only if wire is copper"],
        explanation: "Potentiometer is a null method measuring voltage ratio."
    },
    {
        numb: 145,
        question: "Potential gradient depends on:",
        answer: "Both current and wire resistance per unit length",
        options: ["Both current and wire resistance per unit length", "Only wire length", "Only test cell", "None"],
        explanation: "k = I * (R_wire / L)."
    },
    {
        numb: 146,
        question: "To compare Emfs of cells E₁ and E₂, we use:",
        answer: "E₁ / E₂ = l₁ / l₂",
        options: ["E₁ / E₂ = l₁ / l₂", "E₁E₂ = l₁l₂", "E₁/l₁ = E₂/l₂", "Both A and C"],
        explanation: "Standard potentiometer comparison formula."
    },
    {
        numb: 147,
        question: "Formula for internal resistance 'r' using potentiometer is:",
        answer: "R * (l₁/l₂ - 1)",
        options: ["R * (l₁/l₂ - 1)", "R * (l₁/l₂ + 1)", "R * l₁/l₂", "r = l₁-l₂"],
        explanation: "Derived from V = E - Ir and measuring E and V at different balance lengths."
    },
    {
        numb: 148,
        question: "Potentiometer is more accurate than voltmeter because it works on:",
        answer: "Null deflection method",
        options: ["Null deflection method", "Deflection method", "Internal battery", "High resistance"],
        explanation: "No current drawn means no measurement interference."
    },
    {
        numb: 149,
        question: "Dimension of EMF is same as:",
        answer: "Electric Potential",
        options: ["Electric Potential", "Electric Field", "Electric Flux", "Current"],
        explanation: "Both represent work done per unit charge."
    },
    {
        numb: 150,
        question: "The SI unit of relaxation time (τ) is:",
        answer: "Second",
        options: ["Second", "Meter", "Amps", "Ohm"],
        explanation: "It is a time interval between collisions."
    },
    {
        numb: 151,
        question: "For a perfect superconductor, magnetic susceptibility is exactly:",
        answer: "-1",
        options: ["-1", "0", "1", "Infinite"],
        explanation: "Meissner effect makes them perfect diamagnets."
    },
    {
        numb: 152,
        question: "The drift velocity (Vd) of electrons is given by:",
        answer: "eEτ / m",
        options: ["eEτ / m", "mv / eE", "neAv", "E / neA"],
        explanation: "Derived from acceleration a = eE/m and time τ."
    },
    {
        numb: 153,
        question: "Resistance of a conductor is R. If its area of cross-section is doubled (keeping volume constant), its new resistance is:",
        answer: "R/4",
        options: ["R/4", "R/2", "2R", "4R"],
        explanation: "Since V = AL is constant, doubling A means halving L. R' = ρ(L/2)/(2A) = R/4."
    },
    {
        numb: 154,
        question: "Kirchhoff's laws are applicable to ______ circuits.",
        answer: "Lumped",
        options: ["Lumped", "Distributed", "Wireless", "None"],
        explanation: "They assume components are small compared to electromagnetic wavelengths."
    },
    {
        numb: 155,
        question: "Potential difference across a cell is zero in short circuit because:",
        answer: "V = E - Ir and I = E/r",
        options: ["V = E - Ir and I = E/r", "E = 0", "r = 0", "R = ∞"],
        explanation: "In short circuit (R=0), all emf is dropped across internal resistance."
    },
    {
        numb: 156,
        question: "The emf of a source does NOT depend on:",
        answer: "Size/Area of electrodes",
        options: ["Size/Area of electrodes", "Nature of electrolyte", "Nature of electrodes", "Temperature"],
        explanation: "Emf is determined by the chemical potential difference."
    },
    {
        numb: 157,
        question: "The resistivity of Manganin is about ______ times that of Copper.",
        answer: "25 to 30",
        options: ["25 to 30", "2", "100", "500"],
        explanation: "Alloys have much higher resistivity than pure metals."
    },
    {
        numb: 158,
        question: "If a wire is cut into two equal halves, the resistivity of each half:",
        answer: "Remains same",
        options: ["Remains same", "Is halved", "Is doubled", "Becomes zero"],
        explanation: "Resistivity is an intensive property."
    },
    {
        numb: 159,
        question: "In a potentiometer experiment, why is the null method used?",
        answer: "To avoid error due to internal resistance of cell",
        options: ["To avoid error due to internal resistance of cell", "To speed up measurement", "To use less wire", "To increase heat"],
        explanation: "At zero current, there is no potential drop across internal resistance."
    },
    {
        numb: 160,
        question: "One Kilowatt-hour is a unit of:",
        answer: "Energy",
        options: ["Energy", "Power", "Current", "Force"],
        explanation: "1 kWh = 3.6 x 10⁶ J."
    },
    {
        numb: 161,
        question: "Power dissipated in a conductor of resistance R with current I is:",
        answer: "I²R",
        options: ["I²R", "IR", "V/R", "IV²"],
        explanation: "Derived from P = VI and V = IR."
    },
    {
        numb: 162,
        question: "The material of a fuse wire should have:",
        answer: "High resistance and low melting point",
        options: ["High resistance and low melting point", "High resistance and high melting point", "Low resistance and high melting point", "Low resistance and low melting point"],
        explanation: "Low melting point ensures it breaks quickly during current surges."
    },
    {
        numb: 163,
        question: "The resistance of an incandescent bulb is ______ when it is turned on than when it is off.",
        answer: "Much higher",
        options: ["Much higher", "Much lower", "Same", "Zero"],
        explanation: "Temperature of filament increases significantly, increasing resistance."
    },
    {
        numb: 164,
        question: "Domestic electricity is billed in 'units'. One unit equals:",
        answer: "1 kWh",
        options: ["1 kWh", "1 Wh", "1 Joule", "1 Ampere"],
        explanation: "Commercial unit of energy."
    },
    {
        numb: 165,
        question: "A carbon resistor has bands: Red, Red, Red, Gold. Its resistance is:",
        answer: "2200 Ω ± 5%",
        options: ["2200 Ω ± 5%", "220 Ω ± 10%", "22 kΩ ± 5%", "2.2 Ω ± 20%"],
        explanation: "Red(2), Red(2), Red(x10²), Gold(5%). Value = 22 x 100 = 2200 Ω."
    },
    {
        numb: 166,
        question: "Transmission of electric power over long distances is done at high voltage to:",
        answer: "Reduce power loss in cables",
        options: ["Reduce power loss in cables", "Increase current", "Reduce cable thickness", "Increase speed"],
        explanation: "P_loss = I²R. High V means low I for same Power, thus low losses."
    },
    {
        numb: 167,
        question: "Electric power loss in a line is proportional to:",
        answer: "1 / V²",
        options: ["1 / V²", "V²", "1 / V", "V"],
        explanation: "P_loss ∝ I² and I = P/V, so P_loss ∝ 1/V²."
    },
    {
        numb: 168,
        question: "An ideal cell has internal resistance equal to:",
        answer: "Zero",
        options: ["Zero", "Infinite", "1 Ω", "High"],
        explanation: "It provides constant voltage regardless of current."
    },
    {
        numb: 169,
        question: "In a potentiometer, if the driver cell emf is increased, the null point:",
        answer: "Shifts towards the starting end A",
        options: ["Shifts towards the starting end A", "Shifts towards end B", "Remains same", "Disappears"],
        explanation: "Higher driver V means higher potential gradient, so balance is reached in shorter length."
    },
    {
        numb: 170,
        question: "A carbon resistor with Green, Blue, Brown, Silver bands has value:",
        answer: "560 Ω ± 10%",
        options: ["560 Ω ± 10%", "56 Ω ± 5%", "5.6 kΩ ± 10%", "560 Ω ± 20%"],
        explanation: "Green(5), Blue(6), Brown(x10¹), Silver(10%). Value = 56 x 10 = 560 Ω."
    },
    {
        numb: 171,
        question: "The inverse of resistivity is called:",
        answer: "Conductivity",
        options: ["Conductivity", "Resistance", "Conductance", "Emittance"],
        explanation: "σ = 1 / ρ."
    },
    {
        numb: 172,
        question: "Dimensional formula for electric power is:",
        answer: "[ML²T⁻³]",
        options: ["[ML²T⁻³]", "[ML²T⁻²]", "[MLT⁻³]", "[ML²T⁻³A⁻¹]"],
        explanation: "Power = Energy / Time = [ML²T⁻²] / [T] = [ML²T⁻³]."
    },
    {
        numb: 173,
        question: "A current carrying conductor is ______.",
        answer: "Electrically neutral",
        options: ["Electrically neutral", "Positively charged", "Negatively charged", "Ionic"],
        explanation: "For every electron entering, one leaves; net charge remains zero."
    },
    {
        numb: 174,
        question: "In a non-uniform cross-section conductor, current is ______ at all points.",
        answer: "Constant",
        options: ["Constant", "Higher at narrow end", "Lower at narrow end", "Zero"],
        explanation: "Due to conservation of charge (Continuity equation)."
    },
    {
        numb: 175,
        question: "In a non-uniform conductor, drift velocity (Vd) is ______ at the narrower end.",
        answer: "Higher",
        options: ["Higher", "Lower", "Same", "Zero"],
        explanation: "I = neAVd. Since I is constant, if A decreases, Vd must increase."
    },
    {
        numb: 176,
        question: "Potential gradient (k) is equal to:",
        answer: "V / L",
        options: ["V / L", "I / L", "R / L", "V * L"],
        explanation: "Change in potential per unit length."
    },
    {
        numb: 177,
        question: "Current density (J) is a ______ quantity.",
        answer: "Vector",
        options: ["Vector", "Scalar", "Tensor", "Dimensionless"],
        explanation: "It has a direction associated with charge flow."
    },
    {
        numb: 178,
        question: "Standard resistance coils are 'doubly wound' to:",
        answer: "Eliminate self-inductance",
        options: ["Eliminate self-inductance", "Increase resistance", "Prevent heating", "Look compact"],
        explanation: "Opposing currents in the two turns cancel their magnetic fields."
    },
    {
        numb: 179,
        question: "Thermocouple 'Neutral Temperature' depends only on:",
        answer: "Nature of materials used",
        options: ["Nature of materials used", "Cold junction temperature", "Atmospheric pressure", "Volume"],
        explanation: "It's a material constant for the pair."
    },
    {
        numb: 180,
        question: "The rate of change of thermo-emf with temperature is called:",
        answer: "Thermoelectric power",
        options: ["Thermoelectric power", "Thermocouple current", "Neutral emf", "Specific heat"],
        explanation: "S = dE / dT."
    },
    {
        numb: 181,
        question: "In an Antimony-Bismuth (Sb-Bi) thermocouple, current flows from ______ to ______ at the hot junction.",
        answer: "Bismuth, Antimony",
        options: ["Bismuth, Antimony", "Antimony, Bismuth", "Iron, Copper", "Copper, constantan"],
        explanation: "Bi to Sb (ABC mnemonic: Antimony Bismuth Cold - current at Cold Bi to Sb, so at Hot Bi to Sb wait... at hot it's Bi to Sb)."
    },
    {
        numb: 182,
        question: "Peltier effect is ______ and Joule effect is ______.",
        answer: "Reversible, Irreversible",
        options: ["Reversible, Irreversible", "Irreversible, Reversible", "Both Reversible", "Both Irreversible"],
        explanation: "Reversing current reverses heat flow in Peltier, but Joule only produces heat."
    },
    {
        numb: 183,
        question: "The unit of Peltier coefficient is:",
        answer: "Volt",
        options: ["Volt", "Ampere", "Ohm", "Zero"],
        explanation: "It's the energy absorbed/released per unit charge (J/C)."
    },
    {
        numb: 184,
        question: "A voltmeter should have ______ resistance to measure voltage accurately.",
        answer: "Very High",
        options: ["Very High", "Very Low", "Zero", "1 Ω"],
        explanation: "To ensure it doesn't draw significant current from the parallel component."
    },
    {
        numb: 185,
        question: "An ammeter should have ______ resistance to measure current accurately.",
        answer: "Very Low",
        options: ["Very Low", "Very High", "Infinite", "100 Ω"],
        explanation: "To prevent significant voltage drop in the series line."
    },
    {
        numb: 186,
        question: "Metre bridge works on the principle of:",
        answer: "Balanced Wheatstone Bridge",
        options: ["Balanced Wheatstone Bridge", "Potentiometer", "Ohm's Law", "Lenz's Law"],
        explanation: "Using a 1-metre wire as the ratio arms."
    },
    {
        numb: 187,
        question: "Potentiometer wire length is usually ______ to ensure high sensitivity.",
        answer: "4 to 10 metres",
        options: ["4 to 10 metres", "10 cm", "1 mm", "Unlimited"],
        explanation: "Longer wire reduces the potential gradient."
    },
    {
        numb: 188,
        question: "To convert a galvanometer into an ammeter, we connect a ______ resistance in ______.",
        answer: "Low (Shunt), Parallel",
        options: ["Low (Shunt), Parallel", "High, Series", "Low, Series", "High, Parallel"],
        explanation: "Bypasses the majority of current around the sensitive coil."
    },
    {
        numb: 189,
        question: "To convert a galvanometer into a voltmeter, we connect a ______ resistance in ______.",
        answer: "High, Series",
        options: ["High, Series", "Low, Parallel", "High, Parallel", "Low, Series"],
        explanation: "Limits current and allow measuring high voltage drops."
    },
    {
        numb: 190,
        question: "The power rating of a device 'P' is given as P = V²/R. If voltage 'V' is halved, new power is:",
        answer: "P / 4",
        options: ["P / 4", "P / 2", "2P", "4P"],
        explanation: "Power is proportional to square of voltage."
    },
    {
        numb: 191,
        question: "Dimension of Current Density (J) is:",
        answer: "[L⁻²A]",
        options: ["[L⁻²A]", "[LA⁻²]", "[MLT⁻³A⁻¹]", "[L²A]"],
        explanation: "J = I / A = [A] / [L²] = [L⁻²A]."
    },
    {
        numb: 192,
        question: "The order of conductivty in metals is:",
        answer: "Ag > Cu > Au > Al",
        options: ["Ag > Cu > Au > Al", "Cu > Ag > Au > Al", "Al > Cu > Ag > Au", "Fe > Ag > Cu"],
        explanation: "Silver is the best conductor, followed by Copper."
    },
    {
        numb: 193,
        question: "The property of some materials to have zero resistance at very low temperatures is:",
        answer: "Superconductivity",
        options: ["Superconductivity", "Semiconductivity", "Insulation", "Ferromagnetism"],
        explanation: "Discovered by Onnes."
    },
    {
        numb: 194,
        question: "Potential difference is also called ______ drop.",
        answer: "IR",
        options: ["IR", "EMF", "Ohmic", "Wattage"],
        explanation: "V = IR is the voltage drop across a resistor."
    },
    {
        numb: 195,
        question: "A high tension (HT) supply of 6 kV must have high internal resistance because:",
        answer: "To limit short-circuit current to safe values",
        options: ["To limit short-circuit current to safe values", "To increase current", "To look robust", "To prevent cooling"],
        explanation: "Protects the source and users in case of accidents."
    },
    {
        numb: 196,
        question: "Ohm's law is valid for conductors when ______ remains constant.",
        answer: "Temperature",
        options: ["Temperature", "Current", "Voltage", "Shape"],
        explanation: "Physical conditions must be steady."
    },
    {
        numb: 197,
        question: "Standard resistors are made of alloys like:",
        answer: "Constantan or Manganin",
        options: ["Constantan or Manganin", "Iron", "Gold", "Lead"],
        explanation: "They have very low temperature coefficients."
    },
    {
        numb: 198,
        question: "A wire of resistance R is stretched such that its length doubles. New resistance is:",
        answer: "4R",
        options: ["4R", "2R", "R/2", "R/4"],
        explanation: "L -> 2L, A -> A/2 => R -> 4R."
    },
    {
        numb: 199,
        question: "A wire of resistance R is stretched such that its *radius* is halved. New resistance is:",
        answer: "16R",
        options: ["16R", "4R", "8R", "R/16"],
        explanation: "r -> r/2 => A -> A/4. For constant volume, L -> 4L. R' = ρ(4L)/(A/4) = 16R."
    },
    {
        numb: 200,
        question: "Internal resistance of a cell 'r' ______ as current 'I' increases.",
        answer: "Increases slightly",
        options: ["Increases slightly", "Decreases", "Stays zero", "Infinite"],
        explanation: "Due to faster depletion of ions near electrodes."
    },
    {
        numb: 201,
        question: "Sensitivity of a potentiometer can be increased by ______ current in driver circuit.",
        answer: "Decreasing",
        options: ["Decreasing", "Increasing", "Keeping same", "Zeroing"],
        explanation: "Decreasing current reduces potential gradient, increasing sensitivity."
    },
    {
        numb: 202,
        question: "Electrons in a conductor move randomly with speed of order:",
        answer: "10⁵ m/s",
        options: ["10⁵ m/s", "10⁻⁴ m/s", "3 x 10⁸ m/s", "10 m/s"],
        explanation: "Random thermal speed is very high."
    },
    {
        numb: 203,
        question: "The drift velocity of electrons (Vd) is of the order of:",
        answer: "10⁻⁴ m/s",
        options: ["10⁻⁴ m/s", "10⁵ m/s", "10⁸ m/s", "Sound speed"],
        explanation: "Net drift is very slow."
    },
    {
        numb: 204,
        question: "Carbon resistor color code for Gray is:",
        answer: "8",
        options: ["8", "7", "9", "5"],
        explanation: "BBROYGBVGW... Gray is the 9th color (8)."
    },
    {
        numb: 205,
        question: "Carbon resistor color code for White is:",
        answer: "9",
        options: ["9", "0", "1", "6"],
        explanation: "Last color in sequence."
    },
    {
        numb: 206,
        question: "Condition for maximum current from n identical cells in series across R:",
        answer: "R >> nr",
        options: ["R >> nr", "R << nr", "R = nr", "None"],
        explanation: "Internal drop becomes negligible."
    },
    {
        numb: 207,
        question: "Condition for maximum current from m identical cells in parallel across R:",
        answer: "R << r/m",
        options: ["R << r/m", "R >> r/m", "R = r", "None"],
        explanation: "External load should be small."
    },
    {
        numb: 208,
        question: "Terminal voltage V of a cell is related to E and R as:",
        answer: "V = ER / (R+r)",
        options: ["V = ER / (R+r)", "V = E(R+r)/R", "V = IR + Ir", "V = E"],
        explanation: "Voltage divider rule."
    },
    {
        numb: 209,
        question: "The heat produced in time t in resistor R with current I is H. If current is doubled, new heat is:",
        answer: "4H",
        options: ["4H", "2H", "H/2", "8H"],
        explanation: "H ∝ I²."
    },
    {
        numb: 210,
        question: "The path of an electron between two successive collisions in electric field is:",
        answer: "Parabolic/Curved",
        options: ["Parabolic/Curved", "Straight line", "Circular", "Zigzag"],
        explanation: "Constant acceleration in one direction superposed on initial thermal velocity."
    }
];


