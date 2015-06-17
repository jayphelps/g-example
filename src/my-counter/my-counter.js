class MyCounterComponent extends HTMLElement {
  @reflectToAttribute()
  counter = 0;

  events = {
    increment() {
      this.counter++;
    }
  }
}
