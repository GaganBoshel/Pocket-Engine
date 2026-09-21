const fs = require('fs');
const path = require('path');

const rawPages = [
// Page 3
`1. 1. Basic Computer
Q1. What is a computer?
Ans: A computer is an electronic device that accepts data, processes it, stores it, and produces useful information.
Q2. What are the main characteristics of a computer?
Ans: Speed, accuracy, storage capacity, automation, versatility, and consistency are major characteristics.
Q3. What are the advantages of computers?
Ans: Computers work quickly and accurately, store large amounts of data, automate tasks, and can perform many types of work.
Q4. What are the limitations of computers?
Ans: Computers cannot think independently like humans and depend on instructions, data, electricity, and correctly working hardware.
Q5. What are the basic parts of a computer?
Ans: Common parts include the CPU, monitor, keyboard, mouse, storage, memory, motherboard, and power supply.
Q6. What is hardware?
Ans: Hardware is the physical part of a computer that can be seen and touched.
Q7. What is software?
Ans: Software is a collection of programs and instructions that tells computer hardware what to do.
Q8. What is system software?
Ans: System software manages computer hardware and provides a platform for applications, such as an operating system.
Q9. What is application software?
Ans: Application software is designed to help users perform specific tasks, such as word processing or web browsing.
Q10. What is an operating system?
Ans: An operating system is system software that manages hardware, files, memory, processes, and applications.
Q11. Give examples of operating systems.
Ans: Windows, Linux, macOS, Android, and iOS are examples of operating systems.
Q12. What is a CPU?
Ans: CPU stands for Central Processing Unit. It executes instructions and performs calculations and logical operations.
Q13. What are the main components of CPU?
Ans: The major functional parts are the Arithmetic Logic Unit, Control Unit, and registers.
Q14. What is ALU?
Ans: ALU stands for Arithmetic Logic Unit. It performs arithmetic and logical operations.
Q15. What is CU?
Ans: CU stands for Control Unit. It directs and coordinates the operations of the computer.
Q16. What is a register?
Ans: A register is a very small, fast storage location inside the CPU used during processing.
Q17. What is RAM?
Ans: RAM stands for Random Access Memory. It temporarily stores data and programs currently being used.`,

// Page 4
`Q18. What is ROM?
Ans: ROM stands for Read-Only Memory. It stores information that is retained when power is removed, traditionally including firmware.
Q19. Difference between RAM and ROM.
Ans: RAM is generally volatile and used for active work; ROM is non-volatile and commonly stores firmware or other persistent instructions.
Q20. What is cache memory?
Ans: Cache is very fast memory used to keep frequently needed data and instructions close to the CPU.
Q21. What is primary memory?
Ans: Primary memory is memory directly accessible by the CPU, mainly RAM and related high-speed memory.
Q22. What is secondary memory?
Ans: Secondary memory provides long-term storage, such as SSDs, hard drives, memory cards, and optical discs.
Q23. What is a hard disk?
Ans: A hard disk drive is a storage device that uses magnetic disks to store data.
Q24. What is an SSD?
Ans: An SSD is a solid-state storage device that uses flash memory and has no moving disk mechanism.
Q25. Difference between HDD and SSD.
Ans: HDDs use spinning magnetic disks, while SSDs use flash memory and are generally faster and more resistant to physical shock.
Q26. What is a motherboard?
Ans: A motherboard is the main circuit board that connects the CPU, memory, storage, expansion devices, and other components.
Q27. What is a keyboard?
Ans: A keyboard is an input device used to enter text, numbers, commands, and shortcuts.
Q28. What is a mouse?
Ans: A mouse is a pointing input device used to move a pointer and select or interact with items.
Q29. What is a monitor?
Ans: A monitor is an output device that displays text, images, video, and other information.
Q30. What is a printer?
Ans: A printer is an output device that produces a physical copy of digital information.
Q31. What is a scanner?
Ans: A scanner is an input device that converts physical documents or images into digital form.
Q32. What is a USB?
Ans: USB stands for Universal Serial Bus. It is a standard for connecting and communicating with peripherals and transferring data and power.
Q33. What is a file?
Ans: A file is a named collection of digital data stored on a computer or storage device.
Q34. What is a folder?
Ans: A folder is a container used to organize files and other folders.
Q35. What is a computer network?`,

// Page 5
`Ans: A computer network is a group of connected devices that can communicate and share resources.
Q36. What is the Internet?
Ans: The Internet is a worldwide network of interconnected computer networks that communicate using common protocols.
Q37. What is a browser?
Ans: A web browser is software used to access and display websites and web applications.
Q38. What is a search engine?
Ans: A search engine is an online service that helps users find information on the web.
Q39. What is email?
Ans: Email is a system for sending and receiving electronic messages over computer networks.
Q40. What is a computer virus?
Ans: A computer virus is malicious software that can replicate by attaching to files or programs and may disrupt or damage systems.
Q41. What is antivirus software?
Ans: Antivirus software detects, blocks, and removes or quarantines many forms of malicious software.
Q42. What is malware?
Ans: Malware is a general term for malicious software designed to damage, disrupt, spy on, or gain unauthorized access to systems.
Q43. What is a password?
Ans: A password is a secret string used to authenticate a user or protect an account or resource.
Q44. What is cybersecurity?
Ans: Cybersecurity is the practice of protecting computers, networks, applications, and data from unauthorized access and attacks.
Q45. What is cloud computing?
Ans: Cloud computing provides computing resources such as storage, processing, and software over a network, usually the Internet.
Q46. What is an IP address?
Ans: An IP address is a numerical address used to identify an interface or device on an IP network.
Q47. What is Wi-Fi?
Ans: Wi-Fi is a family of wireless networking technologies based on IEEE 802.11 standards.
Q48. What is Bluetooth?
Ans: Bluetooth is a short-range wireless technology used to connect compatible devices.
Q49. What is LAN?
Ans: LAN stands for Local Area Network and connects devices within a limited area such as a home, school, or office.
Q50. What is WAN?
Ans: WAN stands for Wide Area Network and connects networks across larger geographic areas.`,

// Page 6
`2. 2. HTML
Q51. What is HTML?
Ans: HTML stands for HyperText Markup Language and is used to structure content on web pages.
Q52. What does HTML stand for?
Ans: HTML stands for HyperText Markup Language.
Q53. What is an HTML tag?
Ans: An HTML tag is markup written inside angle brackets that defines or identifies an element.
Q54. What is an HTML element?
Ans: An HTML element usually consists of a start tag, content, and an end tag, although some elements are void elements.
Q55. What is an HTML attribute?
Ans: An attribute provides additional information or configuration for an HTML element, such as href or src.
Q56. What is the basic structure of an HTML document?
Ans: A typical document contains <!DOCTYPE html>, html, head, and body elements.
Q57. What is the purpose of DOCTYPE?
Ans: It tells the browser which document standard to use; in modern HTML, <!DOCTYPE html> activates standards mode.
Q58. What is the html tag?
Ans: The html element is the root element containing the document's HTML content.
Q59. What is the head tag?
Ans: The head contains metadata and resources such as the title, stylesheets, and scripts.
Q60. What is the body tag?
Ans: The body contains the visible page content.
Q61. What is the title tag?
Ans: The title element defines the document title shown in browser tabs and other contexts.
Q62. What are heading tags?
Ans: Heading elements h1 through h6 represent headings at different levels.
Q63. Difference between h1 and h6.
Ans: h1 represents the highest-level heading and h6 a lower-level heading.
Q64. What is the p tag?
Ans: The p element represents a paragraph.
Q65. What is the br tag?
Ans: The br element inserts a line break.
Q66. What is the hr tag?
Ans: The hr element represents a thematic break, commonly displayed as a horizontal rule.
Q67. How do you create a hyperlink?
Ans: Use an anchor element such as <a href='URL'>Link</a>.
Q68. How do you add an image?`,

// Page 7
`Ans: Use an img element with a src attribute, such as <img src='image.jpg' alt='Description'>.
Q69. What is the alt attribute?
Ans: alt provides alternative text describing an image when it cannot be seen and supports accessibility.
Q70. What is an ordered list?
Ans: An ordered list uses ol and displays list items in a sequence.
Q71. What is an unordered list?
Ans: An unordered list uses ul and normally displays list items with bullets.
Q72. What is a description list?
Ans: A description list uses dl with dt terms and dd descriptions.
Q73. How do you create a table?
Ans: Use table with rows and cells, commonly using tr, th, and td.
Q74. What are tr, th, and td?
Ans: tr defines a table row, th a header cell, and td a data cell.
Q75. What is a form?
Ans: A form collects user input for processing or submission.
Q76. What is an input field?
Ans: An input element provides a control for entering or selecting data.
Q77. Difference between id and class.
Ans: An id identifies an element uniquely within a document; a class can be shared by multiple elements.
Q78. What is semantic HTML?
Ans: Semantic HTML uses elements that communicate the meaning or role of their content.
Q79. What are header, nav, main, and footer?
Ans: They are semantic elements representing a page header, navigation area, main content, and footer.
Q80. What is an iframe?
Ans: An iframe embeds another HTML page or document inside the current page.
Q81. What is HTML5?
Ans: HTML5 is the modern HTML standard that introduced many semantic elements and web capabilities.
Q82. Difference between HTML and CSS.
Ans: HTML defines page structure and content; CSS controls presentation and layout.
Q83. Difference between HTML and JavaScript.
Ans: HTML structures content, while JavaScript adds programming behavior and interactivity.
Q84. What are comments in HTML?
Ans: Comments are notes ignored by the browser, written as <!-- comment -->.
Q85. How do you add a comment in HTML?
Ans: Write it between <!-- and -->.`,

// Page 8
`3. 3. CSS
Q86. What is CSS?
Ans: CSS stands for Cascading Style Sheets and controls the appearance and layout of web pages.
Q87. What does CSS stand for?
Ans: CSS stands for Cascading Style Sheets.
Q88. Why is CSS used?
Ans: CSS is used to style, position, size, color, and responsively arrange HTML content.
Q89. What are the three types of CSS?
Ans: Inline, internal, and external CSS.
Q90. What is inline CSS?
Ans: Inline CSS is written directly in an element's style attribute.
Q91. What is internal CSS?
Ans: Internal CSS is written inside a style element in the document head.
Q92. What is external CSS?
Ans: External CSS is stored in a separate .css file and linked to the HTML document.
Q93. What is a CSS selector?
Ans: A selector identifies the HTML elements to which CSS rules should apply.
Q94. What is an element selector?
Ans: It selects elements by their tag name, such as p or h1.
Q95. What is a class selector?
Ans: A class selector targets elements with a particular class using a dot, such as .card.
Q96. What is an ID selector?
Ans: An ID selector targets an element with a specific id using #, such as #header.
Q97. What is the CSS box model?
Ans: The box model describes an element as content surrounded by padding, border, and margin.
Q98. What is margin?
Ans: Margin is space outside an element's border.
Q99. What is padding?
Ans: Padding is space between an element's content and its border.
Q100. What is border?
Ans: A border is a line or boundary around an element's padding and content.
Q101. What is color property?
Ans: The color property sets the foreground or text color.
Q102. What is background-color?
Ans: background-color sets an element's background color.
Q103. How do you change font size?
Ans: Use the font-size property, for example font-size: 20px;.`,

// Page 9
`Q104. How do you change font family?
Ans: Use the font-family property to specify preferred typefaces.
Q105. What is font-weight?
Ans: font-weight controls the thickness or emphasis of text.
Q106. What is text-align?
Ans: text-align controls horizontal alignment of inline content within a box.
Q107. What is display?
Ans: The display property controls how an element participates in layout.
Q108. What is position?
Ans: The position property controls how an element is positioned in the document.
Q109. What is Flexbox?
Ans: Flexbox is a one-dimensional CSS layout system for arranging and aligning items.
Q110. What is CSS Grid?
Ans: CSS Grid is a two-dimensional layout system for arranging items in rows and columns.
Q111. Difference between Flexbox and Grid.
Ans: Flexbox is mainly one-dimensional; Grid is designed for two-dimensional row-and-column layouts.
Q112. What is a pseudo-class?
Ans: A pseudo-class selects an element based on a state or condition, such as :hover.
Q113. What is :hover?
Ans: :hover applies styles while a pointing device is positioned over an element.
Q114. What is border-radius?
Ans: border-radius rounds an element's corners.
Q115. What is box-shadow?
Ans: box-shadow adds a shadow effect around an element's box.
Q116. What is opacity?
Ans: opacity controls how transparent an element appears.
Q117. What are CSS animations?
Ans: Animations allow CSS properties to change through defined keyframes over time.
Q118. What are CSS transitions?
Ans: Transitions smoothly animate property changes between states.
Q119. What is responsive design?
Ans: Responsive design makes a website adapt to different screen sizes and devices.
Q120. What is a media query?
Ans: A media query applies CSS rules based on conditions such as viewport width.
Q121. What is z-index?
Ans: z-index controls the stacking order of positioned elements.
Q122. What is overflow?
Ans: overflow controls what happens when content exceeds an element's box.`,

// Page 10
`Q123. Difference between relative and absolute positioning.
Ans: Relative positioning keeps the element in normal flow while allowing offsets; absolute positioning removes it from normal flow and positions it relative to a containing block.
Q124. What is rem?
Ans: rem is a CSS length unit relative to the root element's font size.
Q125. What are vh and vw?
Ans: vh represents one percent of viewport height and vw one percent of viewport width.`,

// Page 11
`4. 4. JavaScript
Q126. What is JavaScript?
Ans: JavaScript is a programming language widely used to add dynamic behavior and interactivity to web pages.
Q127. Where is JavaScript used?
Ans: It is used in browsers, servers, desktop tools, mobile apps, automation, and many other environments.
Q128. How do you add JavaScript to HTML?
Ans: Use a script element, either with code inside it or with a src attribute pointing to a JavaScript file.
Q129. What is a variable?
Ans: A variable is a named binding used to store or refer to a value.
Q130. What is var?
Ans: var declares a function-scoped variable in JavaScript.
Q131. What is let?
Ans: let declares a block-scoped variable whose value can be reassigned.
Q132. What is const?
Ans: const declares a block-scoped binding that cannot be reassigned.
Q133. Difference between let, const, and var.
Ans: let and const are block-scoped; const cannot be reassigned; var is function-scoped and has older declaration behavior.
Q134. What are data types?
Ans: JavaScript has primitive types such as string, number, bigint, boolean, undefined, symbol, and null, plus objects.
Q135. What is a string?
Ans: A string is a sequence of characters used to represent text.
Q136. What is a number?
Ans: The number type represents numeric values, including integers and floating-point values.
Q137. What is Boolean?
Ans: A Boolean value is either true or false.
Q138. What is an array?
Ans: An array is an ordered collection of values accessed by numeric indexes.
Q139. What is an object?
Ans: An object is a collection of properties, which can hold values and functions.
Q140. What is null?
Ans: null represents an intentional absence of an object value.
Q141. What is undefined?
Ans: undefined is the value of a variable or expression when no value has been assigned or returned in relevant cases.
Q142. What is an operator?
Ans: An operator is a symbol or keyword that performs an operation on values.
Q143. What are arithmetic operators?
Ans: They perform mathematical operations such as +, -, *, /, %, and **.`,

// Page 12
`Q144. What are comparison operators?
Ans: They compare values using operators such as ===, !==, <, >, <=, and >=.
Q145. What are logical operators?
Ans: Logical operators include &&, ||, and ! for combining or negating conditions.
Q146. What is an if statement?
Ans: An if statement executes code when a specified condition is true.
Q147. What is else?
Ans: else provides an alternative block when the preceding condition is false.
Q148. What is else if?
Ans: else if tests another condition when earlier conditions are false.
Q149. What is a switch statement?
Ans: switch selects code to execute based on the value of an expression.
Q150. What is a loop?
Ans: A loop repeatedly executes a block of code while a condition or iteration rule allows it.
Q151. What is a for loop?
Ans: A for loop repeats code using an initialization, condition, and update expression.
Q152. What is a while loop?
Ans: A while loop repeats code as long as its condition remains true.
Q153. What is a do-while loop?
Ans: A do-while loop executes its body at least once and then repeats while a condition is true.
Q154. What is a function?
Ans: A function is a reusable block of code that can accept inputs and return a value.
Q155. What is an arrow function?
Ans: An arrow function is a shorter function syntax using => and has lexical this behavior.
Q156. What is an event?
Ans: An event is an occurrence such as a click, key press, or page load that code can respond to.
Q157. What is the DOM?
Ans: The Document Object Model represents an HTML document as a tree of objects that JavaScript can manipulate.
Q158. What is getElementById()?
Ans: It returns the element with a specified id.
Q159. What is querySelector()?
Ans: It returns the first element matching a specified CSS selector.
Q160. How do you change HTML using JavaScript?
Ans: You can modify DOM properties such as textContent or innerHTML, depending on the task.
Q161. How do you change CSS using JavaScript?
Ans: You can change styles through element.style or modify classes using classList.
Q162. What is addEventListener()?
Ans: It attaches a function to run when a specified event occurs on an element or object.`,

// Page 13
`Q163. What is JSON?
Ans: JSON is a text-based data format commonly used to exchange structured data.
Q164. What is localStorage?
Ans: localStorage provides browser storage for string key-value data that persists across browser sessions.
Q165. What is error handling?
Ans: Error handling is the process of detecting and responding to runtime errors.
Q166. What is try-catch?
Ans: try contains code that may throw an error; catch handles an error if one occurs.
Q167. What is a callback function?
Ans: A callback is a function passed to another function to be called later.
Q168. What is a Promise?
Ans: A Promise represents the eventual completion or failure of an asynchronous operation and its resulting value.
Q169. What is async/await?
Ans: async/await provides syntax for working with Promises in a more readable sequential style.`,

// Page 14
`5. C Programming
Q170. What is C?
Ans: C is a general-purpose programming language widely used for systems programming and performance-oriented software.
Q171. Who developed C?
Ans: Dennis Ritchie developed C at Bell Labs in the early 1970s.
Q172. What are the features of C?
Ans: C is procedural, efficient, portable, structured, and provides low-level memory access through pointers.
Q173. What is a compiler?
Ans: A compiler translates source code into another form, commonly machine code or an intermediate representation that can be executed.
Q174. What is the structure of a C program?
Ans: A simple C program commonly contains headers, declarations, the main function, statements, and return code.
Q175. What is #include?
Ans: #include is a preprocessing directive used to include declarations from another file.
Q176. What is stdio.h?
Ans: stdio.h is the standard C header that declares common input and output functions such as printf and scanf.
Q177. What is main()?
Ans: main is the function where execution begins in a hosted C program.
Q178. What is a variable?
Ans: A variable is a named object used to store a value that can change during program execution.
Q179. What are data types in C?
Ans: Common types include char, int, float, double, and void, along with derived and user-defined types.
Q180. What is int?
Ans: int is an integer data type.
Q181. What is float?
Ans: float is a floating-point type used for real-number values with single-precision representation.
Q182. What is char?
Ans: char is an integer type commonly used to store a character.
Q183. What is double?
Ans: double is a floating-point type generally providing more precision than float.
Q184. What is a constant?
Ans: A constant is a value intended not to change during a program's relevant execution.
Q185. What are keywords?
Ans: Keywords are reserved words with special meaning in the C language.
Q186. What are identifiers?
Ans: Identifiers are names given to program entities such as variables, functions, and structures.
Q187. What are operators?`,

// Page 15
`Ans: Operators are symbols or tokens used to perform operations on values.
Q188. What are arithmetic operators?
Ans: They include +, -, *, /, and % for common arithmetic operations.
Q189. What are relational operators?
Ans: They compare values using operators such as <, >, <=, >=, ==, and !=.
Q190. What are logical operators?
Ans: They include &&, ||, and ! for logical conditions.
Q191. What is assignment operator?
Ans: The = operator assigns a value to an object; compound assignments such as += also exist.
Q192. What is printf()?
Ans: printf is a standard C function used to format and write output.
Q193. What is scanf()?
Ans: scanf is a standard C function used to read formatted input.
Q194. What is an if statement?
Ans: It executes a statement or block when a condition is true.
Q195. What is an if-else statement?
Ans: It chooses one block when a condition is true and another when it is false.
Q196. What is nested if?
Ans: A nested if is an if statement placed inside another conditional block.
Q197. What is a switch statement?
Ans: switch selects among multiple code paths based on an integer-like controlling expression.
Q198. What is a loop?
Ans: A loop repeats a block of code according to a condition or iteration rule.
Q199. What is a for loop?
Ans: A for loop combines initialization, condition, and update expressions for iteration.
Q200. What is a while loop?
Ans: A while loop repeats while its controlling condition is true.
Q201. What is a do-while loop?
Ans: A do-while loop executes once before testing its condition and then repeats if true.
Q202. What is an array?
Ans: An array is a contiguous collection of elements of the same type accessed by index.
Q203. What is a string?
Ans: In C, a string is a sequence of characters terminated by a null character.
Q204. What is a function?
Ans: A function is a named block of code that performs a task and can accept parameters and return a value.
Q205. What is recursion?
Ans: Recursion is when a function calls itself, directly or indirectly, with a base condition.
Q206. What is a pointer?`,

// Page 16
`Ans: A pointer is an object that stores the address of another object or function.
Q207. What is a structure?
Ans: A structure is a user-defined type that groups members, potentially of different types.
Q208. What is a union?
Ans: A union is a user-defined type whose members share the same memory location.
Q209. Difference between structure and union.
Ans: Structure members generally have separate storage; union members share storage and only one representation occupies the storage at a time.
Q210. What is a header file?
Ans: A header file contains declarations and other information intended to be included in source files.
Q211. What is a comment?
Ans: A comment is text ignored by the compiler, written using // or /* ... */.
Q212. What is type casting?
Ans: Type casting explicitly converts a value from one type to another.
Q213. Difference between = and ==.
Ans: = performs assignment; == tests equality.
Q214. Difference between ++i and i++.
Ans: Both increment i, but ++i increments before its value is used in the expression, while i++ uses the old value first.`,

// Page 17
`6. C++
Q215. What is C++?
Ans: C++ is a general-purpose programming language that supports procedural, object-oriented, generic, and other programming styles.
Q216. Who developed C++?
Ans: Bjarne Stroustrup developed C++ at Bell Labs, beginning in the early 1980s.
Q217. Difference between C and C++.
Ans: C is primarily procedural, while C++ extends C with object-oriented and other programming features.
Q218. What is object-oriented programming?
Ans: OOP is a programming approach that organizes software around objects containing data and behavior.
Q219. What is a class?
Ans: A class is a user-defined type that defines data members and member functions.
Q220. What is an object?
Ans: An object is an instance of a class.
Q221. What is encapsulation?
Ans: Encapsulation combines data and related operations and controls access to internal details.
Q222. What is inheritance?
Ans: Inheritance allows a class to derive properties and behavior from another class.
Q223. What is polymorphism?
Ans: Polymorphism allows one interface or operation to work with objects or types in different ways.
Q224. What is abstraction?
Ans: Abstraction focuses on essential features while hiding unnecessary implementation details.
Q225. What is a constructor?
Ans: A constructor is a special member function used to initialize an object when it is created.
Q226. What is a destructor?
Ans: A destructor is a special member function called when an object is destroyed.
Q227. What is function overloading?
Ans: Function overloading defines multiple functions with the same name but different parameter lists.
Q228. What is operator overloading?
Ans: Operator overloading gives operators appropriate meanings for user-defined types.
Q229. What are the types of inheritance?
Ans: Common forms include single, multiple, multilevel, hierarchical, and hybrid inheritance.
Q230. What is single inheritance?
Ans: A derived class inherits from one base class.
Q231. What is multiple inheritance?
Ans: A derived class inherits from more than one base class.
Q232. What is multilevel inheritance?
Ans: A class derives from another derived class, forming a chain.`,

// Page 18
`Q233. What is hierarchical inheritance?
Ans: Multiple derived classes inherit from one base class.
Q234. What is hybrid inheritance?
Ans: Hybrid inheritance combines two or more inheritance patterns.
Q235. What is a virtual function?
Ans: A virtual function enables dynamic dispatch when called through a base-class interface.
Q236. What is a friend function?
Ans: A friend function is not a member but can access a class's private and protected members when declared as a friend.
Q237. What is a template?
Ans: A template lets code work with types or values specified as parameters.
Q238. What is STL?
Ans: STL stands for Standard Template Library and provides reusable containers, algorithms, iterators, and related utilities.
Q239. What is a vector?
Ans: std::vector is a dynamic array container that can resize automatically.
Q240. What is a pointer?
Ans: A pointer stores an address or related pointer value and can be used to access another object.
Q241. What is a reference variable?
Ans: A reference is an alias for another object.
Q242. What is cin?
Ans: std::cin is the standard input stream used to read formatted input.
Q243. What is cout?
Ans: std::cout is the standard output stream used to write formatted output.
Q244. What is namespace?
Ans: A namespace groups names and helps prevent naming conflicts.
Q245. What is public?
Ans: public members can be accessed wherever the access rules permit.
Q246. What is private?
Ans: private members are accessible only from the class and its permitted friends.
Q247. What is protected?
Ans: protected members are accessible within the class, its friends, and derived classes, subject to access rules.`,

// Page 19
`7. Java
Q248. What is Java?
Ans: Java is a general-purpose, class-based programming language designed to be portable through its virtual-machine ecosystem.
Q249. Who developed Java?
Ans: Java was developed at Sun Microsystems, with James Gosling as its principal original designer.
Q250. What are the features of Java?
Ans: Java is object-oriented, portable, strongly typed, automatically memory-managed, and supports concurrency and networking.
Q251. Why is Java platform independent?
Ans: Java source is compiled to bytecode that can run on compatible Java Virtual Machines on different platforms.
Q252. What is JVM?
Ans: JVM stands for Java Virtual Machine and executes Java bytecode.
Q253. What is JDK?
Ans: JDK stands for Java Development Kit and provides tools for developing Java programs, including a compiler.
Q254. What is JRE?
Ans: JRE refers to the runtime environment and libraries needed to run Java applications; modern distributions may package components differently.
Q255. Difference between JDK, JRE, and JVM.
Ans: JVM executes bytecode; the runtime environment supplies JVM plus runtime libraries; JDK adds development tools.
Q256. What is bytecode?
Ans: Bytecode is the intermediate instruction format produced by the Java compiler and executed by the JVM.
Q257. What is a class?
Ans: A class is a blueprint defining fields, methods, and behavior for objects.
Q258. What is an object?
Ans: An object is an instance of a class.
Q259. What is a method?
Ans: A method is a function-like member of a class.
Q260. What is a constructor?
Ans: A constructor initializes an object when it is created and has the same name as its class.
Q261. What are Java data types?
Ans: Java has primitive types such as int, double, char, and boolean, plus reference types.
Q262. What is a variable?
Ans: A variable is a named storage location or reference that holds a value.
Q263. What are access modifiers?
Ans: public, protected, private, and package-private access control visibility of classes and members.
Q264. What is inheritance?
Ans: Inheritance allows a class to extend another class and reuse or specialize its behavior.`,

// Page 20
`Q265. What is polymorphism?
Ans: Polymorphism allows a common type or interface to refer to objects whose implementations behave differently.
Q266. What is encapsulation?
Ans: Encapsulation bundles state and behavior and controls direct access to internal state.
Q267. What is abstraction?
Ans: Abstraction exposes essential behavior while hiding implementation details.
Q268. What is an interface?
Ans: An interface defines a contract of methods and other members that implementing classes agree to provide.
Q269. What is method overloading?
Ans: Overloading provides methods with the same name but different parameter lists.
Q270. What is method overriding?
Ans: Overriding occurs when a subclass supplies a new implementation for an inherited overridable method.
Q271. What is an exception?
Ans: An exception is an event represented by an object that can disrupt normal program flow.
Q272. What is exception handling?
Ans: Exception handling uses mechanisms such as try, catch, finally, and throw to manage exceptional conditions.
Q273. What are try, catch, and finally?
Ans: try contains monitored code, catch handles matching exceptions, and finally runs cleanup code in normal exception-handling flows.
Q274. What is an array?
Ans: An array is a fixed-size indexed collection of elements of one declared type.
Q275. What is a String?
Ans: String is a Java class representing immutable sequences of characters.
Q276. What is a package?
Ans: A package groups related classes and interfaces and helps organize code and control access.
Q277. What is garbage collection?
Ans: Garbage collection automatically reclaims memory occupied by objects that are no longer reachable.
Q278. What is static?
Ans: static makes a member associated with the class rather than a particular object.
Q279. What is final?
Ans: final prevents reassignment of variables, overriding of methods, or inheritance of classes depending on where it is used.
Q280. What is this?
Ans: this refers to the current object in an instance context.
Q281. What is super?
Ans: super refers to the superclass portion of an object and can access superclass members or constructors.
Q282. Difference between Java and C++.
Ans: Java relies on a JVM-based runtime and automatic memory management; C++ generally compiles to native code and gives more direct control over memory.`,

// Page 21
`8. Python
Q283. What is Python?
Ans: Python is a high-level, general-purpose programming language known for readable syntax and a large standard library.
Q284. Who developed Python?
Ans: Guido van Rossum created Python and released its first public version in the early 1990s.
Q285. What are the features of Python?
Ans: Python has readable syntax, dynamic typing, automatic memory management, extensive libraries, and support for multiple programming styles.
Q286. Why is Python called a high-level language?
Ans: Its syntax abstracts many low-level machine details, making programs easier for humans to write and understand.
Q287. Why is Python called interpreted?
Ans: Python implementations commonly execute compiled bytecode through a runtime rather than directly running source code as native machine instructions.
Q288. What is a variable?
Ans: A variable name refers to an object or value in Python.
Q289. What are Python data types?
Ans: Common types include int, float, str, bool, list, tuple, set, dict, and NoneType.
Q290. What is an integer?
Ans: An integer is a whole-number value represented by Python's int type.
Q291. What is a float?
Ans: A float represents a floating-point number.
Q292. What is a string?
Ans: A string is an immutable sequence of Unicode characters.
Q293. What is a Boolean?
Ans: A Boolean is either True or False.
Q294. What is a list?
Ans: A list is an ordered, mutable collection.
Q295. What is a tuple?
Ans: A tuple is an ordered, immutable collection.
Q296. What is a set?
Ans: A set is a mutable collection of unique hashable elements.
Q297. What is a dictionary?
Ans: A dictionary stores key-value pairs.
Q298. Difference between list and tuple.
Ans: Lists are mutable; tuples are immutable.
Q299. What is an operator?
Ans: An operator performs an operation on values or objects.`,

// Page 22
`Q300. What is an if statement?
Ans: It executes a block when a condition is true.
Q301. What is elif?
Ans: elif tests another condition if previous conditions were false.
Q302. What is a for loop?
Ans: A for loop iterates over items from an iterable.
Q303. What is a while loop?
Ans: A while loop repeats while its condition is true.
Q304. What is a function?
Ans: A function is a reusable block of code defined with def or another supported syntax.
Q305. What is a parameter?
Ans: A parameter is a named input defined by a function.
Q306. What is a return statement?
Ans: return exits a function and optionally sends a value back to its caller.
Q307. What is a module?
Ans: A module is a Python file or importable unit containing definitions and executable code.
Q308. What is a package?
Ans: A package is a way to organize related Python modules into a namespace.
Q309. What is import?
Ans: import makes names from a module or package available to a program.
Q310. What is exception handling?
Ans: It is the process of detecting and handling runtime exceptions.
Q311. What are try and except?
Ans: try contains code that may raise an exception; except handles selected exceptions.
Q312. What is a class?
Ans: A class defines a type and can contain data and methods.
Q313. What is an object?
Ans: An object is an instance of a class or another Python type.
Q314. What is inheritance?
Ans: Inheritance lets a class derive behavior and attributes from another class.
Q315. What is a constructor?
Ans: In Python, __init__ is commonly used to initialize a newly created instance.
Q316. What is self?
Ans: self conventionally refers to the current instance in an instance method.
Q317. What is lambda function?
Ans: A lambda is a small anonymous function expression.
Q318. What is list comprehension?
Ans: A list comprehension is a compact syntax for creating lists from an iterable with optional filtering.`,

// Page 23
`Q319. What is indentation?
Ans: Indentation defines code blocks in Python and is syntactically significant.
Q320. Difference between Python and C.
Ans: Python emphasizes readability and high-level abstractions with dynamic typing; C is a compiled systems language with explicit low-level control.
Q321. Difference between Python and Java.
Ans: Python is dynamically typed and emphasizes concise syntax; Java is statically typed and typically runs on the JVM.
Q322. What is PIP?
Ans: pip is a package-management tool commonly used to install Python packages from package indexes.`,

// Page 24
`9. 9. Microsoft Excel
Q323. What is Microsoft Excel?
Ans: Excel is a spreadsheet application used to organize, calculate, analyze, and visualize data.
Q324. What is a spreadsheet?
Ans: A spreadsheet is a grid-based document used to store, calculate, and analyze data.
Q325. What is a workbook?
Ans: A workbook is an Excel file containing one or more worksheets.
Q326. What is a worksheet?
Ans: A worksheet is a single spreadsheet page made of rows and columns.
Q327. What is a cell?
Ans: A cell is the intersection of a row and a column where data can be entered.
Q328. What is a row?
Ans: A row is a horizontal series of cells identified by numbers.
Q329. What is a column?
Ans: A column is a vertical series of cells identified by letters.
Q330. What is a cell address?
Ans: A cell address identifies a cell using its column and row, such as A1.
Q331. What is a range?
Ans: A range is a group of selected cells, such as A1:C10.
Q332. What is a formula?
Ans: A formula is an expression entered into a cell to calculate a result.
Q333. What is a function?
Ans: A function is a predefined formula that performs a specific calculation.
Q334. What is SUM?
Ans: SUM adds numbers or cell values.
Q335. What is AVERAGE?
Ans: AVERAGE calculates the arithmetic mean of supplied numbers.
Q336. What is MAX?
Ans: MAX returns the largest value in a set of numbers.
Q337. What is MIN?
Ans: MIN returns the smallest value in a set of numbers.
Q338. What is COUNT?
Ans: COUNT counts cells containing numbers.
Q339. What is COUNTA?
Ans: COUNTA counts non-empty cells.
Q340. What is IF function?
Ans: IF returns one result when a condition is true and another when it is false.`,

// Page 25
`Q341. What is COUNTIF?
Ans: COUNTIF counts cells that meet a specified condition.
Q342. What is SUMIF?
Ans: SUMIF adds cells that meet a specified condition.
Q343. What is VLOOKUP?
Ans: VLOOKUP searches the first column of a range and returns a value from a specified column in the same row.
Q344. What is XLOOKUP?
Ans: XLOOKUP searches a range and returns a corresponding value from another range, with flexible matching options.
Q345. What is sorting?
Ans: Sorting arranges data according to selected values or criteria.
Q346. What is filtering?
Ans: Filtering temporarily displays only rows that meet specified conditions.
Q347. What is conditional formatting?
Ans: Conditional formatting automatically changes cell formatting when specified rules are met.
Q348. What is data validation?
Ans: Data validation restricts or guides what users can enter into cells.
Q349. What is a chart?
Ans: A chart is a graphical representation of data.
Q350. What are common chart types?
Ans: Column, bar, line, pie, area, scatter, and other chart types are commonly available.
Q351. What is a pivot table?
Ans: A PivotTable summarizes and analyzes data interactively by grouping fields and calculating values.
Q352. What is the formula bar?
Ans: The formula bar displays and lets users edit the content or formula of the selected cell.
Q353. What is the name box?
Ans: The Name Box shows the selected cell or range reference and can be used to navigate to ranges.
Q354. What is a relative cell reference?
Ans: A relative reference changes when a formula is copied to another location.
Q355. What is an absolute cell reference?
Ans: An absolute reference stays fixed when a formula is copied, using dollar signs such as $A$1.
Q356. Difference between relative and absolute reference.
Ans: Relative references adjust when copied; absolute references remain fixed.
Q357. What is $A$1?
Ans: $A$1 is an absolute reference that locks both the column A and row 1.
Q358. How do you merge cells?
Ans: Select the cells and use the Merge Cells or Merge & Center command.
Q359. How do you freeze rows or columns?`,

// Page 26
`Ans: Use View > Freeze Panes to keep selected rows or columns visible while scrolling.
Q360. How do you insert a chart?
Ans: Select the relevant data, then choose a chart from the Insert tab.
Q361. How do you protect a worksheet?
Ans: Use the Protect Sheet command and configure the allowed actions and optional password.
Q362. How do you print an Excel sheet?
Ans: Use File > Print, choose the printer and settings, then print the worksheet or workbook.`,

// Page 27
`10. 10. History of Computer
Q363. What is the history of computers?
Ans: It is the development of calculating and computing devices from early manual tools to modern electronic and programmable computers.
Q364. What was the Abacus?
Ans: The abacus is an ancient manual calculating device using beads or counters arranged on rods.
Q365. Who invented the Pascaline?
Ans: Blaise Pascal developed the Pascaline in the 17th century.
Q366. What was Pascaline?
Ans: The Pascaline was a mechanical calculator designed mainly for addition and subtraction.
Q367. Who designed the Difference Engine?
Ans: Charles Babbage designed the Difference Engine.
Q368. Who designed the Analytical Engine?
Ans: Charles Babbage designed the Analytical Engine, an early concept for a general-purpose programmable machine.
Q369. Who is known as the Father of Computer?
Ans: Charles Babbage is commonly called the Father of the Computer because of his pioneering mechanical computer designs.
Q370. Who is known as the first computer programmer?
Ans: Ada Lovelace is widely regarded as the first computer programmer for her work describing an algorithm for Babbage's Analytical Engine.
Q371. What was Mark I?
Ans: Harvard Mark I was an early large electromechanical automatic calculator/computer completed in 1944.
Q372. What was ENIAC?
Ans: ENIAC was an early general-purpose electronic digital computer completed in the 1940s.
Q373. What was EDVAC?
Ans: EDVAC was an early stored-program electronic computer project associated with the development of stored-program architecture.
Q374. What was UNIVAC?
Ans: UNIVAC I was an early commercial computer in the United States, delivered in 1951.
Q375. What is a computer generation?
Ans: A computer generation is a broad period of computer development characterized by major technologies and design changes.
Q376. How many generations of computers are commonly taught?
Ans: Five generations are commonly taught in introductory computer studies, although the boundaries and definitions vary.
Q377. What are first-generation computers?
Ans: First-generation computers were early electronic computers mainly using vacuum tubes.
Q378. What technology was used in first generation?
Ans: Vacuum tubes were the primary electronic switching technology.`,

// Page 28
`Q379. What are second-generation computers?
Ans: Second-generation computers used transistors and were generally smaller, more reliable, and more efficient than vacuum-tube systems.
Q380. What technology was used in second generation?
Ans: Transistors were the main technology.
Q381. What are third-generation computers?
Ans: Third-generation computers used integrated circuits and became more compact and capable.
Q382. What technology was used in third generation?
Ans: Integrated circuits were the key technology.
Q383. What are fourth-generation computers?
Ans: Fourth-generation computers are generally associated with microprocessors and the growth of personal computers.
Q384. What technology was used in fourth generation?
Ans: Microprocessors and very-large-scale integrated circuits were major technologies.
Q385. What are fifth-generation computers?
Ans: Fifth-generation is a commonly taught term associated with advanced computing, AI, natural-language processing, and parallel processing.
Q386. What technology is associated with fifth generation?
Ans: AI techniques, advanced semiconductor technology, parallel processing, and related technologies are commonly associated with it.
Q387. Difference between first and second generation.
Ans: First-generation systems used vacuum tubes; second-generation systems used transistors.
Q388. Difference between third and fourth generation.
Ans: Third-generation systems centered on integrated circuits; fourth-generation systems centered on microprocessors and VLSI.
Q389. What is Artificial Intelligence?
Ans: Artificial Intelligence is the field of creating systems that perform tasks associated with abilities such as learning, reasoning, perception, and language processing.
Q390. What is the role of AI in fifth-generation computers?
Ans: AI is commonly described as a major goal or feature of fifth-generation computing concepts.
Q391. How did computers change from mechanical to electronic?
Ans: Computers progressed from manual and mechanical calculation to electromechanical devices and then to fast electronic digital systems.
Q392. What are important milestones in computer history?
Ans: Examples include the abacus, Pascaline, Babbage's engines, punched-card systems, electromechanical machines, ENIAC, stored-program computers, transistors, integrated circuits, microprocessors, PCs, the Internet, and modern AI.`,

// Page 29
`11. 11. Practical Programming Q&A
Q393. How do you print Hello World in C?
Ans: Use printf("Hello World"); inside main, with the required header.
Q394. How do you print Hello World in C++?
Ans: Use std::cout << "Hello World"; inside main.
Q395. How do you print Hello World in Java?
Ans: Use System.out.println("Hello World"); inside main.
Q396. How do you print Hello World in Python?
Ans: Use print("Hello World").
Q397. How do you add two numbers in C?
Ans: Read or assign two numeric variables and use their sum with the + operator.
Q398. How do you check even or odd in C?
Ans: Use the remainder operator: if n % 2 == 0, the number is even; otherwise it is odd.
Q399. How do you find the largest of three numbers?
Ans: Compare the three values using if/else conditions or a suitable maximum function.
Q400. How do you calculate factorial?
Ans: Multiply all positive integers from 1 through n, or use a recursive function with a base case.
Q401. How do you generate Fibonacci numbers?
Ans: Start with 0 and 1 and repeatedly add the previous two numbers to produce the next number.
Q402. How do you check a prime number?
Ans: A number greater than 1 is prime if it has no divisor other than 1 and itself; test divisors up to its square root.
Q403. How do you reverse a number?
Ans: Repeatedly take the last digit with modulo 10 and build the reversed number by multiplying the result by 10 and adding the digit.
Q404. How do you check a palindrome number?
Ans: Reverse the number and compare the reversed value with the original.
Q405. How do you sort an array?
Ans: Use a sorting algorithm such as selection sort, insertion sort, merge sort, quicksort, or a library sort.
Q406. How do you search an array?
Ans: Use linear search for a general array or binary search when the data is sorted.
Q407. How do you create an HTML login form?
Ans: Use a form with input fields for username/email and password and a submit control.
Q408. How do you create a navigation bar?
Ans: Use semantic navigation markup such as nav with links, then style it using CSS.
Q409. How do you make a webpage responsive?
Ans: Use flexible layouts, relative units, responsive images, and CSS media queries.
Q410. How do you create a JavaScript calculator?
Ans: Create input or button controls and JavaScript event handlers that perform arithmetic and display results.`,

// Page 30
`Q411. How do you create a digital clock with JavaScript?
Ans: Read the current time with Date, format it, display it, and update it periodically with setInterval.
Q412. How do you create a counter with JavaScript?
Ans: Store a numeric value and use button event handlers to increase, decrease, or reset it.
Q413. How do you create a Python calculator?
Ans: Read numbers and an operation, then use conditional logic or a mapping of operators to calculate the result.
Q414. How do you create a Python number guessing game?
Ans: Generate a random target number, repeatedly accept guesses, and give higher/lower feedback until the target is found.
Q415. How do you calculate a student's grade in Python?
Ans: Read marks, calculate the required total or average, and use if/elif conditions to select a grade range.
Q416. How do you add numbers in Excel?
Ans: Enter a formula such as =A1+B1 or use =SUM(A1:A10) for a range.
Q417. How do you calculate average in Excel?
Ans: Use =AVERAGE(range), such as =AVERAGE(B2:B10).
Q418. How do you find the highest value in Excel?
Ans: Use =MAX(range).
Q419. How do you find the lowest value in Excel?
Ans: Use =MIN(range).
Q420. How do you count numeric cells in Excel?
Ans: Use =COUNT(range).
Q421. How do you make a basic Excel result using IF?
Ans: Use a formula such as =IF(B2>=40,"Pass","Fail") and adjust the condition to your grading rules.
Q422. How do you save a computer document?
Ans: Use Save or Save As, choose a location and filename, and select the required file format.
Q423. How do you create a strong password?
Ans: Use a long, unique password or passphrase and avoid easily guessed personal information; a password manager can help.
Q424. How do you protect a computer from malware?
Ans: Keep the OS and applications updated, use reputable security tools, avoid suspicious files and links, and maintain backups.
Q425. How do you back up important files?
Ans: Keep copies on another storage device or trusted cloud service and periodically verify that the backups can be restored.
Q426. What is debugging?
Ans: Debugging is the process of finding, understanding, and fixing errors in a program.
Q427. What is an algorithm?
Ans: An algorithm is a finite, ordered set of steps for solving a problem or performing a task.
Q428. What is a flowchart?`,

// Page 31
`Ans: A flowchart is a diagram that represents the steps and decision points of a process or algorithm.
Q429. What is source code?
Ans: Source code is human-readable program text written in a programming language.
Q430. What is an executable program?
Ans: An executable is a program in a form that a system can load and run, subject to the platform and runtime.
Q431. What is an IDE?
Ans: An IDE is an Integrated Development Environment that combines tools such as an editor, debugger, build tools, and project management.
Q432. What is Git?
Ans: Git is a distributed version-control system used to track changes in files and collaborate on software projects.
Q433. What is GitHub?
Ans: GitHub is a web platform for hosting and collaborating on Git repositories and software projects.
Q434. What is an API?
Ans: An API is an Application Programming Interface that defines how software components can communicate and use each other's functionality.
Q435. What is a database?
Ans: A database is an organized collection of data that can be stored, managed, and retrieved.
Q436. What is SQL?
Ans: SQL is a language used to define, query, manipulate, and manage data in relational database systems.
Q437. What is a URL?
Ans: A URL is a Uniform Resource Locator that identifies the location of a resource and how to access it.
Q438. What is HTTP?
Ans: HTTP is the Hypertext Transfer Protocol used for communication between web clients and servers.
Q439. What is HTTPS?
Ans: HTTPS is HTTP protected by TLS encryption and authentication mechanisms.
Q440. What is an IP address used for?
Ans: It identifies a network interface or endpoint so IP networks can route packets to the appropriate destination.
Q441. What is a domain name?
Ans: A domain name is a human-readable name used to identify an Internet service or resource, such as example.com.`
];

