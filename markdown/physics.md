# 1 Measurements and their errors

## 1.1 Use of SI units and their prefixes

#### SI base units

| Measure             | Unit                      | Symbol | Dimension |
| ------------------- | ------------------------- | ------ | --------- |
| time                | second                    | s      | T         |
| length              | metre                     | m      | L         |
| mass                | kilogram                  | kg     | M         |
| electric current    | ampere                    | A      | I         |
| kelvin              | thermodynamic temperature | K      | Θ         |
| amount of substance | mole                      | mol    | N         |
| luminous intensity  | candela                   | cd     | J         |

#### Common derived units

| Measure              | Unit           | Symbol | SI base units                                  |
| -------------------- | -------------- | ------ | ---------------------------------------------- |
| frequency            | hertz          | Hz     | s<sup>-1</sup>                                 |
| force                | newton         | N      | kg m s<sup>-2</sup>                            |
| pressure             | pascal         | Pa     | kg m<sup>-1</sup> s<sup>-2</sup>               |
| energy               | joule          | J      | kg m<sup>2</sup> s<sup>-2</sup>                |
| power                | watt           | W      | kg m<sup>2</sup> s<sup>-3</sup>                |
| charge               | coulomb        | C      | A s                                            |
| potential difference | volt           | V      | kg m<sup>2</sup> s<sup>-3</sup> A<sup>-1</sup> |
| resistance           | ohm            | Ω      | kg m<sup>2</sup> s<sup>-3</sup> A<sup>-2</sup> |
| temperature          | degree celsius | °C     | K + 273.15 K                                   |

#### SI prefixes

| Abbreviation | Prefix | Base 10          |
| ------------ | ------ | ---------------- |
| T            | tera   | 10<sup>12</sup>  |
| G            | giga   | 10<sup>9</sup>   |
| M            | mega   | 10<sup>6</sup>   |
| k            | kilo   | 10<sup>3</sup>   |
| -            | -      | 10<sup>1</sup>   |
| c            | centi  | 10<sup>-2</sup>  |
| m            | milli  | 10<sup>-3</sup>  |
| μ            | micro  | 10<sup>-6</sup>  |
| n            | nano   | 10<sup>-9</sup>  |
| p            | pico   | 10<sup>-12</sup> |
| f            | femto  | 10<sup>-15</sup> |

## 1.2 Limitation of physical measurements

#### Random errors

- Fluctuations in a reading due to uncontrollable factors
  - readings will be spread about the true value
- To reduce random errors:
  - repeat and calculate mean

#### Systematic errors

- Incorrect readings due to faulty instruments or flaws in the method
  - readings will differ from the true value by a consistent amount each time
- To reduce systematic errors:
  - recalibrate instruments
  - use a different method

> Common systematic errors include:
> - not reading from the bottom of the meniscus
> - parallax error

#### Zero errors

- A reading is given when the true value is 0

> You should always ensure any stopwatches, counters or balances are zeroed

#### Precision

- Spread of data about the mean value

#### Repeatability

- The same result is obtained by the same person, using the same method

#### Reproducibility

- The same result is obtained by another person and/or a different method

#### Resolution

- The smallest unit of change that can be measured by an instrument

#### Accuracy

- Close to the true value

#### Uncertainties

- Measurements can be separated into two forms

  | Reading (one judgement) | Measurement (two judgements) |
  | ----------------------- | ---------------------------- |
  | thermometer             | ruler                        |
  | top pan balance         | vernier calliper             |
  | measuring cylinder      | micrometer                   |
  | digital voltmeter       | protractor                   |
  | Geiger counter          | stopwatch                    |
  | pressure gauge          | analogue meter               |

- ...for readings, the absolute uncertainty is ± 0.5 of the smallest scale
- ...for measurements, the absolute uncertainty is ± 1 of the smallest scale
- ...for repeated data, the absolute uncertainty is ± half of the range
- ...for gradients, the percentage uncertainty is:

```math
percentage\ uncertainty = \frac{best\ gradient - worst\ gradient}{best\ gradient} \times 100 \%
```

</br>

- To add/subtract data
  - add the absolute uncertainties
- To multiply/divide data
  - add the percentage uncertainties
- To exponentiate data
  - multiply the percentage uncertainty by the power

> To reduce percentage uncertainty, collect a larger range of values

## 1.3 Estimation of physical quantities

| Quantity               | Size               |
| ---------------------- | ------------------ |
| Diameter of an atom    | 10<sup>-10</sup> m |
| Wavelength of UV light | 10<sup>-7</sup> m  |

# 2 Particles and radiation

## 2.1 Particles

### 2.1.1 Constituents of the atom

- Atoms are made up of 3 types of particles: protons, neutrons and electrons
  | Particle | Charge | Mass | Relative Charge | Relative Mass |
  | --- | --- | --- | --- | --- |
  | Proton | +1.60 x 10<sup>-19</sup> C | 1.673 x 10<sup>-27</sup> kg | +1 | 1
  | Neutron | 0 C | 1.675 x 10<sup>-27</sup> kg | 0 | 1
  | Electron | -1.60 x 10<sup>-19</sup> C | 9.11 x 10<sup>-31</sup> kg | -1 | Negligible

#### Specific charge

- **Specific charge** is the ratio of the total charge of a particle to its mass
  - in an ion:

  ```math
  specific\ charge = \frac{number\ of\ electrons\ added}{mass}
  ```

  - in a nucleus:

  ```math
  specific\ charge = \frac{charge\ of\ protons}{mass}
  ```

> The specific charge of the electron and proton are given in the data and formula sheet

#### Nuclide notaton

```math
^{A}_{Z}\,X
```

  - where A is the nucleon number

    - also known as the mass number

  - and Z is the proton number
    - also known as the atomic number

#### Isotopes

- Elements are determined by the number of protons in their atoms
- **Isotopes** are atoms of an element with a different number of neutrons

</br>

- Isotopic data can be used in carbon dating
  - the ratio of a certain (stable) isotope of carbon to another (unstable) isotope of carbon can be used to determine the age of an atom

</br>

```math
Relative\ atomic\ mass\ A_r = \frac{\sum isotope\ abundance\times isotope\ mass}{\sum isotope\ abundance}
```

### 2.1.2 Stable and unstable nuclei

- In a nucleus,
  - electrostatic force repel due to the charge of protons
    - infinite range, but intensity is $\propto \frac{1}{x^2}$
  - gravitational force attract due to the mass of the nucleons
    - very weak
  - strong nuclear force acts between nucleons

#### Strong nuclear force

- The SNF acts between quarks

  > There are actually two "types" of the strong interaction
  > | interaction | range | particle | carrier | result
  > | --- | --- | --- | --- | --- |
  > | strong | < 0.8fm | quark | gluon | hadron
  > | residual strong | 1 - 3fm | hadron | meson (π) | nucleus

- ...and is stronger than the electrostatic force

  - ...so holds the nucleus together

- ...and consists of:
  - very-short range repulsion closer than approximately 0.5 fm (0.5 x 10<sup>-15</sup> m)
    - equilibrium with 0 resultant force occurs at approximately 0.5 fm
  - short-range attraction up to approximately 3 fm (3 x 10<sup>-15</sup> m)
    - the maximum attractive force occurs at approximately 1 fm
      - this is typical nuclear separation

> The strong interaction actually isn't replusive at all...</br>
> ...but for AQA it is! yaey!

#### Unstable nuclei

- Some nuclei are unstable because they have too many protons, neutrons or both
- ...and so they become more stable through radioactive decay

</br>

- Alpha decay
  - occurs in large nuclei with too many nucleons
  - emits an alpha particle and changes into a different element
  ```math
  ^{A}_{Z}X \to\  ^{A-4}_{Z-2}Y +\ ^{4}_{2}\alpha
  ```
- Beta minus decay

  - occurs in nuclei with too many neutrons
  - neutron becomes a proton, emitting a high energy electron and an anti-electron nutrino

  ```math
  ^{A}_{Z}X \to\  ^{A}_{Z+1}Y +\  ^{0}_{-1}\beta \ + \ ^{0}_{0}\bar{\nu}_e
  ```

- Beta plus decay
  - occurs in nuclei with too many protons
  - proton becomes a neutron, emitting a high energy positron and an electron nutrino
  ```math
  ^{A}_{Z}X \to\  ^{A}_{Z-1}Y +\  ^{0}_{+1}\beta \ + \ ^{0}_{0}\nu_e
  ```

#### Neutrinos

- **Neutrinos** are subatomic particles with
  - no charge
  - negligible mass

- They were hypothesised to account for conservation of energy in beta decay
  - alpha particles have discrete energy levels
  - but beta particles do not
    - ...because their energy in shared with neutrinos

### 2.1.3 Particles, antiparticles and photons

#### Antimatter

- For every type of matter, there is a corresponding antimatter
- Matter and antimatter have:
  - opposite charges
  - the same rest mass
  - the same rest energy

| Particle | Antiparticle |
| -------- | ------------ |
| proton   | antiproton   |
| neutron  | antineutron  |
| electron | positron     |
| neutrino | antineutrino |

#### Photons

- **Photons** are the fundamental particle making up electromagnetic radiation
  - transfers energy in discrete "quanta"

<br>

- Photon energy:

```math
E = hf = h\frac{c}{\lambda}
```

- The Planck constant $h$ is the ratio of the photon's frequency to energy

#### Annihilation

- **Annihilation** occurs when a particle-antiparticle pair collide and coverts its mass into energy
- The particle and antiparticle are destroyed
- ...and two gamma-ray photons are emitted
  - they travel in opposite directions
    - to conserve momentum
- Mass-energy is conserved - but "normal" mass is not
  - the minimum energy of one photon is equal to the rest energy of **one** particle

```math
E_{min} = h(f_{min}) = E
```

#### Pair production

- **Pair production** occurs when a high-energy photon converts its energy into mass
  - ...usually in the vicinity of a nucleus
- ...and creates a particle-antiparticle pair
  - they travel in opposite directions
    - to conserve momentum
- Mass-energy is conserved - but "normal" mass is not
  - the minimum energy of one photon is equal to the total rest energy of **both** particles

```math
E_{min} = h(f_{min}) = 2E
```

### 2.1.4 Particle interactions

- There are 4 fundamental interactions

| Interaction     | Range                    | Force     | Particles     | Exchange particle       |
| --------------- | ------------------------ | --------- | ------------- | ----------------------- |
| Strong          | up to 3 fm               | strongest | hadrons       | pion                    |
| Electromagnetic | infinite                 | ---       | all charged   | virtual photon          |
| Weak            | up to 10<sup>-18</sup> m | ---       | all particles | W/Z boson               |
| Gravity         | infinite                 | weakest   | all with mass | graviton (hypothetical) |

#### Exchange particles

- **Exchange particles** are "virtual" and only exist for a very short amount of time
- They carry the fundamental force between particles
  - there cannot be instantaneous action - the particle has to interact with "something"
- They have momentum
    > AQA analogy: the transfer of momentum by throwing a heavy ball between two people causes them to move away from each other

#### Electromagnetic force

- The **electromagnetic** force acts between charged particles
- Responsible for:
  - repulsion between two charged particles
  - attraction between electrons and nuclei
- The **virtual photon** is exchanged
  - which has:
    - no mass
    - no charge
    - itself as its antiparticle

> Electro**magnetic** force, not electro**static** force!

#### Weak interaction

- The **weak** interaction acts between all particles
- Responsible for
  - all changes of quark flavour
  - beta minus decay
    - exchange particle: $W^-$ boson
    ```math
    n \to p + e^- + \bar{\nu}_e
    ```
  - beta plus decay
    - exchange particle: $W^+$ boson
    ```math
    p \to n + e^+ + \nu_e
    ```
  - electron capture
    - exchange particle: $W^+$ boson
    ```math
    p + e^- \to n + \nu_e
    ```
  - electron proton collision
    - exchange particle: $W^-$ boson
      - but moving from right to left instead
      - ...because the electron collides into the proton
    ```math
    p + e^- \to n + \nu_e
    ```

> The $Z^0$ boson is used when there is no change of charge - only momentum is transferred

### 2.1.5 Classification of particles

#### Hadrons

- **Hadrons** are made from quarks
- ...and therefore are subject to the strong interaction and strong nuclear force
- Have two types:
  - baryons (3 quarks)
    - the baryon number is a quantum number (and so is conserved)
    - the proton is the only stable baryon
      - all other baryons eventually decay into protons
  - mesons (2 quarks)
    - the pion is the exchange particle of the strong nuclear force between nucleons (baryons)
      > the gluon is the exchange particle of the strong interaction between quarks
    - the kaon decays into a pion

#### Leptons

- **Leptons** are fundamental particles
- The lepton number is a quantum number (and so is conserved)
  > the different "flavours" of the lepton number are conserved seperately
- The muon decays into an electron

#### Strange particles

- Strange particles are produced through the strong interaction
- ...and decay through the weak interaction
- Are usually created in pairs
- ...so strangeness is a quantum number
  - however, strangeness can change by 0, +1 or -1 in weak interactions only
    > the weak interaction allows for quark flavour changes

### 2.1.6 Quarks and antiquarks

- There are 3 common flavours of quarks:

| Quark         | Charge | Baryon number | Strangeness |
| ------------- | ------ | ------------- | ----------- |
| up ($u$)      | + 2/3e | + 1/3         | 0           |
| down ($d$)    | - 1/3e | + 1/3         | 0           |
| strange ($s$) | - 1/3e | + 1/3         | -1          |

- ...and antiquarks have the opposite charge, baryon number and strangeness

</br>

- There are several common combinations of quarks for baryons and antibaryons

| Particle    | Quark combination       |
| ----------- | ----------------------- |
| proton      | $uud$                   |
| antiproton  | $\bar{u}\bar{u}\bar{d}$ |
| neutron     | $udd$                   |
| antineutron | $\bar{u}\bar{d}\bar{d}$ |

- ...and mesons

| Particle    | Quark combination        |
| ----------- | ------------------------ |
| $\pi^+$     | $u\bar{d}$               |
| $\pi^-$     | $d\bar{u}$               |
| $\pi^0$     | $u\bar{u}$ or $d\bar{d}$ |
| $K^+$       | $u\bar{s}$               |
| $K^-$       | $s\bar{u}$               |
| $K^0$       | $d\bar{s}$               |
| $\bar{K^0}$ | $s\bar{d}$               |

> Mesons are always formed of a quark-antiquark pair <br>
> ...so the baryon number is always 0 <br> <br>
> Also note that $K^0$ and $\bar{K^0}$ both have 0 charge, but $K^0$ has strangeness +1

#### Neutron decay

- All baryons decay into protons
- When a neutron decays into a proton
  - a down quark becomes an up quark

```math
d \to u + \beta^- + \bar{\nu}_e
```

### 2.1.7 Applications of conservation laws

- Conservation applies to:
  - Quantum numbers
    - Charge (Q)
    - Baryon number (B)
    - Lepton number (L)
    - Strangeness (S) (except in weak interactions)
  - Energy
  - Momentum

