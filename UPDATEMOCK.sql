CREATE TABLE Roles (
    Roles_Id INT IDENTITY(1,1),
    Roles_Name VARCHAR(150) UNIQUE,
    Descriptions VARCHAR(150),
	CONSTRAINT PK_Roles PRIMARY KEY (Roles_Id)	
)

CREATE TABLE Users (
    Users_Id INT IDENTITY(1,1),
    Users_Name VARCHAR(150) UNIQUE,
    Users_Email VARCHAR(150),
	Users_Password VARCHAR(150),
	Users_Address VARCHAR(150),
	Registration_Date Date,
	Users_Status VARCHAR(15),
	Roles_Id INT,
	CONSTRAINT PK_Users PRIMARY KEY (Users_Id),
	FOREIGN KEY (Roles_Id) REFERENCES Roles (Roles_Id)
)

create table Customer 
(
	Customer_Id Int identity(1,1),
	Customer_Name varchar(150),
    Customer_Number varchar(15) unique,
	Customer_Email varchar(15) unique,
	Customer_Password varchar(150),
	Registration_Date Date,
	Customer_Status VARCHAR(15),
	Customer_Address VARCHAR(150),
	Constraint PK_Customer Primary Key (Customer_Id)
)


CREATE TABLE ProType(		
	ProType_Id INT IDENTITY(1,1),
	ProType_Name VARCHAR(150) UNIQUE,
	ProType_Status VARCHAR(15),
	CONSTRAINT PK_Brand PRIMARY KEY (ProType_Id)
);

CREATE TABLE Properties(
	Properties_Id INT IDENTITY(1, 1),
	Properties_Name VARCHAR(150) UNIQUE,
	Customer_Id int unique,

	Properties_ZipCode INT,
	Properties_ImageURL varchar(150),
	Properties_Price INT,

	Properties_Address varchar(150),
	Properties_City varchar(150),
	Properties_State varchar(150),

	LandArea int,
	UsableArea int,
	NumberBedrooms int,
	NumberBathroom int,
	NumberCarspaces int,
	NumberLivingRoom int,
	LegalStatus varchar(15),
	ListingDate date,

	Properties_Descriptions varchar (150),
	ProType_Id INT,
	Properties_Deleted varchar(15),
	CONSTRAINT PK_Properties PRIMARY KEY (Properties_Id),
	FOREIGN KEY (ProType_Id) REFERENCES ProType (ProType_Id),
	FOREIGN KEY (Customer_Id) REFERENCES Customer (Customer_Id),
);


CREATE TABLE TranType(		
	TranType_Id INT IDENTITY(1,1),
	TranType_Name VARCHAR(150) UNIQUE,
	TranType_Status VARCHAR(15),
	CONSTRAINT PK_TranType PRIMARY KEY (TranType_Id)
);

CREATE TABLE PaymentMethod(		
	PaymentMethod_Id INT IDENTITY(1,1),
	PaymentMethod_Name VARCHAR(150) UNIQUE,
	PaymentMethod_Status VARCHAR(15),
	CONSTRAINT PK_PaymentMethod PRIMARY KEY (PaymentMethod_Id)
);

CREATE TABLE Transactions_Buy(
	Transactions_Buy_Id INT IDENTITY(1, 1),
	Transactions_Buy_Name VARCHAR(150) UNIQUE,
	Users_Id int,
	Customer_Id int unique,

	Transactions_Buy_Date Date,
	Transactions_Buy_Amount int,
	Transactions_Buy_Status varchar(15),

	CommissionPercentage int,
	CommissionAmount_Customer int,
	CommissionDate date,

	TranType_Id int,
	PaymentMethod_Id int,

	CONSTRAINT PK_Transactions_Buy PRIMARY KEY (Transactions_Buy_Id),
	FOREIGN KEY (TranType_Id) REFERENCES TranType (TranType_Id),
	FOREIGN KEY (PaymentMethod_Id) REFERENCES PaymentMethod (PaymentMethod_Id),
	FOREIGN KEY (Users_Id) REFERENCES Users (Users_Id),
	FOREIGN KEY (Customer_Id) REFERENCES Customer (Customer_Id),
);

CREATE TABLE Transactions_Sell(
	Transactions_Sell_Id INT IDENTITY(1, 1),
	Transactions_Sell_Id_Name VARCHAR(150) UNIQUE,

	Users_Id int,
	Properties_Id int,
	Seller_Id int unique,

	Transactions_Sell_Date Date,
	Transactions_Sell_Amount int,
	Transactions_Sell_Status varchar(15),

	CommissionPercentage int,
	CommissionAmount_Customer int,
	CommissionDate date,

	TranType_Id int,
	PaymentMethod_Id int,

	CONSTRAINT PK_Transactions_Sell PRIMARY KEY (Transactions_Sell_Id),
	FOREIGN KEY (TranType_Id) REFERENCES TranType (TranType_Id),
	FOREIGN KEY (PaymentMethod_Id) REFERENCES PaymentMethod (PaymentMethod_Id),
	FOREIGN KEY (Users_Id) REFERENCES Users (Users_Id),
	FOREIGN KEY (Seller_Id) REFERENCES Properties (Customer_Id),
);

CREATE TABLE Transactions(
	Transactions_Id INT IDENTITY(1, 1),
	Transactions_Name VARCHAR(150) UNIQUE,

	Transactions_Sell_Id INT,
	Transactions_Buy_Id INT,

	Users_Id int,
	Seller_Id int,
	Buyer_Id int,

	Transactions_Date Date,
	Transactions_Amount int,
	Transactions_Status varchar(15),

	TranType_Id int,
	PaymentMethod_Id int,

	CONSTRAINT PK_Transactions PRIMARY KEY (Transactions_Id),
	FOREIGN KEY (TranType_Id) REFERENCES TranType (TranType_Id),
	FOREIGN KEY (PaymentMethod_Id) REFERENCES PaymentMethod (PaymentMethod_Id),
	FOREIGN KEY (Users_Id) REFERENCES Users (Users_Id),
	FOREIGN KEY (Seller_Id) REFERENCES Transactions_Sell (Seller_Id),
	FOREIGN KEY (Buyer_Id) REFERENCES Transactions_Buy (Customer_Id),
);






--create Table TransactionsDetails
--(	
--	TransactionsDetails_Id INT identity(1,1),

--	Transactions_Id int,
--	Properties_Id int,
	
--	CommissionPercentage int,
--	CommissionAmount_Customer int,

--	CommissionDate date,

--	PaymentStatus varchar(15),
--	Constraint PK_TransactionsDetails Primary Key (TransactionsDetails_Id),
--	FOREIGN KEY (Properties_Id) REFERENCES Properties (Properties_Id),
--	FOREIGN KEY (Transactions_Id) REFERENCES Transactions (Transactions_Id),
--);

--DROP TABLE Roles, Users, Customer, ProType, Properties, TranType, PaymentMethod, Transactions, TransactionsDetails;
