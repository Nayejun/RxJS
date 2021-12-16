import {fromEvent} from 'rxjs';
const click$ = fromEvent(document, "click"); //observable
const observer = event => {
  console.log(event.currentTarget);
}
click$.subscribe(observer);