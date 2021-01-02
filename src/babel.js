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
  
  async function concurrentStart() {
    console.log('==КОНКУРЕНТНИЙ СТАРТ з await==')
    const slow = resolveAfter2Seconds() // запускає таймер негайно
    const fast = resolveAfter1Second() // запускає таймер негайно
  
    // 1. Виконання доходить сюди майже миттєво
    console.log(await slow) // 2. це виконується 2 секунди після 1.
    console.log(await fast) // 3. це виконується 2 секунди після 1., одразу після 2., оскільки швидкий вже вирішений
  }
  
  function concurrentPromise() {
    console.log('==КОНКУРЕНТНИЙ СТАРТ з Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]) // повільний
      console.log(messages[1]) // швидкий
    });
  }
  
  async function parallel() {
    console.log('==ПАРАЛЕЛЬНИЙ з await Promise.all==')
  
    // Починає 2 "роботи" паралельно та чекає, поки обидві не завершаться
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(),
        (async()=>console.log(await resolveAfter1Second()))()
    ])
  }
  
  // Ця функція не обробляє помилки. Дивіться застереження нижче!
  function parallelPromise() {
    console.log('==ПАРАЛЕЛЬНИЙ з Promise.then==')
    resolveAfter2Seconds().then((message)=>console.log(message))
    resolveAfter1Second().then((message)=>console.log(message))
  }
  
  sequentialStart() // через 2 секунди виводить "повільний", далі через ще 1 секунду "швидкий"

class Util {
  static id = Date.now();
}

console.log(Util.id);