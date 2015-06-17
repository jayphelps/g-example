import { registerElement, reflectToAttribute } from 'graffiti';

export default
@registerElement()
class MyCounterComponent extends HTMLElement {
  @reflectToAttribute()
  counter = 0;

  events = {
    increment() {
      this.counter++;
    }
  }
}
