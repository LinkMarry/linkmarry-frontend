import {type Updater} from "use-immer";

export default interface Binding<V> {
    value: V;
    update: Updater<V>;
}
