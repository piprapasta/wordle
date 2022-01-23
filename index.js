
let wordList = ['ambur', 'kalad', 'aasta', 'ainus', 'aitäh', 'ajama', 'alarm', 'alati', 'album', 'algul', 'algus', 'alles', 'alluv', 'ambur', 'andma', 'annus', 'areng', 'armas', 'armee', 'asend', 'asuma', 'autor', 'avama', 'beebi', 'blond', 'büroo', 'dieet', 'dress', 'edasi', 'eelis', 'eemal', 'eesti', 'efekt', 'ehkki', 'ehtne', 'eilne', 'eitav', 'eksam', 'elama', 'elamu', 'elund', 'emane', 'enese', 'erand', 'eriti', 'esile', 'etapp', 'finiš', 'firma', 'flööt', 'gramm', 'gripp', 'grupp', 'haige', 'harva', 'heaks', 'hilja', 'hinne', 'hoiak', 'hoius', 'homme', 'homne', 'hoone', 'hulka', 'häire', 'hämar', 'härra', 'hästi', 'igati', 'ilmne', 'imema', 'inetu', 'ingel', 'isane', 'isegi', 'jaoks', 'jooga', 'jooks', 'jooma', 'juhus', 'julge', 'jumal', 'juuli', 'juuni', 'juust', 'jälle', 'jänes', 'järel', 'järgi', 'järsk', 'jätma', 'jääma', 'kaart', 'kaasa', 'kahju', 'kaine', 'kajut', 'kakao', 'kalad', 'kamin', 'kanal', 'kanep', 'kange', 'kassa', 'kaste', 'kasum', 'katki', 'katma', 'katse', 'katus', 'kaudu', 'kauge', 'kauss', 'kaval', 'keegi', 'keeld', 'keema', 'kerge', 'keset', 'kevad', 'kiire', 'kinni', 'kirik', 'kirju', 'kirre', 'kirss', 'kirst', 'klaas', 'klahv', 'klass', 'kleit', 'klubi', 'kogum', 'kogus', 'kohal', 'kohev', 'kohta', 'kohus', 'kokku', 'kolju', 'komme', 'konto', 'konts', 'korts', 'kraad', 'kraan', 'kreem', 'kriis', 'kroon', 'krunt', 'kruus', 'kruvi', 'kuigi', 'kukal', 'kulul', 'kunst', 'kurat', 'kurss', 'kutse', 'kuues', 'kuusk', 'käest', 'käima', 'käive', 'kätte', 'kääne', 'kõige', 'kõlar', 'kõrge', 'kõver', 'kübar', 'külas', 'külge', 'külla', 'kümme', 'kütma', 'kütus', 'lahja', 'lahke', 'lahku', 'lahti', 'lahus', 'laine', 'laisk', 'laius', 'lausa', 'lause', 'leedu', 'levik', 'lihas', 'liiga', 'liige', 'lilla', 'loend', 'loeng', 'looma', 'lähim', 'lõbus', 'lõuna', 'lörts', 'lööma', 'lööve', 'maast', 'madal', 'magus', 'maine', 'makse', 'masin', 'matma', 'matus', 'medal', 'meene', 'menüü', 'minek', 'mingi', 'minut', 'miski', 'mitte', 'moodi', 'mudel', 'mugav', 'muide', 'muidu', 'mujal', 'mulje', 'mullu', 'märts', 'mõnus', 'mõõde', 'mööda', 'müüja', 'müüma', 'naine', 'nemad', 'niigi', 'nojah', 'notar', 'nutma', 'nädal', 'näide', 'näima', 'nõnda', 'ohutu', 'ohver', 'olema', 'olend', 'omama', 'omand', 'omane', 'ometi', 'ooper', 'ootus', 'oranž', 'organ', 'oskus', 'ostja', 'ostma', 'otsas', 'otsus', 'paber', 'pagar', 'pagas', 'paiku', 'palav', 'palju', 'palun', 'palve', 'panus', 'paras', 'parem', 'pasta', 'peagi', 'peale', 'pealt', 'pehme', 'petma', 'pidev', 'pidur', 'pigem', 'pihta', 'pilet', 'pinge', 'pipar', 'pisar', 'pisut', 'plaan', 'plaat', 'plast', 'plats', 'plekk', 'pliit', 'ploom', 'pluss', 'pluus', 'poiss', 'poole', 'poolt', 'pooma', 'praad', 'praam', 'praht', 'proov', 'proua', 'pruun', 'pruut', 'prügi', 'pudel', 'puder', 'puhas', 'puhul', 'punkt', 'purju', 'päike', 'päris', 'põder', 'põnev', 'põrgu', 'pöial', 'pööre', 'püsiv', 'püsti', 'range', 'ranne', 'raske', 'ratas', 'ravim', 'redel', 'redis', 'reede', 'reket', 'riiul', 'rikas', 'rikki', 'ringi', 'risti', 'roosa', 'rubla', 'rukis', 'rumal', 'ruttu', 'rätik', 'saade', 'saaja', 'saama', 'sadam', 'saksa', 'salat', 'samas', 'samet', 'seade', 'sealt', 'seast', 'seega', 'seeme', 'seest', 'sekka', 'selge', 'selts', 'sepik', 'sibul', 'sinep', 'sinna', 'sirge', 'sisse', 'skeem', 'sobiv', 'soeng', 'soome', 'sport', 'start', 'stiil', 'suits', 'sulud', 'summa', 'surnu', 'surve', 'suund', 'suusk', 'sääsk', 'sõber', 'sõdur', 'sõnum', 'sööma', 'sügav', 'sügis', 'süles', 'sülle', 'süüdi', 'tabel', 'tahke', 'takso', 'talje', 'tants', 'tapma', 'tarve', 'tasku', 'tatar', 'taust', 'teade', 'teave', 'teema', 'teene', 'tegur', 'tehas', 'teine', 'tekst', 'teler', 'tempo', 'terav', 'terve', 'tihti', 'toime', 'tomat', 'toode', 'tooma', 'traat', 'trahv', 'tramm', 'trenn', 'trepp', 'triip', 'trikk', 'troll', 'trumm', 'tubli', 'tugev', 'tuhat', 'tuisk', 'tulek', 'tulev', 'tunne', 'tänan', 'tänav', 'täpne', 'tõend', 'tõlge', 'tõttu', 'töötu', 'tütar', 'tüütu', 'tšekk', 'udune', 'uhkus', 'ujula', 'ujuma', 'umbes', 'ummik', 'unine', 'uriin', 'uudis', 'vaade', 'vaene', 'vagun', 'vahel', 'vaher', 'vahva', 'valge', 'valik', 'valus', 'valve', 'vanem', 'vangi', 'vanur', 'vanus', 'varas', 'varem', 'vares', 'vasak', 'vastu', 'vedel', 'veidi', 'video', 'vihik', 'vihje', 'viies', 'viima', 'viisa', 'viiul', 'voodi', 'vorst', 'vähem', 'väide', 'väike', 'välja', 'värav', 'väärt', 'võima', 'võime', 'võlur', 'võrra', 'võtma', 'ämber', 'äärde', 'ääres', 'õhuke', 'õieti', 'õigus', 'õppus', 'õudne', 'öösel', 'ühend', 'ühine', 'ühing', 'üksik', 'ükski', 'üksus', 'üldse', 'ümber', 'üpris', 'žürii'
];
let randomIndex = Math.floor(Math.random() * wordList.length)
let secret = wordList[randomIndex]
let currentAttempt = ''
let history = []

