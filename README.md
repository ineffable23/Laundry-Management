# Full Stack Application Development using MEAN

## Laundry Management

### Problem Statement :

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

### Solution : 


#### Tools and technologies used:

1.	Implemented front-end as a Single Page Application (SPA) using Angular or React.js
2.	Implemented back-end with REST APIs Node.js, Express.js and Firestore database
3.	Used Bootstrap, Material UI and ngx-toastr bor styling and layout
4.	Assumptions regarding intermediate stages : Orders placed, gone for washing, drying to ironing and ironing to delivery
5.	Progress bar completes to 100% after 150 minutes ( Preparing to wash is a 30 minutes process ) + ( Washing clothes is a 60 minutes process ) + ( Drying clothes is a 60 minutes process )