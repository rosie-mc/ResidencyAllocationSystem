ResidencyAllocationSystem
This project is a Spring Boot application that automates the allocation of students to residency positions using a modified Gale–Shapley algorithm. It supports multi-round matching, student preferences, interview scoring, and admin-controlled match runs.

🔧 Tech Stack
Java 17

Spring Boot 3.2.x


Spring Data JPA


PostgreSQL 15.x

pgAdmin 4 (optional GUI)


Lombok (for clean entity boilerplate)


Postman (for API testing)

⚙️ Setup Instructions
1️⃣ Install PostgreSQL
Download PostgreSQL 15.x from: https://www.postgresql.org/download/

During setup, remember your username and password (e.g., user: postgres, password: yourPassword).

Create the database (either in pgAdmin or terminal):

sql
Copy
Edit
CREATE DATABASE epic2database;
2️⃣ Clone This Repository
bash
Copy
Edit
git clone https://github.com/your-username/residency-matching-final.git
cd residency-matching-final
3️⃣ Configure Spring Boot Database Connection
In src/main/resources/application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:postgresql://localhost:5432/epic2database
spring.datasource.username=postgres
spring.datasource.password=yourPassword
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
✅ Make sure your database tables are created by running the SQL schema provided below.

📊 SQL Schema
The latest version of the database structure is:

sql
Copy
Edit
DROP TABLE IF EXISTS matches, cvs, interviews, preferences, residencies, logs, users CASCADE;
DROP TYPE IF EXISTS user_role, college_year_enum CASCADE;

-- ENUMS
CREATE TYPE user_role AS ENUM ('student', 'admin', 'company');
CREATE TYPE college_year_enum AS ENUM ('YEAR_1', 'YEAR_2', 'YEAR_3', 'YEAR_4', 'YEAR_5');

-- USERS
CREATE TABLE users (
id SERIAL PRIMARY KEY,
role user_role NOT NULL,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL,
course_code VARCHAR(15),
college_year college_year_enum
);

-- LOGS
CREATE TABLE logs (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id) ON DELETE SET NULL,
action VARCHAR(255),
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- RESIDENCIES
CREATE TABLE residencies (
id SERIAL PRIMARY KEY,
job_title VARCHAR(50),
job_description TEXT,
job_slots INT,
interview_quota INT,
recruitment_description TEXT,
company_id INT REFERENCES users(id) ON DELETE SET NULL
);

-- PREFERENCES
CREATE TABLE preferences (
id SERIAL PRIMARY KEY,
student_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
residency_id INT NOT NULL REFERENCES residencies(id) ON DELETE CASCADE,
rank_position INT NOT NULL,
round INT,
ranking_stage INT
);

-- INTERVIEWS
CREATE TABLE interviews (
id SERIAL PRIMARY KEY,
student_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
residency_id INT NOT NULL REFERENCES residencies(id) ON DELETE CASCADE,
score INT CHECK (score BETWEEN 0 AND 10)
);

-- CVS
CREATE TABLE cvs (
id SERIAL PRIMARY KEY,
student_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
residency_id INT NOT NULL REFERENCES residencies(id) ON DELETE CASCADE,
file_url VARCHAR(500),
uploaded_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MATCHES
CREATE TABLE matches (
id SERIAL PRIMARY KEY,
student_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
residency_id INT NOT NULL REFERENCES residencies(id) ON DELETE CASCADE,
round INT,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
▶️ Running the App
Open the project in IntelliJ or your favorite IDE and run:

bash
Copy
Edit
ResidencyMatchingApplication.java
Or from terminal:

bash
Copy
Edit
./mvnw spring-boot:run
📡 Trigger the Matching Algorithm
Use Postman:

http
Copy
Edit
GET http://localhost:8080/api/admin/run-matching
📁 Project Structure
bash
Copy
Edit
src/
├── controller/
├── service/
├── model/
├── repository/
└── resources/
└── application.properties
🧪 Testing Tips
Insert test data into PostgreSQL using pgAdmin's query tool.

Monitor backend logs for matching output (Spring console).

Use Postman to trigger match runs and test endpoints.

📜 License
MIT — free to use and modify.

🟢 Status
✅ Backend matching algorithm fully functional
✅ Database schema stable and tested
🔜 Next steps: populate real data, connect frontend, build full API layer

✅ ✅ ✅
