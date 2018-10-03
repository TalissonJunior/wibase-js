var wibase = new Wibase.initializeApp({
  apiKey: 'ticketin-Myzi!$%0as-',
  projectId: 'ticketin-Zazsde1221-asda4racz#!x5674'
});

// initialize storage  
var storage = wibase.storage();

storage.ref('user').on('value', (snapshot) => {
  console.log(snapshot);
});


function addItem() {
  storage.ref('user').push({
    name: 'teste',
    age: 25
  });
}