export default (err = undefined) => {
  return {
    type: "ERROR",
    err,
  };
};
