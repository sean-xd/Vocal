articles.forEach(obj => {
  routes[`/articles/${obj.route}/`] = {
    dom: t("#article")([
      t("article")([
        t(".article-authors")([
          t("img", {src: contributors.filter(e => e.name === obj.authors[0])[0].image})()
        ]),
        t(".article-text")([
          t(".article-date")(obj.date),
          t("a", {className: "article-title", href:"/", onclick: router})(obj.title),
          t(".article-paras")(obj.text.map(para => t(".article-para")(para))),
          t(".article-tags")(obj.tags.map(tag => t(".article-tag")(tag)))
        ])
      ]),
      t(".disclaimer")([
        t(".disc-text")([t("strong")("About Alliant Executive Risk")]),
        t(".disc-text")("The Executive Risk Group of Alliant Insurance Services is a full-service, product-driven specialization that delivers industry-leading liability and insurance expertise combined with powerful market leverage. The result is the best possible coverage at the best possible price."),
        t(".disc-text")([t("strong")("About Alliant")]),
        t(".disc-text")("Alliant is the nation’s largest specialty insurance brokerage firm, providing risk management, insurance, and consulting services that safeguard the physical and financial health of thousands of clients throughout the U.S."),
        t("a", {href: "http://www.alliant.com/"})("www.alliant.com")
      ])
    ])
  };
});