export default {
    bind(el, bindings, vnode) {
        let arg = bindings.arg;

        el.style[arg] = bindings.value;
    }
}