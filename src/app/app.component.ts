import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  hyphen(str: string) {
    let temp = str.replace(/[`~!@#$%^&*()_\-|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    let arr = temp.toLowerCase().replace("/--/g","").split(" ");
    let hyphened = [];
    for(let element of arr){
      if(element || element!=="-") hyphened.push(element);
    }
    return hyphened.join("-");
  }

  content = [
    {topic: "Sass", sections:[
        "Dynamic class creating",
        "Color box",
        "Card",
        "Thumbnail",
        "Product example",
        "Buttons"
    ]},
    {topic: "Redux", sections:[
      "Redux concept",
      "Redux implementation",
      "Connect React and Redux",
      "Angular and NgRx"
      ]},
    {topic: "React", sections:[
      "React components",
      "React Lifecycle methods",
      "Fade animation on route change",
    ]},
    {topic:"Angular",sections:[
       "Guards with NgRx Store"
      ]},
    {topic: "NodeJS", sections:[
      "Set up an NodeJS server",
      "Working with API"
      ]},
    {topic:"MongoDB", sections:[
      "Creating MongoDB model",
      "Queries",
      "Creating references between collection",
      ]},
    {topic:"Authentication", sections:[
      "Simple user authentication with Angular, ExpressJS and MongoDB"
      ]},
    {topic:"Deployment", sections:[
      "Deploy an Angular app to Heroku",
      "Deploy an PHP app to the free hosting"
      ]}

  ]

}