> If there is an unknown decay, as long as it fulfils the properties above, AQA will be ok with it?

## 2.2 Electromagnetic radiation and quantum phenomena

### 2.2.1 The photoelectric effect

- The **photoelectric effect** is where electrons (photoelectrons) are emitted from the **surface of a metal** after absorbing EM radiation
  - this provides evidence that light behaves as a particle
    - as light is carried in discrete packets/quantised
- The number of photoelectrons emitted per second depends on:
  - the intensity of the incident radiation = number of photons incident per second
  - and **not** the potential difference

#### Threshold frequency

- **Threshold frequency** is the minimum frequency of incident EM radiation requried to remove a photoelectron from the surface of a metal
  - therefore, the threshold wavelength is the longest wavelength

#### Work Function

- The **work function** $\Phi$ is the minimum energy required to release a photoelectron from the **surface** of a metal
- A single electron only absorbs one photon
  - so the absorbed photon must have energy equal to or high than $\Phi$
  - ...and photons with excess energy will have that energy transferred to the kinetic energy of the emitted photoelectron
- This is not affected by the intensity of the incident radiation
- The energy required to release a photoelectron varies because some electrons are not on the surface of the metal
  - work is done to reach the surface **before** overcoming the work function

> Photons without enough energy will just scatter

#### Stopping potential

- The **stopping potential** $V_s$ is potential difference required to stop photoelectron emission from occuring
- $E_{k_{max}}$ is the **maximum** kinetic energy of the photoelectrons, where
  ```math
  E_{k_{max}} = e(V_s)
  ```

> This can be determined using a set of collector and emitter plates connected to a circuit:
> - a flow of electrons across the gap between the plates results in a emf
> - electrons are released with a **range of** kinetic energy (by the photoelectric effect)
> - when the pd is in the opposite direction, electrons lose KE when crossing to the anode
>   - electrons are "attracted back" towards the emitter plate
> - as the magnitude of the pd increases, fewer photoelectrons have sufficient KE to reach the anode
> - the pd at which no electrons can cross the gap is known as the stopping potential
> - constant current is reached when all released photoelectrons reach the anode

> Stopping potential being related to the **maximum** KE is very important

#### The photoelectric equation

- The energy of a photon is
  ```math
  E = hf
  ```
- So, considering the work function, we have
  ```math
  hf = \phi + E_{k_{max}}
  ```

> $E_{k_{max}}$ depends only on the frequency of the incident radiation and the work function

### 2.2.2 Collisions of electrons with atoms

- Electrons in an atom occupy discrete energy levels
  - they will attempt to occupy the lowest possible energy level, as this is the most stable configuration
- Electrons absorbs energy from an interaction (collision) with a photon or another electron
  - for photons, an exact amount of energy is needed
    - all of the photon energy is absorbed
  - for electrons, only a minimum energy is needed
    - electron can transfer only part of its energy and continue moving at a lower speed

#### Ionisation

- An atom gains or loses an orbital electron and becomes charged
  - The electron can come from any energy level
- Ionisation energy is the minimum energy required to remove an electron from the ground state of an atom

#### Excitation

- An electron absorbs energy to move up to a higher energy level
  - by gaining energy from a collision
  - electron moves to a higher energy level
- An electron loses energy in dexctitaion by emitting a photon
  - electron moves to a lower energy level

#### In a fluorescent tube...

- There is a low-pressure mercury vapour with phosphor coating on tube
- A high potential difference is applied across the tube
  - this creates an electron flow from the cathode to the anode
- Electrons collide with the mercury atoms
- Ionisation occurs:
  - electrons are released from mercury ions
- Exctiation occus in mercury atoms:
  - free electrons collide with the mercury ions and are excited
  - these electrons are unstable and de-excite, emitting photons with UV wavelengths.
- Exctiation occurs:
  - UV photons are absorbed by atoms in coating
  - atoms are excited/gain energy and its electrons move to higher energy levels (than n = 2)
  - photons have sufficient energy to promote electrons to high enough levels
- De-excitation occurs:
  - photons are emitted by atoms in coating
  - atoms de-excite/lose energy and its electrons move to lower energy levels
  - electrons move to ground state via other energy levels (indirectly)
  - emitted radiation consists of (a range of) lower photon energies/frequencies or longer wavelength

#### The electronvolt

- When an electron travels through a potential difference, energy is transferred between two points
- from $E = QV$,
  ```math
  1 eV = 1.60 \times 10^{-19} J
  ```
  - the energy gained by an electron travelling through a potential difference of 1V

> This energy can be used to calculate the velocity of an electron, using $E_k = \frac{1}{2} mv^2$

### 2.2.3 Energy levels and photon emission

#### Line (atomic) spectra

- In a **line spectra**, atoms emit visible light corresponding to different colours
- This can be observed as a series of lines with spaces in between
  - procides evidence that electrons in atoms can only transition between discrete energy levels

#### Emission spectra

- An **emission spectra** has a dark background with coloured lines
  - formed by **exciting** atoms, e.g. by heating
- This is due to:
  - electrons can only exist in discrete energy levels
  - when an electron transitions from a higher energy level to a lower energy level, a single photon of EM radiation is emitted
    - the photon energy is equal to the difference in energy levels
  - each element has a specific set of energy level differences, so it corresponds to a different wavelength of light
  ```math
  E = h\frac{c}{\lambda}
  ```

#### Absorbtion spectra

- An **absorbtion spectra** has a continuous spectrum of colours with dark lines
  - lines correspond with the differences in energy levels/the coloured lines in an emission spectra
  - formed by passing white light through a cool gas under low pressure
- This is due to:
  - an electron can gain energy and transition into a higher energy level from **absorbing a single photon**
    - if the photon energy equals the difference in energy levels

>  - these excited electrons de-excite and emit a single photon
>  - the emitted photons go off in all directions, so some wavelengths appear to be missing

#### Discrete energy levels

- The difference between two discrete energy levels is equal to a specific photon energy emitted by a fluorescent tube/absorbed in a spectra
  ```math
  \Delta E = hf = E_1 − E_2
  ```

### 2.2.4 Wave-particle duality

#### Light can behave as a particle (i.e. have the properties of a particle)

- Photoelectric effect
  - EM radiation carry energy in discrete packets (photons)

#### Light can also behave as a wave

- Diffraction and intereference in Young's double-slit experiment

> Wave theory suggests
>
> - any frequency of light will have photoelectric emission - but a threshold frequency exists
> - the energy absorbed will gradually increase with each wave - but energy is absorbed instantaneously
> - the kinetic energy of the emited electron will increase with intensity - but energy remains constant

#### Electrons can behave as a particle

- Fluorescent screens (see above)
  - electrons must provide enough kinetic energy **instantly** to cause the excitation of orbital electrons
    - this energy transfer is a 1-to-1 interaction in discrete amounts

#### Electrons can also behave as a wave

- Electron diffraction
  - diffraction pattern is produced when an electron beam is directed at a thin graphite film
  - the material used to diffract electrons must have gaps similar in size to their de Broglie wavelength
    - so usually atomic lattices are used, e.g. graphite, which has a crystalline structure
  - diffraction pattern is a series of concentric rings
    - if electrons had particle behaviour, they would be distributed uniformly across the screen

#### de Broglie wavelength

- Increasing pd increases the speed of an electron
  - ...which increases the momentum of an electron
  - ...which decreases its angle of diffraction
  - ...so the diameter of each ring decreases

<br>

- Therefore, the smaller the momentum of an electron, the greater the de Broglie wavelength
  ```math
  \lambda = \frac{h}{p}= \frac{h}{mv}
  ```
> This concurs with wave properties, angle of diffraction increases as wavelength increases

#### Developing theories

- Knowledge and understanding of the nature of matter changes over time
- This need to be evaluated through peer review and validated by the scientific community

# 3 Waves

## 3.1 Progressive and stationary waves

### 3.1.1 Progressive waves

#### Definitions
- Amplitude
  - the maximum displacement of a particle in the wave from its equilibrium position
- Frequency
  - the number of waves passing a point each second
- Wavelength
  - the distance between points on successive oscillations of the wave that are in phase
- Speed
  - the distance travelled by the wave per unit time
- Phase
  - the position of a point on a wave
  - may be measured as angles (radians and degrees) or as fractions of a cycle
- Phase Difference
  - the "distance" a wave is behind another
  - may be measured as angles (radians and degrees) or as fractions of a cycle
- Period
  - the time taken for one full oscillation

</br>

- Two waves are **in phase** if they are both at the same point in the cycle; i.e. their phase difference is $2 \pi$ rad
- Two waves are **out of phase** if their phase difference is not $2 \pi$ rad
  - Two waves are **in antiphase** if their phase difference is $\pi$ rad

</br>

- **Progressive waves** are waves which transfer energy from one point to another 
  - without transferring material (i.e. causing permanent displacement of the medium)
  - all points have the same amplitude in each period

> Always refer to:
>
> - (both) waves interfere
> - path difference varies (how? where?)
> - phase difference varies (how? where?)
> - produces maxima and minima (how? where?)
> - recieved signal goes through series of maxima and minima
>
> When asked to compare:
>
> - refer to phase
> - refer to frequency
> - refer to speed

- All EM waves travel at the same speed in a vacuum - $3.0 \times 10^{-8} ms^{-1} $

### 3.1.2 Longitudinal and transverse waves

#### Transverse waves

- **Travsverse waves** have oscillations **perpendicular** to direction of **energy transfer**
  - examples:
    - EM waves
    - vibrations on a string
    - S-waves
- They:
  - can be polarised
  - have crests and troughs
  - can be demonstrated with a vertical slinky

#### Longitudinal waves

- **Longitudinal waves** have oscillations **parallel** to direction of energy transfer
  - examples:
    - sound waves
    - P-waves
- They:
  - cannot be polarised
  - have areas of compression and rarefaction
  - can be demonstrated with a horizontal slinky

#### Polarisation

- **Polarised waves** have oscillations which occur in only one plane perpendicular to the direction of propagation
  - this plane is known as the plane of polarisation
- This can only occur in **transverse** waves
  - because transverse waves oscillate planes perpendicular to the direction of propagation
- ...and can be used in:
  - polaroid sunglasses
    - light reflecting from reflective surfaces (e.g. puddles) undergo partial plane polarisation
    - polaroid sunglasses polarise the light so reduces glare
  - radio/microwave signals
    - radio and television signals are usually vertically polarised or horizontally polarised
    - therefore aerials need to be mounted flat (horizontal) or on its side (vertical)

> When answering scenairos related to polarisation, make use of "maximum" and "minimum"
> Always link back - "max occurs when aerial is aligned with plane of polarisation of the wave"

### 3.1.3 Principle of superposition of waves and formation of stationary waves

#### Superposition

- **Superposition** occurs when two or more waves with the same frequency arrive at a point
- The resultant displacement is the sum of the displacements of each wave
- If both waves have the same amplitude, they will meet:
  - in phase
    - which leads to constructive interference
  - in anti-phase
    - which leads to destructive interference

#### Stationary waves

- **Stationary waves** are produced when two waves travelling in **opposite direction** **superpose and interfere**, given that they
  - have the same frequency and similar amplitude 
- Can be created with a progressive wave and its **reflection**
- Has nodes and antinodes
  - nodes are regions with no oscillation
    - ...due to destructive interference
  - antinodes are regions with maximum displacement
    - ...due to  constructive interference

> All of the points above are expected by the MS

<br>

- Wave pattern does not move along the direction of propagation
  - ...so stores energy
- Points on a stationary wave are **in phase** if:
  - they are between nodes
  - they have an even number of nodes in between
- ...or out of phase if
  - they have an odd number of nodes in between (antiphase)
- All points have different amplitudes

<br>

- The lowest frequency for formation is the first harmonic
- Examples:
  - strings
    - vibrations from stationary waves on stretched strings produce sound waves
    - at resonant frequencies, a whole number of half wavelengths will fit on the length of the string
  - microwaves
    - a microwave source can be placed in line with a reflector
    - a detector can be moved around to detect nodes and antinodes
  - sound
    - can be produced as a result of the formation of stationary waves inside a closed air column
    - there must be a node at one end and an antinode at the speaker end

> On an instrument, the strings have fixed boundaries $\implies$ cannot move $\implies$ are nodes

#### Harmonics

- **Harmonics** are the wave patterns of stationary waves
- ...and can be observed on a string with two **fixed** ends
  - first harmonic
    - 2 nodes, 1 antinode
    ```math
    f = \frac{v}{2L}
    ```
  - second harmonic
    - 3 nodes, 2 antinodes
    ```math
    f = \frac{v}{L}
    ```
  - third harmonic
    - 4 nodes, 3 antinodes
    ```math
    f = \frac{3v}{2L}
    ```
- NB: the 1st harmonic spans half the wavelength, and so on

</br>

- Wave speed on a string is given by
  ```math
  v = \sqrt{\frac{T}{\mu}}
  ```
- $\therefore$ the frequency of the first harmonic is
  ```math
  f = \frac{1}{2L}\sqrt{\frac{T}{\mu}}
  ```

### Practical 1 - Stationary waves on a string

#### Method

- Record the mass per unit length of the wire
- Set up the signal generator/magnet
- Make sure the wire is taut between the two bridges, using masses
- Adjust the distance between the two bridges on the wire until a 1st order stationary wave is formed
- Record the distance between the two bridges
- Vary the mass on the end of the wire and redord the distance needed to create a 1st order stationary wave

#### Results

- Rearranging
  ```math
  f = \frac{1}{2L}\sqrt{\frac{T}{\mu}}
  ```
  gives
  ```math
  \frac{1}{2L} = f\sqrt{\frac{\mu}{T}}
  ```
- Plotting $\frac{1}{2L}$/m<sup>-1</sup> against $\sqrt{\frac{\mu}{T}}$
- ...so the gradient is $f$

## 3.2 Refraction, diffraction and interference

### 3.2.1 Interference

- **Interference** occurs when waves overlap
  - the resultant displacement is the sum of the displacement of each wave

#### Coherence

- Waves are coherent if they have the same **frequency** and a **constant phase difference**
- Waves undergoing constructive or destructive interference must be coherent

#### Path difference

- **Path difference** is the difference in the distance travelled by two waves from their sources to the point where they meet
- ...and determines the type of interference:
  - constructive : $n\lambda$
  - destructive : $(n + \frac{1}{2})\lambda$
- ...and is expressed in multiples of wavelength

</br>

- Intensity of a wave $\propto$ amplitude ^ 2
  - intensity of a wave (power per unit area) $\propto$ energy transferred by the wave
  - energy transferred by a wave $\propto$ amplitude ^ 2

</br>

- Interference can be demonstarted with
  - a laser
    - lasers are coherent and monochromatic (same wavelength)
    - constructive interference is shown with maxima (light fringes)
    - destructive interference is shown with minima (dark fringes)
    - but lasers have safety issues
      - high energy light beam may cause permanent eye damage
  - sound waves
    - sound waves are longitudinal
    - constructive interference is heard with a louder sound
    - destructive interference is heard with no sound
  - microwaves
    - constructive interference is shown with higher amplitude on detector
    - destructive interference is shown with lower amplitude on detector

