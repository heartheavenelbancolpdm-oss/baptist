/* ==========================================================
   KJV BIBLE PRESENTATION — PREVIEW / LIVE CONTROLLER
   Local JSON source:
   data/kjv/<Book>.json
   ========================================================== */

const BOOKS = [
  { name: "Genesis", file: "Genesis.json", testament: "OT" },
  { name: "Exodus", file: "Exodus.json", testament: "OT" },
  { name: "Leviticus", file: "Leviticus.json", testament: "OT" },
  { name: "Numbers", file: "Numbers.json", testament: "OT" },
  { name: "Deuteronomy", file: "Deuteronomy.json", testament: "OT" },
  { name: "Joshua", file: "Joshua.json", testament: "OT" },
  { name: "Judges", file: "Judges.json", testament: "OT" },
  { name: "Ruth", file: "Ruth.json", testament: "OT" },
  { name: "1 Samuel", file: "1 Samuel.json", testament: "OT" },
  { name: "2 Samuel", file: "2 Samuel.json", testament: "OT" },
  { name: "1 Kings", file: "1 Kings.json", testament: "OT" },
  { name: "2 Kings", file: "2 Kings.json", testament: "OT" },
  { name: "1 Chronicles", file: "1 Chronicles.json", testament: "OT" },
  { name: "2 Chronicles", file: "2 Chronicles.json", testament: "OT" },
  { name: "Ezra", file: "Ezra.json", testament: "OT" },
  { name: "Nehemiah", file: "Nehemiah.json", testament: "OT" },
  { name: "Esther", file: "Esther.json", testament: "OT" },
  { name: "Job", file: "Job.json", testament: "OT" },
  { name: "Psalms", file: "Psalms.json", testament: "OT" },
  { name: "Proverbs", file: "Proverbs.json", testament: "OT" },
  { name: "Ecclesiastes", file: "Ecclesiastes.json", testament: "OT" },
  { name: "Song of Solomon", file: "Song of Solomon.json", testament: "OT" },
  { name: "Isaiah", file: "Isaiah.json", testament: "OT" },
  { name: "Jeremiah", file: "Jeremiah.json", testament: "OT" },
  { name: "Lamentations", file: "Lamentations.json", testament: "OT" },
  { name: "Ezekiel", file: "Ezekiel.json", testament: "OT" },
  { name: "Daniel", file: "Daniel.json", testament: "OT" },
  { name: "Hosea", file: "Hosea.json", testament: "OT" },
  { name: "Joel", file: "Joel.json", testament: "OT" },
  { name: "Amos", file: "Amos.json", testament: "OT" },
  { name: "Obadiah", file: "Obadiah.json", testament: "OT" },
  { name: "Jonah", file: "Jonah.json", testament: "OT" },
  { name: "Micah", file: "Micah.json", testament: "OT" },
  { name: "Nahum", file: "Nahum.json", testament: "OT" },
  { name: "Habakkuk", file: "Habakkuk.json", testament: "OT" },
  { name: "Zephaniah", file: "Zephaniah.json", testament: "OT" },
  { name: "Haggai", file: "Haggai.json", testament: "OT" },
  { name: "Zechariah", file: "Zechariah.json", testament: "OT" },
  { name: "Malachi", file: "Malachi.json", testament: "OT" },
  { name: "Matthew", file: "Matthew.json", testament: "NT" },
  { name: "Mark", file: "Mark.json", testament: "NT" },
  { name: "Luke", file: "Luke.json", testament: "NT" },
  { name: "John", file: "John.json", testament: "NT" },
  { name: "Acts", file: "Acts.json", testament: "NT" },
  { name: "Romans", file: "Romans.json", testament: "NT" },
  { name: "1 Corinthians", file: "1 Corinthians.json", testament: "NT" },
  { name: "2 Corinthians", file: "2 Corinthians.json", testament: "NT" },
  { name: "Galatians", file: "Galatians.json", testament: "NT" },
  { name: "Ephesians", file: "Ephesians.json", testament: "NT" },
  { name: "Philippians", file: "Philippians.json", testament: "NT" },
  { name: "Colossians", file: "Colossians.json", testament: "NT" },
  { name: "1 Thessalonians", file: "1 Thessalonians.json", testament: "NT" },
  { name: "2 Thessalonians", file: "2 Thessalonians.json", testament: "NT" },
  { name: "1 Timothy", file: "1 Timothy.json", testament: "NT" },
  { name: "2 Timothy", file: "2 Timothy.json", testament: "NT" },
  { name: "Titus", file: "Titus.json", testament: "NT" },
  { name: "Philemon", file: "Philemon.json", testament: "NT" },
  { name: "Hebrews", file: "Hebrews.json", testament: "NT" },
  { name: "James", file: "James.json", testament: "NT" },
  { name: "1 Peter", file: "1 Peter.json", testament: "NT" },
  { name: "2 Peter", file: "2 Peter.json", testament: "NT" },
  { name: "1 John", file: "1 John.json", testament: "NT" },
  { name: "2 John", file: "2 John.json", testament: "NT" },
  { name: "3 John", file: "3 John.json", testament: "NT" },
  { name: "Jude", file: "Jude.json", testament: "NT" },
  { name: "Revelation", file: "Revelation.json", testament: "NT" }
];

