# Genre Microservice
 Genre Microservice is a song recommendation microservice. Genre Microservice uses OpenAI's API to generate 3 song recommendations using any given music genre. This project defines an HTTP endpoint that accepts HTTP requests and serves HTTP responses that contain the generated song recommendations.
 </br></br>
 To make HTTP requests to Genre Microservice, follow these steps:
 <ol>
 <li>Download the project code from GitHub.</li>
<li>Copy .env.example from the directory and save the copy in the same directory as filename <b>.env</b>. Enter your OpenAI API Key in the .env file <i>(Sign up for an OpenAI account and create an OpenAI key <a href="https://platform.openai.com/overview" target="_blank">here</a>).</i></li>
 <li>Open a terminal window and navigate to the project directory.</li>
 <li>Run <b>npm init</b> on the terminal window to download the node_modules folder that contains the project dependencies.</li>
 <li>Run <b>npm start</b> on the terminal window to start the Genre Microservice on <b>localhost:3002</b>.</li>
 <li>To test that the endpoint works, open a browser window and enter <b>localhost:3002/genre/country</b>. After the call to OpenAI's API resolves, the window will show the response for 3 song recommendations in the country music genre.</li>
 </ol>
 </br>
After running my project on localhost:3002, any project can use the <b>localhost:3002/genre/_genre</b> endpoint to fetch responses that are formatted as JSON objects containing 3 song recommendations for any music genre as a string.
</br></br>
<h2> UML Diagram </h2>
<img src="https://user-images.githubusercontent.com/50260762/236594905-c7f3278c-af0e-481f-99d9-dd08a360fd66.png"/>