let grid = document.getElementById("grid")

buildGrid()
updateGrid()
window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e) {
    let letter = e.key.toLowerCase()
    if (letter === 'enter') {
        if (currentAttempt.length < 5) {
            return
        }
        if (!wordList.includes(currentAttempt)) {
            alert('Sellist sõna pole olemas?')
            return
        }
        history.push(currentAttempt)
        currentAttempt = ''
    } else if (letter === 'backspace') {
        currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1)
    } else if (letter.length === 1) {
        if (currentAttempt.length < 5) {
            currentAttempt += letter
        }
    }
    updateGrid()
}

function buildGrid() {
    if (!hasOneDayPassed()) {
        return false;
    }
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('div')
            cell.className = 'cell'
            cell.textContent = ''
            row.appendChild(cell)
        }
        grid.appendChild(row)
    }
}

function updateGrid() {
    let row = grid.firstChild
    for (let attempt of history) {
        drawAttempt(row, attempt, false)
        row = row.nextSibling
    }
    drawAttempt(row, currentAttempt, true)
}
function drawAttempt(row, attempt, isCurrent) {
    for (let i = 0; i < 5; i++) {
        let cell = row.children[i]
        if (attempt[i] !== undefined) {
            cell.textContent = attempt[i]
        } else {
            cell.innerHTML = '<div style="opacity: 0">X</div>'
        }
        if (isCurrent) {
            cell.style.backgroundColor = '#111'
        } else {
            cell.style.backgroundColor = getBgColor(attempt, i)
        }
    }
}

function getBgColor(attempt, i) {
    let  correctLetter = secret[i]
    let attemptLetter = attempt[i]
    if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
        return '#212121'
    }
    if (correctLetter === attemptLetter) {
        return '#538d4e'
    }
    return '#b59f3b'
}

function hasOneDayPassed() {
let date = new Date().toLocaleDateString();
if (localStorage.getItem('date') != null || localStorage.getItem('date') === date) {
    alert(localStorage.getItem('date'))
    return false;
}
localStorage.setItem('date', date);
return true;
}