const BOOK_ALIASES = {
  psalm: "Psalms", psalms: "Psalms", "ps": "Psalms",
  "song": "Song of Solomon", "song of solomon": "Song of Solomon", sos: "Song of Solomon",
  "1 cor": "1 Corinthians", "2 cor": "2 Corinthians",
  "1 thess": "1 Thessalonians", "2 thess": "2 Thessalonians",
  "1 tim": "1 Timothy", "2 tim": "2 Timothy",
  "1 pet": "1 Peter", "2 pet": "2 Peter",
  "1 jn": "1 John", "2 jn": "2 John", "3 jn": "3 John",
  "jn": "John", "rom": "Romans", "rev": "Revelation",
  "mt": "Matthew", "matt": "Matthew", "mk": "Mark",
  "lk": "Luke", "acts": "Acts", "prov": "Proverbs",
  "eccl": "Ecclesiastes", "isa": "Isaiah", "jer": "Jeremiah",
  "ezek": "Ezekiel", "dan": "Daniel", "heb": "Hebrews",
  "jas": "James", "gal": "Galatians", "eph": "Ephesians",
  "phil": "Philippians", "col": "Colossians", "phlm": "Philemon"
};

const QUICK_REFERENCES = [
  "John 3:16",
  "Psalm 23",
  "Psalm 91:1",
  "Romans 8:28",
  "Philippians 4:13",
  "Jeremiah 29:11",
  "Proverbs 3:5-6",
  "Isaiah 41:10"
];

const state = {
  preview: null,
  live: null,
  results: [],
  selectedIndex: -1,
  presentationWindow: null,
  bookCache: new Map(),
  fontSize: Number(localStorage.getItem("kjvFontSize")) || 42,
  recent: JSON.parse(localStorage.getItem("kjvRecent") || "[]")
};

const $ = (id) => document.getElementById(id);

function normalizeName(value) {
  return value.toLowerCase().replace(/[.]/g, "").replace(/\s+/g, " ").trim();
}

