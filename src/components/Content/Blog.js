import React from 'react';

const Blog = ()=>{
    return(
        <div className='tab-content'>
            <h2>Blog</h2>                
            <p>"To teach is to learn twice". With this in mind, I like to create tutorials on programming concepts that I have struggled with to help others like me and to solidify my understanding of particular topics. All my output can be accessed on my <a href="https://blog.jacobcollinsdev.com/" target="_blank" rel="noopener noreferrer"><span className="highlight">blog homepage</span></a>.</p>

            <a className="card" href="https://blog.jacobcollinsdev.com/how-to-toggle-dark-mode" target="_blank" rel="noopener noreferrer">
                <div className="blog-entry">
                    <h3>How to Toggle Dark Mode</h3>
                    <h4>07/09/2020</h4>
                    <p>Dark mode is a really cool feature that's typically used to switch between a "light" and "dark" version of your website, and it's surprisingly simple to implement. To achieve this feature, you need to create additional CSS classes that will contain t...</p>
                </div>
            </a>

            <a className="card" href="https://blog.jacobcollinsdev.com/understanding-the-this-keyword-in-javascript-ckeaaj93000rswks1e5ncfyt8" target="_blank" rel="noopener noreferrer">
                <div className="blog-entry">
                    <h3>Understanding The 'this' Keyword In JavaScript</h3>
                    <h4>25/08/2020</h4>
                    <p>The this keyword in JavaScript refers to the owner of a function. You can also see it as the object that a function is contained in. Where that function is declared determines what this means. This blog post is going to look at what this means and ho...</p>
                </div>
            </a>

            <a className="card" href="https://blog.jacobcollinsdev.com/toggle-classes-on-click-using-javascript-ckdorbqmu00ghkbs18r58113d" target="_blank" rel="noopener noreferrer">
                <div className="blog-entry">
                    <h3>Toggle Classes On Click Using JavaScript</h3>
                    <h4>10/08/2020</h4>
                    <p>Changing the appearance of HTML elements when a user performs an action (for example, by clicking on a button) is one of the easiest ways we can add interactivity to our projects. In this tutorial, we are going to build a simple project that will cha...</p>
                </div>
            </a>

            <a className="card" href="https://blog.jacobcollinsdev.com/create-a-flip-card-using-css-ckd5r9bpo00i4n5s1dielhj28" target="_blank" rel="noopener noreferrer">
                <div className="blog-entry">
                    <h3>Create a Flip Card Using CSS</h3>
                    <h4>28/07/2020</h4>
                    <p>Flip cards are a great way to inject some fun into your website or application whilst simultaneously improving the user experience for your visitors. It's also really simple: all you need is four HTML div elements and 5 CSS rules. In this tutorial, w...</p>
                </div>
            </a>

        </div>
    )
}

export default Blog