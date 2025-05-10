# 2 Particles and radiation

## 2.1 Particles

### 2.1.1 Constituents of the atom

- Atoms are made up of 3 types of particles: protons, neutrons and electrons
  | Particle | Charge | Mass | Relative Charge | Relative Mass |
  | --- | --- | --- | --- | --- |
  | Proton | +1.60 x 10<sup>-19</sup> C | 1.673 x 10<sup>-27</sup>kg | +1 | 1
  | Neutron | 0 C | 1.675 x 10<sup>-27</sup>kg | 0 | 1
  | Electron | -1.60 x 10<sup>-19</sup> C | 9.11 x 10<sup>-31</sup>kg | -1 | Negligible

#### Specific charge

- The ratio of the total charge of a particle to its mass
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
- Isotopes are atoms of an element with a different number of neutrons

</br>

- Isotopic data can be used in carbon dating
  - the ratio of a certain (stable) isotope of carbon to another (unstable) isotope of carbon can be used to determine the age of an atom

</br>

```math
Relative\ atomic\ mass\ A_r = \frac{\sum isotope\ abundance\times isotope\ mass}{\sum isotope\ abundance}
```

### 2.1.2 Stable and unstable nuclei

- in a nucleus,
  - electrostatic force repel due to the charge of protons
    - infinite range, but $\propto \frac{1}{x^2}$
  - gravitational force attract due to the mass of the nucleons
    - very weak
  - strong nuclear force acts between nucleons

#### Strong nuclear force

- acts between quarks

  > There are actually two "types" of the strong interaction
  > | interaction | range | particle | carrier | result
  > | --- | --- | --- | --- | --- |
  > | strong | < 0.8fm | quark | gluon | hadron
  > | residual strong | 1 - 3fm | hadron | meson (π) | nucleus

- is stronger than the electrostatic force

  - ...and so holds the nucleus together

- consists of:
  - very-short range repulsion closer than approximately 0.5 fm (0.5 x 10<sup>-15</sup> m)
    - equilibrium at 0 force occurs at approximately 0.5 fm
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

- subatomic particles with
  - no charge
  - negligible mass
- hypothesised to account for conservation of energy in beta decay
  - alpha particles have discrete energy levels
  - but beta particles do not
    - ...because their energy in shared with nutrinos

### 2.1.3 Particles, antiparticles and photons

#### Antimatter

- for every type of matter, there is a corresponding antimatter
- matter and antimatter have:
  - opposite charges
  - the same rest mass
  - the same rest energy
- common particle-antiparticle pairs include

| Particle | Antiparticle |
| -------- | ------------ |
| proton   | antiproton   |
| neutron  | antineutron  |
| electron | positron     |
| neutrino | antineutrino |

#### Photons

- the fundamental particle making up electromagnetic radiation
  - transfers energy in discrete "quanta"
    <br>
- Photon energy:

```math
E = hf = h\frac{c}{\lambda}
```

- the Planck constant $h$ is the ratio of the photon's frequency to energy

#### Annihilation

- occurs when a particle-antiparticle pair collide and coverts its mass into energy
- the particle and antiparticle are destroyed
- ...and two gamma-ray photons are emitted
  - they travel in opposite directions
    - to conserve momentum
- mass-energy is conserved - but "normal" mass is not
  - the minimum energy of one photon is equal to the rest energy of one particle

```math
E_{min} = h(f_{min}) = E
```

#### Pair production

- occurs when a high-energy photon converts its energy into mass
- ...and creates a particle-antiparticle pair
  - they travel in opposite directions
    - to conserve momentum
- mass-energy is conserved - but "normal" mass is not
  - the minimum energy of one photon is equal to the total rest energy of both particle

```math
E_{min} = h(f_{min}) = 2E
```

### 2.1.4 Particle interactions

- there are 4 fundamental interactions

| Interaction     | Range                    | Force     | Particles     | Exchange particle       |
| --------------- | ------------------------ | --------- | ------------- | ----------------------- |
| Strong          | up to 3 fm               | strongest | hadrons       | pion                    |
| Electromagnetic | infinite                 | ---       | all charged   | virtual photon          |
| Weak            | up to 10<sup>-18</sup> m | ---       | all particles | W/Z boson               |
| Gravity         | infinite                 | weakest   | all with mass | graviton (hypothetical) |

#### Exchange particles

- are "virtual" and only exist for a very short amount of time
- carry the fundamental force between particles
  - there cannot be instantaneous action - the particle has to interact with "something"
    > AQA analogy: the transfer of momentum by throwing a heavy ball between two people causes them to move away from each other

