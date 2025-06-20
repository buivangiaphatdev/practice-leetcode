var invertTree = function (root) {
  if (root) {
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  }
  return root;
};

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])); // Output: [4,7,2,9,6,3,1]