#### Double slit interference

- In double slit intereference:
  - there is superposition of waves from both slits
  - diffraction patterns overlap and interfere constructively
  - this produces a interference pattern using two coherent sources
  - to calculate fringe spacing:
    ```math
    w = \frac{\lambda D}{s}
    ```
    ```math
    fringe\ spacing =  \frac{wavelength \times\ distance\ from\ slit\ to\ screen}{slit\ spacing}
    ```
    - $D$ has to be much larger than $w$ and $s$
  - each bright fringe has the same width
  - waves further away from the central maxima will have lower intensity as their waves have to travel further (reduced coherence)

> The slits can be a single source passing through a double slit <br>
> - light diffracts to both slits, and has a fixed path difference

#### History

- Isaac Newton (1670s)
  - light is a stream of particles known as corpuscles
    - could not explain interference or diffraction
- Christaan Huygens (1670s)
  - wave theory of light
    - series of wavefronts where every point is a source of wave
- Thomas Young (1800s)
  - double slit experiment
    - shows light as a wave
- James Maxwell (1860s)
  - electric and magnetic fields obeyed wave equation
- Albert Einstein (1900s)
  - light as a particle - photoelectric effect
  - photons - wave-particle duality

### 3.2.2 Diffraction

- **Diffraction** is the spreading out of waves when they pass through a gap/around an obstacle
  - e.g.:
    - water waves through gaps in harbours
    - radio waves around buildings

#### Monochromatic diffraction

- In monochromatic diffraction:
  - the central maximum is:
    - **double** the width of the other fringes
    - much brighter
  - as order increases, the fringes have less intensity

#### White light diffraction

- In white light diffraction:
  - the central maximum is:
    - white
    - equal intensity to monochromatic light
    - **double** the width of the other fringes
  - all other maxima are spectra
    - broader than monochromatic light
    - less intense than monochromatic light
    - shortest wavelength (violet) is closest to central maxima
    - longest wavelength (red) is furthest from central maxima
    - gradually gets more broader until it eventually merges
      - fringe spacing decreases
      - red wavelengths increase, blue wavelengths decrease
      - parts of higher order maxima may be supressed

> These properties also apply for any other multi-wavelength waves, not just white light

#### Factors affecting single slit diffraction

- Slit width
  - decrease $\implies$ greater angle of diffraction $\implies$ greater width of maxima, but lower intensity
- Wavelength
  - increase $\implies$ greater angle of diffraction $\implies$ greater width of maxima
    - red light has wider maxima and wider fringe spacing than blue light

#### Diffraction grating

- A **diffraction grating** has a large number of thin, equally spaced slits on a glass plate
- it creates a diffraction pattern:
  - monochromatic light $\implies$ fringes
  - white light$ \implies$ different components
- ...which has sharper maxima than a double/single slit
  - ...so is more useful when measuring wavelength
- The maximum angle of diffraction is when the beam is at right angles to the grating $\Rightarrow\ sin \theta = 1$
  - so the highest order visible is given by
  ```math
  n = \frac{d}{\lambda}, n \in \mathbb{N}
  ``` 

</br>

- Diffraction grating equation
  - consider the first order maximum
    - path difference = λ
    - form a right angles triangle with hypotenuse (slit separation) and opposite λ such that
    ```math
    sin\theta = \frac{\lambda}{d}
    ```
    - all maxima occur when the path difference is $n\lambda, n \in \mathbb{N}$, so
    ```math
    dsin\theta = n \lambda
    ```

</br>

- Diffraction gratings are used in
  - spectrometers
    - analyse light from stars to investigate their composition
    - measure red/blue shift
  - x-ray crystallography
    - x-rays are directed at a thin crystal sheet acting as a diffraction grating to form a diffraction pattern
    - wavelength of x-rays are similar in size to the gaps between atoms
    - can be used to measure atomic spacing in materials
  - monochromators
    - to analyse a wavelength emitted by molecules in diseased cells

### Practical 2 - Young’s slits and diffraction grating

#### Method

- Young's slits
  - Use a coherent light source (laser)
  - Adjust the position of the laser so the light is evenly spread across the two slits
  - Use a pencil to mark the position of the fringes
  - Measure the distance between the slits and the paper
- Diffraction grating
  - Use a coherent light source (laser)
  - Adjust the position of the laser so the light is evenly spread across the grating
  - Use a pencil to mark the position of the fringes
  - Measure the distance between the grating and the paper

#### Results

- Rearranging
  ```math
  w = \frac{\lambda D}{s}
  ```
  gives
  ```math
  \lambda = \frac{ws}{D}
  ```

### 3.2.3 Refraction at a plane surface

#### Refractive index

- The **refractive index** is how much a material slows down light passing through it 
  - i.e. the ratio of how fast light travels compared to in vacuum
  > for exam purposes, in air, n = 1
  - given by
    ```math
    n = \frac{c}{c_s}
    ```
    - where $c_s$ is the speed of light in the substance
- A high refractive index (n > 1) $\implies$ optically dense

#### Refraction

- Wave speed is slower in the more optically dense material
  - ...the edge of a wavefront slows down or speed up when entering that material
  - ...but the part of the wave not in the material continues at a different speed

</br>

- Denser medium $\implies$ slower wave speed (shorter **wavelength**)
  - therefore light bends towards the normal
- Less dense medium $\implies$ faster wave speed (longer **wavelength**)
  - therefore light bends away from the normal

#### Snell’s law

```math
n_1 sin \theta_1 = n_2 sin \theta_2
```

#### Total internal reflection

- When the angle of refraction is 90° such that $sin \theta_2 = 1$
  - light is refracted along the boundary
  - angle of incidence is known as the critical angle $\theta_c$
- We can therefore derive that
  ```math
  sin \theta_c = \frac{n_2}{n_1} = \frac{sin \theta_1}{sin \theta_2}
  ```
  > which is only valid for $n_1 > n_2$ (i.e. going from higher to lower), as otherwise $sin \theta_c$ is not defined

<br>

- When the angle of incidence > $\theta_c$, and $n_1 > n_2$
  - total internal reflection occurs
- When the angle of incidence < $\theta_c$
  - refraction occurs
- When the angle of incidence = $\theta_c$
  - light is refracted along the boundary

> Materials with a higher refractive index are more likely to have total internal reflection

#### Fibre optics

- Optical fibres transfer information
- Total internal reflection occurs inside optical fibres
  - light refracts upon entering fibres
  - ...and refracts out of fibres

</br>

- A **step-index fibre** consists of
  - optically dense core tube (glass)
    - which propagates the wave using TIR
  - lower density cladding
    - protects thin core from damage
    - prevents signal degradation from light escaping
    - keeps core separate to prevent crosstalk
  - outer sheath

</br>

- However, fibre optics face issues:
  - absorption
    - fibre absorbs part of the signal's energy
      - reduces the amplitude of the signal
      - loss of information
    - to reduce absorption:
      - use an extremely transparent core
      - use repeaters to regenerate pulse
  - pulse broadening
    - caused by modal and material dispersion
      - leads to pulses merging
      - loss of information
    - to reduce pulse broadening:
      - use narrow core
      - use a monochromatic source
      - use repeaters to regenerate pulse
      - use a single-mode fibre (only a single wavelength of light)
- ...which are caused by
  - material dispersion
    - leads to pulse broadening
    - white light is separated into different wavelengths of the spectrum
    - light is dispersed as different wavelengths have different speeds in a medium
      - shorter wavelength $\Rightarrow$ slower wave speed
      - smaller angle of incidence $\Rightarrow$ smaller angle of reflection
      - undergoes total internal reflection more times
  - modal dispersion
    - leads to pulse broadening
    - monochromatic light is dispersed
      - each part of the wavefront has a different angle of incidence
      - some waves undergo total internal reflection more times
    - the core is very narrow (single-mode) to prevent this

# 4 Mechanics and materials

## 4.1 Force, energy and momentum

### 4.1.1 Scalars and vectors

- A **vector** is a quantity that has both magnitude and direction
- A **scalar** is a quantity that only has magnitude

### 4.1.2 Moments

- A **moment** is the turning effect of a force
- ...given by
  ```math
  force \times perpendicular\ distance\ from\ the\ point\ to\ the\ line\ of\ action\ of\ the\ force
  ```

#### Principle of moments

- For a system to be in equilibrium, the sum of clockwise moments about a point must be equal to the sum of the anticlockwise moments about the same point

#### Couples

- A **couple** is a pair of equal and opposite coplanar forces
  ```math
  F = force \times perpendicular\ distance\ between\ the\ lines\ of\ action\ of\ the\ forces
  ```

#### Centre of mass

- The **centre of mass** is:
  - the point at which the weight of the object is considered to act
  - the position of the centre of mass of a uniform regular solid is at its centre
- For symmetrical objetcs with uniform density, the centre of mass is at the point of symmetry
- An object is stable when its centre of mass lies above its base

### 4.1.3 Motion along a straight line

- Displacement
  - distance from a fixed point
- Speed
  - total distance travelled per unit time (rate of change of distance)
- Velocity
  - rate of change of displacement
- Acceleration
  - rate of change of velocity

#### Graphs

- Velocity–time
  - gradient: acceleration
  - area: total displacement
- Acceleration–time
  - area: change in velocity
- Displacement–time
  - gradient: velocity

### 4.1.4 Projectile motion

#### Friction

- A **frictional force** is a force which opposes the motion of an object

#### Lift forces

- A **lift force** is an upwards force on an object moving through a fluid
- It is:
  - perpendicular to fluid flow
  - caused by a change in direction of fluid flow

#### Drag forces

- A **drag force** is a force in the opposite direction to motion
- It:
  - does not speed up an object
  - converts kinetic energy into other forms

#### Terminal speed

- As an object falls through a fluid, the gravitational force is greater than the frictional force
- ...so the object accelerates
  - as speed increases, the frictional force increases
- Due to Newton’s Second Law, the resultant force and therefore acceleration decreases
- Eventually, the frictional force is equal to the gravitational force, and the resultant force is zero
  - the object will move at its terminal velocity

#### Air resistance

- Air resistance increases with speed
- ...and is affected by:
  - cross-sectional area
  - shape
  - altitude
  - temperature
  - humidity
- It ecreases the horizontal component of velocity in a projectile

### Practical 3 - Determination of g

#### Method

- Drop a card with weight through two light gates/a light gate measuring speed on a clamp
- Vary the drop height

#### Results

- Rearranging
  ```math
  v^2 = u^2 + 2as
  ```
  gives
  ```math
  v^2 = 2gs
  ```
- Plotting $v^2$ against $2 \times s$
- ...g is the gradient

### 4.1.5 Newton’s laws of motion

#### First law

- An object will remain at rest or move with constant velocity unless acted on by a resultant force
  - Inertia

#### Second law

- The resultant force acting on an object with a constant mass is directly proportional to its acceleration (and change in momentum)
  ```math
  F = \frac{\Delta mv}{\Delta t} \\
  \implies F = ma
  ```

#### Third law

- For each force experienced by an object, the object exerts an equal and opposite force
  - The force pair has:
    - **same type** of force
    - same magnitude
    - opposite direction
    - **different objects**

> The third law pair for weight would be the planet

> When describing using Newton's laws of motion:
>
> - refer to laws explicitly
> - refer to the forces explicitly (by name, e.g. weight)
> - state the directions of all forces
> - to displace (i.e. accelerate) a fluid, force must be exerted (2nd law)
> - and so there will be a equal and opposite force from the fluid (3rd law)
> - this force is equal to the drag force, so there is no resultant force, and momentum is constant (1st law)

### 4.1.6 Momentum

#### Linear momentum

- **Linear momentum** is defined as
  ```math
  p = mv
  ```
  - this is momentum in one direction
- Momentum remains constant unless the system is acted upon by an external resultant force

<br>

- Conservation of linear momentum:
  - The total momentum before a collision is equal to the total momentum after a collision, provided no external force acts

> Recall that momentum is a vector and signs matter!

#### External and internal forces
- **External** forces act on a system from outside
  - e.g. friction
- **Internal** forces are exchanged by particles within the system
  - e.g. tension in a string

#### Force

- **Force** is the rate of change of momentum
  ```math
  F = \frac{\Delta mv}{\Delta t}
  ```

<br>

- Impact forces are reduced by increasing contact time
  - lowers risk of injury

#### Impulse

- **Impulse** is the change in momentum
- ...or the product of the force applied and time
  ```math
  \Delta p = F \Delta t = mv - mu
  ```
  - (where the force is constant)
- $\therefore$ a small force acting over a long time has the same effect as a large force acting over a short time

#### Elastic and inelastic collisions

- Momentum is always conserved in collisions and explosions

<br>

- **Elastic** collisions are where
  - kinetic energy is conserved
  - colliding objects (usually) move in opposite directions/rebound
- **Inelastic** collisions are where
  - kinetic energy is not conserved
    - because some energy is lost to (internal) friction or other stores
  - colliding objects (usually) stick together

#### Momentum conservation issues

- The force of impact in a (vehicle) collision can be decreased by increasing the **contact time**
- ...and this is achieved through safety features, such as:
  - crumple zones
    - designed to crush/crumple
    - increases the time it takes for the momentum to decrease
  - seat belts
    - stops occupants colliding with the interior
    - stretches slightly to increase the time it takes for the momentum to decrease
  - airbags
    - soft cushion to prevent injury
    - increases the time it takes for the momentum to decrease
- ...which "absorbs" energy from an impact

> Note that impluse is constant; only the time changes

### 4.1.7 Work, energy and power

#### Work done

- **Work done** is the amount of energy transferred when an external force causes an object to move over a certain distance<br>W = Fs cosθ
- work can be done "against" a force, e.g. friction
  - some energy is dissipated to to the surroundings

#### Power

- **Power** is the rate of doing work = rate of energy transfer
  ```math
  P = \frac{\Delta W}{\Delta t} = Fv
  ```

> When answering longer questions, remember to decide which one of work done or power the question is looking for

#### Force–displacement graph

- Area: work done
- useful for variable forces

#### Efficiency

- efficiency = useful output power/input power

### 4.1.8 Conservation of energy

#### Conservation of energy

- Energy cannot be created or destroyed
- ...it can only be transferred from one form to another

#### Dissipation of energy

- No energy transfer is 100% efficient
  - some energy is dissipated to the surroundings
  - this is usually wasted as it can not be used

#### Gravitational potential energy

- **Gravitational potential energy** is given by

  ```math
  \Delta E_p = mg \Delta h
  ```

- This is the energy stored in mass due to its position in a gravitational field

#### Kinetic energy

- **Kinetic energy** is given by
  ```math
  E_k = \frac{1}{2}mv^2
  ```
- This is the energy an object has due to its motion

## 4.2 Materials

### 4.2.1 Bulk properties of solids

#### Density

- **Density** is mass per unit volume
  ```math
  ρ = \frac{m}{v}
  ```

#### Hooke's kaw

- A material that obeys hooke's law has extension that is directly proportional to the force applied up to the limit of proportionality
  ```math
  F = k \Delta L
  ```
