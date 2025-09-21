const s = (c, r, e, n) => {
  const t = String(c);
  if (t.length > e && t.length > n) {
    const a = n - n * 2;
    let i = "";
    if (r === "astrix") {
      let l = t.length - (e + n);
      for (; l--; )
        i += "*";
    }
    return `${t.slice(0, e)}${r === "astrix" ? i : "..."}${t.slice(a)}`;
  } else
    throw Error("[concate-vue] start and end params cannot be longer than string!");
};
export {
  s as concateValue
};
