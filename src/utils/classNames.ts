// Filter string and return only string with true value
const classNames = (...classes: (string | boolean | undefined)[]) => {
  if (!classes) return undefined;

  return classes.filter(Boolean).join(" ");
};

export default classNames;
