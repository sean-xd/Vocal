routes["/admin/"] = {
  dom: t("#admin")([
    t(".admin-title")("Admin Login"),
    t("input", {id: "admin-user", type: "text", placeholder: "user"})(),
    t("input", {id: "admin-pass", type: "password", placeholder: "password"})(),
    t("button")("Log In")
  ])
};