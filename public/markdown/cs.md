# 1 Fundamentals of programming

## 1.1 Programming

### 1.1.1 Data types

- Data types determine: - the range of values assigned to a variable - the way the data in memory is interpreted - the operations that can be performed on the data
  <br>
- C# types
  - `int = 1`
  - (4 bytes) `float = 0.0d`
  - (8 bytes) `double = 0.0`
  - (16 bytes) `decimal = 0.0m`
  - `bool = true`
  - `char = 'a'`
  - `String = "Hello World!"`
  - `DateTime = new DateTime(year, month, day, hour, minute, second)`
    <br>
- Composite types are built with atomic types
  <br>
- Records are collections of related data of different types

```c#
struct S {
	//	Identical syntax to classes
}
```

### 1.1.2 Programming concepts

- Variable declaration
  - allocating memory
- Constant declaration
  - constants do not change during runtime
- Assignment
  - giving a variable/constant a value
- Iteration
  - repeating a set of instructions
  - definite (count-controlled)
    - for, foreach
    - number of iterations is known before start
  - indefinite (condition-controlled)
    - while, do...while
  - can be nested
- Selection
  - choosing an action based on a value
  - can be nested
- Subroutine (procedure/function) - a named block of code containing a set of instructions
  <br>
- Identifiers for variables should be sensible and meaningful
  - easier for other developers to understand

### 1.1.3 Arithmetic operations in a programming language

- addition<br />
  `a + b`
- subtraction<br />
  `a - b`
- multiplication<br />
  `a * b`
- real/float division<br />
  `a / b` - need to convert types<br />
  to get non-int quotients from ints, use `Decimal.Divide(a, b)`
- integer division, including remainders<br />
  `a / b`
  `a % b`
- exponentiation<br />
  `Math.Pow(a, b)` for a<sup>b</sup>
- rounding<br />
  `Math.Round(a)`
- truncation<br />
  `Math.Floor(a)`

### 1.1.4 Relational operations in a programming language

- equal to<br />
  `==`
- not equal to<br />
  `!=`
- less than<br />
  `<`
- greater than<br />
  `>`
- less than or equal to<br />
  `<=`
- greater than or equal to<br />
  `>=`

### 1.1.5 Boolean operations in a programming language

- NOT<br />
  `!`
- AND<br />
  `&` (binary/bitwise)<br />
  `&&`
- OR<br />
  `|` (binary/bitwise)<br />
  `||`
- XOR<br />
  `^` (binary/bitwise)

### 1.1.6 Constants and variables in a programming language

- The value of constants cannot be changed during runtime
- The value of variables can be changed during runtime
  <br>
- Constants makes it:
  - easier to understand as it is named
  - easier to update in multiple places

### 1.1.7 String-handling operations in a programming language

- length
  `String.length -> int`
- position
  `String.IndexOf(string) -> int`
- substring
  `String.Substring(int start, int length) -> String`
- concatenation
  `String + String`
- character → character code
  `(int)char`
- character code → character
  `(char)int`

### 1.1.8 Random number generation in a programming language

```csharp
Random random = new random;

Random.Next(int min, int max); //max is exclusive
Random.NextDouble(); //between 0.0 and 1.0
```

### 1.1.9 Exception handling

- Thrown exceptions will have to be handled to prevent crashing
- The system state (registers) is stored in a stack
  <br>

```csharp
try
{
}
catch (Exception e)
{
}
string abc = ""
int number;
bool success = int.TryParse(string abc, out number)
//returns true if success else false, output = 0
```

### 1.1.10 Subroutines (procedures/functions)

- A subroutine is a named ‘out of line’ block of code that may be executed (called) by simply writing its name in a program statement.

### 1.1.11 Parameters of subroutines

- Parameters are used to pass data within programs.

### 1.1.12 Returning a value/values from a subroutine

- Subroutines can return a value.
- Functions will always return a value

### 1.1.13 Local variables in subroutines

- Subroutines may declare their own local variables
  <br>
- Local variables:
  - exist only while the subroutine is executing
  - are accessible only within the subroutine

### 1.1.14 Global variables in a programming languages

- Global variables can be accessed from any part of a program
- Global variables exist in memory for the entire runtime.

### 1.1.15 Role of stack frames in subroutine calls

- Stack frames are used with subroutine calls to store: - return addresses - parameters - local variables
  <br>
- Nesting occurs when one subroutine calls another
- Each subroutine call is pushed onto the call stack on top
- When the subroutine finishes executing, the stack frame is popped from the call stack

### 1.1.16 Recursive techniques

- Recursive subroutines call themselves
- It must have a base case (stopping condition)
  - otherwise, it will never terminal

## 1.2 Programming paradigms

### 1.2.1 Programming paradigms

