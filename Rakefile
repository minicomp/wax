require 'html-proofer'
require 'yaml'

@config  = YAML.load_file '_config.yml'
@baseurl = ENV['BASEURL'] || @config.dig('baseurl')

namespace :wax do
  desc 'run default html-proofer tests'
  task :test do
    sh "rm -rf _site .jekyll*"
    sh "bundle exec jekyll build -b '#{@baseurl}' -d '_site#{@baseurl}'"
    opts = {
      check_external_hash: true,
      allow_hash_href: true,
      check_html: true,
      disable_external: true,
      empty_alt_ignore: true,
      assume_extension: true,
      only_4xx: true
    }
    HTMLProofer.check_directory('./_site', opts).run
  end
end

spec = Gem::Specification.find_by_name 'wax_tasks'
Dir.glob("#{spec.gem_dir}/lib/tasks/*.rake").each { |r| load r }