function findBook(name) {
  const normalized = normalizeName(name);
  const alias = BOOK_ALIASES[normalized] || name;
  return BOOKS.find(book => normalizeName(book.name) === normalizeName(alias));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseReference(input) {
  const value = input.trim().replace(/\s+/g, " ");
  if (!value) return null;

  const match = value.match(/^(.+?)\s+(\d+)(?::(\d+)(?:\s*-\s*(\d+))?)?$/);
  if (!match) return null;

  const book = findBook(match[1]);
  if (!book) return null;

  const chapter = Number(match[2]);
  const startVerse = match[3] ? Number(match[3]) : null;
  const endVerse = match[4] ? Number(match[4]) : startVerse;

  if (startVerse && endVerse < startVerse) return null;

  return { book, chapter, startVerse, endVerse };
}

async function loadBook(book) {
  if (state.bookCache.has(book.name)) {
    return state.bookCache.get(book.name);
  }

  const localUrl = `data/kjv/${encodeURIComponent(book.file)}`;

  // First use the local JSON file. This is the preferred/offline path.
  let response = await fetch(localUrl, { cache: "force-cache" });

  // If the local file is missing, use the repository's raw GitHub file
  // as a temporary online fallback. This prevents "Failed to fetch"
  // when the user has not copied the JSON files into data/kjv yet.
  if (!response.ok) {
    const remoteUrl =
      `https://raw.githubusercontent.com/renniemaharaj/kjv-bible/main/${encodeURIComponent(book.file)}`;

    try {
      response = await fetch(remoteUrl, { cache: "no-store" });
    } catch (networkError) {
      throw new Error(
        `Cannot load ${book.name}. Put "${book.file}" inside data/kjv/ ` +
        `or make sure the computer has internet access for the first load.`
      );
    }

    if (!response.ok) {
      throw new Error(
        `Could not load ${book.file}. Local HTTP ${response.status}; ` +
        `GitHub HTTP ${response.status}.`
      );
    }

    showToast(`Using online KJV fallback for ${book.name}.`);
  }

  const data = await response.json();
  state.bookCache.set(book.name, data);
  return data;
}

/* Supports the exact renniemaharaj schema:
   {
     "1": { "1": "verse text", "2": "verse text" },
     "2": { ... }
   }
   and a few common alternatives for portability. */
function getChapter(data, chapter) {
  const key = String(chapter);

  if (data && data[key] && typeof data[key] === "object") {
    return data[key];
  }

  if (data?.chapters && data.chapters[key]) {
    return data.chapters[key];
  }

  if (Array.isArray(data?.chapters)) {
    const found = data.chapters.find(c => Number(c.chapter) === chapter);
    if (found?.verses) {
      const output = {};
      found.verses.forEach(v => {
        output[String(v.verse)] = v.text;
      });
      return output;
    }
  }

  if (Array.isArray(data)) {
    const found = data.find(c => Number(c.chapter) === chapter);
    if (found?.verses) {
      const output = {};
      found.verses.forEach(v => {
        output[String(v.verse)] = v.text;
      });
      return output;
    }
  }

  return null;
}

function chapterVerseNumbers(chapterData) {
  return Object.keys(chapterData || {})
    .filter(key => /^\d+$/.test(key))
    .sort((a, b) => Number(a) - Number(b));
}

async function getReferenceResults(reference) {
  const data = await loadBook(reference.book);
  const chapterData = getChapter(data, reference.chapter);

  if (!chapterData) {
    throw new Error(`${reference.book.name} ${reference.chapter} was not found.`);
  }

  const numbers = chapterVerseNumbers(chapterData);
  let selectedNumbers = numbers;

  if (reference.startVerse !== null) {
    const start = reference.startVerse;
    const end = reference.endVerse ?? start;
    selectedNumbers = numbers.filter(n => Number(n) >= start && Number(n) <= end);
  }

  if (!selectedNumbers.length) {
    throw new Error("No verses matched that reference.");
  }

  return selectedNumbers.map(number => ({
    book: reference.book.name,
    chapter: reference.chapter,
    verse: Number(number),
    text: String(chapterData[number]).trim()
  }));
}

function makeReference(item) {
  return `${item.book} ${item.chapter}:${item.verse}`;
}

function addRecent(reference) {
  const cleaned = reference.trim();
  if (!cleaned) return;
  state.recent = [cleaned, ...state.recent.filter(x => x.toLowerCase() !== cleaned.toLowerCase())].slice(0, 12);
  localStorage.setItem("kjvRecent", JSON.stringify(state.recent));
  renderRecent();
}

function setPreview(item, index = state.selectedIndex) {
  state.preview = { ...item };
  state.selectedIndex = index;

  $("previewReference").textContent = makeReference(item);
  $("previewPosition").textContent =
    state.results.length > 1 ? `${index + 1} of ${state.results.length} result${state.results.length === 1 ? "" : "s"}` : "Ready to present";

  $("previewText").className = "scripture-preview";
  $("previewText").innerHTML = `
    <div class="verse-text">${escapeHTML(item.text)}</div>
    <div class="verse-reference">${escapeHTML(makeReference(item))}</div>
    <div class="kjv-label">KING JAMES VERSION</div>
  `;

  $("sendLiveBtn").disabled = false;
  renderResults();
}

function renderResults() {
  const list = $("resultsList");
  $("resultCount").textContent = state.results.length;

  if (!state.results.length) {
    list.innerHTML = `
      <div class="results-empty">
        <div class="empty-icon small">⌕</div>
        <strong>No results</strong>
        <p>Try a reference such as <b>John 3:16</b> or <b>Psalm 23</b>.</p>
      </div>`;
    return;
  }

  list.innerHTML = state.results.map((item, index) => `
    <button class="result-item ${index === state.selectedIndex ? "selected" : ""}" data-index="${index}">
      <span class="result-ref">${escapeHTML(makeReference(item))}</span>
      <span class="result-text">${escapeHTML(item.text)}</span>
    </button>
  `).join("");

  list.querySelectorAll(".result-item").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      setPreview(state.results[index], index);
    });
  });
}

