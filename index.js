// Load environment variables from .env file
require("dotenv").config();

// Import service that fetches Instagram profile data
const { fetchInstagramProfile } = require("./services/instagram");

// Import service that sends push notifications (Pushover)
const { sendPush } = require("./services/pushover");

// Import helper functions to read/save last stored data
const { readLastData, saveLastData } = require("./utils/storage");

async function main() {
  // Instagram username to track (defined in .env)
  const username = process.env.INSTAGRAM_USERNAME;

  // Fetch current Instagram profile data from API
  const data = await fetchInstagramProfile(username);

  // Pick only the fields we want to track
  const current = {
    follower_count: data.follower_count,     // Number of followers
    following_count: data.following_count,   // Number of accounts followed
    media_count: data.media_count,            // Number of posts
    biography: data.biography                 // Profile biography text
  };

  // Read last saved data from local storage (file/db)
  const last = readLastData();

  // If this is the first run, save data and exit
  if (!last) {
    saveLastData(current);
    console.log("İlk veri kaydedildi."); // First data snapshot saved
    return;
  }

  // Check if follower count has changed
  if (current.follower_count !== last.follower_count) {
    const diff = current.follower_count - last.follower_count;

    // Send push notification about follower change
    await sendPush(
      "Instagram Takipçi Değişimi",
      `${username} takipçi sayısı ${diff > 0 ? "+" : ""}${diff} değişti.\nYeni: ${current.follower_count}`
    );
  }

  // Check if following count has changed
  if (current.following_count !== last.following_count) {
    const diff = current.following_count - last.following_count;

    // Send push notification about following change
    await sendPush(
      "Instagram Takip Değişimi",
      `${username} takip sayısı ${diff > 0 ? "+" : ""}${diff} değişti.\nYeni: ${current.following_count}`
    );
  }

  // Check if post count has changed
  if (current.media_count !== last.media_count) {
    const diff = current.media_count - last.media_count;

    // Send push notification about post count change
    await sendPush(
      "Instagram Post Değişimi",
      `${username} post sayısı ${diff > 0 ? "+" : ""}${diff} değişti.\nYeni: ${current.media_count}`
    );
  }

  // Check if biography text has changed
  if (current.biography !== last.biography) {
    // Send push notification when bio is updated
    await sendPush(
      "Instagram Bio Değişti",
      `Yeni bio:\n${current.biography}`
    );
  }

  // Save current data as last known state
  saveLastData(current);
}

// Run the main function and catch any errors
main().catch(console.error);
