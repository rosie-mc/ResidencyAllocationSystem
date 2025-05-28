# ResidencyAllocationSystem
This project is a Spring Boot application that automates the allocation of students to residency positions using a modified Gale–Shapley algorithm. It supports multi-round matching, post-interview rankings, company scoring, and admin-initiated match runs.

-------------------------------------------------------------------------

## 🔧 Tech Stack

- Java 17
- Spring Boot 3.x
- Spring Data JPA
- PostgreSQL 15.x
- pgAdmin (optional GUI)
- (Optional) Lombok for cleaner entity code

-------------------------------------------------------------------------
## ⚙️ Setup Instructions

### 1. Install PostgreSQL

- Download PostgreSQL 15.x from https://www.postgresql.org/download/
- During setup, remember your username and password (e.g., user: postgres)
- Create a new database using pgAdmin or terminal:

CREATE DATABASE residency_db;

---

### 2. Clone This Repository

git clone https://github.com/your-username/residency-matching.git
cd residency-matching

---

### 3. Configure Spring Boot

In src/main/resources/application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/residency_db
spring.datasource.username=postgres
spring.datasource.password=yourPassword
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

---

### 4. Run the App

Open the project in IntelliJ or your favorite IDE and run ResidencyMatchingApplication.java
Or use CLI:

./mvnw spring-boot:run

---

### 5. Trigger the Matching Algorithm

Use Postman or your browser:

POST http://localhost:8080/match/run?round=1


-------------------------------------------------------------------------------------------------------------

## ▶️ How the System Works

- Students submit rankings (pre + post interview)
- Companies assign interview scores and can reorder or reject applicants
- Admins run the match manually via API
- Results are saved in the matches table

---

## 📁 Project Structure

src/
├── controller/
├── service/
├── model/
├── repository/
└── resources/
    └── application.properties

---

## 📄 Key Endpoints

POST /match/run?round=1
POST /scores/submit
GET /preferences/student/{id}
POST /preferences/submit

-----------------------------------------------------------------------

## 🧪 Testing Tips

- Insert test data with pgAdmin or .sql files
- Use application.properties to enable SQL logs
- Verify matches via DB or debug logs

-----------------------------------------------------------------------

## 📜 License

MIT — free to use and modify.

-----------------------------------------------------------------------
