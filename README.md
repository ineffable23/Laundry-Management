# Full Stack Application Development using MEAN

### Laundry Management
- [Problem statement](https://github.com/ineffable23/Laundry-Management/tree/main/Laundry-Firebase#problem-statement-)
- [Solution](https://github.com/ineffable23/Laundry-Management/tree/main/Laundry-Firebase#solution-)
- [Project Presentation](https://github.com/ineffable23/Laundry-Management/tree/main/Laundry-Firebase#project-presentation-)
- [Project Wireframe](https://github.com/ineffable23/Laundry-Management/tree/main/Laundry-Firebase#project-wireframe-)
- [Challenges Faced](https://github.com/ineffable23/Laundry-Management/tree/main/Laundry-Firebase#challenges-faced)
- [Future Scope](https://github.com/ineffable23/Laundry-Management/tree/main/Laundry-Firebase#future-scope)


## Problem Statement :

Nobel Laundry Pvt.Ltd. is a popular laundry and dry cleaner services in Pune. They need to use an application for tracking clothes given to them for washing or ironing service of various types of clothes given by their customers. The application needs to maintain details about Details of Clothes, Customers, Status Tracking, Billing and Delivery. 
There will be two types of Users – Admin (the Owner) and Customer. 


#### Functionality for Admin user: 

- Upon starting up, the application will show an option to receive new order from a customer or existing orders a list of clothes which are due for washing, drying, ironing and delivery. 
- Which can be selected by the admin and change their status from washing to drying, drying to ironing and ironing to delivery.
- Admin can assign washing and ironing to his staff who is washing or ironing experts.
- Washing and ironing experts can only take up to 100 clothes per day remaining clothes will be processed next day.
- Preparing to wash is a 30 minutes process where the clothes are tagged and sorted for type, fabric and color.
- Washing clothes is a 60 minutes process. 

- Once washed the washer men will immediately put the clothes for drying which again may take up to 60 minutes. 
- Once the washer men completes the drying process, the record should be available for Admin to process the same for ironing experts.
- Admin can also create/update/delete/search on the Master data of Clothes given for washing or ironing.
- The clothes given by a customer will always be displayed together but can have various stages in process.


#### Functionality for Service Advisor:

- Upon starting up, the application will give 2 options. One to add clothes for washing or ironing and option to track the status of clothes that are already given for washing or ironing with help of a dashboard which depicts the status of clothes given for washing or ironing
- Once the clothes are ready to be delivered by admin the customer will get a notification to collect them from Nobel Laundry


#### Notes:

1.	Implement front-end as a Single Page Application (SPA) using Angular or React.js
2.	Implement back-end with REST APIs Node.js, Express.js and MongoDB database
3.	Study the real-life documents as per your own experience and decide on the entities and attributes (pick-up only a subset which is important to implement functionality)
4.	You may make some assumptions regarding intermediate stages for simplification
5.	You are free to enhance the application with additional functionality if you wish
6.	Make the source-code of the application available on GitHub 
7.	Prepare a presentation with details of functionality with screen-shots

<hr>

## Solution : 

#### Functionality:

- Upon starting up, the application will give options for Log in, Sign up, forgot password, verify email, user dashboard, admin dashboard, home.
- Sign up page takes Name, Email, Password and stores in firestore database.
- Login takes emaail as Username and password and firebase is used for authentication.
- user dashboard is acccessible by both end users and admin.
- admin dashboard is only accessible by admin 


#### Functionality for Admin user: 

- Upon logging in, the application show three Buttons 
- View Orders button shows a list of clothes which are due for washing, drying, ironing and delivery. 
- Search or Delete button allows admin to delete or search on the Master data of Clothes given for washing or ironing.
- Edit Orders button allows admin to create or update on the Master data of Clothes given for washing or ironing.
- Admin can assign washing and ironing to his staff who is washing or ironing experts.
- Washing and ironing experts can only take up to 100 clothes per day remaining clothes will be processed next day.
- Task completion time is 150 minutes ( Preparing to wash is a 30 minutes process ) + ( Washing clothes is a 60 minutes process ) + ( Drying clothes is a 60 minutes process ).
- Admin credentials are displayed at the bottom which can be edited(create/update/delete) by the admin.



#### Functionality for Service Advisor:

- Upon logging in, the application show two Buttons 
- Track status button shows the status of the order on a progress bar 
- Status stages : Orders placed, gone for washing, drying to ironing and ironing to delivery
- Progress bar completes to 100% after 150 minutes ( Preparing to wash is a 30 minutes process ) + ( Washing clothes is a 60 minutes process ) + ( Drying clothes is a 60 minutes process )
- Add Clothes button allows end user to place order.
- It take Name, Email, Mobile Number, Cloth Type, Cloth fabric, Cloth Colour
- Once the clothes are ready to be delivered by admin the customer will get a notification to collect them from Nobel Laundry


#### Tools and technologies used:

1.	Implemented front-end as a Single Page Application (SPA) using Angular
2.	Implemented back-end with REST APIs Node.js, Express.js, Firebase authentication and Firestore database
3.	Used Bootstrap, Material UI, ngx-toastr, ngx-pagination for styling and layout
4.	Assumptions regarding intermediate stages : Orders placed, gone for washing, drying to ironing and ironing to delivery
5.	Progress bar completes to 100% after 150 minutes ( Preparing to wash is a 30 minutes process ) + ( Washing clothes is a 60 minutes process ) + ( Drying clothes is a 60 minutes process )

#### Future Scope:

- Role based authentication: Login and Sign up authentication can be done based on roles in order to provide access to dashboard/admin dashboard
- Improved styling: The style (css) of the website can be improved
- Features: More features can be added to solve real life problems such as pickup, delivery, subscription, etc

#### Challenges faced:

- Learnt to implement various angular package modules such as  ngx-toastr, ngx-pagination
- Learnt to implement Material UI from scratch
- Learnt and performed Firebase CRUD
- Designed the structure of the entire application
- [error] Error [ERR_REQUIRE_ESM]: require() of ES Module <br> <br>
  ![Screenshot (445)](https://user-images.githubusercontent.com/49369387/163671219-525086bf-13df-4cf0-97b1-8d17603909e5.png)
  ![Screenshot (446)](https://user-images.githubusercontent.com/49369387/163671220-238dc66c-7824-47fb-a0d7-b648c8f6f192.png)


- I tried to resolve this error through various methods mentioned on [stack overflow](https://stackoverflow.com/questions/69081410/error-err-require-esm-require-of-es-module-not-supported) and github still it was of no use. <br>
- ![Screenshot (447)](https://user-images.githubusercontent.com/49369387/163671221-64aed767-1e1a-4ecc-85ee-87a72cb6ed8a.png)
  
  
 ## Project Presentation :
<!--  - [Laundry-Management-Presentation](https://user-images.githubusercontent.com/49369387/163675567-aa56e2e5-1014-4d99-8107-6a55e04999db.mp4) -->
[<img src="https://i.ytimg.com/vi/Hc79sDi3f0U/maxresdefault.jpg" width="50%">](https://user-images.githubusercontent.com/49369387/163678116-f4fc24cf-5b87-40e3-a9a2-855fa8eaf1da.mp4 "Now in Android: 55")


 ## Project Wireframe :
 [Laundry Management Wireframe](https://github.com/ineffable23/Laundry-Management/blob/main/Laundry%20Management%20wireframe.pdf)
