import {
  METHODS_LIST,
  METHOD_METADATA,
  PATH_METADATA,
  ROUTER,
} from "../../constants/app";
import { METHODS } from "../../constants/methods";
import "reflect-metadata";

export const createMethod =
  (method: METHODS) =>
  (path?: string) =>
  (target: any, key: any, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(PATH_METADATA, path ? path : "/", descriptor);
    Reflect.defineMetadata(METHOD_METADATA, method, descriptor);

    const methods = Reflect.getMetadata(METHODS_LIST, target);

    if (!methods) {
      Reflect.defineMetadata(METHODS_LIST, [descriptor], target);
    } else {
      methods.push(descriptor);

      Reflect.defineMetadata(METHODS_LIST, methods, target);
    }

    return descriptor;
  };

export const Get = createMethod(METHODS.GET);
export const Post = createMethod(METHODS.POST);
export const Put = createMethod(METHODS.PUT);
export const Delete = createMethod(METHODS.DELETE);
export const Patch = createMethod(METHODS.PATCH);
export const All = createMethod(METHODS.ALL);
export const Options = createMethod(METHODS.OPTIONS);
export const Head = createMethod(METHODS.HEAD);
export const Search = createMethod(METHODS.SEARCH);