- The stiffer the material, the higher the spring constant $k$

</br>

- Limit of proportionality
  - point beyond which Hooke's law no longer holds
- Elastic limit
  - point beyond which the material will no longer return to its original shape (length)

#### Tensile forces

- **Tensile forces** are **stretching** forces which act on a material
- Tensile stress
  - force exerted per unit area (Pa)
    ```math
    \sigma = \frac{F}{A}
    ```
  - a material is able to support up to its ultimate tensile stress, at which point it breaks
- Tensile strain
  - extention per unit length
    ```math
    \varepsilon = \frac{\Delta L}{L}
    ```

</br>

- Stress-strain graphs
  - describes the properties of materials
  - yield stress
    - material extends plastically for a small increase in stress
  - breaking point
    - breaking stress - the maximum stress a material can stand before it fractures
  - elastic region
    - before elastic limit
  - plastic region
    - after elastic limit
  - elastic strain energy per unit volume
    - area under elastic portion

#### Elastic strain energy

- Work is done to stretch a material
- For a material obeying Hooke's law, work done is stored as elastic strain energy
  ```math
  E = \frac{1}{2} F \Delta L
  ```
  - which is also the area under a force-extention graph

#### Spring energy

- When a (vertical) spring is extended and contracted, energy is transferred between different stores
- As the spring is stretched, elastic potential energy increases
- As the stretching force is removed, kinetic energy increases
- Kinetic energy is transferred to gravitational potential energy and vice versa

#### Plastic behaviour

- There are 2 types of deformation:
  - **elastic deformation**
    - objects return to their original shape when the stretching force is removed
  - **plastic deformation**
    - objects remain stretched and do not return to their original shape when the stretching force is removed

</br>

- **Brittle** materials have
  - small increase in strain beyond the linear section before fracture
  - small plastic region
  - low breaking stress
- **Ductile** materials have
  - large plastic region
  - high breaking stress

#### Energy conservation issues

- When a stretching force is removed, the material is unloaded
- After an object undergoes plastic deformation, the unloading curve on a force-extention graph will not pass through the origin
  - the object is permanently extended
  - the area between the loading and unloading curves is the work done to deform the wire
  - the unloading curve is always below the loading curve
    - ...as some energy may be transferred into other energy stores, e.g. thermal for rubber bands

> gradient is the same because after extension identical forces between bonds

</br>

- In a vehicle, a suspension system is used to provide comfortable handling of a vehicle
  - elastic shock absorbers dampen movements of the springs
    - kinetic energy from the car is converted into thermal energy
  - seatbelts are made of elastic materials to convert kinetic energy into elastic strain energy

### 4.2.2 The Young modulus

- The **Young modulu**s is  ability of a material to withstand changes in length with an added load
  - i.e. the stiffness of a material
- For a material which obey's Hooke's law, stress is proportional to strain
  - ...so the ratio of tensile stress and tensile strain is constant
    ```math
    E = \frac{Tensile\ stress}{Tensile\ strain} = \frac{FL}{A \Delta L}
    ```

> When considering springs/materials with the same Young modulus but different diameter/length, this rearrangement may be useful
>
> ```math
> k = E \frac{A}{L}
> ```

### Practical 4 - Determination of the Young Modulus

#### Method

- Measure the diameter of the wire with a micrometer
- Measure the original length of the wire and mark the point with tape, as close as possible to the end
- Record the initial reading of the marking
- Add masses to the hanger
- Record the new reading of the marking
- Repeat

#### Results

- Rearranging
  ```math
  E = \frac{FL}{A \Delta L}
  ```
  gives
  ```math
  E = \frac{mg}{\Delta L}\left(\frac{L}{A}\right)
  ```
- Plotting $\Delta L$/m against $mg$/N
- ...so
  ```math
  E = \frac{L}{A \times gradient}
  ```

# 5 Electricity

## 5.1 Current electricity

### 5.1.1 Basics of electricity

- **Current** is the rate of flow of charge
  ```math
  I = \frac{\Delta Q}{\Delta t}
  ```
- **Potential difference** is the work done per unit charge
  ```math
  V = \frac{W}{Q}
  ```
- **Resistance** is how difficult it is for charge carriers to get past a component
  ```math
  R = \frac{V}{I}
  ```

### 5.1.2 Current–voltage characteristics

- Ohm's law states that I ∝ V under constant physical conditions.
- We need to consider 3 types of components:
  - Ohmic conductor
    - follows Ohm's law $V = IR$
      - graph is directly proportional
  - Semiconductor diode
    - forward bias
      - near 0 until threshold voltage, then increases dramatically
    - reverse bias
      - slightly below 0 until reverse breakdown voltage, then decreases dramatically
      - because resistance is very high during reverse bias
  - Filament lamp
    - the wire in the lamp heats up as current increases, therefore its resistance increases
    - at low currents, Ohm's law is obeyed as the component does not heat up much

> Remember the order of the axes! Normally, it will be I (vertical) and V (horizontal)

</br>

- Ammeters have 0 resistance to not affect the reading of current
- Voltmeters have infinite resistance so no current can flow through them
  - it takes all the pd if it is the only path

### 5.1.3 Resistivity

- **Resistivity** is the extent to which a material opposes the flow of electric current through it
  ```math
  \rho = \frac{RA}{L}
  ```
- It is dependent on environmental factors, e.g. temperature

#### Metal conductors
- Temperature increase $\implies$ resistance increase
- Metal ions gain more kinetic energy and vibrate more
- ...so charge carriers (i.e. electrons) collide with the ions more frequently
- ...so charge carriers slow down
- ...so current decreases

#### Negative temperature coefficient (NTC) thermistors
- Temperature increase $\implies$ resistance decrease
- Electrons are bumped up from the valence band to the conduction band
- ...so the number of charge carriers increases
- ...so current increases

> The resistance/temperature graph is non-linear - the downwards gradient is steeper at the start

#### Superconductors 
- **Superconductors** are materials which have **zero** resistivity at/below a **critical temperature**
  - the critical temperature varies for different materials, but is usually close to 0K
- They can be used in:
  - power cables, to reduce energy loss through heating
  - strong magnetic fields, which are used for maglev trains or medical equipment
- The resistance/temperature graph is non-linear and drops dramatically to 0 at the critical temperature
- A current in a superconductor causes **no** heating effect

### Practical 5 - Determination of the resistivity of a wire

#### Method

- Connect a power supply in series with an ammeter and two crocodile clips
- Connect the crocodile clips across the wire and connect a voltmeter across the wire
- Record the current from the ammeter
- Check the pd from the voltmeter
- Vary the distance of the wire between the crocodile clips

#### Results

- Rearranging
  ```math
  \rho = \frac{RA}{L}
  ```
  gives
  ```math
  R = \frac{\rho L}{A}
  ```
- Plotting mean $R$ against $L$
- ...so gradient is $\frac{\rho}{A}$

### 5.1.4 Circuits

#### Series circuits

- Potential difference is shared in proportion to resistance
  ```math
  V_{total} = V_1 + V_2 + V_3 + ...
  ```
- a "potential drop" occurs across each component
  - the amount of drop is calculated with Ohm's law $V = IR$
- Current is constant
  ```math
  I_{total} = I_1 = I_2 = I_3 = ...
  ```
- Resistance adds up
  ```math
  R_{total} = R_1 + R_2 + R_3 + ...
  ```

#### Parallel circuits

- Potential difference is constant across all branches
  ```math
  V_{total} = V_1 = V_2 = V_3 = ...
  ```
- Current is shared between branches
  ```math
  I_{total} = I_1 + I_2 + I_3 + ...
  ```
- Resistors in parallel reduces total resistance
  ```math
  \frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...
  ```

> To calculate the current in each branch, use the pd and the resistance across each branch
> ```math
> I_{branch} = \frac{V}{R_{branch}}
> ```

#### Battery cells

- Series:
  ```math
  V_{total} = V_1 + V_2 + V_3 + ...
  ```
  ```math
  I_{total} = I_1 = I_2 = I_3 = ...
  ```
  - Cancels out in opposite directions
- Parallel:
  ```math
  V_{total} = V_1 = V_2 = V_3 = ...
  ```
  ```math
  I_{total} = I_1 + I_2 + I_3 + ...
  ```
  - Each cell provides less power/energy, so
    - they last longer
    - reduces internal resistance

#### Power and energy

- Power is rate of transfer of energy:
  ```math
  P = I V = I^2 R = \frac{V^2}{R}
  ```
- Energy:

  ```math
  E = P t = I V t
  ```

</br>

- In DC circuits, charge and energy are conserved:
- Kirchoff's first law: the current flowing into a node/junction must be equal to the current flowing out of it
  - $Q = I t$, so this proofs conservation of charge
- Kirchoff's second law: the sum of all voltages across components which supply electrical energy must equal the sum of all voltages across the other components in the same loop
  - $E = I V t$, so this proofs conservation of energy.

### 5.1.5 Potential divider

- A **potential divider** is used to supply constant or variable potential difference from a power supply with constant pd
  - This is achieved with several resistors in series across a source of pd
  - this includes variable resistors, or semiconductor components, e.g. LDRs.
- Potential dividers can used as control circuts to trigger events.
  - e.g. when light intensity falls, resistance across the LDR will increase, so the current decreases (as $I = \frac{V}{R}$), so there is less shared of pd across the fixed resistor.

```math
V = \frac{R_1}{R_1 + R_2} V_{in}
```

> Always refer to the proportion of resistance of a particular resistor when describing a potenrial divider

### 5.1.6 Electromotive force and internal resistance
- All cells have an **internal resistance**
  - which is caused by charge carriers (electrons) colliding with atoms/ions inside the cell
    - ...and leads to energy loss
  - represented as a resistor inside the battery in a circuit diagram
- **Electromotive force** (emf) is the amount of energy provided by the battery (i.e. transferred from chemical energy to electrical energy) for every coulomb of charge
```math
\varepsilon = \frac{E}{Q} = I (R + r)
```
```math
Total\ resistance = internal\ resistance + load\ resistance
```
- The pd across the load resistor is known as the **terminal pd** $V$
- ...therefore,
  ```math
  \varepsilon = V + Ir \\
  emf = terminal\ pd + lost\ volts
  ```
- The emf can be measured using a voltmeter across a cell when no current is running through it
  - because the voltmeter has infinite resistance
- "lost volts" is the energy wasted by the cell (dropped by the internal resistance) per coulomb of charge

> When the current in a circuit **decreases** (e.g. due to high resistance), the **lost volts decreases** <br>
> But for a load resistor connected in parallel, the current will **increase**, because <br>
> ```math
> I = \frac{V_{terminal}}{R}
> ```
> but $R$ is constant, and $V_{terminal}$ has increased <br>
> NB if the thing adjusting the resistance is connected in series with the load, the behaviour will change
> - the resistance decreasing will lead to greater pd across the load (think potential divider), but the terminal pd will still decrease due to greater lost volts

### Practical 6 - Investigation of emf and internal resistance

#### Method

- Connect a voltmeter across a cell
- Connect a switch, ammeter and a variable resistor in series
- Record the pd and current
- Adjust the variable resistor to obtain pairs of $V$ and $I$

#### Results

- Rearranging
  ```math
  \varepsilon = I(R + r)
  ```
  gives
  ```math
  V = -rI + \varepsilon
  ```
- plotting $V$/V against $I$/A
- ...so the graident is $-r$
- ...and the y-intercept is $\varepsilon$

# 6 Further mechanics and thermal physics
## 6.1 Periodic motion
### 6.1.1 Circular motion

> **Centripetal force** is a force acting towards the centre of a circular path<br>
> **Centrifugal force** is a pseudo-force experienced by an object acting outwards from the centre to account for inertia

<br>

