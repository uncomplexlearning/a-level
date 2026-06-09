# 1 Fundamentals of programming

## 1.1 Programming

### 1.1.1 Data types

- Data types determine:
  - the range of values assigned to a variable
  - the way the data in memory is interpreted
  - the operations that can be performed on the data

#### C# types

- `int = 1`
- (4 bytes) `float = 0.0d`
- (8 bytes) `double = 0.0`
- (16 bytes) `decimal = 0.0m`
- `bool = true`
- `char = 'a'`
- `String = "Hello World!"`
- `DateTime = new DateTime(year, month, day, hour, minute, second)`

</br>

- Composite types are built with atomic types
- Records are collections of related data of different types

```c#
struct S {
	//	Identical syntax to classes
}
```

### 1.1.2 Programming concepts

#### Variable declaration

- Memory is allocated

#### Constant declaration

- Constants do not change during runtime

#### Assignment

- Giving a variable/constant a value

#### Iteration

- Repeating a set of instructions
- Definite (count-controlled)
  - for, foreach
  - number of iterations is known before start
- Indefinite (condition-controlled)
  - while, do...while
- Can be nested

#### Selection

- Choosing an action based on a value
- Can be nested

#### Subroutine (procedure/function)

- A named block of code containing a set of instructions

</br>

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

</br>

- Constants makes it:
  - easier to understand as it is named
  - easier to update in multiple places

### 1.1.7 String-handling operations in a programming language

- length</br>
  `String.length -> int`
- position</br>
  `String.IndexOf(string) -> int`
- substring</br>
  `String.Substring(int start, int length) -> String`
- concatenation</br>
  `String + String`
- character → character code</br>
  `(int)char`
- character code → character</br>
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

</br>

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

- A subroutine is:
  - named
  - a ‘out of line’ block of code
  - executed (called) by writing its name in a program statement
- Programs which use subroutines are:
  - easier to test as each subroutine can be tested separately
  - easier to understand if sensible identifiers are used
  - can be easily reused as each subroutine is independent of the rest of the program, so less duplicate code has to be written
  - easier to update in the future
  - allows for use of recursion

### 1.1.11 Parameters of subroutines

- Parameters are used to pass data within program

### 1.1.12 Returning a value/values from a subroutine

- Subroutines **can** return a value
- Functions **will always** return a value

### 1.1.13 Local variables in subroutines

- Subroutines may declare their own **local variables**, which:
  - exist only while the subroutine is executing
  - are accessible only within the subroutine (i.e. have limited scope)
- This allows:
  - modularisation of a program
  - reuse of subroutines
  - less chance of side-effects

### 1.1.14 Global variables in a programming languages

- Global variables can be accessed from any part of a program
- Global variables exist in memory for the entire runtime

### 1.1.15 Role of stack frames in subroutine calls

- Stack frames are used with subroutine calls to store:
  - return addresses
  - parameters
  - local variables
  - register values

</br>

- Nesting occurs when one subroutine calls another
  - Each subroutine call is pushed onto the call stack on top
  - When the subroutine finishes executing, the stack frame is popped from the call stack

### 1.1.16 Recursive techniques

- Recursive subroutines are subroutines which call itself
- It must have a base case (stopping condition)
  - a **base case** is the the circumstances when a recursive subroutine does not call itself
  - otherwise, it will never terminate

## 1.2 Programming paradigms

### 1.2.1 Programming paradigms

- A **paradigm** is a way of doing something
- There are different approaches to designing and writing a program
- ...but they will all compile into the same machine code

#### Functional programming

- no variables and no imperative statements
- comprises of expressions
- consists only of functions mapping one value to another
  - functions have no side effects

#### Imperative programming

- imperative statements (`if`, `for`, etc.)
- dependent upon side effects
- variables
  > includes procedural and object-oriented programming

### 1.2.2 Procedural-oriented programming

- A structured approach to program design and construction
- This includes:
  - using subroutines and modules
  - using hierarchy charts
  - using meaningful identifiers for variables and constants
  - using appropriate scopes for variables
  - using identation and comments

#### Advantages

- subroutines and modules can be individually tested
- indented and commented code is easier to read and understand
- meaningful identifiers make the code easier to debug

### 1.2.3 Object-oriented programming

#### Class

- Defines methods and property/attribute fields that capture the common behaviours and characteristics of objects

#### Object

- An instance of a class
- Created using a constructor
  - can be implicit (without using `new()` or explicit)
- A reference to the object assigned is a reference variable of the class type

#### Instantiation

- A class is a definition of an object
  - attributes and methods are declared
- An object is an instance of a class
- ...and instantiation is the process of creating the object belonging to a class
- ...which can be done by calling the constructor method of the class

```C#
class ClassName {
  public ClassName(params) {
    //constructor
  }
}

ClassName instance = new ClassName(params);
```

#### Encapsulation

- Combining a record with the procedures and functions that manipulate it to form a class
- ...aka putting things in classes

#### Inheritance

- When a child class gains the attributes and methods of a parent class
- All `private` and `protected` attributes of the parent class are available to the child class
- in UML, represented by an arrow from the child towards the parent
  > Because consistency is bad, we have:</br>
  > superclass - subclass</br>
  > parent class - child class</br>
  > base class - derived class</br>

#### Aggregation

- Form of association
- An object is associated with another
- Aggregated objects exist independently of the aggregating object
  - if the aggregating object is deleted, the aggregated object will not be
- in UML, represented by a white diamond line

#### Composition

- Restricted form of association
- An object contains another
  - if the container is deleted, the component is also deleted
- in UML, represented by a black diamond line

#### Polymorphism

- Providing interfaces for parameters of different types
- ...this can be done using override methods

#### Overriding

- Methods which can be overriden have to be declared as `virtual`
- ...and methods which override have to be declared as `override`

```C#
private class Class1 {
  protected virtual void Method1() {};
}

public class Class2 : Class1 {
  protected override void Method1() {};
}
```

#### OOP principles

- Encapsulate what varies
- Favour composition over inheritance
- Program to interfaces, not implementation

#### Access modifiers

- `public`
  - UML: `+`
  - can be accessed by any other object
- `private`
  - UML: `-`
  - can be accessed objects of the same class
- `protected`
  - UML: `#`
  - can be accessed by objects of the same class or a subclass (derived class)

# 2 Fundamentals of data structures

## 2.1 Data structures and abstract data types

### 2.1.1 Data structures

- **Data structures** are containers combining multiple pieces of data under a single identifier

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


```C#
int[] a = new int[3];
int[] b = new int[] { 1, 2, 3 };
int[] c = [1, 2, 3];
```

### 2.1.3 Fields, records and files

- A file is a data structure for storing data
- Each file is made of related records
- Each record is made of related fields

```C#
File.WriteAllText("filename.txt", "Hello World!"); 
File.WriteAllLines("filename.txt", ["Hello World!"]); 

string readText = File.ReadAllText("filename.txt");
string[] readLines = File.ReadAllLines("filename.txt");
```

### 2.1.4 Abstract data types/data structures
- Abstract data types are conceptual models of
  - how data is **organised**
  - the **operations** that can be carried out on that data
- Data structures are implementations of abstract data types
  - Technically, they are partial implementations
  - the data structure itself doesn't contain the operations

#### Static data structures
- **Static** data structures:
  - have a fixed size determined at compilation
    - ...so they are inefficient if more memory is assigned than is needed
  - are (typically) stored contiguously in memory
  - do not require pointers to be stored

#### Dynamic data structures
- **Dynamic** data structures:
  - change in size during runtime
    - utilises pointers and allocates memory from the heap
    - ...so only takes up the memory required for the actual data
  - is stored across memory locations
  - requires pointers to be stored with the data in memory to point to the next element
- However, this means they:
  - are slower than static data structires
  - may lead to memory leaks
    - if memory is not returned to the heap

## 2.2 Queues

### 2.2.1 Queues

- **Queues** are a type of ADT based on an array
- They act on a first in, first out (FIFO) principle
- A queue is made up of
  - an array
  - a front pointer
  - a rear pointer

#### Uses
- Keyboard buffers
- Handling file downloads
- Allocating resources (priority queue)
- Playlists
- Buffering network streams

#### Linear queues
- When an item is removed from a linear queue, all other items need to be shuffled up by 1, or it may result in unused capacity
- `enqueue`:
  - 1. check if queue is full
  - 2. increment rear pointer
  - 3. insert item into the index position indicated by the rear pointer
- `dequeue`:
  - 1. check if queue is not empty
    - ...which is when **front** pointer is smaller than rear pointer
  - 2. return item at the index position indicated by the front pointer
  - 3. increment the front pointer

#### Circular queues
- Has a queuesize variable
- Front and rear pointers can wrap around, so all spaces are usable without "shuffling"
- `enqueue`:
  - 1. check if queue is full (using the queuesize variable)
  - 2. increment rear pointer
  - 3. if the rear pointer is equal to the size of the array, set the rear pointer to 0
  - 4. insert item into the index position indicated by the the rear pointer
  - 5. increment the queuesize variable
- `dequeue`:
  - 1. check that the queue is not already empty
  - 2. if it isn't, then process the item at index position indicated by the front pointer
  - 3. increment front pointer
  - 4. if the front pointer is equal to the size of the array, set the front pointer to 0
  - 5. decrement the queuesize variable

