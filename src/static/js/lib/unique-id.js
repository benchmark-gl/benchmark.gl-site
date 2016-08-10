const cuid = require('cuid');

export default function generateID() {
  return cuid();
}
