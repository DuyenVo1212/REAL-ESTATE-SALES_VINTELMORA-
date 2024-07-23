--1. CREATE DATABASE
CREATE DATABASE QLTH
GO

USE QLTH
GO

-- CREATE TABLES
CREATE TABLE MONHOC (
    MaMH CHAR(10) PRIMARY KEY NOT NULL,
    TenMH NVARCHAR(100)
);

CREATE TABLE LOP (
    MaLop CHAR(10) PRIMARY KEY NOT NULL,
    TenLop NVARCHAR(100),
    MaGVCN CHAR(10) NOT NULL,
    Namhoc DATE
);

CREATE TABLE HOCSINH (
    MaHS CHAR(10) PRIMARY KEY NOT NULL,
    HoTenHS NVARCHAR(100),
    HoTenPH NVARCHAR(100),
    GioiTinh NVARCHAR(3),
    DiaChi NVARCHAR(255),
    MaLop CHAR(10) NOT NULL,
    FOREIGN KEY (MaLop) REFERENCES LOP(MaLop)
);

CREATE TABLE KQHT (
    MaHS CHAR(10),
    HocKy CHAR(3),
    MaMH CHAR(10),
    DiemThiGiuaKy FLOAT,
    DiemThiCuoiKy FLOAT,
    NgayGioThiCuoiKy DATETIME,
    PRIMARY KEY (MaHS, MaMH, Hocky),
    FOREIGN KEY (MaHS) REFERENCES HOCSINH(MaHS),
    FOREIGN KEY (MaMH) REFERENCES MONHOC(MaMH)
);

CREATE TABLE GIAOVIEN (
    MaGV CHAR(10) PRIMARY KEY NOT NULL,
    HoTenGV NVARCHAR(100)
);

CREATE TABLE PTBM (
    MaGVPT CHAR(10),
    MaLop CHAR(10),
    MaMH CHAR(10),
    HocKy CHAR(10),
    PRIMARY KEY (MaGVPT, MaLop, MaMH, HocKy),
    FOREIGN KEY (MaGVPT) REFERENCES GIAOVIEN(MaGV),
    FOREIGN KEY (MaLop) REFERENCES LOP(MaLop),
    FOREIGN KEY (MaMH) REFERENCES MONHOC(MaMH)
);

-- 2.Insert data into Tables
INSERT INTO MONHOC (MaMH, TenMH) VALUES 
('MH001', 'Toan hoc'),
('MH002', 'Khoa hoc'),
('MH003', 'Van hoc'),
('MH004', 'Lich su'),
('MH005', 'Dia ly'),
('MH006', 'Vat ly'),
('MH007', 'Hoa hoc'),
('MH008', 'Sinh hoc'),
('MH009', 'Khoa hoc may tinh'),
('MH010', 'My thuat');

INSERT INTO GIAOVIEN (MaGV, HoTenGV) VALUES 
('GV001', 'Nguyen Van A'),
('GV002', 'Tran Thi B'),
('GV003', 'Le Van C'),
('GV004', 'Pham Thi D'),
('GV005', 'Hoang Van E'),
('GV006', 'Tran Van F'),
('GV007', 'Nguyen Thi G'),
('GV008', 'Le Van H'),
('GV009', 'Pham Van I'),
('GV010', 'Hoang Thi K');

INSERT INTO LOP (MaLop, TenLop, MaGVCN, Namhoc) VALUES 
('L001', '12A1', 'GV001', '2023-08-01'),
('L002', '12A2', 'GV002', '2023-08-01'),
('L003', '12A3', 'GV003', '2023-08-01'),
('L004', '12A4', 'GV004', '2023-08-01'),
('L005', '12A5', 'GV005', '2023-08-01'),
('L006', '12A6', 'GV006', '2023-08-01'),
('L007', '12A7', 'GV007', '2023-08-01'),
('L008', '12A8', 'GV008', '2023-08-01'),
('L009', '12A9', 'GV009', '2023-08-01'),
('L010', '12A10', 'GV010', '2023-08-01');

