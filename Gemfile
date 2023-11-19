source 'https://rubygems.org'

# NOTE 20231118: GitHub Pages does not support latest Ruby; USE Ruby 2.7.4 (https://pages.github.com/versions/)
# NOTE 20231118: also run "gem install bundler:2.4.22" post Ruby 2.7.4 installation
group :jekyll_plugins do
    gem 'github-pages'
    gem 'jekyll'
    gem 'jekyll-email-protect'
    gem 'jekyll-paginate-v2'
    gem 'jekyll-scholar'
    gem 'jemoji'
    gem 'unicode_utils'
    gem 'jekyll-seo-tag'
end

gem "webrick", "~> 1.8"

# NOTE 20230731: add the following to resolve dependency conflicts on MS Windows 10
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
