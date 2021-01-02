function resolveAfter2Seconds() {
    console.log("починається повільний проміс")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("повільний")
        console.log("повільний проміс завершено")
      }, 2000);
    });
  }
  
  function resolveAfter1Second() {
    console.log("починається швидкий проміс")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("швидкий")
        console.log("швидкий проміс завершено")
      }, 1000);
    });
  }
  
  async function sequentialStart() {
    console.log('==ПОСЛІДОВНИЙ СТАРТ==')
  
    // 1. Виконання доходить сюди майже миттєво
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. це виконується 2 секунди після 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. це виконується 3 секунди після 1.
  }
  
  sequentialStart()

class Util {
  static id = Date.now();
}

console.log(Util.id);