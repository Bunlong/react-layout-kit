export default function toKey(key) {
  let keys = [];
  keys = key.split(' ');
  if (keys.length > 0) {
    key = key.replace(' ', "-");
  }
  keys = key.split('-');
  if (keys.length === 0) {
  }
  let strKey = '';
  keys.forEach((value, index) => {
    strKey += value.charAt(0).toUpperCase() + value.slice(1);
  });
  return strKey;
}
