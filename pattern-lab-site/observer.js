class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const state = new Subject();

// подписчик UI
state.subscribe((data) => {
  const el = document.getElementById("output");
  if (el) el.innerText = data;
});