#### Electromagnetic force

- acts between charged particles
- responsible for:
  - repulsion between two charged particles
  - attraction between electrons and nuclei
- the virtual photon is exchanged
  - which has:
    - no mass
    - no charge
    - itself as its antiparticle

#### Weak interaction

- acts between all particles
- responsible for
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

- made from quarks
- ...and therefore are subject to the strong interaction and strong nuclear force
- has two types:
  - baryons (3 quarks)
    - the baryon number is a quantum number (and so is conserved)
    - the proton is the only stable baryon
      - all other baryons eventually decay into protons
  - mesons (2 quarks)
    - the pion is the exchange particle of the strong nuclear force between nucleons (baryons)
      > the gluon is the exchange particle of the strong interaction between quarks
    - the kaon decays into a pion

#### Leptons

- are fundamental particles
- the lepton number is a quantum number (and so is conserved)
  > the different "flavours" of the lepton number are conserved seperately
- the muon decays into an electron

#### Strange particles

- produced through the strong interaction
- decay through the weak interaction
- are usually created in pairs
- ...so strangeness is a quantum number
  - however, strangeness can change by 0, +1 or -1 in weak interactions only
    > the weak interaction allows for quark flavour changes

### 2.1.6 Quarks and antiquarks

- There are 3 common flavours of quarks:

| Quark           | Charge | Baryon number | Strangeness |
| --------------- | ------ | ------------- | ----------- |
| up ($u\,$)      | + 2/3e | + 1/3         | 0           |
| down ($d\,$)    | - 1/3e | + 1/3         | 0           |
| strange ($s\,$) | - 1/3e | + 1/3         | -1          |

- ...and antiquarks have the opposite charge, baryon number and strangeness

</br>

- there are several common combinations of quarks required for baryons and antibaryons
  - proton: $uud$
  - antiproton: $\bar{u}\bar{u}\bar{d}$
  - neutron: $udd$
  - antineutron: $\bar{u}\bar{d}\bar{d}$
- ...and mesons
  - $\pi^+$: $u\bar{d}$
  - $\pi^-$: $d\bar{u}$
  - $\pi^0$: $u\bar{u}$ or $d\bar{d}$
  - $K^+$: $u\bar{s}$
  - $K^-$: $s\bar{u}$
  - $K^0$: $d\bar{s}$
  - $\bar{K^0}$: $s\bar{d}$
    > Mesons are always formed of a quark-antiquark pair
    > ...so the baryon number is always 0

#### Neutron decay

- all baryons decay into protons
- when a neutron decays into a proton
  - a down quark becomes an up quark

```math
d \to u + \beta^- + \bar{\nu}_e
```

### 2.1.7 Applications of conservation laws

- Change of quark character in β−and in β+ decay.
- Conservation applies to:
  - Quantum numbers
    - Charge
    - Baryon number
    - Lepton number
    - Strangeness (except in weak interactions)
  - Energy
  - Momentum

### Appendix - Particles

> So, to summarise

## 2.2 Electromagnetic radiation and quantum phenomena

### 2.2.1 The photoelectric effect

- The photoelectric effect is where electrons (photoelectrons) are emitted from the **surface of a metal** after absorbing EM radiation
  - provides evidence that light behaves as a particle
    - carried in discrete packets/quantised
- As the incident radiation intensity is increased
  - more photons are incident on the material per second
  - more photoelectrons are emitted per second

#### Threshold frequency

- The minimum frequency of incident EM radiation requried to remove a photoelectron from the surface of a metal
  - therefore, the threshold wavelength is the longest wavelength

#### Work Function ϕ

- The minimum energy required to release a photoelectron from the surface of a metal
- A single electron only absorbs one photon
  - so the absorbed photon must have energy equal to or high than Φ
  - photons with excess energy will have that energy transferred as kinetic energy to the photoelectron
- Not affected by the intensity of the incident radiation
  > Photons without enough energy will just scatter
- The energy required to release a photoelectron varies because some electrons are not on the surface of the metal
  - work is done to reach the surface before overcoming the work function

#### Stopping potential V<sub>s</sub>

- The potential difference required to stop photoelectron emission from occuring

  > - can be determined using a set of collector and emitter plates connected to a circuit
  > - a flow of electrons across the gap between the plates results in a emf
  > - as the current is turned up, the emitter plate becomes more positively charged
  > - electrons are attracted back towards the emitter plate - p.d. in gap opposes movement
  > - electrons are released with a range of kinetic energy
  > - some electrons have enough kinetic energy to overcome this attraction and cross the plate
  > - the p.d. at which no electrons can cross the gap is known as the stopping potential
  > - the rate of photoelectron release does not depend on p.d. once it is far away from stopping potential
  >   - constant current is reached when all released photoelectrons reach the anode

