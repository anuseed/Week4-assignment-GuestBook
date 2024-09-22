## Project Links

client link :https://week4-assignment-guestbook-1-lw9c.onrender.com
server link :https://week4-assignment-guestbook-2emj.onrender.com
Github repo link https://github.com/anuseed/Week4-assignment-GuestBook/tree/main
![Trello Board](/client/public/Screenshot%202024-09-21%20at%2021.01.02.png)
![Wireframe](/client/public/wireframe.jpg)
![Project Planning](/client/public/rough%20planning.jpg)

## Reflection

1. Requirement: A working form for a user can submit input without any issues.
   I was able to create the form in HTML and add an event handler and listener for the user submitting the form. The event handler also included a fetch function using the POST method for an endpoint in my server. To get this working I needed to link my server with Supabase. There were a lot of errors in this process and took considerable amount of time to debug (turns out the error was I wasn't clicking the save password button after copying the password to my DATABASE_URL).
   - I added a few extra features after I was done with the mvp which cleared the content of my input fields after the submit button was pressed. I also added a message to say thank you when the user submitted feedback. I added a function to alert the user if they had added too many characters to either the name input field or the comment input field.
2. Requirement: Application to work as expected on mobile.
   I styled my elements all in css with my default being mobile view. When I deployed this to render it worked. But when I retried it in my local browser it did not. I tried my best to fix it, the inspect element was very useful but I think in hindsight I should have used a grid, but still not so sure how they work. I also realized towards the end I should have used a <text area> instead of <input> for the comment as the comment covered only one line. I didn't want to change this so late as I knew it would effect my JS and wasn't confindent I would change it all correctly in the time I had left.
3. Requirment: GET API route
   I was able to do this but it took ages as I ran into so many errors in the connecting to Supbase so it was hard to gauge whether it worked. Reading the error logs was very useful to understand what was going wrong. Rembering to async and await was also crucial. Using SQL and seeding my database with dummy data was not that difficult once the connection was established.
4. Requirement: POST API route
   Creating the endpoint in the server for this was done with help from Joe, actually getting my client to get the data was very tricky. In my client app.js I really struggled to get the fetch to work mostly as I wasn't using async and await and not calling the right element when .json().
5. Seed your database with dummy data
   Once I had fixed the bugs of linking to my server I was able to do this pretty easily and also learnt how to delete the content of the table without deleting the table itself when I had created too many entries whilst testing the code.

All in all I would say I felt a lot better with this assignment but also realized how important understanding sections of previous assignments was to be able to complete some sections. The shopUpgrades function in my cookie clicker was very useful in parsing the data from my database.