// Combine all raw pages
const combined = rawPages.join('\n');

// Parse Q&A items
const regex = /(?:Q(\d+)\.\s*([^?\n]+\??))\s*\nAns:\s*([\s\S]*?)(?=(?:\nQ\d+\.)|$)/g;
let match;
const items = [];

while ((match = regex.exec(combined)) !== null) {
  const id = parseInt(match[1], 10);
  const q = match[2].trim().replace(/\s+/g, ' ');
  let a = match[3].trim().replace(/\s+/g, ' ');
  // Clean up any section headers accidentally caught in answer
  a = a.replace(/\n\d+\.\s+\d+\.\s+.*$/, '').trim();

  let category = 'Basic Computer';
  if (id >= 1 && id <= 50) category = 'Basic Computer';
  else if (id >= 51 && id <= 85) category = 'HTML';
  else if (id >= 86 && id <= 125) category = 'CSS';
  else if (id >= 126 && id <= 169) category = 'JavaScript';
  else if (id >= 170 && id <= 214) category = 'C Programming';
  else if (id >= 215 && id <= 247) category = 'C++';
  else if (id >= 248 && id <= 282) category = 'Java';
  else if (id >= 283 && id <= 322) category = 'Python';
  else if (id >= 323 && id <= 362) category = 'Microsoft Excel';
  else if (id >= 363 && id <= 392) category = 'History of Computer';
  else if (id >= 393 && id <= 441) category = 'Practical Programming Q&A';

  items.push({ id, category, q, a });
}

