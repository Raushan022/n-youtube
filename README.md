Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:

- iphone pro max = 14 letters \* 1000 = 14000
- with debouncing = 3API calls \* 1000 = 3000

Debouncing with 200ms

- if difference between 2 key strokes is <200ms - DECLINE API CALLS
- > 200ms - make an API call.

---

Cache:
