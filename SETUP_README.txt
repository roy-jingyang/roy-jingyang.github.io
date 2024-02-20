Fresh install
-------------

1. Download and install a Ruby+Devkit version

# NOTE 20231118: GitHub Pages does not support latest Ruby; USE Ruby 2.7.4
(https://pages.github.com/versions/) 
# NOTE 20240220: Refer to https://pages.github.com/versions/

2. Navigate to this folder. Install bundler and gem

# NOTE 20231118: also run "gem install bundler:2.4.22" post Ruby 2.7.4
installation
# NOTE 20240220: Run `gem uninstall -aIx` to uninstall all gems without prompt.
This is useful for a fresh start over.

3. Run `bundle install`

4. Test using `jekyll -v`

# NOTE 20240220: In case of errors about eventmachine, try running `gem install eventmachine -v 1.2.7`
