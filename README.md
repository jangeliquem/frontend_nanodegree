## Optimizations made to main.js:
* Moved scrollTop variable outside its for loop as all elements of the array uses the same value. 
* Changed to the faster document.getElementsByClassName() Web API call instead of document.querySelectorAll()
* Created a local variable to save document.getElementsByClassName('randomPizzaContainer') outside the loop (e.g. var randomPizzaContainer'), so the DOM is not explicitly touched in every iteration!
* Changed querySelector at line 571 to getElementById to be faster, then
* Moved the DOM call outside the for statement and save it into a local variable but kept .appendChild(elem) inside loop.

## Optimizations to pizza.html:
* restored styles.css name to just style.css (singular s). 
* To prevent Error: GET [...] style.css, commented out style.css link tag per this resource (https://github.com/johnpapa/angular-tour-of-heroes/issues/115) that said: "With the latest version of the angular cli, you no longer have to include the <link rel="stylesheet"...> in the index.html file. The cli will inject the contents automatically."

## Per PageSpeed Result, Optimizations made in index.html and views/js/main.js for pizza.html:

* Avoid landing page redirects
Your page has no redirects. Learn more about avoiding landing page redirects.
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
You have no render-blocking resources. Learn more about removing render-blocking resources.
* Enable compression
You have compression enabled. Learn more about enabling compression.
* Minify CSS
Your CSS is minified. Learn more about minifying CSS.
* Minify JavaScript
Your JavaScript content is minified. Learn more about minifying JavaScript.
* Prioritize visible content
You have the above-the-fold content properly prioritized. Learn more about prioritizing visible content.
* Reduce server response time
Your server responded quickly. Learn more about server response time optimization.

## All steps required to successfully run the application are either below from the original README file or in comments in the files themselves. 

## Website Performance Optimization portfolio project

...optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
