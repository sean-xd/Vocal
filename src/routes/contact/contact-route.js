routes["/contact/"] = {
  dom: t("#contact")([
    t(".contact-title")("Contact Us"),
    t("input", {className: "contact-name", type: "text", placeholder: "Name"})(),
    t("input", {className: "contact-company", type: "text", placeholder: "Company"})(),
    t("input", {className: "contact-email", type: "email", placeholder: "Email"})(),
    t("input", {className: "contact-phone", type: "tel", placeholder: "Phone"})(),
    t("textarea", {className: "contact-message", placeholder: "Write your message here..."})(),
    t("button")("Submit")
  ])
};