#### Priority queues
- A priority is stored with each element
- `enqueue`:
  - starting with the item at the **rear** of the queue move each item **back** one place in the array
  - until:
    - the start of the queue is reached
    - item with the **same or higher** priority is reached
  - add the new item in the position before that item

## 2.3 Stacks

### 2.3.1 Stacks

- **Stacks** are a type of ADT based on an array
- They act on a last in, first out (LIFO) principle

- Stacks are made of:
  - An array
  - A stack pointer

#### Uses
- Rversing sequences
- Call stacks (storing stack frames)
- Storing register values while handling an interrupt
- Reverse polish notation
- Undo lists

#### Operations
- `push`:
  - check if stack is full
  - increment pointer
  - insert item into the index position of the pointer
- `pop`:
  - check if stack is empty
  - decrement pointer
  - return item at the old position of the stack pointer
- `peek`

> "Stack overflow" and "Stack underflow" refers to when a stack is full and empty and items are pushed/popped from it respectively

## 2.4 Graphs

- Graphs are used to represent more complex relationships
- **Weighted** graphs (aka networks) are graphs where each edge has an associated value (weight)
- **Directed** graphs (aka digraphs) have edges which have an associated direction

- Graphs contain
  - nodes (aka vertices)
    - smallest unit of a graph
  - ...joined by edges

#### Uses
- Representing networks
- Representing maps

#### Representations
- Adjacency list
  - each node has a list of adjacent nodes
  - suitable for:
    - sparse graphs
    - when edges rarely change
    - when querying the existence of specific edges is rare
- Adjacency matrix
  - tabular representation
  - each node is assigned a row and column
  - 1 is assigned to show that an edge exists, otherwise 0 is used
  - there is a diagonal line of 0s and diagonal symmetry
  - suitable for:
    - dense graphs
    - or where speed of querying the existence of specific edges is crtical

|      | Matrix                                                                  | List                                                                          |
| ---- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Size | Every possible edge is stored, even if there is no edge.<br>Inefficient | Only edges which exist are stored<br>Efficient                                |
| Time | A specific edge can be queried in O(1) time<br>Efficient                | Each element in the list must be traversed until edge is found<br>Inefficient |

## 2.5 Trees

- Trees are **connected**, **undirected** graphs with **no cycles**

#### Rooted tree
- One vertex has been designated as the root (usually at the top of a tree), and has
  - parent-child relationships between nodes
  - root is the only node with no parent
  - all other nodes are descendants of the root
- Trees do not have to have a root

#### Binary tree
- Each node has at most 2 children
- Has a root

## 2.6 Hash tables

- A **hash table** is a data structure containing mappings between keys and values based on an index calculated from a hashing algorithm
- Theoretically, accessing a record can be done in $O(1)$ time
  - the hashing algorithm will determine the memory location used, so there is no need to search through each record

#### Hashing algorithms
- A **hashing algorithm** takes in a input and return a hash
  - the same hash is always returned for the same input
  - usually, the hashing algorithm involves modulo division with the size of the table
- A good hashing algorithm should:
  - have a even distribution of hash values
  - use efficient operations

#### Adding a new record
- Hashing algorithm is applied to the **key**
- The resultant hash is the index the record should be stored
- If the location is not empty, then resolve the collision

#### Collisions
- Collisions occur when two key values compute the same hash
  - ...so the larger the table, the more collisions occur
  - ...so direct access will not happen as frequently
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

- **Dictonaries** are data structures which store **key-value pairs**
- ...where a value is accessed via the associated key

#### Representations
- Associative arrays
  - A pair of arrays, one storing keys and one storing values
  - Indices correspond
- Multi-dimensional arrays
  - Keys and values are stored on the same array

## 2.8 Vectors

- Vectors can be represented as:
  - a list of numbers
  - a function
    a way of representing a geometric point in space
- All entries must be drawn from the same field (set)

#### Notation

- A 4-vector over $\mathbb{R}$ = $\mathbb{R}^4$
- 0 maps to 2 = 0 ↦ 2

#### Implementation

- Dictionaries
- Lists
- 1-D arrays
- Arrows

#### Operations

- Addition
  - added top to tail geometrically
  - each component is added separately
  - used for translation
- Scalar multiplication
  - each component is individually multiplied by a scalar
  - use for scaling
- Convex combiation
  - satisfies
  ```math
  \mathbf{r} = a\mathbf{u} + b\mathbf{v}
  \\
  where\ a, b > 0; a + b = 1
  ```
  - geometrically, r is on the line that joins the tips of a and b
- Dot (scalar) product
  - used to find the angle between two vectors
  - for
  ```math
  \mathbf{u} = [u_1, \ldots, u_n] \quad \text{and} \quad \mathbf{v} = [v_1, \ldots, v_n]
  \\
  \mathbf{u} \cdot \mathbf{v} = u_1 v_1 + u_2 v_2 + \ldots + u_n v_n
  ```

# 3 Fundamentals of algorithms

## 3.1 Graph-traversal

### 3.1.1 Simple graph-traversal algorithms

#### Breadth-first

- Application:
  - finding the shortest path between two nodes in an unweighted graph
  - finding first-degree "friends" in social media networks
- Steps:
  - uses a queue
  - adds all nodes adjacent to the current node to a queue
  - iterates to repeat the process with the node at the front of the queue

```pseudocode
procedure BFS()
  queue.enqueue(root)
  while queue is not empty do
    vertex = queue.dequeue()
    label vertex as visited
    for each connected_vertex from vertex do
      if connected_vertex is not visited
        queue.enqueue(connected_vertex)
```

#### Depth-first

- Application:
  - maze navigation
  - determining processing order
- Steps:
  - uses a stack
  - recursively visit nodes adjacent to the starting node
  - when there are no unvisited adjacent nodes, backtrack and visit any unvisited adjacent nodes

```pseudocode
procedure DFS()
  vertex = stack.peek()
  label vertex as visited
  for each connected_vertex from vertex do
    if connected_vertex is not visited then
      push connected_vertex to stack
      DFS()
  stack.pop()
```

</br>

> Recursive implementation
>
> ```pseudocode
> procedure DFS(graph, vertex)
>   label vertex as visited
>   for each connected_vertex from vertex do
>     if connected_vertex is not visited then
>       recursively call DFS(graph, connected_vertex)
> ```

## 3.2 Tree-traversal

### 3.2.1 Simple tree-traversal algorithms

- Time complexity O(n)

#### Pre-order

- Application:
  - copying a tree
- Steps:
  - visit current node
  - traverse left subtree
  - traverse right subtree
    > Left dot

```pseudocode
procedure preorder(node)
  label node as visited
  if node.left exists
    preorder(node.left)
  if node.right exists
    preorder(node.right)
```

#### In-order

- Can only be used on binary trees
- Application:
  - binary search tree
- Steps:
  - traverse left subtree
  - visit current node
  - traverse right subtree
    > Bottom dot

```pseudocode
procedure inorder(node)
  if node.left exists
    preorder(node.left)
  label node as visited
  if node.right exists
    preorder(node.right)
```

#### Post-order

- Application:
  - infix to PRN conversion
  - producing a postfix expression from an expression tree
  - emptying a tree
- Steps:
  - traverse left subtree
  - traverse right subtree
  - visit current node
    > Right dot

```pseudocode
procedure postorder(node)
  if node.left exists
    preorder(node.left)
  if node.right exists
    preorder(node.right)
  label node as visited
```

## 3.3 Reverse Polish

- **Reverse Polish Notation** (RPN) is used because:
  - it is simpler for a machine to evaluate
  - the algorithm is simpler to program (using a stack)
  - brackets do not have to be used
  - there is no need for order of precedence of operators
    - operators appear in the order required for computation
  - there is no need to backtrack while evaluating

### 3.3.1 Reverse Polish – infix transformations
#### Infix to RPN
- Traverse left to right
  - 1. Evaluate brackets first
  - 2. Write operands in order, then append operator at the end

> You must write operands in order, even if you can create a mathematically equivalent expression <br>
> - e.g. `3 + 4 * 2 - 1` is `3 4 2 * + 1 -` only, not `4 2 * 3 + 1 -`


> This is a post-order traversal

#### RPN to Infix
- Traverse left to right:
  - 1. Place operator between preceding two operands
  - 2. Place expresssion in backets

#### Evaluation
- Traverse left to right:
  - 1. Push **operands** onto stack
  - 2. Upon reaching an operator, pop two operands off the stack
  - 3. Apply the operation and push the result back on the stack
  - 4. Repeat until the end of the expression
    - the top item on the stack will be the result

## 3.4 Searching algorithms

### 3.4.1 Linear search

- Time complexity $O(n)$
  - ...because there is a loop which repeats $n$ times

```pseudocode
procedure linearsearch(target)
  for each item in array do
    if item == target
      return found
```

### 3.4.2 Binary search

- Time complexity $O(log n)$
  - ...because each comparison halves the size of the list to be searched through
- Requires a sorted list

```pseudocode
procedure binarysearch(target)
  left = 0
  right = array.length - 1

  while left <= right do
    middle = (left + right) div 2
    if array[middle] == target
      return middle
    else if array[middle] < target
      left = middle + 1
    else
      right = middle - 1

  return -1
```