- $E_{k_{max}}$ is the maximum kinetic energy of the photoelectrons, where
  ```math
  E_{k_{max}} = e(V_s)
  ```

#### The photoelectric equation

- The energy of a photon is
  ```math
  E = hf
  ```
- So, considering the work function, we have
  ```math
  hf = \phi + E_{k_{max}}
  ```
  > $E*{k*{max}}$ depends only on the frequency of the incident radiation and the work function

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

- Low-pressure mercury vapour with phosphor coating on tube
- A high potential difference is applied across the tube
  - this creates an electron flow from the cathode to the anode
- Electrons collide with the mercury atoms
- Ionisation occurs
  - electrons are released from mercury ions
- Exctiation occus in mercury atoms
  - free electrons collide with the mercury ions and are excited
  - these electrons are unstable and de-excite, emitting photons with UV wavelengths.
- Exctiation occurs
  - photons are absorbed by atoms in coating
  - atoms are excited/gain energy and its electrons move to higher energy levels (than n = 2)
  - photons have sufficient energy to promote electrons to high enough levels
- De-excitation occurs
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

#### Line spectra

- Also known as atomic spectra
- Occurs when excited atoms emit visible light corresponding to different colours
- This can be observed as a series of lines with spaces in between
  - procides evidence that electrons in atoms can only transition between discrete energy levels

#### Emission spectra

- Dark background with coloured lines
- Explaination
  - electrons can only exist in discrete energy levels
  - when an electron transitions from a higher energy level to a lower energy level, a single photon of EM radiation is emitted
  - the photon energy is equal to the difference in energy levels
  - each element has a specific set of energy level differences, so it corresponds to a different wavelength of light
  ```math
  E = h\frac{c}{\lambda}
  ```
  - the emitted photons go off in all directions, so the intensity in the original direction is reduced

#### Absorbtion spectra

- Continuous spectrum of colours with dark lines
  - lines coorespond with the differences in energy levels/the coloured lines in an emission spectra
  - formed by passing white light through a cool gas under low pressure
- Explaination
  - an electron can gain energy and transition into a higher energy level from absorbing a single photon, if the photon energy equals the difference in energy levels
  - these excited electrons de-excite and emit a single photon
  - the emitted photons go off in all directions, so some wavelengths appear to be missing

#### Discrete energy levels

- The difference between two discrete energy levels is equal to a specific photon energy emitted by a fluorescent tube/absorbed in a spectra
  ```math
  \Delta E = hf = E_1 − E_2
  ```

### 2.2.4 Wave-particle duality

- Light can behave as a particle (i.e. have the properties of a particle)
  - photoelectric effect
    - EM radiation carry energy in discrete packets (photons)
- Light can also behave as a wave
  - diffraction and intereference in Young's double-slit experiment
    > Wave theory suggests
    >
    > - any frequency of light will have photoelectric emission - but a threshold frequency exists
    > - the energy absorbed will gradually increase with each wave - but energy is absorbed instantaneously
    > - the kinetic energy of the emited electron will increase with intensity - but energy remains constant
    >   <br>
- Electrons can behave as a particle
- Electrons can also behave as a wave
  - electron diffraction
    - diffraction pattern is produced when an electron beam is directed at a thin graphite film
    - the material used to diffract electrons must have gaps similar in size to their de Broglie wavelength
      - so usually atomic lattices are used, e.g. graphite, which has a crystalline structure
    - diffraction pattern is a series of concentric rings
      - if electrons had particle behaviour, they would be distributed uniformly across the screen

#### de Broglie wavelength

- Increasing p.d. increases the speed of an electron
- which increases the momentum of an electron
- which decreases its angle of diffraction
- thus the diameter of the ring decreases
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
- Period - the time taken for one full oscillation
  <br>
- Two waves are in phase if they are both at the same point in the cycle; i.e. their phase difference 2π rad.
- Two waves are in antiphase if their phase difference is π rad.
  <br>
- Progressive waves - waves which transfer energy from one point to another without transferring material (i.e. causing permanent displacement of the medium)
  - all points have the same amplitude in each period
    > Always refer to:
    >
    > - (both) waves interfere
    > - path difference varies
    > - phase difference varies
    > - produces maxima and minima
    > - recieved signal goes through series of maxima and minma
    >
    > When asked to compare:
    >
    > - refer to phase
    > - refer to frequency
    > - refer to speed

