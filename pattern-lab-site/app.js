// ===== FACTORY =====
function createUser() {
  const user = UserFactory.create("admin");

  document.getElementById("output").innerText =
    "Создан пользователь: " + user.role;
}

// ===== OBSERVER =====
function updateState() {
  state.notify("Observer: состояние обновлено!");
}

// ===== SINGLETON =====
function testSingleton() {
  const a = new AppConfig();
  const b = new AppConfig();

  console.log("Singleton check:", a === b); // true
  alert("Singleton: " + (a === b));
}

// ===== STRATEGY (демо) =====
function testStrategy() {
  console.log(executePayment("card", 1000));
}