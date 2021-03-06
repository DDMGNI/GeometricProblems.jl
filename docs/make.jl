using Documenter
using GeometricProblems


makedocs(
    sitename = "GeometricProblems.jl",
    format = Documenter.HTML(prettyurls = get(ENV, "CI", nothing) == "true"),
    pages = ["Home" => "index.md",
             "Diagnostics"               => "diagnostics.md",
             "Exponential Growth"        => "exponential_growth.md",
             "Hénon-Heiles System"       => "henon_heiles.md",
             "Kepler Problem"            => "kepler_problem.md",
             "Lorenz Attractor"          => "lorenz_attractor.md",
             "Lotka-Volterra 2d"         => "lotka_volterra_2d.md",
             "Lotka-Volterra 3d"         => "lotka_volterra_3d.md",
             "Lotka-Volterra 4d"         => "lotka_volterra_4d.md",
             "Massless Charged Particle" => "massless_charged_particle.md",
             "Harmonic Oscillator"       => "harmonic_oscillator.md",
             "Nonlinear Oscillators"     => "nonlinear_oscillators.md",
             "Mathematical Pendulum"     => "pendulum.md",
             "Double Pendulum"           => "double_pendulum.md",
             "Point Vortices"            => "point_vortices.md",
             "Inner Solar System"        => "inner_solar_system.md",
             "Outer Solar System"        => "outer_solar_system.md",
            ]
)

deploydocs(
    repo   = "github.com/JuliaGNI/GeometricProblems.jl",
)
