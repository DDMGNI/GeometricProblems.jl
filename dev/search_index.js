var documenterSearchIndex = {"docs":
[{"location":"double_pendulum/#Double-Pendulum","page":"Double Pendulum","title":"Double Pendulum","text":"","category":"section"},{"location":"double_pendulum/","page":"Double Pendulum","title":"Double Pendulum","text":"Modules = [GeometricProblems.DoublePendulum]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"lotka_volterra_4d/#Lotka-Volterra-4d","page":"Lotka-Volterra 4d","title":"Lotka-Volterra 4d","text":"","category":"section"},{"location":"lotka_volterra_4d/","page":"Lotka-Volterra 4d","title":"Lotka-Volterra 4d","text":"Modules = [GeometricProblems.LotkaVolterra4d]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"massless_charged_particle/#Massless-Charged-Particle","page":"Massless Charged Particle","title":"Massless Charged Particle","text":"","category":"section"},{"location":"massless_charged_particle/","page":"Massless Charged Particle","title":"Massless Charged Particle","text":"GeometricProblems.MasslessChargedParticle","category":"page"},{"location":"massless_charged_particle/#GeometricProblems.MasslessChargedParticle","page":"Massless Charged Particle","title":"GeometricProblems.MasslessChargedParticle","text":"Massless charged particle in 2D\n\nThe Lagrangian is given by\n\nL(x dotx) = A(x) cdot dotx - phi (x) \n\nwith magnetic vector potential\n\nA(x) = fracA_02 big( 1 + x_1^2 + x_2^2 big) beginpmatrix\n- x_2 \n+ x_1 \nendpmatrix \n\nelectrostatic potential\n\nphi(x) =  E_0  big( cos (x_1) + sin(x_2) big) \n\nand magnetic and electric fields\n\nbeginaligned\nB(x) = nabla times A(x) = A_0  (1 + 2 x_1^2 + 2 x_2^2)  \nE(x) = - nabla phi(x) = E_0  big( sin x_1  - cos x_2 big)^T \nendaligned\n\nThe Hamiltonian form of the equations of motion reads\n\ndotx = frac1B(x) beginpmatrix\nhphantom- 0  + 1 \n- 1  hphantom+ 0 \nendpmatrix nabla phi (x) \n\n\n\n\n\n","category":"module"},{"location":"massless_charged_particle/","page":"Massless Charged Particle","title":"Massless Charged Particle","text":"using Plots\nusing GeometricIntegrators\nusing GeometricProblems.MasslessChargedParticle\nusing GeometricProblems.MasslessChargedParticle: Δt, nt\n\node = massless_charged_particle_ode()\nsol = integrate(ode, getTableauGLRK(1), Δt, nt)\n\nplot_massless_charged_particle(sol, ode.parameters)\nsavefig(\"massless_charged_particle.svg\")\n\nnothing","category":"page"},{"location":"massless_charged_particle/","page":"Massless Charged Particle","title":"Massless Charged Particle","text":"(Image: )","category":"page"},{"location":"massless_charged_particle/","page":"Massless Charged Particle","title":"Massless Charged Particle","text":"Modules = [GeometricProblems.MasslessChargedParticle]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"massless_charged_particle/#GeometricProblems.MasslessChargedParticle.massless_charged_particle_idae","page":"Massless Charged Particle","title":"GeometricProblems.MasslessChargedParticle.massless_charged_particle_idae","text":"Creates an implicit DAE object for the massless charged particle in 2D.\n\n\n\n\n\n","category":"function"},{"location":"massless_charged_particle/#GeometricProblems.MasslessChargedParticle.massless_charged_particle_idae_spark","page":"Massless Charged Particle","title":"GeometricProblems.MasslessChargedParticle.massless_charged_particle_idae_spark","text":"Creates an implicit DAE object for the massless charged particle in 2D.\n\n\n\n\n\n","category":"function"},{"location":"massless_charged_particle/#GeometricProblems.MasslessChargedParticle.massless_charged_particle_iode","page":"Massless Charged Particle","title":"GeometricProblems.MasslessChargedParticle.massless_charged_particle_iode","text":"Creates an implicit ODE object for the massless charged particle in 2D.\n\n\n\n\n\n","category":"function"},{"location":"massless_charged_particle/#GeometricProblems.MasslessChargedParticle.massless_charged_particle_ode","page":"Massless Charged Particle","title":"GeometricProblems.MasslessChargedParticle.massless_charged_particle_ode","text":"Creates an ODE object for the massless charged particle in 2D.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_3d/#Lotka-Volterra-3d","page":"Lotka-Volterra 3d","title":"Lotka-Volterra 3d","text":"","category":"section"},{"location":"lotka_volterra_3d/","page":"Lotka-Volterra 3d","title":"Lotka-Volterra 3d","text":"GeometricProblems.LotkaVolterra3d","category":"page"},{"location":"lotka_volterra_3d/#GeometricProblems.LotkaVolterra3d","page":"Lotka-Volterra 3d","title":"GeometricProblems.LotkaVolterra3d","text":"Lotka-Volterra Model in 3D\n\nThe Lotka–Volterra model in 3D is an example of a Hamiltonian system with degenerate Poisson structure.\n\nThe equations read\n\nbeginaligned\ndotq_1 = q_1 (           -  a_2 q_2 + a_3 q_3 - b_2 + b_3 )  \ndotq_2 = q_2 ( hphantom- a_1 q_1 - a_3 q_3 + b_1 - b_3 )  \ndotq_3 = q_3 (           -  a_1 q_1 + a_2 q_2 - b_1 + b_2 )  \nendaligned\n\nwhich can be written in Poisson-form as\n\ndotq = P(q) nabla H(q) \n\nwith Poisson matrix\n\nP(q) = beginpmatrix\n            0  - q_1 q_2  hphantom- q_1 q_3 \nhphantom- q_1 q_2              0  - q_2 q_3 \n- q_1 q_3  hphantom- q_2 q_3  0             \nendpmatrix \n\nand Hamiltonian\n\nH(q) = a_1 q_1 + a_2 q_2 + a_3 q_3 + b_1 ln q_1 + b_2 ln q_2 + b_3 ln q_3 \n\nReferences:\n\nA. M. Perelomov. Selected topics on classical integrable systems, Troisième cycle de la physique, expanded version of lectures delivered in May 1995.\nYuri B. Suris. Integrable discretizations for lattice systems: local equations of motion and their Hamiltonian properties, Rev. Math. Phys. 11, pp. 727–822, 1999.\n\n\n\n\n\n","category":"module"},{"location":"lotka_volterra_3d/","page":"Lotka-Volterra 3d","title":"Lotka-Volterra 3d","text":"Modules = [GeometricProblems.LotkaVolterra3d]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"diagnostics/#Diagnostics","page":"Diagnostics","title":"Diagnostics","text":"","category":"section"},{"location":"diagnostics/","page":"Diagnostics","title":"Diagnostics","text":"Modules = [GeometricProblems.Diagnostics]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_error_drift-Union{Tuple{T}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{T,1}}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{T,1},Any}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_error_drift","text":"Computes the drift in an invariant error.\n\nArguments: (t::TimeSeries, invariant_error::DataSeries{T,1}, interval_length=100)\n\nThe time series of the solution is split into intervals of interval_length time steps. In each interval, the maximum of the absolute value of the invariant error is determined. Returns a tuple of a TimeSeries that holds the centers of all intervals and a 1d DataSeries that holds the maxima.\n\nThis is useful to detect drifts in invariants that are not preserved exactly but whose error is oscillating such as the energy error of Hamiltonian systems with symplectic integrators.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_invariant-Union{Tuple{T}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{var\"#s36\",N} where N where var\"#s36\"<:(AbstractArray{T,N} where N),Function}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_invariant","text":"Compute an invariant for the solution of an ODE or DAE system.\n\nArguments: (t::TimeSeries, q::DataSeries{T}, invariant::Function)\n\nThe invariant functions needs to take two arguments (t,q) and return the  corresponding value of the invariant.\n\nReturns a 1d DataSeries holding the time series of the invariant.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_invariant-Union{Tuple{T}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{var\"#s48\",N} where N where var\"#s48\"<:(AbstractArray{T,N} where N),GeometricIntegrators.Solutions.DataSeries{var\"#s49\",N} where N where var\"#s49\"<:(AbstractArray{T,N} where N),Function}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_invariant","text":"Compute an invariant for the solution of a partitioned ODE or DAE system.\n\nArguments: (t::TimeSeries, q::DataSeries{T}, p::DataSeries{T}, invariant::Function)\n\nThe invariant functions needs to take three arguments (t,q,p) and return the  corresponding value of the invariant.\n\nReturns a 1d DataSeries holding the time series of the invariant.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_invariant_error-Union{Tuple{T}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{T,N} where N,Function}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_invariant_error","text":"Compute the relative error of an invariant for the solution of an ODE or DAE system.\n\nArguments: (t::TimeSeries, q::DataSeries{T}, invariant::Function)\n\nThe invariant functions needs to take two arguments (t,q) and return the  corresponding value of the invariant.\n\nReturns a tuple of two 1d DataSeries holding the time series of the invariant and the relativ error, respectively.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_invariant_error-Union{Tuple{T}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{T,N} where N,GeometricIntegrators.Solutions.DataSeries{T,N} where N,Function}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_invariant_error","text":"Compute the relative error of an invariant for the solution of a partitioned ODE or DAE system.\n\nArguments: (t::TimeSeries, q::DataSeries{T}, p::DataSeries{T}, invariant::Function)\n\nThe invariant functions needs to take three arguments (t,q,p) and return the  corresponding value of the invariant.\n\nReturns a tuple of two 1d DataSeries holding the time series of the invariant and the relativ error, respectively.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_momentum_error-Union{Tuple{DT}, Tuple{GeometricIntegrators.Solutions.DataSeries{DT,N} where N,GeometricIntegrators.Solutions.DataSeries{DT,N} where N}} where DT","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_momentum_error","text":"Computes the difference of the momentum and the one-form of an implicit ODE or DAE system.\n\nArguments: (p::DataSeries{DT}, ϑ::DataSeries{DT})\n\nReturns a DataSeries similar to p holding the time series of the difference between p and ϑ.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_momentum_error-Union{Tuple{T}, Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries{T,N} where N,GeometricIntegrators.Solutions.DataSeries{T,N} where N,Function}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_momentum_error","text":"Computes the difference of the momentum and the one-form of an implicit ODE or DAE system.\n\nArguments: (t::TimeSeries, q::DataSeries{T}, p::DataSeries{T}, one_form::Function)\n\nThe one_form function needs to take three arguments (t,q,k) where k is the index of the one-form component.\n\nReturns a DataSeries similar to p holding the time series of the difference between the momentum and the one-form.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_one_form-Tuple{GeometricIntegrators.Solutions.TimeSeries,GeometricIntegrators.Solutions.DataSeries,Function}","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_one_form","text":"Compute the one-form (symplectic potential) for the solution of a Lagrangian system.\n\nArguments: (t::TimeSeries, q::DataSeries, one_form::Function)\n\nThe one_form function needs to take three arguments (t,q,k) where k is the index of the one-form component.\n\nReturns a DataSeries similar to q holding the time series of the one-form.\n\n\n\n\n\n","category":"method"},{"location":"diagnostics/#GeometricProblems.Diagnostics.compute_relative_error-Union{Tuple{GeometricIntegrators.Solutions.DataSeries{T,1}}, Tuple{T}} where T","page":"Diagnostics","title":"GeometricProblems.Diagnostics.compute_relative_error","text":"Takes a 1d DataSeries holding an invariant and computes the relative error (inv(t)-inv(0))/inv(0).\n\nReturns a 1d DataSeries similar to the argument holding the time series of the relativ errors.\n\n\n\n\n\n","category":"method"},{"location":"kepler_problem/#Kepler-Problem","page":"Kepler Problem","title":"Kepler Problem","text":"","category":"section"},{"location":"pendulum/#Mathematical-Pendulum","page":"Mathematical Pendulum","title":"Mathematical Pendulum","text":"","category":"section"},{"location":"pendulum/","page":"Mathematical Pendulum","title":"Mathematical Pendulum","text":"Modules = [GeometricProblems.Pendulum]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"releasenotes/#Release-Notes","page":"Release Notes","title":"Release Notes","text":"","category":"section"},{"location":"releasenotes/#.1.1","page":"Release Notes","title":"0.1.1","text":"","category":"section"},{"location":"releasenotes/#New-Features","page":"Release Notes","title":"New Features","text":"","category":"section"},{"location":"releasenotes/","page":"Release Notes","title":"Release Notes","text":"Poincaré invariants for Lotka-Volterra 2d model\nMore equation types for massless charged particle","category":"page"},{"location":"releasenotes/#Fixes","page":"Release Notes","title":"Fixes","text":"","category":"section"},{"location":"releasenotes/","page":"Release Notes","title":"Release Notes","text":"Fixes in general plot recipes","category":"page"},{"location":"releasenotes/#.1.0","page":"Release Notes","title":"0.1.0","text":"","category":"section"},{"location":"releasenotes/","page":"Release Notes","title":"Release Notes","text":"Initial release with equations for","category":"page"},{"location":"releasenotes/","page":"Release Notes","title":"Release Notes","text":"Exponential Growth,\nLorenz Attractor in 3D,\nLotka-Volterra in 2D,\nLotka-Volterra in 3D,\nLotka-Volterra in 4D,\nMassless Charged Particle,\nHarmonic Oscillator,\nMathematical Pendulum,\nPlanar Point Vortices.","category":"page"},{"location":"nonlinear_oscillators/#Nonlinear-Oscillators","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"","category":"section"},{"location":"nonlinear_oscillators/#Duffing-Oscillator","page":"Nonlinear Oscillators","title":"Duffing Oscillator","text":"","category":"section"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"GeometricProblems.DuffingOscillator","category":"page"},{"location":"nonlinear_oscillators/#GeometricProblems.DuffingOscillator","page":"Nonlinear Oscillators","title":"GeometricProblems.DuffingOscillator","text":"\n\n\n\n","category":"module"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"Modules = [GeometricProblems.DuffingOscillator]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"nonlinear_oscillators/#Lennard-Jones-Oscillator","page":"Nonlinear Oscillators","title":"Lennard-Jones Oscillator","text":"","category":"section"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"GeometricProblems.LennardJonesOscillator","category":"page"},{"location":"nonlinear_oscillators/#GeometricProblems.LennardJonesOscillator","page":"Nonlinear Oscillators","title":"GeometricProblems.LennardJonesOscillator","text":"\n\n\n\n","category":"module"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"Modules = [GeometricProblems.LennardJonesOscillator]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"nonlinear_oscillators/#Mathews-Lakshmanan-Oscillator","page":"Nonlinear Oscillators","title":"Mathews-Lakshmanan Oscillator","text":"","category":"section"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"GeometricProblems.MathewsLakshmananOscillator","category":"page"},{"location":"nonlinear_oscillators/#GeometricProblems.MathewsLakshmananOscillator","page":"Nonlinear Oscillators","title":"GeometricProblems.MathewsLakshmananOscillator","text":"\n\n\n\n","category":"module"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"Modules = [GeometricProblems.MathewsLakshmananOscillator]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"nonlinear_oscillators/#Morse-Oscillator","page":"Nonlinear Oscillators","title":"Morse Oscillator","text":"","category":"section"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"GeometricProblems.MorseOscillator","category":"page"},{"location":"nonlinear_oscillators/#GeometricProblems.MorseOscillator","page":"Nonlinear Oscillators","title":"GeometricProblems.MorseOscillator","text":"\n\n\n\n","category":"module"},{"location":"nonlinear_oscillators/","page":"Nonlinear Oscillators","title":"Nonlinear Oscillators","text":"Modules = [GeometricProblems.MorseOscillator]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"henon_heiles/#Henon-Heiles-System","page":"Hénon-Heiles System","title":"Hénon-Heiles System","text":"","category":"section"},{"location":"lotka_volterra_2d/#Lotka-Volterra-2d","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"","category":"section"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"Lotka–Volterra models are used in mathematical biology for modelling population dynamics of animal species, as well as many other fields where predator-prey and similar models appear. The dynamics of the growth of two interacting species can be modelled by the following noncanonical Hamiltonian system","category":"page"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"dotq = beginpmatrix\nhphantom- 0  + q_1 q_2 \n- q_1 q_2  hphantom+ 0 \nendpmatrix\nnabla H (q) \nquad\nH (q) = a_1  q_1 + a_2  q_2 + b_1  log q_1 + b_2  log q_2 ","category":"page"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"using Plots\nusing GeometricIntegrators\nusing GeometricProblems.LotkaVolterra2d\nusing GeometricProblems.LotkaVolterra2d: Δt, nt\nusing GeometricProblems.LotkaVolterra2dPlots\n\node = lotka_volterra_2d_ode()\nsol = integrate(ode, getTableauGLRK(1), Δt, nt)\n\nplot_lotka_volterra_2d(sol, ode)\nsavefig(\"lotka_volterra_2d.svg\")\n\nnothing","category":"page"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"(Image: )","category":"page"},{"location":"lotka_volterra_2d/#Sub-models","page":"Lotka-Volterra 2d","title":"Sub-models","text":"","category":"section"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"The Euler-Lagrange equations of the Lotka-Volterra model can be obtained from different Lagrangians, which are connected by gauge transformations. Although they all lead to the same equations of motion, they lead to different variational integrators. Therefore different models based on different Lagrangians are implemented.","category":"page"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"GeometricProblems.LotkaVolterra2d","category":"page"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d","text":"Lotka-Volterra model in 2D\n\nbeginaligned\nL (q dotq) = bigg( q_2 + fraclog q_2q_1 bigg)  dotq_1 + q_1  dotq_2 - H(q)  \nH(q) = a_1  q_1 + a_2  q_2 + b_1  log q_1 + b_2  log q_2\nendaligned\n\n\n\n\n\n","category":"module"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"GeometricProblems.LotkaVolterra2dSymmetric","category":"page"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dSymmetric","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dSymmetric","text":"Lotka-Volterra model in 2D with symmetric Lagrangian\n\nbeginaligned\nL (q dotq) = frac12 fraclog q_2q_1  dotq_1 - frac12 fraclog q_1q_2  dotq_2 - H(q)  \nH(q) = a_1  q_1 + a_2  q_2 + b_1  log q_1 + b_2  log q_2\nendaligned\n\nThis Lagrangian is a slight generalization of Equation (5) in José Fernández-Núñez, Lagrangian Structure of the Two-Dimensional Lotka-Volterra System, International Journal of Theoretical Physics, Vol. 37, No. 9, pp. 2457-2462, 1998.\n\n\n\n\n\n","category":"module"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"GeometricProblems.LotkaVolterra2dSingular","category":"page"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dSingular","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dSingular","text":"Lotka-Volterra model in 2D with \"singular\" Lagrangian\n\nbeginaligned\nL (q dotq) = fraclog q_2q_1  dotq_1 - H(q)  \nH(q) = a_1  q_1 + a_2  q_2 + b_1  log q_1 + b_2  log q_2\nendaligned\n\nThis Lagrangian is equivalent to the Lagrangian of the symmetric Lotka-Volterra model. It differs only by a gauge transformation with the term - 12  d(log(q_1) log(q_2))dt. It leads to the same Euler-Lagrange equations but to a different variational integrator.\n\n\n\n\n\n","category":"module"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"GeometricProblems.LotkaVolterra2dGauge","category":"page"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dGauge","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dGauge","text":"Lotka-Volterra model in 2D with symmetric Lagrangian with gauge term\n\nbeginaligned\nL (q dotq) = bigg( q_2 + frac12 fraclog q_2q_1 bigg)  dotq_1 + bigg( q_1 - frac12 fraclog q_1q_2 bigg)  dotq_2 - H(q)  \nH(q) = a_1  q_1 + a_2  q_2 + b_1  log q_1 + b_2  log q_2\nendaligned\n\nThis Lagrangian is equivalent to the Lagrangian of the symmetric Lotka-Volterra model. It differs only by a gauge transformation with the term d(q_1 q_2)dt. It leads to the same Euler-Lagrange equations but to a different variational integrator.\n\n\n\n\n\n","category":"module"},{"location":"lotka_volterra_2d/#User-Functions","page":"Lotka-Volterra 2d","title":"User Functions","text":"","category":"section"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"Modules = [GeometricProblems.LotkaVolterra2d]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_dae","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_dae","text":"Creates a DAE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_dg","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_dg","text":"Creates an implicit ODE object for the Lotka-Volterra 2D model for use with DG integrators.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_hdae","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_hdae","text":"Creates a Hamiltonian DAE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_hode","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_hode","text":"Creates a Hamiltonian ODE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_idae","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_idae","text":"Creates an implicit DAE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_idae_spark","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_idae_spark","text":"Creates an implicit DAE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_iode","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_iode","text":"Creates an implicit ODE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_ldae","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_ldae","text":"Creates a variational DAE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_lode","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_lode","text":"Creates a variational ODE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_ode","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_ode","text":"Creates an ODE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_pdae","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_pdae","text":"Creates a partitioned DAE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_pode","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_pode","text":"Creates a partitioned ODE object for the Lotka-Volterra 2D model.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_slrk","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2d.lotka_volterra_2d_slrk","text":"Creates a variational DAE object for the Lotka-Volterra 2D model for use with SLRK integrators.\n\n\n\n\n\n","category":"function"},{"location":"lotka_volterra_2d/#Plotting-Functions","page":"Lotka-Volterra 2d","title":"Plotting Functions","text":"","category":"section"},{"location":"lotka_volterra_2d/","page":"Lotka-Volterra 2d","title":"Lotka-Volterra 2d","text":"Modules = [GeometricProblems.LotkaVolterra2dPlots]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d!-Tuple","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d!","text":"Plots the solution of a 2D Lotka-Volterra model together with the energy error.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nxlims=:auto: xlims for solution plot\nylims=:auto: ylims for solution plot\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d!-Tuple{RecipesBase.AbstractPlot,Vararg{Any,N} where N}","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d!","text":"Plots the solution of a 2D Lotka-Volterra model together with the energy error.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nxlims=:auto: xlims for solution plot\nylims=:auto: ylims for solution plot\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d-Tuple","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d","text":"Plots the solution of a 2D Lotka-Volterra model together with the energy error.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nxlims=:auto: xlims for solution plot\nylims=:auto: ylims for solution plot\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_solution!-Tuple","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_solution!","text":"Plots the solution of a 2D Lotka-Volterra model.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nxlims=:auto: xlims for solution plot\nylims=:auto: ylims for solution plot\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_solution!-Tuple{RecipesBase.AbstractPlot,Vararg{Any,N} where N}","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_solution!","text":"Plots the solution of a 2D Lotka-Volterra model.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nxlims=:auto: xlims for solution plot\nylims=:auto: ylims for solution plot\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_solution-Tuple","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_solution","text":"Plots the solution of a 2D Lotka-Volterra model.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nxlims=:auto: xlims for solution plot\nylims=:auto: ylims for solution plot\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_traces!-Tuple","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_traces!","text":"Plots time traces of the solution of a 2D Lotka-Volterra model and its energy error.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_traces!-Tuple{RecipesBase.AbstractPlot,Vararg{Any,N} where N}","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_traces!","text":"Plots time traces of the solution of a 2D Lotka-Volterra model and its energy error.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"lotka_volterra_2d/#GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_traces-Tuple","page":"Lotka-Volterra 2d","title":"GeometricProblems.LotkaVolterra2dPlots.plot_lotka_volterra_2d_traces","text":"Plots time traces of the solution of a 2D Lotka-Volterra model and its energy error.\n\nArguments:\n\nsol <: Solution\nequ <: Equation\n\nKeyword aguments:\n\nnplot=1: plot every nplotth time step\nlatex=true: use LaTeX guides\n\n\n\n\n\n","category":"method"},{"location":"point_vortices/#Planar-Point-Vortices","page":"Point Vortices","title":"Planar Point Vortices","text":"","category":"section"},{"location":"point_vortices/","page":"Point Vortices","title":"Point Vortices","text":"Modules = [GeometricProblems.PointVortices]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"inner_solar_system/#Inner-Solar-System","page":"Inner Solar System","title":"Inner Solar System","text":"","category":"section"},{"location":"outer_solar_system/#Outer-Solar-System","page":"Outer Solar System","title":"Outer Solar System","text":"","category":"section"},{"location":"exponential_growth/#Exponential-Growth","page":"Exponential Growth","title":"Exponential Growth","text":"","category":"section"},{"location":"exponential_growth/","page":"Exponential Growth","title":"Exponential Growth","text":"Modules = [GeometricProblems.ExponentialGrowth]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"harmonic_oscillator/#Harmonic-Oscillator","page":"Harmonic Oscillator","title":"Harmonic Oscillator","text":"","category":"section"},{"location":"harmonic_oscillator/","page":"Harmonic Oscillator","title":"Harmonic Oscillator","text":"Modules = [GeometricProblems.HarmonicOscillator]\nOrder   = [:constant, :type, :macro, :function]","category":"page"},{"location":"#GeometricProblems.jl","page":"Home","title":"GeometricProblems.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"GeometricProblems.jl is a collection of ODEs and DAEs with interesting geometric structures together with useful diagnostics and plotting tools.","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: PkgEval Status) (Image: CI) (Image: Build Status) (Image: Coverage Status) (Image: codecov) (Image: DOI)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Typical structures are","category":"page"},{"location":"","page":"Home","title":"Home","text":"Variational structure, i.e., the equations can defined in terms of a Lagrangian function and be obtained from an action principle;\nHamiltonian structure, i.e., the equations can be defined in terms of a Hamiltonian function together with a symplectic or Poisson matrix;\nInvariants, i.e., the equations have symmetries and associated conservation laws;\nVolume preservation, i.e., the flow of the equations is divergence-free.","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n\"diagnostics.md\",\n\"exponential_growth.md\",\n\"henon_heiles.md\",\n\"kepler_problem.md\",\n\"lorenz_attractor.md\",\n\"lotka_volterra_2d.md\",\n\"lotka_volterra_3d.md\",\n\"lotka_volterra_4d.md\",\n\"massless_charged_particle.md\",\n\"harmonic_oscillator.md\",\n\"nonlinear_oscillators.md\",\n\"pendulum.md\",\n\"double_pendulum.md\",\n\"point_vortices.md\",\n\"inner_solar_system.md\",\n\"outer_solar_system.md\",\n]\nDepth = 1","category":"page"},{"location":"#References","page":"Home","title":"References","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you use the figures or implementations provided here, please consider citing GeometricIntegrators.jl as","category":"page"},{"location":"","page":"Home","title":"Home","text":"@misc{Kraus:2020:GeometricIntegratorsRepo,\n  title={GeometricIntegrators.jl: Geometric Numerical Integration in Julia},\n  author={Kraus, Michael},\n  year={2020},\n  howpublished={\\url{https://github.com/JuliaGNI/GeometricIntegrators.jl}},\n  doi={10.5281/zenodo.3648325}\n}","category":"page"},{"location":"","page":"Home","title":"Home","text":"as well as this repository as","category":"page"},{"location":"","page":"Home","title":"Home","text":"@misc{Kraus:2020:GeometricProblemsRepo,\n  title={GeometricProblems.jl: Collection of Differential Equations with Geometric Structure.},\n  author={Kraus, Michael},\n  year={2020},\n  howpublished={\\url{https://github.com/JuliaGNI/GeometricProblems.jl}},\n  doi={10.5281/zenodo.4285904}\n}","category":"page"},{"location":"#Figure-License","page":"Home","title":"Figure License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Copyright (c) Michael Kraus <michael.kraus@ipp.mpg.de>All figures are licensed under the Creative Commons CC BY-NC-SA 4.0 License.","category":"page"},{"location":"#Software-License","page":"Home","title":"Software License","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Copyright (c) Michael Kraus <michael.kraus@ipp.mpg.de>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"lorenz_attractor/#Lorenz-Attractor-in-3d","page":"Lorenz Attractor","title":"Lorenz Attractor in 3d","text":"","category":"section"},{"location":"lorenz_attractor/","page":"Lorenz Attractor","title":"Lorenz Attractor","text":"Modules = [GeometricProblems.LorenzAttractor]\nOrder   = [:constant, :type, :macro, :function]","category":"page"}]
}