INSERT INTO HOCSINH (MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop) VALUES 
('HS001', 'Nguyen Van An', 'Nguyen Thi Hoa', 'Nam', '123 Duong ABC, TPHCM', 'L001'),
('HS002', 'Tran Thi Bao', 'Tran Van C', 'Nu', '456 Duong XYZ, TPHCM', 'L002'),
('HS003', 'Le Van Cuong', 'Le Thi Mai', 'Nam', '789 Duong DEF, TPHCM', 'L003'),
('HS004', 'Pham Thi Dung', 'Pham Van E', 'Nu', '012 Duong GHI, TPHCM', 'L004'),
('HS005', 'Hoang Van Hieu', 'Hoang Thi Lan', 'Nam', '345 Duong JKL, TPHCM', 'L005'),
('HS006', 'Tran Van Khanh', 'Tran Thi Linh', 'Nam', '678 Duong MNO, TPHCM', 'L006'),
('HS007', 'Nguyen Thi My', 'Nguyen Van Nhat', 'Nu', '901 Duong PQR, TPHCM', 'L007'),
('HS008', 'Le Van Quan', 'Le Thi Quyen', 'Nam', '234 Duong STU, HN', 'L008'),
('HS009', 'Pham Thi Hanh', 'Pham Van Hoa', 'Nu', '567 Duong VWX, HN', 'L009'),
('HS010', 'Hoang Van Nam', 'Hoang Thi Ngoc', 'Nam', '890 Duong YZ, HN', 'L010');


INSERT INTO KQHT (MaHS, HocKy, MaMH, DiemThiGiuaKy, DiemThiCuoiKy, NgayGioThiCuoiKy) VALUES 
('HS001', 'HK1', 'MH001', 7.5, 8.0, '2024-01-15T08:00:00'),
('HS002', 'HK1', 'MH001', 8.0, 8.5, '2024-01-15T10:00:00'),
('HS003', 'HK2', 'MH001', 6.5, 7.0, '2024-01-16T08:00:00'),
('HS004', 'HK1', 'MH001', 9.0, 9.5, '2024-01-16T10:00:00'),
('HS005', 'HK1', 'MH001', 8.5, 9.0, '2024-01-17T08:00:00'),
('HS006', 'HK2', 'MH001', 7.0, 7.5, '2024-01-17T10:00:00'),
('HS007', 'HK2', 'MH001', 6.0, 6.5, '2024-01-18T08:00:00'),
('HS008', 'HK2', 'MH001', 8.0, 8.5, '2024-01-18T10:00:00'),
('HS009', 'HK2', 'MH001', 7.5, 8.0, '2024-01-19T08:00:00'),
('HS010', 'HK1', 'MH001', 9.0, 9.5, '2024-01-19T10:00:00');


INSERT INTO PTBM (MaGVPT, MaLop, MaMH, HocKy) VALUES 
('GV001', 'L001', 'MH001', 'HK1'),
('GV002', 'L002', 'MH002', 'HK1'),
('GV003', 'L003', 'MH003', 'HK2'),
('GV004', 'L004', 'MH004', 'HK1'),
('GV005', 'L005', 'MH005', 'HK1'),
('GV006', 'L006', 'MH006', 'HK2'),
('GV007', 'L007', 'MH007', 'HK2'),
('GV008', 'L008', 'MH008', 'HK2'),
('GV009', 'L009', 'MH009', 'HK2'),
('GV010', 'L010', 'MH010', 'HK1');

--- Alter column data
ALTER TABLE HOCSINH
ALTER COLUMN GioiTinh NVARCHAR(6)

-- 3. UPDATE:
-- Update the address of the student with ID 'HS001'
SELECT *FROM HOCSINH UPDATE HOCSINH
SET DiaChi = 'Go Vap,TPHCM'WHERE MaHS = 'HS001';

-- 4. DELETE
DELETE FROM HOCSINH WHERE MaHS ='HS002';

-- 5. SELECT WITHOUT "WHERE"
-- a. Retrieve all information of all teachers in the school.
SELECT * FROM GIAOVIEN;

-- b. Retrieve the full name of students, their genders, and the full name of their parents/guardians.
SELECT HoTenHS, GioiTinh, HoTenPH FROM HOCSINH;

-- c. Retrieve all information of all classes in the school.
SELECT * FROM LOP;

-- 6. SELECT WITH "WHERE"
-- a. Students who are male
SELECT MaHS, HoTenHS FROM HOCSINH WHERE GioiTinh = 'Nam';

