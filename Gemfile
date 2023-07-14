# frozen_string_literal: true

source 'https://rubygems.org'
gemspec

gem 'wax_tasks', github: 'minicomp/wax_tasks', branch: 'development'
gem 'wax_iiif', github: 'minicomp/wax_iiif', branch: 'development'

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end