### 3.1.2 Longitudinal and transverse waves

#### Transverse waves

- waves oscillations perpendicular to direction of propagation
- examples:
  - EM waves
  - vibrations on a string
  - S-waves
- can be polarised
- has crests and troughs
- can be demonstrated with a vertical slinky
  <br>

#### Longitudinal waves

- waves oscillations parallel to direction of propagation
- examples:
  - sound waves
  - P-waves
- cannot be polarised
- has areas of compression and rarefaction
- can be demonstrated with a horizontal slinky
  <br>

#### Polarisation

- oscillations occur in only one plane perpendicular to the direction of propagation
  - this plane is known as the plane of polarisation
- can only occur in transverse waves
  - because transverse waves oscillate planes perpendicular to the direction of propagation
- can be used in:
  - polaroid sunglasses
    - light reflecting from reflective surfaces (e.g. puddles) undergo partial plane polarisation
    - polaroid sunglasses polarise the light so reduces glare
  - radio/microwave signals - radio and television signals are usually vertically polarised or horizontally polarised - therefore aerials need to be mounted flat (horizontal) or on its side (vertical)
    > When answering scenairos related to polarisation, make use of "maximum" and "minimum"
    > Always link back - "max occurs when aerial is aligned with plane of polarisation of the wave"
- All EM waves travel at the same speed in a vacuum - 3 \* 10<sup>8</sup> ms<sup>-1</sup>

### 3.1.3 Principle of superposition of waves and formation of stationary waves

#### Superposition

- when two or more waves with the same frequency arrive at a point, the resultant displacement is the sum of the displacements of each wave
- if both waves have the same amplitude, they will meet:
  - in phase
    - constructive interference
  - in anti-phase
    - destructive interference
      <br>

#### Stationary waves

- produced by the superposition/interference of two waves of the same frequency and similar amplitude travelling in **opposite directions**
- can be created with a progressive wave and its reflection
- stores energy
- wave pattern does not move along the direction of propagraion
- has nodes and antinodes
  - nodes are regions with no oscillation
    - destructive interference occurs
  - antinodes are regions with maximum displacement
    - constructive interference occurs
- can either be in phase or out of phase
  - between nodes - in phase
  - odd number of nodes between - out of phase / antiphase
  - even number of nodes between - in phase
- all points have different amplitudes
- lowest frequency for formation is the first harmonic
- examples:
  - strings
    - vibrations from stationary waves on stretched strings produce sound waves
    - at resonant frequencies, a whole number of half wavelengths will fit on the length of the string
  - microwaves
    - a microwave source can be placed in line with a reflector
    - a detector can be moved around to detect nodes and antinodes
  - sound
    - can be produced as a result of the formation of stationary waves inside a closed air column
    - there must be a node at one end and an antinode at the speaker end

#### Harmonics

- wave patterns of stationary waves
- can be observed on a string with two fixed ends
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

</br>

- wave speed on a string can be given by
  ```math
  v = \sqrt{\frac{T}{\mu}}
  ```
- therefore, the frequency of the first harmonic is
  ```math
  f = \frac{1}{2L}\sqrt{\frac{T}{\mu}}
  ```

## 3.2 Refraction, diffraction and interference

### 3.2.1 Interference

#### Coherence

- waves have the same frequency and a constant phase difference
- waves undergoing constructive or destructive interference must be coherent

#### Path difference

- the difference in the distance travelled by two waves from their sources to the point where they meet
- determines the type of interference:
  - constructive : $n\lambda$
  - destructive : $(n + \frac{1}{2})\lambda$
- expressed in multiples of wavelength

</br>

- Intensity of a wave $\propto$ amplitude ^ 2
  - intensity of a wave (power per unit area) $\propto$ energy transferred by the wave
  - energy transferred by a wave $\propto$ amplitude ^ 2

</br>

- Interference can be shown with a laser
  - lasers are coherent and monochromatic (same wavelength)
  - constructive interference is shown with maxima (light fringes)
  - destructive interference is shown with minima (dark fringes)
  - but lasers have safety issues
    - high energy light beam may cause permanent eye damage
- Interference can be shown with sound waves
  - sound waves are longitudinal
  - constructive interference is heard with a louder sound
  - destructive interference is heard with no sound
  - Interference can be shown with microwaves
    - constructive interference is shown with higher amplitude on detector
    - destructive interference is shown with lower amplitude on detector