-- b. Students who do not have a parent's name
SELECT MaHS, HoTenHS, HoTenPH FROM HOCSINH WHERE HoTenPH IS NULL;

-- c. Classes that do not have a homeroom teacher
SELECT MaLop, TenLop, MaGVCN FROM LOP WHERE MaGVCN IS NULL;

-- d. Students who have not been assigned to a class
SELECT MaHS, HoTenHS, MaLop FROM HOCSINH WHERE MaLop IS NULL;

-- e. Female students with addresses in HN
SELECT MaHS, HoTenHS, GioiTinh, DiaChi FROM HOCSINH 
WHERE GioiTinh = 'Nu' AND DiaChi LIKE '%HN%';

-- f. Male students with addresses in TPHCM or female students with addresses in HN
SELECT MaHS, HoTenHS, GioiTinh, DiaChi FROM HOCSINH
WHERE (GioiTinh = 'Nam' AND DiaChi LIKE '%TPHCM%')
OR (GioiTinh = 'Nu' AND DiaChi LIKE '%HN%');

-- g. Students who are male and do not have a parent's name, and female students who have not been assigned to any class:
-- Alter data
ALTER TABLE HOCSINH
ALTER COLUMN MALOP CHAR(10) NULL;
-- Insert sample data into LOP table
INSERT INTO HOCSINH (MAHS, HOTENHS, HOTENPH, GIOITINH, DIACHI, MALOP) VALUES 
('HS016', 'Nguyen Lam', 'Nguyen A', 'Nu', '101 HN', NULL);
INSERT INTO HOCSINH (MAHS, HOTENHS, HOTENPH, GIOITINH, DIACHI, MALOP) VALUES 
('HS016', 'Nguyen Anh', NULL, 'Nam', '101 HN', NULL);

SELECT * FROM HOCSINH
WHERE (GIOITINH = 'Nam' AND HOTENPH IS NULL)
    OR (GIOITINH = 'Nu' AND MALOP IS NULL);

-- h. Male students who have not been assigned to any class and male students who do not have a parent's name:
SELECT * FROM HOCSINH
WHERE (GIOITINH = 'Nam' AND MALOP IS NULL)
    OR (GIOITINH = 'Nam' AND HOTENPH IS NULL);

-- i. The course codes of courses taught in the second semester:
SELECT DISTINCT MAMH, HocKy FROM PTBM
WHERE HOCKY = 'HK2';

-- 7. SELECT WITH "LIKE"
-- a. Students whose last name starts with 'Nguyen'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop FROM HOCSINH
WHERE HoTenHS LIKE 'Nguyen%';

-- b. Students whose last name ends with 'An'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop FROM HOCSINH
WHERE HoTenHS LIKE '%An';

-- c. Students whose last name contains the word 'Thị'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop FROM HOCSINH
WHERE HoTenHS LIKE '%Thi%';

-- d. Students whose last name contains the word 'Thị' in the middle (not at the beginning or end)
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop FROM HOCSINH
WHERE HoTenHS LIKE '%Thi%' AND HoTenHS NOT LIKE 'Thi%' AND HoTenHS NOT LIKE '%Thi';

-- e. Students whose last name has a length of 10 characters (including spaces)
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop FROM HOCSINH
WHERE LEN(HoTenHS) = 10;

-- f. Students whose last name has a maximum length of 30 characters
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop
FROM HOCSINH
WHERE LEN(HoTenHS) <= 30;

-- g. Students whose last name has a maximum length of 30 characters and starts with the letter 'N'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop
FROM HOCSINH
WHERE LEN(HoTenHS) <= 30 AND HoTenHS LIKE 'N%';

-- h. Students whose last name starts with the letters 'N', 'T', or 'V'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop
FROM HOCSINH
WHERE HoTenHS LIKE 'N%' OR HoTenHS LIKE 'T%' OR HoTenHS LIKE 'V%';

-- i. Students whose last name does not start with the letters 'N', 'T', or 'V'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop
FROM HOCSINH
WHERE HoTenHS NOT LIKE 'N%' AND HoTenHS NOT LIKE 'T%' AND HoTenHS NOT LIKE 'V%';

