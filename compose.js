const compose =
  (...args) =>
  (val) => {
    return args.reduceRight((v, fn) => fn(v), val);
  };
