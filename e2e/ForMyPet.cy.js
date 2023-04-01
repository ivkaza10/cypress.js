
describe('Длинный автотест для покупки товара', function () {
    it('Покупка товара с просмотром корзины', function () {
        cy.reload(); 
        cy.visit('https://huntingpony.com/');
         cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click(); //выбрали раздел
         cy.get('[data-product-id="338932820"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); //выбрали продукт
         cy.get('.add-cart-counter__btn-label').click(); //нажали на корзину
         cy.wait(2000);
         cy.get('.header__cart > .icon').click(); //перешли в корзину верхний правый угол
         cy.get('.is-count-up > .icon').click(); //нашли плюсик
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа');

     })
 })
 