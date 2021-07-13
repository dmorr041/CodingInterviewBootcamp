// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter(node => node.data !== data);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	// My solution:
	traverseBF(fn) {
		const arr = [];
		let node = this.root;
		arr.push(node);

		while(arr.length > 0) {
			node = arr.shift();
			const children = node.children || [];	// You forgot that the Node children property is initialized to []
			arr.push(...children);
			fn(node);
		}
	}

	// Course solution:
	// traverseBF(fn) {
	// 	const arr = [this.root];
	// 	while(arr.length) {
	// 		const node = arr.shift();
	// 		arr.push(...node.children);
	// 		fn(node);
	// 	}
	// }

	// My Solution and Also Course Solution
	traverseDF(fn) {
		const arr = [this.root];
		while(arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}
}


module.exports = { Tree, Node };
