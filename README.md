Site url: <br />
https://jip002.site <br />
server ip address: 64.226.80.125 <br />
<br />
Team Members: <br />
Jihun Park <br />
Kevin Zhang <br />
<br />
<br />
Login information for HW4 (the login page) <br />
Basic: <br />
email: grader@gmail.com <br /> 
password = 12345 <br />
<br />
Admin: <br />
email: admin@gmail.com <br />
password: 12345 <br />
<br />
<br />
Below is the basic login information for the SSH server (not for HW4) <br />
grader password : graderjip002 <br />
(site login information for https://jip002.site is also the same) <br />
<br />
Username/password info for logging into the site (and also linux server):<br />
username: grader <br />
password: graderjip002 <br />
username: jip002 <br />
password: 1998122Wlgns <br />
username: kevin <br />
password: z20020117 <br />
<br />
<br />
Write Ups <br />
<br />
Authentication <br />
<br />
I did researches on Node.js about the available options for making users to login. <br />
There were many options such as using cookies or even dirty url to authenticate the user 
and keep them logged in. <br />
However, I prefered to use passport module that uses express-sessions to keep users logged in and make sure non-logged in users will not be able to access pages other than login and signup page.<br />
Then I implemented the middleware using passport to validate the user email with user password, and the passwords are hashed by bcrypt so they will be more secure.<br />
<br />
<br />
Dashboard <br />
We chose to display user cursur movement record from our login page to see which part of our webpage triggers the most interest from the users, and record them on a bubble chart by their x and y coordinates. Further detailed explanation is in part 4 Report section. <br />
<br />
Next we chose to use a bar chart to display and compare what operating systems the users are using, and we thought that using a bar charts can clearly display what operating systems the users are using the most. <br />
<br />
Lastly, we chose to use a top-down grid to display a list of user screen and window dimension sizes, thus collecting data of whar are the commonly used screen sizes of various users.<br />
<br />


<br />
Report <br />
<br />
Question to explore: Which part in the page is the user engaging the most? <br />
<br />
User experience is the core for web development. Among all the metrics for measuing user experiences, such as loading time and bounce rate, mouse movement trace could be an intuitive way of gaining insights on the way that users are engaging and exploring our web pages. For example, sometimes users might expect tooltips to pop out while hovering over a button or a link, and the mouse movement tracing can demonstrate this intention. Thus, we want to explore this question by visualizing curser location data of the mouse by using scatterplot and grid. <br />
From the scatterplot, we can clearly see that the users tend to explore more on the left buttom part of the page. From the user's perspective, as mentioned above, they might be expecting tooltip from that part of the page, or they are trying to get rid of some pop-up ads. From our developers' perspective, we could see if there's any button or link at that location to add tooltips to help user nagivate, or we can set some ads blockers to improve users' browsing experiences. There's some more take-away we can get from the grid. We can see the mouse movement to the coordinate-level accuracy from the grid, so we can make more accurate adjustments on our pages. <br />
<br />
<br />
submission report: I decided to report on mouse movement from activity data, because for me it is the most intuitive to observer how users are interacting with the page just by looking at the mouse movement, which is also beneficial for the later on improvement to the web page. I decide to use scatter plot chart and grid to display our data. Firstly, from scatter plot very easily we can see which part that the users are interested in, and we can have some initial guess on user's intention from their interactions; secondly, with data from grid we can learn very accurately which coordinates they are trying to hover over or click on, so we could make further adjustment on the web page. 
<br />
<br />
<br />
######Notes for the graders: ######<br />
<br />
The charts can be loaded slowly due to our server condition. <br />
Our server sometimes become really slow and we had to wait for 10-20 minutes or go into digital ocean and restart the droplet. <br />
If the charts on the main page and report page is not loading up immediately, please wait for a few seconds or few minutes (or refresh the page) and they will be eventually displayed.<br /> Just in case we included the screenshots of the loaded charts from our server to prove that they are actually working well.
<br />
Please let us know via Slack if there's any problem in our site that prevents your grading, thank you!<br />