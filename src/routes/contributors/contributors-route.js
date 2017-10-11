routes["/contributors/"] = {
  dom: t("#contributors", {className: "page"})([
      t("h1")("Our Contributors")
    ].concat(contributors.map((obj, i) => t("div", {className: `member member-${i + 1}`, onclick: openMember})([
      t("img", {className: "member-image", src: obj.image})(),
      t(".member-info")([
        t(".member-name")(obj.name),
        t(".member-title")(obj.title),
        t(".member-email")(obj.email),
        t(".member-phone")(obj.phone)
      ]),
      t(".member-contact")([
        t(".member-position")(obj.position),
        t(".member-location")(obj.location)
      ]),
      t(".member-bio")(obj.bio.map(para => t("p")(para)))
    ])))
  )
};

function openMember(e, target){
  document.body.classList.toggle("open-member");
  target.classList.toggle("member-open");
}