export class ReduxORMAdapter {
    constructor(session) {
    this.session = session;
  }

  build(modelName, props) {
    return this.session[modelName].create(props);
  }

  async save(model, Model) {
   return model;
  }

  async destroy(model, Model) {
    return Promise.resolve(model.destroy()).then(() => model);
  }

  get(model, attr) {
    return model[attr];
  }

  set(props, model, Model) {
    return model.set(props);
  }
}
