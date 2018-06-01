import sqlite3

connection = sqlite3.connect('database.db')
cursor =  connection.cursor()

sql= '''CREATE TABLE IF NOT EXISTS Hometown ( first_name VARCHAR(100), last_name VARCHAR (100), home VARCHAR(50)) '''
cursor.execute(sql)

sql ="INSERT INTO Hometown(first_name, last_name, home) VALUES ('Rose', 'Tyler', 'Earth'), ('Zoe', 'Heriot','Space Station W3'),('Jo','Grant','Earth'),('Leela','null','Unspecified'),('Romana','null','Gallifrey'),('Clara','Oswald','Earth'),('Adric','null','Alzarius'),('Susan','Foreman','Gallifrey')"

cursor.execute(sql)
connection.commit()

sql ='SELECT * FROM Hometown'
cursor.execute(sql)

rows=cursor.fetchall()

for row in rows:
    print(row)

connection.close()