async function searchReference(input, saveHistory = true) {
  const reference = parseReference(input);

  if (!reference) {
    showToast("Enter a valid reference, such as John 3:16.");
    return;
  }

  $("searchSummary").textContent = `Loading ${reference.book.name} ${reference.chapter}…`;
  $("resultsList").innerHTML = `
    <div class="results-empty">
      <div class="empty-icon small">…</div>
      <strong>Loading Scripture</strong>
      <p>Reading the local KJV book file.</p>
    </div>`;

  try {
    const results = await getReferenceResults(reference);
    state.results = results;
    state.selectedIndex = -1;

    const rangeLabel = reference.startVerse === null
      ? `${reference.book.name} ${reference.chapter}`
      : results.length > 1
        ? `${reference.book.name} ${reference.chapter}:${results[0].verse}-${results.at(-1).verse}`
        : makeReference(results[0]);

    $("searchSummary").textContent = rangeLabel;

    if (saveHistory) addRecent(input);
    renderResults();

    // Select the first result as Preview only.
    setPreview(results[0], 0);
    showToast(`Preview loaded: ${makeReference(results[0])}`);
  } catch (error) {
    console.error(error);
    $("searchSummary").textContent = "Unable to load this reference.";
    $("resultsList").innerHTML = `
      <div class="results-empty">
        <div class="empty-icon small">!</div>
        <strong>Could not load Scripture</strong>
        <p>${escapeHTML(error.message)}</p>
      </div>`;
    showToast(error.message);
  }
}

function sendLive() {
  if (!state.preview) {
    showToast("Select a verse for Preview first.");
    return;
  }

  state.live = { ...state.preview };

  const message = {
    type: "KJV_LIVE_UPDATE",
    payload: {
      ...state.live,
      fontSize: state.fontSize
    }
  };

  if (!state.presentationWindow || state.presentationWindow.closed) {
    openPresentation();
    // The presentation page sends READY after it loads; sendLiveStateToWindow
    // will deliver the current live verse when READY arrives.
  } else {
    state.presentationWindow.postMessage(message, "*");
  }

  $("liveReference").textContent = makeReference(state.live);
  showToast(`${makeReference(state.live)} is now LIVE.`);
}

function sendLiveStateToWindow() {
  if (!state.presentationWindow || state.presentationWindow.closed) return;

  state.presentationWindow.postMessage({
    type: "KJV_LIVE_UPDATE",
    payload: state.live ? { ...state.live, fontSize: state.fontSize } : null
  }, "*");
}

function blankTV() {
  if (!state.presentationWindow || state.presentationWindow.closed) {
    openPresentation();
    setTimeout(() => {
      state.presentationWindow?.postMessage({ type: "KJV_BLANK" }, "*");
    }, 350);
  } else {
    state.presentationWindow.postMessage({ type: "KJV_BLANK" }, "*");
  }
  showToast("TV screen blanked.");
}

function openPresentation() {
  if (state.presentationWindow && !state.presentationWindow.closed) {
    state.presentationWindow.focus();
    return state.presentationWindow;
  }

  state.presentationWindow = window.open(
    "presentation.html",
    "KJV_PRESENTATION",
    "width=1920,height=1080,resizable=yes,scrollbars=no"
  );

  if (!state.presentationWindow) {
    showToast("Popup blocked. Please allow popups for this site.");
    return null;
  }

  $("connectionDot").classList.add("connected");
  $("connectionText").textContent = "TV window open";

  // Helpful fallback in case the READY message is delayed.
  setTimeout(sendLiveStateToWindow, 700);
  return state.presentationWindow;
}

function changePreview(delta) {
  if (!state.results.length) return;
  let index = state.selectedIndex;
  if (index < 0) index = 0;
  index = Math.max(0, Math.min(state.results.length - 1, index + delta));
  setPreview(state.results[index], index);
}

function updateFontSize(delta) {
  state.fontSize = Math.max(28, Math.min(72, state.fontSize + delta));
  localStorage.setItem("kjvFontSize", state.fontSize);
  document.documentElement.style.setProperty("--preview-font", `${state.fontSize}px`);
  $("fontSizeLabel").textContent = `${state.fontSize}px`;

  if (state.presentationWindow && !state.presentationWindow.closed) {
    state.presentationWindow.postMessage({
      type: "KJV_FONT_UPDATE",
      payload: { fontSize: state.fontSize }
    }, "*");
  }
}

