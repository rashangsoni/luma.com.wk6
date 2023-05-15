$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gear.feature");
formatter.feature({
  "line": 2,
  "name": "Gear Test",
  "description": "As A user i want to add products successfull to shopping cart",
  "id": "gear-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7398390100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to add products to shopping cart",
  "description": "",
  "id": "gear-test;user-should-be-able-to-add-products-to-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on bags",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on product name Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify the text overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I change qty 3",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text You added Overnight Duffle to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click and shopping cart message",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify product price $135.00",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I change Qty to 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on update shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify the product price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 187990100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_mouse_hover_on_gear_menu()"
});
formatter.result({
  "duration": 551007700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_bags()"
});
formatter.result({
  "duration": 1305761000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_product_name_Overnight_Duffle()"
});
formatter.result({
  "duration": 1436863700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_verify_the_text_overnight_Duffle()"
});
formatter.result({
  "duration": 243225000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.i_change_qty(int)"
});
formatter.result({
  "duration": 569889900,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 132721000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_verify_text_You_added_Overnight_Duffle_to_your_shopping_cart()"
});
formatter.result({
  "duration": 1525415700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_and_shopping_cart_message()"
});
formatter.result({
  "duration": 1702432000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 24
    },
    {
      "val": "00",
      "offset": 28
    }
  ],
  "location": "GearTestSteps.iProductPrice$(int,int)"
});
formatter.result({
  "duration": 189189500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.i_change_Qty_to(int)"
});
formatter.result({
  "duration": 1554963800,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.i_click_on_update_shopping_cart_button()"
});
formatter.result({
  "duration": 106685400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 28
    },
    {
      "val": "00",
      "offset": 32
    }
  ],
  "location": "GearTestSteps.i_verify_the_product_price_$(int,int)"
});
formatter.result({
  "duration": 3115798900,
  "status": "passed"
});
formatter.after({
  "duration": 887215100,
  "status": "passed"
});
formatter.uri("men.feature");
formatter.feature({
  "line": 2,
  "name": "Men test",
  "description": "As a user I want to add the product in shopping cart",
  "id": "men-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4499831900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to add products in shopping cart",
  "description": "",
  "id": "men-test;user-should-able-to-add-products-in-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on men menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on bottoms",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on pants",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on cronus yoga pant",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on size 32",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on black colour",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify text You added Cronus Yoga Pant to your shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on shopping cart link",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I verify product name cronus yoga pant",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify Product size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I verify the product colour Black",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 41200,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_men_menu()"
});
formatter.result({
  "duration": 1018057100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_bottoms()"
});
formatter.result({
  "duration": 270863700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_pants()"
});
formatter.result({
  "duration": 1610625100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_mouse_hover_on_cronus_yoga_pant()"
});
formatter.result({
  "duration": 40300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 16
    }
  ],
  "location": "MenTestSteps.i_click_on_size(int)"
});
formatter.result({
  "duration": 169900,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_black_colour()"
});
formatter.result({
  "duration": 61700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_add_to_cart()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_text_You_added_Cronus_Yoga_Pant_to_your_shopping_cart()"
});
formatter.result({
  "duration": 64500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_click_on_shopping_cart_link()"
});
formatter.result({
  "duration": 68000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_text_Shopping_cart()"
});
formatter.result({
  "duration": 56700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_product_name_cronus_yoga_pant()"
});
formatter.result({
  "duration": 41400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 22
    }
  ],
  "location": "MenTestSteps.i_verify_Product_size(int)"
});
formatter.result({
  "duration": 146300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.i_verify_the_product_colour_Black()"
});
formatter.result({
  "duration": 99600,
  "status": "passed"
});
formatter.after({
  "duration": 897558800,
  "status": "passed"
});
formatter.uri("women.feature");
formatter.feature({
  "line": 2,
  "name": "Women Test",
  "description": "As a user I want to verify the products name filter and price filter",
  "id": "women-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4321115700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should able to sort by product name filter",
  "description": "",
  "id": "women-test;user-should-able-to-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on women menu",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on jacket",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Sort By filter \"Product Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should verify the products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32200,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 713475900,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 246034500,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacket()"
});
formatter.result({
  "duration": 1284153800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product Name",
      "offset": 25
    }
  ],
  "location": "WomenTestSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 2184537000,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldVerifyTheProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 606753200,
  "status": "passed"
});
formatter.after({
  "duration": 915803300,
  "status": "passed"
});
formatter.before({
  "duration": 4330009700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to sort by price filter",
  "description": "",
  "id": "women-test;user-should-able-to-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover on women menu",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I mouse hover on tops",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on jacket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Sort By filter \"Price\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should verify the products price display in low to high",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnWomenMenu()"
});
formatter.result({
  "duration": 748962800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverOnTops()"
});
formatter.result({
  "duration": 356076000,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacket()"
});
formatter.result({
  "duration": 1403962400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price",
      "offset": 25
    }
  ],
  "location": "WomenTestSteps.iSelectSortByFilter(String)"
});
formatter.result({
  "duration": 1522785100,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldVerifyTheProductsPriceDisplayInLowToHigh()"
});
formatter.result({
  "duration": 2432157700,
  "status": "passed"
});
formatter.after({
  "duration": 914800300,
  "status": "passed"
});
});