import "reflect-metadata";

export const Req = () => (target: any, key: any, index: number) => {
  const params = Reflect.getMetadata("design:paramtypes", target, key);

  Reflect.defineMetadata("design:paramtypes", ["ddd"], target, key);
};
