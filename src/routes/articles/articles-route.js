articles.forEach(obj => {
  routes[`/articles/${obj.route}/`] = {
    dom: t("#article", {className: "page"})(createArticle(1)(obj))
  };
});

function createArticle(isOpen){
  return obj => t("article")([  
    t(".article-authors")([
      t("img", {src: contributors.filter(e => e.name === obj.authors[0])[0].image})()
    ]),
    t(".article-text")([
      t(".article-date")(obj.date),
      t("a", {href: `/articles/${obj.route}/`, className: "article-title", onclick: router})(obj.title)
    ].concat(isOpen ? articleParas(obj) : articleBlurb(obj)))
  ]);
}

function articleBlurb(obj){
  var blurb = t(".article-blurb")(obj.blurb);
  blurb.innerHTML = blurb.innerHTML;
  return [
    blurb,
    t(".article-tags")(obj.tags.map(createTag).concat([
      t("a", {className: "article-readmore", href: `/articles/${obj.route}/`, onclick: router})("Read More >")
    ]))
  ];
}

function articleParas(obj){
  return [
    t(".article-paras")(obj.text.map(para => t(".article-para")(para))),
    t(".article-tags")(obj.tags.map(createTag))
  ];
}

function createTag(tag){
  var route = tag.toLowerCase().split(" ").join("-");
  return t("a", {href: `/tags/${route}/`, onclick: router, className: "article-tag"})(tag);
}