#### Double slit interference

- superposition of waves from both slits
- diffraction patterns overlap and interfere constructively
- produces a interference pattern using two coherent sources
  - can be a single source passing through a double slit
    - light diffracts to both slits, and has a fixed path difference
- each bright fringe has the same width
- waves further away from the central maxima will have lower intensity as their waves have to travel further (reduced coherence)
- to calculate fringe spacing:
  ```math
  w = \frac{\lambda D}{s}
  ```
  ```math
  fringe\ spacing =  \frac{wavelength \times\ distance\ from\ slit\ to\ screen}{slit\ spacing}
  ```
  - D has to be much larger than other dimensions

</br>

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

- the spreading out of waves when they pass through a gap/around an obstacle
- examples:
  - water waves through gaps in harbours
  - radio waves around buildings

#### Monochromatic diffraction

- central maximum is:
  - double the width of the other fringes
  - much brighter
- as order increases, the fringes have less intensity
- dark fringes have zero intensity

#### White light diffraction

- central maxima is:
  - white
  - equal intensity to monochromatic light
  - much wider than other fringes
  - much brighter than other fringes
- all other maxima are spectra
  - less intense than monochromatic light
  - shortest wavelength (violet) - closest to central maxima
  - longest wavelength (red) - furthest from central maxima
  - spectra eventually merge as wavelengths increase/decrease
    - fringe spacing decreases
    - red wavelengths increase, blue wavelengths decrease

#### Factors affecting single slit diffraction

- slit width
  - decrease $\Rightarrow$ greater angle of diffraction $\Rightarrow$ greater width of maxima, but lower intensity
    - slit width = wavelength: greatest diffraction
    - slit width < wavelength: less diffraction
      - some waves are reflected, spreads out less
    - slit width > wavelength: less diffraction
      - spreads out more
    - slit width >> wavelength: no diffaction occurs
    - slit width << wavelength: no diffaction occurs
- wavelength
  - increase $\Rightarrow$ greater angle of diffraction $\Rightarrow$ greater width of maxima
    - red light has wider fringes than blue light

#### Diffraction grating

- creates a diffraction pattern:
  - monochromatic light $\Rightarrow$ fringes
  - white light $\Rightarrow$ different components
- has a large number of thin, equally spaced slits on a glass plate
- creates a sharper pattern than a double slit
- more useful when measuring wavelength
- maximum angle of diffraction is when the beam is at right angles to the grating $\Rightarrow\ sin \theta = 1$

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

### 3.2.3 Refraction at a plane surface

#### Refractive index

- how much a material slows down light passing through it (ratio of how fast light travels compared to in vacuum)
  - in air, n = 1
- given by
  ```math
  n = \frac{c}{c_s}
  ```
  - where $c_s$ is the speed of light in the substance
- high refractive index (n > 1) = optically dense

#### Refraction

- wave speed is different in the more optically dense material
  - ... the edge of a wavefront slows down or speed up when entering that material
  - ...but the part of the wave not in the material continues at a different speed

</br>

- denser medium $\Rightarrow$ slower wave speed (shorter wavelength)
  - therefore light bends towards the normal
- less dense medium $\Rightarrow$ faster wave speed (longer wavelength)
  - therefore light bends away from the normal

#### Snell’s law

```math
n_1 sin \theta_1 = n_2 sin \theta_2
```

#### Total internal reflection

- when the angle of refraction is 90° such that $sin \theta_1 = 1$
  - light is refracted along the boundary
  - angle of incidence is known as the critical angle $\theta_c$
- we can therefore derive that
  ```math
  sin \theta_c = \frac{n_2}{n_1} = \frac{sin \theta_1}{sin \theta_2}
  ```
  > which is only valid for $n_1 > n_2$ (i.e. going from higher to lower), as otherwise $sin \theta_c$ is not defined
- when the angle of incidence > $\theta_c$, and $n_1 > n_2$
  - total internal reflection occurs
- when the angle of incidence < $\theta_c$
  - refraction occurs
- when the angle of incidence = $\theta_c$
  - light is refracted along the boundary
- materials with a higher refractive index are more likely to have total internal reflection

#### Fibre optics

- total internal reflection occurs inside optical fibres
  - light refracts upon entering fibres
  - refracts out of fibres
- light is monochromatic

</br>

- a step-index fibre consists of
  - optically dense core tube (glass)
  - lower density cladding
    - protects thin core from damage
    - prevents signal degradation from light escaping
    - keeps core separate to prevent information crossover
  - outer sheath

</br>

