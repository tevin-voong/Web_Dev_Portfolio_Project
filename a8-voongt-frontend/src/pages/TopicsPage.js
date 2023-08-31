import React from 'react';

function TopicsPage() {
    return (
        <>
            <section><h2>Web Dev Concepts</h2></section>
    <nav class="nav2">
        <a href="#Web Servers">Web Servers</a>
        <a href="#Frontend Design">Frontend Design</a>
        <a href="#Optimizing Images">Optimizing Images</a>
        <a href="#Cascading Elements">Cascading Elements</a>
        <a href="#Form Usability">Form Usability</a>
        <a href="#Node, npm, and Express">Node, npm, and Express</a>
        <a href="#Javascript">Javascript</a>
        <a href="#Testing DOM Changes with Random Data">Testing DOM Changes with Random Data</a>
    </nav>
    <article>
    <h3 id="Web Servers">Web Servers</h3>
    <p><strong>Index</strong> is the name of the resource at the server in this case. Index, along with a <strong>protocol</strong> and <strong>hostname</strong>, makes up the components of a URL. 
        The component of the URL for index is used by the server to identify the specific resource the client has requested. Index will also be a part of
        the request line when the web client sends an HTTP request to the server machine. Index is also used as the default home page for websites and can be used when a user does not specify a specific
        page on a website.
    </p>
    <p>The first noticeable difference seen in the web server file is that the web server file references the folder name instead of the file name. Although
        main.css and main.js both still display as failed under status, the web server file provides response status codes indicating why those failed. We also see 
        additional items like executor.js and favicon.ico. We can also see on the web server file that the request URL is different as well. The web server file references the URL
        on the server, while the local computer file references the original URL on the local computer.
    </p>
    <p>The <strong>favicon</strong> has a status 200 because the OSU server provides that automatically and the web server file is part of the OSU server. Main.css and main.js both 
        do not have a status 200 because neither <strong>CSS</strong> nor <strong>Javascript</strong> has been implemented on this web page. Also, both main.css and main.js have status 404 which indicates an error.</p>
    <p>The <strong>scheme</strong> of the URL of the web file is https. The <strong>subdomain</strong> of the URL is web.engr. The <strong>host domain</strong> portion of the URL is oregonstate.edu. The <strong>resources</strong> portion of
        the URL is ~voongt/a1-voongt/.
    </p>
</article>
<article>
    <h3 id="Frontend Design">Frontend Design</h3>
    <p>The concept of <strong>frontend design</strong> is about using tools and techniques to create an experience that makes sense in terms of design and <strong>usability</strong>.
        This involves using visual design to create consistent color, font, typography, photography, icon, illustration, and navigation schemes. It is also important
        that a website or desktop app possess high usability, which is the measure of the quality of a user's experience when using a product. The list of usability measures
        can be found below.
    </p>
    <p>There are a combination of factors that affect the usability of a product for a user. The <strong>five “E”s of usability</strong> are below.
    <dl>
        <dt><strong>Effective</strong></dt>
        <dd>The product is effective at helping users meet their goals. Will they end up with accurate results?</dd>
        <dt><strong>Efficient</strong></dt>
        <dd>The product is efficient, so users can perform tasks with the least number of steps. Will the user get those results quickly?</dd>
        <dt><strong>Easy to Navigate</strong></dt>
        <dd>The product is easy for users to navigate, which avoids accessibility and availability issues. This is achieved by learning how the users' create common errors. Will they run into any issues for their specific needs?</dd>
        <dt><strong>Error-free</strong></dt>
        <dd>The product contains no errors that could cause accessibility or availability issues. This is achieved by learning common errors the user can run into. Will they run into roadblocks for their specific needs? </dd>
        <dt><strong>Enjoyable to Use</strong></dt>
        <dd>The product is enjoyable or engaging. The product fits the needs of the intended audience in content and design. Do the previous four “E”s and the overall experience bring your user back?</dd>
    </dl>     
    </p>
    <p>The purpose of <strong>page layout tags</strong> is to separate the flow of content on a page. Page layout tags break up content in blocks with a line break
        before and after the block. Page layout tags also help machines like search engine robots and screen readers understand different areas of the page and the components
        in each area. A page typically includes tags such as <strong>header</strong>, <strong>nav</strong>, <strong>main</strong>, and <strong>section</strong>. Within those page layout tags could be tags such as <strong>articles</strong> and <strong>asides</strong>.
        A <strong>footer</strong> is also a typical tag on a website. The header is the banner or masthead of the website and usually includes the name, publisher, and slogan. The nav tag
        helps take the user to different pages of the site. The main tag is the block that stores the content of the page. The section tag helps group related content. The article tag is used
        inside a section tag and specifies a certain topic. Tags like aside, figure, and blockquote can be used alongside the aside tag to create more interesting looking content.
    </p>
    <p><strong>Anchors</strong> are used to link one section or page to another. One way anchors can be used is by using the <strong>href</strong> attribute within the anchor tag to specify the URL we want the user
        to go to when they click on the description of the link. The description of the link is also within the anchor tag. Another way anchors are used is to
        link to a specific location on the page. By adding an id attribute to the portion of the page we want to link to and adding the value of that id attribute to the link, a URL can open
        the page at the section specified by the id attribute.
    </p>
</article>
<article>
    <h3 id="Optimizing Images">Optimizing Images</h3>
    <p>
       The 6 major specifications of images for the web are <strong>descriptive file name</strong>, <strong>small file size</strong>, <strong>exact dimensions</strong>, <strong>correct file format</strong>, <strong>reduced resolution</strong>, and <strong>color mode</strong>.
       These 6 specifications for images help optimize images so that the images load quickly and properly on the webpage. A descriptive file name helps improve search engine optimization. The file name should include as many
       details about the image in a concise file name. This helps search engine bots display the image to user who are looking for similar images. A small file size is important because it reduces the time it takes for the image file 
       to load. Online images should be saved with lossless compression, so the quality does not degrade. Exact dimensions are essential because images need to fit the space of a web page. A space on a web page for an image of 600px wide should not
       be served an image of 8000px wide. Using the correct file format is critical as well. Online photos are typically in .JPG while line-art images and icons can be .GIF or .PNG. Online photos use .JPG because that file type compresses down
       to smaller sizes and remains rectangular. Other types of images like line-art are in .GIF for either transparency or animation. The file type .PNG also has transparency and is useful with biomorphic shapes and line art, and solid colors  Transparent graphics will need to be in PNG, however. 
       Color mode is an aspect to keep in mind for online images as well. RGB is for RGB for .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF.
    </p>
</article>
<article>
    <h3 id="Cascading Elements">Cascading Elements</h3>
    <p>
        It is important to incorporate stylesheets in websites and apps because stylesheets help recreate how the structure and content within a web page looks. Altering these aspects helps improve usability, 
        readability, legibility, and adheres to the brand requirements of a web page. By using <strong>Cascading Style Sheets</strong>, CSS makes changes to alter the overall look and feel of a web page.
        The five ways to incorporate styles is through <strong>externally linking a .CSS file</strong>, <strong>embedding within a style tag</strong>, incorporating <strong>inline</strong> with elements using
        attribute and value, using <strong>Javascript template literals</strong> within a Javascript function, or using regular <strong>Javascript</strong> by changing the Document Object Model. Externally linking the .CSS file is typically
        the best and preferred method for an app or website. The other methods of incorporating style are one-off style changes only.
    </p>
</article>
<article>
    <h3 id="Form Usability">Form usability, elements and attributes, best practices, and accessibility</h3>
    <p>
        The first major goal of accessibility is to <strong>provide clear instructions</strong> above the form and in the labels. The second goal is to always
        <strong>let users know why</strong> you're gathering data and which fields are required. The third is to <strong>set the first field to autofocus</strong>, so users don't need the 
        keyboard to start typing. The fourth goal is to <strong>ensure each form control can be filled in using the keyboard</strong> for users who cannot or don't use a mouse or trackpad. The fifth
        accessibility goal is to <strong>add tab indexing to complex forms</strong> so that the order of filling in the form is clear. The last goal is to <strong>ensure validation messages are screen readable</strong>, since the
        built-in HTML browser message is not screen-readable.
    </p>

    <p>
        The first major form tag is the <strong>form tag</strong> itself. An attribute it possesses is the action attribute, which specifies where the request from the form should be sent. The action attribute makes it so that
        when the form is submitted, the browser will take the contents of the form and send it to the URL from the action attribute. Another important attribute of the form tag is the method. The method attribute specifies which
        HTTP method will be used in the HTTP request when submitting the form. The typical methods are either GET or POST. Another major form tag is the <strong>label</strong> tag. The label tag helps the user 
        understand the purpose of filling out the form. The label tag includes a for attribute that is added to match with the form control's is attribute. The <strong>fieldset</strong> and <strong>legend</strong> tags are used to separate
        form controls into logical groups. Fieldset creates a default gray border and legend labels that border to help users understand the purpose of the grouped section. An additional major tag is the <strong>input</strong> tag, which
        is typically used to get user data in a form. The input tag has a type attribute which can be used a few different ways like getting an email, creating checkboxes, or implementing radio buttons. The required attribute can also
        be implemented in the input tag to require users to fill out a specific input box. The <strong>select</strong> tag is used to create a drop-down list with different choices. This tag also has a few attributes, like the name attribute, which is 
        used to send the user choice in the request. Another attribute is the option tag, which is used to define the choices in the drop-down list. The <strong>text area</strong> tag is also an important tag that allows users to input multiple lines
        of text to include a message in the form submission. Finally, there is the <strong>button</strong> to be used to submit the form.
    </p>

    <p>
        There are many form style methods to help improve usability. One good idea is to <strong>implement a border, margin, and padding in fieldset</strong> to keep labels and controls from touching edges. <strong>Changing the color and font size of the legend</strong> attribute
        also helps incorporate style into the form. The labels on the form can be displayed on the top by using the <strong>block value</strong> in the label attribute. Another way to increase usability is to make changes to the font size, padding, and font family within 
        the input, button, text area, and select tags to accommodate for fat fingers and arthritic hands. Implementing color changes to boxes with the <strong>focus</strong> attribute could be another smart method to use as well, and setting the <strong>required</strong> status for a form 
        field lets users know which fields they have to fill in. An additional way to signal required form fields for users is to create <strong>asterisks</strong> on fields to let users know a particular field is required. A developer could also use the <strong>pattern</strong> attribute 
        to require certain characters in a field form and then using the <strong>invalid</strong> attribute to signal if the input is valid or not. When inputs have the mouse's focus and a color change is specified, the <strong>placeholder</strong> attribute can be updated to increase contrast. An additional  
        method to improve usability could also be to change the color and look of a checked box or radio button when selected to deselect. Finally, more complex forms can implement <strong>disabled</strong> or <strong>enabled</strong> attributes to keep a portion of the form from being accessed 
        until the user provides certain input. 
    </p>
</article>
<article>
    <h3 id="Node, npm, and Express">Node, npm, and Express</h3>
    <p>
        <strong>Node</strong> is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. Node.js also provides a rich library of various JavaScript 
        modules, which simplifies the development of web applications using Node.js to a great extent. Node allows developers to look for relevant libraries or packages to be used in a program to accomplish the task at hand. <strong>Npm</strong> is an online repository for publishing Node.js packages and is a command-line utility that can install 
        packages from the online repository and manage the dependencies we define for our projects. Node already comes with npm installed and some common commands to use with npm are init, install, and start. Init is used to initialize a new Node.js application. Start is used as the standard way to start a Node.js application. Finally, install is used
        to install a package. The <strong>express</strong> framework helps provide APIs to help web applications perform various common tasks. Express allows developers to get, post, and delete data, and define the ports and routes that data will take. Express can also serve static files, such as from a public folder, and create templates that dynamically 
        build responses that incorporate that data. The framework can also handle requests within the routing pipeline.
    </p>
</article>
<article>
    <h3 id="Javascript">Javascript</h3>
    <p>
        The main data types in Javascript are <strong>numbers</strong>, <strong>Boolean</strong>, <strong>string</strong>, <strong>symbol</strong>, <strong>special values (undefined and null)</strong>, and <strong>object</strong>.
        JavaScript has just one number type, which is double-precision floating-point numbers. Javascript automatically converts strings to numbers, but we should use functions that help do the conversion. The two values of Boolean type
        are "true" and "false". Boolean values should only be used in conditions. The two values indicating an absence of a value are undefined and null. String in Javascript can be enclosed in either single quote or double quote. Strings that
        only contain characters are called String Literals.
    </p>

    <p>
        A JavaScript <strong>object</strong> is a set of name-value pairs. The names of these pairs can also be called properties of the object. We can create (or add), read, update and delete properties of the object. These four actions are referred to as CRUD.
        <strong>Arrays</strong> in JavaScript are objects with property names that are the strings '0', '1', '2', etc. JavaScript requires that the properties of an object are string data type. There are many aspects of arrays, but one aspect is that we can access the elements 
        of an array using 0-based integer index in square brackets and also using the string based property name. <strong>JSON</strong> stands for JavaScript Object Notation and is a popularly used format for exchanging data between applications. JSON format is programming language independent and 
        most programming languages provide libraries for JSON, including JavaScript, Python, Java, C#, etc. In JSON, we can map an object in a program to a string in the JSON format and create an object in a program from a string in the JSON format. 
    </p>

    <p>
        To use <strong>conditionals</strong> in Javascript, we can use if and switch statements. Javascript if statements are similar to other languages with syntax such as "if", "else if", and "else". Conditional expressions in Javascript must be enclosed in parentheses.
        The logic of an "if-then-else" statement can be utilized in Javascript with the "switch" statement. Conditions can also be of any type. There are many operators to use as well, such as the strict equality operators, loose equality operators, and Boolean operators.
        Looping in Javascript is similar to other programming languages as well, with the use of the "while" loop and "for" loop. There is also the "do while" loop, which evaluates the expressions after the body has been executed. There are different "for" loops as well, such as 
        the "for in" loop and the "for of" loop. The "break" statement can be used in loops to break out of a loop even when the loop's condition is true. The "continue" statement is used to cause a loop to skip ahead to the next execution without breaking out of the loop.
    </p>

    <p>
        <strong>Object-oriented-programming</strong> in JavaScript is the focus of an object's identity, state, and behavior. Objects can be created in JavaScript without declaring classes unlike other programming languages, but the class syntax is similar to other languages.
    </p>

    <p>
        <strong>Functional Programming</strong> in Javascript involves using functions that are "first-class" values. This allows us to assign functions to variables, define functions that receive other functions as arguments, and define functions that return functions.
        A function that receives a function as an argument is called a higher-order function. Javascript also provides built-in higher-order functions and methods. Developers can use the map function to create map objects that
        are collections of elements, where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value. When we iterate over the map object, it returns the key, value pair in the same order as inserted. There is also the
        filter method that applies a predicate function and returns an array containing only those elements of the array for which the predicate function returns true. Users can also create anonymous functions or named functions by using the arrow operator and proper arrow syntax.
        Closures are used in functional programming in Javascript as well. The variables in a closure function include one or more variables that are not the parameters passed to the function and are not the local variables. These variables are called free variables. This allows closures to
        capture variables in the environment in which it is defined. A property of functional programming in Javascript includes the use of exceptions as well. When an error occurs in a function, instead of returning the value undefined, the function can throw an exception.
    </p>
</article>
<article>
    <h3 id="Testing DOM Changes with Random Data">Testing DOM Changes with Random Data</h3>
    <p>
        Although DOM is not a programming language, Javascript uses DOM to access documents and elements. DOM provides access to web pages, HTML documents,
        SVG documents and other parts of the page. Each part of the document like the head, table, or text are all part of the document object model. A language like
        Javascript allows developers to access and manipulate all those elements. Most developers will use Javascript to access DOM, but DOM is designed to be independent
        of any particular programming language.
    </p>
    <p>
        Express can be used to update the DOM of a page with middleware and HTTP requests/responses. Middleware is a function that applies an HTTP request to Express programs.
        Middleware functions take three arguments: a request object, a response object, and a next function. This function can also handle errors by adding an error object as an argument.
        This function is associated with a path (or route) and applies to an HTTP request only if that function's path matches the URL of the request.
        Then the matching functions are applied in the exact order of how they appear in the code of our Express app and sets up a pipeline of functions. Middleware functions and route handlers
        in Express receive request and response objects as parameters. The request object consists of the req.query, req.body, and req.headers. The response object consists of methods like res.set, res.type, res.status,
        res.send, and res.json. Express also allows us to specify asynchronous functions as route handlers.
    </p>
</article>
         </>
    );
}

export default TopicsPage;