console.log(`Parsed ${items.length} items out of 441.`);

if (items.length !== 441) {
  console.warn(`Warning: expected 441 items, got ${items.length}`);
  // Find missing IDs
  const foundIds = new Set(items.map(i => i.id));
  for (let i = 1; i <= 441; i++) {
    if (!foundIds.has(i)) console.log(`Missing Q${i}`);
  }
}

// Generate code snippet and online documentation links for categories
function enrichItem(item) {
  const { id, category, q, a } = item;
  let code = '';
  let links = [];

  // Default links per category
  if (category === 'HTML') {
    links.push({ title: 'MDN Web Docs: HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' });
    links.push({ title: 'W3C HTML5 Specification', url: 'https://html.spec.whatwg.org/' });
  } else if (category === 'CSS') {
    links.push({ title: 'MDN Web Docs: CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' });
    links.push({ title: 'CSS-Tricks Guides', url: 'https://css-tricks.com/' });
  } else if (category === 'JavaScript') {
    links.push({ title: 'MDN Web Docs: JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' });
    links.push({ title: 'JavaScript.info Tutorial', url: 'https://javascript.info/' });
  } else if (category === 'C Programming') {
    links.push({ title: 'cppreference.com (C)', url: 'https://en.cppreference.com/w/c' });
    links.push({ title: 'ISO C Standard Reference', url: 'https://www.iso-9899.info/' });
  } else if (category === 'C++') {
    links.push({ title: 'cppreference.com (C++)', url: 'https://en.cppreference.com/w/cpp' });
    links.push({ title: 'isocpp.org Standard C++', url: 'https://isocpp.org/' });
  } else if (category === 'Java') {
    links.push({ title: 'Oracle Java Documentation', url: 'https://docs.oracle.com/en/java/' });
    links.push({ title: 'OpenJDK Reference', url: 'https://openjdk.org/' });
  } else if (category === 'Python') {
    links.push({ title: 'Official Python 3 Documentation', url: 'https://docs.python.org/3/' });
    links.push({ title: 'Real Python Tutorials', url: 'https://realpython.com/' });
  } else if (category === 'Microsoft Excel') {
    links.push({ title: 'Microsoft Support: Excel Formulas & Functions', url: 'https://support.microsoft.com/en-us/excel' });
    links.push({ title: 'ExcelJet Formula Guide', url: 'https://exceljet.net/' });
  } else if (category === 'History of Computer') {
    links.push({ title: 'Computer History Museum', url: 'https://computerhistory.org/' });
    links.push({ title: 'Britannica: History of Computing', url: 'https://www.britannica.com/technology/computer/History-of-computing' });
  } else {
    links.push({ title: 'GeeksforGeeks Computer Science', url: 'https://www.geeksforgeeks.org/' });
    links.push({ title: 'DevDocs API Documentation', url: 'https://devdocs.io/' });
  }

  // Add specific code examples for programming questions
  if (id === 56) code = `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`;
  else if (id === 67) code = `<a href="https://example.com" target="_blank" rel="noopener">Visit Website</a>`;
  else if (id === 68) code = `<img src="profile.jpg" alt="User profile photo" width="300" height="200">`;
  else if (id === 70) code = `<ol>\n  <li>First step</li>\n  <li>Second step</li>\n  <li>Third step</li>\n</ol>`;
  else if (id === 71) code = `<ul>\n  <li>Apples</li>\n  <li>Bananas</li>\n  <li>Cherries</li>\n</ul>`;
  else if (id === 73 || id === 74) code = `<table>\n  <tr>\n    <th>Name</th>\n    <th>Score</th>\n  </tr>\n  <tr>\n    <td>Alex</td>\n    <td>95</td>\n  </tr>\n</table>`;
  else if (id === 75 || id === 407) code = `<form action="/login" method="POST">\n  <label for="usr">Email:</label>\n  <input type="email" id="usr" name="email" required>\n  <label for="pwd">Password:</label>\n  <input type="password" id="pwd" name="password" required>\n  <button type="submit">Sign In</button>\n</form>`;
  else if (id === 97) code = `/* CSS Box Model Calculation */\n.box {\n  width: 300px;       /* Content */\n  padding: 20px;      /* Inner Space */\n  border: 2px solid;  /* Border Line */\n  margin: 15px;       /* Outer Space */\n  box-sizing: border-box;\n}`;
  else if (id === 109) code = `.flex-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}`;
  else if (id === 110) code = `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}`;
  else if (id === 131 || id === 132 || id === 133) code = `let score = 10;   // can reassign\nscore = 15;\n\nconst PI = 3.14159; // fixed binding\n// PI = 3.14; -> TypeError: Assignment to constant variable`;
  else if (id === 151) code = `for (let i = 0; i < 5; i++) {\n  console.log("Iteration number:", i);\n}`;
  else if (id === 155) code = `// Standard function\nconst add = (a, b) => a + b;\n\n// Arrow with block\nconst greet = (name) => {\n  return \`Welcome back, \${name}!\`;\n};`;
  else if (id === 168 || id === 169) code = `async function fetchUserData(id) {\n  try {\n    const res = await fetch(\`/api/user/\${id}\`);\n    if (!res.ok) throw new Error("HTTP error");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error("Fetch failed:", err);\n  }\n}`;
  else if (id === 174 || id === 393) code = `#include <stdio.h>\n\nint main(void) {\n    printf("Hello World\\n");\n    return 0;\n}`;
  else if (id === 215 || id === 394) code = `#include <iostream>\n\nint main() {\n    std::cout << "Hello World" << std::endl;\n    return 0;\n}`;
  else if (id === 219 || id === 220) code = `class Car {\npublic:\n    std::string brand;\n    void honk() {\n        std::cout << "Beep beep!\\n";\n    }\n};\n\nint main() {\n    Car myCar; // Object\n    myCar.brand = "Tesla";\n    myCar.honk();\n}`;
  else if (id === 248 || id === 395) code = `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}`;
  else if (id === 283 || id === 396) code = `print("Hello World")`;
  else if (id === 318) code = `# Python list comprehension\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x ** 2 for x in numbers if x % 2 == 0]\nprint(squares)  # [4, 16]`;
  else if (id === 334 || id === 335 || id === 416 || id === 417) code = `=SUM(A1:A10)\n=AVERAGE(B2:B20)\n=IF(C2 >= 50, "Pass", "Fail")`;
  else if (id === 398) code = `#include <stdio.h>\n\nint main() {\n    int n = 7;\n    if (n % 2 == 0) {\n        printf("%d is Even\\n", n);\n    } else {\n        printf("%d is Odd\\n", n);\n    }\n    return 0;\n}`;
  else if (id === 400) code = `// Factorial in JavaScript / C logic\nfunction factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5)); // 120`;
  else if (id === 401) code = `def fibonacci(n):\n    a, b = 0, 1\n    fib = []\n    for _ in range(n):\n        fib.append(a)\n        a, b = b, a + b\n    return fib\nprint(fibonacci(7)) # [0, 1, 1, 2, 3, 5, 8]`;
  else if (id === 402) code = `def is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0: return False\n    return True`;

  return {
    ...item,
    code: code || undefined,
    links,
  };
}

