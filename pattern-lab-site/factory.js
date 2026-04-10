class User {
  constructor(role) {
    this.role = role;
  }
}

class UserFactory {
  static create(type) {
    if (type === "admin") return new User("admin");
    if (type === "guest") return new User("guest");
    return new User("default");
  }
}