### 1.2.2 Procedural-oriented programming

### 1.2.3 Object-oriented programming

- object-oriented design principles:
  - encapsulate what varies
  - favour composition over inheritance
  - program to interfaces, not implementation

# 2 Fundamentals of data structures

## 2.1 Data structures and abstract data types

### 2.1.1 Data structures

- A container combining multiple data under a single identifier

### 2.1.2 Single- and multi-dimensional arrays (or equivalent)

- Arrays are:
  - Static, so have a finite size once declared
  - Indexed
  - Stored contiguously in memory
  - Have elements of the same data type
  - Can have multiple dimensions
- Individual items in arrays are accessed by offsets to a memory location
- Arrays can be used to store:
  - homogenous values
  - vectors
  - tables, matrices

### 2.1.3 Fields, records and files

- A file is a data structure for storing data
- Each file is made of related records
- Each record is made of related fields

### 2.1.4 Abstract data types/data structures

- Abstract data types are conceptual models of
  - how data is organised
  - the operations that can be carried out on that data
- Data structures are implementations of abstract data types - Technically, they are partial implementations - the data structure itself doesn't contain the operations
  <br>
- Static data structures:
  - fixed size determined at compilation
    - thus inefficient if more memory is assigned than is needed
  - stored contiguously in memory
  - does not require pointers to be stored
- Dynamic data structures:
  - change in size during runtime
    - utilises pointers and allocates memory from the heap
  - data is stored across memory locations
  - pointers have to be stored with the data in memory to point to the next element

## 2.2 Queues

### 2.2.1 Queues

- Queues are a type of ADT based on an array
- They act on a first in, first out (FIFO) principle
  <br>
- Queues are used for: - keyboard buffers - handling file downloads - allocating resources (priority queue) - playlists - buffering network streams
  <br>
- A queue consists of:
  - an array
  - a front pointer
  - a rear pointer
- and has operations: - enqueue - check if queue is full - increment rear pointer - insert item into the index position of the rear pointer > circular queue > - check queuesize variable > - mod incremented pointers by queue maxsize - dequeue - check if queue is empty - front pointer is smaller than rear pointer - return item at the index position of the front pointer - increment the front pointer - (peek)
  <br>
- Linear queues
  - may result in unused capacity
- Circular queues
  - front and rear pointers can wrap around
- Priority queues
  - priority is stored with each element
  - shuffle items in each queue to "make room"

## 2.3 Stacks

### 2.3.1 Stacks

- Queues are a type of ADT based on an array
- They act on a last in, first out (LIFO) principle
  <br>
- Queues are used for: - reversing sequences - call stacks (storing stack frames) - storing register values while handling an interrupt - reverse polish notation - undo lists
  <br>
- A queue consists of:
  - an array
  - a stack pointer
- and has operations:
  - push
    - check if stack is full
    - increment pointer
    - insert item into the index position of the pointer
  - pop
    - check if stack is empty
    - decrement pointer
    - return item at the old position of the stack pointer
  - (peek)

## 2.4 Graphs

- Graphs are used to represent more complex relationships.
  <br>
- Graphs are used for: - representing networks - representing maps
  <br>
- A graph consists of - nodes - vertex - smallest unit of a graph - joined by edges
  <br>
- Can be represented by:
  - Adjacency list
    - each node has a list of adjacent nodes
    - suitable for sparse graphs
  - Adjacency matrix
    - tabular representation
    - each node is assigned a row and column
    - 1 is assigned to show that an edge exists, otherwise 0 is used
    - there is a diagonal line of 0s and diagonal symmetry
    - suitable for dense graphs

|      | Matrix                                                                  | List                                                                          |
| ---- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Size | Every possible edge is stored, even if there is no edge.<br>Inefficient | Only edges which exist are stored<br>Efficient                                |
| Time | A specific edge can be queried in O(1) time<br>Efficient                | Each element in the list must be traversed until edge is found<br>Inefficient |

## 2.5 Trees

- Trees are connected, undirected graphs with no cycles
  <br>
