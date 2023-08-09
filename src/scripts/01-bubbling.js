/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.parent.addEventListener('click', evt => {
  console.log(evt.target, evt.currentTarget);
});

refs.child.addEventListener('click', evt => {
  console.log(evt.target, evt.currentTarget);
});

refs.descendant.addEventListener('click', evt => {
  console.log(1);
});

refs.descendant.addEventListener('click', evt => {
  console.log(2);
});

refs.descendant.addEventListener('click', evt => {
  console.log(3);
  // evt.stopImmediatePropagation();
});

refs.descendant.addEventListener('click', evt => {
  console.log(4);
});
