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
      "Color table",
      "Dynamic class creating"
    ]},
    {topic: "Redux", sections:[
      "Redux concept",
    ]},
    {topic: "React", sections:[
      "Dumb vs Smart components",
      "Create React component",
      "Set up React router",
      "React Lifecycle methods",
      "React and Redux"
    ]},
    {topic:"Angular",sections:[
       "Create Angular component",
       "Set up Angular router",
       "Set up Angular guards",
       "Set up Angular and Redux Store",
       "Route intercepting with Redux Store Router",
        "Combine guards with Redux",
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
