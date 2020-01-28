__precompile__()

module GeometricProblems

    export ExponentialGrowth
    export HarmonicOscillator
    export LorenzAttractor
    export LotkaVolterra2d
    export LotkaVolterra2dsingular
    export LotkaVolterra3d
    export Pendulum
    export PointVortices


    include("exponential_growth.jl")
    include("harmonic_oscillator.jl")
    include("lorenz_attractor.jl")
    include("lotka_volterra_2d.jl")
    include("lotka_volterra_2d_singular.jl")
    include("lotka_volterra_3d.jl")
    include("pendulum.jl")
    include("point_vortices.jl")

end
