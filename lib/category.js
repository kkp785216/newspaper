import { post } from "./post";
const parent = Array.from(new Set(post.map(e=>e.parent_category))).filter(e=>e !== null).map(e=>({
    url: e,
    name: e.split('-').map(e=> e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' '),
    type: 'parent'
}));
const _category = Array.from(new Set(post.map(e=>e.category))).filter(e=>e !== null).map(e=>({
    url: e,
    name: e.split('-').map(e=> e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' '),
    type: 'category',
    parent: post.find(a => a.category === e).parent_category !== null ? post.find(a => a.category === e).parent_category : e
}));
const arr = [];
post.map(e=>e.sub_category).filter(e=>e.length >= 1).forEach(e=>e.forEach(f=>arr.push(f)));
const sub_category = Array.from(new Set(arr)).map(e=>({
    url: e,
    name: e.split('-').map(e=> e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' '),
    type: 'sub_category'
}));
export const category = [...parent, ..._category, ...sub_category];