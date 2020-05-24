export default {
    bind(el, bindings, vnode) {
        // arg параметр идущий после : (v-bind:)
        let fontModifier = bindings.modifiers['font'];

        if (fontModifier) {
            el.style.fontSize = '30px';
        }

        const delayModifier = bindings.modifiers['delay'];
        let delay = 0;

        if (delayModifier) {
            delay = 2000;
        }

        setTimeout(() => {
            let arg = bindings.arg;
            el.style[arg] = bindings.value;
        }, delay);
    }
}