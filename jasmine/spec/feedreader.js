/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("should have URLs", function () {
            for (i in allFeeds) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toEqual("");
            } 
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("should have names", function () {
            for (i in allFeeds) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toEqual("");
            }
        });
    });

    // new test suite named "The menu" 
    describe("The menu", function () {
        /* This is a test that ensures the menu element is
         * hidden by default. 
         */
        
            it("should be hidden by default", function () {
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it("should change visibility when the menu icon is clicked", function () {
            $("a.menu-icon-link").trigger("click"); // show menu
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $("a.menu-icon-link").trigger("click"); // hide menu
            expect($("body").hasClass("menu-hidden")).toBe(true);
          });

    });
    // a new test suite named "Initial Entries" 
    describe("Initial Entries", function () {
        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it("are loaded", function () {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });
    
    // a new test suite named "New Feed Selection" 
    describe("New Feed Selection", function () {
        var oldFeed;
        var newFeed;

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        beforeEach(function (done) {
            loadFeed(0, function () {
                // old feed
                oldFeed = $('.feed').html();
                // new feed
                loadFeed(1, done);
            });
        });
        
        it("feed content change", function (){
            expect(oldFeed).toBeDefined();
            newFeed = $('.feed').html();
            expect(newFeed).toBeDefined();
            expect(newFeed).not.toEqual(oldFeed);
        });
    });
}());


