const M3U_URL = "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8";

async function loadLivePlaylist() {
  try {
    const response = await fetch(M3U_URL);
    if (!response.ok) throw new Error("مشكلة في التحميل");
    const text = await response.text();
    // هنا هتحلل النص (parse M3U) وتقسمه حسب group-title
    console.log("تم تحميل القائمة بنجاح، عدد السطور:", text.split('\n').length);
    // لو عايز تشوف النتيجة في console أولاً
  } catch (err) {
    console.error("خطأ تحميل الـ M3U:", err);
  }
}

// شغل الدالة دي لما الصفحة تفتح أو لما تضغط زر Live
// مثال: window.addEventListener('load', loadLivePlaylist);
