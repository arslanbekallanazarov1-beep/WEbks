// Factory Pattern
class User {
  constructor(role) {
    this.role = role;
  }
}

class UserFactory {
  static createUser(type) {
    if (type === "admin") return new User("admin");
    if (type === "guest") return new User("guest");
    return new User("default");
  }
}

function createUser() {
  const user = UserFactory.createUser("admin");
  document.getElementById("output").innerText =
    "Создан пользователь с ролью: " + user.role;
}