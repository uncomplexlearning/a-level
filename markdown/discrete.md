# 1 Mathematical Preliminaries

# 2 Graphs and Networks
- A _graph_ is a set of _vertices_ (nodes) connected by a set of _arcs_ (edges)
- If two vertices are joined by an arc then they are _adjacent_
- The _degree_ $deg(v)$ of a vertex $v$ is the number of arcs "incident" to $v$
    - if the graph is directed, the _indegree_ is the number of arcs leading into that vertex, and the _outdegree_ is the number of arcs leading from that vertex

<br>

- A _walk_ is a set of arcs where the end vertex of one is the start vertex of the next
- A _trail_ is a walk in which no arcs are repeated
- A _path_ is a trail in which no nodes are repeated
- A _cycle_ is a closed path
- A _route_ can be a walk, a trail or a path, or may be a closed walk, trail or path

<br>

- A graph is _connected_ iff there is a path between every pair of vertex (i.e. it is possible to get from any vertex to any vertex directly **or** indirectly)
    - $\implies$ a connected graph with $n$ vertices has at least $n-1$ edges
- A graph is _simple_ iff there is only one arc between two adjacent vertices **and has no loops**
- A graph is _simply connected_ iff the graph is simple and connected
- A graph is a _tree_ iff it is connected and has no cycles

<br>

- A graph is _complete_ iff each vertex is adjacent to every other vertex
    - The complete graph $K_n$ has $n$ vertices and has $\frac{1}{2} n(n-1)$ arcs
    > ...because the $n^{th}$ vertex has $n-1$ adjacent vertices
- A graph is _bipartite_ iff the graph can be partitioned into two sets such that every arc joins a vertex from the first set to a vertex in the second set
    - alternatively, if the set of vertices $V$ of a graph can be partitioned into two sets $V_1$ and $V_2$, then there exists no edge inside both $V_1$ and $V_2$
    - The _complete bipartite_ graph $K_{m,n}$ has sets of size $m$ and $n$ and has $mn$ arcs
    > In the exam, you must explicitly write down the sets it can be partioned into
    - To show that a graph is bipartite, we can use a colouring argument
        - choose any vertex and colour it red (or label it A)
        - colour (or label) every vertex adjacent to a red vertex as blue 
        - colour every vertex adjacent to a blue vertex as red
        - repeat until all vertices have been coloured or a vertex is coloured both red and blue
        - if a vertex is coloured both red and blue the graph is not bipartite

<br>

- _Eulerian_ graphs have a closed trail including every edge
- A graph is _Eulerian_ iff every vertex has even degree (or equivalently has no odd vertices)
    > A vertex in a closed trail must have the same number of arcs coming in as coming out
- _semi-Eulerian_ graphs have an (open) trail including every edge
- A graph is _semi-Eulerian_ iff exactly two vertices have odd degree
    - then adding one singular edge to a semi-Eulerian graph would make it Eulerian

<br>

- A _Hamiltonian cycle_ is a cycle which passes through every vertex exactly once (except the start and finish, which are the same)
- A _Hamiltonian path_ is a path which passes through every vertex exactly once
- A graph is _Hamiltonian_ iff it contains a Hamiltonian cycle
> A graph is semi-Hamiltonian iff it contains a Hamiltonian path but is not Hamiltonian 
- Ore's theorem: For a simple graph $G$ with $n \geq 3$ vertices, if $deg(v) + deg(w) \geq n$ for every pair of distinct non-adjacent vertices $v$ and $w$, then $G$ is Hamiltonian
    - $\implies$ A contrapositive: If $G$ is not Hamiltonian, then there exists a pair of distinct non-adjacent vertices $v$ and $w$ where $deg(v) + deg(w) < n$
    - The original theorem is a **sufficient**, but not necessary condition, so if the contrapositive is true, it is inconclusive

<br>

- Two graphs $G$ and $H$ are _isomorphic_ iff there is a bijection $f$ from the set of nodes of $G$ to the set of nodes of $H$ such that the number of edges between $v$ and $w$ in $G$ is the same as the number of edges between $f(v)$ and $f(w)$ in $H$. We write that $G \cong H$.

> You may be asked to prove if a graph is a subgraph of another without using subdivision or contraction. In this case consider each vertex and what the graph will use to form the subgraph if it is included

# 3 Algorithms
# 4 Network Algorithms
# 5 Decision Making in Project Management
> aka operational research
# 6 Graphical Linear Programming
# 7 The Simplex Algorithm
# 8 Game Theory