- however, fibre optics face issues:

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
    - the core is very narrow to prevent this

# 4 Mechanics and materials

## 4.1 Force, energy and momentum

### 4.1.1 Scalars and vectors

- A vector is a quantity that has both magnitude and direction
- A scalar is a quantity that only has magnitude

### 4.1.2 Moments

- the turning effect of a force
- given by<br>force × perpendicular distance from the point to the line of action of the force

#### Principle of moments

- for a system to be in equilibrium, the sum of clockwise moments about a point must be equal to the sum of the anticlockwise moments (about the same point)

#### Couples

- a pair of equal and opposite coplanar forces<br>force × perpendicular distance between the lines of action of the forces

#### Centre of mass

- the point at which the weight of the object is considered to act
- the position of the centre of mass of a uniform regular solid is at its centre
- for symmetrical objetcs with uniform density, the centre of mass is at the point of symmetry
- an object is stable when its centre of mass lies above its base

### 4.1.3 Motion along a straight line

- Displacement
  - distance from a fixed point
- Speed
  - total distance travelled per unit time (rate of change of distance)
- Velocity
  - rate of change of displacement
- Acceleration
  - rate of change of velocity

</br>

#### Graphs

- velocity–time
  - gradient: acceleration
  - area: total displacement
- acceleration–time
  - area: change in velocity
- displacement–time
  - gradient: velocity

### 4.1.4 Projectile motion

#### Friction

- a force which opposes the motion of an object
- more friction is needed wrt acceleration

#### Lift forces

- upwards force on an object moving through a fluid
- perpendicular to fluid flow
- caused by a change in direction of fluid flow

#### Drag forces

- opposite direction to motion
- does not speed up an object
- converts kinetic energy into other forms

#### Terminal speed

- as an object falls through a fluid, the gravitational force is greater than the frictional force
- the object accelerates
  - as speed increases, the frictional force increases
- due to Newton’s Second Law, the resultant force and therefore acceleration decreases
- eventually, the frictional force is equal to the gravitational force, and the resultant force is zero
  - the object will move at its terminal velocity

#### Air resistance

- increases with speed
- affected by:
  - cross-sectional area
  - shape
  - altitude
  - temperature
  - humidity
- decreases the horizontal component of velocity in a projectile

### 4.1.5 Newton’s laws of motion

#### First law

- An object will remain at rest or move with constant velocity unless acted on by a resultant force
  - Inertia

#### Second law

- The resultant force acting on an object with a constant mass is directly proportional to its acceleration<br>F = ma

#### Third law

- For each force experienced by an object, the object exerts an equal and opposite force
  - The force pair has:
    - same type of force
    - same magnitude
    - opposite direction
    - different objects

> When describing using Newton's laws of motion:
>
> - describe using all laws
> - state direction of all forces
> - exerts force instead of displace water/gas
> - refer to the object stated in question - gas accelerated

### 4.1.6 Momentum

#### Linear momentum

- defined as<br>p = mv
- momentum in one direction
- remains constant unless the system is acted upon by an external resultant force
- Conservation of linear momentum
  - The total momentum before a collision is equal to the total momentum after a collision, provided no external force acts
    <br>

#### External forces

- forces that act on a system from outside
- e.g. friction
- Internal forces - forces exchanged by particles within the system - e.g. tension in a string
  <br>

#### Force

- the rate of change of momentum <br>F = ∆(mv)/∆t

#### Impulse

- change in momentum
- or the product of the force applied and time<br> ∆p = F∆t = mv - mu
  - (where the force is constant)
- therefore a small force acting over a long time has the same effect as a large force acting over a short time
- in a force–time graph,
  - Area: impulse
- impact forces are
  - reduced by increasing contact time
    - lowers risk of injury

#### Elastic and inelastic collisions

- momentum is always conserved in collisions and explosions
- elastic collisions
  - kinetic energy is conserved
  - usually colliding objects move in opposite direction
- inelastic collisions
  - kinetic energy is not conserved
  - usually colliding objects stick together

#### Momentum conservation issues

- force of impact in a vehicle collision can be decreased by increasing the contact time
  - this is achieved through safety features
    - crumple zones
      - designed to crush/crumple
      - increases the time it takes for the momentum to decrease
    - seat belts
      - stops occupants colliding with the interior
      - stretches slightly to increase the time it takes for the momentum to decrease
    - airbags
      - soft cushion to prevent injury
      - increases the time it takes for the momentum to decrease
  - "absorbs" energy from an impact

### 4.1.7 Work, energy and power

