// PokeAPI Config and Constants
const POKE_API_URL = 'https://pokeapi.co/api/v2';
const MAX_POKEMON_ID = 1025; // As of Gen 9

// Hardcoded Special IDs for fast filtering
const LEGENDARY_IDS = [144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 382, 383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 640, 641, 642, 643, 644, 645, 646, 716, 717, 718, 772, 785, 786, 787, 788, 789, 800, 773, 790, 791, 792, 888, 889, 890, 891, 894, 895, 896, 897, 898, 905, 892, 1001, 1002, 1003, 1004, 1007, 1008, 1014, 1015, 1016, 1017, 1024];
const MYTHICAL_IDS = [151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 720, 721, 801, 802, 807, 808, 809, 893, 1025];

// Generation Data
const GENERATIONS = [
    { id: 1, names: { ko: '1세대', en: 'Gen 1', ja: '第1世代' }, start: 1, end: 151 },
    { id: 2, names: { ko: '2세대', en: 'Gen 2', ja: '第2世代' }, start: 152, end: 251 },
    { id: 3, names: { ko: '3세대', en: 'Gen 3', ja: '第3世代' }, start: 252, end: 386 },
    { id: 4, names: { ko: '4세대', en: 'Gen 4', ja: '第4世代' }, start: 387, end: 493 },
    { id: 5, names: { ko: '5세대', en: 'Gen 5', ja: '第5世代' }, start: 494, end: 649 },
    { id: 6, names: { ko: '6세대', en: 'Gen 6', ja: '第6世代' }, start: 650, end: 721 },
    { id: 7, names: { ko: '7세대', en: 'Gen 7', ja: '第7世代' }, start: 722, end: 809 },
    { id: 8, names: { ko: '8세대', en: 'Gen 8', ja: '第8世代' }, start: 810, end: 905 },
    { id: 9, names: { ko: '9세대', en: 'Gen 9', ja: '第9世代' }, start: 906, end: 1025 }
];

// Type Data
const TYPES = [
    { id: 'normal', names: { ko: '노말', en: 'Normal', ja: 'ノーマル' }, color: 'var(--type-normal)' },
    { id: 'fire', names: { ko: '불꽃', en: 'Fire', ja: 'ほのお' }, color: 'var(--type-fire)' },
    { id: 'water', names: { ko: '물', en: 'Water', ja: 'みず' }, color: 'var(--type-water)' },
    { id: 'electric', names: { ko: '전기', en: 'Electric', ja: 'でんき' }, color: 'var(--type-electric)' },
    { id: 'grass', names: { ko: '풀', en: 'Grass', ja: 'くさ' }, color: 'var(--type-grass)' },
    { id: 'ice', names: { ko: '얼음', en: 'Ice', ja: 'こおり' }, color: 'var(--type-ice)' },
    { id: 'fighting', names: { ko: '격투', en: 'Fighting', ja: 'かくとう' }, color: 'var(--type-fighting)' },
    { id: 'poison', names: { ko: '독', en: 'Poison', ja: 'どく' }, color: 'var(--type-poison)' },
    { id: 'ground', names: { ko: '땅', en: 'Ground', ja: 'じめん' }, color: 'var(--type-ground)' },
    { id: 'flying', names: { ko: '비행', en: 'Flying', ja: 'ひこう' }, color: 'var(--type-flying)' },
    { id: 'psychic', names: { ko: '에스퍼', en: 'Psychic', ja: 'エスパー' }, color: 'var(--type-psychic)' },
    { id: 'bug', names: { ko: '벌레', en: 'Bug', ja: 'むし' }, color: 'var(--type-bug)' },
    { id: 'rock', names: { ko: '바위', en: 'Rock', ja: 'いわ' }, color: 'var(--type-rock)' },
    { id: 'ghost', names: { ko: '고스트', en: 'Ghost', ja: 'ゴースト' }, color: 'var(--type-ghost)' },
    { id: 'dragon', names: { ko: '드래곤', en: 'Dragon', ja: 'ドラゴン' }, color: 'var(--type-dragon)' },
    { id: 'dark', names: { ko: '악', en: 'Dark', ja: 'あく' }, color: 'var(--type-dark)' },
    { id: 'steel', names: { ko: '강철', en: 'Steel', ja: 'はがね' }, color: 'var(--type-steel)' },
    { id: 'fairy', names: { ko: '페어리', en: 'Fairy', ja: 'フェアリー' }, color: 'var(--type-fairy)' }
];

