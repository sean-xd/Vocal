routes["/inquiry/"] = {
  dom: t("#inquiry", {className: "page"})([
    t("h1")("For Business Inquiries"),
    t(".inquiry-form")([
      t("label")("Name *"),
      t("input", {className: "inquiry-name", type: "text", required: true})(),
      t("label")("Company"),
      t("input", {className: "inquiry-company", type: "text"})(),
      t("label")("Email *"),
      t("input", {className: "inquiry-email", type: "email", required: true})(),
      t("label")("Phone"),
      t("input", {className: "inquiry-phone", type: "tel"})(),
      t("label")("Message *"),
      t("textarea", {className: "inquiry-message", placeholder: "Write your message here..."})(),
      t("button")("Send Message")
    ])
  ])
};