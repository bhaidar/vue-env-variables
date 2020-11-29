function getVueEnvVariables(envVariables) {
  console.log(envVariables);
  return Object.entries(envVariables).reduce((accum, envVariable) => {
    const vueVariable = getVueEnvVariable(envVariable);

    // ignore none vue variables
    if (!vueVariable) return accum;

    // accumulate the env variable objects
    return { ...accum, ...vueVariable };
  }, {});
}

function getVueEnvVariable(envVariable) {
  // access one env variable at a time
  const [key, value] = envVariable;

  // return if the env variable name doesn't start with VUE_APP_
  if (!isVueEnvVariable(key)) return null;

  // remove the prefix "VUE_APP_" from the env variable name
  const cleanedKey = cleanVueVariable(key);

  // construct a new key:value object
  return {
    [cleanedKey]: value,
  };
}

function isVueEnvVariable(envVariableKey) {
  return envVariableKey.match(/^VUE_APP_{1}/g);
}

function cleanVueVariable(envVariableKey) {
  return envVariableKey.replace(/^VUE_APP_{1}/g, '');
}

export { getVueEnvVariables };
