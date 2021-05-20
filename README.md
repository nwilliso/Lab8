# Lab8_Starter
By Nicholas Willison

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   
   ANS: (1) Within a Github action that runs whenever code is pushed (because it automates it an does it constantly as opposed to being subject to human forgetfullness of manually having to do it or only running once when development is completed)


2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   ANS: No, I would not use a unit test to test the "message" feature because it has too many moving parts and is too big of a part of a messaging application to be considered a small individual part.


3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   
   ANS: Yes, I would use a unit test to test the "max message length" feature because it is a small individual part of the application that does not have many moving parts and is unlikely to be affected by changing other app features.


4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   
   ANS: If "headless" was set to true, the tests would run without a browser UI.


5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   
   ANS:
    beforeAll(async () => {
        await page.goto('http://127.0.0.1:5500');
        await page.waitForTimeout(500);
        await page.click('[alt="settings"]')
    });
