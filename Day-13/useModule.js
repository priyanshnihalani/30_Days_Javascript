import {addNumber} from "./addModule.js";
import learnBackend from "./defaultModule.js";
import { learnJavascript, learnReact } from "./multiModule.js";
import * as objModule from "./objModule.js";
import { person } from "./personModule.js";

addNumber(10, 20)

person.name = "Priyansh Nihalani"
person.occupation = "Frontend Dev..."
person.phone = "0000000"

console.log(person)

learnJavascript()
learnReact()
learnBackend()

console.log(objModule.PI)
objModule.template()