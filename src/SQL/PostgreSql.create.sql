﻿




CREATE TABLE Гости (
 primaryKey UUID NOT NULL,
 Имя VARCHAR(255) NULL,
 КодГостя INT NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Комментарий VARCHAR(255) NULL,
 Доступ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Отель (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 КодОтеля INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 КодСотрудника INT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Доступ (
 primaryKey UUID NOT NULL,
 Доступ BOOLEAN NULL,
 КодДоступа INT NULL,
 Комната UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РегистрЗаписи (
 primaryKey UUID NOT NULL,
 КодРегитсра INT NULL,
 ДатаЗаселения TIMESTAMP(3) NULL,
 ДатаВыезда TIMESTAMP(3) NULL,
 Доступ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Комната (
 primaryKey UUID NOT NULL,
 КодКомнаты INT NULL,
 Стоимость INT NULL,
 Класс VARCHAR(7) NULL,
 КолвоМест VARCHAR(14) NULL,
 Отель UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Гости ADD CONSTRAINT FKe6ff229cee5e4501692f9fbba8d20307db88b3c3 FOREIGN KEY (Доступ) REFERENCES Доступ; 
CREATE INDEX Indexe6ff229cee5e4501692f9fbba8d20307db88b3c3 on Гости (Доступ); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 on Сотрудники (Должность); 

 ALTER TABLE Доступ ADD CONSTRAINT FKd065c4e21f6f1a242baa28a96fd1c47ce5ca955a FOREIGN KEY (Комната) REFERENCES Комната; 
CREATE INDEX Indexd065c4e21f6f1a242baa28a96fd1c47ce5ca955a on Доступ (Комната); 

 ALTER TABLE Доступ ADD CONSTRAINT FK58c82a122d829c8431dba2a47a344f482bcf7da6 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index58c82a122d829c8431dba2a47a344f482bcf7da6 on Доступ (Сотрудники); 

 ALTER TABLE РегистрЗаписи ADD CONSTRAINT FKbb13819df954e5de691053bcb1f67146b9cebd81 FOREIGN KEY (Доступ) REFERENCES Доступ; 
CREATE INDEX Indexbb13819df954e5de691053bcb1f67146b9cebd81 on РегистрЗаписи (Доступ); 

 ALTER TABLE Комната ADD CONSTRAINT FK406f6226a96b0d7059ce94f537118bb83452c039 FOREIGN KEY (Отель) REFERENCES Отель; 
CREATE INDEX Index406f6226a96b0d7059ce94f537118bb83452c039 on Комната (Отель); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

