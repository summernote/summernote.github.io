# Summernote homepage

## For development

Homepage is powered by jekyll. For more details about jekyll please visit [jekyll site](http://jekyllrb.com/)

```bash
# install bower, you might have this installed already
npm install -g bower

# install libraries
bower install

# install jekyll
gem install jekyll

# run local server on 4000 port
jekyll s
```

## For deployment on gh-pages

```
# install gulp as global
npm install -g gulp

# install gulp plugins
npm install

# deploy on gh-pages
gulp deploy
```

`gulp deploy` update all files of `dist` folder into `gh-pages` branch
and update it onto remote git repository(`gh-pages` branch of `origin` remote)
