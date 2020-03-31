export function getUrlQueryData() {
  const queryData = window.location.search.replace(/^\?/, '').split('&');
  const d = {};
  if (queryData) {
    queryData.forEach(k => {
      const [key, value] = k.split('=');
      d[key] = value;
    });
  }

  return d;
}
