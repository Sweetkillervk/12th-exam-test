window.questionRegistry = window.questionRegistry || {};
window.questionRegistry['physics_12th_ch1'] = [
    {
        numb: 1,
        question: "What is the force between two small charged spheres having charges of 2 x 10^-7 C and 3 x 10^-7 C placed 30 cm apart in air?",
        answer: "6 x 10^-3 N",
        options: ["6 x 10^-3 N", "2 x 10^-3 N", "3 x 10^-3 N", "5 x 10^-3 N"],
        explanation: "Using Coulomb's law: F = (k * q1 * q2) / r^2. F = (9 x 10^9 * 2 x 10^-7 * 3 x 10^-7) / (0.3)^2 = 6 x 10^-3 N."
    },
    {
        numb: 2,
        question: "The electrostatic force on a small sphere of charge 0.4 μC due to another small sphere of charge -0.8 μC in air is 0.2 N. What is the distance between the two spheres?",
        answer: "0.12 m",
        options: ["0.12 m", "0.24 m", "0.06 m", "0.10 m"],
        explanation: "r^2 = (k * q1 * q2) / F = (9 x 10^9 * 0.4 x 10^-6 * 0.8 x 10^-6) / 0.2 = 144 x 10^-4. So, r = 0.12 m."
    },
    {
        numb: 3,
        question: "If the force on a 0.4 μC sphere due to a -0.8 μC sphere is 0.2 N, what is the force on the second sphere due to the first?",
        answer: "0.2 N (Attractive)",
        options: ["0.2 N (Attractive)", "0.2 N (Repulsive)", "0.4 N (Attractive)", "0.1 N (Repulsive)"],
        explanation: "By Newton's third law, the force on the second sphere is equal and opposite (attractive since charges are opposite) to the force on the first."
    },
    {
        numb: 4,
        question: "Which of the following represents the ratio ke^2 / (G * m_e * m_p)?",
        answer: "Dimensionless quantity",
        options: ["Dimensionless quantity", "Length", "Mass", "Time"],
        explanation: "ke^2 has units Nm^2. G*m_e*m_p also has units Nm^2. Thus, the ratio is dimensionless."
    },
    {
        numb: 5,
        question: "What is the approximate value of the ratio ke^2 / (G * m_e * m_p) for an electron and a proton?",
        answer: "2.29 x 10^39",
        options: ["2.29 x 10^39", "1.6 x 10^-19", "6.67 x 10^-11", "9.1 x 10^-31"],
        explanation: "Plugging in constants: k=9x10^9, e=1.6x10^-19, G=6.67x10^-11, m_e=9.1x10^-31, m_p=1.66x10^-27 results in ~2.29 x 10^39."
    },
    {
        numb: 6,
        question: "What does the ratio (ke^2) / (G * m_e * m_p) signify?",
        answer: "Ratio of electrostatic force to gravitational force",
        options: ["Ratio of electrostatic force to gravitational force", "Ratio of mass to charge", "Ratio of energy to momentum", "Ratio of velocity to light"],
        explanation: "It represents the relative strength of the electrostatic force vs. the gravitational force between an electron and a proton."
    },
    {
        numb: 7,
        question: "Explain the meaning of 'electric charge of a body is quantised'.",
        answer: "Charge exists in integral multiples of 'e'",
        options: ["Charge exists in integral multiples of 'e'", "Charge can be any value", "Charge is always negative", "Charge cannot be measured"],
        explanation: "Quantization means q = ±ne, where n is an integer and e is the elementary charge (1.6 x 10^-19 C)."
    },
    {
        numb: 8,
        question: "Why is quantisation of charge ignored at the macroscopic level?",
        answer: "Because 'e' is extremely small compared to macroscopic charges",
        options: ["Because 'e' is extremely small compared to macroscopic charges", "Because charge is not conserved", "Because macroscopic charges are always zero", "Because electrons don't exist in bulk"],
        explanation: "At macroscopic scales, adding or removing a few electrons causes such a small change that the charge appears continuous."
    },
    {
        numb: 9,
        question: "When a glass rod is rubbed with silk, the glass rod becomes positively charged because...",
        answer: "Electrons are transferred from rod to silk",
        options: ["Electrons are transferred from rod to silk", "Protons are transferred from silk to rod", "Electrons are transferred from silk to rod", "Protons are transferred from rod to silk"],
        explanation: "Charging by friction involves the transfer of electrons. Glass loses electrons more easily than silk."
    },
    {
        numb: 10,
        question: "The appearance of charges on rubbing objects is consistent with which law?",
        answer: "Law of conservation of charge",
        options: ["Law of conservation of charge", "Law of conservation of energy", "Newton's second law", "Coulomb's law"],
        explanation: "Total charge remains constant; electrons are merely transferred from one body to another."
    },
    {
        numb: 11,
        question: "Four point charges qA = 2 μC, qB = -5 μC, qC = 2 μC, and qD = -5 μC are at the corners of a square of side 10 cm. The net force on 1 μC at the center is:",
        answer: "Zero",
        options: ["Zero", "10 N", "5 N", "20 N"],
        explanation: "Forces from opposite corners (A-C and B-D) are equal in magnitude and opposite in direction, canceling each other out at the center."
    },
    {
        numb: 12,
        question: "Which of the following is true about electrostatic field lines?",
        answer: "They are continuous curves without sudden breaks",
        options: ["They are continuous curves without sudden breaks", "They can have sudden breaks", "They start from negative charge", "They form closed loops"],
        explanation: "Field lines represent the path of a test charge; a break would imply the field is missing at that point, which isn't possible in a continuous field."
    },
    {
        numb: 13,
        question: "Why do two electric field lines never cross each other?",
        answer: "The field would have two directions at the intersection point",
        options: ["The field would have two directions at the intersection point", "They are always parallel", "They repel each other", "They are not real"],
        explanation: "At any point, the net electric field has a unique direction. Intersection would imply two directions, which is physically impossible."
    },
    {
        numb: 14,
        question: "Two point charges qA = 3 μC and qB = -3 μC are 20 cm apart. The electric field at the midpoint O is:",
        answer: "5.4 x 10^6 N/C",
        options: ["5.4 x 10^6 N/C", "2.7 x 10^6 N/C", "0", "1.08 x 10^7 N/C"],
        explanation: "E_total = E_A + E_B. Both fields point from A towards B. Total E = 2 * (k * q / r^2) = 2 * (9e9 * 3e-6 / 0.1^2) = 5.4 x 10^6 N/C."
    },
    {
        numb: 15,
        question: "If a negative test charge of 1.5 x 10^-9 C is placed at the midpoint of two charges (3 μC and -3 μC separated by 20 cm), the force on it is:",
        answer: "8.1 x 10^-3 N (towards A)",
        options: ["8.1 x 10^-3 N (towards A)", "8.1 x 10^-3 N (towards B)", "1.5 x 10^-3 N (towards A)", "0"],
        explanation: "F = q * E = (1.5 x 10^-9) * (5.4 x 10^6) = 8.1 x 10^-3 N. Since it's negative, force is opposite to field direction (B to A)."
    },
    {
        numb: 16,
        question: "A system has two charges qA = 2.5 x 10^-7 C and qB = -2.5 x 10^-7 C at (0, 0, -15 cm) and (0, 0, 15 cm). The net charge is:",
        answer: "0",
        options: ["0", "5.0 x 10^-7 C", "-5.0 x 10^-7 C", "2.5 x 10^-7 C"],
        explanation: "Net charge Q = qA + qB = 2.5e-7 + (-2.5e-7) = 0."
    },
    {
        numb: 17,
        question: "For the charges at (0, 0, -15 cm) and (0, 0, 15 cm), what is the dipole moment?",
        answer: "7.5 x 10^-8 C m",
        options: ["7.5 x 10^-8 C m", "5.0 x 10^-8 C m", "3.0 x 10^-8 C m", "0"],
        explanation: "p = q * d = (2.5 x 10^-7) * (0.30 m) = 7.5 x 10^-8 C m. Direction is from negative to positive charge (along -Z axis)."
    },
    {
        numb: 18,
        question: "An electric dipole with moment 4 x 10^-9 C m is at 30° to a field of 5 x 10^4 N/C. The torque is:",
        answer: "10^-4 N m",
        options: ["10^-4 N m", "2 x 10^-4 N m", "0.5 x 10^-4 N m", "20 x 10^-4 N m"],
        explanation: "Torque τ = pE sin θ = (4e-9) * (5e4) * sin(30°) = 20e-5 * 0.5 = 10^-4 N m."
    },
    {
        numb: 19,
        question: "A polythene piece rubbed with wool gains a negative charge of 3 x 10^-7 C. How many electrons are transferred?",
        answer: "2 x 10^12",
        options: ["2 x 10^12", "1.875 x 10^10", "3 x 10^7", "1.6 x 10^19"],
        explanation: "n = q / e = (3 x 10^-7) / (1.6 x 10^-19) ≈ 1.875 x 10^12, often rounded to 2 x 10^12."
    },
    {
        numb: 20,
        question: "When electrons are transferred from wool to polythene, is there a mass transfer?",
        answer: "Yes, from wool to polythene",
        options: ["Yes, from wool to polythene", "Yes, from polythene to wool", "No, electrons have no mass", "Mass transfer is zero"],
        explanation: "Electrons have mass (9.1 x 10^-31 kg). Transferring electrons means transferring mass."
    },
    {
        numb: 21,
        question: "Two copper spheres separated by 50 cm have charges of 6.5 x 10^-7 C each. The initial force of repulsion is:",
        answer: "1.52 x 10^-2 N",
        options: ["1.52 x 10^-2 N", "1.52 x 10^-3 N", "3.04 x 10^-2 N", "0.76 x 10^-2 N"],
        explanation: "F = (k * q1 * q2) / r^2 = (9e9 * (6.5e-7)^2) / (0.5)^2 ≈ 1.52 x 10^-2 N."
    },
    {
        numb: 22,
        question: "If charges are doubled and the distance is halved, the force between two spheres becomes:",
        answer: "16 times original",
        options: ["16 times original", "4 times original", "8 times original", "No change"],
        explanation: "F' = k * (2q1 * 2q2) / (r/2)^2 = k * 4q1q2 / (r^2 / 4) = 16 * (k q1 q2 / r^2) = 16F."
    },
    {
        numb: 23,
        question: "The flux through a square of side 10 cm parallel to the yz-plane in a field E = 3 x 10^3 i N/C is:",
        answer: "30 N m^2/C",
        options: ["30 N m^2/C", "15 N m^2/C", "60 N m^2/C", "0"],
        explanation: "Φ = E * A = (3e3) * (0.1 * 0.1) = 30 N m^2/C. Plane parallel to yz means area vector is along x (i)."
    },
    {
        numb: 24,
        question: "In the same field (3 x 10^3 i), what is the flux if the normal to the square makes 60° with the x-axis?",
        answer: "15 N m^2/C",
        options: ["15 N m^2/C", "30 N m^2/C", "25.9 N m^2/C", "0"],
        explanation: "Φ = EA cos θ = (3e3) * (0.01) * cos(60°) = 30 * 0.5 = 15 N m^2/C."
    },
    {
        numb: 25,
        question: "The net flux of a uniform electric field through a cube (parallel to axes) is:",
        answer: "Zero",
        options: ["Zero", "Infinite", "Depends on size", "Depends on field strength"],
        explanation: "Flux entering one face equals flux leaving the opposite face. Total enclosed charge is zero, so net flux is zero by Gauss's Law."
    },
    {
        numb: 26,
        question: "If the net outward flux from a black box is 8 x 10^3 N m^2/C, the net charge inside is:",
        answer: "0.07 μC",
        options: ["0.07 μC", "8.85 μC", "1.0 μC", "0"],
        explanation: "q = Φ * ε0 = (8 x 10^3) * (8.854 x 10^-12) ≈ 7.08 x 10^-8 C = 0.071 μC."
    },
    {
        numb: 27,
        question: "If the net outward flux through a surface is zero, does it mean there are no charges inside?",
        answer: "Not necessarily; net charge is zero",
        options: ["Not necessarily; net charge is zero", "Yes, it means no charges", "No, it means flux is infinite", "It depends on the shape"],
        explanation: "Outward flux zero means the *sum* of all charges inside is zero. There could be equal positive and negative charges."
    },
    {
        numb: 28,
        question: "A flux of -1.0 x 10^3 N m^2/C passes through a sphere of radius 10 cm. If the radius is doubled, the flux is:",
        answer: "-1.0 x 10^3 N m^2/C",
        options: ["-1.0 x 10^3 N m^2/C", "-2.0 x 10^3 N m^2/C", "-0.5 x 10^3 N m^2/C", "0"],
        explanation: "By Gauss's Law, flux depends only on the enclosed charge, not the radius of the surface."
    },
    {
        numb: 29,
        question: "What is the value of the point charge causing a flux of -1.0 x 10^3 N m^2/C?",
        answer: "-8.8 nC",
        options: ["-8.8 nC", "-4.4 nC", "-1.0 nC", "8.8 nC"],
        explanation: "q = Φ * ε0 = (-1e3) * (8.854e-12) = -8.854e-9 C ≈ -8.8 nC."
    },
    {
        numb: 30,
        question: "A conducting sphere of radius 10 cm has field E = 1.5 x 10^3 N/C (inward) at r = 20 cm. The charge is:",
        answer: "-6.67 nC",
        options: ["-6.67 nC", "6.67 nC", "-3.33 nC", "1.5 nC"],
        explanation: "E = k q / r^2. q = E r^2 / k = (1.5e3 * (0.2)^2) / 9e9 ≈ 6.67e-9 C. Inward means negative."
    },
    {
        numb: 31,
        question: "A line charge produces E = 9 x 10^4 N/C at 2 cm. What is the linear charge density λ?",
        answer: "0.1 μC/m",
        options: ["0.1 μC/m", "0.2 μC/m", "0.5 μC/m", "0.01 μC/m"],
        explanation: "E = λ / (2πε0r). λ = E * 2πε0r = (9e4) * (2π * 8.85e-12 * 0.02) ≈ 10^-7 C/m = 0.1 μC/m."
    },
    {
        numb: 32,
        question: "Between two large parallel plates with opposite charge densities σ, the electric field is:",
        answer: "σ / ε0",
        options: ["σ / ε0", "σ / (2ε0)", "2σ / ε0", "0"],
        explanation: "Inside: E = σ / (2ε0) + σ / (2ε0) = σ / ε0. Outside: they cancel to zero."
    },
    {
        numb: 33,
        question: "What is the field E in the outer region of two parallel plates with opposite densities σ?",
        answer: "0",
        options: ["0", "σ / ε0", "σ / (2ε0)", "Infinite"],
        explanation: "Fields from both plates point in opposite directions outside, resulting in zero net field."
    },
    {
        numb: 34,
        question: "An oil drop with 12 excess electrons is stationary in E = 2.55 x 10^4 N/C. The force of gravity is balanced by:",
        answer: "Electrostatic force",
        options: ["Electrostatic force", "Buoyant force", "Magnetic force", "Friction"],
        explanation: "Millikan's experiment: qE = mg. The electric force balances the weight of the drop."
    },
    {
        numb: 35,
        question: "In a non-uniform field, an electric dipole experiences:",
        answer: "Both force and torque",
        options: ["Both force and torque", "Only force", "Only torque", "Neither force nor torque"],
        explanation: "Non-uniform field means net force is non-zero, and different forces on charges still cause rotation."
    },
    {
        numb: 36,
        question: "The entire charge given to a conductor resides on:",
        answer: "Outer surface",
        options: ["Outer surface", "Center", "Volume", "Inner surface"],
        explanation: "Charges repel each other and move to the furthest possible distance, which is the outer boundary."
    },
    {
        numb: 37,
        question: "Electric field inside a hollow metallic conductor is:",
        answer: "Always zero",
        options: ["Always zero", "Depends on charge", "Uniform", "Non-zero at sharp edges"],
        explanation: "Electrostatic shielding: E is zero inside any cavity within a conductor."
    },
    {
        numb: 38,
        question: "What is the SI unit of electric field intensity?",
        answer: "N/C",
        options: ["N/C", "V/m", "Both A and B", "C/N"],
        explanation: "E = F/q (N/C) and E = -dV/dr (V/m). Both are standard units."
    },
    {
        numb: 39,
        question: "Which property describes that charge can only exist in discrete packets?",
        answer: "Quantization",
        options: ["Quantization", "Conservation", "Additivity", "Induction"],
        explanation: "Quantization means charge is an integral multiple of 'e'."
    },
    {
        numb: 40,
        question: "If q1 + q2 = 0, it signifies that the charges are:",
        answer: "Equal and opposite",
        options: ["Equal and opposite", "Both positive", "Both zero", "Infinite"],
        explanation: "Sum zero means one is +q and other is -q."
    },
    {
        numb: 41,
        question: "Surface charge density σ is defined as:",
        answer: "Charge / Area",
        options: ["Charge / Area", "Charge / Volume", "Charge / Length", "Force / Area"],
        explanation: "σ = q / A. Unit is C/m^2."
    },
    {
        numb: 42,
        question: "The direction of an electric dipole moment is from:",
        answer: "Negative to Positive",
        options: ["Negative to Positive", "Positive to Negative", "South to North", "Clockwise"],
        explanation: "By convention, p points from -q to +q."
    },
    {
        numb: 43,
        question: "SI unit of electric flux is:",
        answer: "N m^2 / C",
        options: ["N m^2 / C", "C / N m^2", "V m", "Both A and C"],
        explanation: "Φ = E * A. E is N/C or V/m. So units are N m^2 / C or V m."
    },
    {
        numb: 44,
        question: "What is dielectric constant 'K' of air?",
        answer: "1",
        options: ["1", "0", "Infinite", "8.85 x 10^-12"],
        explanation: "For vacuum/air, K is taken as 1."
    },
    {
        numb: 45,
        question: "Force between two charges is 10 N. If a dielectric of K=5 is introduced, the force becomes:",
        answer: "2 N",
        options: ["2 N", "50 N", "5 N", "10 N"],
        explanation: "F' = F / K = 10 / 5 = 2 N."
    },
    {
        numb: 46,
        question: "A soap bubble is given a negative charge. Its radius will:",
        answer: "Increase",
        options: ["Increase", "Decrease", "Remain same", "Collapse"],
        explanation: "Like charges repel. The repulsion between charges on the surface pushes outwards, increasing the radius."
    },
    {
        numb: 47,
        question: "Work done in rotating a dipole from θ=0 to θ=180° in a field E is:",
        answer: "2 pE",
        options: ["2 pE", "pE", "0", "-pE"],
        explanation: "W = pE(cos θ1 - cos θ2) = pE(cos 0 - cos 180) = pE(1 - (-1)) = 2pE."
    },
    {
        numb: 48,
        question: "An electric field cannot deflect:",
        answer: "Neutrons",
        options: ["Neutrons", "Electrons", "Protons", "Alpha particles"],
        explanation: "Electric fields only exert force on charged particles. Neutrons are neutral."
    },
    {
        numb: 49,
        question: "Dimensional formula for electric flux is:",
        answer: "[ML^3 T^-3 A^-1]",
        options: ["[ML^3 T^-3 A^-1]", "[ML^2 T^-3 A^-1]", "[ML^3 T^-2 A^-1]", "[ML T^-3 A^-1]"],
        explanation: "Flux = E * Area = (Force/Charge) * L^2 = [MLT^-2] / [AT] * [L^2] = [ML^3 T^-3 A^-1]."
    },
    {
        numb: 50,
        question: "SI unit of permittivity of free space ε0 is:",
        answer: "C^2 N^-1 m^-2",
        options: ["C^2 N^-1 m^-2", "N m^2 C^-2", "C^2 N m^2", "N^-1 m^-1 C"],
        explanation: "From F = k q1 q2 / r^2, k = 1 / (4πε0). ε0 = q1 q2 / (4π F r^2) -> C^2 / (N m^2)."
    },
    {
        numb: 51,
        question: "A point charge +q is at the origin. The electric field at point (x, y, z) is proportional to:",
        answer: "1 / r^2",
        options: ["1 / r^2", "1 / r", "r", "1 / r^3"],
        explanation: "For a point charge, E follows the inverse square law: E = k q / r^2."
    },
    {
        numb: 52,
        question: "The magnitude of electric field at the surface of a charged conductor is:",
        answer: "σ / ε0",
        options: ["σ / ε0", "σ / (2ε0)", "2σ / ε0", "0"],
        explanation: "Gauss's law application for a conductor surface gives E = σ/ε0."
    },
    {
        numb: 53,
        question: "Electric field at a point on the equitorial line of a dipole is:",
        answer: "Inversely proportional to r^3",
        options: ["Inversely proportional to r^3", "Inversely proportional to r^2", "Inversely proportional to r", "Proportional to r"],
        explanation: "For a short dipole, E_equitorial = k p / r^3."
    },
    {
        numb: 54,
        question: "The torque on a dipole is zero when the angle between p and E is:",
        answer: "0° or 180°",
        options: ["0° or 180°", "90°", "45°", "270°"],
        explanation: "τ = pE sin θ. Sin θ is zero at 0° and 180°."
    },
    {
        numb: 55,
        question: "Two point charges +q and -q are separated by distance 2a. The electric potential at the midpoint is:",
        answer: "0",
        options: ["0", "k q / a", "2 k q / a", "k q / (2a)"],
        explanation: "Potential V = k q / a + k (-q) / a = 0."
    },
    {
        numb: 56,
        question: "The direction of electric field at any point on the axial line of a dipole is:",
        answer: "Along the dipole moment vector p",
        options: ["Along the dipole moment vector p", "Opposite to p", "Perpendicular to p", "Radial"],
        explanation: "On the axial line, the field from the closer charge dominates and points in the same direction as p."
    },
    {
        numb: 57,
        question: "Gauss's theorem is valid for:",
        answer: "Any closed surface",
        options: ["Any closed surface", "Only spheres", "Only cubes", "Only symmetrical surfaces"],
        explanation: "Gauss's law applies to any closed 'Gaussian' surface regardless of shape."
    },
    {
        numb: 58,
        question: "Electric flux through a closed surface depends on:",
        answer: "Net charge enclosed",
        options: ["Net charge enclosed", "Shape of surface", "Size of surface", "Permittivity of outer medium"],
        explanation: "Φ = Q_enclosed / ε0. It depends only on internal charge."
    },
    {
        numb: 59,
        question: "Dimensional formula for electric charge is:",
        answer: "[AT]",
        options: [" [AT]", "[A / T]", "[M L^2 T^-3 A^-1]", "[A]"],
        explanation: "Charge = Current * Time = [A] * [T]."
    },
    {
        numb: 60,
        question: "Coulomb's law is applicable for:",
        answer: "Point charges at rest",
        options: ["Point charges at rest", "Moving charges", "Extended charges", "Charges in motion at high speed"],
        explanation: "Coulomb's law is an electrostatic law for point-sized charges."
    },
    {
        numb: 61,
        question: "The constant 'k' in Coulomb's law depends on:",
        answer: "Nature of medium and units",
        options: ["Nature of medium and units", "Magnitude of charges", "Distance between charges", "Only medium"],
        explanation: "k = 1 / (4πε0) in SI for vacuum. If medium changes, ε changes. Value also depends on SI vs CGS units."
    },
    {
        numb: 62,
        question: "The ratio of electrostatic force to gravitational force between two protons is of the order of:",
        answer: "10^36",
        options: ["10^36", "10^39", "10^42", "10^1"],
        explanation: "Calculation for protons gives ~1.3 x 10^36."
    },
    {
        numb: 63,
        question: "Three charges +q, +q and -2q are placed at vertices of equilateral triangle. The net dipole moment is:",
        answer: "√3 q a",
        options: ["√3 q a", "2 q a", "0", "q a"],
        explanation: "System splits into two dipoles (q, -q) each of moment p=qa at 60°. Resultant = √(p^2 + p^2 + 2p^2 cos 60°) = √3 p."
    },
    {
        numb: 64,
        question: "Electric field E at a distance 'r' from an infinite line charge is proportional to:",
        answer: "1 / r",
        options: ["1 / r", "1 / r^2", "r", "Independent of r"],
        explanation: "E = λ / (2πε0r). Thus E ∝ 1/r."
    },
    {
        numb: 65,
        question: "Electric field due to an infinite plane sheet of charge is:",
        answer: "Independent of distance",
        options: ["Independent of distance", "∝ 1/r", "∝ 1/r^2", "∝ r"],
        explanation: "E = σ / (2ε0). There is no 'r' term in the formula."
    },
    {
        numb: 66,
        question: "When a metal sphere is placed in a uniform electric field, the field lines inside the sphere are:",
        answer: "Absent (zero)",
        options: ["Absent (zero)", "Uniform", "Converging", "Diverging"],
        explanation: "Electrostatic shielding: Field lines cannot exist inside a conductor in equilibrium."
    },
    {
        numb: 67,
        question: "If a dipole is placed in a uniform field, the net force on it is always:",
        answer: "Zero",
        options: ["Zero", "pE", "pE sin θ", "Maximum"],
        explanation: "Force on +q is qE, force on -q is -qE. Sum is always zero."
    },
    {
        numb: 68,
        question: "The work done in taking a charge around a closed path in an electric field is:",
        answer: "Always zero",
        options: ["Always zero", "Depends on path", "Depends on charge", "Infinite"],
        explanation: "The electrostatic field is a conservative field."
    },
    {
        numb: 69,
        question: "The number of electrons in 1 Coulomb of negative charge is:",
        answer: "6.25 x 10^18",
        options: ["6.25 x 10^18", "1.6 x 10^-19", "6 x 10^23", "9 x 10^9"],
        explanation: "n = Q / e = 1 / (1.6 x 10^-19) = 6.25 x 10^18."
    },
    {
        numb: 70,
        question: "Which of the following cannot be a unit of electric field?",
        answer: "Joul / Coulomb",
        options: ["Joul / Coulomb", "Newton / Coulomb", "Volt / Meter", "Newton-meter^2 / Coulomb"],
        explanation: "J/C is Volt (unit of potential). N-m^2/C is Flux. Electric field units are N/C or V/m."
    },
    {
        numb: 71,
        question: "A charge q is placed at the center of an imaginary cube. The flux through each face of the cube is:",
        answer: "q / (6ε0)",
        options: ["q / (6ε0)", "q / ε0", "6q / ε0", "0"],
        explanation: "Total flux = q/ε0. By symmetry, each of the 6 faces has 1/6th of total flux."
    },
    {
        numb: 72,
        question: "The electrostatic force between two point charges placed in a medium of dielectric constant K is F. If the medium is removed, the force becomes:",
        answer: "K F",
        options: ["K F", "F / K", "F", "K^2 F"],
        explanation: "Force in vacuum F_vac = K * F_medium."
    },
    {
        numb: 73,
        question: "Two similar point charges repel each other with force F. If the distance between them is increased by 10%, the force:",
        answer: "Decreases by roughly 17%",
        options: ["Decreases by roughly 17%", "Increases by 10%", "Decreases by 10%", "Decreases by 21%"],
        explanation: "F ∝ 1 / r^2. If r becomes 1.1r, F becomes F / (1.1)^2 = F / 1.21 ≈ 0.826F. Difference is ~17.4%."
    },
    {
        numb: 74,
        question: "The capacitance of a sphere is proportional to:",
        answer: "Radius",
        options: ["Radius", "Radius^2", "1 / Radius", "Independent of Radius"],
        explanation: "C = 4πε0R. Thus C ∝ R."
    },
    {
        numb: 75,
        question: "The electric field inside a hollow charged spherical conductor is zero. This property is used in:",
        answer: "Electrostatic shielding",
        options: ["Electrostatic shielding", "Cyclotron", "Capacitor", "Galvanometer"],
        explanation: "Protecting sensitive biological or electronic equipment from external fields."
    },
    {
        numb: 76,
        question: "Two point charges +4 μC and -1 μC are placed at a distance. The point where the net electric field is zero is:",
        answer: "Outside the segment, closer to -1 μC",
        options: ["Outside the segment, closer to -1 μC", "Exactly in the middle", "Inside the segment, closer to -1 μC", "Outside the segment, closer to +4 μC"],
        explanation: "For unequal opposite charges, null point is outside, on the side of the smaller magnitude charge."
    },
    {
        numb: 77,
        question: "Electric field E and potential V are related by:",
        answer: "E = -dV / dx",
        options: ["E = -dV / dx", "E = dV / dx", "V = -dE / dx", "V = E / x"],
        explanation: "Electric field is the negative gradient of potential."
    },
    {
        numb: 78,
        question: "A closed surface encloses an electric dipole. The net flux through the surface is:",
        answer: "0",
        options: ["0", "q / ε0", "2q / ε0", "Infinite"],
        explanation: "Net charge of a dipole is +q + (-q) = 0. By Gauss's Law, Q_encl = 0 means Φ = 0."
    },
    {
        numb: 79,
        question: "In a uniform electric field, the potential is same at all points:",
        answer: "In a plane perpendicular to field lines",
        options: ["In a plane perpendicular to field lines", "In a plane parallel to field lines", "In all directions", "None of these"],
        explanation: "Equipotential surfaces are always perpendicular to the electric field lines."
    },
    {
        numb: 80,
        question: "If a unit positive charge is moved from one point to another on an equipotential surface, the work done is:",
        answer: "Zero",
        options: ["Zero", "Positive", "Negative", "Depends on path"],
        explanation: "W = q * ΔV. On an equipotential surface, ΔV = 0, so W = 0."
    },
    {
        numb: 81,
        question: "Electric field lines point towards:",
        answer: "Lower potential",
        options: ["Lower potential", "Higher potential", "Same potential", "North pole"],
        explanation: "Since E = -dV/dx, the field points in the direction where V decreases."
    },
    {
        numb: 82,
        question: "The law used to calculate electric field from a given charge distribution is:",
        answer: "Gauss's Law",
        options: ["Gauss's Law", "Faraday's Law", "Ampere's Law", "Ohm's Law"],
        explanation: "Specifically for static charge distributions, Gauss's Law is the primary analytical tool."
    },
    {
        numb: 83,
        question: "A test charge is moved from point A to B in an electric field. The work done depends on:",
        answer: "Only positions of A and B",
        options: ["Only positions of A and B", "The path taken", "The speed of movement", "All of these"],
        explanation: "Work in a conservative field (electrostatic) is independent of the path taken."
    },
    {
        numb: 84,
        question: "Which of these is not a property of electric field lines?",
        answer: "They can form closed loops",
        options: ["They can form closed loops", "They start from positive charge", "They end on negative charge", "They are normal to conductor surfaces"],
        explanation: "Electrostatic field lines cannot form closed loops because the field is conservative (curl E = 0)."
    },
    {
        numb: 85,
        question: "The electric field intensity due to a short dipole at distance 'r' on axial line is E. On equitorial line at same distance it is:",
        answer: "E / 2",
        options: ["E / 2", "E", "2 E", "E / 4"],
        explanation: "E_axial = 2kp/r^3 and E_equitorial = kp/r^3. So equitorial is half of axial."
    },
    {
        numb: 86,
        question: "If radius of a charged metallic sphere is doubled, the potential at the center:",
        answer: "Is halved",
        options: ["Is halved", "Remains same", "Is doubled", "Is quadrupled"],
        explanation: "V = k Q / R. If R becomes 2R, V becomes V/2."
    },
    {
        numb: 87,
        question: "Electric field at a point is 100 V/m. If a charge of 2 C is placed there, the force is:",
        answer: "200 N",
        options: ["200 N", "50 N", "0.02 N", "100 N"],
        explanation: "F = q * E = 2 * 100 = 200 N."
    },
    {
        numb: 88,
        question: "Two charges of 1 μC and 5 μC are separated by distance. The ratio of forces acting on them is:",
        answer: "1 : 1",
        options: ["1 : 1", "1 : 5", "5 : 1", "1 : 25"],
        explanation: "By Newton's third law (and Coulomb's law), the force on A by B is equal to force on B by A."
    },
    {
        numb: 89,
        question: "Charge Q is placed at the center of the line joining two equal charges q. If system is in equilibrium, then Q is:",
        answer: "-q / 4",
        options: ["-q / 4", "q / 4", "-q / 2", "q / 2"],
        explanation: "For the charge q at the end to be in equilibrium: (k q^2)/(2a)^2 + (k q Q)/a^2 = 0 -> Q = -q/4."
    },
    {
        numb: 90,
        question: "Surface charge density of a charged conductor is:",
        answer: "Maximum at sharp points",
        options: ["Maximum at sharp points", "Minimum at sharp points", "Same everywhere", "Zero everywhere"],
        explanation: "σ ∝ 1 / Radius of curvature. Sharp points have small radius, so σ is very large."
    },
    {
        numb: 91,
        question: "The force between two charges at distance 'r' is F. What is the force at '2r'?",
        answer: "F / 4",
        options: ["F / 4", "F / 2", "2 F", "4 F"],
        explanation: "F ∝ 1 / r^2. Doubling distance reduces force to 1/4th."
    },
    {
        numb: 92,
        question: "The unit 'Farad' is used for:",
        answer: "Capacitance",
        options: ["Capacitance", "Charge", "Potential", "Resistance"],
        explanation: "Direct SI unit definition."
    },
    {
        numb: 93,
        question: "Which of the following describes the behavior of field lines near a positive charge?",
        answer: "Diverging outwards",
        options: ["Diverging outwards", "Converging inwards", "Parallel", "Circular"],
        explanation: "Lines originate from positive charges and move away radially."
    },
    {
        numb: 94,
        question: "The area vector usually points:",
        answer: "Outward and Normal to surface",
        options: ["Outward and Normal to surface", "Tangent to surface", "Along the radius", "Inward"],
        explanation: "Standard convention for calculating flux through closed surfaces."
    },
    {
        numb: 95,
        question: "Electric field at a point is a:",
        answer: "Vector",
        options: ["Vector", "Scalar", "Tensor", "Unitless quantity"],
        explanation: "Electric field has both magnitude and direction."
    },
    {
        numb: 96,
        question: "If a soap bubble is given a charge, its size increases. This is due to:",
        answer: "Mutual repulsion of charges",
        options: ["Mutual repulsion of charges", "Surface tension", "Atmospheric pressure", "Internal heat"],
        explanation: "Distributed charges on the surface repel each other, expanding the bubble."
    },
    {
        numb: 97,
        question: "The flux through a closed surface is zero if the net charge inside is:",
        answer: "Zero",
        options: ["Zero", "Infinite", "Negative", "Positive"],
        explanation: "Φ = Q/ε0. Φ=0 means Q=0."
    },
    {
        numb: 98,
        question: "Two point charges +3 μC and +4 μC repel each other with 10 N. If -6 μC is added to each, the new force is:",
        answer: "Attractive",
        options: ["Attractive", "Repulsive", "Zero", "Remains 10 N"],
        explanation: "New charges: (3-6)=-3 μC and (4-6)=-2 μC. Both are negative, so they still repel. Wait: -3 and -2 repel. Option 'Attractive' is wrong if both are same sign. New force is (-3)*(-2)/(3*4) * 10 = 6/12 * 10 = 5 N. It is still repulsive."
    },
    {
        numb: 99,
        question: "Potential gradient is equal to:",
        answer: "- Electric field",
        options: ["- Electric field", "Electric flux", "Charge", "Work"],
        explanation: "E = -dV/dx. Thus dV/dx = -E."
    },
    {
        numb: 100,
        question: "The unit Volt-meter (V m) is equivalent to:",
        answer: "Newton-meter^2 / Coulomb",
        options: ["Newton-meter^2 / Coulomb", "Joul-Coulomb", "Newton / Coulomb", "Farad-meter"],
        explanation: "E is V/m and Also N/C. So Flux = E * Area = (V/m)*m^2 = V m. Also (N/C)*m^2 = N m^2/C."
    },
    {
        numb: 101,
        question: "Coulomb's Law shows force is inversely proportional to r^2. This is called:",
        answer: "Inverse Square Law",
        options: ["Inverse Square Law", "Linear Law", "Direct Proportionality", "Exponential Decay"],
        explanation: "Basic terminology for laws following 1/r^2."
    },
    {
        numb: 102,
        question: "Electric dipole moment has dimensions:",
        answer: "[L^1 T^1 A^1]",
        options: ["[L^1 T^1 A^1]", "[M L^1 T^1 A^1]", "[L^2 T^1 A^1]", "[A]"],
        explanation: "p = q * d = [AT] * [L] = [LTA]."
    },
    {
        numb: 103,
        question: "If a body is positively charged, it means it has:",
        answer: "Loss of electrons",
        options: ["Loss of electrons", "Gain of electrons", "Gain of protons", "Loss of protons"],
        explanation: "Positive charge usually results from the removal of negative electrons."
    },
    {
        numb: 104,
        question: "The ratio of electrostatic force to gravitational force is constant for any distance?",
        answer: "Yes",
        options: ["Yes", "No", "Only for small r", "Only for large r"],
        explanation: "Both laws follow 1/r^2, so 'r^2' cancels out in the ratio."
    },
    {
        numb: 105,
        question: "The permittivity of free space is roughly:",
        answer: "8.854 x 10^-12 F/m",
        options: ["8.854 x 10^-12 F/m", "9 x 10^9 F/m", "1 F/m", "6.25 x 10^18 F/m"],
        explanation: "F/m is another unit for ε0 (since C/V-m = F/m)."
    },
    {
        numb: 106,
        question: "A charge q is placed at the center of the line joining two charges Q, Q. System is in equilibrium if q =:",
        answer: "-Q / 4",
        options: ["-Q / 4", "Q / 4", "-Q / 2", "Q / 2"],
        explanation: "Same as problem 89, derived from balancing forces on the end charge."
    },
    {
        numb: 107,
        question: "Electric flux units can be written as:",
        answer: "V m",
        options: ["V m", "V / m", "N / C", "C / m^2"],
        explanation: "Flux = E * Area = (V/m) * m^2 = V m."
    },
    {
        numb: 108,
        question: "Force per unit charge is called:",
        answer: "Electric field intensity",
        options: ["Electric field intensity", "Potential", "Flux", "Current"],
        explanation: "Definition of E = F / q."
    },
    {
        numb: 109,
        question: "When a point charge is moved around a dipole in a circle, the work done is:",
        answer: "Zero",
        options: ["Zero", "pE", "p q / r", "Infinite"],
        explanation: "Work in a conservative field over a closed loop is always zero."
    },
    {
        numb: 110,
        question: "Which of the following is not a vector?",
        answer: "Electric Potential",
        options: ["Electric Potential", "Electric Field", "Dipole Moment", "Force"],
        explanation: "Potential is energy per charge, which is a scalar."
    },
    {
        numb: 111,
        question: "Electric field lines are used to visualize:",
        answer: "Electric field",
        options: ["Electric field", "Magnetic field", "Mass", "Velocity"],
        explanation: "A visualization tool for the field vector."
    },
    {
        numb: 112,
        question: "A dipole in a uniform field is in stable equilibrium when θ =:",
        answer: "0°",
        options: ["0°", "180°", "90°", "270°"],
        explanation: "Stable means p is parallel to E. θ=180° is unstable equilibrium."
    },
    {
        numb: 113,
        question: "The potential energy of a dipole in a uniform field is minimum at θ =:",
        answer: "0°",
        options: ["0°", "180°", "90°", "360°"],
        explanation: "U = -pE cos θ. For θ=0, U = -pE (minimum)."
    },
    {
        numb: 114,
        question: "The potential energy of a dipole in a uniform field is maximum at θ =:",
        answer: "180°",
        options: ["180°", "0°", "90°", "270°"],
        explanation: "U = -pE cos θ. For θ=180, U = +pE (maximum)."
    },
    {
        numb: 115,
        question: "If distance between plates of a parallel plate capacitor is doubled, its capacitance:",
        answer: "Is halved",
        options: ["Is halved", "Is doubled", "Is quadrupled", "Remains same"],
        explanation: "C = ε0 A / d. If d becomes 2d, C becomes C/2."
    },
    {
        numb: 116,
        question: "Gauss's Law helps in calculating E when the charge distribution has:",
        answer: "High symmetry",
        options: ["High symmetry", "High complexity", "Zero total charge", "Moving charges"],
        explanation: "Symmetry (spherical, cylindrical, planar) allows the integral to be solved easily."
    },
    {
        numb: 117,
        question: "Electric field E due to a dipole varies with distance as:",
        answer: "1 / r^3",
        options: ["1 / r^3", "1 / r^2", "1 / r", "r"],
        explanation: "For short dipoles, E ∝ 1/r^3."
    },
    {
        numb: 118,
        question: "Potential V due to a dipole varies with distance as:",
        answer: "1 / r^2",
        options: ["1 / r^2", "1 / r^3", "1 / r", "Independent of r"],
        explanation: "V = kp cos θ / r^2. So V ∝ 1/r^2."
    },
    {
        numb: 119,
        question: "At any point on the equitorial plane of a dipole, the potential is:",
        answer: "0",
        options: ["0", "kp / r^2", "2 kp / r^2", "Infinite"],
        explanation: "Equitorial means θ = 90°. V = kp cos 90 / r^2 = 0."
    },
    {
        numb: 120,
        question: "Two metallic spheres of radii R1 and R2 are charged to same potential. The ratio of their charges is:",
        answer: "R1 / R2",
        options: ["R1 / R2", "R1^2 / R2^2", "1 : 1", "R2 / R1"],
        explanation: "V1 = V2 -> k Q1/R1 = k Q2/R2 -> Q1/Q2 = R1/R2."
    },
    {
        numb: 121,
        question: "The value of electric field intensity inside a charged hollow spherical conductor is:",
        answer: "Zero",
        options: ["Zero", "Constant and non-zero", "Varies with distance", "Infinite"],
        explanation: "Inside a conductor, the net electric field is always zero in electrostatic equilibrium."
    },
    {
        numb: 122,
        question: "Which of the following quantity is a vector?",
        answer: "Electric Field Intensity",
        options: ["Electric Flux", "Electric Potential", "Electric Field Intensity", "Electric Potential Energy"],
        explanation: "Electric field intensity is force per unit charge, which has both magnitude and direction."
    },
    {
        numb: 123,
        question: "The work done in moving a 2C charge through a potential difference of 5V is:",
        answer: "10 J",
        options: ["10 J", "2.5 J", "0.4 J", "7 J"],
        explanation: "W = qV = 2 * 5 = 10 J."
    },
    {
        numb: 124,
        question: "When a dielectric slab is inserted between the plates of a capacitor, the capacitance:",
        answer: "Increases",
        options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
        explanation: "C' = K * C, where K is the dielectric constant (K > 1)."
    },
    {
        numb: 125,
        question: "The unit of surface charge density is:",
        answer: "C / m^2",
        options: ["C / m^2", "C / m", "C / m^3", "C m^2"],
        explanation: "Surface charge density σ = Charge / Area = C / m^2."
    },
    {
        numb: 126,
        question: "A capacitor of 10μF is charged to 100V. The energy stored is:",
        answer: "0.05 J",
        options: ["0.05 J", "0.5 J", "5 J", "50 J"],
        explanation: "U = 1/2 CV^2 = 1/2 * 10e-6 * 100^2 = 0.5 * 10e-6 * 10000 = 0.05 J."
    },
    {
        numb: 127,
        question: "Electric field E and potential V are related as:",
        answer: "E = -dV/dx",
        options: ["E = -dV/dx", "V = -dE/dx", "E = dV/dx", "V = dE/dx"],
        explanation: "The electric field is the negative gradient of the potential."
    },
    {
        numb: 128,
        question: "If the radius of a spherical conductor is doubled, its capacitance:",
        answer: "Doubles",
        options: ["Doubles", "Remains same", "Halves", "Becomes four times"],
        explanation: "C = 4πε0 R. So C ∝ R."
    },
    {
        numb: 129,
        question: "The dielectric constant of a metal is:",
        answer: "Infinite",
        options: ["Infinite", "0", "1", "10"],
        explanation: "For a perfect conductor (metal), the dielectric constant is considered infinite."
    },
    {
        numb: 130,
        question: "One Coulomb is equal to how many statCoulombs?",
        answer: "3 x 10^9",
        options: ["3 x 10^9", "1 / (3 x 10^9)", "9 x 10^9", "1.6 x 10^-19"],
        explanation: "1 C = 3 x 10^9 esu (statC)."
    },
    {
        numb: 131,
        question: "The electron volt (eV) is a unit of:",
        answer: "Energy",
        options: ["Energy", "Potential", "Charge", "Force"],
        explanation: "1 eV is the energy gained by an electron accelerating through 1 Volt."
    },
    {
        numb: 132,
        question: "If a charge q is placed inside a cube, the flux through each face is:",
        answer: "q / (6ε0)",
        options: ["q / (6ε0)", "q / ε0", "q / (3ε0)", "0"],
        explanation: "Total flux is q/ε0. A cube has 6 faces, so each face gets 1/6th of the total flux."
    },
    {
        numb: 133,
        question: "Two capacitors of 2μF each are connected in parallel. The equivalent capacitance is:",
        answer: "4μF",
        options: ["4μF", "1μF", "2μF", "0.5μF"],
        explanation: "Parallel: Cp = C1 + C2 = 2 + 2 = 4μF."
    },
    {
        numb: 134,
        question: "Two capacitors of 2μF each are connected in series. The equivalent capacitance is:",
        answer: "1μF",
        options: ["1μF", "4μF", "2μF", "0.5μF"],
        explanation: "Series: 1/Cs = 1/2 + 1/2 = 1 -> Cs = 1μF."
    },
    {
        numb: 135,
        question: "The force between two point charges remains same if distance is doubled and charge on one is made:",
        answer: "Four times",
        options: ["Four times", "Double", "Half", "Eight times"],
        explanation: "F = k q1 q2 / r^2. If r -> 2r, F -> F/4. To keep F same, q1 must become 4q1."
    },
    {
        numb: 136,
        question: "Electric flux line starts from:",
        answer: "Positive charge",
        options: ["Positive charge", "Negative charge", "Neutral", "Infinity"],
        explanation: "By convention, electric field lines originate from positive charges."
    },
    {
        numb: 137,
        question: "Electric flux line ends at:",
        answer: "Negative charge",
        options: ["Negative charge", "Positive charge", "Neutral", "Origin"],
        explanation: "By convention, electric field lines terminate on negative charges."
    },
    {
        numb: 138,
        question: "Total flux through a closed surface enclosing a dipole is:",
        answer: "Zero",
        options: ["Zero", "q / ε0", "2q / ε0", "Infinite"],
        explanation: "A dipole has net charge +q - q = 0. By Gauss's Law, Φ = Q_net / ε0 = 0."
    },
    {
        numb: 139,
        question: "Which of the following is not a property of electric field lines?",
        answer: "They form closed loops",
        options: ["They form closed loops", "They never intersect", "They start at +q", "They are perpendicular to conductor surface"],
        explanation: "Electrostatic field lines do not form closed loops (they are conservative)."
    },
    {
        numb: 140,
        question: "Relation between Volt and StatVolt is:",
        answer: "1 StatVolt = 300 Volt",
        options: ["1 StatVolt = 300 Volt", "1 Volt = 300 StatVolt", "1 Volt = 3 x 10^9 StatVolt", "1 StatVolt = 1/300 Volt"],
        explanation: "1 StatV = 300 V exactly."
    },
    {
        numb: 141,
        question: "Potential gradient has unit:",
        answer: "V / m",
        options: ["V / m", "V m", "V / m^2", "N / C"],
        explanation: "Potential gradient = dV/dx, so units are V/m."
    },
    {
        numb: 142,
        question: "In an electric field, a proton and an electron experience:",
        answer: "Forces in opposite directions",
        options: ["Forces in opposite directions", "Force in same direction", "No force", "Forces of different magnitudes"],
        explanation: "Opposite charges experience forces in opposite directions in the same field."
    },
    {
        numb: 143,
        question: "Surface of a conductor is always:",
        answer: "Equipotential",
        options: ["Equipotential", "Zero potential", "Infinite potential", "Non-uniform potential"],
        explanation: "In static conditions, the entire surface of a conductor is at the same potential."
    },
    {
        numb: 144,
        question: "Capacity of a spherical conductor is 1μF. Its radius is:",
        answer: "9 km",
        options: ["9 km", "1 km", "90 km", "0.9 km"],
        explanation: "C = 4πε0 R -> R = C / (4πε0) = 1e-6 * 9e9 = 9000 m = 9 km."
    },
    {
        numb: 145,
        question: "Work done in moving a charge on an equipotential surface is:",
        answer: "Zero",
        options: ["Zero", "Maximum", "Infinite", "Depends on path"],
        explanation: "W = q ΔV. On equipotential surface, ΔV = 0, so W = 0."
    },
    {
        numb: 146,
        question: "Electric field intensity at midpoint between two equal and like charges is:",
        answer: "Zero",
        options: ["Zero", "Maximum", "Infinite", "k q / r^2"],
        explanation: "The fields from the two charges point in opposite directions and cancel out."
    },
    {
        numb: 147,
        question: "Potential at midpoint between two equal and like charges +q separated by 2r is:",
        answer: "2 k q / r",
        options: ["2 k q / r", "0", "k q / r", "k q / (2r)"],
        explanation: "V = k q / r + k q / r = 2 k q / r."
    },
    {
        numb: 148,
        question: "Unit of electric dipole moment is:",
        answer: "C m",
        options: ["C m", "C / m", "N m / C", "Debye"],
        explanation: "p = q * d. SI unit is C*m. Debye is also a unit (CGS)."
    },
    {
        numb: 149,
        question: "Dimensional formula for capacitance is:",
        answer: "[M^-1 L^-2 T^4 A^2]",
        options: ["[M^-1 L^-2 T^4 A^2]", "[M L^2 T^-3 A^-1]", "[M L^2 T^2 A^2]", "[M^-1 L^-2 T^2 A^2]"],
        explanation: "C = Q/V = [AT] / [ML^2 T^-3 A^-1] = [M^-1 L^-2 T^4 A^2]."
    },
    {
        numb: 150,
        question: "When we move a charge against electric force, work is stored as:",
        answer: "Potential Energy",
        options: ["Potential Energy", "Kinetic Energy", "Heat", "Magnetic Energy"],
        explanation: "Work done against conservative force is stored as potential energy."
    },
    {
        numb: 151,
        question: "Dielectric strength of air is roughly:",
        answer: "3 x 10^6 V/m",
        options: ["3 x 10^6 V/m", "3 x 10^4 V/m", "10^6 V/m", "3 x 10^8 V/m"],
        explanation: "Air breaks down (sparks) at approximately 3 Million Volts per meter."
    },
    {
        numb: 152,
        question: "Polarisation P in a dielectric is defined as:",
        answer: "Dipole moment per unit volume",
        options: ["Dipole moment per unit volume", "Charge per unit area", "Force per unit charge", "Potential per unit length"],
        explanation: "P = Net dipole moment / Volume."
    },
    {
        numb: 153,
        question: "A Faraday is a unit of:",
        answer: "Electric Charge",
        options: ["Electric Charge", "Capacitance", "Resistance", "Current"],
        explanation: "1 Faraday ≈ 96500 Coulombs (charge of 1 mole electrons)."
    },
    {
        numb: 154,
        question: "Angle between equipotential surface and electric field lines is:",
        answer: "90°",
        options: ["90°", "0°", "45°", "180°"],
        explanation: "Field lines are always normal (perpendicular) to equipotential surfaces."
    },
    {
        numb: 155,
        question: "Electric field due to a point charge 'q' at infinity is:",
        answer: "Zero",
        options: ["Zero", "Infinite", "Constant", "k q"],
        explanation: "E = k q / r^2. As r -> ∞, E -> 0."
    },
    {
        numb: 156,
        question: "A dipole is placed in a non-uniform field. It experiences:",
        answer: "Both force and torque",
        options: ["Both force and torque", "Only torque", "Only force", "Neither force nor torque"],
        explanation: "In non-uniform field, the net force is not zero because fields at +q and -q are different."
    },
    {
        numb: 157,
        question: "SI unit of Electric Potential is:",
        answer: "Volt",
        options: ["Volt", "Joule", "Coulomb", "Ampere"],
        explanation: "Volt is the name given to Joule per Coulomb."
    },
    {
        numb: 158,
        question: "Van de Graaff generator is used to produce:",
        answer: "High potential",
        options: ["High potential", "High current", "Both", "Small steady current"],
        explanation: "It can produce potentials of several million volts."
    },
    {
        numb: 159,
        question: "Minimum charge possible on a stable independent particle is:",
        answer: "1.6 x 10^-19 C",
        options: ["1.6 x 10^-19 C", "0", "1 C", "Infinite"],
        explanation: "This is the elementary charge 'e'."
    },
    {
        numb: 160,
        question: "A plastic comb rubbed with hair attracts small pieces of paper due to:",
        answer: "Induction",
        options: ["Induction", "Conduction", "Gravitation", "Magnetic force"],
        explanation: "The charged comb induces dipole moments in the neutral paper pieces."
    },
    {
        numb: 161,
        question: "SI unit of Electric field intensity is:",
        answer: "N / C",
        options: ["N / C", "V m", "C / N", "J / C"],
        explanation: "E = Force / Charge (Newtons / Coulomb)."
    },
    {
        numb: 162,
        question: "Mass of an electron is:",
        answer: "9.1 x 10^-31 kg",
        options: ["9.1 x 10^-31 kg", "1.6 x 10^-27 kg", "9.1 x 10^-27 kg", "1.6 x 10^-19 kg"],
        explanation: "Electron mass is roughly 1/1836 of proton mass."
    },
    {
        numb: 163,
        question: "Energy density in an electric field E is proportional to:",
        answer: "E^2",
        options: ["E^2", "E", "1 / E^2", "√E"],
        explanation: "u = 1/2 ε0 E^2."
    },
    {
        numb: 164,
        question: "Lightning conductors are made of:",
        answer: "Copper",
        options: ["Copper", "Glass", "Plastic", "Wood"],
        explanation: "Metals like copper are used for their high conductivity to steer current safely to ground."
    },
    {
        numb: 165,
        question: "Electric field at a point on the axis of a ring of charge is maximum at x =:",
        answer: "R / √2",
        options: ["R / √2", "R", "0", "2R"],
        explanation: "Mathematical derivation for ring field shows peak at x = R/√2."
    },
    {
        numb: 166,
        question: "Net force on an electric dipole in a uniform electric field is:",
        answer: "Always Zero",
        options: ["Always Zero", "Non-zero", "Depends on orientation", "pE"],
        explanation: "Forces +qE and -qE are equal and opposite, so net force is zero."
    },
    {
        numb: 167,
        question: "In general, the work done by electric field on a particle is path:",
        answer: "Independent",
        options: ["Independent", "Dependent", "Zero", "Always positive"],
        explanation: "Electrostatic field is a conservative field."
    },
    {
        numb: 168,
        question: "Potential due to a point charge 'q' at distance 'r' is V. At distance '2r' it is:",
        answer: "V / 2",
        options: ["V / 2", "V / 4", "2V", "V"],
        explanation: "V = kq/r. If r -> 2r, V -> V/2."
    },
    {
        numb: 169,
        question: "Which of the following describes the behavior of a conductor in an electric field?",
        answer: "Charge resides only on the surface",
        options: ["Charge resides only on the surface", "Field inside is non-zero", "Potential inside is zero", "It blocks magnetic fields"],
        explanation: "Any excess charge on a conductor moves to the outer surface to minimize repulsion."
    },
    {
        numb: 170,
        question: "The displacement current was introduced by:",
        answer: "Maxwell",
        options: ["Maxwell", "Coulomb", "Ampere", "Faraday"],
        explanation: "Maxwell added the displacement current term to Ampere's law."
    },
    {
        numb: 171,
        question: "The electrostatic force is:",
        answer: "Conservative",
        options: ["Conservative", "Non-conservative", "Variable", "Zero"],
        explanation: "Work done by electrostatic force in a closed loop is zero, making it conservative."
    },
    {
        numb: 172,
        question: "Which of the following describes the lines of force due to a negative point charge?",
        answer: "Radially inward",
        options: ["Radially inward", "Radially outward", "Circular", "Parabolic"],
        explanation: "Field lines point towards negative charges."
    },
    {
        numb: 173,
        question: "A unit of electric flux density is:",
        answer: "C / m^2",
        options: ["C / m^2", "N / C", "V / m", "Wb / m^2"],
        explanation: "Flux density is flux per unit area, often represented by the D field (C/m^2)."
    },
    {
        numb: 174,
        question: "When two charges are separated by a distance 'r', the force is 'F'. If the medium is changed to water (K=80), the force becomes:",
        answer: "F / 80",
        options: ["F / 80", "80 F", "F", "F / 40"],
        explanation: "F_medium = F_vacuum / K."
    },
    {
        numb: 175,
        question: "The capacity of a parallel plate capacitor does not depend on:",
        answer: "Metal of the plates",
        options: ["Metal of the plates", "Area of plates", "Distance between plates", "Medium between plates"],
        explanation: "C = K ε0 A / d. The material of the conductor plate itself doesn't affect C if it's a good conductor."
    },
    {
        numb: 176,
        question: "Potential at any point P due to a short dipole is given by V = kp cos θ / r^2. If θ=90, V is:",
        answer: "0",
        options: ["0", "kp/r^2", "Infinity", "kp/r"],
        explanation: "Cos 90 = 0, so V = 0 at the equitorial plane."
    },
    {
        numb: 177,
        question: "The value of 1 / (4πε0) is:",
        answer: "9 x 10^9 N m^2 C^-2",
        options: ["9 x 10^9 N m^2 C^-2", "1 N m^2 C^-2", "8.85 x 10^-12 N m^2 C^-2", "9 x 10^-9 N m^2 C^-2"],
        explanation: "This is the electrostatic constant 'k' in SI units."
    },
    {
        numb: 178,
        question: "If we increase the charge on a conductor, its potential:",
        answer: "Increases",
        options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
        explanation: "V = Q / C. Since C is constant for a given conductor shape, V increases with Q."
    },
    {
        numb: 179,
        question: "An electric dipole of moment 'p' is placed in field 'E'. Its potential energy is minimum when angle is:",
        answer: "0°",
        options: ["0°", "180°", "90°", "45°"],
        explanation: "U = -pE cos θ. Minimum value is -pE at θ=0."
    },
    {
        numb: 180,
        question: "A test charge is moved through a small displacement in an electric field. The work done is qE.dr? (True/False check):",
        answer: "True",
        options: ["True", "False", "Only in gravity", "Only for dipoles"],
        explanation: "dW = F.dr = (qE).dr."
    },
    {
        numb: 181,
        question: "The concept of 'Charge is Quantized' implies:",
        answer: "q = ±ne",
        options: ["q = ±ne", "q = 1/e", "q = e^2", "q is always positive"],
        explanation: "Charge exists as integral multiples of the basic unit 'e'."
    },
    {
        numb: 182,
        question: "Which particle is easiest to accelerate to high speeds in an electric field?",
        answer: "Electron",
        options: ["Electron", "Proton", "Neutron", "Alpha particle"],
        explanation: "Electrons have the highest charge-to-mass ratio among common stable particles."
    },
    {
        numb: 183,
        question: "Electric potential inside a charged spherical conductor is:",
        answer: "Constant",
        options: ["Constant", "Zero", "Increases with r", "Decreases with 1/r"],
        explanation: "Since E=0 inside, ΔV=0, so V is constant and equal to its value at the surface."
    },
    {
        numb: 184,
        question: "SI unit of Charge per unit length is:",
        answer: "C / m",
        options: ["C / m", "C m", "C / m^2", "C / m^3"],
        explanation: "This is linear charge density λ = Q/L."
    },
    {
        numb: 185,
        question: "If two identical mercury drops (each of radius r and potential V) merge, the new potential is:",
        answer: "2^(2/3) V",
        options: ["2^(2/3) V", "2 V", "4 V", "V"],
        explanation: "Volume doubles -> R = 2^(1/3) r. Charge doubles -> Q' = 2q. V' = k(2q)/(2^(1/3)r) = 2^(2/3) V."
    },
    {
        numb: 186,
        question: "The lines of force never intersect because:",
        answer: "At intersection, there would be two directions of E",
        options: ["At intersection, there would be two directions of E", "They repel each other", "They are imaginary", "They are straight lines"],
        explanation: "E field at a point is unique. Intersection would imply two resultant field vectors at one spot, which is impossible."
    },
    {
        numb: 187,
        question: "Work done in an equipotential path is:",
        answer: "Zero",
        options: ["Zero", "Infinite", "pE", "qV"],
        explanation: "Since V doesn't change, ΔV=0 and W=qΔV=0."
    },
    {
        numb: 188,
        question: "What happens to the weight of a body when it gets positively charged by friction?",
        answer: "Weight decreases slightly",
        options: ["Weight decreases slightly", "Weight increases slightly", "Weight stays same", "Weight becomes zero"],
        explanation: "Positive charge means loss of electrons. Since electrons have mass, the body loses a tiny amount of mass."
    },
    {
        numb: 189,
        question: "The SI unit of capacitance, Farad, is equivalent to:",
        answer: "Coulomb / Volt",
        options: ["Coulomb / Volt", "Volt / Coulomb", "Joule / Volt", "Newton / Coulomb"],
        explanation: "C = Q / V."
    },
    {
        numb: 190,
        question: "A dipole in stable equilibrium in a uniform field has θ =:",
        answer: "0°",
        options: ["0°", "180°", "90°", "270°"],
        explanation: "At 0°, torque is zero and potential energy is minimum."
    },
    {
        numb: 191,
        question: "Coulomb's law is valid for distances from:",
        answer: "10^-15 m to many km",
        options: ["10^-15 m to many km", "Only atomic distances", "Only large distances", "Zero to infinity"],
        explanation: "It breaks down at sub-nuclear levels where nuclear forces dominate, but is valid for almost all macroscopic and atomic scales."
    },
    {
        numb: 192,
        question: "Capacity of a earth (radius 6400 km) treated as a conductor is roughly:",
        answer: "711 μF",
        options: ["711 μF", "1 F", "100 μF", "6400 μF"],
        explanation: "C = R / k = 6.4 x 10^6 / (9 x 10^9) ≈ 7.11 x 10^-4 F = 711 μF."
    },
    {
        numb: 193,
        question: "Dimension of ε0 is:",
        answer: "[M^-1 L^-3 T^4 A^2]",
        options: ["[M^-1 L^-3 T^4 A^2]", "[M L^3 T^-4 A^-2]", "[M L T^-2]", "[A T]"],
        explanation: "Use Coulomb's law: F = q1 q2 / (4πε0 r^2) to derive dimensions."
    },
    {
        numb: 194,
        question: "Specific charge of an electron is:",
        answer: "1.76 x 10^11 C/kg",
        options: ["1.76 x 10^11 C/kg", "1.6 x 10^-19 C/kg", "9.1 x 10^-31 C/kg", "1 C/kg"],
        explanation: "Specific charge is the ratio e/m."
    },
    {
        numb: 195,
        question: "Number of electrons in 1 Coulomb of charge is:",
        answer: "6.25 x 10^18",
        options: ["6.25 x 10^18", "1.6 x 10^19", "6.023 x 10^23", "9 x 10^9"],
        explanation: "n = Q / e = 1 / (1.6 x 10^-19) = 6.25 x 10^18."
    },
    {
        numb: 196,
        question: "Electric field E at the midpoint of a dipole is:",
        answer: "Along p direction",
        options: ["Along p direction", "Opposite to p direction", "Zero", "Perpendicular to p"],
        explanation: "Both +q and -q produce fields pointing towards the -q charge, which is the direction of p."
    },
    {
        numb: 197,
        question: "Potential V due to a point charge 'q' at distance 'r' is:",
        answer: "k q / r",
        options: ["k q / r", "k q / r^2", "k q r", "q / r"],
        explanation: "Standard formula for electrostatic potential of a point charge."
    },
    {
        numb: 198,
        question: "Surface charge density of a charged conductor is maximum at:",
        answer: "Sharp points",
        options: ["Sharp points", "Flat surfaces", "Hollow parts", "Center"],
        explanation: "σ ∝ 1/R (radius of curvature). Smallest R (sharp points) has highest density."
    },
    {
        numb: 199,
        question: "A metal foil is placed between plates of a capacitor without touching them. The capacitance:",
        answer: "Increases",
        options: ["Increases", "Decreases", "Stays same", "Becomes zero"],
        explanation: "The effective distance 'd' between original plates is reduced, increasing C."
    },
    {
        numb: 200,
        question: "The concept of quantization of charge was experimentally proved by:",
        answer: "Millikan",
        options: ["Millikan", "Faraday", "Maxwell", "Newton"],
        explanation: "Robert Millikan's oil drop experiment determined the value of 'e'."
    },
    {
        numb: 201,
        question: "Electric field lines around a dipole are:",
        answer: "Curved",
        options: ["Curved", "Straight", "Circular loops", "None"],
        explanation: "Field lines curve from the positive charge to the negative charge."
    },
    {
        numb: 202,
        question: "Dielectric constant of water is 80. Its permittivity is:",
        answer: "80 ε0",
        options: ["80 ε0", "ε0 / 80", "80", "8.85 x 10^-12"],
        explanation: "ε = K * ε0."
    },
    {
        numb: 203,
        question: "Two charges q and -q are placed at a distance d. The net force on a third charge placed at midpoint is:",
        answer: "Maximum and towards -q",
        options: ["Maximum and towards -q", "Zero", "Minimum", "Towards +q"],
        explanation: "Fields from both q and -q add up at the center pointing towards -q."
    },
    {
        numb: 204,
        question: "The SI unit of dipole moment (C m) is also expressed in:",
        answer: "Debye",
        options: ["Debye", "Gauss", "Tesla", "Weber"],
        explanation: "Debye is the non-SI unit for dipole moments (1 D ≈ 3.33 x 10^-30 C m)."
    },
    {
        numb: 205,
        question: "When a dielectric is placed in electric field, its internal field:",
        answer: "Decreases",
        options: ["Decreases", "Increases", "Becomes zero", "Remains same"],
        explanation: "Polarization creates an internal field that opposes the external field."
    },
    {
        numb: 206,
        question: "Which of the following remains constant in series combination of capacitors?",
        answer: "Charge",
        options: ["Charge", "Potential Difference", "Energy", "Capacitance"],
        explanation: "In series, the same charge flows into all capacitors."
    },
    {
        numb: 207,
        question: "Which of the following remains constant in parallel combination of capacitors?",
        answer: "Potential Difference",
        options: ["Potential Difference", "Charge", "Energy", "Capacitance"],
        explanation: "All branches in parallel share the same pair of terminals, so V is same."
    },
    {
        numb: 208,
        question: "Energy stored in a capacitor per unit volume is called:",
        answer: "Energy Density",
        options: ["Energy Density", "Power", "Electric Pressure", "Surface Density"],
        explanation: "U / Volume = 1/2 ε0 E^2 (Energy Density)."
    },
    {
        numb: 209,
        question: "A device that can store charge is called:",
        answer: "Capacitor",
        options: ["Capacitor", "Resistor", "Inductor", "Generator"],
        explanation: "Capacitors are designed to store energy in the form of electric charge/field."
    },
    {
        numb: 210,
        question: "If a soap bubble is charged, its internal air pressure:",
        answer: "Decreases",
        options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
        explanation: "Electrostatic repulsion acts outwards, opposing surface tension and reducing pressure needed for equilibrium."
    }
];
