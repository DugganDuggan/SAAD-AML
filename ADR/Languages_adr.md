## Architectural Decision Record (ADR)  

### **Title:** Programming Language Selection  

---

### **1. Context and Problem Statement**  
The project required selecting programming languages and technologies to build the web application. These choices needed to balance ease of use, team familiarity, maintainability, and scalability. The decision included the selection of technologies for the frontend, backend, and styling.  

---

### **2. Considered Options**  
- **Frontend:** TypeScript with Angular or JavaScript with Vanilla JS.  
- **Backend:** Node.js or Java.  
- **Styling:** HTML and CSS.  

---

### **3. Decision Outcome**  
- **Frontend Language:** TypeScript with Angular.  
- **Backend Language:** Node.js.  
- **Styling:** HTML and CSS.  
- **Reasoning:**  
  - TypeScript with Angular was chosen for its strong type-checking, component-based architecture, and rich ecosystem.  
  - Node.js was selected for its asynchronous capabilities and the ability to use JavaScript across both client and server.  
  - HTML and CSS were used for their simplicity and universal support in web development.  

---

### **4. Consequences**  
- **Positive:**  
  - TypeScript improves code quality and maintainability by catching errors during compilation.  
  - Angular provides a modular and scalable framework for building the frontend.  
  - Node.js simplifies development by using JavaScript for both client and server logic, reducing context switching.  
  - HTML and CSS are universally supported and easy to use for creating responsive and accessible designs.  

- **Negative:**  
  - Angular has a steeper learning curve compared to simpler frontend frameworks like React.  
  - TypeScript and Angular increase initial setup complexity.  
  - Node.js, while scalable, is less performant for CPU-intensive tasks compared to Java.  
  - CSS can become challenging to manage for larger projects without proper structuring.  

---

### **5. Pros and Cons of the Options**  

**TypeScript with Angular**  
Pros: Strong type checking improves code reliability, modular architecture supports scalability, and rich documentation and tooling aid development.  
Cons: Has a steep learning curve and is more complex than Vanilla JavaScript for smaller projects.  

**JavaScript with Vanilla JS**  
Pros: Simple to learn, fast for small-scale development, and has a low setup cost.  
Cons: Lacks strong typing, making it error-prone for larger applications, and it becomes harder to manage as the codebase grows.  

**Node.js**  
Pros: Unified language across frontend and backend, asynchronous nature improves scalability, and it has a vast library ecosystem.  
Cons: Single-threaded model limits performance for CPU-intensive tasks.  

**Java**  
Pros: Ideal for enterprise-level applications, highly secure, and supports multithreading for high performance.  
Cons: Verbose syntax increases development time for smaller projects, and it requires more boilerplate code.  

**HTML and CSS**  
Pros: Universally supported, easy to use, and enables responsive designs for web applications.  
Cons: Limited styling and layout control without frameworks like Bootstrap or preprocessors like SASS.  

---  

