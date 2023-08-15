export function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const parseData = JSON.parse(data);
    return parseData;
  } catch {
    return data;
  }
}
