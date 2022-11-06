// const { I,And } = inject();
// // Add in your custom step files


//   Given('I am on Product Page and click on size 12', () => {
//     // TODO: replace with your own step
//     I.amOnPage('https://www.shoecarnival.com/mens/boots')
//     I.wait(2);
//     I.checkOption('#main > div > div.MuiContainer-root.MuiContainer-maxWidthLg > div.MuiBox-root.jss641 > div.jss105 > div > div:nth-child(5) > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > label:nth-child(4) > span.MuiButtonBase-root.MuiIconButton-root.jss660.MuiCheckbox-root.jss658.MuiCheckbox-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input')
//   });


//   When('I click on Product 1' , () => {
//     I.seeElement('#item-0 > div > div:nth-child(1) > a')
//     I.click('#item-0 > div > div:nth-child(1) > a')
//     I.wait(3)
//   })

//   Then('It should have size 12',()=>{
//      I.seeElement('//*[@id="main"]/div/div[1]/div[2]/div/div[5]/div[3]/div[6]/button')
//      I.click('//*[@id="main"]/div/div[1]/div[2]/div/div[5]/div[3]/div[6]/button')
//      I.wait(3);
      
//    })


//    Given('I am on Product Page and click on size 11', () => {
//     // TODO: replace with your own step
//     I.amOnPage('https://www.shoecarnival.com/mens/boots')
//     I.wait(2);
//     I.seeElement('#main > div > div.MuiContainer-root.MuiContainer-maxWidthLg > div.MuiBox-root.jss641 > div.jss105 > div > div:nth-child(5) > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > label:nth-child(2) > span.MuiButtonBase-root.MuiIconButton-root.jss660.MuiCheckbox-root.jss658.MuiCheckbox-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input');
//     I.checkOption('#main > div > div.MuiContainer-root.MuiContainer-maxWidthLg > div.MuiBox-root.jss641 > div.jss105 > div > div:nth-child(5) > div.MuiCollapse-root.MuiCollapse-entered > div > div > div > div > label:nth-child(2) > span.MuiButtonBase-root.MuiIconButton-root.jss660.MuiCheckbox-root.jss658.MuiCheckbox-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input')
//   });


//   When('I click on Product 2' , () => {
//     I.seeElement('#item-1 > div > div:nth-child(1) > a')
//     I.click('#item-1 > div > div:nth-child(1) > a')
//     I.wait(3)
//   })

//   Then('It should have size 11',()=>{
//     I.seeElement('//*[@id="main"]/div/div[1]/div[2]/div/div[5]/div[3]/div[9]/button')
//     I.click('//*[@id="main"]/div/div[1]/div[2]/div/div[5]/div[3]/div[9]/button')
//     I.wait(3);
      
//    })




 const { I,And } = inject();
// //Add in your custom step files


  Given('I am on page', () => {
    // TODO: replace with your own step
    I.amOnPage('https://www.shoecarnival.com/mens/boots')
  });


  When('I click on {string}' , (brand) => {

    if(brand === "Carhartt")
    {
      I.seeElement('//*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[3]/div[2]/div/div/div/div/label[1]/span[1]/span[1]/input')
      I.checkOption('//*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[3]/div[2]/div/div/div/div/label[1]/span[1]/span[1]/input')
      I.wait(3)
    }

     if(brand === "AdTec")
    {
      I.seeElement('//*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[3]/div[2]/div/div/div/div/label[3]/span[1]/span[1]/input')
      I.checkOption('//*[@id="main"]/div/div[2]/div[4]/div[1]/div/div[3]/div[2]/div/div/div/div/label[3]/span[1]/span[1]/input')
      I.wait(3)
    }

  })



  Then('It should have {string} in the text',(brand)=>{

    if(brand === "Carhartt")
    {
      I.seeTextEquals("Men's Carhartt CMW6295 Steel Toe Work Boots", '//*[@id="item-0"]/div/div[1]/a/h2');
    }

    if(brand === "AdTec")
    {
      I.seeTextEquals("Men's AdTec 9\" Steel Toe Super Logger Work Boots", '//*[@id="item-0"]/div/div[1]/a/h2');
    }

      
   })





  