-- j. Students whose last name has exactly 4 characters
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop
FROM HOCSINH
WHERE LEN(LEFT(HoTenHS, CHARINDEX(' ', HoTenHS + ' ') - 1)) = 4;

-- k. Students whose last name does not start with 'Ng'
SELECT MaHS, HoTenHS, GioiTinh, DiaChi, MaLop
FROM HOCSINH
WHERE NOT (HoTenHS LIKE 'Ng%');


-- 8. SELECT WITH "DISTINCT"
-- a. List the names of all students in the school, displaying each name only once if it's repeated.
SELECT DISTINCT HoTenHS FROM HOCSINH;

-- b. The class codes of classes that already have students enrolled. Display each class code only once if it's repeated.
SELECT DISTINCT MaLop FROM HOCSINH;

-- c. The course codes of courses that have at least one teacher assigned as responsible.
SELECT DISTINCT MaMH, MaGVPT FROM PTBM;

-- d. The course codes of courses that have been organized for examination at least once.
SELECT DISTINCT MaMH FROM KQHT;

-- e. The teacher codes of teachers who have ever been homeroom teachers for at least one class.
SELECT DISTINCT MaGVCN FROM LOP

-- 9. SELECT WITH "ORDER BY"
-- a. Information of all students in the school. The result should be sorted in ascending order by student's last name.
SELECT MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop
FROM HocSinh ORDER BY HoTenHS ASC;

-- b. Information of all students in the school. The result should be sorted in descending order by address.
SELECT MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop
FROM HocSinh ORDER BY DiaChi DESC;

-- c. Information of all students in the school. The result should be sorted in ascending order by student's last name and descending order by address.
SELECT MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop
FROM HocSinh ORDER BY HoTenHS ASC, DiaChi DESC;

-- d. Information of all students in the school. The result should be sorted in ascending order by student's last name, and then in ascending order by address.
SELECT MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop
FROM HocSinh
ORDER BY HoTenHS ASC, DiaChi ASC;

-- e. Information of all students in the school. The result should be sorted in descending order by student's last name, and then in descending order by address.
SELECT MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop
FROM HocSinh ORDER BY HoTenHS DESC, DiaChi DESC;

-- f. Information of all students in the school. The result should be sorted in descending order by student's last name, then in descending order by address, and finally in ascending order by parent's last name.
SELECT MaHS, HoTenHS, HoTenPH, GioiTinh, DiaChi, MaLop
FROM HocSinh ORDER BY HoTenHS DESC, DiaChi DESC, HoTenPH ASC;
--Trong các trường hợp sắp xếp theo thứ tự tăng dần (ASC) giảm dần (DESC)
--Từ khóa ASC không bắt buộc phải ghi rõ trong câu lệnh SELECT (mặc định)

-- 10. SELECT WITH "INNER JOIN"
-- a. MaHS, HoTenHS, GioiTinh, MaLop, TenLop, MaGVCN of students in the school.
--C1:
SELECT HOCSINH.MaHS, HoTenHS, GioiTinh, LOP.MaLop, TenLop, MaGVCN
FROM HOCSINH
INNER JOIN LOP
ON HOCSINH.MaLop = LOP.MaLop;
--C2:
SELECT * FROM HOCSINH
INNER JOIN LOP
ON HOCSINH.MaLop=LOP.MaLop

-- b. MaHS, HoTenHS, HocKy, MaMH, DiemThiGiuaKy, DiemThiCuoiKy of students and their corresponding exam results for each subject in the school.
SELECT HOCSINH.MaHS, HoTenHS, HocKy, KQHT.MaMH, DiemThiGiuaKy, DiemThiCuoiKy
FROM HOCSINH
INNER JOIN KQHT
ON HOCSINH.MaHS = KQHT.MaHS;

-- c. MaGV, HoTenGV, MaLop, MaMH, HocKy of teachers who have been assigned to oversee at least one subject.
SELECT GIAOVIEN.MaGV, HoTenGV, PTBM.MaLop, PTBM.MaMH, HocKy
FROM GIAOVIEN
INNER JOIN PTBM
ON GIAOVIEN.MaGV = PTBM.MaGVPT;

