import {Updater} from "use-immer";

interface Binding<V> {
    value: V;
    update: Updater<V>;
}

export default Binding;
