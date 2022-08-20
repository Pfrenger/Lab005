# Lab #4 - Filesystem
In this lab we'll work with the file system using the `fs/promises` module.  Do **not** use the synchronous or callback based (`fs`) module for this lab... only promises

This lab is a continuation of Lab #003 (Vehicles).  Use your Lab #003 solution as the starting point for this lab and simply append your new code to the end of it.  

**IMPORTANT NOTE** : Depending on how you implemented Lab #003 you may already have everything you need and simply need to write it out to files as defined below.  If you implemented it similar to how I did in our Saturday review, there may be changes required to your Lab #003 solution.  For example, my solution did not store the "salvaged" vehicles anywhere and ignored them.  I would need to go back and change my solution to maintain an array of salvaged vehicles as part of the previous lab.

**Tip** : The best format to write our structured Object/Array data to files is JSON.  While we haven't covered JSON in depth, we have looked at how to stringify Objects into JSON format using `JSON.stringify()` and I would recommend that approach.

1. Write all of the non-salvaged vehicles, with all properties, to a file named "vehicles.json"
2. Write all of the salvaged vehicles, with all properties, to a file named "salvages.json"
3. Write all of your statistics to a file named "stats.txt".  Since our statistics data is human readable text, not Javascript Objects/Arrays, this should be output in "plaintext" / human readable format, not JSON.

**One more note**:  You may choose to use promise chains or async/wait with `fs/promises`.  For now, when using async/await, you can not use "top level awaits" and therefore will need to define an `async` function that contains your `await`s and then invoke that function.  A simplified example is provided below :

```javascript
const doWork = async () => {
  const result = await aPromiseFunctionCall();
  return result;
}

doWork();
```