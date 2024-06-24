import { Express } from "express";

class App {
  private static server: Express;

  constructor(app: Express) {
    App.server = app;
  }

  public getApp() {
    return App.server;
  }
}

export default App;