- For motion in a circular path at constant speed, the direction is constantly changing
- $\implies$ the velocity is constantly changing
- $\implies$ there is an acceleration
- ...and since there is an acceleration, there must be a centripetal force (Newton's 1st law)
  
#### Angular speed
- The magnitude of **angular speed** is given by:
```math
\omega = \frac{\Delta \theta}{\Delta t} = \frac{v}{r} = 2{\pi}f = \frac{2{\pi}}{T}
```

> $\theta$ is in radians (the superior angle measure)

#### Centripetal acceleration
- **Centripetal acceleration** is the acceleration of an object towards the centre of its path when it is moving in a circular path at constant speed
```math
a = \frac{v^2}{r} = {\omega}^2r = {\omega}v
```
#### Centripetal force
- **Centripetal force** is the **resultant** force on an object towards the centre of its path when it is moving in a circular path at constant speed
```math
F = \frac{mv^2}{r} = m{\omega}^2r = m{\omega}v
```
- This is **not a separate force** - other forces will "contribute" to provide the centripetal force
  - **without** the centripetal force, the object will not remain stationary relative to the spinning base
  - so the centripetal force **is** the tension or friction towards the centre of the circle
- There is no work done when an object is travelling in circular motion
  - ...as kinetic energy remains constant

> In general, if an object is on "top" of its circular path, the reaction force $R$ is given by
> ```math
> R = mg - \frac{mv^2}{r}
> ```
> This is because 
> ```math
> \frac{mv^2}{r} = mg - R
> ```
> where the normal contact force $R$ is pointing away from the centre of the circular path.<br>
> Tension always acts towards the centre of the circle.<br>
> tl;dr: it depends which direction the normal contact force/tension/whatever other force acts 

> An object in circular motion does not travel in a straight line, so a force must be acting on it (Newton's 1st law)<br>
> The direction of the object is not constant, so its velocity and acceleration is constantly changing<br>
> There is a force on the object which causes the object to accelerate in the direction of the force (Newton's 2nd law), and that force is centripetal<br>
> The object must pull on the central point of support with a force that is equal and opposite to the force pulling on the object from the centre (Newton's 3rd law)

### 6.1.2 Simple harmonic motion
- An object is experiencing **simple harmonic motion** when:
  - its acceleration is directly proportional to displacement and is in the opposite direction, i.e. $a \propto -x$
    - the restoring force is directed to the centre of oscillation
  - there is repetitive movement back and forth through an equilibrium position
  - the movement is periodic
```math
a = - \omega^2 x
```

```math
v = \pm \ \omega \sqrt{A^2-x^2}
```
```math
x = A cos ({\omega} t) \ if \ the \ motion \ starts \ at \ maximum \ amplitude 
```
> **Derivation of SHM**<br>
> Simple harmonic motion can be desribed by linear, second-order differential equations which are purely sinusoidal<br>
> ...so, we want an auxiliary equation with solutions $\pm \omega i$
> ```math
> \ddot x = -\omega^2x \\
> ```
> General solution:
> ```math
> x = A sin (\omega t) + B cos (\omega t)
> ```
> as required.

#### Graphs
- The $v − t$ graph is derived from the gradient of the $x − t$ graph
- The $a − t$ graph is derived from the gradient of the $v − t$ graph

#### Maximum speed
- We have
```math
v = \pm \ \omega \sqrt{A^2-x^2}
```
- ...and $v$ is maximum at $x$ = 0, so
```math
v_{max} = \pm \ \omega \sqrt{A^2} = \omega A
```

> - Alternatively, we have
> ```math
> x = A cos ({\omega} t) \\
> \implies v = \frac{dx}{dt} = - \omega A sin ({\omega} t) \\
> ```
> - ...and $v$ is maximum at the stationary points of $v(t)$, so
> ```math
> \frac{d^2x}{dt^2} = - \omega^2 A cos ({\omega} t) = 0 \\
> \implies cos ({\omega} t) = 0 + 2k \pi, k \in \mathbb{Z} \\
> \implies {\omega} t  = \frac{\pi}{2}
> ```
> - ...substituting,
> ```math
> v_{max} = - \omega A sin (\frac{\pi}{2}) \\
> \implies |{v_{max}}| = \omega A 
> ```

#### Maximum acceleration
- We have
```math
x = A cos ({\omega} t) \\
\implies v = \frac{dx}{dt} = - \omega A sin ({\omega} t) \\
\implies a = \frac{dv}{dt} = - \omega^2 A cos ({\omega} t) \\
\implies a = - \omega^2 x
```
- ...and $a$ is maximum at the stationary points of $a(t)$, so
```math
\frac{da}{dt} = \omega^3 A sin ({\omega} t) = 0 \\
\implies sin ({\omega} t) = 0 \\
\implies {\omega} t = 0 + 2k \pi, k \in \mathbb{Z}
```
- ...substituting,
```math
a_{max} = - \omega^2 A cos (0) \\
\implies | a_{max} |  = \omega^2 A
```

### 6.1.3 Simple harmonic systems
#### Mass-spring system
- Restoring force
```math
F = -kx
```

- Time period
```math
T = 2 \pi \sqrt{\frac{m}{k}}
```

> This applies to both horizontal and vertical systems

#### Simple pendulum
- Restoring force
  - component of weight acting along the arc of the circle
```math
F = mg \ sin \theta
```

- Time period
```math
T = 2 \pi \sqrt{\frac{l}{g}}
```

> The amplitude is the curved arc

> Questions may involve other harmonic oscillators (eg liquid in U-tube) but full information will be provided in questions where necessary

#### Energy
- There is maximum **potential** energy at maximum amplitude
  - for a spring, this is elastic potential energy from stretching
  - for a pendulum, this is gravitational potential energy
- As the object in SHM moves towards equilibrium, **kinetic** energy increases
  - the total energy remains constant, so the potential energy has to decrease (conservation of energy)

- In an energy-displacement graph
  - $E_K$ is at a maximum at 0 amplitude
  - $E_P$ is at a maximum at maximum amplitude

- In an energy-time graph
  - $E_K$ and $E_P$ are represented by sin/cos waves which are in antiphase
  - the total energy is always constant

> Remember, energy is a scalar - there is no negative energy!

#### Damping
- **Damping** occurs when energy is lost due to resistive forces acing on a system in SHM
  - the **period** of damped systems remain constant in theory
    - but in practice they usually decrease
  - the **amplitude** of damped systems decrease

<br>

- There are three types of damping:
  - light damping / underdamping
    - the amplitude of the oscillaions decays gradually but exponentially with time
  - critical damping
    - system returns to rest at equilibrium position in the shortest possible time **without oscillating**
  - heavy damping / overdamping
    - system returns to rest at equilibrium position slower than critical damping **without oscillating**

> The 3 types of damping correspond to the 3 types of solution to second order homogeneous linear DEs of the form
>```math
>\ddot{x} + k \dot{x} + \omega^2 x = 0
>```
> - underdamping
>```math
>x = e^{-\frac{k}{2}}(A \cos qt + B \sin qt)
>```
> - critical damping
>```math
>x = (A + Bt)e^{\lambda t}
>```
> - overdamping
>```math
>x = Ae^{\lambda_1 t} + Be^{\lambda_2 t}
>```

### Practical 7 - Investigation into simple harmonic motion

> soon<sup>TM</sup>

### 6.1.4 Forced vibrations and resonance
#### Free vibrations
- **Free vibrations** occur when there are no external forces acting on a system (and therefore no energy transfer)
- The system will oscillate at its natural frequency

#### Forced vibrations
- **Forced vibrations** occur when there is an external **driving force** acting on a system causing it to oscillate
  - the driving force does work against the resistive force responsible for damping
- The system will oscillate at the driving frequency

#### Resonance
- **Resonance** occurs when when the driving frequency of the external driving force is equal to the natural (resonant) frequency of the system
- As the driving frequency approaches the natural frequency of the system, more energy is gained from the driving force
  - ...and therefore the amplitude increases
- At resonance, the system oscillates at its **maximum amplitude**
  - energy is transferred from the driving force to the system most efficiently

<br>

- When a system is damped:
  - the amplitude of resonant vibrations decreases
  - (in an amplitude-frequency graph) the peak broadens
  - (in an amplitude-frequency graph) the peak moves towards the left of the natural frequency (i.e. decreases)

<br>

- Resonance can be used in:
  - musical instruments; where air resonates down a pipe to create stationary waves
  - radios where electric circuits are tuned to the same resonant frequency as the broadcast

## 6.2 Thermal physics
### 6.2.1 Thermal energy transfer
#### Internal energy
- **Internal energy** is the sum of the randomly distributed kinetic energies and potential energies of the particles in a body
- ...and is determined by:
  - temperature
  - random motion of molecules
  - phase of matter
  - intermolecular interactions
- ...and is increased when
  - energy is transferred to it by heating
  - work is done on it
    - e.g. when the gas is compressed
- ...and is decreased when
  - energy is lost to surroundings
  - work is done by the system on its surroundings
    - e.g. when the gas expands

> **First law of thermodynamics** <br> The internal energy of a system is increased when energy is transferred to it by heating or when work is done on it

> NB the definition of "random" for gases is different to the definition for radiation <br> Particle motion is random because they have a range of speeds and no preferred direction, not because they can't be predicted

#### Specific heat capacity
- **Specific heat capacity** is the amount of energy required to raise the temperature of 1kg of a substance by 1K **without a change of state**
  - this can be found using a continuous-flow calorimeter
- For a change of temperature $\Delta\theta$: 
  ```math
  Q = mc \Delta\theta
  ```

#### Specific latent heat
- **Specific latent heat** the amount of energy required to change the state of 1kg of substance **without changing its temperature**
- ...and has two types:
  - specific latent heat of **fusion**
    - ...which is the energy required to convert from solid to liquid 
    - which means:
      - the number of nearest atomic neighbours is reduced
      - atoms can move their centre of vibration
      - **some** bonds are broken
  - specific latent heat of **vaporisation**
    - ....which is the energy required to convert from liquid to gas

> The specific latent heat of vapourisation is often greater than fusion. This is because energy is required to separate the molecules until there are no attractive forces acting between the molecules

- During a change of state the **potential** energies of the particle ensemble are changing but **not** the kinetic energies
  - ...so there must be no change in temperature
- For a change of state
  ```math
  Q = ml
  ```


### 6.2.2 Ideal gases
#### Absolute zero of temperature
- According to gas laws, absolute zero is the temperature at which the volume or pressure of a gas extrapolates to zero
- According to the kinetic theory model, absolute zero is the temperature at which the (random) motion can be extrapolated to stop
  - ...because the kinetic energy of the particles is zero
  - $\implies$ no more energy can be removed from the system
```math
  0 K = -273.15 \degree C
```

#### Ideal gases
- Ideal gases are gases which
  - obey Boyle's law, Charles' law and the Pressure law
  - have molecules with negligible volume
  - cannot be liquified
  - have elastic collisions
  - have no interaction between molecules (except during collisions)
  - have collisions which have short durations compared to times between collisions
  - have molecules which move with continuous random motion
- For a gas with $n$ moles
  ```math
  pV = nRT
  ```
- ...or $N$ molecules
  ```math
  pV = NkT
  ```

#### Constants and molar mass
- Avogadro constant $N_A$
  ```math
  N_A = 6.02 \times 10^{23}
  ```
  ```math
  number\ of\ moles = \frac{mass\ /\ g}{molar\ mass\ / g\ mol^-1}
  ```
- Molar gas constant $R$, Boltzmann constant $k$
  ```math
  k = \frac{R}{N_A}
  ```

#### Gas Laws
- **Gas laws** are **experimental** relationships between $p$, $V$, $T$ and the mass of the gas
- Boyle's law
  - when temperature is constant, pressure is inversely proportional to the volume of a gas
    - particles are further apart and thus collide less often
  ```math
  P \propto \frac{1}{V}
  ```
  ```math
  P_1V_1 = P_2V_2 = constant
  ```
- Charles' law
  - when pressure is constant, volume is directly proportional to absolute temperature
    - particles gain kinetic energy and move faster, so to maintain the same temperature they must move apart
  ```math
  V \propto T
  ```
  ```math
  \frac{V_1}{T_1} = \frac{V_2}{T_2} = constant
  ```
- Pressure law
  - when volume is constant, pressure is directly proportional to absolute temperature
    - particles gain kinetic energy and move faster and thus collide more often
  ```math
  P \propto T
  ```
  ```math
  \frac{P_1}{T_1} = \frac{P_2}{T_2} = constant
  ```

#### Work done by an ideal gas
- When a gas expands, work is done on its surroundings **by the gas**
- Assuming pressure remains constant:
  ```math
  Work\ done = p \Delta V
  ```

### Practical 8 - Investigation of Boyle's law and Charles’s law for a gas
#### Method
- only take readings a few seconds after moving the plunger to ensure temperature is constant

### 6.2.3 Molecular kinetic theory model
- Ideal gas laws are **empirical** in nature
  - ...i.e. they are based on observation
- Kinetic theory model arises from **theory**

#### Internal energy
- For an ideal gas, internal energy is the sum of kinetic energy of the atoms in the gas
- Ideal gas molecules have no intermolecular forces
  - ...so they don't have any potential energy

#### Kinetic theory model
- The kinetic theory model is modelled on these assumptions:
  - the volume of each molecule is negligible compared with the volume of the gas
  - all collisions between particles and the walls of the container are perfectly elastic
  - the duration of one collision is much negligible compared to the duration between collisions
  - Newton's laws apply
  - molecules move in continuous random motion
  - there are no intermolecular forces except during collisions
  - molecules in the gas are identical
  - the separation between molecules is large compared to their diameter

```math
pV = \frac{1}{3} N m (C_{rms})^2
```
  ```math
average\ molecular\ kinetic\ energy = \frac{1}{2} (C_{rms})^2 = \frac{3}{2}kT = \frac{3RT}{2N_A}
```

> **Deriving the kinetic theory model**
> - The "vessel" is a cube with sides of equal length $L$
> - ...with a single molecule, mass $m$, speed $u$
> - Molecules have perfectly elastic collisions, so the change in momentum would be 
> ```math
> \Delta p = -mu - mu = -2mu
> ```
> - the time between collisions (travelling to the opposite facing wall and back) would be 
> ```math
> t = \frac{2L}{u}
> ```
> - the force exerted on a wall by a molecule would be
> ```math
> F = \frac{\Delta p}{\Delta t} = \frac{2mu}{\frac{2L}{u}} = \frac{mu^2}{L}
> ```
> - and so the pressure for one molecule on a single wall would be
> ```math
> p = \frac{F}{A} = \frac{\frac{mu^2}{L}}{L^2} = \frac{mu^2}{L^3} = \frac{mu^2}{V}
> ```
> - for $n$ particles on a single wall,
> ```math
> p = \frac{m}{V} (u_1^2+u_2^2+u_3^2+...+u_n^2)
> ```
> - but if we consider that the particles are moving in all 3 dimensions (and not in the same direction), our molecule with speed $u$ will have 3 components, where
> ```math
> u^2 = u_x^2+u_y^2+u_z^2
> ```
> - since the movement is random, we can assume that the magnitude of each component is equal
> ```math
> \frac{1}{3}u^2 = u_x^2 = u_y^2 = u_z^2
> ```
> - and so the pressure on one wall would actually be 
> ```math
> p = \frac{1}{3}\frac{m}{V}(u_1^2+u_2^2+u_3^2+...+u_n^2)
> ```
> - but each molecule has a different speed, so we should consider their average speed instead
> ```math
> c_{rms} = \sqrt{\frac{u_1^2+u_2^2+u_3^2+...+u_n^2}{N}}
> ```
> ```math
> N(c_{rms})^2 = u_1^2+u_2^2+u_3^2+...+u_n^2
> ```
> - finally, we have
> ```math
>p = \frac{1}{3}\frac{m}{V}N(c_{rms})^2
> \\
> \implies pV = \frac{1}{3}Nm(c_{rms})^2
> ```

> **Deriving the average molecular kinetic energy**
> ```math
> pV = NkT = \frac{1}{3}Nm(c_{rms})^2
> \\
> \implies m(c_{rms})^2 = 3kT
> ```
> - to calculate kinetic energy, we have
> ```math
> E_k = \frac{1}{2}mv^2
> ```
> - and therefore
> ```math
> E_k = \frac{1}{2}m(c_{rms})^2 = \frac{3}{2}kT
> ```

#### Brownian motion
- **Brownian motion** is the random motion of (larger, observable) particles suspended in a liquid or a gas
- ...which provides evidence for existence of atoms
  - collisions between the smaller and larger particules lead to random motion in the larger particles
  - small particles travel with a high speed and thus have high momentum

> **Pressure**
> - when molecules collide with the walls of its container, there is a change in momentum **because the direction has changed**
> - force is the rate of change of momentum (Newton's 2nd law), and pressure is force over area
> - force is exerted on the walls of the container as every force experienced by an object will lead to it exerting an equal and opposite force (Newton's 3rd law)
> - ...so if there are fewer collisions per second, but the average momentum change per collisions remains the same, the total momentum change per second falls and pressure drops
> - ...or if the molecules have less mean speed, the average momentum change per collision decreases, the total momentum change per second falls and pressure drops

<br>

- Knowledge and understanding of the behaviour of a gas has changed over time

# 7 Fields and their consequences
## 7.1 Fields
- A **force field** 
  - is a region in which a body experiences a non-contact force
  - arises from the interaction of:
    - mass (gravitational fields)
    - static charge (electric fields)
    - moving charges (electric and magnetic fields)
  - can be represented by a vector

<br>

- Both electic fields and gravitational fields have:
  - inverse-square force laws
  - field lines
  - the concept of potential
  - equipotential surfaces
- However,
  - masses always attract, but charges may attract or repel

## 7.2 Gravitational fields
### 7.2.1 Newton's law
- Gravity is a universal attractive force acting between all matter
- ...which, for two point masses, is directly proportional to the product of the masses and inversely proportional to the square of distance between the masses
```math
F = \frac{G m_1 m_2}{r^2}
```

<br>

- Gravity:
  - always acts towards the centre of mass, so cannot be reuplsive
  - has infinite range

> Here, we consider $r$ to be the distance between two **point** masses; so if a distance between the surface of two objects are given, the radius must be added

### 7.2.2 Gravitational field strength
- A **gravitational field** is a region in which a mass experiences a force due to another mass
- The gravitational field **strength** $g$ is the force per unit mass at a point in a gravitational field
  ```math
  g = \frac{F}{m} \\
  \implies g = \frac{GM}{r^2}
  ```
  from Newton's law of gravitation

#### Field lines
- Always towards the centre of mass

### 7.2.3 Gravitational potential
- Gravitational **potential** $V$ is the work done per unit mass to bring a test mass from infinity to a point in a gravitational field
- We define $V$ to be zero at infinity, so work is done on a mass to increase its height
  - and the gravitational force is always attractive
  - this means that $V$ will always be negative on a mass
  - ...hence the negative sign 
- For a radial field,
```math
V = -\frac{GM}{r}
```
> $V$ is scalar!

<br>

- Gravitational potential difference is the difference in $V$ between two points
- ...and the work done $\Delta W$ on a mass against a gravitational field is:
```math
\Delta W = m \Delta V
```
> This is the change in GPE. Any change in potential energy only depends on the initial and final positions and not on path taken

- **Equipotential surfaces** are surfaces which have the same gravitational potential
  - they are:
    - perpendicular to the field lines
    - denser at areas of higher potential
- No work is done when moving along an equipotential surface
  - $\Delta V$ = 0, so no work is being done against the gravitational field

#### Graphical representations
- In a graph of $V$ against $r$, the gradient at a point is $g$
```math
g = -\frac{\Delta V}{\Delta r}
```
- In a graph of $g$ against $r$, the area under the curve is $\Delta V$
```math
g = \frac{GM}{r^2} \\
\implies g = \frac{V}{r}
```

### 7.2.4 Orbits of planets and satellites
- For a circular orbit, the gravitational force provides the centripetal force
```math
\frac{GMm}{r^2} = \frac{mv^2}{r} \\
\implies v^2 = \frac{GM}{r}
```
```math
v^2 = \frac{GM}{r} = \left(\frac{2 \pi r}{T}\right)^2 \\
\implies T^2 = \frac{4 \pi^2 r^3}{GM}\\
\implies T^2 \propto r^3
```

#### Energy
- The total energy of an orbiting satellite is **constant**, and
```math
total\ energy = kinetic\ energy + gravitational\ potential\ energy \\
\implies E = \frac{1}{2}mv^2 - \frac{GMm}{r} \\
\implies E = \frac{GMm}{2r} - \frac{GMm}{r} \\
\implies E = -\frac{GMm}{2r} \\
```
  - if the orbital radius of a satellite decreases:
    - KE increases
    - GPE decreases

> If a drag force does work on the satellite, this leads to an decrease in total energy, which leads to a decrease in radius

#### Escape velocity
- The escape velocity is:
  - the minimum speed that will allow an object to leave a gravitational field with no further energy input
  - the same for all masses in a field

```math
\frac{1}{2}mv^2 = \frac{GMm}{r}
\implies v = \sqrt{\frac{2GM}{r}}
```

#### Synchronous orbits
- **Synchronous** orbits are orbits where the period of the satellite is equal to the period of the planet
- Geo**synchronous** orbits are synchronous orbits on Earth
- Geo**stationary** orbits are **geo**synchronous orbits, which
  - have a period of 24 hours
  - must be in the **plane** of the equator
  - stays above one point on the surface
  - are used for:
    - telecommunications

<br>

- Low orbits are close to the Earth's surface
  - they are used for:
    - weather observation
    - military

## 7.3 Electric fields
### 7.3.1 Coulomb's law
- An **electric field** is generated by all charged particles
- The electrostatic focr between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the separation
  ```math
  F = \frac{1}{4 \pi \varepsilon_0}\frac{Q_1 Q_2}{r^2}
  ```
  where $\varepsilon_0$ is the permittivity of free space, which is
    - the ability of a vacuum to permit the formation of an electric field
    - lower than the permittivity of all other materials

> Some assumptions for the exam:
> - Air can be treated as a vacuum when calculating force between charges
> - For a charged sphere, charge may be considered to be at the centre

### 7.3.2 Electric field strength
- The electric field **strength** $E$ is the force per unit charge experienced by a **positive** test charge at a point in an electric field
```math
E = \frac{F}{Q}
```
- For a uniform field:
```math
E = \frac{V}{d}
```

- For a radial field:
```math
E = \frac{1}{4 \pi \varepsilon_0}\frac{Q}{r^2}
```

> This produces a constant acceleration, so projectile motion problems can be based on a uniform E field

#### Work done
- Work is done to move a charge across a pd

```math
E = \frac{F}{Q} = \frac{V}{d} \\
\implies Fd = VQ \\
\implies W = Q \Delta V
```

#### Field lines
- Field lines are always directed from the positive charge to the negative charge, so
  - positively charged conductor $\implies$ field lines are directed away from the centre 
  - negatively charged conductor $\implies$ field lines are directed towards the centre 
- For two opposite charges:
  - there are field lines directed from the positive charge to the negative charge
- For two same charges:
  - there is a neutral point where the resultant electric field strength is 0
  - ...and field lines curve away from this point
- For a uniform field between two parallel plates:
  - field lines are equally spaced
  - the field beyond the edges of the plates is non-uniform

### 7.3.3 Electric potential
- Electric **potential** $V$ is the work done per unit charge to bring a positive test charge from infinity to a point in a electric field
- We define $V$ to be zero at infinity
- For a radial field, 
```math
V = \frac{1}{4 \pi \varepsilon_0} \frac{Q}{r}
```

> $V$ is scalar, but has a sign to indicate the sign of the charge

<br>

- Electric potential difference is the difference in $V$ at two points
- ...and the work done $\Delta W$ to move a charge across this pd is:
```math
\Delta W = Q \Delta V 
```

> This is the change in Electric PE

- **Equipotential surfaces** are surfaces which have the same electric potential
  - they are:
    - perpendicular to the field lines
    - denser at areas of higher potential
- No work is done when moving along an equipotential surface
  - $\Delta V$ = 0, so no work is being done against the electric field

#### Graphical representations
- In a graph of $V$ against $r$, the gradient at a point is $E$
```math
E = \frac{\Delta V}{\Delta r}
```
- In a graph of $E$ against $r$, the area under the curve is $\Delta V$
```math
E = \frac{1}{4 \pi \varepsilon_0} \frac{Q}{r^2} \\
\implies E = \frac{V}{r}
```

## 7.4 Capacitance
### 7.4.1 Capacitance
- Capacitors store energy in electronic circuits
- **Capacitance** $C$ is the charge stored per unit potential difference
```math
C = \frac{Q}{V}
```

### 7.4.2 Parallel plate capacitor
- Most capacitors are made up of two conductive metal plates
- There may be a **dielectric** between the two plates

<br>

- A **dielectric** is made up of polar molecules
  - No pd
    - polar molecules are aligned in random directions
  - With pd
    - there is a uniform electric field between the plates
    - polar molecules are aligned with their positive pole facing the negative plate and vice versa
    - each polar molecule produce their own electric field
    - this field opposes the electric field from the plates
    - ...so the pd between the plates reduces
    - ...if charge is constant, then the capacitance increases

```math
C = \frac{A \varepsilon_0 \varepsilon_r}{d}
```
- where $\varepsilon_r$ is the ratio of the permittivity of the dielectric to the permittivity of free space
  - this is also known as the dielectric constant

### 7.4.3 Energy stored by a capacitor
- Work is done on electrons to charge a capacitor 
  - ...by pulling electrons off the positive plate and pushing them towards the negative plate
  - which is stored as electrical potential energy
- As the negative plate becomes more negatively charged, the repulsive force increases
  - so the work done required to increase each unit of charge increases
- $\implies Q \propto V$
- ...and the energy stored in a capacitor can be given by:
  ```math
  E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{1}{2}\frac{Q^2}{C}
  ```
  which is the area under a graph of $Q$ against $V$

> When the dieletric is removed from a charged capacitor, the energy stored increases, as work is done on the capacitor to separate the positively charged surface of the dielectric from the negatively charged plate

### 7.4.4 Capacitor charge and discharge
#### Charging
- Electrons are pulled from the plate connected to the positive terminal $\implies$ plate becomes positively charged
- ...they travel around the circuit and are pushed onto the plate connected to the negative terminal $\implies$ plate becomes negatively charged
- The rate of flow of electrons is greatest at the start and decreases to 0
  - with an exponential relationship

```math
Q = Q_0 e^{-\frac{t}{RC}} \\
V = Q_0 e^{-\frac{t}{RC}} \\
I = I_0 (1 - e^{-\frac{t}{RC}}) \\
```

#### Discharging
- Electrons flow from the negative plate to the positive plate
  - until the pd across the plates is 0
- The rate of flow of electrons is greatest at the start and decreases to 0
  - with an exponential relationship

```math
Q = Q_0 (1 - e^{-\frac{t}{RC}}) \\
V = V_0 (1 - e^{-\frac{t}{RC}}) \\
I = I_0 (1 - e^{-\frac{t}{RC}}) \\
```

#### Time constant
- The **time constant** $\tau$ is the:
  - time taken for the charge (or current or pd) of a discharging capacitor to decrease to 37% of its original value
  - time taken for the charge (or pd) of a charging capacitor to increase to 63% of its original value

```math
\tau = RC
```

> $\frac{1}{e} = 0.37 \\$ 
> $T_\frac{1}{2} = ln 2 (RC) = 0.69RC$

> Remember to check if the question is asking for the $V$ across the capacitor or across the resistor!

## 7.5 Magnetic fields
### 7.5.1 Magnetic flux density
- A **magnetic field** (B field) is a region in which a magnetic pole experiences a force, and is created by:
  - a moving charge
  - a permanent magnet

<br>

- The **magnetic flux density** $B$ of a magnetic field is the number of magnetic flux lines per unit area
- $B$ has unit Tesla, $T$, which is defined as the strength of the magnetic field (flux density) that produces a force of 1N in a wire of length 1m with 1A of current 

<br>

- The force $F$ on a current-carrying wire in a magnetic field is
  ```math
  F = BIl
  ```
  when the field is perpendicular to the current

> If the field is not perpendicular to the current, then $F = BIl sin \theta$ where $\theta$ is the angle between the wire and the field <br>
> The maximum force occurs when the current is perpendicular to the field

#### Field lines
- From north to south
- Never cross

#### Fleming's left hand rule
- The force, field and current are all perpendicular to each other, so:
  - thu**m**b - **m**otion
  - **f**irst finger - **f**ield
  - se**c**ond finger = conventional **c**urrent

### 7.5.2 Moving charges in a magnetic field
- A moving charge produces a magnetic field which interacts with other magnetic fields
- The force on charged particles moving in a magnetic field is
  ```math
  F = BQv
  ```
  where the field is perpendicular to velocity

> If the field is not perpendicular to velocity, then $F = BQv sin \theta$ where $\theta$ is the angle between the velocity and the field <br>
> The maximum force occurs when the velocity is perpendicular to the field

- Recall that this is based on the direction of conventional current
- ...so for a positive charge, the current is in the same direction
- ...but for a negative charge, the current is in the opposite direction

<br>

- In a uniform magnetic field, charged particles will travel in a circular path
  - since the magnetic force is perpendicular to $v$
```math
\frac{mv^2}{r} = BQv \\
\implies r = \frac{mv}{BQ}
```

#### Cyclotrons
- Cyclotrons are a type of particle accelerator consisting of:
  - two hollow, semicircular "dees" separated by a gap
  - a uniform magnetic field
    - which leads to circular motion
  - an alternating electric field
    - which switches polarity when the particle crosses the gap so it is accelerated
- ...so the particles are only accelerated when they cross a gap, but travel at a constant radius an speed within each dee

### 7.5.3 Magnetic flux and flux linkage

- **Magnetic flux** $\phi$ is the product of magnetic flux density and the cross-sectional area perpendicular to the magnetic field
  - and has units Webers (Wb)

```math
\phi = BA
```

- **Magnetic flux linkage** $N \phi$ is the product of the magnetic flux and the number of turns of a coil
  - and has units Weber turns (Wb turns)

```math
N \phi = BAN
```

- Flux and flux linkage passing through a rectangular coil rotated in a magnetic field is
```math
\phi = BA cos \theta \\
N \phi = BAN cos \theta = BAN cos \omega t
```

### 7.5.4 Electromagnetic induction
- An emf is induced when:
  - a conductor moves through a magnetic field
  - the direction of a magnetic field through a coil changes
- because
  - there is a change in magnetic flux
  - ...work is done to move the conducto
  - ...which is converted into electrical energy
- This emf becomes an induced current when the conductor is attached to a complete circuit

#### Faraday's law
- The magnitude of the induced emf is directly proportional to the rate of change of magnetic flux linkage
```math
\varepsilon = N \frac{\Delta \Phi}{\Delta t}
```

#### Lenz's law
- The direction of the induced emf (when there is a change of flux linkage) is such that it will produce effects to oppose the change (of flux) that is producing it

> If a magnet moves through a coil, an emf is induced <br>
> A current is induced, so the coil has a magnetic field <br>
> and this field acts in the opposite direction to the magnetic field of the coil

#### Straight conductor
- When a conductor of length $L$ moves perpendicular to a magnetic field at a constant velocity $v$,
```math
s = v\Delta t \\
\implies A = Lv\Delta t \\
\implies \Delta \Phi = BLv\Delta t \\
\varepsilon = N \frac{\Delta \Phi}{\Delta t} \\
\implies \varepsilon = \frac{BLv\Delta t}{\Delta t} \\
\implies \varepsilon = BLv
```

#### Rotating coil
- When a coil is rotating uniformly in a magnetic field,
  - the emf induced is alternating
```math
\varepsilon = \frac{d}{dt} \left( BAN cos \omega t \right) \\
= BAN \omega sin \omega t
```
- When the plane of the area of the coil is parallel to the field, the emf is at a maximum
  - the number of field lines cut per second is the greatest

### 7.5.5 Alternating currents
- An **alternating current** is a current which periodically varies between a positive to a negative value
  - ...which creates an alternating magnetic field
> We will only see sinusoidal AC
- The electrons in an AC move back and forth with SHM
```math
peak = \frac{peak\ to\ peak}{2}
```

<br>

- The root mean square (rms) value of $I$ or $V$ represents the the equivalent DC that produces the same heating effect/power

```math
I_{rms} = \frac{I_0}{\sqrt{2}} \\
V_{rms} = \frac{V_0}{\sqrt{2}} \\ 
```

#### Applications
- UK household mains is 230V (rms) at 50Hz
- AC can be transformed to have lower transmission current
  - which reduces power loss due to resistance

#### Oscilloscopes
- Time-base
- Voltage-gain

### 7.5.6 The operation of a transformer
- A **transformer** changes high alternating voltage to lower alternating voltage and vice versa
- ...and is made of 3 parts:
  - core
    - provides greater linkage of magnetic flux from the primary coil to the secondary coil **compared to an air core**
  - primary coil
    - an AC is applied to the coil
    - ...which creates an changing magnetic field inside the core 
    - $\implies$ changing $N \Phi$
  - secondary coil
    - a conductor which has a changing magnetic flux linking with it 
    - ...which produces an induced emf that is determined by the number of turns in the primary and the secondary coils

```math
\frac{N_s}{N_p} = \frac{V_s}{V_p}
```

#### Efficiency
- Transformers are not 100% efficient:
  - induced eddy currents
  - reversal of magnetism
  - poor insulation between 
```math
efficiency = \frac{I_s V_s}{I_p V_p}
```
- To make the core more efficient, we:
  - use soft iron to allow easy magnetisation (and demagnetisation)
  - laminating the core with insulators
  - using a core with high resistivity
  - using thick wires
  - using a core which allowes all the flux to link to the secondary coil

#### Eddy currents
- A changing magnetic field acts against the field which induced the current (due to the current)
- ...which creates a current
- To reduce eddy currents:
  - laminate the core
  - ...so the resistance is higher $\implies$ the current is smaller

# 8 Nuclear physics
## 8.1 Radioactivity
### 8.1.1 Rutherford scattering

- In the early 1900s, Rutherford discovered evidence for the nuclear model of the atom by passing beams of $\alpha$ particles through a thin metal foil
- This provided data for the number of $\alpha$ particles that were deflected at each angle

#### Apparatus
- Vacuum chamber
  - $\alpha$ particles are highly ionising
  - if there was air in the chamber, the $\alpha$ particles would collide with the air particles before reaching the detector
- $\alpha$ source in a lead container
  - $\alpha$ particles are emitted in all directions
  - the lead container had a small hole to produce a collimated beam of $\alpha$ particles
  - and the lead absorbed the $\alpha$ particles in other directions
- Thin metal sheet
  - a thick sheet would stop the alpha particles completely
  - typically, gold was used as it is extremely malleable
- Movable detector

#### Observations
- The majority of $\alpha$ particles passed straight through with little/no deflection
  - ...and therefore the atom must be mostly empty space
- Some $\alpha$ particles were deflected through small angles
  - ...and therefore there must be a positive nucleus at the centre (repels positively charged $\alpha$ particles)
- A small number of $\alpha$ particles were deflected through angles of >90°
  - ...and therefore the nucleus must be extremely small
  - ...and is where the majority of the mass and charge is concentrated

### 8.1.2 Alpha, beta and gamma radiation

#### Properties

| Radiation | Particle                      | Range in air                         | Absorption                                        | Ionisation                                          | Energy                 |
| --------- | ----------------------------- | ------------------------------------ | ------------------------------------------------- | --------------------------------------------------- | ---------------------- |
| $\alpha$  | $^{4}_{2}\,He$                | up to 100 × 10<sup>-3</sup>m         | paper or thin metal foil (weak penetrating power) | 10<sup>4</sup> ions per mm in air (highly ionising) | constant               |
| $\beta$   | $^{0}_{-1}\,e$ $^{0}_{+1}\,e$ | up to 1m                             | 5mm aluminium foil                                | 100 ions per mm in air (moderately ionising)        | varies up to a maximum |
| $\gamma$  | $^{0}_{0}\,\gamma$            | infinite, follows inverse-square law | several cm of lead                                | weakly ionising                                     | constant               |

#### Applications
- Smoke detectors
  - $\alpha$ particles from a weak source causes the ionisation of air molecules
  - ...so there is a small current flow
  - if there is smoke, it absorbs the $\alpha$ particles, and the current reduces
- Thickness control
  - $\beta^-$ radiation
    - $\alpha$ particles would be absorbed by the material
    - $\gamma$ particles would pass through the material
  - a Geiger counter controls the thickness of the material being produced
- Medicine
  - Radiation therapy
    - $\gamma$ radiation is used to treat cancerous tumors
    - $\beta$ radiation is used to treat skin cancer
  - Radioactive tracers
    - $\gamma$ or $\beta$ radiation can be used to monitor the processes occuring in bodies
  - Sterilising equipment
    - $\gamma$ radiation can be used to sterilise medical equipment

#### Hazards of exposure
- Damage done by exposure to radiation can be described by the recieved dose/dose equivalent
- To reduce the recieved dose equivalent:
  - keep sources shielded in a lead-lined box when not in use
  - wear protective clothing to prevent contamination
  - minimise exposure time
  - handle sources with long tongs
  - monitoring exposure using dosimeter badges

#### Inverse-square law for $\gamma$ radiation
```math
I = \frac{k}{x^2}
```
- Gamma radiation is an EM wave, and therefore shares many properties of EM waves

> For a point source, we can find out the number of $\gamma$ photons travelling through a specific surface area per second
> ```math
> A_1 = \frac{Area}{4 \pi x^2} \times A_0
> ```

#### Background radiation
- Natural sources
  - Rocks (and derivatives, e.g. brick)
    - radioactive elements e.g. uranium occur naturally in rocks and soil
    - uranium decays into radon gas, which is an $\alpha$ emitter
  - Cosmic rays
    - some protons emitted by the Sun enter the Earth's atmosphere at high speed
    - gamma radiation is produced when these protons collide with molecules in the atmosphere 
- Artificial sources
  - Medicine
  - Nuclear fallout (from weapons)
  - Nuclear accidents

<br>

- Experimental elimination from calculations
  - readings with no source present are taken and subtracted from other readings to produce a corrected count rate

### Practical 12 -  Investigation of the inverse-square law for gamma radiation

#### Method
- Measure the background radiation with the $\gamma$ source stored or outside the room
- Measure the number of counts in a minute for different distances from the source

#### Results
```math
I = \frac{k}{x^2} \\
\implies \frac{1}{\sqrt{c}} = kx
```
- ...so if the inverse-square law is followed, the gradient is k

> $I \times x^2 = constant$ is a useful result

### 8.1.3 Radioactive decay
- Radioactive decay is random and spontaneous
  - there is equal probabiliy of any nucleus decaying
  - the rate of decay is unaffected by environmental conditions
- ...therefore, we can only consider the average decay rate - represented by the decay constant $\lambda$

```math
A = \frac{\Delta N}{\Delta t} = - \lambda N
```
- where the activity, $A$, is measured in Becquerels ($s^{-1}$)

<br>

- The number of undecayed nuclei $N$ can be found by

```math
N = N_0 e^{- \lambda t}
```
- where $N_0$ is the initial number of undecayed nuclei.
- Since $A \propto N$, we also have

```math
A = A_0 e^{- \lambda t}
```

#### Half-life
- Half-life is the average time taken for the number of undecayed nuclei to halve

<br>

- Starting with
```math
N = N_0 e^{- \lambda t}
```
- when $t = T_{\frac{1}{2}}$, $N$ should be half of $N_0$ by definition, so
```math
\frac{1}{2}N_0 = N_0 e^{- \lambda T_{\frac{1}{2}}} \\
\implies  \frac{1}{2} = e^{- \lambda T_{\frac{1}{2}}} \\
\implies  ln \frac{1}{2} = - \lambda T_{\frac{1}{2}} \\
\implies  \lambda T_{\frac{1}{2}} = ln 2
```
- we get
```math
T_{\frac{1}{2}} = \frac{ln 2}{\lambda}
```

<br>

- Graphically, half-life can be determined by finding the point where the activity has halved (wowzers who could've known)
- By plotting a log-log graph of $log N$ against $log t$, we get
```math
ln N = ln N_0 - \lambda t
```
- which is a linear function in $t$ where the gradient is $- \lambda$, and the y-intercept is $ln N_0$

#### Applications
- Storage of radioactive waste
  - sources with long half-life will have to be stored more securely
- Radioactive dating
  - Carbon dating
    - carbon-14 $^{14}\,C$ is formed from the interaction of molecules in the atmosphere with cosmic rays
    - all organisms absorb $^{14}\,C$ through respiration
    - when an organism stops respiring (i.e. they have died), the number of $^{14}\,C$ molecules in the organic matter falls
    - the amount of $^{14}\,C$ in the matter is used for dating by comparing to the current amount of $^{14}\,C$ in the atmosphere
  - Uranium-Lead dating
    - uranium-238 decays via a decay chain which ends with lead-206, which is a stable isotope

### 8.1.4 Nuclear instability
- A nucleus is unstable if it has too
  - many nucleons
  - many neutrons
  - many protons
  - much energy

#### Graph of N against Z
- In a graph of number of neutrons $N$, against proton number $Z$, there is a line of stability
  - for light nuclei, where $Z < 20$, the line is linear with gradient 1 (i.e. $N = Z$)
  - for heavier nuclei, the gradient of the line increases
    - i.e. stable nuclei have more neutrons than protons

#### Decay modes
- $\alpha$ decay
  - occurs when the nucleus is proton-rich, but is too large (has too many nucleons) to be stable ($Z > 82$)
  > SNF between nucleons is unable to overcome the electromagnetic force between the protons
  ```math
  ^{A}_{Z}X \to\  ^{A-4}_{Z-2}Y +\ ^{4}_{2}\alpha
  ```
- $\beta^-$ decay
  - occurs when the nucleus is neutron-rich
  ```math
  ^{A}_{Z}X \to\  ^{A}_{Z+1}Y +\  ^{0}_{-1}\beta \ + \ ^{0}_{0}\bar{\nu}_e
  ```
- $\beta^+$ decay
  - occurs when the nucleus is proton-rich
  ```math
  ^{A}_{Z}X \to\  ^{A}_{Z-1}Y +\  ^{0}_{+1}\beta \ + \ ^{0}_{0}\nu_e
  ```
- Electron capture
  - occurs when the nucleus is proton-rich
    - when a proton within the nucleus captures one of its orbiting electrons and is converted into a neutron
  ```math
  p + e^- \to n + \nu_e
  ```
- $\gamma$ emission
  - occurs when there is too much energy
    - ...often after another type of decay where the nucleus becomes excited
    - ...or after electron capture, where an inner electron is captured and a "slot" has to be filled

#### Nuclear excited states
- Nuclei may exist in excited states if there is too much energy
  - this state is usually short-lived, and the nucleus moves to its ground state
  - $\gamma$ photon emission reduces the amount of energy in the nucleus
  
#### Application
- Medical diagnosis - technetium-99m
  - the "m" stands for metastable
    - an excited state which has a long lifetime
  - pure $\gamma$ source
  - decay product of molybdenum-99, a product of nuclear reactors
  - half life of 6 hours
    - short enough to cause little damage
    - but long enough to obtain results

### 8.1.5 Nuclear radius
#### Closest approach of alpha particles
- When a (positively charged) alpha particle is fired at a thin metal foil, there is an electrostatic force of replusion 
- ...at the point of closest approach, the speed of the particle is 0
- ...because all of its kinetic energy has been converted into potential energy
- because the particle starts with an initial kinetic energy, we have
```math
E_k = E_p \implies \frac{1}{2}mv^2 = \frac{1}{4 \pi \varepsilon_0} \frac{Q_1 Q_2}{r} = \frac{2Ze^2}{4 \pi \varepsilon_0 r}
```
<br>

- ...which always provides an overestimate
  - because it only gives the distance of closest approach/upper limit to the radius

#### Electron diffraction
- Electron diffraction occurs when a beam of electrons is directed at a thin film
- ...and each electron diffracts around a nucleus
- ...because the de Broglie wavelength of an electron at high speed is similar to the size of the nucleus
- This produces a diffraction pattern of concentric circles of minima
- ...and the size of the nucleus can be determined using the first minima
```math
sin \theta = 1.22 \frac {\lambda}{2R}
```
- ...which
  - gives greater resolution (as the wavelength can be made very small)
  - gives greater accuracy becausse electrons can get closer to the nuclei (as there is no electrostatic repulsion)
  - is easier to accelerate (give energy to) compared to $\alpha$ particles (as charge-to-mass ratio is higher)
  - is easier to produce
  - is easier to interpret
  - does not involve the strong nuclear force

#### Dependence of radius on nucleon number
- From experimental data, it was derived that
```math
R = R_0 A^{\frac{1}{3}}
```
- ...which is not exact, as
  - binding energy is ignored
  - density is not uniform within the nucleus

> When given the radius $R_X$ and the number of nucleons $A_X$ of one nuclide, the radius $R_Y$ of another nuclide can be found given its number of nucleons $A_Y$
> ```math
> R_Y = R_X \left( \frac{A_Y}{A_X} \right)^{\frac{1}{3}}
> ```

#### Nuclear density
```math
V = \frac{4}{3} \pi r^3 \\
\implies V = \frac{4}{3} \pi R^3_0 A \\
\rho = \frac{m}{V} \\
\implies \rho = \frac{A m_{nucleon}}{\frac{4}{3} \pi R^3_0 A} \\
\implies \rho = \frac{3 m_{nucleon}}{4 \pi R^3_0}
```
### 8.1.6 Mass and energy
#### Mass-energy equivalence
```math
E = m c^2
```
- applies to all energy changes

> You may be asked to derive power from energy obtained from the mass-energy equivalence

#### Binding energy
- Mass defect $\Delta m$ is the difference between the mass of a nucleus and the sum of the mass of its nucleons
```math
\Delta m = (Z)m_p + (A - Z)m_n - m_{nuclei}
```
- ...mass-energy equivalence implies that this occurs because energy is released when a nucleus is formed
  - energy is required to overcome the electromagnetic replusion forces between protons in the nucleus to hold the nucleus together
- Binding energy is the energy required to separate a nucleus into protons and neutrons
```math
E = \Delta m c^2
```
#### Atomic mass unit
- Defined as the mass of $\frac{1}{12}$ of an atom of Carbon-12
```math
1 \ u = 1.661 \times 10^{-27} \ kg
```

> Using mass-energy equivalence, we can derive that
> ```math
> E = u c^2 \\
> \implies E = 1.660539 \times 10^{-27}(2.99792458 \times 10^8)^2 \\
> \implies E = 1.49242 \times 10^{-10} \ J \\
> = 931.494893 \ MeV
> ```
> $\therefore 1 \ u \approx 931.5 \ MeV$, which is a useful result (but is hiding on the formula sheet)

#### Nuclear fission 
- A larger nucleus is split into two smaller daughter nuclei, along with several neutrons
  - the neutrons can in turn collide with other nuclei, starting a chain reaction

<br>

- The daughter nuclei have higher binding energy per nucleon, so energy is released as KE

#### Nuclear fusion
- Two smaller nuclei join together to form one larger nucleus
- For fusion to occur, much higher (input) kinetic energy is required to overcome:
  - electrostatic replusion between protons
  - strong nuclear force between nucleons
- ...therefore fusion only occurs in extremely hot and dense environments, e.g. the core of a star

<br>

- The larger nucleus has a much higher binding energy per nucleon, so energy is released as KE
  - more energy is released by fusion than fission

#### Binding energy per nucleon
- Nuclei with higher binding energy per nucleon are more stable
  - ...because more energy is required to separate the nucleons
- Iron $^{56} Fe$ has the highest binding energy per nucleon

<br>

- For $A < 56$
  - fusion occurs
  - steeper, positive gradient in a graph of average binding energy per nucleon against nucleon number
  - lower binding energy per nucleon

- For $A > 56$
  - fission occurs
  - less steep, negative gradient in a graph of average binding energy per nucleon against nucleon number
  - higher binding energy per nucleon (which decreases $\propto A$)

- Some atoms are outliers
  - $^{4} H$ is particularly stable
  - $^{12} C$ and $^{16} O$ are helium nuclei bound together

### 8.1.7 Induced fission
- Occurs when a thermal neutron is **absorbed** by a nucleus
  - thermal neutrons are neutrons which is in thermal equilibrium with its surroundings, which
    - are slow moving
    - have low kinetic energy
- If a fast-moving neutron is incident on a nucleus, it will rebound

#### Chain reaction
- (Fast-moving) neutrons released from fusion cause more fission reactions
  - which then recursively causes more fission reactions
  - ...because each fission goes on to cause at least one more fission

#### Critical mass
- The minimum mass of fuel required to maintain a steady chain reaction
- If the mass of fuel used is:
  - = critical mass:
    - single fission reaction follows the last
  - < critical mass:
    - reaction will eventually stop
  - \> critial mass:
    - runaway reaction, leading to explosion
  
#### Thermal nuclear reactors
- Moderator
  - surrounds fuel and control rods
  - made of poor absorber of neutrons, e.g. water, beryllium or graphite
    - closer the moderator atoms are in size to a neutron, the larger the proportion of momentum which is transferred
  - fast moving neutrons collide elastically with the moderator and loses kinetic energy and momentum
    - ...eventually reaching thermal equilibrium, creating thermal neutrons
    - ...which increases the **probability** of fission
    - ...and causes less fatigue on the reactor
- Control rods
  - absorbs neutrons without being dangerously unstable
  - made of non-fissionable materials, e.g. boron or cadmium
  - controls the rate of fission by varying its depth
    - lowering rods decreases the rate of fission, as more neutrons are absorbed
    - and is usually adjusted such that one fission neutron from each fission event causes exactly one other fission
- Coolant
  - transfers thermal energy (efficiently) between water systems within the reactor
  - made of materials with a high specific heat capacity, e.g. water, helium, or molten salt
  - pumped into reactor at a cold temperature to extract the heat released by fission
    - ...which is then transferred to water used to produce steam externally in the heat exchanger

### 8.1.8 Safety aspects
- Fuel used
  - $^{238}U$ enriched with $^{235}U$
  - $^{238}U$ absorbs neutrons to control the rate of fission
- Remote handling of fuel
  - using robots
- Shielding
  - thick lead or concrete
- Emergency shut-down
  - control rods can be fully lowered to absorb all free neutrons

#### Radioactive waste materials
- High-level waste
  - examples:
    - spent fuel rods (contains unstable fission products)
  - most dangerous
  - processing:
    - initially placed in cooling ponds close to the reactor for a number of years
    - plutonium/uranium is separated to be recycled
    - high level waste is vitrified into (pyrex) glass and placed in (stainless) steel/lead/concrete containers to be stored deep underground
      - ...because in liquid form, the waste may leak
      - ...and will be radioactive for thousands of years, so a geologically stable area is required
    - the waste is initially very hot so has to be placed in water/cooling ponds 
    - the waste is initially highly radioactive and needs to be screened in water/cooling ponds (to absorb the radiation)
    - the waste (initially) is highly radioactive and needs to be remotely handled
    - transporting waste presents a potential danger to the public
      - ...so waste is transported enclosed in impact/crash resistant/extra thick and strong casings Or processed onsite or nearby

- Intermediate-level waste
  - examples:
    - radioactive materials with low activity
    - containers
  - processing:
    - encased in cement and steel, and stored underground
- Low-level waste
  - examples:
    - laboratory equipment
    - protective clothing
  - processing:
    - encased in cement, and stored underground

#### Nuclear power
- Risks
  - Non-renewable
  - Produces radioactive waste
  - Risk of meltdown
  - Commissioning and decommissioning is expensive
- Benefits
  - Little greenhouse gas emissions
  - Smaller mass of fuel for the same energy
  - Can be produced continuously
  - Produces medical isotopes
  - Some can adjust output quickly

# 12 Turning points in physics
## 12.1 The discovery of the electron
### 12.1.1 Cathode rays
- Production of cathode rays in a discharged tube is achieved by:
  - ionisation of gas atoms by a strong electric field (under low pressure)
    - positive ions are attracted to the cathode
    - ...so there is emission of electrons by the cathode
  - electrons are **accelerated** towards the anode by a potential difference
  - when the electron and positive ions collide, they become excited
    - when the orbital electrons de-excite, visible photons are emitted

> A paddle wheel gains **energy** from the moving electrons

### 12.1.2 Thermionic emission of electrons
- In thermionic emission,
  - filament is heated due to the current through it
  - some (free) electrons gain sufficient energy ($> \phi$) to leave the surface of the metal
- Electrons can then be accelerated by a pd (via an anode) to form an electron gun
```math
work\ done\ = \frac{1}{2}mv^2 = eV
```
### 12.1.3 Specific charge of the electron
#### Circular motion
- Using a fine beam tube, which has
  - low pressure gas, which collides with the electrons and de-excite to emit light of visible wavelengths
```math
F = \frac{mv^2}{r} = Bev \\
\implies v = \frac{Ber}{m} \\
eV = \frac{1}{2}mv^2 \\
\implies \frac{e}{m_e} = \frac{2V}{B^2r^2}
```

> You (usually) can't measure the speed of the electrons, so you must rearrange the given equation to use the accelerating pd

#### Magnetic and electric fields
```math
F = eE = \frac{eV}{d} = Bev\\
\implies v = \frac{V}{Bd}
```
switching off the E field,
```math
F = \frac{mv^2}{r} = Bev\\
\implies v = \frac{Ber}{m} \\
\implies \frac{e}{m_e} = \frac{V}{rB^2d}
```

> Also with constant acceleration formulae for electric field only

#### Significance
- specific charge of the cathode rays was much larger than the hydrogen ion
- ...so the cathode ray particles must have a very small mass or very high charge

### 12.1.4 Principle of Millikan’s determination of the electronic charge
#### Stationary force
- Oil drops:
  - are ionised
  - do not evaporate quickly, so the mass remains constant
```math
F = \frac{QV}{d} = mg
```

#### Radius
- Assuming the droplet is a perfect sphere,
```math
m = \frac{4}{3} \pi \rho r^3 \\
mg = 6 \pi \eta r v \\
\implies r = \sqrt{\frac{9 \eta v}{2 \rho g}}
```

#### Mass
- When the electric field is turned off, the oil droplets fall at **terminal velocity**
- Assuming air is a viscous fluid, we can use Stoke's law for the force on an oil droplet, assuming that the droplet is:
  - small
  - spherical
  - slow
```math
F = 6 \pi \eta r v
```
- then,
```math
F = 6 \pi \eta r v = mg \\
\implies m = \frac{\rho 4 \pi r^3}{3}
```
- which is true if:
  - Newton's laws apply
  - upthrust is negligible

## 12.2 Wave-particle duality
### 12.2.1 Newton’s corpuscular theory of light
#### Newton's corpuscular theory
- light is made up of corpuscles (particles), which are elastic spheres
- refraction
  - force acts attracting them to the denser medium
    - attraction only affects motion at the interface/boundary
  - only one component of momentum (perpendicular to the surface) changes at the interface
  - ...which causes the change in direction
- reflection
  - corpuscles hit the reflective medium and experience a reaction force (Newton's 3rd law)
- particles travel in a straight line
  - ...so there is no diffraction (and the shadows of the image would be sharp)
#### Huygens’ wave theory
- wave front is incident on interface
- there are secondary wavelets at wave fronts
- refraction
  - wavelets travel more slowly in a heavier medium
  - different parts of the wave front cross the interface at different times
  - ...so the slowing down of the wavelets causes the change in direction
- reflection
  - each point of reflection becomes a new point source for wavelets

> Newton's theory was more accepted due to:
> - Newton being widely respected for motion
> - No way of measuring speed of light or diffraction

### 12.2.2 Significance of Young’s double slits experiment
- When the light wave reaches a slit,
  - each point at slit produces secondary wavelets
  - wavelets overlap on the screen
- There is path difference due to different distances between a point on the screen and the two slits
- ...which introduces phase differences
- Bright fringes form where waves arrive in phase
- Dark fringes form where waves arrive in antiphase

> Huygen's theory was now accepted:
> - Light was observed to travel slower in denser media
> - Light was observed to show interference effects that cannot be explained using corpuscular theory

### 12.2.3 Electromagnetic waves
- Electromagnetic waves consist of an electric field and a magnetic field, which are
  - perpendicular to each other
  - perpendicular to the direction of motion
  - in phase with each other
  - formed by each other (self propagation)
    - hence EM waves do not require a medium to travel

<br>

- Maxwell’s formula for the speed of electromagnetic waves in a vacuum
  ```math
  c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}
  ```
  - $\varepsilon_0$ relates to the electric field strength due to a charged object in free space
  - $\mu_0$ relates to the magnetic flux density due to a current-carrying wire in free space.

#### Hertz’s discovery of radio waves
- Using a spark gap transmitter and loop detector, with a metal reflector
- A stationary wave is created
  - $\implies$ $\lambda$ = 2 × distance between adjacent maxima
- ...which can then be used to determine the speed of EM waves

#### Fizeau’s determination of the speed of light
- Maxwell’s theory of electromagnetic waves predicted a value for the speed of EM waves
- Fizeau’s result is close to the predicted speed $\implies$ light is an EM wave

### 12.2.4 The discovery of photoelectricity
#### Black-body radiation
- Black-body radiation has a spectrum with peak depending on temperature of the emitted **only**

#### Ultraviolet catastrophe
- If EM radiaiton was a wave, it is predicted that a black body wouth emit an infinite amount of UV as its temperature increased
- This did not match up with experimental evidence

#### Planck’s interpretation 
- The energy emitted by oscillators was quantised
```math
E = nhf
```

#### Obersverations
- no photoelectric emission if incident light below threshold frequency
  - classical wave theory: light of any frequency should cause emission
- photoelectric emission is instantaneous
  - classical wave theory: energy is spread and needs time to accumulate
- (photoelectrons have a range of KE from zero to max value)
- number of photoelectrons per second is proportional to intensity of incident radiation
  - classical wave theory: intensity of wave should determine whether photoelectron emitted

#### Einstein's explanation
- Light is made of photons
- Photoelectrons due to one photon interacting with one electron in surface of metal.
- Minimum energy (work function of metal) needed for electron to be emitted related to a threshold frequency
- Remaining energy of photon becomes max KE of photoelectron.
- Brighter source means more photons (per second) and therefore more photoelectrons (per second).


### 12.2.5 Wave–particle duality
#### de Broglie’s hypothesis
- all matter exhibit wave-particle duality
```math
p = \frac{h}{\lambda} \\
\implies \lambda = \frac{h}{\sqrt{2meV}}
```
#### Electron diffraction
- de Broglie hypothesis suggests that λ will decrease if the momentum increases
- the momentum of the electrons depends on the accelerating pd
- so increasing the pd results in a decreased ring diameter

### 12.2.6 Electron microscopes
- an atom has a diameter of approximately $1 \times 10^{-10}$m

#### Transmission electron microscope (TEM)
  - uses magnetic lenses to deflect moving electrons
  - electrons through the middle of the lenses are undeviated
  - electrons on the edges are deflected by magnetic fields toward the axis of the TEM
  - condenser lens deflects the electrons into a wide parallel beam incident uniformly on the sample
  - objective lens then forms an image of the sample
  - projector lens then casts a second image onto the fluorescent screen

> - Wavelength depends on speed of the electrons, and the lower the wavelength gives greater the detail
> - Emitted electrons come from a heated cathode and therefore have a speed distribution dependent on temperature
> - The speed of the electrons is not always the same which causes different pathways through the lens and so aberration
> - The sample thickness reduces the speed of the electrons increasing the wavelength and decreasing the detail

#### Scanning tunnelling microscope (STM)
- uses quantum tunnelling
  - electrons on the surface may jump onto the tip of the probe, if
  - ...they can overcome the potential barrier
  - but not all electrons have sufficient energy to do so
- tip of probe maintained a certain distance (about 1nm) above surface
- when probe moves over higher layer of electrons, current increases
- tip is moved higher to reduce current to original value
- so the surface can be mapped by the position of the tip

## 12.3 Special relativity
### 12.3.1 The Michelson-Morley experiment
- Semi-silvered glass block splits the beam of monochromatic light into two beams
  - (The plane block ensures that both beams pass through the same thickness of glass and air)
- Beams travel at right angles and return to combine at telescope with a path difference
  - Observer sees interference pattern from two beams
  - If the speed of light depends on the Earth's velocity through the ether, rotating the apparatus through 90° would cause the phase difference to change
- Apparatus rotated 90 degrees and pattern observed
  - If the ether existed, the pattern would shift
    - path length/speed of light different depending on orientation relative to motion of apparatus
    - ...so there is a change in the phase difference
    - the speed of light depends on the Earth's velocity through the ether
  - However, there was no shift in pattern

#### Significance
- There is no "absolute motion"
- The speed of light is invariant
- Ether did not exist
  - light travels without a material medium
- The Earth drags the ether with it

### 12.3.2 Einstein’s theory of special relativity
- The two postulates of Einstein’s theory of special relativity are
  - the laws of physics have the same form in **all inertial frames**
    - ...so an observer in a frame will not able to tell if they are moving
  - the speed of light in free space is invariant in **free space**

#### Inertial frame of reference
- reference frames which are non-accelerating

### 12.3.3 Time dilation
- $t$ = time measured from an observer moving relative to the time being measured
- $t_0$ = (proper time) time measrued from an observer at rest relative to the time being measured
  
> $t > t_0 \ \forall t$ <br>
> the time must be measured at the same position (otherwise use length, it's easier!)

### 12.3.4 Length contraction
- $L$ = length measured from an observer moving relative to the time being measured
- $L_0$ = (proper length) time measrued from an observer at rest relative to the length being measured
  
> $L < L_0 \ \forall L$

> Both time dilation and length contraction are due to Einstein's 2nd postulate
> - since both observers must have the same speed of light
> - if L decreases, then t must increase, and vice versa

### 12.3.5 Mass and energy
- Equivalence of mass and energy means that
  - if work is done on an object, its mass will increase
  - if an object in motion has energy greater than its rest energy, then the additional energy is kinetic

```math
E = m c^2 \\
E_k = mc^2 - m_0c^2 = \frac{m_0 c^2}{\sqrt{1 - \frac{v^2}{c^2}}} - m_0c^2
```

#### Bertozzi’s experiment
- Accelerate electrons close to the speed of light and measure their KE
  - ...by using a strong electric field to accelerate the electrons
    ```math
    E_k = QV
    ```
  - ...and using the change in temperature to measure KE
- which provides evidence for the variation of kinetic energy with speed
  - $v$ has an upper limit as KE increases
  - ...and as $v$ increases, the mass increases
    - as $v$ approaches c, the mass approaches $\infty$
  - ...so when $v$ is close to $c$, the increase in KE is due to the increase in mass