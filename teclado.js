const d = document;

export function shortcus(e) {
 console.log(e.type);
 console.log(e.key);
 console.log(e.keyCode);
 console.log(`ctrl:${e.ctrlKey}`);
 console.log(`alt:${e.altKey}`);
 console.log(`Shift:${e.ShiftKey}`);
 console.log(e);
}
