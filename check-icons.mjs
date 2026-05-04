import { Map, VenetianMask, Sword, Castle, Book, Key, Building2 } from 'lucide-react';
const all = Object.keys(require('lucide-react'));
const sword = all.filter(k => k.toLowerCase().includes('sword') && !k.endsWith('Icon'));
console.log('Sword:', sword);