# Instagram Notification Bot 📲

A lightweight Node.js application that tracks an Instagram profile and sends **real-time iOS push notifications** via **Pushover** whenever important profile data changes. Ideal for monitoring follower activity, profile updates, or general account statistics with instant alerts on your iPhone.

The bot monitors an Instagram profile and notifies you when any of the following change: 👥 **Followers count**, 👤 **Following count**, 📸 **Posts count**, 📝 **Biography (bio)**. Notifications are triggered on both **increase and decrease**, ensuring you never miss an update.

### Tech Stack
- **Node.js**
- **Axios** (HTTP requests)
- **Pushover API** (iOS push notifications)
- **RapidAPI** (Instagram data source)
- **dotenv** (environment variables)

### Installation
Clone the repository:
```bash
git clone https://github.com/grandzeit/instagram-notification.git
cd instagram-notification

Install dependencies:
> npm install

Create your environment file:
> cp .env.example .env
- Fill in your API keys and configuration inside .env.

### Usage
Run the application manually:
> node index.js
- On the first run, the current profile data will be saved. On subsequent runs, a push notification will be sent only if a change is detected.

### Automation (Optional)
For continuous monitoring, you can run the script using a cron job or task scheduler:
> */5 * * * * node /path/to/index.js
- This will check the profile every 5 minutes.
```

### Disclaimer
This project is for educational and personal use only. Instagram is a trademark of Meta Platforms, Inc. This project is not affiliated with or endorsed by Instagram.

### License
MIT License
