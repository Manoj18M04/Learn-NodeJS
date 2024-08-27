### What is NODE JS ?

- Node.js is a runtime environment for executing Javascript code outside the web browser.

- Node.js also provides a set of **build-in modules** for working with the file system, networking, cryptography and other system resources. These modules can be used to build a wide range of applications, from web servers and APIs to command-line tools and desktop applications.

- It is build on top of the Chrome **V8 Javascript engine**, which is also used in the Chrome browser. The V8 engine compiles Javascript code to run machine code for fast execution, which was developed by **Google**.

- **Libuv** is a cross-platform library that provides an event loop, asynchronous I/O operations, and other low-level utilities for building network and file system applications. It was originally developed as part of the Node.js project and is now used by many other projects, including the Rust programming language and the chromium browser.


```

Javascript ---> 100% JS code,
Node.js ------> 50% JS code + 50% C++ code,
V8 Engine ----> 30% JS code + 70% C++ code,
Libuv lib ----> 100% C++ code,

```


### Features of NODE JS

- **Asynchronous, event-driven I/O model:** Node.js uses an event-driven, non-blocking I/O model, which means that it can handle many concurrent connections without blocking the execution of other code. This makes Node.js well suited for building scalable network applications.

- **Server-side Javascript:** Node.js allows developers to write server write code in javascript, which can make it easier to write and maintain code for both the client and server sides of web applications.

- **Fast execution:** Node.js build on top of the V8 engine, which is also used in the Chrome browser. This makes Node.js fast and efficient, with ability to handle large amounts of I/O and computation.

- **Modular architecture:** Node.js has a modular architecture, with a large and active ecosystem of third party modules that can be installed using the npm package manager. This makes it easy to add new functionality to Node.js applications.

- **Cross-platform:** Node.js is cross-platform, which means that it can run on a wide range of operating systems, including Windows, MacOS, Linux.

- **Build-in modules:** Node.js provides a set of build-in modules for working with the file system, networking, cryptography, and other system resources. These modules make it easy to perform common tasks without requiring additional dependencies.

- **Large community:** Node.js has a large and active community of developers, who contribute to the developers of the Node.js platform, as well as a wide range of third-party modules.


### Modules in NODE JS

- A module is self-contained piece of code that encapsulates related functionality and can be easily reused in other parts of an application

- In Node.js, each file is treated as a seperate module.

- Node.js uses a CommonJS-based module system, which means that each module has its own scope and can export specific functions or objects that can be used by other modules in the applications.


### Types of Modules

- **Local Modules:** These modules are created by the developer and can be reused across different parts of an application. Custom modules can be defined in seperate .js files, and can be imported into other parts of the application using the require() method.

- **Build-in Modules:** These modules are build into Node.js and can be accessed without any additional installation or configuration. Examples of built-in modules include *fs, http, path and crypto.*

- **Third-party Modules:** These modules are created by external developers and can be installed using node.js package.