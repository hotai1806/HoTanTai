import { AppDataSource } from "./data-source"; // Your data source file
import { Resource } from "./entities/Resource"; // Your Resource entity

async function seedMockData() {
  try {
    // Initialize the data source
    await AppDataSource.initialize();
    console.log("Data source has been initialized!");

    // Define mock data
    const mockData: Partial<Resource>[] = [
      {
        name: "Resource A",
        description: "This is the description for Resource A.",
      },
      {
        name: "Resource B",
        description: "This is the description for Resource B.",
      },
      {
        name: "Resource C",
        description: "This is the description for Resource C.",
      },
      {
        name: "Resource D",
        description: "This is the description for Resource D",
      },
    ];

    // Insert mock data into the database
    const resourceRepository = AppDataSource.getRepository(Resource);
    const savedResources = await resourceRepository.save(mockData);

    console.log("Mock data has been seeded successfully:", savedResources);
  } catch (error) {
    console.error("Error seeding mock data:", error);
  } finally {
    // Destroy the data source
    await AppDataSource.destroy();
  }
}

// Execute the seed script
seedMockData();
