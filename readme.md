## Interview Questions:

1. What is TypeScript, and how is it different from JavaScript?

   Answer: TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language. It was developed and is maintained by Microsoft on 1 October 2012.

    <br/>

   Difference between TypeScript and JavaScript:

   - TypeScript is Object-oriented whereas JavaScript is a prototype-based.
   - TypeScript is Static typing but JavaScript is Dynamically typed.
   - TypeScript is similar to JavaScript, with additional features
   - TypeScript supports Interfaces but JavaScript does not.

<br/>

2. Can you explain the difference between "interface" and "type" in TypeScript?

   Answer: Both an interface and a type alias can be used to describe a new named type in TypeScript.

   <br/>

   Difference between interface and type:

   - Interface only supports the use of the object whereas type supports all other types except the object.
   - Interface can extend classes whereas type can not extend classes.
   - Using interfaces it is not possible to create new intersection interface by combining them. But using the type it is possible to create an intersection by combining multiple types together.

<br/>

3. Can you give an example of how to use generics in TypeScript?

   Answer: Generic Types can easily create reusable functions, interfaces or classes instead of writing different types for each one. Generics allow to use different types of providing parameters to one reusable part of code.

   <br/>

   Example:

   type GenericArray<T> = Array<T>;

   const rollNumbers1: GenericArray<number> = [1, 2, 3, 4, 5];
   const rollNumbers2: string[] = ['1', '2', '3', '4', '5'];
   const rollNumbers3: GenericArray<boolean> = [true, false, false, true, false];

<br/>

4. What is the difference between an "unknown" and "any" type in TypeScript?

   Answer: Difference between an unknown and any type:

   - Unknown doesn't allow being assigned to any type whereas any allows being assigned to any type.
   - Unknown doesn't allow calling any method whereas any allows calling any method.

<br/>

5. Can you give an example of how to use enums in TypeScript?

   Answer: An enum is a special “class” that represents a group of constants (unchangeable variables). Enums allow a developer to define a set of named constants.

   enum Gender {
   male = 1,
   female,
   other
   }

   console.log(Gender.male); // logs 1

<br/>

6. What is the "as" keyword used for in TypeScript?

   Answer: The as keyword in TypeScript is used to perform a type assertion. Type Assertion is the process when we tend to set a variable type as our own.

<br/>

7. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

   Answer: A type guard is a TypeScript technique used to get information about the type of a variable.

   - The typeof operator is a built-in type guard in TypeScript that checks the type of a variable at runtime. When using this keyword in front of a variable name it returns a string that represents the type of that variable.
   - The in operator can be used as a type guard to help narrow down the type of an object variable by its property name.It returns true if the specified property is in the specified object.

<br/>
<br/>
<br/>

## Optional Questions:

1. Can you explain what a "tuple" is in TypeScript?

   Answer:

<br/>

2. Can you give an example of how to use "readonly" properties in TypeScript?

   Answer:

<br/>

3. Can you give an example of how to use "conditional types" in TypeScript?

   Answer:

<br/>
<br/>
<br/>

<!-- connect with me start -->
<div align="center"> 
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&duration=1&pause=1000&repeat=false&width=410&lines=%F0%9F%93%AA+%F0%9D%97%99%F0%9D%97%98%F0%9D%97%98%F0%9D%97%9F+%F0%9D%97%99%F0%9D%97%A5%F0%9D%97%98%F0%9D%97%98+%F0%9D%97%A7%F0%9D%97%A2+%F0%9D%97%96%F0%9D%97%A2%F0%9D%97%A1%F0%9D%97%A7%F0%9D%97%94%F0%9D%97%96%F0%9D%97%A7+%F0%9D%97%A0%F0%9D%97%98+%F0%9D%97%94%F0%9D%97%A1%F0%9D%97%AC%F0%9D%97%A7%F0%9D%97%9C%F0%9D%97%A0%F0%9D%97%98" alt="Typing SVG" />
</div>

<br/>

<!-- social media links start -->
<table align="center">
  <thead align="center">
      <tr>
          <th>
              <a href="https://www.linkedin.com/in/montasim">
                  <img alt="linkedin icon" src="https://cdn.simpleicons.org/linkedin" width="35px">
              </a>
          </th>
          <th>
              <a href="https://www.github.com/montasim">
                  <img alt="github icon" src="https://cdn.simpleicons.org/github/white" width="35px">
              </a>
          </th>
          <th>
              <a href="https://stackoverflow.com/users/20348607/montasim">
                  <img alt="github icon" src="https://cdn.simpleicons.org/stackoverflow" width="35px">
              </a>
          </th>
          <th>
              <a href="https://montasim-dev.web.app/">
                  <img alt="web icon" src="https://cdn.simpleicons.org/googlechrome" width="35px">
              </a>
          </th>
          <th>
              <a href="mailto:montasimmamun@gmail.com">
                  <img alt="gmail icon" src="https://cdn.simpleicons.org/gmail" width="35px">
              </a>
          </th>
          <th>
              <a href="https://www.facebook.com/montasimmamun/">
                  <img alt="facebook icon" src="https://cdn.simpleicons.org/facebook" width="35px">
              </a>
          </th>
          <th>
              <a href="https://twitter.com/montasimmamun">
                  <img alt="facebook icon" src="https://cdn.simpleicons.org/twitter" width="35px">
              </a>
          </th>
      </tr>
  </thead>
</table>
<!-- social media links end -->
<!-- connect with me end -->