#### Work done

- the amount of energy transferred when an external force causes an object to move over a certain distance<br>W = Fs cosθ
- work can be done "against" a force, e.g. friction
  - some energy is dissipated to to the surroundings

#### Power

- rate of doing work = rate of energy transfer<br>P = ΔW/Δt = Fv

#### Force–displacement graph

- Area: work done - useful for variable forces

#### Efficiency

- efficiency = useful output power/input power

### 4.1.8 Conservation of energy

#### Conservation of energy

- energy cannot be created or destroyed, it can only be transferred from one form to another

#### Dissipation of energy

- no energy transfer is 100% efficient
  - some energy is dissipated to the surroundings
  - this is usually wasted as it can not be used

#### Gravitational potential energy

- ∆E<sub>p</sub> = mg∆h
- energy stored in mass due to its position in a gravitational field

#### Kinetic energy

- E<sub>k</sub> = (1/2)mv<sup>2</sup>
- energy an object has due to its motion

## 4.2 Materials

### 4.2.1 Bulk properties of solids

#### Density

- Mass per unit volume<br>ρ = m/v

#### Hooke's kaw

- A material that obeys hooke's law has extension that is directly proportional to the force applied up to the limit of proportionality<br>F = kΔL
- The stiffer the material, the higher the spring constant k

</br>

- Limit of proportionality
  - point beyond which Hooke's law no longer holds
- Elastic limit
  - point beyond which the material will no longer return to its original shape (length)

#### Tensile forces

- Tensile forces are stretching forces which act on a material
- Tensile stress
  - force exerted per unit area (Pa) <br>σ = F/A
  - a material is able to support up to its ultimate tensile stress, at which point it breaks
- Tensile strain
  - extention per unit length<br>ε = ΔL/L

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
- For a material obeying Hooke's law, work done is stored as elastic strain energy<br>E = (1/2)F∆L
- which is also the area under a force-extention graph

#### Spring energy

- When a (vertical) spring is extended and contracted, energy is transferred between different stores
- As the spring is stretched, elastic potential energy increases
- As the stretching force is removed, kinetic energy increases
- Kinetic energy is transferred to gravitational potential energy
- and vice versa

#### Plastic behaviour

- There are 2 types of deformation:
  - elastic deformation
    - objects return to their original shape when the stretching force is removed
  - plastic deformation
    - objects remain stretched and do not return to their original shape when the stretching force is removed
      <br>
- Brittle materials
  - small plastic region
  - low breaking stress
- Ductile materials
  - large plastic region
  - high breaking stress

#### Energy conservation issues

- When a stretching force is removed, the material is unloaded
  <br>
- After an object undergoes plastic deformation, the unloading curve on a force-extention graph will not pass through the origin
  - the object is permanently extended
  - the area between the loading and unloading curves is the work done to deform the wire
    <br>
- the unloading curve is always below the loading curve - some energy may be transferred into other energy stores, e.g. thermal for rubber bands
  <br>
- In a vehicle, a suspension system is used to provide comfortable handling of a vehicle
- elastic shock absorbers dampen movements of the springs
  - kinetic energy from the car is converted into thermal energy
- seatbelts are made of elastic materials to convert kinetic energy into elastic strain energy

### 4.2.2 The Young modulus

- The ability of a material to withstand changes in length with an added load
  - i.e. the stiffness of a material
- For a material which obey's Hooke's law, stress is proportional to strain
- therefore the ratio of tensile stress and tensile strain is constant
- therefore:<br>E (Pa) = Tensile stress/Tensile strain = FL/∆LA

> When considering springs/materials with the same Young modulus but different diameter/length, this rearrangement may be useful<br>k = E (A/L)

# 5 Electricity

## 5.1 Current electricity

### 5.1.1 Basics of electricity

- Current is the rate of flow of charge
- I = ∆Q / ∆t
- Potential difference is the work done per unit charge
- V = W / Q
- Resistance is how difficult it is for charge carriers to get past a component
- R = V / I

### 5.1.2 Current–voltage characteristics

- Ohm's law states that I ∝ V under constant physical conditions.
- We need to consider 3 types of component:
  - Ohmic conductor
    - follows Ohm's law<br>V = I R
      - graph is directly proportional
  - Semiconductor diode
    - forward bias
      - near 0 until threshold voltage, then increases dramatically
    - reverse bias
      - slightly below 0 until reverse breakdown voltage, then decreases dramatically
      - because resistance is very high during reverse bias
  - Filament lamp
    - the wire in the lamp heats up as current increases, therefore its resistance increases
    - at low currents, Ohm's law is obeyed as the component does not heat up much.
      > Remember the order of the axes! Normally, it will be I (vertical) and V (horizontal)