### 3.4.3 Binary tree search

#### Inserting items

```pseudocode
procedure bstinsert(root, item)
  if item < root then
    if not root.left then
      root.left = item
    else
      bstinsert(root.left, item)
  else
    if not root.right then
      root.right = item
    else
      bstinsert (root.right, item)
```

#### Searching

- Time complexity $O(log n)$

```pseudocode
procedure BSTiterative(node, target)
  found = false
  while found == false and node do
    if node == target then
      found
    else if node > target then
      node = node.left
    else if node < target then
      node = node.right
```

</br>

```pseudocode
procedure BSTrecursive(node, target)
  if not node then
    return false
  if node == target then
    found
  else if node > target then
    return BSTrecursive(node.left, target)
  else if node > target then
    return BSTrecursive(node.right, target)
```

## 3.5 Sorting algorithms

### 3.5.1 Bubble sort

- Time complexity $O(n^2)$
  - ...because each pass through the list $n$ items will be compared, and there are at most $n$ passes through the list

#### Unoptimised
```pseudocode
procedure bubblesort(array)
  for i = 0 to array.length - 1 do
    for j = 0 to array.length - 1 do
      if items[j] > items[j + 1]
        swap(items[j], items[j + 1])
```

#### Optimised
```pseudocode
procedure bubblesort(array)
  no_swaps = false
  while not no_swaps do
    no_swaps = true
    for i = 0 to array.length - 1 do
      if items[i] > items[i + 1]
        swap(items[i], items[i + 1])
        no_swaps = false
```
### 3.5.2 Merge sort

- Time complexity $O(n log n)$

```pseudocode
function mergesort(array)
  if array.length = 1 then
    return array
  middle = array.length div 2
  left = mergesort(array[0 : middle])
  right = mergesort(array[middle : array.length])
  return merge(left, right)

function merge(left, right)
  merged = []
  while left.length > 0 and right.length > 0 do
    if left[0] < right[0] then
      merged.append(left.pop(0))
    else
      merged.append(right.pop(0))

  if left.length > 0 then
    merged += left
  else if right.length > 0 then
    merged += right
  return merged
```

## 3.6 Optimisation algorithms

- Finds the best possible solution to a problem

### 3.6.1 Dijkstra’s shortest path algorithm

#### Applications

- satellite navigation systems
- routers

#### Implementation

- Set the distance to the source to 0
- Set the distance to every other node to infinity
- Push the source node into a min heap with its distance
- Pop the node with the smallest distance
  - calculate the disance to each adjacent neighbour and add it to the distance from the source to the node
  - if the distance is shorter than the current distance from the source to the neighbour, update it
- Repeat until the min heap is empty

```pseudocode
function dijkstra(Graph, source):

  for each vertex v in Graph.Vertices:
    dist[v] = INFINITY
    prev[v] = UNDEFINED
    add v to Q
  dist[source] = 0

  while Q is not empty:
    u = vertex in Q with minimum dist[u]
    Q.remove(u)

    for each arc (u, v) in Q:
      alt = dist[u] + Graph.Edges(u, v)
      if alt < dist[v]:
        dist[v] = alt
        prev[v] = u

  return dist[], prev[]
```

#### Explanations
- `prev` is used to store the previous node in the **shortest** path to this node
  - ...which allows the path to be recreated

# 4 Theory of computation

## 4.1 Abstraction and automation

### 4.1.1 Problem-solving

### 4.1.2 Following and writing algorithms

- An **algorithm** is a **sequence of steps** that can be followed to complete a task
- ...which **always terminates**

#### Programming constructs

- Sequence
- Assignment
- Selection
- Iteration

### 4.1.3 Abstraction

#### Representational abstraction

- **Representational abstraction** is to arrive at a representation by removing unnecessary details

#### Abstraction by generalisation or categorisation

- **Abstraction by generalisation** is to group by common characteristics to arrive at a hierarchical relationship
  > something "is a kind of" something else

### 4.1.4 Information hiding

- **Information hiding** is to hide all details of an object that do not contribute to its essential characteristics

### 4.1.5 Procedural abstraction

- **Procedural abstraction** is to abstract a computational method (the actual values used in any particular computation)
- ...in order to create a computational pattern or computational method
  - also known as a procedure

### 4.1.6 Functional abstraction

- **Functional abstraction** is to abstract a procedure
- ...in order to disregard the particular computational method
  - also known as a fucntion

### 4.1.7 Data abstraction

- **Data abstraction** is to isolate how a compound data object is used from the details of how it is constructed
- ...in order to allow new kinds of data objects to be constructed from previously defined types of data objects

### 4.1.8 Problem abstraction/reduction

- **Problem abstraction** is to remove details until the problem is represented in a way that is possible to solve
- ...because the problem reduces to one that has already been solved

### 4.1.9 Decomposition

> aka "procedural decomposition"

- **Decomposition** is to break down a problem into a number of subproblems
- ...so that each sub-problem accomplishes an identifiable task
- ...or can be further subdivided

### 4.1.10 Composition

- Combining procedures to form compound procedures
- Combining data objects to form compound data
  - e.g.: a tree data structure

### 4.1.11 Automation

- Automation requires putting models (abstraction of real world objects/phenomena) to solve problems
- This is achieved by:
  - creating algorithms
  - implementing the algorithms in program code
  - implementing the models in data structures
  - executing the code

## 4.2 Finite state machines (FSMs)

### 4.2.1 Finite state machines (FSMs) with and without output

#### Use

- A FSM can be used to model the behaviour of systems
  - compilers
  - hardware systems
  - syntax parsing
  - network protocols
- Define languages

#### State diagrams

- Circle - state
- Arrow pointing towards circle - inital state
- Two concentric circles - accepting state
- Arrow labelled with input - transition

#### Finite State Automata

- **Finite state automata** are FSMs with no output
- If only one transition between each state and input are possible
  - then the transition is uniquely determined by its input
  - and so the FSM is a deterministic Finite State Automaton

#### Mealy Machine

- A **Mealy Machine** is a type of FSM with output
- ...which do not have accepting states
- Produces output when input is being processed
  - ...instead of when a accepting state is reached
- Only one transition between each state and input are possible
  - is deterministic

</br>

- Used for
  - ciphertext
  - digital logic circuits

### 4.2.2 Maths for regular expressions

- A set is an **unordered** collection of values in which each value occurs **at most once**

#### Notation

- A set $A$ has elements $1, 2, 3, 4$ and $5$

```math
A = \{1, 2, 3, 4, 5\}
\\
A = \{x | x \in \mathbb{N} \wedge x \leq 5\}
```

- Compact representation

```math
\{0^n1^n | n \geq 1\} = \{01, 0011, 000111, ...\}
```

#### Finite sets

- Elements can be counted off by natural numbers up to a particular number

#### Infinite sets

- Sets with infinite elements

#### Countably infinite sets

- Elements can be counted off by the natural numbers.

#### Cardinality of a finite set

- The number of elements in a set

#### Cartesian product of sets

- The set of all ordered pairs $(a, b)$ where $a$ is a member of $A$ and $b$ is a member of $B$

```math
A \times B
```

#### Subset

- Set A contains everything in set B
- ...then set B is a subset of set A

```math
B \subseteq A
```

#### Proper subset

- Set B is a subset of set A, but there is at least one element in set A that is not in set B
- ...then set B is a proper subset of set A

```math
B \subset A
```

#### Countable set

- A set with the same cardinality as some subset of $\mathbb{N}$

#### Union

- A set S produced by the union of sets A and B will contain all unique elements of A and B

```math
A \cup B
```

#### Intersection

- A set S produced by the intersection of sets A and B will contain all elements in both A and B

```math
A \cap B
```

#### Difference

- A set S produced by the difference of sets A and B will contain all elements in A but not in B

```math
A - B = A \backslash B = \{x | x \in A \wedge x \notin B\}
```

### 4.2.3 Regular expressions

- A **regular expression** is a way of describing a set
- ...which allows particular types of languages to be described in a convenient shorthand notation

#### Metacharacters

- \* (0 or more of the preceding character)
- \+ (1 or more of the preceding character)
- ? (0 or 1 of the preceding character, ie optional)
- | (alternation, ie or)
- ( ) to group regular expressions

### 4.2.4 Regular language

- A language is called regular if it can be represented by a regular expression
- Regular expressions and FSMs are equivalent ways of defining a regular language
- Any language that FSMs will accept are regular languages

<br>

- Regular languages cannot do both left- and right-recursion (e.g. brackets)

## 4.3 Context-free languages

### 4.3.1 Backus-Naur Form (BNF)/syntax diagrams

#### Context-free languages

- Languages that follow the rules of a context-free grammar
- **Context-free grammars** are a set of production rules
  - production rules can be made up of other production rules
  - does not depend on the context of where it is used
  
</br>

- All regular expressions are context-free

#### Backus-Naur Form

- `<n>` - non-terminal symbols
- `n` - terminal symbol (literal character)
- `|` - OR operator
- `ε` - the empty set
- `<n> ::= ab` - production rule

</br>

- Recursive definition:

