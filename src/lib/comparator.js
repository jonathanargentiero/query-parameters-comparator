
export const compareUrls = (a = '', b = '') => {
  const results = {};
  if (!a && !b) {
    return results;
  }
  const [, aQuery = ''] = a.split('?') || '';
  const aParams = aQuery.split('&');
  const [, bQuery = ''] = b.split('?') || '';
  const bParams = bQuery.split('&');
  aParams.forEach((paramString) => {
    const [paramName, paramValue] = paramString.split('=');
    if (typeof results[paramName] === 'undefined') {
      results[paramName] = {};
    }
    results[paramName].a = paramValue;
  });
  bParams.forEach((paramString) => {
    const [paramName, paramValue] = paramString.split('=');
    if (typeof results[paramName] === 'undefined') {
      results[paramName] = {};
    }
    results[paramName].b = paramValue;
  });
  // return results object
  return results;
};
