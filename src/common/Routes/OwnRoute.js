export default class OwnRoute {
  constructor(name, pathName, element, isProtected) {
    this.name = name;
    this.pathName = pathName;
    this.element = element;
    this.isProtected = isProtected;
  }
}