function populateQuickRefs() {
  $("quickRefs").innerHTML = QUICK_REFERENCES.map(ref =>
    `<button class="quick-ref" data-ref="${escapeHTML(ref)}">${escapeHTML(ref)}</button>`
  ).join("");

  $("quickRefs").querySelectorAll(".quick-ref").forEach(button => {
    button.addEventListener("click", () => {
      $("searchInput").value = button.dataset.ref;
      showView("searchView");
      searchReference(button.dataset.ref);
    });
  });
}

function populateBooks() {
  const render = list => list.map(book =>
    `<button class="book-button" data-book="${escapeHTML(book.name)}">${escapeHTML(book.name)}</button>`
  ).join("");

  $("oldTestament").innerHTML = render(BOOKS.filter(b => b.testament === "OT"));
  $("newTestament").innerHTML = render(BOOKS.filter(b => b.testament === "NT"));

  document.querySelectorAll(".book-button").forEach(button => {
    button.addEventListener("click", () => {
      const book = button.dataset.book;
      $("searchInput").value = `${book} 1`;
      showView("searchView");
      searchReference(`${book} 1`);
    });
  });
}

function renderRecent() {
  const list = $("recentList");

  if (!state.recent.length) {
    list.innerHTML = `
      <div class="results-empty">
        <div class="empty-icon small">↺</div>
        <strong>No recent references</strong>
        <p>Your searches will appear here.</p>
      </div>`;
    return;
  }

  list.innerHTML = state.recent.map(ref => `
    <div class="recent-item">
      <div>
        <strong>${escapeHTML(ref)}</strong>
        <span>Local search history</span>
      </div>
      <button data-ref="${escapeHTML(ref)}">OPEN</button>
    </div>
  `).join("");

  list.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      $("searchInput").value = button.dataset.ref;
      showView("searchView");
      searchReference(button.dataset.ref);
    });
  });
}

function showView(viewId) {
  document.querySelectorAll(".content-view").forEach(view => {
    view.classList.toggle("active-view", view.id === viewId);
  });
  document.querySelectorAll(".side-button").forEach(button => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
}

let toastTimer;
function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

window.addEventListener("message", event => {
  if (event.data?.type === "KJV_PRESENTATION_READY") {
    state.presentationWindow = event.source;
    $("connectionDot").classList.add("connected");
    $("connectionText").textContent = "TV window connected";
    sendLiveStateToWindow();
  }

  if (event.data?.type === "KJV_PRESENTATION_CLOSED") {
    $("connectionDot").classList.remove("connected");
    $("connectionText").textContent = "TV window not open";
  }
});

$("searchInput").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchReference(event.target.value);
  }
});

$("sendLiveBtn").addEventListener("click", sendLive);
$("openPresentationBtn").addEventListener("click", openPresentation);
$("blankBtn").addEventListener("click", blankTV);
$("previousBtn").addEventListener("click", () => changePreview(-1));
$("nextBtn").addEventListener("click", () => changePreview(1));
$("fontDownBtn").addEventListener("click", () => updateFontSize(-2));
$("fontUpBtn").addEventListener("click", () => updateFontSize(2));

document.querySelectorAll(".side-button").forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

$("clearRecentBtn").addEventListener("click", () => {
  state.recent = [];
  localStorage.removeItem("kjvRecent");
  renderRecent();
  showToast("Recent references cleared.");
});

document.addEventListener("keydown", event => {
  const tag = document.activeElement?.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA";

  if (typing && event.key !== "Escape") return;

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    changePreview(-1);
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    changePreview(1);
  }

  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    sendLive();
  }

  if (!event.ctrlKey && !event.altKey && !event.shiftKey && event.key.toLowerCase() === "b") {
    event.preventDefault();
    blankTV();
  }

  if (!event.ctrlKey && !event.altKey && !event.shiftKey && event.key.toLowerCase() === "f") {
    event.preventDefault();
    if (state.presentationWindow && !state.presentationWindow.closed) {
      state.presentationWindow.postMessage({ type: "KJV_FULLSCREEN" }, "*");
      state.presentationWindow.focus();
    } else {
      openPresentation();
    }
  }
});

document.documentElement.style.setProperty("--preview-font", `${state.fontSize}px`);
$("fontSizeLabel").textContent = `${state.fontSize}px`;
populateQuickRefs();
populateBooks();
renderRecent();
