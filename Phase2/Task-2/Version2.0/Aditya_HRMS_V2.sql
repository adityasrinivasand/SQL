-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-10-31 05:41:51.027

-- tables
-- Table: Attendance
CREATE TABLE Attendance (
    ID int  NOT NULL,
    Date date  NOT NULL,
    CheckIn time  NOT NULL,
    CheckOut time  NOT NULL,
    Status nvarchar(max)  NOT NULL,
    Employee_ID int  NOT NULL,
    CONSTRAINT Attendance_pk PRIMARY KEY  (ID)
);

-- Table: Designation
CREATE TABLE Designation (
    ID int  NOT NULL,
    Type nvarchar(max)  NOT NULL,
    CONSTRAINT Designation_pk PRIMARY KEY  (ID)
);

-- Table: Designation_History
CREATE TABLE Designation_History (
    ID int  NOT NULL,
    Designation_ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Date date  NOT NULL,
    CONSTRAINT Designation_History_pk PRIMARY KEY  (ID)
);

-- Table: Employee
CREATE TABLE Employee (
    ID int  NOT NULL,
    FirstName nvarchar(max)  NOT NULL,
    LastName nvarchar(max)  NOT NULL,
    DOJ date  NOT NULL,
    PhoneNumber bigint  NOT NULL,
    Email_ID nvarchar(max)  NOT NULL,
    BloodType nvarchar(max)  NOT NULL,
    MaritalStatus nvarchar(max)  NOT NULL,
    DOB date  NOT NULL,
    Nationality nvarchar(max)  NOT NULL,
    Gender char  NOT NULL,
    Department nvarchar(max)  NOT NULL,
    CONSTRAINT Employee_pk PRIMARY KEY  (ID)
);

-- Table: Leave
CREATE TABLE Leave (
    ID int  NOT NULL,
    Submit_Date date  NOT NULL,
    Response_Date date  NOT NULL,
    Leave_StartDate date  NOT NULL,
    Leave_EndDate date  NOT NULL,
    Reason nvarchar(max)  NOT NULL,
    Status nvarchar(max)  NOT NULL,
    Leave_Type_ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    CONSTRAINT Leave_pk PRIMARY KEY  (ID)
);

-- Table: Leave_Tracking
CREATE TABLE Leave_Tracking (
    ID int  NOT NULL,
    Employee_ID int  NOT NULL,
    Leave_Type_ID int  NOT NULL,
    RemainingDays int  NOT NULL,
    CONSTRAINT Leave_Tracking_pk PRIMARY KEY  (ID)
);

-- Table: Leave_Type
CREATE TABLE Leave_Type (
    ID int  NOT NULL,
    LeaveType nvarchar(max)  NOT NULL,
    MaxLeave int  NOT NULL,
    CONSTRAINT Leave_Type_pk PRIMARY KEY  (ID)
);

-- Table: UserInfo
CREATE TABLE UserInfo (
    Employee_ID int  NOT NULL,
    UserName nvarchar(max)  NOT NULL,
    Password nvarchar(max)  NOT NULL,
    ResetCode nvarchar(max)  NULL,
    Token nvarchar(max)  NULL,
    isAdmin bit  NULL,
    Captcha nvarchar(max)  NULL,
    CONSTRAINT UserInfo_pk PRIMARY KEY  (Employee_ID)
);

-- foreign keys
-- Reference: Attendance_Employee (table: Attendance)
ALTER TABLE Attendance ADD CONSTRAINT Attendance_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Employee_Designation_Designation (table: Designation_History)
ALTER TABLE Designation_History ADD CONSTRAINT Employee_Designation_Designation
    FOREIGN KEY (Designation_ID)
    REFERENCES Designation (ID);

-- Reference: Employee_Designation_Employee (table: Designation_History)
ALTER TABLE Designation_History ADD CONSTRAINT Employee_Designation_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Leave_Employee (table: Leave)
ALTER TABLE Leave ADD CONSTRAINT Leave_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Leave_Leave_Type (table: Leave)
ALTER TABLE Leave ADD CONSTRAINT Leave_Leave_Type
    FOREIGN KEY (Leave_Type_ID)
    REFERENCES Leave_Type (ID);

-- Reference: Leave_Tracking_Employee (table: Leave_Tracking)
ALTER TABLE Leave_Tracking ADD CONSTRAINT Leave_Tracking_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- Reference: Leave_Tracking_Leave_Type (table: Leave_Tracking)
ALTER TABLE Leave_Tracking ADD CONSTRAINT Leave_Tracking_Leave_Type
    FOREIGN KEY (Leave_Type_ID)
    REFERENCES Leave_Type (ID);

-- Reference: UserInfo_Employee (table: UserInfo)
ALTER TABLE UserInfo ADD CONSTRAINT UserInfo_Employee
    FOREIGN KEY (Employee_ID)
    REFERENCES Employee (ID);

-- End of file.

