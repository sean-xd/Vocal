routes["/"] = {
  dom: t("#home", {className: "page"})(articles.map(createArticle()))
};