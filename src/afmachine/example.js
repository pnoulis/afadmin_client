import { eventful } from "../src/afmachine/eventful.js";
import { stateful } from "../src/afmachine/stateful.js";

class Person {
  constructor(name, age) {
    Object.assign(
      this,
      stateful.call(this, {
        working: new Working(this),
        sleeping: new Sleeping(this),
      })
    );
    Object.assign(
      this,
      eventful.call(this, {
        stateChange: [],
        error: [],
        wokeUp: [],
        slept: [],
      })
    );

    this.name = name;
    this.age = age;
    this.setState(this.getWorkingState);
  }

  changeState(state, cb) {
    const currentState = this.state.name;
    this.setState(state, () => {
      this.emit("stateChange", currentState, this.state.name);
      cb && cb();
    });
  }

  speak() {
    this.state.speak();
  }
  dream() {
    this.state.dream();
  }
  wakeUp() {
    this.state.wakeUp();
  }
  sleep() {
    this.state.sleep();
  }
}

class State {
  constructor(person) {
    this.person = person;
  }

  speak() {}
  dream() {}
  wakeUp() {}
  sleep() {}
}

class Working extends State {
  constructor(person) {
    super(person);
  }
  speak() {
    console.log(`${this.person.name} speaks at work when appropriate`);
  }
  dream() {
    console.log(`${this.person.name} should not dream while working`);
    this.person.emit("error", new Error("person working"));
  }
  wakeUp() {
    console.log(`${this.person.name} already hard at work`);
  }
  sleep() {
    this.person.changeState(this.person.getSleepingState);
  }
}

class Sleeping extends State {
  constructor(person) {
    super(person);
  }
  speak() {
    console.log(`${this.person.name} does not speak while sleeping`);
    this.person.emit("error", new Error("persoon sleeping"));
  }
  dream() {
    console.log(`${this.person.name} dream a lot when sleeping`);
  }
  wakeUp() {
    this.person.changeState(this.person.getWorkingState);
  }
  sleep() {
    console.log(`${this.person.name} already sleeping`);
  }
}

const personA = new Person("personA", 29);
personA.on("stateChange", (oldState, currentState) => {
  console.log(`TRANSITION: ${oldState} -> ${currentState}`);
});
personA.on("error", (err) => {
  console.log(err);
});

personA.sleep();
personA.sleep();
personA.speak();
personA.dream();
personA.wakeUp();
personA.wakeUp();
personA.speak();
personA.dream();
