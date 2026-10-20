/* =========================================================
   i18n.js: English / Korean switcher.

   HOW IT WORKS
   The English text stays in index.html. This file holds a list of
   [English text, Korean text] pairs. When Korean is chosen, the
   script finds every element whose text exactly matches an English
   entry and swaps in the Korean version. Switching back restores
   the original English.

   HOW TO EDIT
   - If you change English text in index.html, change the matching
     English entry here too, or that line will simply stay in English.
   - Korean text can contain <code>, <strong> and <a> tags. Links (<a>)
     keep the href from the English version automatically.
   - To find lines with no translation, open the site with
     ?i18n=debug on the end of the address, switch to Korean and
     look in the browser console.
   ========================================================= */

const TRANSLATIONS = [

  /* ---------- Header ---------- */
  [`Why pick me?`, `왜 선택해야 하나요?`],
  [`Install`, `설치`],

  /* ---------- Hero ---------- */
  [`The most stable CFW for your Innioasis Y1: Nugget for Y1`, `Innioasis Y1을 위한 가장 안정적인 커스텀 펌웨어: Nugget for Y1`],
  [`Nugget for Y1 makes your Innioasis Y1 last longer, be faster and easier to use with Rockbox. Based on Linux, running Rockbox, it's stable and open.`,
   `Nugget for Y1은 Innioasis Y1의 배터리를 더 오래 쓰게 하고, Rockbox를 더 빠르고 쉽게 쓸 수 있게 해줘요. 리눅스 기반으로 Rockbox를 실행해서 안정적이고 오픈 소스예요.`],
  [`Install today`, `지금 설치하기`],
  [`Scroll down`, `아래로 스크롤`],

  /* ---------- Battery ---------- */
  [`2.5x the battery life`, `배터리 수명 2.5배`],
  [`It's really the same device??`, `정말 같은 기기 맞아요??`],
  [`Rockbox on Android`, `Android 기반 Rockbox`],
  [`Stock firmware (Android)`, `기본 펌웨어 (Android)`],
  [`With Nugget Y1!`, `Nugget Y1과 함께!`],
  [`Battery life is tested with AAC audio playing through wired earphones, volume at 50dB, WiFi and Bluetooth disabled. Visuals are an approximation. Battery hours are rounded up to the nearby value. Values may not be accurate and can fluctuate with variables.`,
   `배터리 수명은 AAC 오디오를 유선 이어폰으로 재생하고, 볼륨 50dB, Wi-Fi와 블루투스를 끈 상태에서 측정했습니다. 그래프는 대략적인 근사치입니다. 배터리 시간은 가까운 값으로 올림했습니다. 수치는 정확하지 않을 수 있으며 조건에 따라 달라질 수 있습니다.`],

  /* ---------- Features ---------- */
  [`Why not just use the Android version?`, `그냥 Android 버전을 쓰면 안 될까요?`],
  [`Normally, Rockbox for the Y1 run as an app on top of Android 4.2.2. Why pick us?`,
   `보통 Y1용 Rockbox는 Android 4.2.2 위에서 앱으로 실행돼요. 그런데 왜 저희를 골라야 할까요?`],
  [`No battery drain`, `배터리 낭비 없음`],
  [`Android keeps a whole, dated phone operating system awake behind your music. We took it out and you get 2.5x the battery life.`,
   `Android는 음악 뒤에서 오래된 스마트폰 운영체제 전체를 계속 켜 두어요. 저희는 이를 없애서 배터리 수명이 2.5배가 되었어요.`],
  [`Straight into Rockbox`, `바로 Rockbox로`],
  [`Power on and in under 10 seconds you're in. Power off or reboot right from the Rockbox menu.`,
   `전원을 켜면 10초 안에 바로 Rockbox가 열려요. 전원 끄기와 재부팅도 Rockbox 메뉴에서 바로 할 수 있어요.`],
  [`Properly loud`, `충분히 큰 소리`],
  [`The headphone amp runs at full strength, matching the stock maximum volume.`,
   `헤드폰 앰프가 최대 출력으로 동작해서, 기본 펌웨어의 최대 볼륨과 같은 수준이에요.`],
  [`Adjust the power`, `전력 조절`],
  [`Save battery in power-saver mode or overclock for heavy stuff.`,
   `절전 모드로 배터리를 아끼거나, 무거운 작업을 위해 오버클럭할 수 있어요.`],
  [`Support iPod Rockbox themes`, `iPod Rockbox 테마 지원`],
  [`Natively supports iPod themes. Just adjust the screen size to Classic mode.`,
   `iPod 테마를 기본으로 지원해요. 화면 크기를 Classic 모드로 맞추기만 하면 돼요.`],
  [`It's still all Rockbox`, `여전히 완전한 Rockbox`],
  [`Every audio format, themes and fonts are supported.`, `모든 오디오 형식, 테마, 글꼴을 지원해요.`],

  /* ---------- Install ---------- */
  [`Installing takes a few minutes`, `설치는 몇 분이면 끝나요`],
  [`Nugget for Y1 Tool (Recommended)`, `Nugget for Y1 도구 (권장)`],
  [`Download our tool`, `도구 다운로드`],
  [`We built a tool for Mac and Windows that automatically sets up everything. It's safe, check our source code.`,
   `Mac과 Windows에서 모든 설정을 자동으로 해 주는 도구를 만들었어요. 안전하며, 소스 코드를 직접 확인할 수 있어요.`],
  [`Follow the instructions on screen`, `화면의 안내를 따르세요`],
  [`The app will guide you through the process of flashing and set up everything automatically.`,
   `앱이 플래시 과정을 안내하고 모든 것을 자동으로 설정해요.`],
  [`Turn it on and configure`, `전원을 켜고 설정하기`],
  [`When you're done, you can adjust settings and download themes.`, `완료되면 설정을 조정하고 테마를 내려받을 수 있어요.`],
  [`Download tool`, `도구 다운로드`],
  [`WARNING: Flashing replaces the stock firmware. While extremely rare, it can cause the malfunction of the device. We are not responsible of the damage to your device. Only the Y1 TypeA device is supported.`,
   `경고: 플래시하면 기본 펌웨어가 교체됩니다. 매우 드물지만 기기가 오작동할 수 있습니다. 기기 손상에 대해 저희는 책임지지 않습니다. Y1 TypeA 기기만 지원됩니다.`],
  [`Or`, `또는`],
  [`Download Innioasis Updater CE`, `Innioasis Updater CE 다운로드`],
  [`Nugget for Y1 is now available in the Innioasis Updater CE.`, `Nugget for Y1을 이제 Innioasis Updater CE에서 사용할 수 있어요.`],
  [`Change the software to Nugget`, `소프트웨어를 Nugget으로 변경`],
  [`Once the app is open and drivers are installed, select 'Nugget for Y1' in the software dropdown. The app will guide you through the process of flashing.`,
   `앱을 열고 드라이버를 설치한 후, 소프트웨어 드롭다운에서 'Nugget for Y1'을 선택하세요. 앱이 플래시 과정을 안내해요.`],
  [`Turn it on and plug it in`, `전원을 켜고 연결하기`],
  [`When flashing is complete, turn on Y1. You will see a screen telling you to plug in the device to the PC, do this.`,
   `플래시가 끝나면 Y1의 전원을 켜세요. 기기를 PC에 연결하라는 화면이 나타나면 연결해 주세요.`],
  [`Download .rockbox and put it on the device`, `.rockbox를 내려받아 기기에 넣기`],
  [`Download the ZIP from our GitHub. Extract it to the Y1, making sure .rockbox is there.`,
   `GitHub에서 ZIP 파일을 내려받아 Y1에 압축을 풀어 주세요. .rockbox 폴더가 있는지 꼭 확인하세요.`],
  [`Unplug it, turn it on and configure`, `연결을 해제하고 전원을 켠 뒤 설정하기`],
  [`Download Innioasis Updater`, `Innioasis Updater 다운로드`],

  /* ---------- Info and footer ---------- */
  [`Work in progress`, `개발 중`],
  [`Because this is our own stack of software, 100% feature parity is not certain.`,
   `저희가 직접 만든 소프트웨어 스택이기 때문에, 모든 기능이 100% 동일하다고 보장할 수는 없어요.`],
  [`Not working`, `작동하지 않는 기능`],
  [`Wifi, Vibration, Internal Speaker, FM Radio`, `Wi-Fi, 블루투스, 진동, 내장 스피커, FM 라디오`],
  [`Partially working`, `일부만 작동`],
  [`N/A`, `해당 없음`],
  [`About`, `소개`],
  [`Not affiliated with Innioasis. Built on the open source Rockbox project. GitHub`,
   `Innioasis와 관련이 없습니다. 오픈 소스 <a>Rockbox</a> 프로젝트를 기반으로 만들었습니다. <a>GitHub</a>`],
];