--11 SELECT WITH "INNER JOIN" ADVANCE
-- a. MaHS, HoTenHS, GioiTinh, MaLop, TenLop, NamHoc, MaGVCN, HoTenGV (homeroom teacher) of students in the school.
SELECT HOCSINH.MaHS, HoTenHS, GioiTinh, LOP.MaLop, TenLop, NamHoc, MaGVCN, HoTenGV
FROM HOCSINH
INNER JOIN LOP ON HOCSINH.MaLop = LOP.MaLop
INNER JOIN GIAOVIEN ON LOP.MaGVCN = GIAOVIEN.MaGV;

-- b. MaHS, HoTenHS, HocKy, MaMH, TenMH, DiemThiGiuaKy, DiemThiCuoiKy of students and their corresponding exam results for each subject in the school.
SELECT HOCSINH.MaHS, HOCSINH.HoTenHS, KQHT.HocKy, KQHT.MaMH, MONHOC.TenMH, KQHT.DiemThiGiuaKy, KQHT.DiemThiCuoiKy
FROM HOCSINH
INNER JOIN KQHT ON KQHT.MaHS = KQHT.MaHS
INNER JOIN MONHOC ON KQHT.MaMH = MONHOC.MaMH;

-- c. MaHS, HoTenHS, HocKy, MaMH, TenMH, DiemThiGiuaKy, DiemThiCuoiKy, MaLop, MaGV (supervisor), HoTenGV (supervisor) of students and their corresponding exam results for each student in the school.
SELECT KQHT.MaHS, HOCSINH.HoTenHS, KQHT.HocKy, KQHT.MaMH, MONHOC.TenMH, KQHT.DiemThiGiuaKy, KQHT.DiemThiCuoiKy, HOCSINH.MaLop, GIAOVIEN.MaGV, GIAOVIEN.HoTenGV
FROM HOCSINH
INNER JOIN KQHT ON HOCSINH.MaHS = KQHT.MaHS
INNER JOIN MONHOC ON KQHT.MaMH = MONHOC.MaMH
INNER JOIN LOP ON HOCSINH.MaLop = LOP.MaLop
INNER JOIN GIAOVIEN ON LOP.MaGVCN = GIAOVIEN.MaGV;

-- d. MaHS, HoTenHS, MaLop, MaGVCN, HoTenGV (homeroom teacher), HocKy, MaMH, TenMH, DiemThiGiuaKy, DiemThiCuoiKy, MaGV (supervisor), HoTenGV (supervisor) of students and their corresponding exam results for each student in the school. 
SELECT HOCSINH.MaHS, HOCSINH.HoTenHS, HOCSINH.MaLop, LOP.MaGVCN, GIAOVIEN.HoTenGV 
AS HoTenGV_ChuNhiem, KQHT.HocKy, KQHT.MaMH, MONHOC.TenMH, KQHT.DiemThiGiuaKy, KQHT.DiemThiCuoiKy, 
PTBM.MaGVPT, GIAOVIEN.HoTenGV AS HoTenGV_Phutrach
FROM HOCSINH
INNER JOIN KQHT ON HOCSINH.MaHS = KQHT.MaHS
INNER JOIN MONHOC ON KQHT.MaMH = MONHOC.MaMH
INNER JOIN LOP ON HOCSINH.MaLop = LOP.MaLop
INNER JOIN GIAOVIEN ON LOP.MaGVCN = GIAOVIEN.MaGV
INNER JOIN PTBM ON HOCSINH.MaLop = PTBM.MaLop AND KQHT.MaMH = PTBM.MaMH AND KQHT.HocKy = PTBM.HocKy;

