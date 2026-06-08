import { Notification }
from "../models/notification";

import { MinHeap }
from "../utils/heap";

export class PriorityInbox {
  private heap =
    new MinHeap<Notification>(
      (a, b) =>
        a.priority -
        b.priority
    );

  add(
    notification:
      Notification
  ) {
    if (
      this.heap.size() < 10
    ) {
      this.heap.insert(
        notification
      );
    } else {
      const lowest =
        this.heap.peek();

      if (
        lowest &&
        notification.priority >
          lowest.priority
      ) {
        this.heap.remove();

        this.heap.insert(
          notification
        );
      }
    }
  }

  getTopNotifications() {
    return this.heap
      .toArray()
      .sort(
        (a, b) =>
          b.priority -
          a.priority
      );
  }
}