routes["/contact/"] = {
  dom: t("#contact")([
    t(".contact-title")("Contact Us"),
    t(".contact-form")([
      t("label")("Name"),
      t("input", {className: "contact-name", type: "text"})(),
      t("label")("Company"),
      t("input", {className: "contact-company", type: "text"})(),
      t("label")("Email"),
      t("input", {className: "contact-email", type: "email"})(),
      t("label")("Phone"),
      t("input", {className: "contact-phone", type: "tel"})(),
      t("label")("Message"),
      t("textarea", {className: "contact-message", placeholder: "Write your message here..."})(),
      t("button")("Send Message")
    ])
  ])
};