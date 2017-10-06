routes["/"] = {
  dom: t("#home")(articles.map(obj => t("article")([
    // t(".article-authors")(obj.authors.map((name, i) => t("img", {src: contributors.filter(e => e.name === obj.authors[i])[0].image})()))    
    t(".article-authors")([
      t("img", {src: contributors.filter(e => e.name === obj.authors[0])[0].image})()
    ]),
    t(".article-text")([
      t(".article-date")(obj.date),
      t("a", {href: `/articles/${obj.route}/`, className: "article-title", onclick: router})(obj.title),
      t(".article-blurb")(obj.blurb),
      t(".article-tags")(obj.tags.map(tag => t(".article-tag")(tag)))
    ])
  ])))
};