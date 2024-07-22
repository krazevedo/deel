# Exercise 1

## Test Cases

1. **Basic Functionality**

   - **Input**: `This is a line\nAnd this is another`
   - **Expected Output**:
     ```
     lines = 2
     words = 8
     top-5 = 'is' (2), 'this' (2), 'a' (1), 'and' (1), 'line' (1)
     ```

2. **Less than 5 Unique Words**

   - **Input**: `one two three four`
   - **Expected Output**:
     ```
     lines = 1
     words = 4
     top-5 = 'four' (1), 'one' (1), 'three' (1), 'two' (1)
     ```

3. **Exactly 5 Unique Words**

   - **Input**: `apple orange banana lemon grape orange apple banana orange banana`
   - **Expected Output**:
     ```
     lines = 1
     words = 10
     top-5 = 'banana' (3), 'orange' (3), 'apple' (2), 'grape' (1), 'lemon' (1),
     ```

4. **More than 5 Unique Words**

   - **Input**: `one two three four five six seven eight nine ten eleven twelve`
   - **Expected Output**:
     ```
     lines = 1
     words = 12
     top-5 = 'five' (1), 'four' (1), 'one' (1), 'three' (1), 'two' (1)
     ```

5. **Case Sensitivity**

   - **Input**: `Case case CASE`
   - **Expected Output**:
     ```
     lines = 1
     words = 3
     top-5 = 'case' (3)
     ```

6. **Punctuation Handling**

   - **Input**: `Hello, hello! HELLO.`
   - **Expected Output**:
     ```
     lines = 1
     words = 3
     top-5 = 'hello' (3)
     ```

7. **Newline and Spaces Handling**

   - **Input**: `This    is\n a test`
   - **Expected Output**:
     ```
     lines = 2
     words = 4
     top-5 = 'a' (1), 'is' (1), 'test' (1), 'This' (1)
     ```

8. **Non-Alphanumeric Characters**
   - **Input**: `Hello @world! #test &code`
   - **Expected Output**:
     ```
     lines = 1
     words = 4
     top-5 = '@world' (1), '#test' (1), '&code' (1), 'Hello' (1)
     ```

## Assumptions and Missing Information

1. **Case Insensitivity**: Assuming that the word count is case-insensitive, i.e., 'This' and 'this' are counted as same words. This should be clarified.
2. **Punctuation Handling**: Assuming words are split by spaces and punctuation is included as part of the word. If punctuation should be stripped, this needs to be specified.
3. **Non-Alphanumeric Characters**: Assuming non-alphanumeric characters are considered part of the word. If they should be ignored or stripped out, this needs to be defined.
4. **Definition of a Word**: Assuming a word is any sequence of characters separated by whitespace. If other delimiters (e.g., punctuation) are considered, this should be detailed.
5. **Output Order**: Assuming the output is sorted by frequency first and then alphabetically for words with the same frequency.
6. **Special Characters**: Handling of special characters, emoji, and other Unicode symbols should be defined.
7. **Whitespace Handling**: How leading, trailing, and multiple spaces between words are handled should be specified.

---

# Exercise 2

Given the operation sequences described, we can identify several relevant test cases to ensure the correct functioning of the purchase order system.

### Normal Operation Sequence

- **Input**: `P, P, C, C`
- **Description**: Two orders are placed followed by two processes. This tests the basic functionality of placing and processing orders sequentially.

### Queue Overflow

- **Input**: `P, P, P, P, C`
- **Description**: Four orders are attempted to be placed before any are processed. This tests the system's ability to handle queue overflow and wait for space to become available.

### Empty Queue Processing Attempt

- **Input**: `C, C`
- **Description**: Two attempts are made to process orders before any are placed. This tests the system's ability to handle an empty queue and wait for orders to be added.

### Mixed Operations

- **Input**: `P, C, P, C`
- **Description**: An order is placed, followed by a process, then another order, and finally another process. This tests the system's ability to handle mixed operation sequences.

### Continuous Placing Without Processing

- **Input**: `P, P, P, P, P`
- **Description**: Five orders are continuously placed without any being processed. This tests the system's resilience against continuous placement pressure.

### Continuous Processing Without Placement

- **Input**: `C, C, C, C, C`
- **Description**: Five attempts are made to process orders without any being placed. This tests the system's ability to handle continuous processing attempts without incoming orders.

## Analysis and Potential Errors

### Thread Synchronization

The use of `sleep()` and `wakeup()` primitives for synchronization is a valid approach. However, it's essential to ensure that these calls are thread-safe and do not introduce race conditions.

### Efficiency

Continuously polling the queue length in a loop (`while (true)`) can be inefficient. Consider using condition variables or semaphores for more efficient waiting mechanisms.

### Error Handling

The pseudocode does not account for potential errors during order production or processing. Adding error handling and logging mechanisms would improve reliability and debuggability.

## Multi-threaded Environment with Shared Queue

### Concurrent Insertion and Deletion

Input: Multiple instances of P, P, C, C running concurrently.
Description: This tests the system's ability to handle concurrent insertions and deletions from the shared queue without causing race conditions or data corruption.

### Simultaneous High Volume of Orders

Input: Multiple instances of P, P, P, P, P running concurrently.
Description: This tests the system's ability to handle high volumes of orders from multiple producers simultaneously.

### Processor Overload

Input: Multiple instances of C, C, C, C, C running concurrently.
Description: This tests the system's ability to handle simultaneous processing attempts from multiple consumers.

Implementing these tests would involve simulating multiple threads for both order generation and processing, observing how the system manages a shared queue under concurrent access patterns. A typical error in this context could be data races or deadlocks caused by improper synchronization, leading to lost orders or corrupted data.
