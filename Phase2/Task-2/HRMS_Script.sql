-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-09-30 11:53:51.719

-- tables
-- Table: Attendance
CREATE TABLE Attendance (
    ID int  NOT NULL,
    Date date  NOT NULL,
    InTime time  NOT NULL,
    OutTime time  NOT NULL,
    Status nvarchar(max)  NOT NULL,
    WorkHours time  NOT NULL,
    CONSTRAINT Attendance_pk PRIMARY KEY  (ID)
);

-- Table: Department
CREATE TABLE Department (
    ID int  NOT NULL,
    Name nvarchar(max)  NOT NULL,
    CONSTRAINT Department_pk PRIMARY KEY  (ID)
);

-- Table: Designation
CREATE TABLE Designation (
    ID int  NOT NULL,
    Type nvarchar(max)  NOT NULL,
    CONSTRAINT Designation_pk PRIMARY KEY  (ID)
);

-- Table: Employee
CREATE TABLE Employee (
    ID int  NOT NULL,
    FirstName nvarchar(max)  NOT NULL,
    LastName nvarchar(max)  NOT NULL,
    DOJ date  NOT NULL,
    PhoneNumber bigint   NULL,
    Email_ID varchar(max)  NOT NULL,
    BloodType varchar(max)   NULL,
    MaritalStatus varchar(max)   NULL,
    DOB date  NOT NULL,
    Nationality nvarchar(max)   NULL,
    Gender nvarchar(max)  NOT NULL,
	UserName nvarchar(max)  NULL,
	Password nvarchar(max)  NULL,
	Token nvarchar(max)  NOT NULL,
	ResetPasswordCode nvarchar(max)  NOT NULL,
    CONSTRAINT Employee_pk PRIMARY KEY  (ID)
);

-- Table: Employee_Attendance
CREATE TABLE Employee_Attendance (
    ID int  NOT NULL,
    Attendance_ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    CONSTRAINT Employee_Attendance_pk PRIMARY KEY  (ID)
);

-- Table: Employee_Department
CREATE TABLE Employee_Department (
    ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Department_ID int  NOT NULL,
    CONSTRAINT Employee_Department_pk PRIMARY KEY  (ID)
);

-- Table: Employee_Designation
CREATE TABLE Employee_Designation (
    ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Designation_ID int  NOT NULL,
    CONSTRAINT Employee_Designation_pk PRIMARY KEY  (ID)
);

-- Table: Employee_Feed
CREATE TABLE Employee_Feed (
    ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Feed_ID int  NOT NULL,
    CONSTRAINT Employee_Feed_pk PRIMARY KEY  (ID)
);

-- Table: Employee_Leave
CREATE TABLE Employee_Leave (
    ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Leave_ID int  NOT NULL,
    CONSTRAINT Employee_Leave_pk PRIMARY KEY  (ID)
);


-- Table: Employee_Salary
CREATE TABLE Employee_Salary (
    ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Salary_ID int  NOT NULL,
    CONSTRAINT Employee_Salary_pk PRIMARY KEY  (ID)
);

-- Table: Feed
CREATE TABLE Feed (
    ID int  NOT NULL,
    Post_Date datetime  NOT NULL,
    Feed_Type_ID int  NOT NULL,
    MessageContent nvarchar(max)  NOT NULL,
    CONSTRAINT Feed_pk PRIMARY KEY  (ID)
);

-- Table: Feed_Type
CREATE TABLE Feed_Type (
    ID int  NOT NULL,
    Feed_Type int  NOT NULL,
    CONSTRAINT Feed_Type_pk PRIMARY KEY  (ID)
);

-- Table: Leave
CREATE TABLE Leave (
    ID int  NOT NULL,
    Submit_Date date  NOT NULL,
    Response_Date date  NOT NULL,
    Leave_Type nvarchar(max)  NOT NULL,
    Leave_StartDate date  NOT NULL,
    Leave_EndDate date  NOT NULL,
    Reason nvarchar(max)  NOT NULL,
    Status nvarchar(max)  NOT NULL,
    CONSTRAINT Leave_pk PRIMARY KEY  (ID)
);

-- Table: Salary
CREATE TABLE Salary (
    ID int  NOT NULL,
    Amount int  NOT NULL,
    Date date  NOT NULL,
    CONSTRAINT Salary_pk PRIMARY KEY  (ID)
);

-- foreign keys
-- Reference: Employee_Attendance_Attendance (table: Employee_Attendance)
ALTER TABLE Employee_Attendance ADD CONSTRAINT Employee_Attendance_Attendance
    FOREIGN KEY (Attendance_ID)
    REFERENCES Attendance (ID);

-- Reference: Employee_Attendance_Employee (table: Employee_Attendance)
ALTER TABLE Employee_Attendance ADD CONSTRAINT Employee_Attendance_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Department_Department (table: Employee_Department)
ALTER TABLE Employee_Department ADD CONSTRAINT Employee_Department_Department
    FOREIGN KEY (Department_ID)
    REFERENCES Department (ID);

-- Reference: Employee_Department_Employee (table: Employee_Department)
ALTER TABLE Employee_Department ADD CONSTRAINT Employee_Department_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Designation_Designation (table: Employee_Designation)
ALTER TABLE Employee_Designation ADD CONSTRAINT Employee_Designation_Designation
    FOREIGN KEY (Designation_ID)
    REFERENCES Designation (ID);

-- Reference: Employee_Designation_Employee (table: Employee_Designation)
ALTER TABLE Employee_Designation ADD CONSTRAINT Employee_Designation_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Feed_Employee (table: Employee_Feed)
ALTER TABLE Employee_Feed ADD CONSTRAINT Employee_Feed_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Feed_Feed (table: Employee_Feed)
ALTER TABLE Employee_Feed ADD CONSTRAINT Employee_Feed_Feed
    FOREIGN KEY (Feed_ID)
    REFERENCES Feed (ID);

-- Reference: Employee_Leave_Employee (table: Employee_Leave)
ALTER TABLE Employee_Leave ADD CONSTRAINT Employee_Leave_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Leave_Leave (table: Employee_Leave)
ALTER TABLE Employee_Leave ADD CONSTRAINT Employee_Leave_Leave
    FOREIGN KEY (Leave_ID)
    REFERENCES Leave (ID);

-- Reference: Employee_Salary_Employee (table: Employee_Salary)
ALTER TABLE Employee_Salary ADD CONSTRAINT Employee_Salary_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Salary_Salary (table: Employee_Salary)
ALTER TABLE Employee_Salary ADD CONSTRAINT Employee_Salary_Salary
    FOREIGN KEY (Salary_ID)
    REFERENCES Salary (ID);

-- Reference: Feed_Feed_Type (table: Feed)
ALTER TABLE Feed ADD CONSTRAINT Feed_Feed_Type
    FOREIGN KEY (Feed_Type_ID)
    REFERENCES Feed_Type (ID);

-- End of file.

