source 'https://rubygems.org'

# NOTE 20130731: GitHub Pages does not support latest Ruby; using Ruby 2.7.4
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

# Added 20130731 to resolve dependency conflicts on MS Windows 10
gem 'wdm', '>= 0.1.0' if Gem.win_platform?
gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
