// SOMETIME import.meta.env.VITE_APPWRITE_URL THIS WILL NOT LOAD OUR APPLICATION CRASH and ENV VARIABLE SHOULD BE STRING

const conf = {
  appwiterUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwiterProjectId: String(import.meta.env.VITE_PROJECT_ID),
  appwiterDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
  appwiterCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
  appwiterBucketId: String(import.meta.env.VITE_BUCKET_ID),
};

export default conf;
