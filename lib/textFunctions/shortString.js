const shortString = (str) => {
  if (str.length < 130) {
    return str;
  } else {
    return str.substring(0, 130 - 3) + "...";
  }
};

export default shortString;
