
// const { I,And } = inject();
// // Add in your custom step files

// Given('I logged into my account', () => {
//   // TODO: replace with your own step

//   I.amOnPage('https://www.shoecarnival.com/account')
//   I.fillField('//*[@id="main"]/div/div/div/div[2]/div[1]/div[3]/form/div[1]/div/div/input','l201260@lhr.nu.edu.pk')
//   I.fillField('//*[@id="main"]/div/div/div/div[2]/div[1]/div[3]/form/div[2]/div/div/input','Hehehe123')
//   I.click('//*[@id="main"]/div/div/div/div[2]/div[1]/div[3]/form/div[4]/div[2]/button')
//   I.click('//*[@id="main"]/div/div/div/div[1]/nav/ul/li[4]/a')
//   //I.amOnPage('https://www.shoecarnival.com/wallet')
//   I.seeElement('//*[@id="main"]/div/div/div/div[2]/div/button')
//   I.click('//*[@id="main"]/div/div/div/div[2]/div/button')
//   I.fillField('/html/body/div[6]/div[3]/form/div[1]/div[1]/div/div','SYED ALI RAZA')
//   I.fillField('/html/body/div[6]/div[3]/form/div[1]/div[2]/div/div/div', '5366190050510235')
//   I.click('/html/body/div[6]/div[3]/form/div[1]/div[3]/div[1]')
//   I.click('//*[@id="menu-expirationMonth"]/div[3]/ul/li[8]')
//   I.click('/html/body/div[6]/div[3]/form/div[1]/div[3]/div[2]/div')
//   I.click('//*[@id="menu-expirationYear"]/div[3]/ul/li[7]')
// });

// When('user clicks on Apply option',()=>{
//   I.seeElement('/html/body/div[6]/div[3]/form/div[2]/div/button[1]')
//   I.click('/html/body/div[6]/div[3]/form/div[2]/div/button[1]')
// });

// Then('the credit card will be added to the account',()=>{
//   I.amOnPage('https://www.shoecarnival.com/wallet')
// });


 
const { I,And } = inject();
// Add in your custom step files

Given('I am on find store page', () => {
  I.amOnPage('https://stores.shoecarnival.com/');
});

When('I entered the {string} in Enter city, state, or zip box',(state)=>{
  I.fillField('//*[@id="searchBox"]', state);
  I.click('//*[@id="main"]/div[2]/div[3]/div[1]/div/form/div/button[2]');
  I.wait(3);
});

Then('all stores within the state will appear',()=>{
  I.seeElement('//*[@id="main"]/div[2]/div[2]');
  I.wait(5);
});


// Given('I entered an invalid state in Enter city, state, or zip box', () => {
//   I.amOnPage('https://stores.shoecarnival.com/');
//   I.fillField('//*[@id="searchBox"]', 'Pakistan');
//   I.click('//*[@id="main"]/div[2]/div[3]/div[1]/div/form/div/button[2]');
//   I.wait(3);
// });

// Then('We\'re sorry, there are no stores within 50 miles of your current area. Please use the search bar to enter a new search area or find a location below. message will appear on the screen.',()=>{
//   I.seeElement('//*[@id="main"]/div[2]/div[2]/div[2]/div[2]/p');
//   I.wait(5);
// });
