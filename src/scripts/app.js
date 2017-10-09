if(window.location.host === "executiverisk.xyz") router();
else if(window.location.host === "localhost:3000") router();
else {
  while(document.head.firstChild) document.head.removeChild(document.head.firstChild);
  while(document.body.firstChild) document.body.removeChild(document.body.firstChild);
  var first = document.createElement("div"),
    second = document.createElement("div"),
    third = document.createElement("a");
  first.textContent = `Hello, this server is being illegitimately routed to by ${window.location.hostname}.`;
  second.textContent = "Please visit the correct domain at:";
  third.href = "http://executiverisk.xyz";
  third.textContent = "http://executiverisk.xyz";
  document.body.appendChild(first);
  document.body.appendChild(second);
  document.body.appendChild(third);
}

function router(e){
  if(e) e.preventDefault();
  var route = e ? e.target.getAttribute("href") : document.location.pathname;
  if(route === currentRoute) return;
  window.history[e ? "pushState" : "replaceState"]({route}, "", route);
  Object.keys(routes).forEach(key => {
    var page = isArticle(key) ? "articles" : (key.replace(/\//g, "") || "home"),
      isKeyRoute = isArticle(key) && isArticle(route) || key === route;
    document.body.classList[isKeyRoute ? "add" : "remove"](`${page}-page`);
  });
  if(dom.main.firstChild) dom.main.removeChild(dom.main.firstChild);
  dom.main.appendChild(routes[route].dom);
  window.scrollTo(0,0);
  currentRoute = route;
}

window.addEventListener("popstate", e => router());

setTimeout(() => document.body.classList.add("font-loaded"), 300);

function isArticle(str){
  return str.indexOf("article") > -1;
}