# Instagram Notification Bot 📲

An Instagram profile tracking bot that sends **real-time push notifications** to your iPhone using **Pushover**.

---

## 🇹🇷 Türkçe Açıklama

Bu proje, belirlediğiniz bir Instagram hesabını takip eder ve aşağıdaki değişikliklerde **iPhone’unuza anlık bildirim gönderir**:

### 🔔 Takip Edilen Veriler
- 👥 Takipçi sayısı (follower_count)
- 👤 Takip edilen kişi sayısı (following_count)
- 📸 Gönderi sayısı (media_count)
- 📝 Bio değişikliği

Artış veya azalış durumunda bildirim gönderilir.

---

### 🧱 Kurulum

```bash
git clone https://github.com/grandzeit/instagram-notification.git
cd instagram-notification
npm install
node index.js