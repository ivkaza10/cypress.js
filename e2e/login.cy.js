describe('Тестирование авторизации', function () {
    it('Проверка авторизации с корректными логином и паролем', function () {
        cy.reload(); 
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
cy.contains('Авторизация прошла успешно');
     })
     it('Восстановление пароля', function () {
        cy.reload(); 
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#exitMessageButton > .exitIcon');
cy.contains('Успешно отправили пароль на e-mail');
     })
     it('Проверка авторизации с корректным логином и ytrjhhtrnysv паролем', function () {
        cy.reload(); 
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
cy.contains('Такого логина или пароля нет');
     })
     it('Проверка авторизации с корректными логином и паролем', function () {
        cy.reload(); 
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov2.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
cy.contains('Такого логина или пароля нет');
     })
     it('Негативная проверка валидации', function () {
        cy.reload(); 
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
     })
     it('Проверка приведение к строчным буквам в логине', function () {
        cy.reload(); 
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon');
        cy.contains('Авторизация прошла успешно');
     })
 })