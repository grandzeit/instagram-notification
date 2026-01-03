require("dotenv").config();

const { fetchInstagramProfile } = require("./services/instagram");
const { sendPush } = require("./services/pushover");
const { readLastData, saveLastData } = require("./utils/storage");

async function main() {
  const username = process.env.INSTAGRAM_USERNAME;

  const data = await fetchInstagramProfile(username);

  const current = {
    follower_count: data.follower_count,
    following_count: data.following_count,
    media_count: data.media_count,
    biography: data.biography
  };

  const last = readLastData();

  if (!last) {
    saveLastData(current);
    console.log("İlk veri kaydedildi.");
    return;
  }

  if (current.follower_count !== last.follower_count) {
    const diff = current.follower_count - last.follower_count;

    await sendPush(
      "Instagram Takipçi Değişimi",
      `${username} takipçi sayısı ${diff > 0 ? "+" : ""}${diff} değişti.\nYeni: ${current.follower_count}`
    );
  }

  if (current.following_count !== last.following_count) {
    const diff = current.following_count - last.following_count;

    await sendPush(
      "Instagram Takip Değişimi",
      `${username} takip sayısı ${diff > 0 ? "+" : ""}${diff} değişti.\nYeni: ${current.following_count}`
    );
  }

  if (current.media_count !== last.media_count) {
    const diff = current.media_count - last.media_count;

    await sendPush(
      "Instagram Takip Değişimi",
      `${username} post sayısı ${diff > 0 ? "+" : ""}${diff} değişti.\nYeni: ${current.media_count}`
    );
  }

  if (current.biography !== last.biography) {
    await sendPush(
      "Instagram Bio Değişti",
      `Yeni bio:\n${current.biography}`
    );
  }

  saveLastData(current);
}

main().catch(console.error);