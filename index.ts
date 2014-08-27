export function resolve(from: Node, to: number[]): Node {
  var node = from;
  // descend into path
  for (var i = 0; i < to.length; i++) {
    node = node.childNodes[to[i]];
    if (!node) return null;
  }
  return node;
}

export function relative(from: Node, to: Node): number[] {
  var path: number[] = [];
  var node = to;
  var n;
  // assemble path by ascending in the tree
  while (node != from) {
    // check if we can go up, if we can't we're not a descendant
    if (!node.parentNode) return null; 
    n = 0;
    // count number of nodes before
    while (node.previousSibling) {
      node = node.previousSibling;
      n++;
    }
    // add count to the beginning of the path, move up
    node = node.parentNode;
    path.unshift(n); 
  }
  return path;
}