```pseudocode
<Integer> ::= <Digit>|<Digit><Integer>
<Digit> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

#### Syntax diagrams

- Visual representation of BNF
  - exactly equivalent

</br>

- Ovals - terminal symbols
- Rectangles - non-terminal symbols
- Arrows
  > Recursion is represented by an arrow that loops back to itself (non-terminal symbol)

#### Representation

- BNF can represent some languages that cannot be represented using regular expressions
  - Regular expressions do not support recursion

## 4.4 Classifcation of algorithms

### 4.4.1 Comparing algorithms

- Algorithms can be compared by expressing their complexity as a function relative to the size of the problem
- Efficiently implementing automated abstractions means designing data models and algorithms to run quickly while taking up the minimal amount of resources.

### 4.4.2 Maths for understanding Big-0 notation

- A function is a mapping from the domain to the co-domain

#### Types of function

- linear

```math
y = 2x
```

- polynomial

```math
y = x^2 + 2x
```

- exponential

```math
y = 2^x
```

- logarithmic

```math
y = log_{10} x
```

### 4.4.3 Order of complexity

- Constant - $O(1)$

  - same no matter input size

- Linear - $O(n)$

  - proportional to input size

- Polynomial - $O(n^c)$

  - proportional to the power c of input size for any real constant c

- Exponential - $O(2^n)$

  - doubles for every increase in input size

- Logarithmic - $O(log n)$

  - proportional to the logarithm of input size

- Factorial - $O(n!)$
  - grows factorially with input size

#### In order,

```math
O(1) \subset O(log n) \subset O(n) \subset O(n log n) \subset O(n^c) \subset O(2^n) \subset O(n!)
```

### 4.4.4 Limits of computation

- Algorithmic complexity and hardware impose limits on what can be computed

### 4.4.5 Classifcation of algorithmic problems

#### Tractable problems
- **Tractable problems** are problems that have a polynomial (or less) time solution

#### Intractable problems
- **Intractable problems** are problems that have no polynomial (or less) time solution
  - but still **can be solved**

#### Heuristics

- Heuristics are rules/knowledge about the problem domain
  - used to find a good/approximate but **not optimal** solution to a problem
  - reduces the size of the search/problem space
  - changing some constraints in the problem to make it easier to solve
- Heuristic methods are often used when tackling intractable problems
  - they find a solution that might not be the best

### 4.4.6 Computable and non-computable problems

- **Non-computable** problems cannot be solved algorithmically

### 4.4.7 Halting problem

- The **Halting problem** is the **non-computable** problem of determining whether any program will eventually stop (halt):
  - for a **particular input**
  - **without running** the program

- There is no algorithm that solves the halting problem
  - In general, inspection alone cannot always determine whether any given algorithm will halt for its given inputs

## 4.5 A model of computation

### 4.5.1 Turing machine

- A **Turing machine** can be viewed as a computer with a single fixed program, expressed using
  - a finite set of states in a state transition diagram
  - a set of transition rules
  - a finite alphabet of symbols
  - an infinite tape with marked-off squares
  - a sensing read/write head that can travel along the tape, one square at a time
  - a state register
- One of the states is called a start state and states that have no outgoing transitions arecalled halting states
- Turing machines provide a (general/formal) model of computation
  - iff an algorithm exists to solve a problem then a Turing machine can be designed to solve the problem

<br>

- Universal Turing machines are turing machines which can:
  - simulate the behaviour of any other turing machine
    - ...so can compute any computable sequence
  - faithfully executes every single operation on the data precisely as the simulated turing machine would
  - store instructions for any turing machine on its tape

> more formally,
> A UTM, U, is an interpreter that reads the description of any arbitrary Turing machine M; and faithfully executes operations on data D precisely as M does.; The description is written at the beginning of the tape, followed by D


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

#### Conversions

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

</br>

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
| -1 | 1/2 | 1/4 | 1/8 | 1/16 | 1/32 |
| --- | --- | --- | --- | --- | --- |
0 | 1 | 0 | 1 | 1 | 0

Exponent
| -8 | 4 | 2 | 1 |
| --- | --- | --- | --- |
0 | 1 | 0 | 0

- Converting floating point binary to decimal:

  - Fractions
    (1/2 + 1/8 + 1/16) x 2<sup>4</sup> = 11
  - Moving the point
    Exponent is 4, so we move the decimal point right by 4 places to get<br>

  | -16 | 8   | 4   | 2   | 1   | 1/2 |
  | --- | --- | --- | --- | --- | --- |
  | 0   | 1   | 0   | 1   | 1   | 0   |

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

</br>

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
  - **unique representations** of each number (so easier to compare)
- This involves:
  - manipulating the mantissa to start with 01 (positive) or 10 (negative)
  - subtracting the number of places the bits have shifted from the exponent in decimal
- The first bit after the sign bit is **significant**

### 5.4.9 Underflow and overflow

- Underflow occurs when the number is too small to be represented with the given word length
- Overflow occurs when the number is too large to be represented with the given word length

</br>

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

- Information coding systems for characters are known as character sets

</br>

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

- Bit patterns may represent other forms of data, including graphics and sound.

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

- Image is broken down into pixels
- Each pixel has a binary value assigned to it
- Stored as an array of pixels

#### Resolution

- Size of the image
- Number of dots per inch

#### Size in pixels

- Number of pixels in the image

#### Colour depth

- Number of bits stored in each pixel
- Corresponding to the number of colours that can be displayed

#### Metadata

- Bitmap images are usually stored with metadata, which includes:
  - width
  - height
  - colour depth
  - date created
  - make and model of camera
  - etc.

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
- Vector graphics allow for objects to be edited independently
- Bitmap graphics can represent images with complex textures
- Bitmap graphics can represent images not composed of regular shape
- Images captures from nature are bitmaps

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
- More compact representation
- Can be generated directly and send to instruments directly
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

- Scrambling data so it cannot be understood if intercepted

#### Caesar cipher

- replaces characters with another character, which is kept the same

#### Shift cipher

- all letters are shifted by the same amount
- can be very easily cracked
  - the frequency of each character provides a clue; E is the most common letter in the English alphabet

#### Subsitution cipher

- letters are randomly replaced

#### Vernam cipher

- contains a one-time pad
  - key that should only be used once
- key should be random and at least as long as the plaintext
- the binary value of each character has a logical XOR applied with the key
  -the key and the ciphertext must be transmitted to be decoded

</br>

- All ciphers except the vernam cipher are crackable in theory.
- Not all of them can be cracked within a reasonable timeframe
  - This is known as computational security

# 6 Fundamentals of computer systems

## 6.1 Hardware and software

### 6.1.1 Relationship between hardware and software

- Hardware is the physical components of a computer
- Software are the sequences of instructions which make up programs on a computer

### 6.1.2 Classification of software

- System software is used in the management of the system
- Application software peforms tasks for the user
  - general purpose software performs many tasks
  - special purpose software performs one specific task
  - bespoke software is written for a specific customer/organisation

### 6.1.3 System software

- OS
  - provides an interface between hardware and software
- Utility programs
  - peforms non-core system maintenance
- Libraries
  - provides reusable code used by software applications
- Translators
  - translate high-level source code to low-level machine code to be executed

### 6.1.4 Role of an operating system (OS)

- Operating systems exist to hide the complexities of the hardware through virtual machines
  - ...so each process things it has its own machine
  - provides a standard platform for applications using an API
- and also provides resource management
  - allocate processors (scheduling) and memory to competing processes
  - handle communcation between I/O devices and processes
  - file system to allocate space on storage devices

## 6.2 Classification of programming languages

### 6.2.1 Classification of programming languages

#### Low-level languages
- Low-level languages are:
  - based upon the instruction set of the processor
  - interacts with the hardware closely
  - not portable, as they are architechure dependent
- They are made of opcodes and operands:
  - expressed as binary (machine code)
  - mnemonics (assembly)

#### High-level languages
- High-level languages use human-oriented statements
  - ...so are highly abstracted
  - ...so:
    - they are easier to understand by humans
    - programs are shorter and quicker to write
    - meaningful names and reusable libraries can be used
    - data structures and programming structures can be used
    - programs are portable between architecture

<br>

- Imperative languages provide instructions which are executed by the computer in a defined sequence
  - each instruction in a high-level imperative language translates to many instructions in machine code

## 6.3 Types of program translator

### 6.3.1 Types of program translator

#### Assembler
- Translates assembly language source code into machine code
#### Compiler
- Translates a program as a whole and produces object code
- Compiling can be slow, but the compiled machine code runs quicker than a complier
- Only provides a list of error once the compiling process has finished/stopped because there is an error
- Hides the original source code
- Compiled program does not require the compiler to run
- If an unchanged program is executed multiple times, the compiler will only need to translate it once
#### Interpreter
- Translates a program one statement at a time, and calls pre-compiled subroutines to execute each statement
- Stops intepreting when an error is encounted
- Interpreter must be present for the program to run
#### Bytecode
- Provides an intermediate medium between interpreted and compiled languages
- Source code is compiled into bytecode, which is then:
  - just-in-time (JIT) compiled into object code and executed (by a virtual machine)
  - interpreted and executed using pre-compiled subroutines
- Bytecode is:
  - portable, if the appropriate runtime environment has been installed
  - faster than purely interpreted languages (but not as fast as compiled code)
  - binary, consisting of opcodes and operands

## 6.4 Logic gates
  
### 6.4.1 Logic gates

## 6.5 Boolean algebra

### 6.5.1 Using Boolean algebra

> Coming soon!

# 7 Fundamentals of computer organisation and architecture

## 7.1 Internal hardware components of a computer

### 7.1.1 Internal hardware components of a computer

#### Hardware components
- Processor 
  - executes instructions and sends control signals to other components
- Main Memory
  - temporarily stores data and instructions being processed by the CPI
- Address bus
  - group of wires which transmit the memory location being accessed by the CPU
  - unidirectional (CPU to memory)
  - width determines the amount of addressable memory
- Data bus
  - group of wires which transmit the data being accessed by the CPU and/or other components
  - bidirectional
  - width determines the rate of data transfer
- Control bus
  - group of wires which transmit control signals between the CPU and other components
  - e.g.:
    - system clock
    - read/write signal
    - interrupt request signal
- I/O controller
  - provides an interface between processor and other components
    - appears to the processor as addressable memory
  - consists of:
    - physical I/O ports
    - registers
    - physical interface to the motherboard

#### Von Neumann architechure
- A single shared memory is used to store both instructions and data
- ...this means that a processor cannot access an instruction and data at the same time, making it slower
- ...but it is more flexible

#### Havard architecture
- Instructions and data are stored in separate memory, with separate instruction and data busses
- ...so it can execute instructions more quickly as the processor can fetch instructions and data in parallel
  - useful in real-time processing, e.g. digital signal processors
  - useful in embedded systems, the size of each bus can be adjusted separately
  
#### Addressable memory
- Memory is made up of cells
- ...and each cell contains 1 byte of data
  - and has a unique address

<br>

- The processor uses the address bus to transmit the required address to memory
- The read enable and write enable lines determine whether data should be sent to the CPU via the data bus, or stored from the value on the data bus

## 7.2 The stored program concept

### 7.2.1 The meaning of the stored program concept

- Instructions can be encoded and stored in main memory (as opposed to early computers, which had to be physically modified)
- which are then fetched and executed **serially** by a processor that performs arithmetic and logical operations
- ...so different programs can be loaded and unloaded
- ...and can be change at any time by modifing the instructions in memory

<br>

- The OS kernel loads each program into memory
- ...in continuous blocks of free memory, to optimise execution

## 7.3 Structure and role of the processor and its components

### 7.3.1 The processor and its components

- A processor is made up of many components:
  - control unit (CU)
    - decodes instructions fetched from memory and identify the operations to be carried out
    - ...and if the instruction is arithmetic, it sends a control signal to the ALU
    - ...or if it is related to memory, then the CU will send control signals to memory
  - arithmetic logic unit (ALU)
    - carries out arithmetic and logical operations
    - stores result in the a specified GP register, or accumulator
  - clock
    - generates an oscillating electrical signal which synchronises components
      - components activate on the rising or falling edge of the signal
    - determines the number of FDE cycles carried out per second
  - general-purpose registers
    - small units of memory, storing values required by the processor to execute instructions
    - GP registers store any type of data
  - dedicated registers
    - program counter (PC)
      - stores the address of the next instruction to be fetched
      - updated every FDE cycle and if there is a branch instruction
    - current instruction register (CIR)
      - stores the current instruction to be decoded
    - memory address register (MAR)
      - stores the memory address where data should be retrieved or written to
    - memory buffer register (MBR)
      - stores the data recieved from the data bus/to be written to memory
    - status register (SR)
      - provides information about the result of the last instruction
      - stores the status of the processor, e.g.:
        - interrupt flag
        - overflow flag
        - accumulator

### 7.3.2 The Fetch-Execute cycle and the role of registers within it

#### Fetch
- contents of PC transferred to MAR
- address bus used to transfer this address to main memory
- read enable sent along control bus
- transfer of main memory content uses the data bus
- contents of addressed memory location loaded into the MBR
- increment contents of PC
- contents of MBR copied to CIR

#### Decode
- instruction to decode held by the CIR
- CU decodes the instruction
  - split into opcode and operand(s) 

#### Execute
- the identified operation is performed by the CU
  - if necessary, data is fetched/stored
  - or ALU used for calculation/comparisons
- result may be stored in registers or main memory
- status register updated
- if jump/branch required, then PC is incremented
- control bus will transfer signals to other components to initiate actions 
- check interrupt flag

### 7.3.3 The processor instruction set

- The instruction set is the set of bit patterns defining the machine code operations the processor can perform
  - each processor architechure has a unique instruction set

<br>

#### Instructions
- Each instruction is broken up into two parts:
  - opcode
    - the instruction to be executed
  - operand
    - the parameters required
    - e.g. value, memory address or register

### 7.3.4 Addressing modes
#### Immediate addressing
- the operand is the datum

#### Direct addressing
- the operand is the address of the datum
  - address to be interpreted as meaning either main memory or register

> Address modes may be incoporated into the opcode, so there are two opcodes for the same "instruction"

### 7.3.5 Machine-code/assembly language operations

- Assembly language is a low level language
- ...where each mnemonic maps to one machine code instruction
- Assembly code is translated into machine code by an assembler

<br>

#### Syntax
- Symbols
  - cf. variables in high level languages
  ```asm
  VALUE: #12
  LDA VALUE
  ```
- Labels
  - identifies a section of code to jump to

> Refer to Standard AQA assembly language instruction set for details

### 7.3.6 Interrupts

- Interrupts are signals sent to the processor  allows the current process to be suspended
- ...so the source of the interrupt can be serviced

<br>

- Interrupts can be caused by:
  - hardware
    - I/O controllers raise interrupts in response to inputs or events (e.g. keydown, printer out of paper)
  - software
    - terminated (both expected and unexpected)
  - exceptions
    - divide by 0, invalid memory address
  
#### Interrupt service routines (ISRs)

- Programs stored in memory (ROM or RAM) containing the instructions required to respond to an interrupt
- Start address of each ISR stored in an interrupt vector table (IVT)
- Interrupt register stores an offset vector relative to the start of the IVT to indicate the correct ISR to be executed

#### Process
- Processor detects interrupt
- Source and priority detected
- Volatile state of registers copied to system stack (in memory)
- Start address of the appropriate ISR obtained from the IVT
- ISR is executed, and the interrupt flag is disabled
- Register state is restored from the system stack

### 7.3.7 Factors affecting processor performance

#### Multiple cores
- Each core has its own CU and ALU, so multiple instructions can be processed at the same time
  - only if programs are multithreaded/tasks are parallelisable
#### Cache memory
- Cache is very fast memory located on/closed to the processor
  - ...made of SRAM (static RAM)
  - ...and stores recently fetched/anticipated instructions for faster retrieval
- Larger -> more instructions can be stored, so faster fetching
#### Clock speed
- Instructions per second
#### Word length
- The size of instructions or the number of bits processed simultaneously
- Higher -> improved performance
#### Address bus width
- Determines the size of addressable memory
#### Data bus width
- Determines the number of bits which can be transferred at once
  - typically identical to word length

## 7.4 External hardware devices

### 7.4.1 Input and output devices
#### Barcode reader
- laser is directed at bar code to illuminate the barcode
- moving mirror/prism moves light beam across bar code (or the reader is manually moved)
- light is reflected back
  - black and white bands reflect different amounts of light 
- A photodiode or CCD (charge-coupled device) measures the amount of reflected light, which is converted into electricial signal
- and stored as binary

> Alternatively, barcode readers can just be cameras
> - grid of sensors or a CMOS/CCD sensor measures light intensity of a point
> - sensor outputs a voltage dependent upon light intensity
> - which is converted into binary data with an ADC
> - and analysed by software to identify the black and white bands
> - and converted into the code

#### Digital camera
- light enters through the camera and is focused by the lens
- ...to pass through a Bayer filter to restrict light into RGB grids
- ...on to an array of sensors on the a (CMOS/CCD) sensor chip
- each sensor produces an electrical current/signal dependent upon light intensity, which represents a pixel
- which is converted into binary data with an ADC
- and a colour filter is applied to generate separate data values for RGB components
- demosaicing is used to reconstruct the colours
- the pixels are stored as an array;

#### Laser printer

- bitmap of the page to be printed is generated
- a negative charge is applied to a photosensitive drum
- a moving mirror directs a laser beam at the drum
- ...as the laser moves, areas struck by the laser loses charge
- ...the negative bitmap is drawn on the paper
- an opposite charge (to the drum) is applied to the toner
- toner sticks to drum based on charge
- and the paper is passed over the drum, where the toner transfers to it
  - a oppositely charged (to the toner) transfer roller assists transfer of toner from drum to paper
- a heater fuses the toner onto paper
- for colour printing four different colour toners (CMYK) are required

#### RFID

- RFID tag contains transmission circuitry and antenna
  - memory on tag stores data
- RFID reader emits EM waves
- ...which induces a current in the RFID tag
- RFID tag transmits data on the tag to the reader via EM waves
- RFID reader converts the waves back into binary data

> Active RFID tags also exist; they have a internal power source and transmits actively

### 7.4.2 Secondary storage devices

- Secondary storage is needed because:


#### Hard disk
- contains (multiple) disks stored vertically as a platter, and a read/write head
- each disk is coated in a magnetisable material
  - magnetising a spot in one direction could represent 0 and the other direction could represent 1
- disk divided into tracks (radially) and sectors (like a normal circle)
  - each intersection is known as a block
- disks spin at high speed
  - at a constant angular velocity
- read/write head moves radially to correct track
- ...and waits until correct sector passes under the read/write head
- read/write head senses the magnetic field and converts the data to binary
  - the whole block is read together
- data may be stored in a buffer while being read

> Each block is usually 512 or 4096 bits, but AQA writes their mark scheme like 1 block = 1 bit...

#### Optical disk
- disk is covered with pits and lands
- a low power laser coupled with a photodiode illuminates the surface
  - which moves radially
- disk spins at a constant linear velocity
- the photodiode detects the amount of light reflected from each pit and land
- which is converted into binary data
  - transitions between each pit and land are encoded as 1, while contiuation is encoded as a 0

<br>
- prone to scratching
- very cheap

> Writing to optical disks
> - disks have a photosensitive layer
> - high power laser makes areas less reflective

#### Solid-state disk (SSD)
> NOOOOO ITS A DRIVE!!! where is the disk in the SSD, AQA? don't you want your answers to be specific? double standards, not fair !! :(

- data is stored electronically with no mechanical moving parts
- data is stored in NAND flash made of floating gate transistors (electrons are trapped between oxide layers)
  - presence/absebce of trapped electrons/charge 0 / 1
- data is organised into pages
  - and pages form blocks
- a block must be erased before it can be written to
  - and only a whole block can be written to, not a page
- a controller manages the organisation of data

<br>
- can only be written a finite number of times; error rate will increase
- lower power consumpton
- generate less heat

# 9 Fundamentals of communication and networking

## 9.1 Communication

### 9.1.1 Communication methods

#### Serial transmission

- **Serial transmission** is where data is transmitted 1 bit at a time **along a single wire**

#### Parallel transmission

- **Parallel transmission** is where multiple bits of data is tramsitted simultaneously **across multiple wires**
- Uses:
  - PATA
  - Within intergrated circuits
  - Buses
- Disadvantages:
  - data skew may occur - time difference between when each bit is recieved
    - propagation delay between the clock source and the transmission circuit
    - physical properties of the wire
  - crosstalk may occur
    - interference bwteen parallel wires
      - capactive and inductive coupling between wires
  - expensive
    - multiple wires are needed

#### Synchronous data transmission

- When synchronous data transmission is used, a **common clock signal** is shared between the two devices
  - usually the clock signal is provided by the transmitting device along a dedicated wire
  - ...or using phase modulation

#### Asynchronous data transmission

- When asynchronous data transmission is used, **start and stop bits** added to data to form a frame
- The reciever reads the data on receipt of the start bit
  - the clock is temporarily synchronised for the duration of the transmission
- Start and stop bits must be opposites of each other
  - so if the start bit is logically low (0), then the stop bit must be logically high (1)
    > this is especially helpful if the line is kept logically high when idle
- Stop bit
  - provides time for the receiver to process / transfer the received data
  - allows the next start bit to be recognised
  
</br>

- The use of start and stop bits create overhead
  - the number of additional bits transmitted in a frame

### 9.1.2 Communication basics

#### Baud rate

- **Baud rate** is the number of symbol changes within a second

#### Bit rate

- **Bit rate** is the amount of data transferred between two devices in a second
- It:
  - can be higher than baud rate if more than one bit is encoded in each signal change
  - is directly proportionate to bandwidth

```math
bit\ rate = baud\ rate \times bits\ per\ symbol
```

#### Bandwidth

- **Bandwidth** is the **frequency range** available for transmission within a medium
 - difference between the highest and lowest frequency a communication medium can transmit

#### Latency

- **Latency** is the ime delay between a message being sent and recieved

#### Protocol

- A **protocol** is the set of rules followed during data transmission over a network to minimise inconsistencies

## 9.2 Networking

### 9.2.1 Network topology

#### Local Area Network (LAN)

- Computers are connected within a small geographic area
- Typically owned by one organisation
- Baseband
  - each transmission utilises the full capacity of the network

#### Wide Area Network (WAN)

- Computers are connected across a large geographic area
- Owned by telecommunications companies
- May be formed of multiple LANs connected together
- Broadband
  - multiple transmissions can occur at once

#### Physical star topology

- each node is individually connected to a central hub/switch
- switch forwards data using MAC addresses

| Advantages                                          | Disadvantages                             |
| --------------------------------------------------- | ----------------------------------------- |
| Rest of network is not affected if one device fails | Single point of failure in the switch/hub |
| Easy to isolate faults                              | More transmission medium is needed        |
| Packets can be broadcast without colliding (switch) |                                           |
| Switch ensures data is not broadcast                |                                           |

- Can behave logically as a bus network by using a bus protocol and appropriate physical switching

> Physical bus topology
>
> - each node is connected to a central bus
> - data from each node is broadcast to all connected devices
>   - so only one transmission can occur at once
>   - CSMA/CD

#### Logical bus network topology

- Logical toplogies describe the flow of data across a netwrok
- So, in a logical bus:
  - only one device can transmit at a time
  - data is broadcast to all nodes
- Ethernet uses a logical bus topology
  - data is packaged into a frame
  - frame is broadcast using CSMA/CD into the network
  - switch forwards the packet based on the frame
    > It doesn't anymore, lol

### 9.2.2 Types of networking between hosts

#### Peer-to-peer networking

- each computer has equal status and can act as both server and cluient
- peers communicate directly with each other
- resources are distributed across peers

</br>

- Advantages
  - no dependence on central server
  - easy and cheap to set up
  - no single point of failure
- Disadvantages
  - no centralised management/security
  - no centralised backup
  - files may be duplicated, leading to data inconsistency
  - peers may go offline while transmitting

#### Client-server networking

- Most computers are nominated as clients and one or more as servers
- Clients request resources from the servers
- Servers return responses to the client

</br>

- Advantages
  - files can be stored centrally, so can be accessed from any connected node
  - centralised backup, updates and security
  - nodes always recieve the most updated version fo a file
  - central user and account management
- Disadvantages
  - if the server is unavailable, users cannot access their files
  - server hardware more expensive than normal computers
  - single point of attack for cyberattacks
  - servers may be overwhelmed

### 9.2.3 Wireless networking

- WiFi (IEEE 802.11x) is a wireless local area network
  - based on international standards
- Used to enable devices to connect to a network wirelessly

#### Hardware

- Wireless network adapter
  - establishes connection between a computer and a WLAN
  - adapter and WAP must be compatible
    - WiFi provides backwards-compatibility
- Wireless access point (WAP)
  - allows wireless devices to connect to a LAN
  - broadcasts an SSID
  - responsible for security of the WLAN

#### Transmission

- 2.4 GHz or 5 GHz baseband
- broken down into smaller channels of:
  - 20 MHz (2.4 GHz)
    - 14 channels
    - 3 non-overlapping channels (1, 6, 11)
  - 40/80 MHz (5 GHz)
    - 24 non-overlapping channels
- WAP and devices are tuned to the same frequency

#### Performance

- Radio interference
  - many devices use 2.4GHz and 5GHz, as they are unregulated frequencies
  - other nearby networks may also interfere

#### Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)

- Sending device senses for other transmissions
- If the network is idle, the message is transmitted
- If the network is not clear, the sending devices waits for a random period of time before reattempting
- Sending device awaits an ACK frame from the recipient
  - if no ACK frame is recieved within an agreed timeframe, the packet is assumed to be lost
    - the message is resent
  - if an ACK frame is recieved, the sending device can return to idle

#### Hidden node problem

- Devices can only detect communications within their own range
- At the same time, another device could be communicating with the recepient, which the sending device cannot detect

</br>

- Request to Send/Clear to Send (RTS/CTS) is used:
  - Sending devices senses for other transmissions
  - If the network is idle, it sends an RTS frame to the recipient
    - all other devices go silent
  - The recipient returns a CTS frame
    - all devices within the range of the recipient will also go silent
  - The sending device recieves the CTS frame and transmits the message
  - Sending device awaits an ACK frame from the recipient
    - if no ACK frame is recieved within an agreed timeframe, the packet is assumed to be lost
      - the message is resent
    - if an ACK frame is recieved, the sending device can return to idle

#### Security

- WiFi is broadcast using radio waves, so any device witin range is able to eavsdrop
  - packets can be intercepted/sniffed
- Early WiFi versions provided little-to-no encryption

</br>

- WPA (Wifi Protected Access)/WPA2
  - users are authenticated using a pre-shared key (password)
  - or via an itermediary authenticaion server (RADIUS)
  - each packet is encrypted using AES
    - a new encryption key is created for each client session
    - but the packets exchanged during the handshake process will contain the decryption key
- SSID broadcast disabled
  - so other devices will not show the network as being available
- MAC address allow list
  - so only devices with a MAC address on the list is allowed to connect
    - this can be spoofed

#### Service Set Identifier (SSID)

- Identifies a network
- SSID broadcast allows device to show the network in the list of networks available to connect

## 9.3 The Internet
### 9.3.1 The Internet and how it works
#### Structure
- The Internet is made up of a series of interconnected networks
  - routes connect networks and are arranged in a hierarchy:
    - packets are passed up the hierarchy and transferred across networks before descending back down to their destination
    - > Tier 1 networks form the backbone, and are operated by Network Service Provides (NSPs)
      > - peering allows NSPs to exchange traffic with other NSPs free of charge <br>
      > 
      > Tier 2 and 3 networks pay networks higher up the hierarchy to transfer data through their networks <br>
      > Tier 1, 2 and 3 networks connect physically at Internet Exchange Points (IXs)
  - procotols supporting the internet operate at the Network/Internet layer 

#### Packet switching and routers
- Packets are containers of information to be transmitted over a network
- Packet switching is where information is broken up into packets before being sent independently across a network and reassembled at the destination
  - ...packets can be sent via different paths
  - ...and is efficient and fault-tolerant

- Packet switching process:
  - Data broken down into smaller packets by TCP or UDP
    - if TCP is used, each packet is given a sequence number and checksum
  - Packet is encapsulated within an IP packet and the header is filled
  - Each packet is sent to its destination
    - route is determined as the packets travel from router to router
  - Packets are unencapsulated at the destination
    - if TCP, an acknowledgement packet is sent

<br>

- Routers
  - pass packets across netwroks
  - are connected to one or more routes via its interfaces
  - determines:
    - if the packet should be dropped
    - if the packet should be forwarded, and if so, where
  - uses a routing and forwarding table, along with routing protocols and shortest path algorithms to route packets efficiently
    - contains the shortest path for certain destinations
  - ...but if the destination is not known, longest prefix matching is used
    - the known network address with the highest number of prefix bits matching the destination IP is used

<br>

- Gateways repackage packets to use a different link layer proctocol
  - packets may be sent between networks which use different link layer protocols
    - e.g. Ethernet to PPP (Point to Point Protocol)

#### Packets
- IP packets carry TCP segments and UDP datagrams, and allows them to be routed
  - IPv4 headers (20 bytes) contain:
    - the IP addresses of the source and destination
    - a checksum
    - a time to live (TTL) value
      - ensures packets do not get stuck in a cyclical route
      - decremented on every hop
      - ...and the packet is discarded when the TTL value is 1

#### URLs and FQDNs
- Fully Qualified Domain Names (FQDNs)
  - provide a human-friendly and easy to remember/identify address for a host in place of an IP address
  - provide the exact location of a particular host within a DNS hierarchy
  - comprised of:
    - hostname
    - names of all domains
  - and is separated by full stops

<br>

- Uniform Resource Locators (URLs)
  - a FQDN provides access to a particular host
  - a URL provides access to a particular resource from that host
  - comprised of:
    - protocol
    - FQDN or host address
    - path

#### DNS
- The Domain Name System (DNS) is responsible for resolving FQDNs into IP addresses

<br>

- Process:
  - A computer checks its local DNS cache for a record of the required FQDN
    - if it is found, the associated IP address is retrieved and used to send the request
  - The OS sends a DNS lookup request to its assigned DNS resolver
    - if the DNS resolver has a matching record, it responds with the associated IP address
  - A query to one of 13 root name servers is sent, which responds with the IP address of the TLD nameserver
  - The DNS resolver then sends a DNS request to the TLD nameserver, which responds with the IP addess of the nameserver for the domain in the FQDN
  - The DNS resolver sends a DNS request to the authoritative nameserver for that domain, which knows the IP address of all of its hosts. It returns the IP address to the resolver, which then returns it to the client

<br>

- DNS is not required if:
  - local device has a matching record in the hosts file
  - local device has a matching record in its DNS cache
  - URL has an IP address
  - URL is for a local resource
  - URL refers to localhost (127.0.0.1)

#### Internet registries
- Internet registries are organisations responsible for the administration and organisation of IP address and domain names
- Internet Assigned Numbers Authority (IANA) - IP
  - delegates the administraion of IP addresses and ASNs to 5 regional internet registeries
- Internet Corporation for Assigned Names and Number (iCANN) - DNS
  - delegates the responsibility for authoritatve nameservers within each TLD to other organisations

### 9.3.2 Internet security
#### Firewalls
- Firewalls are security measures designed to provide protection to a network by inspecting IP headers and restricting the exchange of data between the protected network and an external network
  - can be hardware or software
  - protects network from unauthorised access

<br>

- Packet filtering
  - the header of IP packets is inspected and compared to rules in the router's access control list (ACL)
  - this filters information such as:
    - source and destination IP address
    - protocol
    - source and destination ports
    - payload size
  - ...but does not inspect the payload itself
- Stateful inspection
  - inspect transport and application layer protocols within the packet
  - dynamically generate filtering rules
    - allows incoming packets which are part of an ongoing exchange initiated by an internal host
    - this can be done by recognising the TCP handshake, or passive FTP
- Proxy server
  - handles communication on behalf of an internal host
    - there is no direct connection between the internal and external host
    - provides anonymity to the internal host
    - provides application/request-level filtering 
    - logging
    - detects malformed packets

#### Encryption
- Encryption is the process of using an algorithm to convert plaintext into ciphertext which cannot be understood without a key

<br>

- Symmetric encyption
  - the same key is used to encrypt and decrypt the message
  - key exchange is required before communication starts
  - e.g. AES
- Asymmetric encryprtion
  - different (but related) keys are used to encrupt and decrypt the message
  - the public key is shared but the private key is kept secret
    - anyone can use the public key to encrypt a message that only the holder of the private key can decrypt
    - anyone can use the public key to verify that a message has been sent from a person with the private key
  - e.g. RSA
  
<br>

- Symmetric encryption is much faster than asymmetric
  - and so these two types of encryption are often combined
- Process:
  - A generates a symmetric key
  - A encypts the symmetric key with B's public key
  - A sends the key to B
  - B decrypts the key using its private key
  - A and B now share a symmetric key

#### Digital certificates
- A public key can be provided with a digital certificate generated and signed by a certificate authority

#### Digital signatures
- Digital signatures verify the identity of the sender and detect if a message has been altered during transmission
- Process:
  - A generates a hash of the message and encrypts it using A's private key
    - the encrypted digest is the digital signature
  - A appends the signature to the original message
  - A's original message and the signature is encrypted using B's public key before being sent to B
  - B uses its private key to decrypt the message and the signature
  - B rehashes the recieved message to produce a new digest
  - B uses A's public key to decrypt the original hash
  - The two hashes are compared
    - if the hashes match, A is verified as the sender

#### Malware
- Malware is software designed to damage data and/or systems
- ...by exploiting vuluerabilities in computer systems, e.g.:
  - ineffective firewalks
  - remote management software
  - default passwords
  - out of date software
  - bad memory management
    - buffer overlow attack

<br>

- Worms
  - standalone malware which doesnt require a host file to run
  - self-replicating
  - exploits network vulunerabilities
- Trojans
  - malware which appears legitimate
- Viruses
  - malware which attaches to/conceals itself within another program/file
  - memory resident
    - viruses which are loaded into memory when their host is opened, and continues running after it has been closed
  - boot sector virus
    - runs before operating systems

## 9.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol
### 9.4.1 TCP/IP
#### TCP/IP stack
- Divides protocols into layers

| Layer       | Purpose                                       | Examples      |
| ----------- | --------------------------------------------- | ------------- |
| Application | creates requests and interprets responses     | HTTPS, POP    |
| Transport   | set up end-to-end communication between hosts <br> performs error detection <br> splits data into segments <br> adds port numbers to identify the correct application| TCP, UDP      |
| Network     | encapsulates segements into packets <br> allows routing to be performed by adding source and destination IP address  | IP            |
| Link        | physical transmission of data in frames       | Ethernet, PPP |

#### Sockets
- Consists of an IP address and a port, separated by a colon
  - ports are allocated to network application by the OS
    - allows a single device to run multiple network applications on a single IP address

<br>

- Well-known ports are reserved ports for a specific procotol
  - so clients can initiate communication with remote servers
  - assigned by IANA

| Protocol | default TCP port |
| -------- | ---------------- |
| HTTPS    | 443              |
| HTTP     | 80               |
| FTP      | 21               |
| SSH      | 22               |
| SMTP     | 25               |
| POP      | 110              |
| IMAP     | 143              |

- Client ports are dynamically allocated
  - changes with each new TCP session
  - used by the OS to direct packets towards each application

#### MAC addresses
- are 48-bit (6 pairs of hexadecimal digits) 
- Used to identify network interfaces on a LAN
  - used by link layer protocols to direct frames between network interfaces

### 9.4.2 Standard application layer protocols
#### FTP (File Transfer Protocol)
- Used to transfer files between computers on networsk
- FTP server
  - allows FTP clients to make requests
- FTP client
  - can be anonymous or non-anonymous (user authorisation)

#### HTTP (Hypertext Transfer Protocol)
- Used by web browsers and webservers
- a HTTP request contains
  - an access method (e.g. `GET`)
  - a file path
- a HTTP response contains
  - a status code
  - a body (in plaintext)

<br>

- Webservers
  - recieves (listens for) HTTP requests
  - responds with HTML text in HTTP responses
- Web browsers
  - generates HTTP requests
  - renders the recieved HTML from the response
  - provides a ECMAScript runtime environment

#### HTTPS (Hypertext Transfer Protocol Secure)
- uses TLS (Transport Layer Security) to encrypt HTTP 

#### POP3 (Post Office Protocol (v3))
- retrieves a copy of email messages from the mail server onto the client
- local changes are not synchronised

#### IMAP (Internet Message Access Procotol)
- access email messages from the mail server
- changes are synchronised

#### SMTP (Simple Mail Transfer Protocol)
- transmits emails from a client to a mail server, or between mail servers

#### SSH (Secure Shell)
- allows for remote access to the command line interface of another device
- useful for managing remote servers, e.g.
  - configuring services
  - user management
  - configuring firewalls
- SSH provides an encrypted connection

<br>

- SSH client can also be used to make a TCP connection to a remote port for the purpose of sending commands to this port using application level protocols
  - e.g. GET for HTTP, SMTP commands for sending email and POP3 for retrieving email


### 9.4.3 IP address structure
- an IP address is split into a network identifier part and a host identifier part

<br>

- there are two unusable host identifiers (0000 - subnet; 1111 - broadcast)
  - so if n bits is used to represent the address, only 2<sup>n</sup>-2 unique hosts can be represented

### 9.4.4 Subnet masking
- Networks can be divided into subnets
- A subnet mask is used to identify the network identifier part of the IP address

<br>

- Subnet masks are applied by bitwise AND with the addresss in binary

<br>

- Subnets:
  - reduce the broadcast domain of the network, so performance is improved
  - increases security as packets between subnets must be exchanged through routers
  - is used by routers to determine if the destination host is internal or external

### 9.4.5 IP standards
- IPv4
  - 4, one byte numbers separated by full stops (32 bits in total)
  - only around 4 billion in total, all address have been assigned
- IPv6
  - 8, 4 hexadecimal digits (16 bits) separated by colons (128 bits in total)
  - introduced to solve the address exhaustion problem
  - removes need for NAT and DHCP
  - has larger IP packet size

### 9.4.6 Public and private IP addresses

#### Routable IP addresses
- are globally unique
- assigned by authorties

#### Non-routable IP addresses
- private IP addresses
- unique within LAN, but not globally

### 9.4.7 Dynamic Host Configuration Protocol (DHCP)
- IP address is dynamically allocated and leased to a host for a fixed duration
- DHCP server is required
- Process:
  - host broadcasts DHCPDISCOVER packet
  - server broadcasts with DHCPOFFER pack
  - host sends DHCPREQUEST packet to confirm the offer, and ask for additional information (e.g. subnet mask, DNS server)
  - server sends DHCPACK packet with the information requested

<br>

- less error-prone, as no chance of IP conflict
- more efficient, as IP addresses can be reassigned after their lease expires
- easier, as no user input required

### 9.4.8 Network Address Translation (NAT)
- NAT allows a single global IP address to be shared amongst many hosts in a LAN
- managed by routers
  - a translation table is used 
  - the TCP/UDP source port is changed to indicate which internal host/port the packet originated from

### 9.4.9 Port forwarding
- a feature of NAT
- routers set up to always forward packets with a specific destination port to a specific host/port

### 9.4.10 Client server model
- Servers provide services requested by clients
- Clients utilise resources provided by servers

<br>

- Client sends a request message to server
- Server responds to request by replying with a response message to client

#### Websockets
- an API establishing a full-duplex 'socket' connection between a web browser and a server over TCP
  - persistent connection between client and server
  - data can be sent at any time

#### RESTful APIs
- REST (Representational State Transfer) APIs use standard HTTP methods 
  - so the server's implementation is abstracted from clients
  - enables CRUD to be mapped to database functions (SQL) 

| HTTP Method (REST) | SQL    | CRUD     |
| ------------------ | ------ | -------- |
| POST               | INSERT | CREATE   |
| GET                | SELECT | RETRIEVE |
| PUT                | UPDATE | UPDATE   |
| DELETE             | DELETE | DELETE   |

- databases can be connected to browsers through a REST API
  - ECMAScript in browser calls the API to communicate with server

#### JSON and XML
- used to transmit data between a server and web application
- JSON is:
  - easier for a human to read
  - more compact
  - can be converted into objects natively in some languages
  - supports arrays/lists natively

### 9.4.11 Thin- versus thick-client computing

| Thin-client                                         | Thick-client                          |
| --------------------------------------------------- | ------------------------------------- |
| Most processing performed on server                 | Most processing performed on machine  |
| Inputs sent to server                               | Inputs processed locally              |
| Applications hosted on server and accessed remotely | Applications installed locally        |
| Has less computational power                        | Requires more computational power     |
| Server requires more computational power            | Servers can be relatively low powered |

# 10 Fundamentals of databases

## 10.1 Conceptual data models and entity relationship model

#### Entity

- Thing about which data is to be store

#### Attributes

- Information about entities

#### Entity Indentifiers

- Unique attribute within a table to identify an entity

#### Entity description

- Used to describe how an entity can be stored in a database
- Written as:<br>Entity1 (<ins>Identifier</ins>, Attribute1, Attribute2, Attribute3)

#### Entity-relationship diagrams

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

- A type of database that organises data into multiple linked tables and provides access to data points related to each other

#### Primary key

- An attribute that provides a unique identifier for each entity

#### Composite primary key

- A primary key composed of multiple primary keys
- Only used when it is not possible to form a primary key from just one attribute

#### Foreign key

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
- Therefore, a fully normalised database:
  - Eliminates update, insertion and deletion anomalies
  - Eliminates data inconsistency
  - Minimises data duplication

</br>

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
- Third normal form (3NF)
  - Table is already in 2NF
  - There are no non-key dependencies
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

</br>

- Concurrent access can result in the problem of updates being lost if two clients update a record simultaneously
- This is managed through:
  - Record locks
    - Maintains information about which record are currently being accessed
    - Locks are set on a record when a transaction starts
    - Checks if a lock has been set on the record
    - If a read lock is set, only read transactions are permitted
    - If a write lock has been set, no transactions are permitted
    - Locks are released once transactions are complete
  - Serialising
    - Transactions are applied in a logical order
  - Timestamp ordering
    - A timestamp is recorded when each transaction begins
    - A timestamp recorded for the last successful read/write for each record
    - Database determines whether there will be a loss in data integrity
  - Commitment ordering
    - Tracks conflicts between transactions
    - Applies transactions in an order that avoid conflicts
    - Abandons transactions if they cannot be completed

# 11 Big Data
## 11.1 Big Data
- Big data is data that is collected on such a large scale that it cannot easily be analysed,
- ...and can be described in terms of:
  - **volume**
    - too large to be stored on a single server
  - **velocity**
    - created and modified in milliseconds
  - **variety**
    - many forms of data

#### Issues
  - Functional programming has:
    - immutable data structures
    - statelessness
    - higher-order functions
  - ...so,
      - different processes can apply functions to the "same" data without worrying if they have been modified
      - there is no need to wait for another process to finish
      - there is no need to apply functions in a particular sequence

#### Fact-based model
- Relational databases do not suit the volume and variety of Big Data
- ...so a Fact-based model is used
  - each piece of information is stored as an immutable fact
  - ...with a timestamp
- This can be represented using a graph schema
  - entities are linked together with arrows representing their relationships
  - timestamps are not included, only the most recent information is

# 12 Fundamentals of functional programming
## 12.1 Functional programming paradigm
### 12.1.1 Function type
- A function $f$ has a type signature representing its domain $A$ and co-domain $B$
  ```
  f: A \mapsto B
  ```
- The domain and co-domain are always subsets of objects in some data type

> Note that if a function takes two (or more) arguments, it only has one domain, which would be the cartesian product of the domains of the two arguments

### 12.1.2 First-class object
- First-class objects are objects which:
  - appear in expressions
  - are assigned to variables
  - are used as arguments
  - are returned by functions
- Both imperative and functional languages have first-class objects

### 12.1.3 Function application
- Function application is the process of providing a function with inputs

### 12.1.4 Partial function application
- Partial function application is the process where:
  - a function is applied to one of its argument
  - a new function is output, which always does what the original function and paramater does

### 12.1.5 Composition of functions
- Function composition combines two functions $f$ and $g$ to form a new function $f \circ g$
  - $g$ is applied first
  - the $f$ is then applied to the result

## 12.2 Writing functional programs
### 12.2.1 Functional language programs
#### Higher order functions
- A **higher order function** is a function which
  - takes a function as an argument, and/or
  - returns a function
- This includes:
  - `map` - applies a given function to each element of a list, returning a list of results
  - `filter` - processes a data structure to produce a new data structure containing exactly those elements of the original data structure that match a given condition
    - this may be out-of-order
  - `fold` or `reduce`
    - reudces a list of values to one value by applying a combining function (with an initial value)
      - a combining function is one that takes 2 or more arguments and returns one output

> In most functional languages, there exists at least 2 types of folding, including `foldl` and `foldr`

## 12.3 Lists in functional programming
### 12.3.1 List processing
- In functional languages, lists are represented as a concatenation of:
  - head (e.g. `x`)
  - tail (e.g. `xs`)