- A rooted tree is a tree in which one vertex has been designated as the root (usually at the top of a tree
- A rooted tree has:
  - parent-child relationships between nodes
  - root is the only node with no parent
  - all other nodes are descendants of the root
- Trees do not have to have a root

## 2.6 Hash tables

- Hash tables are data structures that creates a mapping between keys and values based on an index calculated from a hashing algorithm
- Theoretically O(1) access
  <br>
- Hashing algorithms takes in a input and returns a hash
  - The same hash is always returned for the same input
  - Usually, the hashing algorithm involves modulo division with the size of the table
- A good hashing algorithm should: - have a even distribution of hash values - use efficient operations
  <br>
- A collision occurs when two key values compute the same hash
- This can be solved by:
  - Rehashing
    - Increase the size of the hash table
    - Apply the hashing algorithm
  - Separate chaining
    - Each key points to a linked list
    - New values are appended to the list
  - Linear probing
    - Iterate until the next free space is found

## 2.7 Dictionaries

- Dictionaries are collections of key-value pairs in which the value is accessed via the associated key
  <br>
- Can be implemented as:
  - Associative arrays
    - A pair of arrays, one storing keys and one storing values
    - Indices correspond
  - Multi-dimensional arrays
    - Keys are values are stored on the same array

## 2.8 Vectors

- Vectors can be represented as: - a list of numbers - a function - a way of representing a geometric point in space
  <br>
- Notationally,
  - A 4-vector over ℝ = ℝ<sup>4</sup>
  - 0 maps to 2 = 0 ↦ 2
- All entries must be drawn from the same field (set)
  <br>
- Vectors can be implemented as: - Dictionaries - Lists - 1-D arrays - Arrows
  <br>
- Operations
  - Addition
    - added top to tail geometrically
    - each component is added separately
    - used for translation
  - Scalar multiplication
    - each component is individually multiplied by a scalar
    - use for scaling
  - Convex combiation
    - satisfies **r** = x**a** + y**b**<br>where a, b > 0; a + b = 1
    - geometrically, r is on the line that joins the tips of a and b
  - Dot (scalar) product
    - used to find the angle between two vectors
    - for u = [u<sub>1</sub>, … , u<sub>n</sub>] and v = [v<sub>1</sub>, … , v<sub>n</sub> ]<br>u ∙ v = u<sub>1</sub>v<sub>1 </sub>+ u<sub>2</sub>v<sub>2</sub> + … + u<sub>n</sub>v<sub>n</sub>

# 3 Fundamentals of algorithms

## 3.1 Graph-traversal

### 3.1.1 Simple graph-traversal algorithms

- Breadth-first
  - Application:
    - finding the shortest path between two nodes in an unweighted graph
    - finding first-degree "friends" in social media networks
  - Steps:
    - uses a queue
    - adds all nodes adjacent to the current node to a queue
    - iterates to repeat the process with the node at the front of the queue
- Depth-first
  - Application:
    - maze navigation
    - determining processing order
  - Steps:
    - uses a stack
    - recursively visit nodes adjacent to the starting node
    - when there are no unvisited adjacent nodes, backtrack and visit any unvisited adjacent nodes

## 3.2 Tree-traversal

### 3.2.1 Simple tree-traversal algorithms

- Pre-order - Application: - copying a tree - Steps: - visit current node - traverse left subtree - traverse right subtree
  > Left dot
- In-order - Can only be used on binary trees - Application: - binary search tree - Steps: - traverse left subtree - visit current node - traverse right subtree
  > Bottom dot
- Post-order - Application: - infix to PRN conversion - producing a postfix expression from an expression tree - emptying a tree - Steps: - traverse left subtree - traverse right subtree - visit current node
  > Right dot

## 3.3 Reverse Polish

### 3.3.1 Reverse Polish – infix transformations

- Applications: - Eliminates need for brackets in subexpressions - Form suitable for evaluation using a stack - Used in interpreters based on a stack for example Postscript and bytecode
  <br>
- Infix to RPN
  - Traverse left to right
  - Evaluate brackets first
  - Write operands in order, then append operator at the end
- RPN to Infix
  - Traverse left to right
  - Place operator between preceding two operands
  - Place expresssion in backets

## 3.4 Searching algorithms

### 3.4.1 Linear search

- Time complexity O(n)

### 3.4.2 Binary search

- Time complexity O(log n)

### 3.4.3 Binary tree search

- Time complexity O(log n)

## 3.5 Sorting algorithms

### 3.5.1 Bubble sort

- Time complexity O(n<sup>2</sup>)

### 3.5.2 Merge sort

- Time complexity O(n log n)

## 3.6 Optimisation algorithms

- Finds the best possible solution to a problem

### 3.6.1 Dijkstra’s shortest path algorithm

- Applications:
  - satellite navigation systems
  - routers

# 4 Theory of computation

## 4.1 Abstraction and automation

### 4.1.1 Problem-solving

### 4.1.2 Following and writing algorithms

### 4.1.3 Abstraction

### 4.1.4 Information hiding

### 4.1.5 Procedural abstraction

### 4.1.6 Functional abstraction

### 4.1.7 Data abstraction

### 4.1.8 Problem abstraction/reduction

### 4.1.9 Decomposition

### 4.1.10 Composition

### 4.1.11 Automation

## 4.2 Finite state machines (FSMs)
### 4.2.1 Finite state machines (FSMs) without output

# 5 Fundamentals of data representation

## 5.1 Number systems

### 5.1.1 Natural numbers

- ℕ = {0, 1, 2, 3, 4, ...}
- Positive integers
- Used for counting

### 5.1.2 Integer numbers

- ℤ = {..., -2, -1, 0, 1, 2, ...}
- Whole numbers

### 5.1.3 Rational numbers

- ℚ = a/b where b != 0

### 5.1.4 Irrational numbers

- Cannot be expressed as a/b where b != 0

### 5.1.5 Real numbers

- ℝ is the set of all 'possible real world quantities'.
- Used for measurements

### 5.1.6 Ordinal numbers

- Ordinal numbers are used to tell the position of objects in order
- For example, if we have a well-ordered set S = {‘a’, ‘b’, ‘c’, ‘d’}, then ‘a’ is the 1 st object, ‘b’ the 2nd, and so on.

## 5.2 Number bases

### 5.2.1 Number base

- **Binary**
  - **2** values per "digit"
    - 0 or 1
  - 1 bit
  - Base-2

| 2<sup>0</sup> | 2<sup>1</sup> | 2<sup>2</sup> | 2<sup>3</sup> | 2<sup>4</sup> | 2<sup>5</sup> | 2<sup>6</sup> | 2<sup>7</sup> |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| 1             | 2             | 4             | 8             | 16            | 32            | 64            | 128           |

- **Denary** (decimal)
  - **10** values per "digit"
    - 0 - 9
  - Base-10
  - 1 byte gives **255 denary values**

| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 |

- **Hexadecimal** (hex)
  - **16** values per "digit"
    - 0-9. A-F
  - 1 nibble (4 bits)
  - Base-16
  - Used in MAC and IPv6 addresses, memory dumps, colour codes, etc.
  - Are suitable, because:
    - provides a shorter/more compact representation of a number than binary
      - so takes up less space when printing/viewing
      - and less time is taken to write
    - is easier for people to read/understand/remember
      - so less likely to make errors

| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | A    | B    | C    | D    | E    | F    |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   |
| 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

### Conversions

- **Binary** to **Denary**
  - Draw a table:
    - Top row: powers of 2 up to 2<sup>7</sup>
    - Middle row: the given binary number
    - Bottom row: the value of the column with "1"
  - Add the results of the bottom row

e.g. Converting binary 01101011 to denary
128|64|32|16|8|4|2|1
---|---|---|---|---|---|---|---
0|1|1|0|1|0|1|1
-|64|32|-|8|-|2|1

64 + 32 + 8 + 2 + 1 = 107
01101011 = 107

- **Denary** to **Binary**
  - Take away each power of 2, starting from 2<sup>7</sup>. If the result is larger than or equal to 0, the bit is 1. Keep the value and subtract the next power of 2. If the result is smaller than 0, the bit is 0. Use the last result to subtract the next power of 2.

e.g. Converting denary 107 to binary
Subtraction | Result | Bit
---|---|---
107 - 128 |-21|0
107 - 64 |43|1
43 - 32 |11 | 1
11 - 16 |-5| 0
11 - 8|3|1
3 - 4|-1|0
3 - 2|1|1
1 - 1|0|1

107 = 01101011

- **Denary** to **Hexadecimal**
  - Each hex place is a power of 16.
  - If the denary number is larger than 16, divide it by 16.
    - Take the hex of the integer result - this is the leftmost digit
    - Take the hex of the integer remainder - this is the rightmost digit.
  - If the denary number is smaller than 16
    - Take the hex of the denary number - this is the rightmost digit
    - The leftmost digit should be 0

e.g. Converting denary 17 to hexadecimal

| Division | Result  | Hex |
| -------- | ------- | --- |
| 17 / 16  | 1 ... 1 | 1   |
| -        | 1       | 1   |

Denary 17 = Hex 11

- **Hexadecimal** to **Denary**
  - Take the leftmost digit of the hexadecimal and multiply it by 16
  - Take the rightmost digit of the hexadecimal and multiply it by 1
  - Add the 2 results together

e.g. Converting hexadecimal 11 to denary
Hex | Multiplication | Sum
---|---|---
1|1 _ 16|16
1|1 _ 1|17

Hex 11 = Denary 17

- **Binary** to **Hexadecimal**
  - Split the binary digits into groups of 4
  - Convert the first 4 digits to denary, then convert to hexadecimal
  - Convert the last 4 digits to denary, then to hexadecimal
  - **Concatenate** the two results

e.g. 01101011 to hexadecimal

| Step              | Value | Value |
| ----------------- | ----- | ----- |
| Split             | 0110  | 1011  |
| Convert to Denary | 6     | 11    |
| Convert to Hex    | 6     | B     |

01101011 = Hex 6B

- **Hexadecmial** to **Binary**
  - Convert the first digit to denary, then convert to binary
  - Convert the last digit to denary, then convert to binary
  - **Concatenate** the two results
- e.g. Hexadecimal 6B to binary

| Step              | Value | Value |
| ----------------- | ----- | ----- |
| Split             | 6     | B     |
| Convert to Denary | 6     | 11    |
| Convert to Binary | 0110  | 1011  |

Hex 6B = 01101011

## 5.3 Units of information

### 5.3.1 Bits and bytes

- A bit is the fundamental unit of information
  - It can either be 0 or 1
- A byte is a group of 8 bits (2 nibbles)
- A nibble is a group of 4 bits
  <br>
- 2<sup>n</sup> values (range 0 to 2<sup>n</sup>-1) can be represented with n bits

### 5.3.2 Units

- Binary prefixes are different from SI (decimal) prefixes.
- Binary prefixes include:
  - kibi, Ki - 2<sup>10</sup> = 1024
  - mebi, Mi - 2<sup>20</sup> = 1024<sup>2</sup>...etc
  - gibi, Gi - 2<sup>30</sup>
  - tebi, Ti - 2<sup>40</sup>
- Decimal prefixes include:
  - kilo, k - 10<sup>3</sup>
  - mega, M - 10<sup>6</sup>
  - giga, G - 10<sup>9</sup>
  - tera, T - 10<sup>12</sup>

## 5.4 Binary number system

### 5.4.1 Unsigned binary

- Unsigned binary only represents positive numbers
- Signed binary represents both positive and negative numbers
  <br>
- 2<sup>n</sup> values (range 0 to 2<sup>n</sup>-1) can be represented with a binary number of word length n.

### 5.4.2 Unsigned binary arithmetic

- **Addition**
  There are **4 basic rules** to binary addition: - 0 + 0 = 0 - 1 + 0 = 1 - 1 + 1 = 0, **carry** 1 - 1 + 1 + 1 = 1, **carry** 1
- **Overflow** occurs when the result of a calculation requires more bits than are in the available range.
  - e.g. 11111110 + 00000010 = 0000000 overflow 1
    - This will return denary 0 - causing a error
- **Multiplication**
  - To multiply a binary number, **shift** all digits to the **left** and fill the gaps with 0.
    - x 2 -> left 1
    - x 4 -> left 2
    - x 8 -> left 3
    - etc.
  - To multiply by non-powers of 2:
    - Combining shifts
      - break down the multiplication factor into power of 2 shift(s)
      - add the results
      - > a 0 place left shift = x1
    - Long multiplication
      - perform normal denary multiplication with the binary representation of both numbers
- **Division**
  - To divide a binary number, **shift** all digits to the **right** and fill the gaps with 0.
    - / 2 -> right 1
    - / 4 -> right 2
    - / 8 -> right 3
    - etc.

e.g. 00011010 (denary 26) x 4 / 8

| Original | 0   | 0   | 0   | 1   | 1   | 0   | 1   | 0   |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- |
| Left 2   | 0   | 1   | 1   | 0   | 1   | 0   | 0   | 0   |

01101000 = 104
26 x 4 = 104

| Original | 0   | 1   | 1   | 0   | 1   | 0   | 0   | 0   |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- |
| Right 3  | 0   | 0   | 0   | 0   | 1   | 1   | 0   | 1   |

00001101 = 13
104 / 8 = 13

### 5.4.3 Signed binary using two’s complement

- Signed binary can be used to represent negative integers
- We can use two's complement to represent signed binary numbers. - The most significant bit (left-most) determines whether a number is positive (0) or negative (1)
  <br>
- Unsigned binary to signed binary
  - Take the one's complement (flip every bit)
  - Add 1
  - e.g. <br> -5 = (1010<sub>2</sub> + 1) = 1011<sub>2</sub>
- Signed binary to denary
  - Give the most significant bit a negative value
  - Calculate as an unsigned binary number
  - e.g. 1011<sub>2</sub> to denary<br>

| -8  | 4   | 2   | 1   |
| --- | --- | --- | --- |
| 1   | 0   | 1   | 1   |

-8 + 2 + 1 = -5

- Subtracting with signed binary - Convert both operands to signed binary - Perform binary addition - e.g.
  0111<sub>2</sub> (7) - 0101<sub>2</sub> (5)
  = 0111<sub>2</sub> + 1011<sub>2</sub>
  = 0010<sub>2</sub>
  <br>
- 2<sup>n</sup> values (range -2<sup>n-1</sup> to 2<sup>n-1</sup>-1) can be represented with a signed binary number of word length n.

### 5.4.4 Numbers with a fractional part

- There are two ways of representing non-whole numbers with binary: fixed point and floating point
- Fixed point
  - A specified number of bits are placed before a binary point
  - This reduces the range of magnitudes of the numbers that can be stored **for the same word length**

| 8   | 4   | 2   | 1   | .   | 1/2 | 1/4 | 1/8 | 1/16 |
| --- | --- | --- | --- | --- | --- | --- | --- | ---- |
| 1   | 0   | 1   | 0   | .   | 1   | 0   | 1   | 0    |

10101010<sub>2</sub> = 8 + 2 + 1/2 + 1/8 = 10.625

- Floating point
  - The binary number is split into the mantissa and the exponent
    - This is very similar to standard form: 1.6 (mantissa) x 10<sup>-19</sup> (exponent)
    - The mantissa is the "significant digits" of the number
  - Provides greater accuracy and range for the same **word length (number of bits)** as a fixed-point binary number
    - Increasing the length of the mantissa increases the precision
    - Increasing the length of the exponent increases the range
  - Both mantissa and exponent can be negative
    - Convert both into negative unsigned decimals

Mantissa
| Sign | 1/2 | 1/4 | 1/8 | 1/16 | 1/32 |
| --- | --- | --- | --- | --- | --- |
0 | 1 | 0 | 1 | 1 | 0

Exponent
| Sign | 4 | 2 | 1 |
| --- | --- | --- | --- |
0 | 1 | 0 | 0

- Converting floating point binary to decimal:

  - Fractions
    (1/2 + 1/8 + 1/16) x 2<sup>4</sup> = 11
  - Moving the point
    Exponent is 4, so we move the decimal point right by 4 places to get<br>

  | Sign | 8   | 4   | 2   | 1   | 1/2 |
  | ---- | --- | --- | --- | --- | --- |
  | 0    | 1   | 0   | 1   | 1   | 0   |

  8 + 2 + 1 = 11

- Converting decimal to floating point binary
  - Write out the number in fixed-point binary
  - Normalise the number (See section 5.4.8)

### 5.4.5 Rounding errors

- Some decimal numbers cannot be represented exactly in binary
  - Do not "fit" perfectly into binary fractions.
- For a real number to be represented exactly by the binary number system, it must be capable of being represented by a binary fraction in the given number of bits
- Some values cannot **ever** be represented exactly, for example 0.1<sub>10</sub>

### 5.4.6 Absolute and relative errors

- Absolute error = actual value - approximated value
  - It is always stated as a positive value
- Relative error = (absolute error / actual value) x 100%
  <br>
- The impact of absoulte errors vary based on magnitude

### 5.4.7 Range and precision

| Characteristic       | Fixed point                                               | Floating point                                                |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| Range                | Smaller for the same amount of bits as the point is fixed | Greater range for a given number of bits                      |
| Precision            | Fixed precision                                           | Variable precision based on the size of the mantissa          |
| Speed of calculation | Quicker, as the binary point does not have to be moved    | Slower, as both the mantissa and exponent have to be accessed |

### 5.4.8 Normalisation of floating point form

- Floating point binary numbers are normalised to provide:
  - maximum precision for the word length
  - unique representations of each numer (so easier to compare)
- This involves:
  - manipulating the mantissa to start with 01 (positive) or 10 (negative)
  - subtracting the number of places the bits have shifted from the exponent in decimal
- The first bit after the sign bit is **significant**

### 5.4.9 Underflow and overflow

- Underflow occurs when the number is too small to be represented with the given word length
- Overflow occurs when the number is too large to be represented with the given word length
  <br>
- Common causes of overflows include:
  - Multiplying/adding large numbers
  - Dividing a number by a very small number
- Common causes of underflows include:
  - Dividing a small number by a large number
  - Multiplying a number by a very small number

## 5.5 Information coding systems

### 5.5.1 Character form of a decimal digit

- In computers, (alphanumeric) characters are stored as character code using an information coding system.
  - A character code is a decimal digit used to represent a character
  - The computer interprets the binary equivalent of the decimal digit

### 5.5.2 ASCII and Unicode

- Information coding systems for characters are known as character sets.
  <br>
- **ASCII** (American Standard Code for Information Interchange)
  - 7 bits, 128 characters
    - 26 upper case letters (65 - 90)
    - 26 lower case letters (97 - 122)
    - 10 numeric digits
    - 32 punctuations and symbols
    - 32 printing control codes
  - Limited usefulness in languages other than english, hence:
- **Extended ASCII**
  - 8 bits, 256 characters
    - Includes special accented characters used by European languages
- **Unicode**
  - Developed to represent every possible character in the world
  - First 128 characters are backwards compatible with ASCII
  - Allows the use of 8-48 bits, which creates a wider range of availble character codes

### 5.5.3 Error checking and correction

- Parity bits
  - A bit is added to a binary number to ensure that it has been transmitted correctly
  - The sender counts the number of 1s in the data
  - Even parity
    - The value of the parity bit is chosen so as to make the total number of 1s in the transmitted data even
  - Odd parity
    - The value of the parity bit is chosen so as to make the total number of 1s in the transmitted data odd
  - The receiver counts the number of 1s in the the recieved data, and compares it to the type of parity used.
  - If the number of 1s does not match the parity type, the reciever requests a retransmission of the data
  - Disadvantages:
    - If an even number of bits is flipped, the parity bit system will not be able to detect the error
- Majority voting
  - Each bit of the data is transmitted multiple (odd number greater than 2) times
  - The reciever checks the bits it has recieved
  - If they are not all the same, the most common value is taken to be correct
  - Advantages:
    - Errors in transmission can be corrected as well as identified
    - Can detect multiple bit errors
  - Disadvantages:
    - The transmission size is increased dramatically
- Checksums
  - A value is calculated by a specific checksum algorithm and transmitted with the data
  - The reciever recalculates the checksum with the same algorithm and compares it with the recieved checksum
  - If they are not identical, the recieved data has to be resent
  - Disadvantages:
    - not very efficient, as the algorithms may be complex
- Check digits
  - Extremely similar to checksum, but a smaller value
  - The complexity of the algorithm is limited, so it is more efficient than checksums (usually)

## 5.6 Representing images, sound and other data

### 5.6.1 Bit patterns, images, sound and other data

- Describe how bit patterns may represent other forms of data, including graphics and sound.

### 5.6.2 Analogue and digital

- Data:
  - analogue data is continuous
    - no limits to the values that data can take
  - digital data is discrete
    - can only take in particular values
- Signals:
  - anlogue signals are smooth curves
    - changes as frequently as required
  - digital signals are sharp

### 5.6.3 Analogue/digital conversion

- Digital to analogue:
  - A digital to analogue converter (DAC) reads a bit pattern representing an analogue signal
  - Outputs analogue alternating current
  - The most common use for a DAC is to convert a digital audio signal to an analogue signal
- Analogue to digital:
  - A analogue to digital converter (ADC) takes samples of the analogue signal at regular intervals
  - Samples are quantised (approximated to an integer value) and encoded as a binary value
  - ADCs are used with analogue sensors

### 5.6.4 Bitmapped graphics

### 5.6.5 Vector graphics

- Vector graphics represent images using geometric shapes/objects/lines
- The properties of each geometric object/shape in the vector graphic image are stored as a list
  - typical properties include:
    - type of shape
    - coordinates of corner
    - identifier
    - length/width
    - outline colour/width
    - fill colour
    - angle of rotation

### 5.6.6 Vector graphics versus bitmapped graphics

- Vector graphics can be scaled without losing quality
- Vector graphics use less storage space than bitmapped graphics

### 5.6.7 Digital representation of sound

- The Nyquist theorem states that the sampling rate of a digital audio file must be at least twice the frequency of the sound
  - If the sampling rate is below this, the sound may not be accurately represented

### 5.6.8 Musical Instrument Digital Interface (MIDI)

- MIDI stores sound as a series of event messages
  - duration of note
  - instrument
  - volume
  - sustained
- Allows easy manipulation
- Smaller in size (more compact representation)
- Can be generated directly
- No data is lost through sampling

### 5.6.9 Data compression

- Lossy compression
- Lossless compression
  - Run-length encoding (RLE)
    - removes repeated information
    - replaces it with one occurance and the number of times it is to be repeated
  - Dictionary-based
    - dictionary contained repeated data is appended to the file
    - dictionary has to be stored with the file

### 5.6.10 Encryption

- Encryption - scrambling data so it cannot be understood if intercepted
  <br>
- Caesar cipher
  - replaces characters with another character, which is kept the same
  - shift cipher
    - all letters are shifted by the same amount
    - can be very easily cracked
      - the frequency of each character provides a clue; E is the most common letter in the English alphabet
  - subsitution cipher
    - letters are randomly replaced
- Vernam cipher - contains a one-time pad - key that should only be used once - key should be random and at least as long as the plaintext - the binary value of each character has a logical XOR applied with the key - the key and the ciphertext must be transmitted to be decoded
  <br>
- All ciphers except the vernam cipher are crackable in theory.
- Not all of them can be cracked within a reasonable timeframe
  - This is known as computational security

# 10 Fundamentals of databases

## 10.1 Conceptual data models and entity relationship model

- Entity
  - Thing about which data is to be store
- Attributes
  - Information about entities
- Entity Indentifiers - Unique attribute within a table to identify an entity
  <br>
- Entity description - Used to describe how an entity can be stored in a database - Written as:<br>Entity1 (<ins>Identifier</ins>, Attribute1, Attribute2, Attribute3)
  <br>
- Entity-relationship diagrams
  - Tables in a database can be related to each other, linked by common attributes
  - ER diagrams are used to graphically represent relationships between tables
  - There are three types of relationships:
    - One-to-one
      - Each company has one CEO
    - One-to-many
      - Each company has many employees; each employee is employed by one company
    - Many-to-many
      - Each company has many offices; each office has many companies

## 10.2 Relational databases

- Relational database - A type of database that organises data into multiple linked tables and provides access to data points related to each other
  <br>
- Primary key
  - An attribute that provides a unique identifier for each entity
- Composite primary key
  - A primary key composed of multiple primary keys
  - Only used when it is not possible to form a primary key from just one attribute
- Foreign key
  - Attribute which is the primary key in another related table

## 10.3 Database design and normalisation techniques

- Databases are normalised so they can be efficient, and not contain any unnecessary data duplication
- Unnecessary data duplication leads to:
  - Data redundancy
    - increased storage costs
      - database size is increased
    - reduced performance
      - queries are slower
  - Data inconsistency
    - update anomalies
      - not all instances of duplicated data is updated
    - insertion and deletion anomalies
- Therefore, a fully normalised database: - Eliminates update, insertion and deletion anomalies - Eliminates data inconsistency - Minimises data duplication
  <br>
- First normal form (1NF)
  - Data is atomic
    - no attribute has more than one value
  - There are no repeating groups
  - Each row has a primary key
  - There are no repeated rows
- Second normal form (2NF)
  - Table is already in 1NF
  - There are no partial key dependencies
    - every non-key attribute should depend upon the whole composite key
- Third normal form (3NF) - Table is already in 2NF - There are no non-key dependencies
  <br>
  > For AQA, only knowledge of 3NF is required:
  > every non-key attribute is dependent on the key; the whole key; and nothing but the key; contains no repeating groups; and all data is atomic

## 10.4 Structured Query Language (SQL)

- SQL is a declarative language used to query databases
  <br>
- `SELECT`
  ```SQL
  SELECT Attribute1, Attribute2
  FROM Table1
  WHERE Attribute3 < 0
  ORDER BY Attribute2 ASC
  ```
  ```SQL
  SELECT Table1.Attribute1, Table2.Attribute2
  FROM Table1
  INNER JOIN Table2 ON Table1.Attribute3 = Table2.Attribute1
  WHERE Table2.Attribute3 == 3
  ORDER BY Table2.Attribute2 DESC
  ```
- `UPDATE`
  ```SQL
  UPDATE Table1
  SET Attribute1 = Value1, Attribute2 = Value2
  WHERE Attribute3 = "Value"
  ```
- `INSERT`
  ```SQL
  INSERT INTO Table1
  VALUES (Value1, Value2)
  ```
  ```SQL
  INSERT INTO Table1 (Attribute1, Attribute2)
  VALUES (Value1, Value2)
  ```
- `DELETE`
  ```SQL
  DELETE FROM Table1
  WHERE Attribute1 = "Delete"
  ```
- `CREATE`
  ```SQL
  CREATE TABLE Table1 (
  Attribute1 DataType PRIMARY KEY NOT NULL,
  Attribute2 DataType NOT NULL,
  Attribute3 DataType FOREIGN KEY REFERENCES Table2(Attribute3)
  )
  ```
- SQL datatypes

| Data type       | Description                                          |
| --------------- | ---------------------------------------------------- |
| `CHAR (int)`    | String with specified number of characters           |
| `VARCHAR (int)` | String with up to the specified number of characters |
| `TEXT`          | String                                               |
| `INT`           | Integer                                              |
| `FLOAT`         | Floating point number                                |
| `DATE`          | Date only                                            |
| `DATETIME`      | Time and date                                        |
| `TIME`          | Time only                                            |

## 10.5 Client server databases

- Client server databases provide simultaneous access to a database for multiple clients
  <br>
- Concurrent access can result in the problem of updates being lost if two clients update a record simultaneously
- This is managed through:
  - Record locks
    - Maintains information about which record are currently being accessed
    - Checks if a lock has been made
    - If a read lock is set, only read transactions are permitted
    - If a write lock has been set, no transactions are permitted
    - Locks are released once transactions are complete
  - Serialising
    - Transactions are applied in a logical order
  - Timestamp ordering
    - A timestamp is recorded when each transaction begins
    - A timestamp recorded for the last successful read/write
    - Database determines whether there will be a loss in data integrity
  - Commitment ordering
    - Tracks conflicts between transactions
    - Applies transactions in an order that avoid conflicts
    - Abandons transactions if they cannot be completed
