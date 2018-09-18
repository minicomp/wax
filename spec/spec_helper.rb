require 'rspec'
require 'selenium/webdriver'
require 'capybara/dsl'
require 'rack/jekyll'
require 'rack/test'

RSpec.configure do |config|
  config.include Capybara::DSL

  Capybara.register_driver :firefox_headless do |app|
    options = ::Selenium::WebDriver::Firefox::Options.new
    options.args << '--headless'
    Capybara::Selenium::Driver.new(app, browser: :firefox, options: options)
  end

  Capybara.javascript_driver = :firefox_headless
  Capybara.current_driver = Capybara.javascript_driver
  Capybara.app = Rack::Jekyll.new(force_build: false)
  Capybara.server = :webrick
end
