# ⭐ SDE Internship Assignment: Contact Management

This project implements a **Contact Management** feature for a CRM system. It enables users to **add**, **view**, **update**, and **delete** contact details in a structured and user-friendly interface. PostgreSQL has been chosen as the database for managing contact data efficiently.

---

## 🗒️ Project Overview

The **Contact Management** feature centralizes contact information, providing a seamless way to manage relationships with clients or customers. Users can:
- Add new contacts with essential details like name, email, phone number, company, and job title.
- View a sortable and paginated table of all contacts.
- Edit contact details to keep information up to date.
- Delete outdated or duplicate contacts.

---

## 🏗️ Project Features

### Frontend (ReactJS with MUI Components)
1. **Contact Form**:
   - A user-friendly form built with Material UI (MUI) to add or edit contact details.
   - Fields include:
     - First Name
     - Last Name
     - Email
     - Phone Number
     - Company
     - Job Title

2. **Contacts Table**:
   - Displays all contacts in an interactive table using the MUI Table component.
   - Features include:
     - Pagination for large data sets.
     - Sorting for easy data navigation.
     - Action buttons for **edit** and **delete** operations.

### Backend (NodeJS with Express)
1. **API Endpoints**:
   - `POST /contacts/create-contact`: Add a new contact.
   - `GET /contacts/get-contact`: Retrieve all contacts Based on filter like firstName, lastName, company etc.
   - `PUT /contacts/edit-contact/:id`: Update an existing contact.
   - `DELETE /contacts/delete-contact/:id`: Delete a contact.

2. **Error Handling**:
   - Validation for required fields (e.g., no blank names or invalid emails).
   - Handles duplicate entries and returns meaningful error messages.

### Database (PostgreSQL)
1. **Why PostgreSQL?**
   - PostgreSQL is a powerful, open-source relational database known for its reliability and flexibility.
   - Ideal for structured data and supports complex queries, making it suitable for managing contact records.


## 🚀 Backend Setup Instructions

### Prerequisites
- **Node.js** (v14+)
- **PostgreSQL** (v12+)

### Steps to Set Up the Backend
1. **Clone the repository**:
   ```bash
   git clone https://github.com/HARSH048/Erino.git

2. **add env file in root**
    PORT = PRT
    DB_HOST=DB_HOST
    DB_PORT=DB_PORT
    DB_USER=postgres
    DB_PASS=DB_PASS
    DB_NAME=DB_NAME

    add db configuration in env

   npm install
   npm run dev (setup db and start the project)


# ⭐ Future Enhancements: Contact Management Project

This document outlines potential enhancements for the **Contact Management** feature to improve its usability, scalability, and performance. These enhancements cover  **backend**, and **database** improvements, as well as integration and user experience optimizations.

---

### Backend Enhancements
1. **Soft Deletes**:
   - Implement a `deleted_at` column in the database to enable recovery of deleted contacts.
   - Modify the `DELETE` endpoint to mark contacts as "deleted" instead of permanently removing them.

3. **Rate Limiting**:
   - Introduce rate limiting for API endpoints to prevent abuse and enhance security.

4. **Authentication and Authorization**:
   - Add user authentication (e.g., JWT-based login).
   - Implement role-based access control (RBAC):
     - Admin users can manage all contacts.
     - Regular users can only manage their own contacts.

5. **Batch Operations**:
   - Add an endpoint like `DELETE /contacts/bulk-delete` to handle batch deletions or updates.

6. **Logging and Monitoring**:
   - Integrate a logging library like `winston` or `pino` for detailed backend logs.
   - Set up monitoring and alerting for API performance and errors using tools like New Relic or Sentry.

7. **Integration with External APIs**:
   - Allow synchronization with external services like Google Contacts or third-party CRMs.

---

### Database Enhancements
1. **Indexing**:
   - Create database indexes on frequently searched columns like `first_name`, `last_name`, and `email` to improve query performance.

---

### Integration and Deployment Enhancements
1. **Deployment**:
   - Containerize the application using Docker for consistent deployment across environments.
   - Deploy the project to platforms like AWS, Heroku, or Azure with a CI/CD pipeline.

2. **Scalability**:
   - Set up a load balancer to distribute traffic across multiple backend instances.
   - Use caching mechanisms (e.g., Redis) for frequently accessed data like contact lists.

3. **API Documentation**:
   - Use tools like Swagger or Postman to create and publish detailed API documentation.

4. **Internationalization (i18n)**:
   - Add support for multiple languages in the frontend for global usability.

5. **Versioning**:
   - Implement API versioning to ensure backward compatibility when introducing new features.









