# Notification System Design

## Problem Statement

Design a notification system that efficiently stores and displays the most important notifications to a user.

---

## Approach

The system receives notifications continuously.

Each notification contains:

- ID
- Title
- Message
- Category
- Priority
- Timestamp

Only the Top 10 highest-priority notifications should be maintained.

---

## Data Structure Choice

### Min Heap

A Min Heap is used because:

- Insert: O(log n)
- Remove: O(log n)
- Peek Minimum: O(1)

The heap stores at most 10 notifications.

When a new notification arrives:

1. If heap size < 10 → insert.
2. If heap size = 10:
   - Compare with minimum priority.
   - Replace if higher priority.

---

## Complexity Analysis

### Insert

O(log 10)

≈ O(1)

### Fetch Top Notifications

O(10 log 10)

≈ O(1)

### Space Complexity

O(10)

Constant memory.

---

## Scalability

The solution scales to millions of notifications because:

- Memory usage remains constant.
- Processing cost is logarithmic.
- Easy to distribute across services.

---

## Future Improvements

- Redis caching
- Kafka event streaming
- User-specific ranking
- Machine learning based prioritization

---

## Author

Vatsalya Verma

Roll No: 303311323060