-- e. MaHS, HoTenHS, MaLop, MaGVCN, HoTenGV (homeroom teacher), HocKy, MaMH, TenMH, DiemThiGiuaKy, DiemThiCuoiKy, MaGV (supervisor), HoTenGV (supervisor) of female students with their corresponding exam results for subjects where the final or midterm exam score is 9 or above.
SELECT HOCSINH.MaHS, HOCSINH.HoTenHS, HOCSINH.MaLop, LOP.MaGVCN, GIAOVIEN.HoTenGV AS HoTenGV_ChuNhiem, KQHT.HocKy, KQHT.MaMH, MONHOC.TenMH, KQHT.DiemThiGiuaKy, KQHT.DiemThiCuoiKy, 
PTBM.MaGVPT, GIAOVIEN.HoTenGV AS HoTenGV_Phutrach
FROM HOCSINH
INNER JOIN KQHT ON HOCSINH.MaHS = KQHT.MaHS
INNER JOIN MONHOC ON KQHT.MaMH = MONHOC.MaMH
INNER JOIN LOP ON HOCSINH.MaLop = LOP.MaLop
INNER JOIN GIAOVIEN ON LOP.MaGVCN = GIAOVIEN.MaGV
INNER JOIN PTBM ON HOCSINH.MaLop = PTBM.MaLop AND KQHT.MaMH = PTBM.MaMH AND KQHT.HocKy = PTBM.HocKy
WHERE HOCSINH.GioiTinh = 'Nu' AND (KQHT.DiemThiGiuaKy >= 9 OR KQHT.DiemThiCuoiKy >= 9);

-- f. MaHS, HoTenHS, HocKy, MaMH, TenMH, DiemThiGiuaKy, DiemThiCuoiKy, MaLop, MaGV (supervisor), HoTenGV (supervisor) of students and their corresponding exam results for each student in the school. Conditions: Only display subjects for which the teacher in charge is also the homeroom teacher of the class.
SELECT HOCSINH.MaHS, HoTenHS, HocKy, KQHT.MaMH, TENMH, DiemThiGiuaKy, DiemThiCuoiKy, HOCSINH.MaLop, GIAOVIEN.MaGV, HoTenGV
FROM HOCSINH
INNER JOIN KQHT ON HOCSINH.MaHS = KQHT.MaHS
INNER JOIN MONHOC ON KQHT.MaMH = MONHOC.MaMH
INNER JOIN LOP ON HOCSINH.MaLop = LOP.MaLop
INNER JOIN GIAOVIEN ON LOP.MaGVCN = GIAOVIEN.MaGV
AND GIAOVIEN.MaGV = MONHOC.MaMH;

-- g. MaMH, MaLop, HocKy of subjects that were examined at the end of the school year in 2019.
SELECT DISTINCT KQHT.MaMH, LOP.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN LOP ON KQHT.MaHS = LOP.MaLop
WHERE YEAR(KQHT.NgayGioThiCuoiKy) = 2019;

-- h. MaMH, MaLop, HocKy of subjects that were examined in August 2019.
SELECT DISTINCT KQHT.MaMH, HOCSINH.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN HOCSINH ON KQHT.MaHS = HOCSINH.MaHS
WHERE YEAR(KQHT.NgayGioThiCuoiKy) = 2019 AND MONTH(KQHT.NgayGioThiCuoiKy) = 8;

-- i. MaMH, MaLop, HocKy of subjects that were examined before August 20, 2019.
SELECT DISTINCT KQHT.MaMH, HOCSINH.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN HOCSINH ON KQHT.MaHS = HOCSINH.MaHS
WHERE KQHT.NgayGioThiCuoiKy < '2019-08-20';

-- j. MaMH, MaLop, HocKy of subjects that were examined before August 20, 2019 exactly 1 week before.
SELECT DISTINCT KQHT.MaMH, HOCSINH.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN HOCSINH ON KQHT.MaHS = HOCSINH.MaHS
WHERE KQHT.NgayGioThiCuoiKy = DATEADD(WEEK, -1, '2019-08-20');

-- k. MaMH, MaLop, HocKy of subjects that were examined 21 days after August 20, 2019.
SELECT DISTINCT KQHT.MaMH, HOCSINH.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN HOCSINH ON KQHT.MaHS = HOCSINH.MaHS
WHERE KQHT.NgayGioThiCuoiKy = DATEADD(DAY, 21, '2019-08-20');

-- l. MaMH, MaLop, HocKy of subjects that were examined between August 10 and August 20, 2019.
SELECT DISTINCT KQHT.MaMH, HOCSINH.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN HOCSINH ON KQHT.MaHS = HOCSINH.MaHS
WHERE KQHT.NgayGioThiCuoiKy BETWEEN '2019-08-10' AND '2019-08-20';