const I18N = {
    'ko': {
        filter_title: '필터 설정', filter_desc: '원하는 조건을 선택하세요', btn_select_all: '전체 선택', btn_deselect_all: '전체 해제',
        gen_title: '세대 (Generation)', type_title: '타입 (Type)', special_title: '특수 (Special)',
        filter_legendary: '전설 포함', filter_mythical: '환상 포함', filter_normal: '일반 포함', option_title: '옵션 설정',
        lang_title: '언어 (Language)', draw_count_title: '뽑을 개수', draw_count_unit: '마리', shiny_prob_title: '이로치 확률',
        main_title: '랜덤 뽑기', draw_instruction: '몬스터볼을 클릭해 포켓몬을 뽑아보세요!', loading_text: '조건에 맞는 포켓몬을 찾는 중...',
        btn_draw_again: '다시 뽑기', stat_height: '키', stat_weight: '몸무게', base_stats_title: '종족값', matchups_title: '방어 상성',
        matchup_4x: '치명적', matchup_2x: '약점', matchup_05x: '반감', matchup_025x: '극반감', matchup_0x: '효과없음',
        badge_shiny: '✨ 이로치', badge_mythical: '환상', badge_legendary: '전설', error_no_pokemon: '조건에 맞는 포켓몬이 없습니다.'
    },
    'en': {
        filter_title: 'Filter Settings', filter_desc: 'Select desired conditions', btn_select_all: 'Select All', btn_deselect_all: 'Deselect All',
        gen_title: 'Generation', type_title: 'Type', special_title: 'Special',
        filter_legendary: 'Include Legendary', filter_mythical: 'Include Mythical', filter_normal: 'Include Normal', option_title: 'Options',
        lang_title: 'Language', draw_count_title: 'Draw Count', draw_count_unit: 'Pkmn', shiny_prob_title: 'Shiny Rate',
        main_title: 'Randomizer', draw_instruction: 'Click the Pokeball to Draw!', loading_text: 'Searching for Pokemon...',
        btn_draw_again: 'Draw Again', stat_height: 'Height', stat_weight: 'Weight', base_stats_title: 'Base Stats', matchups_title: 'Type Matchups',
        matchup_4x: 'Very Weak', matchup_2x: 'Weak', matchup_05x: 'Resist', matchup_025x: 'Strong Resist', matchup_0x: 'Immune',
        badge_shiny: '✨ Shiny', badge_mythical: 'Mythical', badge_legendary: 'Legendary', error_no_pokemon: 'No Pokemon found for these conditions.'
    },
    'ja': {
        filter_title: 'フィルター設定', filter_desc: '条件を選択してください', btn_select_all: 'すべて選択', btn_deselect_all: 'すべて解除',
        gen_title: '世代 (Generation)', type_title: 'タイプ (Type)', special_title: '特殊 (Special)',
        filter_legendary: '伝説を含む', filter_mythical: '幻を含む', filter_normal: '通常を含む', option_title: 'オプション',
        lang_title: '言語 (Language)', draw_count_title: '引く数', draw_count_unit: '匹', shiny_prob_title: '色違い確率',
        main_title: 'ランダムガチャ', draw_instruction: 'モンスターボールをクリック！', loading_text: 'ポケモンを探しています...',
        btn_draw_again: 'もう一度引く', stat_height: '高さ', stat_weight: '重さ', base_stats_title: '種族値', matchups_title: 'タイプ相性',
        matchup_4x: '効果ばつぐん', matchup_2x: '効果ばつぐん', matchup_05x: '効果はいまひとつ', matchup_025x: '効果はいまひとつ', matchup_0x: '効果なし',
        badge_shiny: '✨ 色違い', badge_mythical: '幻', badge_legendary: '伝説', error_no_pokemon: '条件に合うポケモンがいません。'
    }
};

let currentLang = 'ko';