const enrichedItems = items.map(enrichItem);

const outContent = `/**
 * Complete Basic Computer Course - 441 Questions & Answers
 * From HTML, CSS, JS, C, C++, Java, Python, Excel, Computer History, Practical Programming
 */

export interface CourseQA {
  id: number;
  category: string;
  q: string;
  a: string;
  code?: string;
  links: { title: string; url: string }[];
}

export const COMPUTER_COURSE_QA: CourseQA[] = ${JSON.stringify(enrichedItems, null, 2)};

export const COURSE_MODULES = [
  { id: 'all', label: 'All Topics (441)', count: 441 },
  { id: 'Basic Computer', label: 'Basic Computer', count: 50 },
  { id: 'HTML', label: 'HTML', count: 35 },
  { id: 'CSS', label: 'CSS', count: 40 },
  { id: 'JavaScript', label: 'JavaScript', count: 44 },
  { id: 'C Programming', label: 'C Programming', count: 45 },
  { id: 'C++', label: 'C++', count: 33 },
  { id: 'Java', label: 'Java', count: 35 },
  { id: 'Python', label: 'Python', count: 40 },
  { id: 'Microsoft Excel', label: 'Microsoft Excel', count: 40 },
  { id: 'History of Computer', label: 'History of Computer', count: 30 },
  { id: 'Practical Programming Q&A', label: 'Practical Programming', count: 49 },
];

/**
 * Searches the 441 Q&A dataset for the best match based on question text or keywords
 */
export function findBestQAMatch(query: string): CourseQA | null {
  const qClean = query.trim().toLowerCase();
  if (!qClean || qClean.length < 2) return null;

  // 1. Direct Q number search (e.g. "Q12" or "q 55" or "question 400")
  const qNumMatch = qClean.match(/^q(?:uestion)?\s*(\d+)$/i);
  if (qNumMatch) {
    const num = parseInt(qNumMatch[1], 10);
    const found = COMPUTER_COURSE_QA.find(item => item.id === num);
    if (found) return found;
  }

  // 2. Exact or substring match in question
  const exactMatch = COMPUTER_COURSE_QA.find(
    item => item.q.toLowerCase() === qClean || item.q.toLowerCase().includes(qClean) || qClean.includes(item.q.toLowerCase())
  );
  if (exactMatch) return exactMatch;

  // 3. Keyword scoring
  const words = qClean.split(/[^a-z0-9_#+.-]+/i).filter(w => w.length > 2 && !['what', 'how', 'why', 'who', 'the', 'is', 'are', 'you', 'and', 'for', 'with'].includes(w));
  if (words.length === 0) return null;

  let bestScore = 0;
  let bestItem = null;

  for (const item of COMPUTER_COURSE_QA) {
    const qLower = item.q.toLowerCase();
    const aLower = item.a.toLowerCase();
    let score = 0;

    for (const w of words) {
      if (qLower.includes(w)) score += 3;
      else if (aLower.includes(w)) score += 1;
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  return bestScore >= 3 ? bestItem : null;
}
`;

fs.mkdirSync(path.join(__dirname, '../src/data'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '../src/data/computerCourseQA.ts'), outContent, 'utf-8');
console.log('Successfully written src/data/computerCourseQA.ts with all 441 questions!');
