class AppConfig {
  constructor() {
    if (AppConfig.instance) {
      return AppConfig.instance;
    }

    this.theme = "light";
    this.language = "ru";

    AppConfig.instance = this;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  getTheme() {
    return this.theme;
  }
}