tags.forEach(tag => {
  var route = tag.toLowerCase().split(" ").join("-"),
    taggedArticles = articles.filter(obj => obj.tags.indexOf(tag) > -1);
  el(".tags")[0].appendChild(t("a", {href: `/tags/${route}/`, onclick: router})(tag));
  routes[`/tags/${route}/`] = {
    dom: t("#tag", {className: "page"})([t("h1")(`Tag: ${tag}`)].concat(
      taggedArticles.map(createArticle())
    ))
  };
});