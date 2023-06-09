<h1 align="center">Online-Bookstore-Project</h1>

The design and implementation phase of the Online Bookstore project is dedicated to crafting an intuitive user interface, formulating a scalable database schema, and establishing a modular system architecture. These deliberations are indispensable in guaranteeing a seamless user experience, efficient management of data, and flexible system maintenance. This section shall furnish comprehensive elucidations on each facet of the design and implementation journey.

## **Use Case:**

Before diving into the details of user interface design, it is essential to understand the main use cases of the Online Bookstore project. The following key use cases were identified and considered during the design and implementation phase:

<img width="1166" alt="O B-Usecase" src="https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/36b638b2-8398-4e24-a2e1-ed2733fe8d07">
<p align="center">Figure 1 - Use Case Diagram</p>

### User registration and login:
To gain access to the full array of features and personalized account information, users are empowered to create new accounts by providing their personal particulars and generating a unique username and password. For those already registered, existing users can effortlessly sign in using their credentials to access their accounts.

### Search and browse books:
In order to facilitate an effortless voyage of book discovery, users are bestowed with the ability to conduct searches based on diverse criteria such as book title, author, genre, or publication date. Furthermore, users can indulge in the delight of perusing through book categories and genres, thus immersing themselves in the realm of captivating titles that allure their interests.

### Book details and reviews:
Users are invited to embark on an immersive exploration of comprehensive book details, which encompass vital elements including the book cover, title, author, genre, description, and customer reviews. This empowers users with a profound understanding of the book, facilitating an informed decision-making process. Additionally, users are encouraged to contribute their own comments, thereby sharing their insights, opinions, and experiences with the vibrant community.

### Cart management:
To facilitate a seamless shopping experience, users can effortlessly manage their shopping cart. They have the freedom to add books to their cart, update quantities as needed, and remove items that are no longer of interest. The cart display showcases the contents, including the total price, empowering users with a clear overview. Subsequently, users can proceed to the checkout process.

### Check and pay:
The checkout process encompasses a series of steps where users provide shipping information and select a preferred payment method. Through integration with a secure payment gateway, users can confidently finalize their transactions with utmost security and peace of mind.

### Order history and tracking:
In order to stay informed about the progress of their orders, users can conveniently track the status, accessing vital information such as shipment details and estimated delivery dates. Additionally, users have the ability to view their complete order history and conveniently access receipts for previous purchases.

### Manage user accounts:
To offer users greater control and flexibility, they have the autonomy to manage their account details. This includes the ability to update personal information, modify passwords, and manage email preferences. Furthermore, users can effortlessly view and edit billing and shipping addresses, streamlining future payments.
 
Having outlined the core use cases, we shall now delve into the Database design and UI design aspects of the Online Bookstore project.

## **Database Schema**
The database schema for the Online Bookstore project has been meticulously crafted to proficiently handle book-related data and user information. MongoDB, a widely favored NoSQL database, is employed in conjunction with the Mongoose library to facilitate seamless interaction with the database.

The schema encompasses various collections, namely "Book," "Author," "Genre," "Publisher," "Book Author," "Book Genre," "Book Publisher," "Cart," "Cart Item," "Customer," and "Review." Each collection represents a distinct entity within the system and incorporates associated fields to store relevant data. Relationships between collections are established using primary and foreign keys, ensuring the integrity of the data.

For instance, the "Books" collection houses comprehensive information about each book, encompassing its title, description, price, availability, as well as references to corresponding authors, genres, and publishers. The "Author," "Genre," and "Publisher" collections contain intricate details concerning the respective entities, such as their names and biographies. The "Book Author," "Book Genre," and "Book Publisher" collections facilitate the mapping between books and their associated authors, genres, and publishers.

To optimize performance, meticulous indexing has been implemented on frequently accessed columns. Indexing greatly enhances query performance by enabling the database to swiftly locate the desired data. Additionally, stringent security measures, such as hashing and generation of user passwords, have been employed to safeguard the sensitive user information stored in the "Customer" collection.
 
<img width="998" alt="O B-ERD" src="https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/1594d786-d43d-4f99-b43e-eef09f3c5241">
<p align="center">Figure 2 - ERD Diagram</p>

## **User Interface Design**
The UI design of the Online Bookstore strives to present an immaculate and aesthetically pleasing arrangement, enriching the overall user experience. The design team focused on crafting a responsive interface that seamlessly adapts to various devices and screen sizes. Key design elements, such as a prominent search bar, lucid navigation menus, and streamlined book catalogs, have been integrated to facilitate effortless book discovery and browsing.

