export class Storage {
  static setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string) {
    const item = localStorage.getItem(key);
    if (!item) {
      return null;
    }

    return JSON.parse(item);
  }
}
