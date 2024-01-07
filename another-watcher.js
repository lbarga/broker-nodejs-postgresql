const { Client } = require("pg");

const dbConfig = {
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "postgres_broker",
  port: 5432,
};

async function connectToDatabase() {
  const client = new Client(dbConfig);

  try {
    await client.connect();
    console.log("Awaiting notifications...");

    await client.query("LISTEN another_watcher");

    client.on("notification", (msg) => {
      console.log(`Channel: ${msg.channel} | Payload: ${msg.payload}`);
    });
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

connectToDatabase();
