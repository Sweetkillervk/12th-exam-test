window.questionRegistry["physics_12th_ch7"] = [
    {
        numb: 1,
        question: "A 100 Ω resistor is connected to a 220 V, 50 Hz ac supply. What is the rms value of current in the circuit?",
        answer: "2.2 A",
        options: ["2.2 A", "1.1 A", "4.4 A", "2.0 A"],
        explanation: "Irms = Erms / R = 220 / 100 = 2.2 A."
    },
    {
        numb: 2,
        question: "A 100 Ω resistor is connected to a 220 V, 50 Hz ac supply. What is the net power consumed over a full cycle?",
        answer: "484 W",
        options: ["484 W", "242 W", "968 W", "Zero"],
        explanation: "P = Erms * Irms = 220 * 2.2 = 484 W. For purely resistive circuit, power factor cos Φ = 1."
    },
    {
        numb: 3,
        question: "The peak voltage of an ac supply is 300 V. What is the r.m.s. voltage?",
        answer: "212.1 V",
        options: ["212.1 V", "300 V", "150 V", "424.2 V"],
        explanation: "Erms = E0 / √2 = 300 / 1.414 ≈ 212.1 V."
    },
    {
        numb: 4,
        question: "The r.m.s. value of current in an ac circuit is 10 A. What is the peak current?",
        answer: "14.14 A",
        options: ["14.14 A", "10 A", "7.07 A", "20 A"],
        explanation: "I0 = Irms * √2 = 10 * 1.414 = 14.14 A."
    },
    {
        numb: 5,
        question: "A 44 mH inductor is connected to 220 V, 50 Hz ac supply. Determine the rms value of the current in the circuit.",
        answer: "15.9 A",
        options: ["15.9 A", "1.59 A", "31.8 A", "Zero"],
        explanation: "XL = 2πfL = 2 * π * 50 * 44e-3 ≈ 13.82 Ω. Irms = Erms / XL = 220 / 13.82 ≈ 15.9 A."
    },
    {
        numb: 6,
        question: "A 60 μF capacitor is connected to a 110 V, 60 Hz ac supply. Determine the rms value of the current in the circuit.",
        answer: "2.49 A",
        options: ["2.49 A", "1.25 A", "4.98 A", "Zero"],
        explanation: "XC = 1 / (2πfC) = 1 / (2 * π * 60 * 60e-6) ≈ 44.2 Ω. Irms = Erms / XC = 110 / 44.2 ≈ 2.49 A."
    },
    {
        numb: 7,
        question: "What is the net power absorbed by a pure inductor circuit over a complete cycle?",
        answer: "Zero",
        options: ["Zero", "VI", "1/2 VI", "Infinite"],
        explanation: "In a pure inductor, phase difference Φ = π/2, so power factor cos Φ = 0. Pav = Erms * Irms * cos Φ = 0."
    },
    {
        numb: 8,
        question: "What is the net power absorbed by a pure capacitor circuit over a complete cycle?",
        answer: "Zero",
        options: ["Zero", "VI", "1/2 VI", "Infinite"],
        explanation: "In a pure capacitor, phase difference Φ = π/2, so power factor cos Φ = 0. Pav = Erms * Irms * cos Φ = 0."
    },
    {
        numb: 9,
        question: "Obtain the resonant frequency ωr of a series LCR circuit with L = 2.0 H, C = 32 μF and R = 10 Ω.",
        answer: "125 rad/s",
        options: ["125 rad/s", "250 rad/s", "62.5 rad/s", "100 rad/s"],
        explanation: "ωr = 1 / √(LC) = 1 / √(2 * 32e-6) = 1 / √(64e-6) = 1 / 0.008 = 125 rad/s."
    },
    {
        numb: 10,
        question: "What is the Q-value of a series LCR circuit with L = 2.0 H, C = 32 μF and R = 10 Ω at resonance?",
        answer: "25",
        options: ["25", "2.5", "50", "10"],
        explanation: "Q = ωrL / R = (125 * 2) / 10 = 250 / 10 = 25."
    },
    {
        numb: 11,
        question: "A charged 30 μF capacitor is connected to a 27 mH inductor. What is the angular frequency of free oscillations of the circuit?",
        answer: "1.11 x 10³ rad/s",
        options: ["1.11 x 10³ rad/s", "1.11 x 10⁶ rad/s", "1.11 rad/s", "Zero"],
        explanation: "ω0 = 1 / √(LC) = 1 / √(27e-3 * 30e-6) = 1 / √(81e-8) = 1 / (9e-4) ≈ 1.11 x 10³ rad/s."
    },
    {
        numb: 12,
        question: "Initial charge on a 30 μF capacitor is 6 mC. Total energy stored in LC circuit (L=27mH) initially is:",
        answer: "0.6 J",
        options: ["0.6 J", "0.3 J", "1.2 J", "Zero"],
        explanation: "U = Q² / 2C = (6e-3)² / (2 * 30e-6) = 36e-6 / 60e-6 = 0.6 J."
    },
    {
        numb: 13,
        question: "In an LC circuit without resistance, the total energy during oscillations ______.",
        answer: "Remains conserved",
        options: ["Remains conserved", "Decreases linearly", "Increases", "Becomes zero instantly"],
        explanation: "No resistance means no energy dissipation; energy oscillates between E and B fields."
    },
    {
        numb: 14,
        question: "At resonance in a series LCR circuit, the impedance Z equals:",
        answer: "Resistance R",
        options: ["Resistance R", "Inductive reactance XL", "Capacitive reactance XC", "Zero"],
        explanation: "At resonance, XL = XC, so Z = √[R² + (XL-XC)²] = R."
    },
    {
        numb: 15,
        question: "A series LCR circuit (R=20Ω) is connected to 200V AC. At resonance, average power transferred is:",
        answer: "2.0 kW",
        options: ["2.0 kW", "1.0 kW", "4.0 kW", "Zero"],
        explanation: "At resonance, P = Erms² / R = 200² / 20 = 40000 / 20 = 2000 W = 2 kW."
    },
    {
        numb: 16,
        question: "The frequency range of a MW radio is 800 kHz to 1200 kHz. If L=200μH, the range of variable capacitor is approx:",
        answer: "88 pF to 198 pF",
        options: ["88 pF to 198 pF", "10 pF to 50 pF", "1 nF to 2 nF", "Zero"],
        explanation: "C = 1 / (4π²f²L). For 800kHz, C ≈ 198pF. For 1200kHz, C ≈ 88pF."
    },
    {
        numb: 17,
        question: "In a series LCR circuit (L=5H, C=80μF), the resonant angular frequency ω0 is:",
        answer: "50 rad/s",
        options: ["50 rad/s", "25 rad/s", "100 rad/s", "Zero"],
        explanation: "ω0 = 1 / √(5 * 80e-6) = 1 / √(400e-6) = 1 / 0.02 = 50 rad/s."
    },
    {
        numb: 18,
        question: "At resonance in series LCR (L=5H, C=80μF, R=40Ω, Er=230V), current amplitude I0 is:",
        answer: "8.13 A",
        options: ["8.13 A", "5.75 A", "11.5 A", "Zero"],
        explanation: "Irms = Er / R = 230 / 40 = 5.75 A. I0 = Irms * √2 ≈ 5.75 * 1.414 ≈ 8.13 A."
    },
    {
        numb: 19,
        question: "At resonance in series LCR, the potential drop across the LC combination is:",
        answer: "Zero",
        options: ["Zero", "Maximum", "Equal to V_R", "Equal to V_L"],
        explanation: "VL and VC are equal in magnitude but 180° out of phase, so their sum is zero."
    },
    {
        numb: 20,
        question: "Natural frequency of an LC circuit (L=20mH, C=50μF) is approx:",
        answer: "159.1 Hz",
        options: ["159.1 Hz", "1000 Hz", "50 Hz", "Zero"],
        explanation: "f = 1 / [2π√(LC)] = 1 / [2π√(20e-3 * 50e-6)] = 1 / [2π * 0.001] ≈ 159.1 Hz."
    },
    {
        numb: 21,
        question: "In LC oscillations, electrical energy is completely electrical at times t = ______.",
        answer: "0, T/2, T",
        options: ["0, T/2, T", "T/4, 3T/4", "T/8, 3T/8", "Zero"],
        explanation: "Charge Q = Q0 cos(ωt) is max at these times."
    },
    {
        numb: 22,
        question: "In LC oscillations, energy is completely magnetic at times t = ______.",
        answer: "T/4, 3T/4",
        options: ["0, T/2, T", "T/4, 3T/4", "T", "Zero"],
        explanation: "Charge Q is zero, so current I is maximum at these times."
    },
    {
        numb: 23,
        question: "If a resistor is inserted in an LC circuit, the initial energy is eventually ______.",
        answer: "Dissipated as heat",
        options: ["Dissipated as heat", "Stored in inductor", "Increased", "Infinite"],
        explanation: "Resistance causes damping of oscillations."
    },
    {
        numb: 24,
        question: "A coil (L=0.5H, R=100Ω) is connected to 240V, 50Hz. Maximum current I0 is:",
        answer: "1.82 A",
        options: ["1.82 A", "2.4 A", "1.29 A", "Zero"],
        explanation: "Z = √[R² + (2πfL)²] = √[100² + (100π * 0.5)²] ≈ 186 Ω. I0 = E0 / Z = (240√2) / 186 ≈ 1.82 A."
    },
    {
        numb: 25,
        question: "Time lag between voltage max and current max in LR circuit (L=0.5H, R=100Ω, 50Hz) is:",
        answer: "3.2 ms",
        options: ["3.2 ms", "1.6 ms", "5.0 ms", "Zero"],
        explanation: "tan Φ = ωL / R = 157 / 100 = 1.57 => Φ ≈ 57.5°. Time lag = Φ / (360 * f) ≈ 3.2 ms."
    },
    {
        numb: 26,
        question: "At very high frequency, an inductor behaves as an ______.",
        answer: "Open circuit",
        options: ["Open circuit", "Short circuit", "Ideal resistor", "Zero"],
        explanation: "XL = ωL increases with frequency, offering infinite reactance."
    },
    {
        numb: 27,
        question: "In a DC circuit after steady state, an inductor behaves as a ______.",
        answer: "Pure conductor (short circuit)",
        options: ["Pure conductor (short circuit)", "Open circuit", "Resistor", "Capacitor"],
        explanation: "For DC, f=0, so XL = 0."
    },
    {
        numb: 28,
        question: "A capacitor (C=100μF, R=40Ω, 110V, 60Hz) has maximum current I0 approx:",
        answer: "3.24 A",
        options: ["3.24 A", "2.75 A", "1.55 A", "Zero"],
        explanation: "XC = 1 / (2πfC) ≈ 26.5 Ω. Z = √[40² + 26.5²] ≈ 48 Ω. I0 = (110√2) / 48 ≈ 3.24 A."
    },
    {
        numb: 29,
        question: "At very high frequency, a capacitor behaves as a ______.",
        answer: "Short circuit (conductor)",
        options: ["Short circuit (conductor)", "Open circuit", "Resistor", "Zero"],
        explanation: "XC = 1/ωC decreases with frequency, offering zero reactance."
    },
    {
        numb: 30,
        question: "In parallel LCR circuit at resonance, the total current is ______.",
        answer: "Minimum",
        options: ["Minimum", "Maximum", "Zero", "Infinite"],
        explanation: "Impedance Z is maximum at resonance in parallel LCR."
    },
    {
        numb: 31,
        question: "Average power transferred to a pure inductor or capacitor over a cycle is ______.",
        answer: "Zero",
        options: ["Zero", "Maximum", "VI", "Zero (Wattless)"],
        explanation: "Phase difference is 90°, so power factor is 0."
    },
    {
        numb: 32,
        question: "Q-factor (Quality factor) measures the ______ of resonance.",
        answer: "Sharpness",
        options: ["Sharpness", "Stability", "Magnitude", "Zero"],
        explanation: "Higher Q means narrower bandwidth and sharper resonance."
    },
    {
        numb: 33,
        question: "To improve sharpness of resonance by factor of 2, R should be ______.",
        answer: "Halved",
        options: ["Halved", "Doubled", "No change", "Zero"],
        explanation: "Q = ω0L / R; Q is inversely proportional to R."
    },
    {
        numb: 34,
        question: "Is instantaneous applied voltage equal to algebraic sum of instantaneous voltages in series?",
        answer: "Yes, always",
        options: ["Yes, always", "No, only for RMS", "Only in DC", "Zero"],
        explanation: "KVL applies to instantaneous values at any moment."
    },
    {
        numb: 35,
        question: "Is the RMS applied voltage equal to the algebraic sum of RMS voltages in series?",
        answer: "No, due to phase differences",
        options: ["No, due to phase differences", "Yes, always", "Only for resistors", "Zero"],
        explanation: "RMS voltages must be added vectorially (Phasors)."
    },
    {
        numb: 36,
        question: "Why is a capacitor used in the primary circuit of an induction coil?",
        answer: "To avoid sparks when circuit is broken",
        options: ["To avoid sparks when circuit is broken", "To increase voltage", "To store charge", "Zero"],
        explanation: "Absorbs energy to prevent arcing at the contact breaker."
    },
    {
        numb: 37,
        question: "In a superposed AC and DC signal circuit, DC signal appears across ______.",
        answer: "Capacitor (it blocks DC)",
        options: ["Capacitor (it blocks DC)", "Inductor", "Resistor", "Zero"],
        explanation: "XC for DC is infinite."
    },
    {
        numb: 38,
        question: "In a superposed AC and DC signal circuit, high frequency AC appears across ______.",
        answer: "Inductor (it blocks high AC)",
        options: ["Inductor (it blocks high AC)", "Capacitor", "Resistor", "Zero"],
        explanation: "XL increases with frequency."
    },
    {
        numb: 39,
        question: "A choke coil in series with a lamp on a DC line ______.",
        answer: "Has no effect on brightness",
        options: ["Has no effect on brightness", "Dims the lamp", "Brightens the lamp", "Zero"],
        explanation: "For DC, XL = 0."
    },
    {
        numb: 40,
        question: "A choke coil in series with a lamp on an AC line ______.",
        answer: "Reduces brightness (more with iron core)",
        options: ["Reduces brightness (more with iron core)", "Has no effect", "Brightens lamp", "Zero"],
        explanation: "XL limits the current."
    },
    {
        numb: 41,
        question: "Why can't we use an ordinary resistor instead of choke coil in fluorescent tubes?",
        answer: "Resistor wastes energy as heat",
        options: ["Resistor wastes energy as heat", "Choke is cheaper", "Resistor is too big", "Zero"],
        explanation: "Inductor (choke) limits current with zero ideal power loss."
    },
    {
        numb: 42,
        question: "Step-down transformer (4000 to 400 turns) with 2300V input gives output:",
        answer: "230 V",
        options: ["230 V", "23 V", "23000 V", "Zero"],
        explanation: "Vs = Vp * (Ns / Np) = 2300 * (400 / 4000) = 230 V."
    },
    {
        numb: 43,
        question: "Step-up transformer (440V to 7000V) has turns ratio K = ______.",
        answer: "15.9",
        options: ["15.9", "0.06", "10", "Zero"],
        explanation: "K = Vs / Vp = 7000 / 440 ≈ 15.9."
    },
    {
        numb: 44,
        question: "Why is high voltage transmission preferred for long distances?",
        answer: "Power loss (I²R) is highly reduced",
        options: ["Power loss (I²R) is highly reduced", "It is safer", "Cheaper wires", "Zero"],
        explanation: "High V means low I for same power, reducing heat loss."
    },
    {
        numb: 45,
        question: "In transmission, power loss at 40,000V vs 4,000V for same demand is ______ times less.",
        answer: "100",
        options: ["100", "10", "1000", "Zero"],
        explanation: "Loss ∝ I²; I is 10x less, so loss is 100x less."
    },
    {
        numb: 46,
        question: "Average value of A.C. over a complete cycle is ______.",
        answer: "Zero",
        options: ["Zero", "V_peak", "V_rms", "V_avg/2"],
        explanation: "Positive and negative halves cancel out."
    },
    {
        numb: 47,
        question: "Wattless current is the component of current ______.",
        answer: "Which consumes no power",
        options: ["Which consumes no power", "Which produces no heat", "Which has zero magnitude", "Zero"],
        explanation: "Current component at 90° to voltage."
    },
    {
        numb: 48,
        question: "Which value of A.C. is measured by A.C. ammeter?",
        answer: "r.m.s. value",
        options: ["r.m.s. value", "Peak value", "Average value", "Instantaneous value"],
        explanation: "A.C. instruments are calibrated for RMS."
    },
    {
        numb: 49,
        question: "Peak value of 220 V A.C. (RMS) is approx ______.",
        answer: "311 V",
        options: ["311 V", "220 V", "440 V", "110 V"],
        explanation: "V0 = Vrms * √2 = 220 * 1.414 ≈ 311.1 V."
    },
    {
        numb: 50,
        question: "Relationship between Virtual value (Iv) and Peak value (I0) is:",
        answer: "Iv = 0.707 I0",
        options: ["Iv = 0.707 I0", "Iv = 0.636 I0", "Iv = I0", "Iv = 1.414 I0"],
        explanation: "Iv = I0 / √2 ≈ 0.707 I0."
    },
    {
        numb: 51,
        question: "A phasor is a quantity which varies ______ with time.",
        answer: "Sinusoidally",
        options: ["Sinusoidally", "Linearly", "Exponentially", "Zero"],
        explanation: "Represented as the projection of a rotating vector."
    },
    {
        numb: 52,
        question: "Phasor diagram represents alternating e.m.f. and current as ______.",
        answer: "Rotating vectors",
        options: ["Rotating vectors", "Fixed points", "Straight lines", "Zero"],
        explanation: "Shows the phase angle between them."
    },
    {
        numb: 53,
        question: "Inductive reactance XL is ______ proportional to frequency v.",
        answer: "Directly",
        options: ["Directly", "Inversely", "Not", "Exponentially"],
        explanation: "XL = 2πvL."
    },
    {
        numb: 54,
        question: "Capacitive reactance XC is ______ proportional to frequency v.",
        answer: "Inversely",
        options: ["Inversely", "Directly", "Not", "Zero"],
        explanation: "XC = 1 / (2πvC)."
    },
    {
        numb: 55,
        question: "Impedance Z is the ______ opposition offered by an a.c. circuit.",
        answer: "Effective",
        options: ["Effective", "Net", "Total", "Zero"],
        explanation: "Includes resistance and reactances."
    },
    {
        numb: 56,
        question: "Admittance is the ______ of impedance Z.",
        answer: "Reciprocal",
        options: ["Reciprocal", "Square", "Derivative", "Zero"],
        explanation: "Measured in Siemens or mho."
    },
    {
        numb: 57,
        question: "In a pure inductor circuit, voltage ______ current by π/2.",
        answer: "Leads",
        options: ["Leads", "Lags", "Is in phase with", "Zero"],
        explanation: "Current reaches its peak 90° after the voltage."
    },
    {
        numb: 58,
        question: "In a pure capacitor circuit, current ______ voltage by π/2.",
        answer: "Leads",
        options: ["Leads", "Lags", "Is in phase with", "Zero"],
        explanation: "Voltage lags behind current by 90°."
    },
    {
        numb: 59,
        question: "Power factor is defined as the ratio of ______ power to apparent power.",
        answer: "True",
        options: ["True", "Reactive", "Instantaneous", "Zero"],
        explanation: "cos Φ = True Power / Apparent Power."
    },
    {
        numb: 60,
        question: "Transformer works on the principle of ______.",
        answer: "Mutual induction",
        options: ["Mutual induction", "Self induction", "Eddy currents", "Zero"],
        explanation: "Induced emf in secondary due to flux change in primary."
    },
    {
        numb: 61,
        question: "Core of a transformer is laminated to reduce ______.",
        answer: "Eddy current loss",
        options: ["Eddy current loss", "Hysteresis loss", "Copper loss", "Zero"],
        explanation: "Lamination increases resistance to circulating currents."
    },
    {
        numb: 62,
        question: "Copper loss in a transformer is due to ______ of the windings.",
        answer: "Resistance",
        options: ["Resistance", "Inductance", "Capacitance", "Zero"],
        explanation: "Heat produced (I²R) in the copper juice."
    },
    {
        numb: 63,
        question: "Hysteresis loss is due to repeated ______ of the iron core.",
        answer: "Magnetisation and demagnetisation",
        options: ["Magnetisation and demagnetisation", "Heating", "Vibration", "Zero"],
        explanation: "Area of the B-H loop represents the energy loss per cycle."
    },
    {
        numb: 64,
        question: "Choke coil regulates A.C. with ______ power loss.",
        answer: "Negligible",
        options: ["Negligible", "High", "Maximum", "Zero"],
        explanation: "Uses inductive reactance instead of resistive heating."
    },
    {
        numb: 65,
        question: "A radio frequency (RF) choke is typically ______ cored.",
        answer: "Air",
        options: ["Air", "Iron", "Steel", "Zero"],
        explanation: "Air core is sufficient for high frequencies."
    },
    {
        numb: 66,
        question: "An audio frequency (AF) choke is typically ______ cored.",
        answer: "Iron",
        options: ["Iron", "Air", "Glass", "Zero"],
        explanation: "Iron core increases L for lower frequencies."
    },
    {
        numb: 67,
        question: "A.C. is more dangerous than D.C. of same voltage because peak value is ______.",
        answer: "Higher (√2 times)",
        options: ["Higher (√2 times)", "Lower", "Same", "Zero"],
        explanation: "220V RMS AC has 311V peak."
    },
    {
        numb: 68,
        question: "In LCR circuit, resonance occurs when XL ______ XC.",
        answer: "=",
        options: ["=", ">", "<", "Zero"],
        explanation: "Reactances cancel out, leaving Z=R."
    },
    {
        numb: 69,
        question: "In LCR circuit at resonance, voltage and current are in ______.",
        answer: "Same phase",
        options: ["Same phase", "Opposite phase", "Quadrature", "Zero"],
        explanation: "Phase angle Φ = 0."
    },
    {
        numb: 70,
        question: "Average power P in a pure L or pure C circuit is ______.",
        answer: "Zero",
        options: ["Zero", "Maximum", "VI", "Zero (Wattless)"],
        explanation: "cos(90°) = 0."
    },
    {
        numb: 71,
        question: "For a step-up transformer, the transformation ratio K is ______ 1.",
        answer: ">",
        options: [">", "<", "=", "Zero"],
        explanation: "K = Ns / Np; Ns > Np for step-up."
    },
    {
        numb: 72,
        question: "For a step-down transformer, the transformation ratio K is ______ 1.",
        answer: "<",
        options: ["<", ">", "=", "Zero"],
        explanation: "Ns < Np."
    },
    {
        numb: 73,
        question: "Unit of inductive reactance XL is ______.",
        answer: "Ohm (Ω)",
        options: ["Ohm (Ω)", "Henry", "Farad", "Zero"],
        explanation: "Opposition offered by inductor to AC."
    },
    {
        numb: 74,
        question: "Unit of capacitive reactance XC is ______.",
        answer: "Ohm (Ω)",
        options: ["Ohm (Ω)", "Farad", "Henry", "Zero"],
        explanation: "Opposition offered by capacitor to AC."
    },
    {
        numb: 75,
        question: "Unit of Impedance Z is ______.",
        answer: "Ohm (Ω)",
        options: ["Ohm (Ω)", "Mho", "Siemens", "Zero"],
        explanation: "Total effective opposition."
    },
    {
        numb: 76,
        question: "Hot wire instruments measure ______ value of A.C.",
        answer: "RMS",
        options: ["RMS", "Average", "Peak", "Zero"],
        explanation: "Heat produced ∝ I²rms."
    },
    {
        numb: 77,
        question: "Skin effect describes current flowing mainly on the ______ of a conductor at high AC freq.",
        answer: "Surface",
        options: ["Surface", "Center", "Uniformly", "Zero"],
        explanation: "AC current density decreases towards the center."
    },
    {
        numb: 78,
        question: "To transmit 800kW at 4000V (R=15Ω), power loss as heat is:",
        answer: "600 kW",
        options: ["600 kW", "60 kW", "6 kW", "Zero"],
        explanation: "I = P/V = 800k/4k = 200A. Loss = I²R = 200² * 15 = 600000 W = 600kW."
    },
    {
        numb: 79,
        question: "In A.C. ammeter, the divisions on the scale are ______.",
        answer: "Not equally spaced",
        options: ["Not equally spaced", "Equally spaced", "Logarithmic", "Zero"],
        explanation: "Heat ∝ I²; scale is non-linear."
    },
    {
        numb: 80,
        question: "D.C. ammeter shows ______ reading for A.C.",
        answer: "Zero",
        options: ["Zero", "Average", "RMS", "Zero (Oscillates)"],
        explanation: "Average of AC over a cycle is zero."
    },
    {
        numb: 81,
        question: "Resonant frequency f0 of LCR circuit is ______.",
        answer: "1 / [2π√(LC)]",
        options: ["1 / [2π√(LC)]", "√(LC)", "L / C", "Zero"],
        explanation: "f0 = 1 / (2π√(LC))."
    },
    {
        numb: 82,
        question: "If R = 23Ω, L = 0.12H, C = 480nF, resonant frequency is approx ______.",
        answer: "663 Hz",
        options: ["663 Hz", "100 Hz", "1000 Hz", "Zero"],
        explanation: "f0 = 1 / [2π√(0.12 * 480e-9)] ≈ 663 Hz."
    },
    {
        numb: 83,
        question: "Power factor cos Φ in purely resistive circuit is ______.",
        answer: "1",
        options: ["1", "0", "0.5", "Zero"],
        explanation: "Current and voltage are in phase."
    },
    {
        numb: 84,
        question: "Power factor cos Φ in purely inductive circuit is ______.",
        answer: "0",
        options: ["0", "1", "0.5", "Zero"],
        explanation: "Phase difference is 90°."
    },
    {
        numb: 85,
        question: "Energy in a transformer is lost due to flux ______.",
        answer: "Leakage",
        options: ["Leakage", "Increase", "Stability", "Zero"],
        explanation: "Not all magnetic flux links secondary."
    },
    {
        numb: 86,
        question: "Core of transformer is made of soft iron because of ______ hysteresis loss.",
        answer: "Low",
        options: ["Low", "High", "Maximum", "Zero"],
        explanation: "Soft iron has narrow B-H loop."
    },
    {
        numb: 87,
        question: "D.C. voltage can be stepped down using a ______.",
        answer: "Rheostat (resistor)",
        options: ["Rheostat (resistor)", "Transformer", "Capacitor", "Zero"],
        explanation: "Transformers do not work on steady DC."
    },
    {
        numb: 88,
        question: "Humming loss in transformer is due to ______ of the core.",
        answer: "Vibrations",
        options: ["Vibrations", "Heating", "Cooling", "Zero"],
        explanation: "Magnetostriction causes vibrations at AC frequency."
    },
    {
        numb: 89,
        question: "Dimensions of XL (inductive reactance) are same as ______.",
        answer: "Resistance R",
        options: ["Resistance R", "Inductance L", "Current I", "Zero"],
        explanation: "Both measured in Ohms."
    },
    {
        numb: 90,
        question: "Dimensions of XC (capacitive reactance) are same as ______.",
        answer: "Resistance R",
        options: ["Resistance R", "Capacitance C", "Potential V", "Zero"],
        explanation: "Both measured in Ohms."
    },
    {
        numb: 91,
        question: "Mean value of A.C. (half cycle) is ______ times Peak value.",
        answer: "0.636",
        options: ["0.636", "0.707", "1.414", "Zero"],
        explanation: "Iavg = 2I0 / π ≈ 0.636 I0."
    },
    {
        numb: 92,
        question: "RMS value of A.C. is ______ times Peak value.",
        answer: "0.707",
        options: ["0.707", "0.636", "1.414", "Zero"],
        explanation: "Irms = I0 / √2 ≈ 0.707 I0."
    },
    {
        numb: 93,
        question: "A power factor of unity implies the circuit is purely ______.",
        answer: "Resistive",
        options: ["Resistive", "Inductive", "Capacitive", "Zero"],
        explanation: "cos Φ = 1."
    },
    {
        numb: 94,
        question: "Condition for maximum power transfer in LCR circuit is ______.",
        answer: "Resonance",
        options: ["Resonance", "Open circuit", "Short circuit", "Zero"],
        explanation: "Current is max, so P = I²R is max."
    },
    {
        numb: 95,
        question: "Frequency of A.C. in India is ______ Hz.",
        answer: "50",
        options: ["50", "60", "100", "Zero"],
        explanation: "Standard utility frequency."
    },
    {
        numb: 96,
        question: "Frequency of utility A.C. in USA is ______ Hz.",
        answer: "60",
        options: ["60", "50", "120", "Zero"],
        explanation: "Standard utility frequency in USA."
    },
    {
        numb: 97,
        question: "A choke coil should have ______ R and ______ L.",
        answer: "Low, High",
        options: ["Low, High", "High, Low", "High, High", "Zero"],
        explanation: "To limit AC current with minimum heat loss."
    },
    {
        numb: 98,
        question: "Transformer is used for ______.",
        answer: "Changing A.C. voltage levels",
        options: ["Changing A.C. voltage levels", "Converting AC to DC", "Measuring current", "Zero"],
        explanation: "Step-up or step-down voltage."
    },
    {
        numb: 99,
        question: "Rectifier is used to convert ______.",
        answer: "A.C. to D.C.",
        options: ["A.C. to D.C.", "D.C. to A.C.", "Voltage levels", "Zero"],
        explanation: "Unidirectional current flow."
    },
    {
        numb: 100,
        question: "Inverter is used to convert ______.",
        answer: "D.C. to A.C.",
        options: ["D.C. to A.C.", "A.C. to D.C.", "Voltage levels", "Zero"],
        explanation: "Commonly used in UPS systems."
    },
    {
        numb: 101,
        question: "Average value of A.C. over a complete cycle is zero because ______.",
        answer: "A.C. is positive and negative for equal halves",
        options: ["A.C. is positive and negative for equal halves", "A.C. magnitude is constant", "Current flows in one direction", "Zero"],
        explanation: "The integrated sum over a full period T is zero."
    },
    {
        numb: 102,
        question: "r.m.s. value of A.C. is not defined in terms of chemical effect because ______.",
        answer: "A.C. cannot be used in electrolysis",
        options: ["A.C. cannot be used in electrolysis", "A.C. has high voltage", "A.C. is too fast", "Zero"],
        explanation: "Electrolysis requires unidirectional ion movement (DC)."
    },
    {
        numb: 103,
        question: "Relation between Mean value (Im) and Peak value (I0) is Im = ______.",
        answer: "0.636 I0",
        options: ["0.636 I0", "0.707 I0", "I0", "Zero"],
        explanation: "Im = 2I0 / π."
    },
    {
        numb: 104,
        question: "A coil of radius 8cm, 10 turns rotates at 100 rad/s in B = 3x10⁻² T. Peak e.m.f. E0 is approx:",
        answer: "0.603 V",
        options: ["0.603 V", "1.2 V", "0.3 V", "Zero"],
        explanation: "E0 = NBAω = 10 * 3e-2 * (π * 0.08²) * 100 ≈ 0.603 V."
    },
    {
        numb: 105,
        question: "In LCR circuit (L=10mH, R=3Ω, C=1μF), resonant angular frequency ω0 is:",
        answer: "10⁴ rad/s",
        options: ["10⁴ rad/s", "10² rad/s", "10⁶ rad/s", "Zero"],
        explanation: "ω0 = 1 / √(10e-3 * 1e-6) = 1 / √(10e-9) = 1 / (10⁻⁴.⁵) approx 10⁴ rad/s."
    },
    {
        numb: 106,
        question: "In series LCR circuit, if XL > XC, the current ______ the voltage.",
        answer: "Lags",
        options: ["Lags", "Leads", "Is in phase with", "Zero"],
        explanation: "The circuit is inductive."
    },
    {
        numb: 107,
        question: "In series LCR circuit, if XL < XC, the current ______ the voltage.",
        answer: "Leads",
        options: ["Leads", "Lags", "Is in phase with", "Zero"],
        explanation: "The circuit is capacitive."
    },
    {
        numb: 108,
        question: "The power dissipation in a purely resistive AC circuit is P = ______.",
        answer: "V_rms * I_rms",
        options: ["V_rms * I_rms", "V_peak * I_peak", "Zero", "Infinite"],
        explanation: "cos Φ = 1."
    },
    {
        numb: 109,
        question: "A step-up transformer converts low voltage at high current into ______ voltage at low current.",
        answer: "High",
        options: ["High", "Low", "Same", "Zero"],
        explanation: "Power is conserved (ideal case), P = VI."
    },
    {
        numb: 110,
        question: "A step-down transformer converts ______ voltage at low current into low voltage at high current.",
        answer: "High",
        options: ["High", "Low", "Same", "Zero"],
        explanation: "Voltage is decreased, current is increased."
    },
    {
        numb: 111,
        question: "In an A.C. circuit with e.m.f. E = 100 sin(100t) and I = 100 sin(100t + π/3) mA, power is:",
        answer: "2.5 W",
        options: ["2.5 W", "5.0 W", "10 W", "Zero"],
        explanation: "P = (E0*I0/2) * cos Φ = (100 * 0.1 / 2) * cos(60°) = 5 * 0.5 = 2.5 W."
    },
    {
        numb: 112,
        question: "Inductive reactance of 1 H inductor at 50 Hz is approx ______.",
        answer: "314 Ω",
        options: ["314 Ω", "3.14 Ω", "31.4 Ω", "Zero"],
        explanation: "XL = 2π * 50 * 1 ≈ 314.16 Ω."
    },
    {
        numb: 113,
        question: "Capacitive reactance of 10 μF capacitor at 50 Hz is approx ______.",
        answer: "318 Ω",
        options: ["318 Ω", "31.8 Ω", "3.18 Ω", "Zero"],
        explanation: "XC = 1 / (2π * 50 * 10e-6) ≈ 318.31 Ω."
    },
    {
        numb: 114,
        question: "Resonant frequency depends on the values of ______ and ______.",
        answer: "L and C",
        options: ["L and C", "R and L", "R and C", "Zero"],
        explanation: "f0 = 1 / [2π√(LC)]."
    },
    {
        numb: 115,
        question: "The sharpness of resonance graph depends on the value of ______.",
        answer: "Resistance R",
        options: ["Resistance R", "Inductance L", "Voltage V", "Zero"],
        explanation: "Lower R leads to sharper resonance."
    },
    {
        numb: 116,
        question: "For tuning a radio to 1000 kHz with L=200μH, C should be approx ______.",
        answer: "126.6 pF",
        options: ["126.6 pF", "12.6 pF", "1.26 nF", "Zero"],
        explanation: "C = 1 / (4π²f²L) = 1 / (4 * π² * 10¹² * 200e-6) ≈ 126.6 pF."
    },
    {
        numb: 117,
        question: "The phase difference across L and C in series LCR at resonance is ______.",
        answer: "180°",
        options: ["180°", "0°", "90°", "Zero"],
        explanation: "One leads by 90°, other lags by 90°."
    },
    {
        numb: 118,
        question: "Quality factor Q is defined as ω0L / ______.",
        answer: "R",
        options: ["R", "C", "V", "Zero"],
        explanation: "Dimensionless number representing damping."
    },
    {
        numb: 119,
        question: "In a parallel LCR circuit at resonance, the impedance is ______.",
        answer: "Maximum (equals R)",
        options: ["Maximum (equals R)", "Minimum", "Zero", "Infinite"],
        explanation: "Current is minimum at resonance."
    },
    {
        numb: 120,
        question: "Efficiency of a transformer is Output Power / ______ Power.",
        answer: "Input",
        options: ["Input", "Copper", "Iron", "Zero"],
        explanation: "η = P_out / P_in."
    },
    {
        numb: 121,
        question: "Flux loss in transformer is due to ______ coupling.",
        answer: "Imperfect",
        options: ["Imperfect", "Perfect", "Magnetic", "Zero"],
        explanation: "Leakage flux doesn't link both coils."
    },
    {
        numb: 122,
        question: "Iron core in a transformer provides a path of ______ permeability.",
        answer: "High",
        options: ["High", "Low", "Zero", "Variable"],
        explanation: "Concentrates magnetic flux."
    },
    {
        numb: 123,
        question: "Does increasing A.C. frequency change the resistance of a pure resistor?",
        answer: "No",
        options: ["No", "Yes, increases", "Yes, decreases", "Zero"],
        explanation: "Ohmic resistance is frequency-independent (ideally)."
    },
    {
        numb: 124,
        question: "Power factor cos Φ in LCR series at resonance is ______.",
        answer: "1",
        options: ["1", "0", "0.707", "Zero"],
        explanation: "Φ = 0°."
    },
    {
        numb: 125,
        question: "Instantaneous voltage in a house is often V = 311 sin(100πt). The RMS voltage is ______.",
        answer: "220 V",
        options: ["220 V", "110 V", "311 V", "Zero"],
        explanation: "V_rms = 311 / √2 ≈ 220 V."
    },
    {
        numb: 126,
        question: "If peak current I0 = 14.14 A at 50 Hz, RMS current is ______.",
        answer: "10 A",
        options: ["10 A", "14.14 A", "7.07 A", "Zero"],
        explanation: "Irms = 14.14 / 1.414 = 10 A."
    },
    {
        numb: 127,
        question: "Time taken to reach peak value from zero at 50 Hz is ______.",
        answer: "5 ms",
        options: ["5 ms", "10 ms", "20 ms", "Zero"],
        explanation: "t = T/4 = 1 / (4 * 50) = 0.005 s = 5 ms."
    },
    {
        numb: 128,
        question: "Which of these losses is NOT found in a transformer?",
        answer: "Centrifugal loss",
        options: ["Centrifugal loss", "Copper loss", "Iron loss", "Flux loss"],
        explanation: "Transformers have no moving parts."
    },
    {
        numb: 129,
        question: "Induction motor works on ______ current.",
        answer: "Alternating",
        options: ["Alternating", "Direct", "Both", "Zero"],
        explanation: "Needs rotating magnetic field created by AC."
    },
    {
        numb: 130,
        question: "A choke coil in series with a 50V lamp on 100V AC must have ______ voltage across it.",
        answer: "86.6 V (Vector sum)",
        options: ["86.6 V (Vector sum)", "50 V", "150 V", "Zero"],
        explanation: "V_total = √[V_R² + V_L²] => 100² = 50² + V_L² => V_L = √7500 ≈ 86.6V."
    },
    {
        numb: 131,
        question: "In LC circuit, energy shared equally between L and C at time t = ______.",
        answer: "T/8",
        options: ["T/8", "T/4", "T/2", "Zero"],
        explanation: "Energy ∝ Q² and I²; equal sharing at 45° phase."
    },
    {
        numb: 132,
        question: "In a series LCR, average power over a full cycle is ______.",
        answer: "E_rms * I_rms * cos Φ",
        options: ["E_rms * I_rms * cos Φ", "E_rms * I_rms", "Zero", "E_peak * I_peak"],
        explanation: "Standard power formula."
    },
    {
        numb: 133,
        question: "Transformation ratio K = ______.",
        answer: "Ns / Np",
        options: ["Ns / Np", "Np / Ns", "Vp / Vs", "Zero"],
        explanation: "Standard definition."
    },
    {
        numb: 134,
        question: "In an ideal transformer, Input Power is ______ Output Power.",
        answer: "Equal to",
        options: ["Equal to", "Greater than", "Less than", "Zero"],
        explanation: "Conservation of energy (neglecting losses)."
    },
    {
        numb: 135,
        question: "Copper loss is minimized by using ______ wire.",
        answer: "Thick",
        options: ["Thick", "Thin", "Iron", "Zero"],
        explanation: "Thick wire has lower resistance."
    },
    {
        numb: 136,
        question: "Laminated core reduces ______ currents.",
        answer: "Eddy",
        options: ["Eddy", "Direct", "Surface", "Zero"],
        explanation: "Circulating currents in core."
    },
    {
        numb: 137,
        question: "A choke coil is a high ______ and low ______ coil.",
        answer: "Inductance, Resistance",
        options: ["Inductance, Resistance", "Resistance, Inductance", "Capacitance, Inductance", "Zero"],
        explanation: "Effective for current limiting with low loss."
    },
    {
        numb: 138,
        question: "Low frequency choke coil has a ______ core.",
        answer: "Soft iron",
        options: ["Soft iron", "Air", "Copper", "Zero"],
        explanation: "To increase L."
    },
    {
        numb: 139,
        question: "High frequency (RF) choke coil has an ______ core.",
        answer: "Air",
        options: ["Air", "Iron", "Steel", "Zero"],
        explanation: "Iron loss is too high at high freq."
    },
    {
        numb: 140,
        question: "Resistance R is independent of frequency ______.",
        answer: "True",
        options: ["True", "False", "Partially", "Zero"],
        explanation: "Neglecting skin effect."
    },
    {
        numb: 141,
        question: "Reactance X depends on frequency ______.",
        answer: "True",
        options: ["True", "False", "Partially", "Zero"],
        explanation: "Both XL and XC are frequency-dependent."
    },
    {
        numb: 142,
        question: "In India, the peak voltage of domestic AC is ______.",
        answer: "311 V",
        options: ["311 V", "220 V", "440 V", "110 V"],
        explanation: "√2 * 220 ≈ 311V."
    },
    {
        numb: 143,
        question: "220V RMS AC and 220V DC: which is more dangerous?",
        answer: "220V AC",
        options: ["220V AC", "220V DC", "Both same", "Zero"],
        explanation: "AC has higher peak value."
    },
    {
        numb: 144,
        question: "Average value of sin²(ωt) over a full cycle is ______.",
        answer: "1/2",
        options: ["1/2", "1", "0", "Zero"],
        explanation: "Integrates to T/2 over period T."
    },
    {
        numb: 145,
        question: "Average value of sin(ωt) over a full cycle is ______.",
        answer: "0",
        options: ["0", "1", "1/2", "Zero"],
        explanation: "Symmetrical positive and negative halves."
    },
    {
        numb: 146,
        question: "Impedance triangle: hypotenuse represents ______.",
        answer: "Impedance Z",
        options: ["Impedance Z", "Resistance R", "Reactance X", "Zero"],
        explanation: "Z = √[R² + (X_L - X_C)²]."
    },
    {
        numb: 147,
        question: "Current through a coil L = 2mH is I = 0.2 sin(200t). Reactance XL is ______.",
        answer: "0.4 Ω",
        options: ["0.4 Ω", "400 Ω", "4 Ω", "Zero"],
        explanation: "XL = ωL = 200 * 2e-3 = 0.4 Ω."
    },
    {
        numb: 148,
        question: "Max induced e.m.f. from I = 0.2 sin(200t) through L = 2mH is ______.",
        answer: "0.08 V",
        options: ["0.08 V", "0.4 V", "8 V", "Zero"],
        explanation: "e = L(dI/dt). dI/dt = 40 cos(200t). E0 = 2e-3 * 40 = 0.08 V."
    },
    {
        numb: 149,
        question: "The power dissipation in an LCR circuit is max at ______.",
        answer: "Resonant frequency",
        options: ["Resonant frequency", "Zero frequency", "Infinite frequency", "Zero"],
        explanation: "Current is max at resonance."
    },
    {
        numb: 150,
        question: "In a series RC circuit, the current ______ the voltage.",
        answer: "Leads",
        options: ["Leads", "Lags", "Is in phase", "Zero"],
        explanation: "Capacitance causes current lead."
    },
    {
        numb: 151,
        question: "In an A.C. circuit, power is dissipated only due to ______.",
        answer: "Ohmic resistance",
        options: ["Ohmic resistance", "Inductance", "Capacitance", "Zero"],
        explanation: "Inductors and capacitors store and release energy without net consumption."
    },
    {
        numb: 152,
        question: "Frequency of A.C. supplied to houses in India is ______ cps (Hz).",
        answer: "50",
        options: ["50", "60", "100", "Zero"],
        explanation: "Standard utility frequency."
    },
    {
        numb: 153,
        question: "A choke coil controls alternating current without much loss of ______.",
        answer: "Electrical energy",
        options: ["Electrical energy", "Voltage", "Magnetic flux", "Zero"],
        explanation: "Limits current via reactance rather than resistance."
    },
    {
        numb: 154,
        question: "If A.C. frequency is doubled, capacitive reactance XC is ______.",
        answer: "Halved",
        options: ["Halved", "Doubled", "Quadrupled", "Zero"],
        explanation: "XC = 1 / (2πvC); inversely proportional to frequency."
    },
    {
        numb: 155,
        question: "If A.C. frequency is doubled, inductive reactance XL is ______.",
        answer: "Doubled",
        options: ["Doubled", "Halved", "Quadrupled", "Zero"],
        explanation: "XL = 2πvL; directly proportional to frequency."
    },
    {
        numb: 156,
        question: "The current due to which no power is consumed in an A.C. circuit is ______.",
        answer: "Wattless current",
        options: ["Wattless current", "Reactive current", "Induced current", "Zero"],
        explanation: "Phase difference is π/2."
    },
    {
        numb: 157,
        question: "Reciprocal of impedance Z is called ______.",
        answer: "Admittance",
        options: ["Admittance", "Conductance", "Susceptance", "Zero"],
        explanation: "Indicates how easily current flows."
    },
    {
        numb: 158,
        question: "A capacitor behaves as a ______ at very high A.C. frequency.",
        answer: "Conductor",
        options: ["Conductor", "Insulator", "Resistor", "Zero"],
        explanation: "XC tends to zero."
    },
    {
        numb: 159,
        question: "Energy loss due to repeated magnetisation of core is ______ loss.",
        answer: "Hysteresis",
        options: ["Hysteresis", "Copper", "Eddy", "Zero"],
        explanation: "Energy is spent aligning magnetic domains."
    },
    {
        numb: 160,
        question: "Power factor is unity when the circuit contains ______.",
        answer: "Ideal resistance only",
        options: ["Ideal resistance only", "Pure inductor", "Pure capacitor", "Zero"],
        explanation: "Phase angle is zero."
    },
    {
        numb: 161,
        question: "Hot wire ammeter works on the principle of ______ effect.",
        answer: "Heating",
        options: ["Heating", "Magnetic", "Chemical", "Zero"],
        explanation: "Deflection ∝ heat ∝ I²rms."
    },
    {
        numb: 162,
        question: "A.C. cannot be measured by D.C. ammeters because ______.",
        answer: "Average A.C. over cycle is zero",
        options: ["Average A.C. over cycle is zero", "A.C. is too strong", "A.C. has high voltage", "Zero"],
        explanation: "D.C. ammeters show average value."
    },
    {
        numb: 163,
        question: "Phase difference between voltage across L and C in A.C. circuit is ______.",
        answer: "180°",
        options: ["180°", "0°", "90°", "Zero"],
        explanation: "Vectors for VL and VC are opposite."
    },
    {
        numb: 164,
        question: "Dimensions of capacitive reactance XC are the same as ______.",
        answer: "Ohm (Resistance)",
        options: ["Ohm (Resistance)", "Farad", "Henry", "Zero"],
        explanation: "[ML²T⁻³I⁻²] same as resistance."
    },
    {
        numb: 165,
        question: "Average value of sin(ωt) over half cycle (0 to T/2) is ______.",
        answer: "2/π",
        options: ["2/π", "1/π", "0", "Zero"],
        explanation: "Integrated value is 2/ω."
    },
    {
        numb: 166,
        question: "In LCR circuit at resonance, Z is ______.",
        answer: "Minimum (equals R)",
        options: ["Minimum (equals R)", "Maximum", "Zero", "Infinite"],
        explanation: "XL and XC cancel."
    },
    {
        numb: 167,
        question: "Wait - In parallel LCR resonance, Z is ______.",
        answer: "Maximum",
        options: ["Maximum", "Minimum", "Zero", "Infinite"],
        explanation: "Current is minimum in parallel resonance."
    },
    {
        numb: 168,
        question: "A capacitor ______ D.C.",
        answer: "Blocks",
        options: ["Blocks", "Conducts", "Amplifies", "Zero"],
        explanation: "XC is infinite for f=0."
    },
    {
        numb: 169,
        question: "An inductor ______ high frequency A.C.",
        answer: "Blocks",
        options: ["Blocks", "Conducts", "Shorts", "Zero"],
        explanation: "XL increases with frequency."
    },
    {
        numb: 170,
        question: "The unit of transformation ratio K is ______.",
        answer: "Dimensionless",
        options: ["Dimensionless", "Volts", "Turns", "Zero"],
        explanation: "Ratio of similar quantities (Turns or Voltages)."
    },
    {
        numb: 171,
        question: "Is Ohm's law applicable to A.C. circuits?",
        answer: "Yes, using Impedance Z",
        options: ["Yes, using Impedance Z", "No, never", "Only for RMS", "Zero"],
        explanation: "V_rms = I_rms * Z."
    },
    {
        numb: 172,
        question: "For series LCR, at what point is current amplitude maximum?",
        answer: "Resonant frequency",
        options: ["Resonant frequency", "Low frequency", "High frequency", "Zero"],
        explanation: "Internal reactances cancel out."
    },
    {
        numb: 173,
        question: "If potential drop across R is 200V and across L is 150V, applied voltage is:",
        answer: "250 V",
        options: ["250 V", "350 V", "50 V", "Zero"],
        explanation: "V = √[VR² + VL²] = √[200² + 150²] = 250 V."
    },
    {
        numb: 174,
        question: "Efficiency of a transformer is decreased by ______.",
        answer: "Copper loss",
        options: ["Copper loss", "Silicon core", "Lamination", "None"],
        explanation: "Heat loss reduces output energy."
    },
    {
        numb: 175,
        question: "Step-up transformer is used for ______ distance transmission.",
        answer: "Long",
        options: ["Long", "Short", "Internal", "Zero"],
        explanation: "To minimize I²R losses by using high voltage."
    },
    {
        numb: 176,
        question: "Peak-to-peak change in 220V A.C. is approx ______ V.",
        answer: "622 V",
        options: ["622 V", "311 V", "440 V", "Zero"],
        explanation: "From +311V to -311V."
    },
    {
        numb: 177,
        question: "Self-inductance L of a coil when leads voltage by 45° at 1000Hz (Z=100Ω):",
        answer: "11.25 mH",
        options: ["11.25 mH", "22.5 mH", "5.6 mH", "Zero"],
        explanation: "tan 45° = 1 = ωL/R. R² + (ωL)² = 100² => 2(ωL)² = 10000 => ωL = 70.7. L = 70.7 / (2π*1000) ≈ 11.25 mH."
    },
    {
        numb: 178,
        question: "In parallel LCR circuit, current through L and C are ______ at resonance.",
        answer: "Equal and opposite",
        options: ["Equal and opposite", "In phase", "Maximum", "Zero"],
        explanation: "They sum up to zero net current from the source."
    },
    {
        numb: 179,
        question: "Frequency at which current falls to 1/√2 of max value is separated by ______.",
        answer: "R / (2πL)",
        options: ["R / (2πL)", "L / (2πR)", "1 / √(LC)", "Zero"],
        explanation: "Relationship between Bandwidth and Quality factor."
    },
    {
        numb: 180,
        question: "Power factor is unity for L-C-R when ______.",
        answer: "XL = XC",
        options: ["XL = XC", "R = 0", "XL = 0", "Zero"],
        explanation: "Resonance condition."
    },
    {
        numb: 181,
        question: "Resultant of 3A DC and I = 4 sin(ωt) AC has effective value I_rms = ______.",
        answer: "√17 A",
        options: ["√17 A", "5 A", "7 A", "Zero"],
        explanation: "I_eff = √[I_dc² + I_rms_ac²] = √[3² + (4/√2)²] = √[9 + 8] = √17 ≈ 4.12 A."
    },
    {
        numb: 182,
        question: "A coil (110V, 50Hz) drawing 100W at 1A has resistance ______.",
        answer: "100 Ω",
        options: ["100 Ω", "110 Ω", "10 Ω", "Zero"],
        explanation: "P = I²R => 100 = 1² * R => R = 100 Ω."
    },
    {
        numb: 183,
        question: "A coil (110V, 50Hz) drawing 100W at 1A has inductance ______ approx.",
        answer: "0.146 H",
        options: ["0.146 H", "0.5 H", "1.0 H", "Zero"],
        explanation: "Z = V/I = 110 Ω. 110² = 100² + (ωL)² => ωL ≈ 45.8. L = 45.8 / (100π) ≈ 0.146 H."
    },
    {
        numb: 184,
        question: "Which material is best for the core of a transformer?",
        answer: "Soft iron",
        options: ["Soft iron", "Steel", "Aluminium", "Copper"],
        explanation: "Low hysteresis loss."
    },
    {
        numb: 185,
        question: "Eddy currents are produced in ______ magnetic fields.",
        answer: "Changing",
        options: ["Changing", "Steady", "Static", "Zero"],
        explanation: "Induces currents in the bulk of the material."
    },
    {
        numb: 186,
        question: "Lamination ______ the path of eddy currents.",
        answer: "Interrupts",
        options: ["Interrupts", "Shortens", "Improves", "Zero"],
        explanation: "Restricts circulating currents to thin layers."
    },
    {
        numb: 187,
        question: "Transformation ratio of matching source (10kΩ) to load (10Ω) is ______.",
        answer: "√1000 ≈ 31.6",
        options: ["√1000 ≈ 31.6", "1000", "0.001", "Zero"],
        explanation: "K = √(Zs / Zl) or inverse depending on direction."
    },
    {
        numb: 188,
        question: "In RC series, if R = 500Ω, C = 0.1μF at 1000Hz, phase angle Φ is approx ______.",
        answer: "1.26 rad (72°)",
        options: ["1.26 rad (72°)", "45°", "90°", "Zero"],
        explanation: "XC = 1/(2π*1000*0.1e-6) ≈ 1591. tan Φ = XC/R = 1591/500 ≈ 3.18."
    },
    {
        numb: 189,
        question: "RMS voltage of air capacitor (3x10⁶ V/m dielectric strength, 1mm gap) is approx:",
        answer: "2121.3 V",
        options: ["2121.3 V", "3000 V", "1000 V", "Zero"],
        explanation: "V_max = E*d = 3e6 * 1e-3 = 3000V. V_rms = 3000 / √2 ≈ 2121.3 V."
    },
    {
        numb: 190,
        question: "Wattless component of current in LR circuit (L=0.7H, R=220Ω, 220V, 50Hz) is ______ approx.",
        answer: "0.5 A",
        options: ["0.5 A", "1.0 A", "0.7 A", "Zero"],
        explanation: "XL = 2π*50*0.7 = 220 Ω. Z = √[220² + 220²] = 220√2. I = 1/√2. sin Φ = 1/√2. I sin Φ = (1/√2)*(1/√2) = 0.5 A."
    },
    {
        numb: 191,
        question: "Reactance X is measured in ______.",
        answer: "Ohms",
        options: ["Ohms", "Watts", "Henries", "Farads"],
        explanation: "Opposition to current flow."
    },
    {
        numb: 192,
        question: "Impedance Z is measured in ______.",
        answer: "Ohms",
        options: ["Ohms", "Watts", "Mhos", "Siemens"],
        explanation: "Total opposition in AC."
    },
    {
        numb: 193,
        question: "Power P is measured in ______.",
        answer: "Watts",
        options: ["Watts", "Joules", "Ohms", "Volts"],
        explanation: "Rate of energy consumption."
    },
    {
        numb: 194,
        question: "Inductance L is measured in ______.",
        answer: "Henries",
        options: ["Henries", "Ohms", "Farads", "Watts"],
        explanation: "Property of inductor."
    },
    {
        numb: 195,
        question: "Capacitance C is measured in ______.",
        answer: "Farads",
        options: ["Farads", "Henries", "Ohms", "Coulombs"],
        explanation: "Property of capacitor."
    },
    {
        numb: 196,
        question: "A choke coil ______ and is used in tubes.",
        answer: "Limits current",
        options: ["Limits current", "Starts the arc", "Increases voltage", "Zero"],
        explanation: "Inductive ballast."
    },
    {
        numb: 197,
        question: "Step-up transformer increases ______ and decreases ______.",
        answer: "Voltage, Current",
        options: ["Voltage, Current", "Current, Voltage", "Power, Energy", "Zero"],
        explanation: "Increases potential, decreases flow."
    },
    {
        numb: 198,
        question: "Step-down transformer increases ______ and decreases ______.",
        answer: "Current, Voltage",
        options: ["Current, Voltage", "Voltage, Current", "Turns, Flux", "Zero"],
        explanation: "Increases flow, decreases potential."
    },
    {
        numb: 199,
        question: "Ideal transformer efficiency is ______%.",
        answer: "100",
        options: ["100", "90", "99", "Zero"],
        explanation: "No energy loss theoretical."
    },
    {
        numb: 200,
        question: "A D.C. ammeter cannot read A.C. because its ______ torque is zero.",
        answer: "Average",
        options: ["Average", "Peak", "Instantaneous", "Zero"],
        explanation: "Forces in opposite directions cancel out."
    },
    {
        numb: 201,
        question: "Thermal capacity of resistance is used to measure ______ in hot-wire meters.",
        answer: "Heating",
        options: ["Heating", "Cooling", "Pressure", "Zero"],
        explanation: "Expansion of wire due to heat."
    },
    {
        numb: 202,
        question: "Magnetic flux link Φ is NBA ______.",
        answer: "cos θ",
        options: ["cos θ", "sin θ", "tan θ", "Zero"],
        explanation: "Standard flux formula."
    },
    {
        numb: 203,
        question: "Reactance of capacitor vs freq graph is a ______.",
        answer: "Rectangular hyperbola",
        options: ["Rectangular hyperbola", "Straight line", "Parabola", "Zero"],
        explanation: "XC ∝ 1/f."
    },
    {
        numb: 204,
        question: "Reactance of inductor vs freq graph is a ______.",
        answer: "Straight line through origin",
        options: ["Straight line through origin", "Parabola", "Hyperbola", "Zero"],
        explanation: "XL ∝ f."
    },
    {
        numb: 205,
        question: "Phase angle Φ = tan⁻¹[______ / R].",
        answer: "(XL - XC)",
        options: ["(XL - XC)", "(XL + XC)", "XL", "XC"],
        explanation: "Phasor addition of voltages."
    },
    {
        numb: 206,
        question: "A.C. voltage equation E = E0 sin(______).",
        answer: "ωt",
        options: ["ωt", "2πt", "ft", "Zero"],
        explanation: "Angular frequency and time."
    },
    {
        numb: 207,
        question: "Value of ω is ______.",
        answer: "2πf",
        options: ["2πf", "πf", "f/2π", "Zero"],
        explanation: "Angular velocity mapping."
    },
    {
        numb: 208,
        question: "Unit of Kval (transformation ratio) is ______.",
        answer: "None",
        options: ["None", "Volts", "Turns", "Zero"],
        explanation: "Dimensionless."
    },
    {
        numb: 209,
        question: "Lenz's law provides the ______ of induced current.",
        answer: "Direction",
        options: ["Direction", "Magnitude", "Duration", "Zero"],
        explanation: "Direction opposes the change."
    },
    {
        numb: 210,
        question: "Alternating current reverses ______ periodically.",
        answer: "Direction",
        options: ["Direction", "Magnitude", "Voltage", "Zero"],
        explanation: "Essential property of AC."
    }
];


