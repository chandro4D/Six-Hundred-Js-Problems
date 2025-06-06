// practice problem 1:

/*
Export means the things that are made accessible to other files, and import means the
things that we access from other files.

Import and export work to allow code reusability and modularity. **Export** lets one
file share its functions, variables, or components, while **import** allows another
file to access and use them. This keeps code organized, easier to manage, and avoids 
duplication.
*/

// practice problem 2:
/*
A default export is a way to export a single value or component from a file so it can 
be imported without using curly braces. 

The main advantage is that you can name the import whatever you want, 
making it flexible and simpler to use. It’s especially useful when a 
file only needs to export one main function, class, or component. 
This keeps code clean and focused.
*/

// practice problem 3:
/*
The as keyword helps us rename imports or exports to avoid naming conflicts 
or to make names more meaningful in the current file. It allows flexibility 
when importing multiple items with the same name or when a shorter or 
clearer name is preferred.
*/

// practice problem 4:
/*
The key difference between named export and default export is how they are 
defined and imported. In named export, you export multiple items with specific 
names and must use those exact names when importing. In default export, you export 
a single value, and you can import it with any name you choose.
*/

// practice problem 5:
/*
In a single file,multiple default exports are not possible,only one default export 
is allowed per file. This is because the default export is meant to represent the 
main value or function the file provides. Allowing only one keeps things clear and 
avoids confusion during import. If you need to export multiple things, you should use 
named exports instead.
*/