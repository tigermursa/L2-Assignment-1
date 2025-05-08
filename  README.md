**Blog - 1 What are some differences between interfaces and types in TypeScript?**

So when we learn Typescript we see types and interface both doing same thing, but what is the differences between those two?
Actually they are not same , Interface mainly use to create the structure of objects,

example:
interface User {
name: string;
age: number;
}

interface can use with class also interface does really grate job while we work in larger project its really helpful and reusable
In another hand what is type then ? tpe actually is really flexible and its not only for object but also primitive , union tuple etc

example:
type ID = string | number;
type User = {
name: string;
age: number;
}

so when we should use type or interface ? when we are going to work for only object interface might be the best choice here
or if we are going to work with complex data then the type is the best for it.

so we can say type is so flexible but interface is not and interface is easy to extend but type need & intersection ,so yeah hope you all know now
when we will use interface and when we will use types

**Blog - 2 How does TypeScript help in improving code quality and project maintainability?**

When we work using JavaScript in large scale project , the finding bug is really really a hard task there
TypeScript is build top on JavaScript that maintain types statically .Its nor only helps developers to maintain good code
environment but also increase the quality of the project.

The main thing is JavaScript got the errors in runtime but if we use TypeScript we can see the errors on development time,
thats helps a lot to do bad coding and make errors, TypeScripts helps us to getting error in future so its really a time saver.
Yea writing TypeScript is some time consuming but at the end its really worth.Because it's prevent doing silly errors to the developers.
So we need to use TypeScript if we wanna be next level developer

So when companies work in large scale project they uses TypeScript for better code quality and maintainability
