window.questionRegistry["physics_12th_ch6"] = [
    {
        numb: 1,
        question: "Predict the direction of induced current when a magnet moves towards a solenoid (face q becomes South, p becomes North).",
        answer: "Along pq (clockwise seen from magnet side)",
        options: ["Along pq (clockwise seen from magnet side)", "Along qp (anti-clockwise)", "No current", "Oscillating"],
        explanation: "According to Lenz's law, the induced e.m.f. opposes the motion of the magnet, making face q a south pole."
    },
    {
        numb: 2,
        question: "When a wire of irregular shape turns into a circular shape in a magnetic field, the induced current flows in which direction?",
        answer: "Anti-clockwise (adcl-a)",
        options: ["Anti-clockwise (adcl-a)", "Clockwise", "No current", "Fluctuating"],
        explanation: "Area increases, so flux increases. Induced current opposes this by producing a field out of the paper."
    },
    {
        numb: 3,
        question: "A long solenoid with 15 turns/cm has a small loop of area 2.0 cm². If current changes from 2A to 4A in 0.1s, induced emf is:",
        answer: "7.54 x 10⁻⁶ V",
        options: ["7.54 x 10⁻⁶ V", "3.2 x 10⁻⁴ V", "1.5 x 10⁻⁵ V", "Zero"],
        explanation: "e = μ₀ * n * A * (dI/dt) = 4πx10⁻⁷ * 1500 * 2x10⁻⁴ * 20 ≈ 7.54 x 10⁻⁶ V."
    },
    {
        numb: 4,
        question: "Induced emf in a rectangular loop (8cm x 2cm) moving out of 0.3T field at 1cm/s normal to longer side is:",
        answer: "0.24 mV",
        options: ["0.24 mV", "0.06 mV", "2.4 V", "Zero"],
        explanation: "e = Blv = 0.3 * 0.08 * 0.01 = 0.24 x 10⁻³ V."
    },
    {
        numb: 5,
        question: "A 1.0m rod rotates at 400 rad/s in 0.5T field normal to axis. Emf between centre and ring is:",
        answer: "100 V",
        options: ["100 V", "200 V", "50 V", "Zero"],
        explanation: "e = 1/2 * B * ω * l² = 0.5 * 0.5 * 400 * 1² = 100 V."
    },
    {
        numb: 6,
        question: "In a circular coil (r=8cm, N=20) rotating at 50 rad/s in 3x10⁻² T, maximum emf induced is:",
        answer: "0.603 V",
        options: ["0.603 V", "0.3 V", "1.2 V", "Zero"],
        explanation: "emax = B * A * N * ω = 0.03 * (π * 0.08²) * 20 * 50 ≈ 0.603 V."
    },
    {
        numb: 7,
        question: "A 10m horizontal wire falling at 5m/s normal to BH=0.3x10⁻⁴ T has instantaneous emf:",
        answer: "1.5 x 10⁻³ V",
        options: ["1.5 x 10⁻³ V", "3.0 x 10⁻⁴ V", "0.15 V", "Zero"],
        explanation: "e = BH * l * v = 0.3e-4 * 10 * 5 = 1.5e-3 V."
    },
    {
        numb: 8,
        question: "If current falls from 5.0A to 0.0A in 0.1s and induces 200V emf, the self-inductance L is:",
        answer: "4 H",
        options: ["4 H", "2 H", "0.4 H", "40 H"],
        explanation: "L = e / (dI/dt) = 200 / (5/0.1) = 200 / 50 = 4 H."
    },
    {
        numb: 9,
        question: "A pair of coils has mutual inductance 1.5H. If current in one changes from 0 to 20A, flux change in other is:",
        answer: "30 Wb",
        options: ["30 Wb", "15 Wb", "40 Wb", "Zero"],
        explanation: "dΦ = M * dI = 1.5 * 20 = 30 Wb."
    },
    {
        numb: 10,
        question: "Jet plane wing (25m span) at 1800 km/h in Earth's field 5x10⁻⁴ T (dip 30°) develops voltage:",
        answer: "3.1 V",
        options: ["3.1 V", "6.2 V", "1.5 V", "Zero"],
        explanation: "e = Bv * l * v = (B sin 30°) * l * v = 2.5e-4 * 25 * 500 = 3.125 V."
    },
    {
        numb: 11,
        question: "A loop in a decreasing field (0.3T to 0, rate 0.02 T/s) with area 16cm² and resistance 1.6Ω dissipates power:",
        answer: "6.4 x 10⁻¹⁰ W",
        options: ["6.4 x 10⁻¹¹ W", "6.4 x 10⁻¹⁰ W", "3.2 x 10⁻⁹ W", "Zero"],
        explanation: "e = A * (dB/dt) = 16e-4 * 0.02 = 3.2e-5 V. P = e²/R = (3.2e-5)² / 1.6 = 6.4e-10 W."
    },
    {
        numb: 12,
        question: "A square loop (side 12cm, R=4.5mΩ) moved at 8cm/s in a field gradient 0.1 T/m and time rate -10⁻³ T/s has total emf:",
        answer: "1.296 x 10⁻³ V",
        options: ["1.296 x 10⁻³ V", "1.152 x 10⁻³ V", "0.144 x 10⁻³ V", "Zero"],
        explanation: "e_total = e_motion + e_time = (A * v * dB/dx) + (A * dB/dt) = (0.0144 * 0.08 * 0.1) + (0.0144 * 0.001) = 1.152e-4 + 1.44e-5 = 1.296e-4 V? Wait, recap: (0.0144 * 0.08 * 1.0) if gradient is 1.0 T/m? No, 0.1 T/m. A = 0.0144. e1 = 0.0144 * 0.08 * 1.0 (if 1.0 T/m) = 1.152e-3. e2 = 0.0144 * 10⁻³ = 0.144e-4. Total ≈ 1.296e-3 V."
    },
    {
        numb: 13,
        question: "Search coil (2cm², 25 turns) snatched from field region. If 7.5 mC charge flows and R=0.5Ω, field B is:",
        answer: "0.75 T",
        options: ["0.75 T", "0.5 T", "1.5 T", "Zero"],
        explanation: "q = N*B*A / R => B = q*R / (N*A) = (7.5e-3 * 0.5) / (25 * 2e-4) = 3.75e-3 / 50e-4 = 0.75 T."
    },
    {
        numb: 14,
        question: "Metal rod PQ (15cm) moved at 12cm/s in 0.5T field. Polarity of P and Q is:",
        answer: "P positive, Q negative",
        options: ["P positive, Q negative", "P negative, Q positive", "Both neutral", "Changes with speed"],
        explanation: "Using Fleming's left hand rule (or F = q(v x B)), electrons move to Q."
    },
    {
        numb: 15,
        question: "Solenoid (30cm, 500 turns, 25cm²) with 2.5A current switched off in 10⁻³ s has back emf:",
        answer: "6.5 V",
        options: ["6.5 V", "13 V", "3.2 V", "Zero"],
        explanation: "e = (N * Φ) / dt = (N * μ₀ * n * I * A) / dt ≈ (500 * 4πx10⁻⁷ * (500/0.3) * 2.5 * 25x10⁻⁴) / 10⁻³ ≈ 6.54 V."
    },
    {
        numb: 16,
        question: "Mutual inductance between long wire and square loop (side a, distance x) is proportional to:",
        answer: "ln(1 + a/x)",
        options: ["ln(1 + a/x)", "a / x", "x / a", "1 / x²"],
        explanation: "Φ = ∫ (μ₀I/2πr) a dr from x to x+a => M = (μ₀a/2π) ln((x+a)/x)."
    },
    {
        numb: 17,
        question: "Angular velocity of a wheel (mass M, charge λ/length) after field B inside rim is switched off is:",
        answer: "πa²λB / MR",
        options: ["πa²λB / MR", "2πa²λB / MR", "λB / M", "Zero"],
        explanation: "Torque integral equals change in angular momentum. Result is πa²λB / MR."
    },
    {
        numb: 18,
        question: "Define electromagnetic induction (E.M.I.).",
        answer: "Process of generating induced e.m.f. by changing magnetic flux",
        options: ["Process of generating induced e.m.f. by changing magnetic flux", "Process of generating heat", "Alignment of dipoles", "Flow of electrons in a DC circuit"],
        explanation: "E.M.I. is the generation of emf or current in a circuit due to change in linked magnetic flux."
    },
    {
        numb: 19,
        question: "Why is E.M.I. an important phenomenon?",
        answer: "Basis for dynamos, generators, and transformers",
        options: ["Basis for dynamos, generators, and transformers", "It explains gravity", "It describes light speed", "It makes batteries last longer"],
        explanation: "Most modern power generation and distribution relies on E.M.I."
    },
    {
        numb: 20,
        question: "What is the S.I. unit of magnetic flux?",
        answer: "Weber (Wb)",
        options: ["Weber (Wb)", "Tesla (T)", "Gauss (G)", "Henry (H)"],
        explanation: "Magnetic flux is measured in Webers (Wb = T*m²)."
    },
    {
        numb: 21,
        question: "What is the basic cause of induced e.m.f.?",
        answer: "Change in magnetic flux",
        options: ["Change in magnetic flux", "Constant magnetic field", "Flow of static charge", "Presence of a resistor"],
        explanation: "As per Faraday's law, emf is induced by flux change."
    },
    {
        numb: 22,
        question: "State the law that determines the direction of induced current.",
        answer: "Lenz's Law",
        options: ["Lenz's Law", "Faraday's Law", "Ohm's Law", "Ampere's Law"],
        explanation: "Lenz's law states that induced current opposes the cause of its production."
    },
    {
        numb: 23,
        question: "Fleming's Right Hand Rule is used to find the direction of:",
        answer: "Induced e.m.f. or current",
        options: ["Induced e.m.f. or current", "Magnetic force on a charge", "Electric field", "North pole"],
        explanation: "Thumb (motion), First finger (field), Central finger (induced current)."
    },
    {
        numb: 24,
        question: "Which method can be used to produce induced e.m.f.?",
        answer: "By changing area, B-field, or orientation",
        options: ["By changing area, B-field, or orientation", "By keeping flux constant", "By cooling the wire", "By using a plastic core"],
        explanation: "All three (A, B, or θ) change the flux Φ = BA cos θ."
    },
    {
        numb: 25,
        question: "Does a change in magnetic flux always induce current?",
        answer: "Only if the circuit is complete",
        options: ["Only if the circuit is complete", "Yes, always", "No, never", "Only in superconductors"],
        explanation: "E.m.f. is always induced, but current requires a closed path."
    },
    {
        numb: 26,
        question: "Define motional e.m.f.",
        answer: "Emf produced by moving a conductor through a magnetic field",
        options: ["Emf produced by moving a conductor through a magnetic field", "Emf from a stationary battery", "Thermal emf", "Static charge emf"],
        explanation: "Moving a rod of length l at velocity v in field B induces e = Blv."
    },
    {
        numb: 27,
        question: "What are eddy currents also called?",
        answer: "Foucault currents",
        options: ["Foucault currents", "Convection currents", "Displacement currents", "Leakage currents"],
        explanation: "Closed loops of induced current in a solid conductor."
    },
    {
        numb: 28,
        question: "Define self-induction.",
        answer: "Induced e.m.f. in a coil due to current change in the same coil",
        options: ["Induced e.m.f. in a coil due to current change in the same coil", "Emf in a second coil", "Heat generation", "Mechanical vibration"],
        explanation: "The coil opposes changes in its own current."
    },
    {
        numb: 29,
        question: "Define one henry (1 H).",
        answer: "1V induced by current changing at 1A/s",
        options: ["1V induced by current changing at 1A/s", "1V for 1A flow", "1Wb per 1m²", "Zero resistance"],
        explanation: "Standard S.I. unit of inductance."
    },
    {
        numb: 30,
        question: "Define mutual induction.",
        answer: "Emf induced in a coil due to current change in an adjacent coil",
        options: ["Emf induced in a coil due to current change in an adjacent coil", "Emf in the same coil", "Magnetic attraction", "Repulsion"],
        explanation: "Flux from one coil links with another."
    },
    {
        numb: 31,
        question: "Why is induced e.m.f. called back e.m.f.?",
        answer: "It opposes the applied voltage",
        options: ["It opposes the applied voltage", "It comes from the back of the coil", "It is very small", "It is constant"],
        explanation: "By Lenz's law, it resists the change in current."
    },
    {
        numb: 32,
        question: "What is the induced current in a loop if the wire next to it has steady DC?",
        answer: "Zero",
        options: ["Zero", "Maximum", "Infinite", "Oscillating"],
        explanation: "Steady current means constant flux; dΦ/dt = 0."
    },
    {
        numb: 33,
        question: "Why are inductance coils made of copper?",
        answer: "Low ohmic resistance",
        options: ["Low ohmic resistance", "High resistance", "Poor conductivity", "Magnetic properties"],
        explanation: "Reduces energy loss as heat."
    },
    {
        numb: 34,
        question: "Self-inductance is often called:",
        answer: "Inertia of electricity",
        options: ["Inertia of electricity", "Potential of electricity", "Capacity of electricity", "Resistance of electricity"],
        explanation: "It resists changes in the state of current flow."
    },
    {
        numb: 35,
        question: "Why does a switch spark when turned off?",
        answer: "Large induced e.m.f. opposes current decay",
        options: ["Large induced e.m.f. opposes current decay", "High voltage of battery", "Friction", "Dust in switch"],
        explanation: "Rapid flux change (dI/dt) induces high voltage."
    },
    {
        numb: 36,
        question: "If copper and Al loops rotate at same speed in same field, which has more current?",
        answer: "Copper (lower resistance)",
        options: ["Copper (lower resistance)", "Aluminium", "Both same", "Neither"],
        explanation: "Induced emf is same, but I = e/R; R_cu < R_al."
    },
    {
        numb: 37,
        question: "A coin falls slowly between poles of a strong magnet due to:",
        answer: "Eddy currents creating drag",
        options: ["Eddy currents creating drag", "Air resistance", "Gravity decrease", "Viscosity of field"],
        explanation: "Eddy currents produce magnetic fields that oppose the motion."
    },
    {
        numb: 38,
        question: "How are eddy currents minimized?",
        answer: "Using laminated cores",
        options: ["Using laminated cores", "Increasing iron thickness", "Heating the core", "Using wood"],
        explanation: "Thin insulated sheets break the current paths."
    },
    {
        numb: 39,
        question: "What is an ideal inductor?",
        answer: "Zero ohmic resistance, high self-inductance",
        options: ["Zero ohmic resistance, high self-inductance", "High resistance", "No magnetic field", "Infinite capacitance"],
        explanation: "Idealized circuit element with only inductive properties."
    },
    {
        numb: 40,
        question: "Self-inductance L of a solenoid depends on:",
        answer: "Number of turns² (N²)",
        options: ["Number of turns² (N²)", "Length alone", "Current", "Charge"],
        explanation: "L = μ₀ * N² * A / l."
    },
    {
        numb: 41,
        question: "What happens to L if the number of turns is doubled?",
        answer: "Becomes four times",
        options: ["Becomes four times", "Becomes double", "Halved", "No change"],
        explanation: "L ∝ N²."
    },
    {
        numb: 42,
        question: "Energy stored in an inductor is U = ______.",
        answer: "1/2 L I²",
        options: ["1/2 L I²", "L I", "1/2 C V²", "I² R"],
        explanation: "Calculated as work done against back emf."
    },
    {
        numb: 43,
        question: "Where is the energy in an inductor stored?",
        answer: "In the magnetic field",
        options: ["In the magnetic field", "In the wires", "In the charge", "In the battery"],
        explanation: "Resides in the field volume."
    },
    {
        numb: 44,
        question: "Mutual inductance M between two solenoids depends on:",
        answer: "Product of turns (N1 * N2)",
        options: ["Product of turns (N1 * N2)", "Sum of turns", "Current in both", "Weight"],
        explanation: "M = μ₀ * N1 * N2 * A / l."
    },
    {
        numb: 45,
        question: "Lenz's law is a consequence of the law of conservation of:",
        answer: "Energy",
        options: ["Energy", "Momentum", "Charge", "Mass"],
        explanation: "Mechanical work is converted to electrical energy."
    },
    {
        numb: 46,
        question: "The area under the induced current vs time curve gives:",
        answer: "Induced charge (q)",
        options: ["Induced charge (q)", "Induced emf", "Magnetic field", "Resistance"],
        explanation: "∫ I dt = q."
    },
    {
        numb: 47,
        question: "The change in magnetic flux per unit time is equal to:",
        answer: "Induced e.m.f.",
        options: ["Induced e.m.f.", "Self-inductance", "Current", "Power"],
        explanation: "Faraday's Law: e = -dΦ/dt."
    },
    {
        numb: 48,
        question: "Does an induced emf exist in a stationary coil in a non-uniform stationary field?",
        answer: "No",
        options: ["No", "Yes", "Depends on field shape", "Always"],
        explanation: "No motion or time variation means dΦ/dt = 0."
    },
    {
        numb: 49,
        question: "Unit of 'h/e' (Planck's constant / charge) has dimensions same as:",
        answer: "Magnetic flux (Φ)",
        options: ["Magnetic flux (Φ)", "Electric field", "Current", "Inductance"],
        explanation: "[h/e] = [J.s / C] = [J / A] = [ML²T⁻² / A] = [ML²T⁻²A⁻¹]. Φ = [B * A] = [MT⁻²A⁻¹ * L²] = [ML²T⁻²A⁻¹]."
    },
    {
        numb: 50,
        question: "Reduction factor of a tangent galvanometer has unit:",
        answer: "Ampere",
        options: ["Ampere", "Tesla", "Weber", "None"],
        explanation: "I = K tan θ; tan θ is dimensionless."
    },
    {
        numb: 51,
        question: "What does Faraday's first law of E.M.I. state?",
        answer: "Induced e.m.f. is produced whenever magnetic flux links with a circuit changes",
        options: ["Induced e.m.f. is produced whenever magnetic flux links with a circuit changes", "Flux is always constant", "Current flows only in magnets", "Heat is generated by magnets"],
        explanation: "Basic principle of E.M.I."
    },
    {
        numb: 52,
        question: "How long does the induced e.m.f. last in a circuit?",
        answer: "As long as the change in magnetic flux continues",
        options: ["As long as the change in magnetic flux continues", "Forever", "For 1 second", "Until the magnet stops"],
        explanation: "Faraday's second law."
    },
    {
        numb: 53,
        question: "The magnitude of induced e.m.f. is proportional to:",
        answer: "Rate of change of magnetic flux",
        options: ["Rate of change of magnetic flux", "Total flux", "Initial flux", "Resistance"],
        explanation: "e = -dΦ/dt."
    },
    {
        numb: 54,
        question: "Lenz's law provides the direction of induced current such that it:",
        answer: "Opposes the cause producing it",
        options: ["Opposes the cause producing it", "Supports the cause", "Increases the flux", "Decreases the resistance"],
        explanation: "Consequence of energy conservation."
    },
    {
        numb: 55,
        question: "A rod of length L rotating at ω in field B has motional emf ε = ______.",
        answer: "1/2 B ω L²",
        options: ["1/2 B ω L²", "B ω L", "B v L", "Zero"],
        explanation: "Calculated by integrating B v dr from 0 to L."
    },
    {
        numb: 56,
        question: "Self-inductance of a coil is defined as the flux linked when:",
        answer: "Unit current flows through it",
        options: ["Unit current flows through it", "Magnetic field is 1T", "Flux is 1Wb", "Area is 1m²"],
        explanation: "Φ = LI; L = Φ when I = 1."
    },
    {
        numb: 57,
        question: "Sparking in a switch is due to ______ induction.",
        answer: "Self",
        options: ["Self", "Mutual", "Static", "Thermal"],
        explanation: "Rapid interruption of current induces high voltage in the same circuit."
    },
    {
        numb: 58,
        question: "Which material is used in resistance boxes to cancel self-induction?",
        answer: "Doubled-up insulated wire",
        options: ["Doubled-up insulated wire", "Single thick wire", "Carbon rods", "Aluminium"],
        explanation: "Bifilar winding creates opposite magnetic fields that cancel."
    },
    {
        numb: 59,
        question: "If relative permeability of core is μ_r, self-inductance L' becomes:",
        answer: "μ_r * L₀",
        options: ["μ_r * L₀", "L₀ / μ_r", "L₀ + μ_r", "Zero"],
        explanation: "Magnetic core increases flux linkage."
    },
    {
        numb: 60,
        question: "Current loop behaves as a magnetic ______.",
        answer: "Dipole",
        options: ["Dipole", "Monopole", "Resistor", "Capacitor"],
        explanation: "M = I * A."
    },
    {
        numb: 61,
        question: "Eddy currents are produced in ______ conductors.",
        answer: "Bulk / Solid",
        options: ["Bulk / Solid", "Thin wire", "Liquid", "Gaseous"],
        explanation: "Induced current loops in the volume of the material."
    },
    {
        numb: 62,
        question: "What is the physical significance of self-inductance?",
        answer: "Inertia in electrical circuits",
        options: ["Inertia in electrical circuits", "Friction", "Conductance", "Storage of charge"],
        explanation: "Opposes the change in the state of current."
    },
    {
        numb: 63,
        question: "Induced e.m.f. produced in a coil does NOT depend on ______.",
        answer: "Resistance of the coil",
        options: ["Resistance of the coil", "Rate of flux change", "Number of turns", "Field strength"],
        explanation: "e depends on flux change rate; current depends on resistance."
    },
    {
        numb: 64,
        question: "The formula for energy density of a magnetic field is ______.",
        answer: "B² / 2μ₀",
        options: ["B² / 2μ₀", "1/2 LI²", "Φ / A", "Zero"],
        explanation: "Energy stored per unit volume of space."
    },
    {
        numb: 65,
        question: "A.C. Generator works on the principle of ______.",
        answer: "Electromagnetic Induction",
        options: ["Electromagnetic Induction", "Heating effect", "Chemical effect", "Photoelectric effect"],
        explanation: "Rotating coil in a magnetic field induces sinusoidal e.m.f."
    },
    {
        numb: 66,
        question: "Maximum e.m.f. in an AC generator is E₀ = ______.",
        answer: "NBAω",
        options: ["NBAω", "BAω", "NAω", "Zero"],
        explanation: "Flux Φ = NBA cos(ωt); e = -dΦ/dt = NBAω sin(ωt)."
    },
    {
        numb: 67,
        question: "Average power of an ideal inductor for one complete cycle is ______.",
        answer: "Zero",
        options: ["Zero", "1/2 LI²", "I²R", "Infinite"],
        explanation: "Current lags voltage by 90°, so power factor is zero."
    },
    {
        numb: 68,
        question: "Coefficient of mutual induction M for two coils is ______.",
        answer: "k * √(L1 * L2)",
        options: ["k * √(L1 * L2)", "k * (L1 + L2)", "L1 / L2", "Zero"],
        explanation: "k is the coupling coefficient (0 to 1)."
    },
    {
        numb: 69,
        question: "Eddy currents produce ______ effect.",
        answer: "Heating",
        options: ["Heating", "Cooling", "Static", "Chemical"],
        explanation: "Due to Joule heating (I²R) of the bulk metal."
    },
    {
        numb: 70,
        question: "Dead beat galvanometer uses ______ for damping.",
        answer: "Eddy currents",
        options: ["Eddy currents", "Oil friction", "Air friction", "Springs"],
        explanation: "Metallic frame induces eddy currents that oppose oscillation."
    },
    {
        numb: 71,
        question: "Self-inductance of solenoid with 1000 turns, 1m length, 10cm² area is approx ______.",
        answer: "1.26 mH",
        options: ["1.26 mH", "12.6 mH", "1.26 H", "Zero"],
        explanation: "L = μ₀ * N² * A / l = 4πx10⁻⁷ * 10⁶ * 10⁻³ / 1 ≈ 1.26e-3 H."
    },
    {
        numb: 72,
        question: "Current in one coil changes from 10A to 0 in 0.1s. If M=100mH, emf in other is ______.",
        answer: "10 V",
        options: ["10 V", "1 V", "100 V", "Zero"],
        explanation: "e = M * (dI/dt) = 0.1 * (10 / 0.1) = 10 V."
    },
    {
        numb: 73,
        question: "Dimensions of L/R (Inductance/Resistance) are same as ______.",
        answer: "Time (T)",
        options: ["Time (T)", "Frequency", "Current", "Zero"],
        explanation: "Time constant of an LR circuit."
    },
    {
        numb: 74,
        question: "Dimensions of RC (Resistance * Capacitance) are same as ______.",
        answer: "Time (T)",
        options: ["Time (T)", "Frequency", "Voltage", "Zero"],
        explanation: "Time constant of an RC circuit."
    },
    {
        numb: 75,
        question: "Transformer works on the principle of ______.",
        answer: "Mutual Induction",
        options: ["Mutual Induction", "Self Induction", "Eddy currents", "Thermal emission"],
        explanation: "Transfer of energy from primary to secondary coil."
    },
    {
        numb: 76,
        question: "Induced emf in a coil of N turns is -N * dΦ/dt. The negative sign is due to ______.",
        answer: "Lenz's Law",
        options: ["Lenz's Law", "Faraday's Law", "Ohm's Law", "Ampere's Law"],
        explanation: "Indicates opposition to flux change."
    },
    {
        numb: 77,
        question: "Motional emf is also called ______ emf.",
        answer: "Dynamical",
        options: ["Dynamical", "Static", "Thermal", "Chemical"],
        explanation: "Produced by mechanical motion."
    },
    {
        numb: 78,
        question: "If a magnet moves towards a loop, the loop ______ the magnet.",
        answer: "Repels",
        options: ["Repels", "Attracts", "Does nothing", "Glows"],
        explanation: "Induced field opposes the approach of the magnet."
    },
    {
        numb: 79,
        question: "Total charge q flowing in a circuit during flux change depends on ______.",
        answer: "Change in flux and Resistance",
        options: ["Change in flux and Resistance", "Rate of change of flux", "Time alone", "Zero"],
        explanation: "q = |ΔΦ| / R."
    },
    {
        numb: 80,
        question: "Does transformer work on DC?",
        answer: "No",
        options: ["No", "Yes", "Only at high voltage", "Only with batteries"],
        explanation: "DC has no flux change (dΦ/dt = 0), so no induction."
    },
    {
        numb: 81,
        question: "A choke coil in an AC circuit has high ______ and low ______.",
        answer: "Inductance, Resistance",
        options: ["Inductance, Resistance", "Resistance, Inductance", "Capacitance, Voltage", "Zero, Zero"],
        explanation: "Used to limit current without significant power loss."
    },
    {
        numb: 82,
        question: "The property of a coil by which it opposes its own current change is ______.",
        answer: "Self-inductance",
        options: ["Self-inductance", "Mutual-inductance", "Capacitance", "Resistance"],
        explanation: "Known as self-induction."
    },
    {
        numb: 83,
        question: "If two coils are wound on each other, coupling coefficient k is approx ______.",
        answer: "1",
        options: ["1", "0", "0.5", "10"],
        explanation: "Maximum flux linkage."
    },
    {
        numb: 84,
        question: "Energy stored in 2H inductor with 2A current is ______.",
        answer: "4 J",
        options: ["4 J", "2 J", "8 J", "Zero"],
        explanation: "U = 1/2 * 2 * 2² = 4 J."
    },
    {
        numb: 85,
        question: "Unit of L/R is ______.",
        answer: "Second",
        options: ["Second", "Hertz", "Henry", "Ohm"],
        explanation: "Dimension of time."
    },
    {
        numb: 86,
        question: "Dimensional formula of magnetic flux Φ is ______.",
        answer: "ML²T⁻²A⁻¹",
        options: ["ML²T⁻²A⁻¹", "MLT⁻²A⁻¹", "ML²T⁻¹", "Zero"],
        explanation: "Derived from NBA or e*dt."
    },
    {
        numb: 87,
        question: "Dimensional formula of self-inductance L is ______.",
        answer: "ML²T⁻²A⁻²",
        options: ["ML²T⁻²A⁻²", "ML²T⁻²A⁻¹", "MLT⁻²", "Zero"],
        explanation: "Φ / I => [ML²T⁻²A⁻¹] / [A]."
    },
    {
        numb: 88,
        question: "Eddy currents are used in ______.",
        answer: "Speedometers",
        options: ["Speedometers", "Thermometers", "Microscopes", "Telescopes"],
        explanation: "Used to create torque on the pointer."
    },
    {
        numb: 89,
        question: "Induced emf in a square loop depends on its ______.",
        answer: "Rate of change of area/flux",
        options: ["Rate of change of area/flux", "Weight", "Color", "Material alone"],
        explanation: "Faraday's law application."
    },
    {
        numb: 90,
        question: "Two coils L1 and L2 are far apart in series. Total L is ______.",
        answer: "L1 + L2",
        options: ["L1 + L2", "L1 * L2", "√(L1*L2)", "Zero"],
        explanation: "Inductances add up in series."
    },
    {
        numb: 91,
        question: "Two coils L1 and L2 are far apart in parallel. Total L is ______.",
        answer: "(L1 * L2) / (L1 + L2)",
        options: ["(L1 * L2) / (L1 + L2)", "L1 + L2", "1 / L1 + 1 / L2", "Zero"],
        explanation: "Standard parallel formula."
    },
    {
        numb: 92,
        question: "Relative permeability μ_r = ______.",
        answer: "μ / μ₀",
        options: ["μ / μ₀", "μ * μ₀", "1 + Xm", "A & C"],
        explanation: "Ratio of material permeability to vacuum permeability."
    },
    {
        numb: 93,
        question: "Which device converts chemical energy to electrical AC?",
        answer: "None of these (Generator converts mechanical)",
        options: ["A.C. Generator", "Battery", "Transformer", "None of these"],
        explanation: "Generators convert mechanical rotational energy."
    },
    {
        numb: 94,
        question: "In induction furnace, ______ currents are used to melt metal.",
        answer: "Eddy",
        options: ["Eddy", "Direct", "Static", "Thermal"],
        explanation: "Rapidly changing magnetic field induces high currents."
    },
    {
        numb: 95,
        question: "A solenoid is 'long' if length L ______ radius r.",
        answer: "L >> r",
        options: ["L >> r", "L = r", "L < r", "L = 0"],
        explanation: "Allows calculation using infinite solenoid approximation."
    },
    {
        numb: 96,
        question: "Magnetic flux linkage Φ = ______ for a coil with N turns.",
        answer: "N * (B · A)",
        options: ["N * (B · A)", "B · A", "N / (B · A)", "Zero"],
        explanation: "Sum of flux through all individual turns."
    },
    {
        numb: 97,
        question: "Unit of magnetic field gradient is ______.",
        answer: "Tesla / Meter (T/m)",
        options: ["Tesla / Meter (T/m)", "Tesla * Meter", "Weber / Meter", "Zero"],
        explanation: "Rate of change of B with distance."
    },
    {
        numb: 98,
        question: "If a loop is pulled from a field, the magnetic force on it ______.",
        answer: "Opposes the motion",
        options: ["Opposes the motion", "Supports the motion", "Is zero", "Changes direction randomly"],
        explanation: "Lenz's Law in action (mechanical force)."
    },
    {
        numb: 99,
        question: "Inductor is also known as a ______.",
        answer: "Choke",
        options: ["Choke", "Condenser", "Valve", "Tank"],
        explanation: "Mainly when used in power supplies/AC circuits."
    },
    {
        numb: 100,
        question: "Work done in pulling a coil depends on ______ of pull.",
        answer: "Speed",
        options: ["Speed", "Color", "Time of day", "None"],
        explanation: "More speed = higher induced current = higher resisting force = more work/power."
    },
    {
        numb: 101,
        question: "Self-inductance L of a solenoid of turns N, length l, area A is L = ______.",
        answer: "μ₀ N² A / l",
        options: ["μ₀ N² A / l", "μ₀ N I A", "N Φ", "Zero"],
        explanation: "Basic inductance formula for a solenoid."
    },
    {
        numb: 102,
        question: "A wire loop of 40cm is bent into 15cm x 5cm rectangle. If field changes from 0.08 to 1.4 T in 0.5s, emf is:",
        answer: "0.016 V",
        options: ["0.016 V", "0.32 V", "1.6 V", "Zero"],
        explanation: "ΔΦ = (1.4 * 0.01) - (0.08 * 0.0075) = 0.014 - 0.0006 = 0.0134. No, A2 = 10x10=100cm², A1=75cm². Φ2 = 1.4*0.01=0.014. Φ1 = 0.08*0.0075=0.0006. ΔΦ = 0.008. e = 0.008 / 0.5 = 0.016 V."
    },
    {
        numb: 103,
        question: "If flux Φ = 5t³ + 4t² + 2t - 5, induced current at t=2s with R=50Ω is:",
        answer: "1.56 A",
        options: ["1.56 A", "78 A", "2 A", "Zero"],
        explanation: "e = dΦ/dt = 15t² + 8t + 2. At t=2, e = 15(4) + 16 + 2 = 78V. I = 78/50 = 1.56 A."
    },
    {
        numb: 104,
        question: "A coil of radius 0.5m has emf 20V in 5s. The change in flux is:",
        answer: "100 Wb",
        options: ["100 Wb", "4 Wb", "20 Wb", "Zero"],
        explanation: "ΔΦ = e * dt = 20 * 5 = 100 Wb."
    },
    {
        numb: 105,
        question: "Rectangular coil (200 turns, 150 cm²) in 0.2T drops to 0.15T in 0.02s. Induce emf is:",
        answer: "7.5 V",
        options: ["7.5 V", "1.5 V", "15 V", "Zero"],
        explanation: "e = N * A * (dB/dt) = 200 * 0.015 * (0.05 / 0.02) = 3 * 2.5 = 7.5 V."
    },
    {
        numb: 106,
        question: "Coil (100 turns, 0.1 m²) reversed in 50ms in field 4x10⁻³ T. Induced emf is:",
        answer: "1.6 V",
        options: ["1.6 V", "0.8 V", "3.2 V", "Zero"],
        explanation: "ΔΦ = 2 * N * B * A = 2 * 100 * 4e-3 * 0.1 = 0.08. e = 0.08 / 0.05 = 1.6 V."
    },
    {
        numb: 107,
        question: "Mutual inductance M of two solenoids (n1=600, n2=100 per m, A=4πx10⁻⁴ m²) is approx:",
        answer: "9.47 x 10⁻⁵ H",
        options: ["9.47 x 10⁻⁵ H", "1.2 x 10⁻⁴ H", "3.14 x 10⁻⁶ H", "Zero"],
        explanation: "M = μ₀ * n1 * n2 * A * l = 4πx10⁻⁷ * 600 * 100 * 4πx10⁻⁴ ≈ 9.47e-5 H."
    },
    {
        numb: 108,
        question: "Potential difference across aeroplane wings (40m) at 2500 m/s in Bv = 5x10⁻⁵ T is:",
        answer: "5 V",
        options: ["5 V", "10 V", "2 V", "Zero"],
        explanation: "e = Bv * l * v = 5e-5 * 40 * 2500 = 5 V."
    },
    {
        numb: 109,
        question: "Steady current 1mA in a loop (10cm) with total R=4Ω in 2T field requires speed:",
        answer: "2 cm/s",
        options: ["2 cm/s", "20 cm/s", "0.2 cm/s", "Zero"],
        explanation: "v = IR / Bl = (1e-3 * 4) / (2 * 0.1) = 0.004 / 0.2 = 0.02 m/s = 2 cm/s."
    },
    {
        numb: 110,
        question: "Induced emf 0.05V in 50ms from coil (100mm², 50 turns) gives field B:",
        answer: "0.5 T",
        options: ["0.5 T", "0.2 T", "1.0 T", "Zero"],
        explanation: "dB/dt = e / (N*A) = 0.05 / (50 * 1e-4) = 0.05 / 0.005 = 10 T/s. For 50ms, B = 10 * 0.05 = 0.5 T."
    },
    {
        numb: 111,
        question: "Mutual inductance between primary and secondary if 40kV induced by 4A change in 10μs is:",
        answer: "0.1 H",
        options: ["0.1 H", "1.0 H", "0.01 H", "Zero"],
        explanation: "M = e / (dI/dt) = 40000 / (4 / 10⁻⁵) = 40000 / 400000 = 0.1 H."
    },
    {
        numb: 112,
        question: "If air core L=0.04mH increases to 16mH with iron, relative permeability μ_r is:",
        answer: "400",
        options: ["400", "40", "4000", "Zero"],
        explanation: "μ_r = L_iron / L_air = 16 / 0.04 = 400."
    },
    {
        numb: 113,
        question: "Self-inductance for 600 turns is 108mH. For 500 turns, it is:",
        answer: "75 mH",
        options: ["75 mH", "90 mH", "60 mH", "Zero"],
        explanation: "L2 = L1 * (N2/N1)² = 108 * (5/6)² = 108 * 25/36 = 3 * 25 = 75 mH."
    },
    {
        numb: 114,
        question: "Max induced emf for L=10mH and I = 0.1 sin(200t) is:",
        answer: "0.2 V",
        options: ["0.2 V", "0.1 V", "2.0 V", "Zero"],
        explanation: "e = L * dI/dt = L * 0.1 * 200 cos(200t). Max e = 0.01 * 20 = 0.2 V."
    },
    {
        numb: 115,
        question: "Induced emf for 0.5m rod rotating at 32 rad/s in 0.4 T field is:",
        answer: "1.6 V",
        options: ["1.6 V", "3.2 V", "0.8 V", "Zero"],
        explanation: "e = 1/2 * B * ω * l² = 0.5 * 0.4 * 32 * 0.25 = 0.2 * 8 = 1.6 V."
    },
    {
        numb: 116,
        question: "Induced emf in semi-circle radius 0.1m moving at 10m/s in 20mT field is:",
        answer: "0.04 V",
        options: ["0.04 V", "0.08 V", "0.02 V", "Zero"],
        explanation: "e = B * 2r * v = 0.02 * 0.2 * 10 = 0.04 V."
    },
    {
        numb: 117,
        question: "Potential difference between centre and rim of 10cm disc rotating at 10 rps in 100 G field is:",
        answer: "π x 10⁻³ V",
        options: ["π x 10⁻³ V", "10⁻³ V", "2π x 10⁻³ V", "Zero"],
        explanation: "e = B * π * r² * f = 10⁻² * π * 0.01 * 10 = π * 10⁻³ V."
    },
    {
        numb: 118,
        question: "Induced emf in 100-turn coil inside long solenoid if current changes 4A in 0.05s is:",
        answer: "16π² x 10⁻³ V",
        options: ["16π² x 10⁻³ V", "8π² x 10⁻³ V", "4π² x 10⁻³ V", "Zero"],
        explanation: "e = N * A * μ₀ * n * (dI/dt) = 100 * (π * 0.01²) * 4πx10⁻⁷ * 2x10⁴ * 80 ≈ 16π² x 10⁻³ V."
    },
    {
        numb: 119,
        question: "If iron core is introduced in a coil, self-inductance ______.",
        answer: "Increases",
        options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
        explanation: "μ increases, so L increases."
    },
    {
        numb: 120,
        question: "Induced charge q = ______.",
        answer: "Charge = Flux change / Resistance",
        options: ["Charge = Flux change / Resistance", "Flux change * Resistance", "Voltage / Resistance", "Zero"],
        explanation: "q = ΔΦ / R."
    },
    {
        numb: 121,
        question: "Units of self-inductance L are:",
        answer: "Henry (H)",
        options: ["Henry (H)", "Weber", "Tesla", "Ohm"],
        explanation: "Also volt-second per ampere."
    },
    {
        numb: 122,
        question: "Self-inductance of a circular coil of radius R is proportional to:",
        answer: "R",
        options: ["R", "R²", "1/R", "R³"],
        explanation: "L = μ₀ * π * N² * R / 2."
    },
    {
        numb: 123,
        question: "Eddy currents are minimised by using ______ core.",
        answer: "Laminated",
        options: ["Laminated", "Solid", "Hollow", "Wooden"],
        explanation: "Breaks the bulk conduction paths."
    },
    {
        numb: 124,
        question: "What is the magnetic flux linked with a surface of area A in field B?",
        answer: "Φ = B · A",
        options: ["Φ = B · A", "Φ = B / A", "Φ = A / B", "Zero"],
        explanation: "Standard definition."
    },
    {
        numb: 125,
        question: "Direction of induced emf is given by ______ Law.",
        answer: "Lenz's",
        options: ["Lenz's", "Ohm's", "Coulomb's", "Ampere's"],
        explanation: "Based on opposition to change."
    },
    {
        numb: 126,
        question: "Faraday's experiments showed that induced emf depends on ______.",
        answer: "Relative motion",
        options: ["Relative motion", "Material color", "Atmospheric pressure", "Zero"],
        explanation: "Motion changes the linked flux."
    },
    {
        numb: 127,
        question: "In a transformer, the core reduces ______ loss.",
        answer: "Flux leakage",
        options: ["Flux leakage", "Resistance", "Weight", "Volume"],
        explanation: "Magnetic core guides the flux."
    },
    {
        numb: 128,
        question: "If a magnet's speed towards a coil is doubled, induced emf is ______.",
        answer: "Doubled",
        options: ["Doubled", "Four times", "Halved", "No change"],
        explanation: "e ∝ dΦ/dt."
    },
    {
        numb: 129,
        question: "If a loop's resistance is doubled, induced current is ______.",
        answer: "Halved",
        options: ["Halved", "Doubled", "Same", "Zero"],
        explanation: "I = e / R."
    },
    {
        numb: 130,
        question: "Does an inductor dissipate power in an ideal AC circuit?",
        answer: "No",
        options: ["No", "Yes", "Depends on frequency", "Only at high voltage"],
        explanation: "Energy is stored and returned, not dissipated as heat."
    },
    {
        numb: 131,
        question: "Mutual inductance between two coils is 0.5H. Flux linked with one when 2A flows in other is:",
        answer: "1 Wb",
        options: ["1 Wb", "0.5 Wb", "2 Wb", "Zero"],
        explanation: "Φ = M * I = 0.5 * 2 = 1 Wb."
    },
    {
        numb: 132,
        question: "If current in a 2H inductor is 10A, energy is ______.",
        answer: "100 J",
        options: ["100 J", "20 J", "200 J", "Zero"],
        explanation: "U = 1/2 * 2 * 10² = 100 J."
    },
    {
        numb: 133,
        question: "The property of magnetic shielding uses ______ materials.",
        answer: "Ferromagnetic",
        options: ["Ferromagnetic", "Paramagnetic", "Diamagnetic", "Insulators"],
        explanation: "Guide the field lines around the protected volume."
    },
    {
        numb: 134,
        question: "Motional emf e = Blv sin θ. θ is the angle between ______.",
        answer: "v and B",
        options: ["v and B", "B and l", "v and l", "None"],
        explanation: "Force F = q(v x B)."
    },
    {
        numb: 135,
        question: "A.C. current follows a ______ wave pattern.",
        answer: "Sinusoidal",
        options: ["Sinusoidal", "Square", "Sawtooth", "Linear"],
        explanation: "Due to the sin(ωt) term in induction."
    },
    {
        numb: 136,
        question: "Self-inductance L = N * Φ / I. For a coil, Φ is ______.",
        answer: "Flux through each turn",
        options: ["Flux through each turn", "Total flux", "Field", "Area"],
        explanation: "Linkage is NΦ."
    },
    {
        numb: 137,
        question: "Dimensions of magnetic flux Φ are same as ______.",
        answer: "h / e",
        options: ["h / e", "h * e", "e / h", "Zero"],
        explanation: "Quantum Hall effect relation."
    },
    {
        numb: 138,
        question: "What is the unit of mutual inductance?",
        answer: "Henry (H)",
        options: ["Henry (H)", "Weber", "Tesla", "Ohm"],
        explanation: "Same as self-inductance."
    },
    {
        numb: 139,
        question: "Eddy currents are used in ______ damping.",
        answer: "Electromagnetic",
        options: ["Electromagnetic", "Air", "Water", "Spring"],
        explanation: "To stop oscillations quickly."
    },
    {
        numb: 140,
        question: "Lenz's law is a statement of ______ conservation.",
        answer: "Energy",
        options: ["Energy", "Charge", "Momentum", "Mass"],
        explanation: "Opposition requires work, which provides energy."
    },
    {
        numb: 141,
        question: "If a loop has no cut, induced current ______ its motion out of field.",
        answer: "Resists",
        options: ["Resists", "Assists", "Does not affect", "Stops instantly"],
        explanation: "Lenz's Law."
    },
    {
        numb: 142,
        question: "Induced emf is zero if area vector is ______ to field B.",
        answer: "Perpendicular",
        options: ["Perpendicular", "Parallel", "At 45°", "None"],
        explanation: "Φ = BA cos(90°) = 0."
    },
    {
        numb: 143,
        question: "Flux linked with a coil of 50 turns in 0.1T field with 2cm² area is:",
        answer: "10⁻³ Wb",
        options: ["10⁻³ Wb", "10⁻⁴ Wb", "0.1 Wb", "Zero"],
        explanation: "Φ = N * B * A = 50 * 0.1 * 2x10⁻⁴ = 5 * 2x10⁻⁴ = 10⁻³ Wb."
    },
    {
        numb: 144,
        question: "Current in primary changes 4A in 0.1s. If M=0.5H, secondary emf is:",
        answer: "20 V",
        options: ["20 V", "2 V", "200 V", "Zero"],
        explanation: "e = M * (dI/dt) = 0.5 * (4/0.1) = 0.5 * 40 = 20 V."
    },
    {
        numb: 145,
        question: "Dimensional formula of RC is [T]. Dimensions of L/R are [T]. Dimensional formula of √(LC) is ______.",
        answer: "[T]",
        options: ["[T]", "[T⁻¹]", "[T²]", "Zero"],
        explanation: "Resonance frequency ω = 1/√(LC) has units T⁻¹."
    },
    {
        numb: 146,
        question: "Unit of LC is ______.",
        answer: "Second²",
        options: ["Second²", "Second", "Hertz", "Zero"],
        explanation: "Since T = 2π√(LC)."
    },
    {
        numb: 147,
        question: "Induced emf in a stationary loop in a time-varying field is ______.",
        answer: "Non-zero",
        options: ["Non-zero", "Zero", "Depends on material", "Always negative"],
        explanation: "dΦ/dt is non-zero due to dB/dt."
    },
    {
        numb: 148,
        question: "Self-inductance of solenoid with N turns, radius R and length L is proportional to ______.",
        answer: "N² R² / L",
        options: ["N² R² / L", "N R / L", "N² / R L", "Zero"],
        explanation: "L = μ₀ * N² * (πR²) / L."
    },
    {
        numb: 149,
        question: "The power required to move a rod in field depends on ______ of the circuit.",
        answer: "Resistance",
        options: ["Resistance", "Capacitance", "Weight", "Color"],
        explanation: "P = Fv = (B²l²v²)/R."
    },
    {
        numb: 150,
        question: "If switch K is open in a moving rod-rails system, induced current is ______.",
        answer: "Zero",
        options: ["Zero", "Maximum", "Infinite", "Same as closed"],
        explanation: "Open circuit implies infinite resistance."
    },
    {
        numb: 151,
        question: "Coefficient of self-induction of a coil is also known as its ______.",
        answer: "Electromagnetic inertia",
        options: ["Electromagnetic inertia", "Magnetic capacity", "Electrical resistance", "Zero"],
        explanation: "Analogous to mass in mechanics."
    },
    {
        numb: 152,
        question: "If a loop of N turns has flux Φ per turn, total linked flux is ______.",
        answer: "N Φ",
        options: ["N Φ", "Φ / N", "N² Φ", "Zero"],
        explanation: "Linear addition of flux through aligned turns."
    },
    {
        numb: 153,
        question: "When current in a coil is doubled, the energy stored becomes ______ times.",
        answer: "4",
        options: ["4", "2", "8", "No change"],
        explanation: "U = 1/2 L I²; U ∝ I²."
    },
    {
        numb: 154,
        question: "Self-inductance of a solenoid with iron core is ______ than air core.",
        answer: "Greater",
        options: ["Greater", "Smaller", "Same", "Zero"],
        explanation: "Iron has much higher permeability (μ >> μ₀)."
    },
    {
        numb: 155,
        question: "What happens to self-inductance if solenoid length is doubled (turns same)?",
        answer: "Halved",
        options: ["Halved", "Doubled", "Four times", "No change"],
        explanation: "L = μ₀ N² A / l; L ∝ 1/l."
    },
    {
        numb: 156,
        question: "Unit of magnetic flux density B is ______.",
        answer: "Tesla (T)",
        options: ["Tesla (T)", "Weber", "Henry", "Ohm"],
        explanation: "B = Φ / A => Wb/m² = Tesla."
    },
    {
        numb: 157,
        question: "Eddy currents are produced when ______.",
        answer: "Flux linked with bulk metal changes",
        options: ["Flux linked with bulk metal changes", "Steady current flows", "Metal is heated", "No field is present"],
        explanation: "Induced loops in solid conductors."
    },
    {
        numb: 158,
        question: "Lenz's Law ensures that the energy ______.",
        answer: "Is conserved",
        options: ["Is conserved", "Is created", "Is lost to vacuum", "Zero"],
        explanation: "Work done against opposition is the energy source."
    },
    {
        numb: 159,
        question: "Mutual inductance between two coils depends on their ______.",
        answer: "Relative orientation",
        options: ["Relative orientation", "Color", "Weight", "Length of wires alone"],
        explanation: "Affects the flux linkage k."
    },
    {
        numb: 160,
        question: "If current changes from 2A to 4A in 0.1s in 200mH coil, induced emf is:",
        answer: "4 V",
        options: ["4 V", "2 V", "40 V", "Zero"],
        explanation: "e = L * (dI/dt) = 0.2 * (2 / 0.1) = 4 V."
    },
    {
        numb: 161,
        question: "Small search coil has 2cm² area and 25 turns. It is used to measure ______.",
        answer: "Magnetic field strength",
        options: ["Magnetic field strength", "Current", "Resistance", "Pressure"],
        explanation: "Based on total charge flown when snatched."
    },
    {
        numb: 162,
        question: "Inductor stores energy in its ______.",
        answer: "Magnetic field",
        options: ["Magnetic field", "Electric field", "Mechanical spring", "Static charge"],
        explanation: "Energy density B²/2μ₀."
    },
    {
        numb: 163,
        question: "Choke coil used in fluorescent tubes works on ______.",
        answer: "Self-induction",
        options: ["Self-induction", "Eddy currents", "Thermal effect", "None"],
        explanation: "Limits current without much power loss."
    },
    {
        numb: 164,
        question: "Magnetic flux linked with a coil is maximum when θ = ______.",
        answer: "0° (Normal to plane is parallel to field)",
        options: ["0° (Normal to plane is parallel to field)", "90°", "180°", "45°"],
        explanation: "Φ = BA cos θ; cos 0 = 1."
    },
    {
        numb: 165,
        question: "Self-inductance of 100 turns is L. For 200 turns, it is ______.",
        answer: "4 L",
        options: ["4 L", "2 L", "L / 2", "Zero"],
        explanation: "L ∝ N²."
    },
    {
        numb: 166,
        question: "Lorentz force on an electron moving at v in B is F = ______.",
        answer: "-e (v × B)",
        options: ["-e (v × B)", "e (v · B)", "Zero", "E + vB"],
        explanation: "Standard magnetic force formula."
    },
    {
        numb: 167,
        question: "The power dissipation in an ideal inductor is ______.",
        answer: "Zero",
        options: ["Zero", "I²R", "V²/R", "Infinite"],
        explanation: "Voltage and current are 90° out of phase."
    },
    {
        numb: 168,
        question: "Speedometer of a car works using ______ currents.",
        answer: "Eddy",
        options: ["Eddy", "Direct", "Alternating", "None"],
        explanation: "Drag torque method."
    },
    {
        numb: 169,
        question: "Induced emf in a jet plane flight depends on ______ component of Earth's field.",
        answer: "Vertical",
        options: ["Vertical", "Horizontal", "Total", "Zero"],
        explanation: "Horizontal wings cut vertical field lines."
    },
    {
        numb: 170,
        question: "Mutual inductance is measured in ______.",
        answer: "Henry",
        options: ["Henry", "Farad", "Weber", "Tesla"],
        explanation: "Same unit as self-inductance."
    },
    {
        numb: 171,
        question: "If a magnet's S-pole is moved away from a coil, the coil face becomes ______.",
        answer: "North",
        options: ["North", "South", "Neutral", "Oscillating"],
        explanation: "To attract the magnet back and oppose motion."
    },
    {
        numb: 172,
        question: "Work done in flux change from Φ1 to Φ2 in circuit R is W = ______.",
        answer: "∫ e I dt",
        options: ["∫ e I dt", "Φ2 - Φ1", "Zero", "I² R"],
        explanation: "Integrate electrical power over time."
    },
    {
        numb: 173,
        question: "Magnetic energy stored in an inductor L is U = ______.",
        answer: "1/2 L I²",
        options: ["1/2 L I²", "L I", "I² / 2L", "Zero"],
        explanation: "Standard potential energy form."
    },
    {
        numb: 174,
        question: "If area of a loop is halved, induced emf (all else same) is ______.",
        answer: "Halved",
        options: ["Halved", "Doubled", "No change", "Zero"],
        explanation: "e = dB/dt * A."
    },
    {
        numb: 175,
        question: "A search coil with 100 turns and area 1cm² measure B. If q=1mC and R=10Ω, B is ______.",
        answer: "1 T",
        options: ["1 T", "0.1 T", "10 T", "Zero"],
        explanation: "B = qR / NA = (1e-3 * 10) / (100 * 1e-4) = 0.01 / 0.01 = 1 T."
    },
    {
        numb: 176,
        question: "Induced emf in a rotating rod depends on ______ frequency ω.",
        answer: "Angular",
        options: ["Angular", "Linear", "Beat", "Zero"],
        explanation: "e = 1/2 B ω l²."
    },
    {
        numb: 177,
        question: "Is induced current possible in a plastic loop?",
        answer: "No (insulator)",
        options: ["No (insulator)", "Yes", "Only in strong fields", "If heated"],
        explanation: "Requires mobile charge carriers."
    },
    {
        numb: 178,
        question: "The 'back emf' of a motor ______ with increasing speed.",
        answer: "Increases",
        options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
        explanation: "e = dΦ/dt increases with faster rotation."
    },
    {
        numb: 179,
        question: "If a coil is pulled fast, resistance to motion is ______ than slow pull.",
        answer: "Greater",
        options: ["Greater", "Smaller", "Same", "Zero"],
        explanation: "Higher e -> higher I -> higher magnetic force F=BIl."
    },
    {
        numb: 180,
        question: "Choke coil uses ______ wires to reduce resistance.",
        answer: "Thick",
        options: ["Thick", "Thin", "No", "None"],
        explanation: "To keep ohmic losses (I²R) minimal."
    },
    {
        numb: 181,
        question: "Mutual inductance between two perpendicular coils is ______.",
        answer: "Zero",
        options: ["Zero", "Maximum", "Infinite", "1 H"],
        explanation: "No flux linkage between them."
    },
    {
        numb: 182,
        question: "A 40cm wire loop bent to 10cm square. Original 15x5 rectangle. Area change is ______.",
        answer: "25 cm²",
        options: ["25 cm²", "100 cm²", "75 cm²", "Zero"],
        explanation: "100 - 75 = 25 cm²."
    },
    {
        numb: 183,
        question: "Unit of induced emf is ______.",
        answer: "Volt",
        options: ["Volt", "Ampere", "Ohm", "Weber"],
        explanation: "It is a potential difference."
    },
    {
        numb: 184,
        question: "If dI/dt is 10 A/s and L=2H, back emf is ______.",
        answer: "20 V",
        options: ["20 V", "5 V", "0.2 V", "Zero"],
        explanation: "e = L * dI/dt = 2 * 10 = 20 V."
    },
    {
        numb: 185,
        question: "Energy in 1mH inductor carrying 10A is ______.",
        answer: "0.05 J",
        options: ["0.05 J", "0.5 J", "5 J", "Zero"],
        explanation: "U = 1/2 * 10⁻³ * 10² = 0.05 J."
    },
    {
        numb: 186,
        question: "Magnetic flux linkage for N-turn coil in B at angle θ is NBA ______.",
        answer: "cos θ",
        options: ["cos θ", "sin θ", "tan θ", "Zero"],
        explanation: "Dot product definition."
    },
    {
        numb: 187,
        question: "A stationary coil in a stationary non-uniform field has ______ emf.",
        answer: "Zero",
        options: ["Zero", "Non-zero", "Variable", "Infinite"],
        explanation: "No change in flux over time."
    },
    {
        numb: 188,
        question: "Self-inductance of 500-turn solenoid of length 20cm, area 4cm² is approx ______.",
        answer: "0.63 mH",
        options: ["0.63 mH", "6.3 mH", "63 mH", "Zero"],
        explanation: "L = 4πx10⁻⁷ * 250000 * 4x10⁻⁴ / 0.2 ≈ 6.28e-4 H."
    },
    {
        numb: 189,
        question: "If a conductor moves parallel to field lines, induced emf is ______.",
        answer: "Zero",
        options: ["Zero", "Maximum", "Infinite", "Same as transverse"],
        explanation: "θ = 0; sin 0 = 0."
    },
    {
        numb: 190,
        question: "Motional emf is only possible in ______ conductors.",
        answer: "Moving",
        options: ["Moving", "Stationary", "Ferromagnetic", "Insulating"],
        explanation: "Requires velocity relative to the field."
    },
    {
        numb: 191,
        question: "The power required for pull is P = B²l²v² / R. If R is increased, P ______.",
        answer: "Decreases",
        options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
        explanation: "Higher R -> lower induced current -> lower opposition force."
    },
    {
        numb: 192,
        question: "Eddy currents are also known as ______.",
        answer: "Circulating currents",
        options: ["Circulating currents", "Direct currents", "Static currents", "None"],
        explanation: "Describe their looped paths."
    },
    {
        numb: 193,
        question: "Unit of mutual inductance same as ______.",
        answer: "Self-inductance",
        options: ["Self-inductance", "Resistance", "Capacitance", "Flux"],
        explanation: "Both are measured in Henry."
    },
    {
        numb: 194,
        question: "Transformer's secondary voltage depends on ______ ratio.",
        answer: "Turns",
        options: ["Turns", "Resistance", "Width", "Color"],
        explanation: "Vs / Vp = Ns / Np."
    },
    {
        numb: 195,
        question: "An ideal transformer has energy efficiency approx ______.",
        answer: "100%",
        options: ["100%", "50%", "10%", "Infinite"],
        explanation: "Ideally no power loss."
    },
    {
        numb: 196,
        question: "Real transformers lose energy through ______.",
        answer: "Hysteresis and Eddy currents",
        options: ["Hysteresis and Eddy currents", "Vacuum", "Gravity", "Light"],
        explanation: "Core losses and winding (copper) losses."
    },
    {
        numb: 197,
        question: "Magnetic flux linked with each turn of secondary is ______ that of primary (ideal).",
        answer: "Same as",
        options: ["Same as", "Double", "Half", "Zero"],
        explanation: "Flux is shared perfectly by the core."
    },
    {
        numb: 198,
        question: "Induced emf in secondary coil of mutual inductance M if primary current changes is ______.",
        answer: "-M dI/dt",
        options: ["-M dI/dt", "-L dI/dt", "MI", "Zero"],
        explanation: "Faraday's law for mutual induction."
    },
    {
        numb: 199,
        question: "Self-induction is the property of a ______ coil.",
        answer: "Single",
        options: ["Single", "Double", "Insulated", "None"],
        explanation: "Opposition to its own current change."
    },
    {
        numb: 200,
        question: "Unit of rate of change of magnetic flux is ______.",
        answer: "Volt",
        options: ["Volt", "Weber / s", "Tesla / s", "A & B"],
        explanation: "Wb/s = Volt."
    },
    {
        numb: 201,
        question: "A.C. stands for ______ Current.",
        answer: "Alternating",
        options: ["Alternating", "Active", "Atomic", "Auto"],
        explanation: "Current that reverses direction periodically."
    },
    {
        numb: 202,
        question: "Generator converts ______ energy to electrical.",
        answer: "Mechanical",
        options: ["Mechanical", "Chemical", "Nuclear", "Solar"],
        explanation: "Usually via rotational motion."
    },
    {
        numb: 203,
        question: "If a coil has resistance 10Ω and flux change is 5Wb, charge q is ______.",
        answer: "0.5 C",
        options: ["0.5 C", "50 C", "2 C", "Zero"],
        explanation: "q = 5 / 10 = 0.5 C."
    },
    {
        numb: 204,
        question: "Hysteresis loss in transformer is minimized by using ______.",
        answer: "Soft iron core",
        options: ["Soft iron core", "Steel core", "Aluminium", "Brass"],
        explanation: "Soft iron has a narrow hysteresis loop."
    },
    {
        numb: 205,
        question: "Leakage flux is minimized by ______ winding.",
        answer: "Close / Overlapping",
        options: ["Close / Overlapping", "Spaced", "Parallel", "None"],
        explanation: "Ensures all primary flux links with secondary."
    },
    {
        numb: 206,
        question: "Current in secondary of a step-up transformer (Ns > Np) is ______ than primary.",
        answer: "Less",
        options: ["Less", "More", "Same", "Zero"],
        explanation: "Is / Ip = Vp / Vs < 1 (Power conservation)."
    },
    {
        numb: 207,
        question: "Self-inductance of air-core coil is 1. Air is replaced by iron (μ_r=100). L is ______.",
        answer: "100",
        options: ["100", "0.01", "10", "Zero"],
        explanation: "L ∝ μ."
    },
    {
        numb: 208,
        question: "The time constant τ of an LR circuit is ______.",
        answer: "L / R",
        options: ["L / R", "R / L", "L * R", "Zero"],
        explanation: "Time for current to reach ~63% of max."
    },
    {
        numb: 209,
        question: "Lenz's law provides ______.",
        answer: "Direction of induced current",
        options: ["Direction of induced current", "Magnitude of current", "Reason for field", "None"],
        explanation: "Qualitative aspect of induction."
    },
    {
        numb: 210,
        question: "Units of h/e are equivalent to units of ______.",
        answer: "Magnetic flux",
        options: ["Magnetic flux", "Induced emf", "Force", "Power"],
        explanation: "Planck's constant divided by elementary charge."
    }
];




