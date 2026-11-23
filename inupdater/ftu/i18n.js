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

  /* ---------- Hero ---------- */
  [`Welcome to Nugget for Y1`, `Nugget for Y1에 오신 것을 환영해요`],
  [`Please read the steps below to finalize the installation.`, `설치를 완료하려면 아래 단계를 읽어 주세요.`],
  [`Scroll down`, `아래로 스크롤`],

  /* ---------- Step 1 ---------- */
  [`Download files required`, `필요한 파일 다운로드`],
  [`You will need to download files to proceed with next steps.`, `다음 단계로 진행하려면 파일을 내려받아야 해요.`],
  [`Download ZIP file on GitHub`, `GitHub에서 ZIP 파일 다운로드`],
  [`Download 'rockbox_sdcard.zip' in the latest release.`, `최신 릴리스에서 'rockbox_sdcard.zip'을 내려받으세요.`],
  [`Extract the ZIP file`, `ZIP 파일 압축 풀기`],
  [`Once extracted, you should see a '.rockbox' and '.system' folder.*`, `압축을 풀면 '.rockbox'와 '.system' 폴더가 보일 거예요.*`],
  [`Download`, `다운로드`],
  [`*Press Cmd + Shift + Period to see hidden folders`, `*숨겨진 폴더를 보려면 Cmd + Shift + 마침표(.)를 누르세요`],

  /* ---------- Step 2.A ---------- */
  [`I am new, enter the device in USB mode`, `처음 설치하는 경우, 기기를 USB 모드로 진입시키기`],
  [`To copy files over initally, you will need to do this. Do not see this screen? You are updating, scroll down`,
   `처음에 파일을 복사하려면 이 작업을 해야 해요. 이 화면이 보이지 않나요? 업데이트 중이시라면 아래로 스크롤하세요.`],
  [`Turn it on after flashing`, `플래시 후 전원 켜기`],
  [`Press and hold the center button`, `가운데 버튼을 길게 누르세요`],
  [`Plug it in`, `케이블 연결하기`],
  [`Once this is displayed on screen, you may insert USB.`, `화면에 이 표시가 나타나면 USB를 연결할 수 있어요.`],

  /* ---------- Step 2.B ---------- */
  [`I am updating from an earlier version of Nugget, enter the device in USB mode`,
   `이전 버전의 Nugget에서 업데이트하는 경우, 기기를 USB 모드로 진입시키기`],
  [`To copy files over initally, you will need to do this. Skip this if you did the previous step (Step 2.A)`,
   `처음에 파일을 복사하려면 이 작업을 해야 해요. 이전 단계(Step 2.A)를 이미 진행했다면 건너뛰세요.`],
  [`Rapidly press MENU after powering on + see black logo`, `전원을 켜고 검은 로고가 보이면 MENU 버튼을 빠르게 누르기`],
  [`This will open Configapp.`, `그러면 Configapp이 열려요.`],
  [`Enable USB mass storage mode`, `USB 대용량 저장소 모드 활성화`],
  [`You may need to scroll all the way to the end`, `맨 끝까지 스크롤해야 할 수도 있어요.`],

  /* ---------- Step 3 ---------- */
  [`Put the extracted rockbox_sdcard files on the Y1`, `압축을 푼 rockbox_sdcard 파일을 Y1에 넣기`],
  [`You may need to manually shut the device down in order to boot.`, `부팅하려면 기기를 수동으로 종료해야 할 수도 있어요.`],
  [`Copy the extracted folders`, `압축을 푼 폴더 복사하기`],
  [`.rockbox, .system and any others`, `.rockbox, .system 및 기타 모든 폴더`],
  [`Paste them in the root of the Y1`, `Y1의 루트 경로에 붙여넣기`],
  [`Replace files if requested`, `덮어쓰기 확인이 뜨면 파일을 교체하세요`],
  [`Eject`, `안전하게 꺼내기`],
  [`You should eject after every time you plug it into a computer.`, `컴퓨터에 연결할 때마다 매번 안전하게 꺼내기를 해야 해요.`],

  /* ---------- Extra: Themes ---------- */
  [`Install themes in Rockbox`, `Rockbox에 테마 설치하기`],
  [`You can install both iPod 240p classic themes in Rockbox.`, `Rockbox에 iPod 240p 클래식 테마를 설치할 수 있어요.`],
  [`Go to Rockbox Themes Website and download a theme`, `Rockbox 테마 웹사이트에서 테마 다운로드`],
  [`This is for iPod 240p themes.`, `iPod 240p용 테마 페이지예요.`],
  [`Open`, `열기`],
  [`Extract the files and put .rockbox in your Y1`, `압축을 풀고 .rockbox 폴더를 Y1에 넣기`],
  [`Merge if it asks you, replace files.`, `병합 여부를 묻는 창이 뜨면 병합하고, 파일을 교체하세요.`],
  [`Enable Classic mode`, `Classic 모드 활성화`],
  [`Settings -> General Settings -> Nugget -> Device -> Screen Resolution -> Classic`,
   `Settings -> General Settings -> Nugget -> Device -> Screen Resolution -> Classic`],
  [`Apply theme`, `테마 적용하기`],
  [`Settings -> Themes -> Browse Theme Files. For some themes, disabling "Dynamic Colors" is required.`,
   `Settings -> Themes -> Browse Theme Files로 이동하세요. 일부 테마는 "Dynamic Colors"를 꺼야 정상 작동해요.`],
];

/* Page title and search-result description */
const KO_META = {
  title: `Nugget for Y1 설치 후 단계 (Innioasis Updater CE)`,
  description: ``,
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