/* Page title and search-result description */
const KO_META = {
  title: `Nugget for Y1: 맛있고 안정적인 커스텀 펌웨어`,
  description: `Innioasis Y1용 커스텀 펌웨어. 배터리 수명 2.6배, 더 큰 소리, 모든 오디오 형식, 대용량 메모리 카드 지원.`,
};

/* =========================================================
   Engine. You shouldn't need to edit below this line.
   ========================================================= */

const SKIP = "script, style, pre, .titlebar, .meter-fill";
const norm = (s) => s.replace(/\s+/g, " ").trim();
const dict = new Map(TRANSLATIONS.map(([en, ko]) => [norm(en), ko]));
const originals = new Map();
const metaDesc = document.querySelector('meta[name="description"]');
const englishMeta = { title: document.title, description: metaDesc ? metaDesc.content : "" };
const langBtn = document.getElementById("langBtn");

/* Finds the innermost elements whose full text matches an English entry. */
function findMatches(el, found) {
  if (el.matches(SKIP)) return false;
  let childMatched = false;
  for (const child of el.children) {
    if (findMatches(child, found)) childMatched = true;
  }
  if (childMatched) return true;
  const key = norm(el.textContent);
  if (dict.has(key)) { found.push([el, key]); return true; }
  return false;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;

  /* Put the English back first */
  originals.forEach((html, el) => { el.innerHTML = html; });
  originals.clear();
  document.title = englishMeta.title;
  if (metaDesc) metaDesc.content = englishMeta.description;

  if (lang === "ko") {
    const found = [];
    findMatches(document.querySelector(".page"), found);
    for (const [el, key] of found) {
      const hrefs = [...el.querySelectorAll("a")].map((a) => a.getAttribute("href"));
      originals.set(el, el.innerHTML);
      el.innerHTML = dict.get(key);
      el.querySelectorAll("a").forEach((a, i) => { if (hrefs[i]) a.setAttribute("href", hrefs[i]); });
    }
    document.title = KO_META.title;
    if (metaDesc) metaDesc.content = KO_META.description;
    if (location.search.includes("i18n=debug")) reportMissing();
  }

  if (langBtn) {
    langBtn.textContent = lang === "ko" ? "English" : "한국어";
    langBtn.lang = lang === "ko" ? "en" : "ko";
    langBtn.setAttribute("aria-label", lang === "ko" ? "Switch to English" : "한국어로 보기");
  }
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

/* Debug helper: lists English text blocks that have no translation */
function reportMissing() {
  const done = [...originals.keys()];
  document.querySelectorAll(".page p, .page h1, .page h2, .page h3, .page li, .page summary, .page td, .page th, .page .btn").forEach((el) => {
    if (el.closest(SKIP)) return;
    if (done.some((t) => t === el || t.contains(el) || el.contains(t))) return;
    const text = norm(el.textContent);
    if (/[A-Za-z]{3,}/.test(text)) console.info("[i18n] missing:", text);
  });
}

function startLanguage() {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const fallback = (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
  applyLanguage(saved || fallback);
}

if (langBtn) {
  langBtn.addEventListener("click", () => {
    applyLanguage(document.documentElement.lang === "ko" ? "en" : "ko");
  });
}
startLanguage();