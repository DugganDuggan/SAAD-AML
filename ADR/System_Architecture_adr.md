# {Choosing System Architecture}

## Context and Problem Statement

The system requires an architecture that can be easily implemepted for the proof of concept but that is also maintaniable and scalable for the full AML system.

## Considered Options

* {Monolithic Architecture}
* {Three-Tiered Architecture}
* {Service-Oriented Architecture}

## Decision Outcome

Chosen option: {Three-Tiered Architecture}, because {Clear seperation between the presentation tier, logic tier and data tier | Each layer is highly scalable and be scale individually of each other | Balanced complexity means it avoids the added complexity of SOA while being more modular and scalable than a monolithic approach | Can be implemented within the time contraint of the module}

### Consequences

* Good, because {clear distinction of layers simplifies maintance and testing}
* Good, because {Each layer can scale independent of each other}
* Bad, because {Limited flexibility due to layers}

## Pros and Cons of the Options

### {Monolithic Architecture}

* Good, because {Simple to develop and intergrate}
* Bad, because {Difficult to scale}
* Bad, because {Difficult to maintain}

### {Service-Oriented Architecture}

* Good, because {Reuse of services improves maintainabilty and scalability}
* Bad, because {Added level of complexity to implement}
