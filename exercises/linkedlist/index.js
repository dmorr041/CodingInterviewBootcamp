// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let count = 0;
		let node = this.head;
		while(node) {
			count++;
			node = node.next;
		}
		return count;
	}

	isIndexOutOfBounds(index) {
		return (index < 0) || (index > this.size() - 1);
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}
		let node = this.head;
		while(node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.clear();
			return;
		}

		let prev = this.head;
		let node = this.head.next;

		while(node) {
			if (!node.next) {
				prev.next = null;
			}
			prev = prev.next;
			node = node.next;
		}
	}

	insertLast(data) {
		const last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		if (this.isIndexOutOfBounds(index)) {
			return null;
		}

		let current = 0;
		let node = this.getFirst();
		while(node) {
			if (current === index) {
				return node;
			}
			current++;
			node = node.next;
		}
	}

	removeAt(index) {
		if (this.isIndexOutOfBounds(index)) {
			return;
		}
		if (index === 0) {
			this.removeFirst();
			return;
		}
		if (index === this.size() - 1) {
			this.removeLast();
			return;
		}

		const node = this.getAt(index);
		const prev = this.getAt(index - 1);

		if (!node.next) {
			prev.next = null;
		} else {
			prev.next = node.next;
		}
	}

	insertAt(data, index) {
		if (this.isIndexOutOfBounds(index)) {
			this.insertLast(data);
			return;
		}
		if (index === 0) {
			this.insertFirst(data);
			return;
		}
		if (index === this.size() - 1) {
			this.insertLast(data);
			return;
		}
		const node = this.getAt(index);
		const prev = this.getAt(index - 1);
		prev.next = new Node(data, node);
	}

	forEach(callback) {
		if (!this.head) {
			return;
		}
		let node = this.head;
		while (node) {
			callback(node);
			node = node.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
