import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: "joke",
  template: `
    <h2>{{ line1 }}</h2>
    <p>{{ line2 }}</p>
  `
})
class JokeComponent {
  line1: string;
  line2: string;

  constructor() {
    this.line1 = "This is Joke";
    this.line2 = "Welcome again";
  }
}

interface joke {
  setup: string;
  punchline: string;
}

@Component({
  selector: "joke-list",
  template: `
    <div class="card" style="width: 18rem;" *ngFor="let joke of jokes">
      <div class="card-body">
        <h5 class="card-title">{{ joke.setup }}</h5>
        <p class="card-text">{{ joke.punchline }}</p>
      </div>
    </div>
  `
})
class JokeComponentList {
  jokes: joke[];
  constructor() {
    this.jokes = [
      {
        setup: "First Joke",
        punchline: "Wow first Wonder"
      },
      {
        setup: "second joke",
        punchline: "Yes second Wonder"
      },
      {
        setup: "third joke",
        punchline: "I enjoyed it"
      }
    ];
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent, JokeComponentList],
  bootstrap: [JokeComponentList]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
