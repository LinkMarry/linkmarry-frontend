interface Binding<V> {
    value: V;
    onChange: (value: V) => void;
}

export default Binding;