-- m. MaMH, MaLop, HocKy of subjects that were examined between 10:00 AM on August 10 and 8:30 PM on August 20, 2019.
SELECT DISTINCT KQHT.MaMH, HOCSINH.MaLop, KQHT.HocKy
FROM KQHT
INNER JOIN HOCSINH ON KQHT.MaHS = HOCSINH.MaHS
WHERE KQHT.NgayGioThiCuoiKy BETWEEN '2019-08-10 10:00:00' AND '2019-08-20 20:30:00';


--12. SELECT WITH "GROUP BY"
--a. List different addresses in the HOCSINH table (in 2 different ways) (*)
--C1
SELECT DISTINCT DiaChi FROM HOCSINH
--C2
SELECT DiaCHi FROM HOCSINH Group by DiaChi

-- b. List HoTenHS, GioiTinh of groups grouped by HoTenHS and GioiTinh in the HOCSINH table.
SELECT HoTenHS, GioiTinh
FROM HOCSINH
GROUP BY HoTenHS, GioiTinh;

-- c. List the HoTenHS of groups grouped by HoTenHS and GioiTinh in the HOCSINH table. Please try to explain why GioiTinh is not listed but there is still no error.
SELECT HoTenHS
FROM HOCSINH
GROUP BY HoTenHS;

/*- Giải thích: Khi sử dụng GROUP BY, các cột không tổng hợp trong câu lệnh SELECT phải là một phần của mệnh đề GROUP BY. 
Trong trường hợp này, vì GioiTinh không có trong mệnh đề GROUP BY và không có hàm tổng hợp nào được áp dụng cho nó 
nên có thể gây ra kết quả không thể đoán trước theo tiêu chuẩn SQL. Tuy nhiên, một số hệ thống quản lý cơ sở dữ liệu như MySQL 
và SQLite cho phép các truy vấn đó thực thi mà không gặp lỗi, nhưng kết quả có thể 
không có ý nghĩa về mặt logic.*/

-- d. List MaMH, TenMH, DiemThiCuoiKy of each subject divided by each final exam score. (Hint: only list subjects that have had students take the final exam).
SELECT MONHOC.MaMH, MONHOC.TenMH, KQHT.DiemThiCuoiKy
FROM MONHOC
INNER JOIN KQHT ON MONHOC.MaMH = KQHT.MaMH
WHERE KQHT.DiemThiCuoiKy IS NOT NULL;

-- e. List the MaGV and TenGV of teachers who have been assigned to be in charge of at least 1 subject. If MaGV and TenGV overlap multiple times, it will only be displayed once in the returned results.
SELECT DISTINCT GIAOVIEN.MaGV, GIAOVIEN.HoTenGV
FROM GIAOVIEN
INNER JOIN PTBM ON GIAOVIEN.MaGV = PTBM.MaGVPT;

--13. SELECT WITH "COUNT"
-- a. List HoTenHS, GioiTinh, DiaChi of groups grouped by HoTenHS and GioiTinh in table HOCSINH. Try to think about the cause of the error if an error occurs (*)
select HoTenHS, GioiTinh, DiaChi
from HOCSINH
group by HoTenHS, GioiTinh

/* Nguyên nhân lỗi ở đây là: mỗi GROUP chỉ được trả về 1 dòng kết quả. Mỗi
học sinh có nhiều Địa Chỉ khác nhau nên không biết chọn địa chỉ nào để trả về kết
quả dẫn đến lỗi.*/

-- b. Count the number of male students.
SELECT COUNT(*) AS Male_Student_Count
FROM HOCSINH
WHERE GioiTinh = 'Nam';

-- c. Count the number of students in the class named Grade 1/1 and that class is in the 2019-2023 school year.
SELECT COUNT(*) AS Student_Count_Grade
FROM HOCSINH
INNER JOIN LOP ON HOCSINH.MaLop = LOP.MaLop
WHERE LOP.TenLop = '12A1' AND YEAR(LOP.Namhoc) BETWEEN 2019 AND 2023;

-- d. Count the number of classes in charge (can be 1 or more subjects) of each teacher.
SELECT GIAOVIEN.MaGV, GIAOVIEN.HoTenGV, COUNT(PTBM.MaLop) AS NumOfClassesInCharge
FROM GIAOVIEN
LEFT JOIN PTBM ON GIAOVIEN.MaGV = PTBM.MaGVPT
GROUP BY GIAOVIEN.MaGV, GIAOVIEN.HoTenGV;

