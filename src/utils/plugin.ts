interface Plugin {
  name: string;
  version: string;
}

export class PluginManager {
  private plugins: Plugin[] = [];

  public register(plugin: Plugin) {
    this.plugins.push(plugin);
  }

  public getPlugins() {
    return this.plugins;
  }
}
