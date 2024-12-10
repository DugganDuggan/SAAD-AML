# {Choosing a database}

## Context and Problem Statement

The AML system requires a reliable and scalable database to store vital information for the system to function, including media information and inventory, user accounts, borrowing records and more.

## Considered Options

* {MySQL}
* {MSSQL (Microsoft SQL Server)}
* {PostgreSQL}

## Decision Outcome

Chosen option: {MySQL}, because {Open source nature means it will be cost effective for the AML system which likely will have a limited budget | Previous experience and familiuraity with this techonology will speed up the development process | It scaling well with large read-heavy workloads is well suited to the requirements of the AML system with the large media library}

### Consequences

* Good, because {Open source and cost effective}
* Good, because {Reliable and scalable for structred data}
* Good, because {Wide support and extensive documentation}
* Bad, because {Limited support for semi-structured data}

## Pros and Cons of the Options

### {MSSQL}

* Good, because {Enterprise-grade features and high reliability}
* Good, because {Strong integration with other Microsoft tools and products}
* Bad, because {Licensing costs would be expensive}
* Bad, because {May introduce a further level of complexity}

### {PostgreSQL}

* Good, because {Support for JSON/JSONB semi-structured data}
* Bad, because {Steeper learning curve as no one is familiar with it}