The HomePage serves as a central hub, offering users a comprehensive display of featured books, suggested titles, and personalized recommendations based on their browsing history. The design underscores the importance of prominently showcasing book covers, titles, authors, and ratings. Users can effortlessly navigate to different sections of the website, including the ShopPage, CartPage, LoginPage, RegisterPage, CheckOutPage, and BookPage, by utilizing well-designed navigation menus.

To enhance the purchasing experience, a user-friendly shopping cart has been implemented. Users have the ability to add books to their cart, update quantities, and seamlessly proceed to checkout. The checkout process is streamlined, enabling users to provide shipping information, select a payment method, and review their order before finalizing their purchase. Clear and concise error messages are displayed whenever necessary, guiding the user through the process.

### Login & Register Interface Design:
The login and register interface of the online bookstore web application provides users with a secure and convenient way to access the platform and enjoy its features:

**Login Interface:**
The login interface allows registered users to log into their accounts. It consists of two input fields: one for the user's email or username and another for their password. Upon entering the correct credentials, users can click the login button to access their personalized bookstore account.

![LoginPage](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/68d2e8c1-a7eb-47ea-9efd-c013c62f266c)
<p align="center">Figure 3 - Login Interface Design</p>

**Register Interface:**
The register interface enables new users to create an account on the online bookstore platform. It prompts users to provide their necessary information, including a valid email address, a unique username, and a secure password. Once users fill in the required fields, they can submit the registration form and create their account. The interface also include terms of service or privacy policy agreement checkboxes to ensure users are aware of and agree to the platform's policies.

![RegisterPage](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/721b2ad6-164b-4e79-b89e-5976f0c49212)
<p align="center">Figure 4 - Regiter Interface Desgin</p>

**Verify Interface:**
The verification interface holds significant importance within the online bookstore web application as it ensures the genuineness and security of user accounts. Upon completion of the registration form, users will receive an authentication email containing a unique verification code.

The verification interface prompts users to access their email inbox and input the provided verification code. This step is crucial in confirming the ownership of the provided contact information and preventing unauthorized access to the platform.

Once users correctly enter the verification code, the verification interface validates their account, granting them access to the online bookstore platform. This process serves to maintain the platform's integrity and ensures that only authorized users can utilize its features.

The verification interface plays a vital role in enhancing security measures and establishing trust among users by verifying their identity through the unique verification code sent to their registered email address.

![VerifyPage](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/55515c32-cfe3-44b9-b1f4-c507fef33ea1)
<p align="center">Figure 5.1 - Verify Interface Desgin</p>

<img width="1466" alt="Email-Confirm" src="https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/649fcf0c-55fe-4008-9213-ca6f787f1af7">
<p align="center">Figure 5.2 - Email Confirm</p>


### Home Page Interface Design
The home page of an online bookstore web application serves as the primary gateway for users to explore and discover a wide range of books and related content:

**Header:** The top section of the home page contains a header that includes the application's logo, navigation menu, and search bar. The logo helps users identify the bookstore brand, while the navigation menu allows them to access different sections of the website, such as shop, publisher, author, or contact. The search bar enables users to quickly search for specific books or authors.

**Book Categories or Genres:** A prominent section on the home page showcases various book categories or genres. This allows users to browse books based on their interests or preferred genres, such as fiction, non-fiction, mystery, romance, sci-fi, etc. Each category may display a selection of book covers or titles to give users a glimpse of what they can expect in that genre.

**Featured Content: **The home page highlights featured books or book recommendations to catch users' attention. This section includes visually appealing book covers, catchy taglines, and brief descriptions to entice users to explore further.

**Reviews:** To build trust and credibility, the homepage includes book reviews from users who have purchased previously. This can help users make an informed decision about their book selection and increase their confidence when purchasing from a bookstore.
 
![HomePage-Above](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/c06a47aa-c5a0-4024-9bc2-100cdb06e5cd)
![HomePage-Below](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/87820b85-b7b3-4ba1-8484-e9f96ffdc414)
<p align="center">Figure 6 - Home Page Interface Design</p>


### Shop Page Interface Desgin
The shop page of an online bookstore web application is a crucial section where users can browse, search, and purchase books from a vast collection:

**Search and Filters:** The shop page includes a search bar and filters to help users find specific books or refine their search results. The search bar allows users to enter keywords, book titles, or author names to quickly locate desired books. Filters, such as genre, or author, enable users to narrow down their search based on their preferences.

**Book Listings:** The primary section of the shop page displays a grid or list of book listings. Each listing includes the book cover image, title, author, price, and average rating. Users can click on a book to view more details or add it to their shopping cart for purchase.

