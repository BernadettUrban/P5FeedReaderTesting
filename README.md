# Feed Reader Testing Project

The Jasmine spec file contains all of the tests that will be run against the application.
1. The 'RSS Feeds' test suite tests to make sure that the allFeeds variable has been defined and that
 it is not empty. 
2. "should have URLs" a test that loops through each feed in the allFeeds object and ensures it has a 
URL defined and that the URL is not empty.
3. "should have names" is a test that loops through each feed in the allFeeds object and ensures it has 
a name defined and that the name is not empty.
4. The test suite named "The menu" ensures the menu element is hidden by default.
5. The test suite named "Initial Entries" ensures when the loadFeed function is called and completes its work, 
there is at least a single .entry element within the .feed container.
6. The test suite named "New Feed Selection" ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## How to install the app :
1.	Download the repository.
2.	Extract the .zip file.
3.	Open index.html in your browser.
4.  You can see at the bottom whether the tests are passed successfully