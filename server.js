const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',  // Your MySQL server host
  user: 'root',       // Your MySQL username
  password: 'root',       // Your MySQL password
  database: 'mydatabase' // The name of the database you created
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

connection.query('SELECT * FROM people', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error.stack);
    connection.end();
    return;
  }
  console.log('Query results:', results);

      });
// output:
PS C:\Users\suraj\Desktop\PRoejct\Day2 Java Script\NodePlayGround\node-mysql-ap> node server.js
Connected to the database as id 18


PS C:\Users\suraj\Desktop\PRoejct\Day2 Java Script\NodePlayGround\node-mysql-ap> node server.js
Connected to the database as id 24
Query results: [
  RowDataPacket {
    id: 1,
    name: 'John Doe',
    age: 30,
    contact_no: '1234567890',
    address: '123 Main St, Anytown, USA',
    stream: 'Engineering'
  },
  RowDataPacket {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    contact_no: '9876543210',
    address: '456 Elm St, Othertown, USA',
    stream: 'Medicine'
  },
  RowDataPacket {
    id: 3,
    name: 'Alice Brown',
    age: 28,
    contact_no: '5551234567',
    address: '789 Oak St, Anycity, USA',
    stream: 'Business'
  },
  RowDataPacket {
    id: 4,
    name: 'Thane',
    age: 30,
    contact_no: '1234567890',
    address: '123 Main St, Anytown, USA',
    stream: 'Engineering'
  },
  RowDataPacket {
    id: 5,
    name: 'Jane Smith',
    age: 25,
    contact_no: '9876543210',
    address: '456 Elm St, Othertown, USA',
    stream: 'Medicine'
  },
  RowDataPacket {
    id: 6,
    name: 'Alice Brown',
    age: 28,
    contact_no: '5551234567',
    address: '789 Oak St, Anycity, USA',
    stream: 'Business'
  }
]