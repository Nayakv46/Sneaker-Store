<p>Sneaker Store for every sneaker-head. Filled with dynamic animations and smooth transitions bringing an even better experience to online shopping.</p>

👉 <a href='https://sneaker-store46.vercel.app' target="_blank" rel="noreferrer" >Live Demo</a>

<h3>Built with:</h3>

» Svelte <br/>
» BEM SASS <br/>

<h3>Description of chosen files</h3>

<h5>FeaturedProducts.svelte</h5>
<p>This file is responsible for showcasing chosen products using bultin-in Svelte transitions.</p>
<p>Functionality of this component is based on interval that is started in mounting phase of the component, which changes variable shownIndex overseeing change of showcased product. To make it reasonable there have been implemented functions that are run on mouse enter and leave, clearing old interval and starting new respectively, giving the ability to take a closer look on the product for the client. Additional feature for changing the showcased product to a different one is implemented by navigation dots placed under the description. Transitions from Svelte library have been implemented of the image itself, description and background for a smooth and dynamic experience of the user, which are being made on change of the variable shownIndex.</p>

<h5>ProductPage.svelte</h5>
<p>File containing shape of display for every product's details built with other components such as ImagePicker.svelte or SizePicker.svelte. Main functionality base on a form containing dynamically rendered radio buttons representing available sizes for a chosen product and a submit button with validation displaying a message.</p>

<h5>ImagePicker.svelte</h5>
<p>This component contains a scrollable list of all images to a chosen product as well as a enlarged image that changes based on a variable chosenImage. Change of the variables value can be made by hovering or clicking on one of the images from the list in addition to clicking on navigation buttons holding chevron icons inside representing previous and next meaning. Due to accessibility there have been implemented function handling change to the next image on key down.</p>

<h5>CheckoutPage.svelte</h5>
<p>Base of a page listing all products that have been added to the bag, which is tigthly connected functionally to a SideCart.svelte file. It contains a fixed summary section following user's scroll to increase readability and user experience. The delivery date is calculated rougly by adding three days to the current date and increasing it even further if the date equals a weekend. Listed items have implemented animations and trasitions flying the removed items out and smoothly moving the rest of the list to it's new position.</p>

<div align="center">
  <h4>Home Page</h4>
  <img src="https://github.com/Nayakv46/Sneaker-Store/assets/130490621/48b77705-868e-445e-a118-f08344aed73b" />
</div>

<div align="center">
  <h4>Category Page</h4>
  <img src="https://github.com/Nayakv46/Sneaker-Store/assets/130490621/0744cffd-a375-4195-a19b-9acfce9f5fae" />
</div>

<div align="center">
  <h4>Product Page</h4>
  <img src="https://github.com/Nayakv46/Sneaker-Store/assets/130490621/dbf51a92-0c16-46ec-9047-8fd7c447519d" />
</div>

<div align="center">
  <h4>Checkout Page</h4>
  <img src="https://github.com/Nayakv46/Sneaker-Store/assets/130490621/b25418f9-09d1-45f5-94a3-d8305fb6c17f" />
</div>
