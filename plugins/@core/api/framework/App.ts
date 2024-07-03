import { Express } from "express";
import { Injectable } from "./decorators";
import "reflect-metadata";
import { Type } from "./types/Type";
import { DependencyInjection } from "./DI/DependencyInjection";

@Injectable()
class App {
  public static server: Express;

  public init(modules: Type<any>[]) {
    const server = Reflect.getMetadata("server", App);
    App.server = server;

    App.iterateInit(modules);
  }

  private static iterateInit(modules: Type<any>[]) {
    for (const module of modules) {
      const modules = Reflect.getMetadata("modules", module);

      if (modules) {
        App.iterateInit(modules);
      }

      App.initControllers(module);
    }
  }

  private static initControllers(module: Type<any>) {
    const controllers = Reflect.getMetadata("controllers", module);

    if (controllers) {
      for (const controller of controllers) {
        const metadata = Reflect.getMetadata("router", controller);

        App.server.use(metadata.prefix, metadata.router);
      }
    }
  }
}

export default App;