const STAT_NAMES_KO = {
    'hp': { ko: 'HP', en: 'HP', ja: 'HP' },
    'attack': { ko: '공격', en: 'Attack', ja: 'こうげき' },
    'defense': { ko: '방어', en: 'Defense', ja: 'ぼうぎょ' },
    'special-attack': { ko: '특공', en: 'Sp.Atk', ja: 'とくこう' },
    'special-defense': { ko: '특방', en: 'Sp.Def', ja: 'とくぼう' },
    'speed': { ko: '스피드', en: 'Speed', ja: 'すばやさ' }
};

const STAT_COLORS = {
    'hp': '#ff5959',
    'attack': '#f5ac78',
    'defense': '#fae078',
    'special-attack': '#9db7f5',
    'special-defense': '#a7db8d',
    'speed': '#fa92b2'
};

const POKEBALL_TYPES = [
    'poke-ball', 'great-ball', 'ultra-ball', 'master-ball', 'safari-ball', 'fast-ball',
    'level-ball', 'lure-ball', 'heavy-ball', 'love-ball', 'friend-ball', 'moon-ball',
    'sport-ball', 'premier-ball', 'repeat-ball', 'timer-ball', 'nest-ball', 'net-ball',
    'dive-ball', 'luxury-ball', 'heal-ball', 'quick-ball', 'dusk-ball', 'cherish-ball',
    'dream-ball', 'beast-ball'
];

// Initialize App
function init() {
    renderFilters();
    setupEventListeners();
    randomizePokeball();
    updateLanguage();
}