**Sorting Options: **To enhance user experience, the shop page provides sorting options. Users can choose to sort the book listings by relevance, popularity, price (low to high or high to low), publication date, or customer ratings. This helps users find books that align with their preferences and priorities.

**Book Details:** Clicking on a book from the shop page takes users to a dedicated book details page. This page provides comprehensive information about the book, including a larger book cover image, detailed description, author information, publication details, and customer reviews. Users can also find options to add the book to their cart, add it to their wish list, or write their own review.

**Shopping Cart:** The shop page features a shopping cart icon that displays the number of items in the user's cart. Users can easily review and edit their selected items before proceeding to the checkout process.

![ShopPage-Above](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/2f0f2781-66b5-417f-ab49-9bbbf777cc28)
![ShopPage-Below](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/174a4027-13e7-4601-9cb2-0c65f11a9bac)
<p align="center">Figure 7 - Shop Page Interface Desgin</p>


### Book Page Interface Design
The book page on an online bookstore web application is a dedicated space where users can access comprehensive information about a specific book:

**Book Cover and Title:** The book page prominently showcases the book's cover image and title at the left and top. The cover image allows users to visually connect with the book, while the title provides a clear identification.

**Book Details:** Below the title, the book page presents detailed information about the book. This includes the author's name, genre, publisher, SKU, and any relevant edition details. Users can easily refer to these details for reference or verification.

**Book Description:** A substantial section of the book page provides a comprehensive description of the book. This description offers users an overview of the book's plot, genre, theme, or any other relevant information that helps them understand the content and decide if it aligns with their interests.

**Customer Reviews and Ratings:** To assist users in making informed decisions, the book page may display customer reviews and ratings. These reviews are accompanied by a star rating that represents the average score given by readers who have already experienced the book. Users can read through the reviews to gain insights and opinions from other readers.
 
![BookPage](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/ddc45192-5a79-4e62-ae60-f663831ee18c)
<p align="center">Figure 8 - Book Page Interface Design</p>


### Search Page Interface Design
The search page of an online bookstore web application provides users with a powerful tool to discover specific books or explore a wide range of options based on their search criteria:

**Search Bar:** The search page prominently features a search bar where users can enter keywords, book titles, author names, or any other relevant information to initiate a search.

**Search Results:** Upon entering a search query, the search page displays a list of relevant search results. Each search result includes the book cover image, title, author, price, and customer review. Users can click on a specific book to access its dedicated book page for more detailed information.

**Filters and Sorting Options:** The search page provides filters and sorting options to help users narrow down their search results. Filters include options such as price range, publication date, or customer ratings. Sorting options allow users to rearrange the search results based on relevance, popularity, price, or customer ratings.

**Pagination:** If the search results are extensive, the search page implement pagination to ensure a smooth browsing experience.

![SearchPage](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/deb472fa-9b99-46fa-8cbe-b814ac2b2401)
<p align="center">Figure 9 - Seacrh Page Interface Design with “Harry” keyword</p>

### Cart Page Interface Design
The cart page of an online bookstore web application is a crucial stage in the purchasing process, where users can review and manage the items, they have added to their shopping cart before proceeding to checkout:

**Cart Summary:** The cart page displays a summary section at the top, providing an overview of the items currently in the user's cart. This section includes details such as the book titles, quantities, prices, and the total cost of the items in the cart.

**Quantity Adjustment:** The cart page allows users to adjust the quantity of each item in their cart. Users can increase or decrease the quantity using plus and minus buttons. This feature provides flexibility for users to manage the number of items they wish to purchase.

**Remove Items:** Users can easily remove items from their cart if they decide not to proceed with the purchase. The cart page includes a "delete" button next to the left of each item, allowing users to remove specific items from their cart with a single click.

**Cart Subtotal and Total:** The cart page displays the subtotal, which represents the total cost of the items in the cart before any additional fees or discounts. It also presents the total cost, which includes any applicable taxes, shipping charges, or discounts. These figures help users understand the financial aspects of their purchase before proceeding to checkout.

**Proceed to Checkout:** The cart page includes a prominent "Proceed to checkout" button that allows users to initiate the checkout process. Clicking this button takes users to the payment and shipping information page, where they can provide the necessary details to complete their purchase.

![CartPage-HaveBooks](https://github.com/HinhNhuLaHuy/Online-Bookstore-Project/assets/84061230/03d7da9d-b50c-401a-b695-74677e46df91)
<p align="center">Figure 9 - Cart Page Interface Design with Books</p>
