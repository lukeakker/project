import app from "./app";
import { AppDataSource } from "./data-source";

const port = process.env.PORT || 3002;

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connection established");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error during startup:", err);
    process.exit(1);
  }
};

startServer();