function updateLanguage() {
    const langSelect = document.getElementById('lang-select');
    if (langSelect) currentLang = langSelect.value;
    const dict = I18N[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('#gen-filters .custom-checkbox').forEach((label, i) => {
        const textNode = Array.from(label.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
        if (textNode && GENERATIONS[i]) textNode.textContent = ' ' + GENERATIONS[i].names[currentLang];
    });
    document.querySelectorAll('#type-filters .custom-checkbox').forEach((label, i) => {
        const textNode = Array.from(label.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
        if (textNode && TYPES[i]) textNode.textContent = ' ' + TYPES[i].names[currentLang];
    });
    
    const shinySelect = document.getElementById('shiny-prob');
    if (shinySelect) {
        Array.from(shinySelect.options).forEach(opt => {
            if (opt.value === "0") opt.text = currentLang === 'ko' ? "등장 안함 (0%)" : (currentLang === 'en' ? "Never (0%)" : "出現しない (0%)");
            if (opt.value === "1") opt.text = currentLang === 'ko' ? "무조건 등장 (100%)" : (currentLang === 'en' ? "Always (100%)" : "必ず出現 (100%)");
        });
    }
}

function randomizePokeball() {
    const randomBall = POKEBALL_TYPES[Math.floor(Math.random() * POKEBALL_TYPES.length)];
    btnDraw.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${randomBall}.png`;
}

function renderFilters() {
    // Render Generations
    GENERATIONS.forEach(gen => {
        const label = document.createElement('label');
        label.className = 'custom-checkbox';
        label.innerHTML = `
            <input type="checkbox" name="gen" value="${gen.id}" checked>
            <span class="checkmark"></span>
            ${gen.names['ko']}
        `;
        genFiltersContainer.appendChild(label);
    });

    // Render Types
    TYPES.forEach(type => {
        const label = document.createElement('label');
        label.className = 'custom-checkbox';
        label.innerHTML = `
            <input type="checkbox" name="type" value="${type.id}" checked>
            <span class="checkmark"></span>
            ${type.names['ko']}
        `;
        typeFiltersContainer.appendChild(label);
    });
}

function setupEventListeners() {
    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.addEventListener('change', updateLanguage);

    btnSelectAll.addEventListener('click', () => toggleAllFilters(true));
    btnDeselectAll.addEventListener('click', () => toggleAllFilters(false));
    
    btnDraw.addEventListener('click', startDraw);
    btnDrawAgain.addEventListener('click', () => {
        cardsGrid.innerHTML = '';
        randomizePokeball();
        showState('idle');
    });

    // Card click to flip via Event Delegation
    cardsGrid.addEventListener('click', (e) => {
        const cardFront = e.target.closest('.card-front');
        const cardInner = e.target.closest('.pokemon-card');
        if (cardFront && cardInner) {
            cardInner.classList.add('flipped');
        }
    });
}

function toggleAllFilters(checked) {
    document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(cb => {
        cb.checked = checked;
    });
}

function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.remove('hidden');
    setTimeout(() => {
        toastEl.classList.add('hidden');
    }, 3000);
}

function showState(state) {
    idleState.classList.add('hidden');
    loadingState.classList.add('hidden');
    resultState.classList.add('hidden');
    
    if (state === 'idle') idleState.classList.remove('hidden');
    if (state === 'loading') loadingState.classList.remove('hidden');
    if (state === 'result') resultState.classList.remove('hidden');
}

// Calculate Type Matchups
async function calculateTypeMatchups(pokeTypes) {
    const multipliers = {};
    TYPES.forEach(t => multipliers[t.id] = 1);

    try {
        const typePromises = pokeTypes.map(t => fetch(`${POKE_API_URL}/type/${t}`).then(res => res.json()));
        const typeDatas = await Promise.all(typePromises);

        typeDatas.forEach(data => {
            const relations = data.damage_relations;
            
            relations.double_damage_from.forEach(t => {
                if (multipliers[t.name] !== undefined) multipliers[t.name] *= 2;
            });
            relations.half_damage_from.forEach(t => {
                if (multipliers[t.name] !== undefined) multipliers[t.name] *= 0.5;
            });
            relations.no_damage_from.forEach(t => {
                if (multipliers[t.name] !== undefined) multipliers[t.name] *= 0;
            });
        });

    } catch (err) {
        console.error("Failed to fetch type relations", err);
    }
    
    return multipliers;
}

// Draw Logic
async function startDraw() {
    // 브라우저의 오디오 자동재생 정책을 통과하기 위해 클릭 이벤트 직후에 오디오 재생 권한을 얻습니다.
    shinyAudio.play().catch(() => {});
    shinyAudio.pause();
    shinyAudio.currentTime = 0;

    const selectedGens = Array.from(document.querySelectorAll('input[name="gen"]:checked')).map(cb => parseInt(cb.value));
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
    
    const filterLegendary = document.getElementById('filter-legendary').checked;
    const filterMythical = document.getElementById('filter-mythical').checked;
    const filterNormal = document.getElementById('filter-normal').checked;

    let drawCount = parseInt(drawCountInput.value) || 1;
    if (drawCount < 1) drawCount = 1;
    if (drawCount > 6) drawCount = 6;
    drawCountInput.value = drawCount; // Update input field if auto-clamped

    if (selectedGens.length === 0 || selectedTypes.length === 0) {
        showToast("하나 이상의 세대와 타입을 선택해주세요!");
        return;
    }

    if (!filterLegendary && !filterMythical && !filterNormal) {
        showToast("일반/전설/환상 중 하나 이상은 선택해야 합니다!");
        return;
    }

    let idPool = [];
    selectedGens.forEach(genId => {
        const gen = GENERATIONS.find(g => g.id === genId);
        if (gen) {
            for (let i = gen.start; i <= gen.end; i++) {
                idPool.push(i);
            }
        }
    });

    // Fast Filtering over predefined Special IDs
    if (!filterNormal) {
        let validSpecialIds = [];
        if (filterLegendary) validSpecialIds.push(...LEGENDARY_IDS);
        if (filterMythical) validSpecialIds.push(...MYTHICAL_IDS);
        idPool = idPool.filter(id => validSpecialIds.includes(id));
    } else {
        if (!filterLegendary) idPool = idPool.filter(id => !LEGENDARY_IDS.includes(id));
        if (!filterMythical) idPool = idPool.filter(id => !MYTHICAL_IDS.includes(id));
    }

    if (idPool.length === 0) {
        showToast("선택된 세대에 해당하는 포켓몬이 없습니다.");
        return;
    }

    btnDraw.classList.add('shake-animation');
    
    setTimeout(async () => {
        btnDraw.classList.remove('shake-animation');
        showState('loading');
        cardsGrid.innerHTML = '';
        
        let foundPokemons = [];
        idPool = idPool.sort(() => Math.random() - 0.5);

        const MAX_POOLS = 300; 
        const BATCH_SIZE = 15;
        
        for (let i = 0; i < idPool.length && foundPokemons.length < drawCount; i += BATCH_SIZE) {
            if (i > MAX_POOLS) break;
            
            const batchIds = idPool.slice(i, i + BATCH_SIZE);
            const batchPromises = batchIds.map(async (pokeId) => {
                try {
                    const speciesRes = await fetch(`${POKE_API_URL}/pokemon-species/${pokeId}`);
                    if (!speciesRes.ok) return null;
                    const speciesData = await speciesRes.json();
                    
                    const isLegendary = speciesData.is_legendary;
                    const isMythical = speciesData.is_mythical;
                    const isNormal = !isLegendary && !isMythical;

                    if ((isLegendary && !filterLegendary) || 
                        (isMythical && !filterMythical) || 
                        (isNormal && !filterNormal)) {
                        return null; 
                    }

                    // Nerf spawn probability for Legendary/Mythical by discarding them 90% of the time
                    if ((isLegendary || isMythical) && Math.random() >= 0.1) {
                        return null; 
                    }

                    const pokeRes = await fetch(`${POKE_API_URL}/pokemon/${pokeId}`);
                    if (!pokeRes.ok) return null;
                    const pokeData = await pokeRes.json();
                    
                    const pokeTypes = pokeData.types.map(t => t.type.name);
                    const hasMatchingType = pokeTypes.some(t => selectedTypes.includes(t));

                    if (!hasMatchingType) return null;

                    const probStr = shinyProbInput.value;
                    let probability = 0;
                    if (probStr.includes('/')) {
                        const [num, den] = probStr.split('/');
                        probability = parseInt(num) / parseInt(den);
                    } else {
                        probability = parseFloat(probStr);
                    }
                    const isShiny = Math.random() < probability;
                    const matchups = await calculateTypeMatchups(pokeTypes);
                    
                    const homeImg = pokeData.sprites.other.home;
                    const officialImg = pokeData.sprites.other['official-artwork'];
                    const defaultImg = (isShiny ? (homeImg?.front_shiny || officialImg?.front_shiny) : (homeImg?.front_default || officialImg?.front_default)) || pokeData.sprites.front_default;

                    return {
                        id: pokeData.id,
                        nameEn: pokeData.name,
                        types: pokeTypes,
                        height: pokeData.height,
                        weight: pokeData.weight,
                        stats: pokeData.stats,
                        matchups: matchups,
                        image: defaultImg,
                        species: speciesData,
                        isLegendary,
                        isMythical,
                        isShiny
                    };
                } catch (err) {
                    console.error("Fetch error:", err);
                    return null;
                }
            });

            const results = await Promise.all(batchPromises);
            for (const p of results) {
                if (p && foundPokemons.length < drawCount) {
                    foundPokemons.push(p);
                }
            }
        }

        if (foundPokemons.length > 0) {
            if (foundPokemons.length < drawCount) {
                showToast(`조건에 맞는 포켓몬이 적어 ${foundPokemons.length}마리만 찾았습니다.`);
            }
            renderCards(foundPokemons);
        } else {
            showToast("선택한 필터 조합에 해당하는 포켓몬을 찾기 어렵습니다. 조건을 완화해주세요.");
            showState('idle');
        }

    }, 800); 
}

function renderCards(pokemons) {
    showState('result');
    cardsGrid.innerHTML = '';
    
    const count = pokemons.length;
    let scale = 1;
    if (count >= 5) scale = 0.65;
    else if (count >= 4) scale = 0.75;
    else if (count >= 3) scale = 0.85;
    
    cardsGrid.style.setProperty('--card-scale', scale);
    let shinySoundPlayed = false;
    
    pokemons.forEach((pokemon, index) => {
        const cardEl = createCardElement(pokemon);
        cardsGrid.appendChild(cardEl);
        
        // Auto-flip and animate stats
        setTimeout(() => {
            const cardInner = cardEl.querySelector('.pokemon-card');
            if (cardInner) {
                cardInner.classList.add('flipped');
                if (pokemon.isShiny && !shinySoundPlayed) {
                    shinyAudio.currentTime = 0;
                    shinyAudio.play().catch(e => console.error("Audio play failed:", e));
                    shinySoundPlayed = true;
                }
            }
        }, 500 + (index * 200));
        
        setTimeout(() => {
            const innerBars = cardEl.querySelectorAll('.stat-bar-inner');
            innerBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }, 1100 + (index * 200));
    });
}

function createCardElement(pokemon) {
    const container = document.createElement('div');
    container.className = 'pokemon-card-container';
    container.dataset.pokeId = pokemon.id;
    
    const formattedId = `#${String(pokemon.id).padStart(3, '0')}`;
    
    const langSelect = document.getElementById('lang-select');
    const currentLang = langSelect ? langSelect.value : 'ko';
    
    let nameObj = pokemon.species.names.find(n => n.language.name === currentLang);
    if (!nameObj && currentLang === 'ja') nameObj = pokemon.species.names.find(n => n.language.name === 'ja-Hrkt');
    
    const pokeName = nameObj ? nameObj.name : pokemon.nameEn;
    
    const primaryType = TYPES.find(t => t.id === pokemon.types[0]);
    const bgStyle = primaryType ? `background: linear-gradient(135deg, ${primaryType.color} 0%, rgba(30, 41, 59, 0.9) 100%);` : '';

    const typesHtml = pokemon.types.map(typeName => {
        const typeInfo = TYPES.find(t => t.id === typeName);
        return typeInfo ? `<span class="type-badge" style="background-color: ${typeInfo.color}">${typeInfo.names[currentLang]}</span>` : '';
    }).join('');

    const statsHtml = pokemon.stats.map(stat => {
        const statName = stat.stat.name;
        const statValue = stat.base_stat;
        const percentage = Math.min((statValue / 255) * 100, 100);
        const color = STAT_COLORS[statName] || '#fff';
        const label = I18N[currentLang][statName] || (STAT_NAMES_KO[statName] ? STAT_NAMES_KO[statName][currentLang] : statName);
        return `
            <div class="stat-bar-row">
                <div class="stat-bar-label">${label}</div>
                <div class="stat-bar-val">${statValue}</div>
                <div class="stat-bar-outer">
                    <div class="stat-bar-inner" data-width="${percentage}%" style="width: 0%; background-color: ${color};"></div>
                </div>
            </div>
        `;
    }).join('');

    let matchupsHtml = '';
    const groups = { 4: [], 2: [], 0.5: [], 0.25: [], 0: [] };
    Object.entries(pokemon.matchups).forEach(([typeId, mult]) => { if (groups[mult]) groups[mult].push(typeId); });
    
    const renderMatchupGroup = (multiplier, label, typesArr) => {
        if (typesArr.length === 0) return '';
        let colorCls = multiplier > 1 ? 'weakness' : (multiplier === 0 ? 'immune' : 'resistance');
        const typesStr = typesArr.map(typeId => {
            const typeInfo = TYPES.find(t => t.id === typeId);
            return typeInfo ? `<span class="matchup-badge" style="background-color: ${typeInfo.color}">${typeInfo.names[currentLang]}</span>` : '';
        }).join('');
        
        return `
            <div class="matchup-row ${colorCls}">
                <div class="matchup-label">${label}</div>
                <div class="matchup-types">${typesStr}</div>
            </div>
        `;
    };

    matchupsHtml += renderMatchupGroup(4, I18N[currentLang]['matchup_4x'], groups[4]);
    matchupsHtml += renderMatchupGroup(2, I18N[currentLang]['matchup_2x'], groups[2]);
    matchupsHtml += renderMatchupGroup(0.5, I18N[currentLang]['matchup_05x'], groups[0.5]);
    matchupsHtml += renderMatchupGroup(0.25, I18N[currentLang]['matchup_025x'], groups[0.25]);
    matchupsHtml += renderMatchupGroup(0, I18N[currentLang]['matchup_0x'], groups[0]);

    let badgesHtml = '';
    if (pokemon.isShiny) badgesHtml += `<span class="special-badge shiny-badge">${I18N[currentLang]['badge_shiny']}</span>`;
    if (pokemon.isMythical) badgesHtml += `<span class="special-badge">${I18N[currentLang]['badge_mythical']}</span>`;
    else if (pokemon.isLegendary) badgesHtml += `<span class="special-badge" style="background: linear-gradient(135deg, #a855f7, #7e22ce)">${I18N[currentLang]['badge_legendary']}</span>`;

    container.innerHTML = `
        <div class="pokemon-card">
            <div class="card-inner">
                <div class="card-front">
                    <div class="pokeball-bg"></div>
                </div>
                <div class="card-back" style="${bgStyle}">
                    <button class="btn-reroll" onclick="redrawSingleCard(this)" title="이 포켓몬만 다시 뽑기">🔄</button>
                    <div class="card-header">
                        <span class="poke-id">${formattedId}</span>
                        <h2 class="poke-name">${pokeName}</h2>
                    </div>
                    <div class="poke-image-container">
                        <img src="${pokemon.image}" alt="Pokemon" class="poke-image">
                    </div>
                    <div class="poke-types">
                        ${typesHtml}
                    </div>
                    <div class="poke-stats">
                        <div class="stat-row">
                            <span class="stat-name">${I18N[currentLang]['stat_height']}</span>
                            <span class="stat-value">${(pokemon.height / 10).toFixed(1)}m</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-name">${I18N[currentLang]['stat_weight']}</span>
                            <span class="stat-value">${(pokemon.weight / 10).toFixed(1)}kg</span>
                        </div>
                    </div>
                    <div class="poke-base-stats">
                        <h4 class="base-stats-title">${I18N[currentLang]['base_stats_title']}</h4>
                        <div class="stat-bars">
                            ${statsHtml}
                        </div>
                    </div>
                    <div class="poke-matchups-container">
                        <h4 class="base-stats-title">${I18N[currentLang]['matchups_title']}</h4>
                        <div class="matchups-list">
                            ${matchupsHtml}
                        </div>
                    </div>
                    <div class="card-badges">
                        ${badgesHtml}
                    </div>
                </div>
            </div>
        </div>
    `;

    return container;
}

// Draw a single card individually
async function redrawSingleCard(btn) {
    // 개별 다시보기 버튼 클릭 시에도 재생 권한 통과 처리
    shinyAudio.play().catch(() => {});
    shinyAudio.pause();
    shinyAudio.currentTime = 0;

    const containerEl = btn.closest('.pokemon-card-container');
    if (!containerEl) return;
    
    const cardInner = containerEl.querySelector('.card-inner');
    if (cardInner) cardInner.classList.remove('flipped');
    
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'card-loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner" style="width: 40px; height: 40px; border-width: 4px;"></div>';
    containerEl.appendChild(loadingOverlay);

    const selectedGens = Array.from(document.querySelectorAll('input[name="gen"]:checked')).map(cb => parseInt(cb.value));
    const selectedTypes = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
    const filterLegendary = document.getElementById('filter-legendary').checked;
    const filterMythical = document.getElementById('filter-mythical').checked;
    const filterNormal = document.getElementById('filter-normal').checked;

    if (selectedGens.length === 0 || selectedTypes.length === 0) {
        showToast("하나 이상의 세대와 타입을 선택해주세요!");
        loadingOverlay.remove();
        if (cardInner) cardInner.classList.add('flipped');
        return;
    }

    if (!filterLegendary && !filterMythical && !filterNormal) {
        showToast("일반/전설/환상 중 하나 이상은 선택해야 합니다!");
        loadingOverlay.remove();
        if (cardInner) cardInner.classList.add('flipped');
        return;
    }

    let idPool = [];
    selectedGens.forEach(genId => {
        const gen = GENERATIONS.find(g => g.id === genId);
        if (gen) {
            for (let i = gen.start; i <= gen.end; i++) idPool.push(i);
        }
    });

    if (!filterNormal) {
        let validSpecialIds = [];
        if (filterLegendary) validSpecialIds.push(...LEGENDARY_IDS);
        if (filterMythical) validSpecialIds.push(...MYTHICAL_IDS);
        idPool = idPool.filter(id => validSpecialIds.includes(id));
    } else {
        if (!filterLegendary) idPool = idPool.filter(id => !LEGENDARY_IDS.includes(id));
        if (!filterMythical) idPool = idPool.filter(id => !MYTHICAL_IDS.includes(id));
    }

    const currentIds = Array.from(document.querySelectorAll('.pokemon-card-container')).map(el => parseInt(el.dataset.pokeId));
    idPool = idPool.filter(id => !currentIds.includes(id));

    if (idPool.length === 0) {
        showToast("조건에 해당하는 다른 포켓몬이 없습니다.");
        loadingOverlay.remove();
        if (cardInner) cardInner.classList.add('flipped');
        return;
    }

    setTimeout(async () => {
        let foundPokemon = null;
        idPool = idPool.sort(() => Math.random() - 0.5);

        const MAX_POOLS = 100;
        const BATCH_SIZE = 10;
        
        for (let i = 0; i < idPool.length && !foundPokemon; i += BATCH_SIZE) {
            if (i > MAX_POOLS) break;
            
            const batchIds = idPool.slice(i, i + BATCH_SIZE);
            const batchPromises = batchIds.map(async (pokeId) => {
                try {
                    const speciesRes = await fetch(`${POKE_API_URL}/pokemon-species/${pokeId}`);
                    if (!speciesRes.ok) return null;
                    const speciesData = await speciesRes.json();
                    
                    const isLegendary = speciesData.is_legendary;
                    const isMythical = speciesData.is_mythical;
                    const isNormal = !isLegendary && !isMythical;

                    if ((isLegendary && !filterLegendary) || 
                        (isMythical && !filterMythical) || 
                        (isNormal && !filterNormal)) return null; 

                    // Nerf spawn probability for Legendary/Mythical by discarding them 90% of the time
                    if ((isLegendary || isMythical) && Math.random() >= 0.1) {
                        return null; 
                    }

                    const pokeRes = await fetch(`${POKE_API_URL}/pokemon/${pokeId}`);
                    if (!pokeRes.ok) return null;
                    const pokeData = await pokeRes.json();
                    
                    const pokeTypes = pokeData.types.map(t => t.type.name);
                    const hasMatchingType = pokeTypes.some(t => selectedTypes.includes(t));

                    if (!hasMatchingType) return null;

                    const probStr = shinyProbInput.value;
                    let probability = 0;
                    if (probStr.includes('/')) {
                        const [num, den] = probStr.split('/');
                        probability = parseInt(num) / parseInt(den);
                    } else {
                        probability = parseFloat(probStr);
                    }
                    const isShiny = Math.random() < probability;
                    const matchups = await calculateTypeMatchups(pokeTypes);
                    
                    const homeImg = pokeData.sprites.other.home;
                    const officialImg = pokeData.sprites.other['official-artwork'];
                    const defaultImg = (isShiny ? (homeImg?.front_shiny || officialImg?.front_shiny) : (homeImg?.front_default || officialImg?.front_default)) || pokeData.sprites.front_default;

                    return {
                        id: pokeData.id,
                        nameEn: pokeData.name,
                        types: pokeTypes,
                        height: pokeData.height,
                        weight: pokeData.weight,
                        stats: pokeData.stats,
                        matchups: matchups,
                        image: defaultImg,
                        species: speciesData,
                        isLegendary,
                        isMythical,
                        isShiny
                    };
                } catch (err) {
                    return null;
                }
            });

            const results = await Promise.all(batchPromises);
            for (const p of results) {
                if (p) { foundPokemon = p; break; }
            }
        }

        if (foundPokemon) {
            const newCardEl = createCardElement(foundPokemon);
            containerEl.outerHTML = newCardEl.outerHTML; 
            
            setTimeout(() => {
                const refreshedContainer = document.querySelector(`.pokemon-card-container[data-poke-id="${foundPokemon.id}"]`);
                if (refreshedContainer) {
                    const newInner = refreshedContainer.querySelector('.pokemon-card');
                    if (newInner) {
                        newInner.classList.add('flipped');
                        if (foundPokemon.isShiny) {
                            shinyAudio.currentTime = 0;
                            shinyAudio.play().catch(e => console.error("Audio play failed:", e));
                        }
                    }
                    
                    setTimeout(() => {
                        const innerBars = refreshedContainer.querySelectorAll('.stat-bar-inner');
                        innerBars.forEach(bar => { bar.style.width = bar.getAttribute('data-width'); });
                    }, 600);
                }
            }, 50);
        } else {
            showToast("조건에 맞는 포켓몬을 찾지 못했습니다.");
            loadingOverlay.remove();
            if (cardInner) cardInner.classList.add('flipped');
        }
    }, 10);
}

// Start
init();
