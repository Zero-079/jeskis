import * as ri from 'react-icons/fa';
const all = Object.keys(ri);
const castle = all.filter(k => k.toLowerCase().includes('castle') || k.toLowerCase().includes('fort'));
console.log('Castle:', castle.join(', '));