- Ammeters have 0 resistance to not affect the reading of current
- Voltmeters have infinite resistance so no current can flow through them
  - it takes all the p.d. if it is the only path

### 5.1.3 Resistivity

- Resistivity is the extent to which a material opposes the flow of electric current through it<br>ρ = RA / L
- It is dependent on environmental factors, e.g. temperature
- Metal conductors
  - when temperature increases, resistance increases.
  - metal ions gain more kinetic energy and vibrate more
  - so charge carriers (i.e. electrons) collide with the ions more frequently
  - charge carriers slow down
  - current decreases
- Negative temperature coefficient (NTC) thermistors
  - when temperature increases, resistance decreases
  - electrons are bumped up from the valence band to the conduction band
  - so the number of charge carriers increases
  - so current increases
  - the resistance/temperature graph is non-linear - the downwards gradient is steeper at the start
- Superconductors are materials which have zero resistivity at/below a critical **temperature**
  - the critical temperature varies for different materials, but is usually close to 0K
- They can be used in:
  - power cables, to reduce energy loss through heating
  - strong magnetic fields, which are used for maglev trains or medical equipment
- The resistance/temperature graph is non-linear and drops dramatically to 0 at the critical temperature

### 5.1.4 Circuits

#### Series circuits

- Potential difference is shared in proportion to resistance<br>V<sub>total</sub> = V<sub>1</sub> + V<sub>2</sub> + ...
- a "potential drop" occurs across each component
  - the amount of drop is calculated with Ohm's law<br> V = I R
- Current is constant<br>I<sub>total</sub> = I<sub>1</sub> = I<sub>2</sub> = ...
- Resistance adds up<br>R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ...

#### Parallel circuits

- Potential difference is constant across all branches
  V<sub>total</sub> = V<sub>1</sub> = V<sub>2</sub> = ...
- Current is shared between branches
  I<sub>total</sub> = I<sub>1</sub> + I<sub>2</sub> + ...
- Resistors in parallel reduces total resistance
  R<sub>total</sub><sup>-1</sup> = R<sub>1</sub><sup>-1</sup> + R<sub>2</sub><sup>-1</sup> + ...

#### Battery cells:

- Series:
  - V<sub>total</sub> = V<sub>1</sub> + V<sub>2</sub> + ...
  - Cancels out in opposite directions
- Parallel:
  - V<sub>total</sub> = V<sub>1</sub> = V<sub>2</sub> = ...
- For both cases, the current remains unchanged
  - Each cell provides less power/energy in parallel, so they last longer, and reduces internal resistance.
    <br>
- Power is rate of transfer of energy:
  - P = I V = I<sup>2</sup> R = V<sup>2</sup>/R
- Energy:
  - E = P t = I V t
    <br>
- In DC circuits, charge and energy are conserved:
- Kirchoff's first law: the current flowing into a node/junction must be equal to the current flowing out of it
  - Q = I t, so this proofs conservation of charge
- Kirchoff's second law: the sum of all voltages across components which supply electrical energy must equal the sum of all voltages across the other components in the same loop
  - E = I V t, so this proofs conservation of energy.

### 5.1.5 Potential divider

- A potential divider is used to supply constant or variable potential difference from a power supply with constant p.d.
- This is achieved with several resistors in series across a source of p.d.
- this includes variable resistors, or semiconductor components, e.g. LDRs.
- Potential dividers can used as control circuts to trigger events.
- e.g. when light intensity falls, resistance across the LDR will increase, so the current decreases (as I = V / R), so there is less shared of p.d. across the fixed resistor.

### 5.1.6 Electromotive force and internal resistance

- All cells have an internal resistance
- caused by charge carriers (electrons) colliding with atoms/ions inside the cell, which leads to energy loss
- represented as a resistor inside the battery in a circuit diagram
- Electromotive force (emf) is the amount of energy provided by the battery (i.e. transferred from chemical energy to electrical energy) for every coulomb of charge (Q) passing through.
  ε = E / Q = I (R + r)
- Total resistance = internal resistance + load resistance
  <br>
- The p.d. across the load resistor is known as the terminal p.d. (V)
- The p.d. across the internal resistor is known as lost volts (V)
- it is the energy wasted by the cell per coulomb of charge
- emf = terminal p.d. + lost volts
- The emf can be measured using a voltmeter across a cell when no current is running through it.
