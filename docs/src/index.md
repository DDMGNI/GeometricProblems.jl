
# GeometricProblems.jl

GeometricProblems.jl is a collection of ODEs and DAEs with interesting geometric structures
together with useful diagnostics and plotting tools.

Typical structures are
* Variational structure, i.e., the equations can defined in terms of a Lagrangian function and be obtained from an action principle;
* Hamiltonian structure, i.e., the equations can be defined in terms of a Hamiltonian function together with a symplectic or Poisson matrix;
* Invariants, i.e., the equations have symmetries and associated conservation laws;
* Volume preservation, i.e., the flow of the equations is divergence-free.


## Contents

```@contents
Pages = [
"diagnostics.md",
"exponential_growth.md",
"henon_heiles.md",
"kepler_problem.md",
"lorenz_attractor.md",
"lotka_volterra_2d.md",
"lotka_volterra_3d.md",
"lotka_volterra_4d.md",
"massless_charged_particle.md",
"harmonic_oscillator.md",
"nonlinear_oscillators.md",
"pendulum.md",
"double_pendulum.md",
"point_vortices.md",
"inner_solar_system.md",
"outer_solar_system.md",
]
Depth = 1
```


## Figure License

> Copyright (c) Michael Kraus <michael.kraus@ipp.mpg.de>
>
> All figures are licensed under the Creative Commons [CC BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/).


## Software License

> Copyright (c) Michael Kraus <michael.kraus@ipp.mpg.de>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.