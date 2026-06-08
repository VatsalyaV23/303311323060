export class MinHeap<T> {
  private heap: T[] = [];

  constructor(
    private compare: (
      a: T,
      b: T
    ) => number
  ) {}

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  insert(value: T) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 1)
      return this.heap.pop();

    const root = this.heap[0];

    this.heap[0] =
      this.heap.pop()!;

    this.heapifyDown();

    return root;
  }

  private heapifyUp() {
    let index =
      this.heap.length - 1;

    while (index > 0) {
      const parent =
        Math.floor(
          (index - 1) / 2
        );

      if (
        this.compare(
          this.heap[index],
          this.heap[parent]
        ) >= 0
      )
        break;

      [
        this.heap[index],
        this.heap[parent],
      ] = [
        this.heap[parent],
        this.heap[index],
      ];

      index = parent;
    }
  }

  private heapifyDown() {
    let index = 0;

    while (true) {
      let smallest = index;

      const left =
        2 * index + 1;

      const right =
        2 * index + 2;

      if (
        left <
          this.heap.length &&
        this.compare(
          this.heap[left],
          this.heap[smallest]
        ) < 0
      )
        smallest = left;

      if (
        right <
          this.heap.length &&
        this.compare(
          this.heap[right],
          this.heap[smallest]
        ) < 0
      )
        smallest = right;

      if (smallest === index)
        break;

      [
        this.heap[index],
        this.heap[smallest],
      ] = [
        this.heap[smallest],
        this.heap[index],
      ];

      index = smallest;
    }
  }

  toArray() {
    return [...this.heap];
  }
}