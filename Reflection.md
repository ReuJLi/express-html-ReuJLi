#AI Reflection

1. I asked AI to improve the nav CSS style by making it more visually appealing. 
I also asked AI to create a mobile responsive layout for the website. 

2. The AI did a great job improving the nav. It added a transition effect when the cursor hovers over it. 
It also made the layout change according to the screen. So it looks good both on laoptop and phone screens. It also did it without breaking any existing code. 

3. It made the nav a little more complicated than I liked. It suggested multiple layered sectors that I couldnt understand.
I asked it to simplify it and made it a little more beginner friendly. 

4. I learnt about the hover effect for nav links. I also got a refresher on making websites responsive. 

#Express 
1. What did you ask AI to do? I asked it to create a 404 error page and keep a similar style to my existing website. I also asked it to create add a new site that uses items from a .json file. For this I chose a site for the schedule for sports available for open gym and intramurals. I also asked it to edit my templates to use partials for the nav. 

2. What did it do well? I explained middleware and also made the templates and partials easily and in a clean and structured way. 

3. What did it get wrong? it caused some issues with the partials when adding a new link for the sports page. It kept saying to add it to the express html layout and so when I ran the server it wouldn't show on my nav. It also paced the middleware for the 404 error page before the routes and that caused some issues. 

4. What did you learn? Because Express runs code from the top to bottom middleware order matters. If you put the static files before the routes it serves that first so my index page was being served instead of the EJS template. The 404 handler also has to go last or else it will catch every request before the routes get to run. 

Layout is the outer shell so every page uses it automatically. A partial is a chunk of code that is reusable in any file like the nav in my code. Layout is used on every page whereas partials can be used on some and not others. 