--14. SELECT WITH "HAVING, NOT IN, NOT EXIST"
--a. The student has never taken any subjects.
SELECT HOCSINH.HoTenHS
FROM HOCSINH WHERE NOT EXISTS
(SELECT HOCSINH.HoTenHS
FROM KQHT
where KQHT.MaHS=HOCSINH.MaHS)

--Or:
SELECT HOCSINH.MaHS
  FROM HOCSINH
WHERE MaHS NOT IN (SELECT MaHS FROM KQHT)

--Note: One way is to find students who are not in the set of students who have taken the exam (NOT IN).
--The other one is the negation of the JOIN, which used to be NOT EXITS.
--b. The teacher has never been in charge of any subject.
--c. The teacher has never been in charge of any class.
--d. The subject has never been tested before.
--e. Count the number of students at each address corresponding to each address (student). Only shows results for addresses that have at least 5 students present.
-- b. The teacher has never been in charge of any subject.
SELECT GIAOVIEN.MaGV AS Teacher_ID, GIAOVIEN.HoTenGV AS Teacher_Name
FROM GIAOVIEN
LEFT JOIN PTBM ON GIAOVIEN.MaGV = PTBM.MaGVPT
WHERE PTBM.MaGVPT IS NULL;

-- c. The teacher has never been in charge of any class.
SELECT GIAOVIEN.MaGV AS Teacher_ID, GIAOVIEN.HoTenGV AS Teacher_Name
FROM GIAOVIEN
LEFT JOIN LOP ON GIAOVIEN.MaGV = LOP.MaGVCN
WHERE LOP.MaGVCN IS NULL;

-- d. The subject has never been tested before.
SELECT MONHOC.MaMH AS Subject_ID, MONHOC.TenMH AS Subject_Name
FROM MONHOC
LEFT JOIN KQHT ON MONHOC.MaMH = KQHT.MaMH
WHERE KQHT.MaMH IS NULL;

-- e. Count the number of students at each address corresponding to each address (student). Only shows results for addresses that have at least 5 students present.
SELECT DiaChi, COUNT(*) AS Student_Count
FROM HOCSINH
GROUP BY DiaChi
HAVING COUNT(*) >= 5;

--15. List:
--a. Male students in Thanh Khe and female students in Hai Chau (in 2 different ways).
-- C1
Select MaHS, HoTenHS, HoTenPH, DiaChi, GioiTinh
From HOCSINH
Where (Gioitinh='Nam' and DiaChi = 'ThanhKhe')
or (GioiTinh='Nu' and DiaChi = 'HaiChau')
-- C2
(Select MaHS, HoTenHS, HoTenPH, DiaChi, GioiTinh
From HOCSINH
Where (Gioitinh='Nam' and DiaChi = 'ThanhKhe'))
UNION
(Select MaHS, HoTenHS, HoTenPH, DiaChi, GioiTinh
From HOCSINH
Where (GioiTinh='Nu' and DiaChi = 'HaiChau'))
--b. Full names of students and teachers throughout the school.
--c. Full names and occupations of students and teachers throughout the school. (Occupation includes: student or teacher).
--d. Students studying in the 2019-2020 school year and students who have never taken Math and Vietnamese tests.
--17. List:
--a. MaLop, TenLop, MaGVCN, HoTenGV (homeroom) of all classes in the school. (Hint: all classes means even classes that have not been assigned a teacher).
--SELECT MaLop, TenLop, MaGVCN, HoTenGV
--FROM LOP
--LEFT JOIN GIAOVIEN
--ON LOP.MaGVCN = GIAOVIEN.MaGV
--b. MaHS, HoTenHS, HocKy, MaMH, TenMH, DiemThiGiuaKy, DiemThiCuoiKy of all students in the school.
--c. MaHS, HoTenHS, MaLop, TenLop, MaGVCN, HoTenGV (Homeroom) of all students in the school. (Note the following cases: students have not been assigned to classes and classes have not been assigned teachers).
--d. MaGV, HoTenGV, MaLop, TenLop, MaMH, HocKy, TenMH of all teachers in the school.