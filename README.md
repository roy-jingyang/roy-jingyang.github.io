Prerequisites (Ruby + Bundle)
-----------------------------
1. Download and install a Ruby+Devkit version
NOTE 20240912: GitHub pages now supports Ruby 3.3.4, but still limits support to
jekyll packages including jekyll-scholar

2. Navigate to this folder. Install bundler and gem

NOTE 20240220: Run `gem uninstall -aIx` to uninstall all gems without prompt.
This is useful for a fresh start over.

`bundle install`

3. Test installation status by checking jekyll version 
`jekyll -v`

Test site locally
-----------------
`bundle exec jekyll serve --livereload`

- Serves at `http://127.0.0.1:4000` by default (pass `--port 4444` etc. if
  that's taken).
- `--livereload` auto-refreshes the browser on file changes, so leave it
  running in a terminal while editing `_layouts`, `_includes`, `_sass`,
  `_pages`, etc.
- `Ctrl+C` to stop.

Build site locally
------------------
`bundle exec jekyll build`

Outputs to `_site/`. This is a build artifact — it's gitignored and should
never be committed. Only needed for a one-off build without serving; day-to-day
editing should use `jekyll serve` above.

Commit and deploy your changes
-------------------------------
1. Edit and preview with `jekyll serve` as above.
2. `git add <files>`, `git commit`, then `git push origin source`.
3. Pushing to `source` triggers the GitHub Actions workflow
   (`.github/workflows/publish.yml`), which checks out the repo, installs
   gems, runs `bundle exec jekyll build` itself, and publishes the resulting
   `_site` to `gh-pages`.
4. Check the Actions tab on GitHub to confirm the build/deploy succeeded.

No local build or `_site` commit step is needed — CI does the build.

Deployment to GitHub Pages
--------------------------

This is done by setting up two remote branches: source and gh-pages.

In GitHub repo settings, option "Deploy from a branch" is used on branch
gh-pages, such that any update to the branch will trigger a deployment of the
site.

A GitHub Actions workflow (`.github/workflows/publish.yml`) runs on every push
to `source`: it builds the Jekyll site with `bundle exec jekyll build` and
publishes the resulting `_site` folder to `gh-pages`, which triggers the
actual deployment. `_site` is a build artifact and is not committed to
`source`.

Adding content
---------------

**A news item** — add a file under `_news/`, e.g. `_news/202607.md`:

```
---
layout: post
date: Jul 2026
inline: true
related_posts: false
pinned: false
---

Your news content here, can use markdown.
```

- `date` is shown as `YYYY/MM` in the "What's new" list.
- `inline: true` renders the content directly in the list; set it to
  `false` and add a `title:` field instead to link out to a full post page.
- `pinned: true` keeps the item pinned to the top of the list (see
  `_news/pinned.md` for an example).
- Only the `news_limit` most recent items (set in `_config.yml`) show on the
  homepage.

**A project** — add a file under `_projects/`, e.g. `_projects/my_project.md`:

```
---
layout: page
permalink: /projects/my_project
title: Project Title
description: >
  One or two sentence summary shown on the projects index page.
nav: false
is_index: true
importance: 50
---

Full project write-up in markdown goes here.
```

- `importance` controls sort order on `/projects/` (lower = higher up).
- Add `redirect: <external URL>` instead of body content if the project
  just links out elsewhere (see `_projects/crc_green_bean.md`).

**A publication** — add a BibTeX entry to `_bibliography/publications.bib`.
Standard BibTeX fields (`author`, `title`, `booktitle`/`journal`, `year`,
`pages`, `doi`, etc.) render automatically via jekyll-scholar. A few extra
fields the templates look for:

- `selected={true}` — shows the entry in the homepage's "Selected papers"
  list (`_layouts/bib_short.html`).
- `abstract={...}` — adds a toggleable "Abs" link on `/publications/`.
- `pdf=`, `arxiv=`, `html=`, `code=`, `demo=`, `slides=`, `poster=`,
  `supp=` — each adds a corresponding link if present; omit any that don't
  apply.
- `accepted={true}` — adds an "(accepted)" label, for in-press work without
  a DOI yet.
