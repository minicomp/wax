# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'wax_theme'
  spec.version       = '1.0.0'
  spec.authors       = ['mnyrop']
  spec.email         = ['m.nyrop@columbia.edu']
  spec.summary       = 'Jekyll gem theme for Minicomp/Wax'
  spec.homepage      = 'https://github.com/minicomp/wax'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency 'jekyll', '~> 3.8'
  spec.add_runtime_dependency 'wax_tasks', '>= 1.0.1', '<= 1.1.0'

  spec.add_development_dependency 'rake', '~> 12.0'
  spec.add_development_dependency 'html-proofer', '~> 3.10'
end
