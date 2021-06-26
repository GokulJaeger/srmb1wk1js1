function gfg() {
    const weakmap1 = new WeakMap();

    const key1 = {};
    const key2 = {};
    const key3 = {};

    weakmap1.set(key1, 'Gokul');
    weakmap1.set(key2, 'Laddu');
    weakmap1.set(key3, 'Mclaren');

    console.log(weakmap1);
    weakmap1.set(key3, "Ferrari");

    console.log(weakmap1.get(key1));
}
gfg();