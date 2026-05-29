const imageBase = "assets/question-images/";

const questionDatabase = [
  {
    id: 1,
    topic: "Laboratory safety",
    question: "If a chemical spills into our eye, what should we do?",
    options: {
      A: "Close the eye and take a rest.",
      B: "Wash the eye with tap water.",
      C: "Wash the eye using an eye wash bottle.",
      D: "Wipe the eye with tissue paper."
    },
    optionVocab: {
      A: [{ term: "Close", translation: "閉上" }, { term: "take a rest", translation: "休息一下" }],
      B: [{ term: "Wash", translation: "清洗" }, { term: "tap water", translation: "自來水" }],
      C: [{ term: "using", translation: "使用" }, { term: "eye wash bottle", translation: "洗眼瓶" }],
      D: [{ term: "Wipe", translation: "擦拭 / 抹" }, { term: "tissue paper", translation: "紙巾" }]
    },
    decoderChunks: [
      { eng: "If a chemical spills", translation: "如果化學品濺出" },
      { eng: "into our eye,", translation: "進入我們的眼睛，" },
      { eng: "what should we do?", translation: "我們應該做甚麼？" }
    ],
    correctAnswer: "C",
    visual: {
      image: "q01-eye-wash.png",
      alt: "A student rinsing one eye with an eye wash bottle in a science laboratory."
    },
    meaningZh: "「如果化學品濺入我們的眼睛，我們應該怎樣做？」",
    hint: "呢題考實驗室安全。眼睛入咗化學品，重點係要即刻用專門清洗眼睛的工具沖走有害物，唔可以抹、唔可以等、亦唔應該亂用水龍頭直射。",
    keywords: [
      { word: "chemical", zh: "化學品", desc: "實驗室常見物質，有些會刺激或腐蝕皮膚和眼睛。" },
      { word: "spills", zh: "濺出 / 灑出", desc: "液體意外流到容器外面。" },
      { word: "eye wash bottle", zh: "洗眼瓶", desc: "專門用來在緊急情況下清洗眼睛的安全器材。" },
      { word: "wipe", zh: "擦拭", desc: "用紙或布摩擦表面；眼睛受化學品污染時不應這樣做。" }
    ],
    explanation: {
      A: "不正確。閉眼休息不能移走化學品，反而會讓有害物留在眼睛表面。",
      B: "不正確。普通自來水和水龍頭水壓未必適合直接沖眼，題目要找最合適的實驗室安全做法。",
      C: "正確！洗眼瓶是用來清洗眼睛的安全器材，可以把化學品沖走。",
      D: "不正確。用紙巾擦眼會摩擦眼球，可能令傷害更嚴重。"
    }
  },
  {
    id: 2,
    topic: "Measuring instruments",
    question: "Which of the following instruments is the most accurate in measuring 60 cm³ of water?",
    options: {
      A: "Measuring cylinder (100 cm³)",
      B: "Beaker (100 cm³)",
      C: "Spoon",
      D: "Measuring jug (500 cm³)"
    },
    optionVocab: {
      A: [{ term: "Measuring cylinder", translation: "量筒" }, { term: "accurate", translation: "準確" }],
      B: [{ term: "Beaker", translation: "燒杯" }],
      C: [{ term: "Spoon", translation: "匙 / 藥匙" }],
      D: [{ term: "Measuring jug", translation: "量杯 / 量壺" }]
    },
    decoderChunks: [
      { eng: "Which of the following instruments", translation: "以下哪一種儀器" },
      { eng: "is the most accurate", translation: "是最準確的" },
      { eng: "in measuring 60 cm³ of water?", translation: "用來量度 60 cm³ 的水？" }
    ],
    correctAnswer: "A",
    visual: {
      image: "q02-measuring-cylinder.png",
      alt: "A measuring cylinder compared with a beaker, spoon and measuring jug.",
      overlays: [
        { kind: "badge", text: "A", x: 50, y: 43 },
        { kind: "badge", text: "B", x: 20, y: 58, tone: "alt" },
        { kind: "badge", text: "C", x: 34, y: 81, tone: "alt" },
        { kind: "badge", text: "D", x: 80, y: 58, tone: "alt" }
      ]
    },
    meaningZh: "「以下哪種儀器量度 60 cm³ 水最準確？」",
    hint: "見到 accurate，就諗刻度要細、讀數要清楚。量筒又高又窄，刻度密，量 60 cm³ 水最可靠。",
    keywords: [
      { word: "instrument", zh: "儀器", desc: "用來量度、觀察或進行實驗的工具。" },
      { word: "accurate", zh: "準確", desc: "量度結果接近真實值，誤差小。" },
      { word: "measuring cylinder", zh: "量筒", desc: "用來較準確量度液體體積的圓筒形儀器。" },
      { word: "cm³", zh: "立方厘米", desc: "體積單位；1 cm³ 等於 1 mL。" }
    ],
    explanation: {
      A: "正確！量筒有清楚而密的刻度，最適合量度 60 cm³ 水。",
      B: "不正確。燒杯主要用來盛載、混合或加熱液體，刻度較粗略。",
      C: "不正確。匙沒有刻度，不能準確量度液體體積。",
      D: "不正確。500 cm³ 量杯容量太大，刻度較疏，量 60 cm³ 不夠準確。"
    }
  },
  {
    id: 3,
    topic: "Bunsen flame",
    question: "Which of the following statements about the Bunsen flame is correct?",
    options: {
      A: "The yellow flame is hotter than the blue flame.",
      B: "The yellow flame is luminous and its shape is regular.",
      C: "The blue flame is hotter than the yellow flame.",
      D: "The blue flame is non-luminous and its shape is irregular."
    },
    optionVocab: {
      A: [{ term: "hotter", translation: "較熱" }],
      B: [{ term: "luminous", translation: "發光 / 明亮" }, { term: "regular", translation: "規則" }],
      C: [{ term: "blue flame", translation: "藍色火焰" }],
      D: [{ term: "non-luminous", translation: "不發光 / 不明亮" }, { term: "irregular", translation: "不規則" }]
    },
    decoderChunks: [
      { eng: "Which of the following statements", translation: "以下哪一句陳述" },
      { eng: "about the Bunsen flame", translation: "關於本生燈火焰" },
      { eng: "is correct?", translation: "是正確的？" }
    ],
    correctAnswer: "C",
    visual: {
      image: "q03-bunsen-flame.png",
      alt: "A yellow Bunsen flame and a blue Bunsen flame side by side."
    },
    meaningZh: "「以下哪句關於本生燈火焰的說法正確？」",
    hint: "黃色火焰比較易見，叫安全焰，但溫度較低；藍色火焰氧氣較足，燃燒較完全，所以更熱。",
    keywords: [
      { word: "Bunsen flame", zh: "本生燈火焰", desc: "本生燈燃燒時產生的火焰，可分黃色安全焰和藍色加熱焰。" },
      { word: "luminous", zh: "明亮的", desc: "會發出明顯光亮；黃色火焰較明亮。" },
      { word: "non-luminous", zh: "不明亮的", desc: "不容易看見；藍色火焰較不明亮。" },
      { word: "blue flame", zh: "藍色火焰", desc: "空氣孔打開時產生，溫度較高，適合加熱。" }
    ],
    explanation: {
      A: "不正確。黃色火焰較易見，但不是較熱。",
      B: "不正確。黃色火焰是 luminous，但形狀通常較不規則。",
      C: "正確！藍色火焰燃燒較完全，溫度比黃色火焰高。",
      D: "不正確。藍色火焰是 non-luminous，但形狀較規則，不是 irregular。"
    }
  },
  {
    id: 4,
    topic: "Dissolving",
    question: "The rate of dissolving of a solute in water is lower when (1) the temperature of water is lower. (2) the solute pieces are larger in size. (3) the water is stirred.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    optionVocab: {
      A: [{ term: "only", translation: "只有" }],
      B: [{ term: "stirred", translation: "攪拌" }],
      C: [{ term: "larger in size", translation: "體積較大 / 顆粒較大" }],
      D: [{ term: "rate of dissolving", translation: "溶解速率" }]
    },
    decoderChunks: [
      { eng: "The rate of dissolving", translation: "溶解的速率" },
      { eng: "of a solute in water", translation: "溶質在水中" },
      { eng: "is lower when...", translation: "在甚麼情況下會較低？" }
    ],
    correctAnswer: "A",
    visual: {
      image: "q04-dissolving-rate.png",
      alt: "A dissolving experiment with cold water, a large solute piece, and stirring."
    },
    meaningZh: "「溶質在水中的溶解速率在甚麼情況下會較低？」",
    hint: "lower 即係變慢。低溫會慢，大粒溶質表面面積較小會慢；但攪拌會令水流動，通常會加快溶解。",
    keywords: [
      { word: "rate", zh: "速率", desc: "事情發生得快或慢的程度。" },
      { word: "dissolving", zh: "溶解", desc: "溶質粒子分散到溶劑中，形成溶液。" },
      { word: "solute", zh: "溶質", desc: "被溶解的物質，例如糖或鹽。" },
      { word: "stirred", zh: "被攪拌", desc: "用玻璃棒等令液體流動，通常會加快溶解。" }
    ],
    explanation: {
      A: "正確！低溫和較大顆粒都會令溶解較慢。",
      B: "不正確。(3) 攪拌會加快溶解，不會令速率 lower。",
      C: "不正確。(2) 會變慢，但 (3) 會變快。",
      D: "不正確。不是三個都會令溶解變慢，攪拌是相反效果。"
    }
  },
  {
    id: 5,
    topic: "Water treatment",
    question: "Microorganisms in water can be killed by (1) adding chlorine. (2) boiling. (3) ultraviolet light.",
    options: {
      A: "(1) and (2) only",
      B: "(1) and (3) only",
      C: "(2) and (3) only",
      D: "(1), (2) and (3)"
    },
    optionVocab: {
      A: [{ term: "chlorine", translation: "氯氣 / 氯" }],
      B: [{ term: "ultraviolet light", translation: "紫外光" }],
      C: [{ term: "boiling", translation: "煮沸" }],
      D: [{ term: "microorganisms", translation: "微生物" }]
    },
    decoderChunks: [
      { eng: "Microorganisms in water", translation: "水中的微生物" },
      { eng: "can be killed by", translation: "可以被以下方法殺死" },
      { eng: "adding chlorine, boiling, ultraviolet light", translation: "加氯、煮沸、紫外光" }
    ],
    correctAnswer: "D",
    visual: {
      image: "q05-water-treatment.png",
      alt: "Chlorine, boiling, and ultraviolet light used to disinfect water."
    },
    meaningZh: "「水中的微生物可用哪些方法殺死？」",
    hint: "三個方法都係常見消毒：加氯、煮沸同紫外光都可以殺死或破壞水中的微生物。",
    keywords: [
      { word: "microorganisms", zh: "微生物", desc: "細菌等很細小、肉眼通常看不見的生物。" },
      { word: "chlorine", zh: "氯", desc: "常用於食水消毒的化學物質。" },
      { word: "boiling", zh: "煮沸", desc: "把水加熱至沸騰，可殺死很多微生物。" },
      { word: "ultraviolet light", zh: "紫外光", desc: "可破壞微生物，常用於消毒。" }
    ],
    explanation: {
      A: "不完整。加氯和煮沸都可以，但紫外光也可以。",
      B: "不完整。加氯和紫外光都可以，但煮沸也可以。",
      C: "不完整。煮沸和紫外光都可以，但加氯也可以。",
      D: "正確！三種方法都可以用來殺死水中的微生物。"
    }
  },
  {
    id: 6,
    topic: "Separation methods",
    question: "Filtration using the equipment shown can be used to separate which materials?",
    options: {
      A: "A mixture of salt and sugar",
      B: "A mixture of sand and water",
      C: "A mixture of oxygen and water",
      D: "A mixture of alcohol and water"
    },
    optionVocab: {
      A: [{ term: "mixture", translation: "混合物" }, { term: "salt and sugar", translation: "鹽和糖" }],
      B: [{ term: "sand and water", translation: "沙和水" }],
      C: [{ term: "oxygen", translation: "氧氣" }],
      D: [{ term: "alcohol", translation: "酒精" }]
    },
    decoderChunks: [
      { eng: "Filtration using the equipment shown", translation: "使用圖中的過濾裝置" },
      { eng: "can be used to separate", translation: "可以用來分離" },
      { eng: "which materials?", translation: "哪一些材料？" }
    ],
    correctAnswer: "B",
    visual: {
      image: "q06-filtration.png",
      alt: "Filtration apparatus separating sand from water."
    },
    meaningZh: "「圖中的過濾裝置可用來分離哪種物質？」",
    hint: "過濾最適合分離「不溶固體 + 液體」。沙不溶於水，會留在濾紙上；水會通過濾紙。",
    keywords: [
      { word: "filtration", zh: "過濾", desc: "用濾紙把不溶固體和液體分開的方法。" },
      { word: "separate", zh: "分離", desc: "把混合物中的不同成分分開。" },
      { word: "sand", zh: "沙", desc: "不溶於水的固體顆粒。" },
      { word: "filter paper", zh: "濾紙", desc: "有細小孔洞，可讓液體通過、阻隔固體。" }
    ],
    explanation: {
      A: "不正確。鹽和糖都是固體，而且都可溶於水，不能靠普通過濾分開。",
      B: "正確！沙是不溶固體，水是液體，可以用過濾分離。",
      C: "不正確。氧氣是氣體，這不是過濾裝置的典型用途。",
      D: "不正確。酒精和水是可互溶液體，應用蒸餾等方法分離。"
    }
  },
  {
    id: 7,
    topic: "Global warming",
    question: "The graph below shows the average global temperature rise from the year 1986 to 2022. Which of the following is NOT a possible cause for the observation?",
    options: {
      A: "Deforestation",
      B: "Rise in sea level",
      C: "Burning of fossil fuel",
      D: "Increase in the number of motor cars"
    },
    optionVocab: {
      A: [{ term: "Deforestation", translation: "砍伐森林" }],
      B: [{ term: "Rise in sea level", translation: "海平面上升" }],
      C: [{ term: "fossil fuel", translation: "化石燃料" }],
      D: [{ term: "motor cars", translation: "汽車" }]
    },
    decoderChunks: [
      { eng: "The graph shows", translation: "圖表顯示" },
      { eng: "average global temperature rise", translation: "全球平均溫度上升" },
      { eng: "NOT a possible cause", translation: "不是可能原因" }
    ],
    correctAnswer: "B",
    visual: {
      image: "q07-global-warming.png",
      alt: "Global warming shown by a rising temperature graph and possible human causes."
    },
    meaningZh: "「圖表顯示全球平均溫度上升。以下哪項不是造成這現象的可能原因？」",
    hint: "留意 NOT。砍樹、燒化石燃料、汽車增加都可令溫室氣體增加；海平面上升通常係全球暖化的結果，不係原因。",
    keywords: [
      { word: "average", zh: "平均", desc: "把多個數值加起來再除以數量。" },
      { word: "global temperature", zh: "全球溫度", desc: "全球整體的平均氣溫。" },
      { word: "cause", zh: "原因", desc: "導致某件事發生的因素。" },
      { word: "deforestation", zh: "砍伐森林", desc: "大量移除樹木，令二氧化碳吸收減少。" }
    ],
    explanation: {
      A: "不正確。砍伐森林會減少植物吸收二氧化碳，是全球暖化原因之一。",
      B: "正確！海平面上升通常是全球暖化的結果，不是導致溫度上升的原因。",
      C: "不正確。燃燒化石燃料會釋放二氧化碳，造成全球暖化。",
      D: "不正確。汽車增加會增加廢氣和二氧化碳排放。"
    }
  },
  {
    id: 8,
    topic: "Energy change",
    question: "If you are burning wood, the reaction will",
    options: {
      A: "release energy.",
      B: "absorb energy.",
      C: "neither absorb nor release energy.",
      D: "sometimes release and sometimes absorb energy depending on the kind of wood."
    },
    optionVocab: {
      A: [{ term: "release", translation: "釋放" }],
      B: [{ term: "absorb", translation: "吸收" }],
      C: [{ term: "neither...nor...", translation: "兩者都不" }],
      D: [{ term: "depending on", translation: "視乎 / 取決於" }]
    },
    decoderChunks: [
      { eng: "If you are burning wood,", translation: "如果你正在燃燒木材，" },
      { eng: "the reaction will", translation: "這個反應會" },
      { eng: "release or absorb energy?", translation: "釋放還是吸收能量？" }
    ],
    correctAnswer: "A",
    visual: {
      image: "q08-burning-wood.png",
      alt: "Burning wood releasing heat and light energy."
    },
    meaningZh: "「燃燒木材時，反應會怎樣處理能量？」",
    hint: "燃燒會有熱和光，所以能量係由木材化學能轉出來，釋放到環境。",
    keywords: [
      { word: "burning", zh: "燃燒", desc: "物質和氧氣反應，通常會放出熱和光。" },
      { word: "reaction", zh: "反應", desc: "物質發生化學變化的過程。" },
      { word: "release energy", zh: "釋放能量", desc: "把能量放出到周圍環境。" },
      { word: "absorb energy", zh: "吸收能量", desc: "從周圍環境吸收能量。" }
    ],
    explanation: {
      A: "正確！燃燒木材會釋放熱能和光能。",
      B: "不正確。燃燒不是主要吸收能量，而是放出能量。",
      C: "不正確。燃燒時明顯有熱和光，所以有能量轉移。",
      D: "不正確。不論木材種類，燃燒整體都是釋放能量。"
    }
  },
  {
    id: 9,
    topic: "Heat transfer",
    question: "The following figure shows four similar containers, and the surface of the containers is painted black or silver. The containers contain equal amounts of hot water. In which container will the temperature of water drop by 1 °C in the shortest time?",
    options: {
      A: "Black surface, 80 °C water",
      B: "Black surface, 60 °C water",
      C: "Silvery surface, 60 °C water",
      D: "Silvery surface, 80 °C water"
    },
    optionVocab: {
      A: [{ term: "Black surface", translation: "黑色表面" }, { term: "shortest time", translation: "最短時間" }],
      B: [{ term: "temperature", translation: "溫度" }],
      C: [{ term: "Silvery surface", translation: "銀色表面" }],
      D: [{ term: "hot water", translation: "熱水" }]
    },
    decoderChunks: [
      { eng: "In which container", translation: "在哪一個容器中" },
      { eng: "will the temperature of water drop by 1 °C", translation: "水溫會下降 1 °C" },
      { eng: "in the shortest time?", translation: "所需時間最短？" }
    ],
    correctAnswer: "A",
    visual: {
      image: "q09-heat-loss.png",
      alt: "Four hot water containers with black or silver surfaces losing heat.",
      overlays: [
        { kind: "label", text: "A 80°C", x: 15, y: 83, tone: "dark" },
        { kind: "label", text: "B 60°C", x: 39, y: 83, tone: "dark" },
        { kind: "label", text: "C 60°C", x: 63, y: 83 },
        { kind: "label", text: "D 80°C", x: 86, y: 83 }
      ]
    },
    meaningZh: "「哪個容器中的水會最快下降 1 °C？」",
    hint: "最快失熱要睇兩件事：黑色表面是較好的熱輻射放出者；80 °C 比 60 °C 更熱，和環境溫差較大，失熱更快。",
    keywords: [
      { word: "surface", zh: "表面", desc: "物件外層接觸空氣的部分。" },
      { word: "black", zh: "黑色", desc: "黑色表面善於吸收和放出熱輻射。" },
      { word: "silvery", zh: "銀色", desc: "銀色表面較會反射熱輻射，不易放熱。" },
      { word: "drop", zh: "下降", desc: "數值變低，例如溫度降低。" }
    ],
    explanation: {
      A: "正確！黑色表面放出熱輻射較快，而且 80 °C 與環境溫差較大，所以最快下降 1 °C。",
      B: "不正確。黑色會較快失熱，但 60 °C 的溫差較細，未及 A 快。",
      C: "不正確。銀色表面不易放出熱輻射，而且水溫較低。",
      D: "不正確。80 °C 有較大溫差，但銀色表面會減慢熱輻射散失。"
    }
  },
  {
    id: 10,
    topic: "Energy efficiency",
    question: "An electric fan gives out 20 J of kinetic energy when 500 J of electrical energy is input to it. What is the efficiency of the energy conversion?",
    options: {
      A: "0.04%",
      B: "4%",
      C: "40%",
      D: "96%"
    },
    optionVocab: {
      A: [{ term: "0.04%", translation: "百分之 0.04" }],
      B: [{ term: "4%", translation: "百分之 4" }],
      C: [{ term: "40%", translation: "百分之 40" }],
      D: [{ term: "96%", translation: "百分之 96" }]
    },
    decoderChunks: [
      { eng: "20 J of kinetic energy", translation: "20 焦耳動能" },
      { eng: "500 J of electrical energy is input", translation: "輸入 500 焦耳電能" },
      { eng: "What is the efficiency?", translation: "效率是多少？" }
    ],
    correctAnswer: "B",
    visual: {
      image: "q10-energy-efficiency.png",
      alt: "Electrical energy going into a fan with useful kinetic energy output.",
      overlays: [
        { kind: "label", text: "500 J input", x: 18, y: 43, tone: "warn" },
        { kind: "label", text: "20 J useful", x: 79, y: 40, tone: "answer" }
      ]
    },
    meaningZh: "「電風扇輸入 500 J 電能，輸出 20 J 動能。能量轉換效率是多少？」",
    hint: "效率 = 有用輸出能量 ÷ 輸入能量 × 100%。即係 20 ÷ 500 × 100%。",
    keywords: [
      { word: "electric fan", zh: "電風扇", desc: "把電能轉換成扇葉動能的電器。" },
      { word: "kinetic energy", zh: "動能", desc: "移動中的物體具有的能量。" },
      { word: "electrical energy", zh: "電能", desc: "由電流帶來的能量。" },
      { word: "efficiency", zh: "效率", desc: "有用輸出能量佔輸入能量的百分比。" }
    ],
    explanation: {
      A: "不正確。20 ÷ 500 = 0.04，但轉成百分比要再乘 100%，所以不是 0.04%。",
      B: "正確！效率 = 20 ÷ 500 × 100% = 4%。",
      C: "不正確。40% 代表 200 J 有用輸出，題目只有 20 J。",
      D: "不正確。96% 是把損失或差額誤當成效率。"
    }
  },
  {
    id: 11,
    topic: "Classification",
    question: "Cats are most closely related to which of the following animals?",
    options: {
      A: "Crocodiles",
      B: "Whales",
      C: "Frogs",
      D: "Penguins"
    },
    optionVocab: {
      A: [{ term: "Crocodiles", translation: "鱷魚" }],
      B: [{ term: "Whales", translation: "鯨魚" }],
      C: [{ term: "Frogs", translation: "青蛙" }],
      D: [{ term: "Penguins", translation: "企鵝" }]
    },
    decoderChunks: [
      { eng: "Cats are most closely related to", translation: "貓和哪一種動物關係最接近" },
      { eng: "which of the following animals?", translation: "在以下選項中？" }
    ],
    correctAnswer: "B",
    visual: {
      image: "q11-mammals.png",
      alt: "A cat and a whale shown as mammals, with other animal groups nearby.",
      overlays: [
        { kind: "badge", text: "A", x: 13, y: 76, tone: "alt" },
        { kind: "badge", text: "B", x: 66, y: 55 },
        { kind: "badge", text: "C", x: 45, y: 80, tone: "alt" },
        { kind: "badge", text: "D", x: 87, y: 76, tone: "alt" }
      ]
    },
    meaningZh: "「貓和以下哪種動物的親緣關係最接近？」",
    hint: "分類題要先睇大組別。貓是哺乳類；鯨魚雖然生活在海中，但也是哺乳類。",
    keywords: [
      { word: "closely related", zh: "親緣關係較接近", desc: "在生物分類上有較近共同特徵或共同祖先。" },
      { word: "mammals", zh: "哺乳類", desc: "通常有毛、用肺呼吸、雌性用乳汁餵哺幼兒。" },
      { word: "whales", zh: "鯨魚", desc: "生活在水中但屬於哺乳類，不是魚類。" },
      { word: "classification", zh: "分類", desc: "根據特徵把生物分成不同組別。" }
    ],
    explanation: {
      A: "不正確。鱷魚是爬行類，不是哺乳類。",
      B: "正確！貓和鯨魚都屬於哺乳類，所以較接近。",
      C: "不正確。青蛙是兩棲類。",
      D: "不正確。企鵝是鳥類。"
    }
  },
  {
    id: 12,
    topic: "Habitats",
    question: "In which of the following habitats are amphibians NOT found?",
    options: {
      A: "Pond",
      B: "Tropical forest",
      C: "Wetland",
      D: "Desert"
    },
    optionVocab: {
      A: [{ term: "Pond", translation: "池塘" }],
      B: [{ term: "Tropical forest", translation: "熱帶森林" }],
      C: [{ term: "Wetland", translation: "濕地" }],
      D: [{ term: "Desert", translation: "沙漠" }]
    },
    decoderChunks: [
      { eng: "In which habitats", translation: "在哪一種棲息地" },
      { eng: "are amphibians NOT found?", translation: "找不到兩棲類動物？" },
      { eng: "NOT", translation: "注意：問『不是 / 沒有』" }
    ],
    correctAnswer: "D",
    visual: {
      image: "q12-amphibian-habitats.png",
      alt: "Wet amphibian habitats contrasted with a dry desert habitat.",
      overlays: [
        { kind: "badge", text: "A", x: 13, y: 82 },
        { kind: "badge", text: "B", x: 40, y: 82 },
        { kind: "badge", text: "C", x: 65, y: 82 },
        { kind: "badge", text: "D", x: 89, y: 82, tone: "warn" }
      ]
    },
    meaningZh: "「兩棲類動物不會在哪種棲息地出現？」",
    hint: "兩棲類皮膚濕潤，繁殖常需要水。題目問 NOT found，所以揀最乾、最不適合的棲息地。",
    keywords: [
      { word: "habitats", zh: "棲息地", desc: "生物生活的地方。" },
      { word: "amphibians", zh: "兩棲類", desc: "例如青蛙和蟾蜍，通常幼體在水中，成體可在陸地附近生活。" },
      { word: "wetland", zh: "濕地", desc: "有大量水分的生境，適合很多兩棲類。" },
      { word: "desert", zh: "沙漠", desc: "非常乾燥、缺水的地方。" }
    ],
    explanation: {
      A: "不正確。池塘有水，適合兩棲類生活和繁殖。",
      B: "不正確。熱帶森林濕潤，適合兩棲類。",
      C: "不正確。濕地水分多，是兩棲類常見棲息地。",
      D: "正確！沙漠太乾燥，不適合一般兩棲類生活。"
    }
  },
  {
    id: 13,
    topic: "Particle model",
    question: "The figure below shows the path of movement of some smoke particles. Which of the following statements best explains why smoke particles move irregularly?",
    options: {
      A: "The smoke particles are much bigger than the air particles.",
      B: "Air particles move randomly.",
      C: "Smoke particles moves randomly in zigzag paths.",
      D: "The air particles hit the smoke particles in different directions."
    },
    optionVocab: {
      A: [{ term: "much bigger", translation: "大很多" }],
      B: [{ term: "randomly", translation: "隨機地" }],
      C: [{ term: "zigzag paths", translation: "之字形路徑" }],
      D: [{ term: "hit", translation: "撞擊" }, { term: "different directions", translation: "不同方向" }]
    },
    decoderChunks: [
      { eng: "best explains why", translation: "最能解釋為甚麼" },
      { eng: "smoke particles move irregularly", translation: "煙粒子不規則移動" },
      { eng: "air particles hit them", translation: "空氣粒子撞擊它們" }
    ],
    correctAnswer: "D",
    visual: {
      image: "q13-brownian-motion.png",
      alt: "Small air particles hitting a smoke particle from different directions."
    },
    meaningZh: "「哪一句最能解釋煙粒子為何不規則移動？」",
    hint: "唔好只描述『它會亂行』，要搵原因。真正原因係空氣粒子不停隨機運動，從不同方向撞到煙粒子。",
    keywords: [
      { word: "smoke particles", zh: "煙粒子", desc: "煙中的微小粒子，可用來觀察粒子運動。" },
      { word: "irregularly", zh: "不規則地", desc: "沒有固定方向或規律。" },
      { word: "randomly", zh: "隨機地", desc: "方向和次序不可預測。" },
      { word: "hit", zh: "撞擊", desc: "粒子互相碰撞，令運動方向改變。" }
    ],
    explanation: {
      A: "不正確。煙粒子較大未能解釋為何會不斷改變方向。",
      B: "不夠完整。空氣粒子隨機移動是背景，但題目問煙粒子為何被推動。",
      C: "不正確。這只是重複描述現象，不是解釋原因。",
      D: "正確！空氣粒子從不同方向撞擊煙粒子，令它走之字形路線。"
    }
  },
  {
    id: 14,
    topic: "Matter",
    question: "A burning match gives out smoke, heat and light. Which of the following is/are matter? (1) Smoke (2) Heat (3) Light",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "(1) and (3) only",
      D: "(2) and (3) only"
    },
    optionVocab: {
      A: [{ term: "only", translation: "只有" }],
      B: [{ term: "Heat", translation: "熱" }],
      C: [{ term: "Light", translation: "光" }],
      D: [{ term: "matter", translation: "物質" }]
    },
    decoderChunks: [
      { eng: "A burning match gives out", translation: "燃燒中的火柴放出" },
      { eng: "smoke, heat and light", translation: "煙、熱和光" },
      { eng: "Which is matter?", translation: "哪一項是物質？" }
    ],
    correctAnswer: "A",
    visual: {
      image: "q14-matter-smoke.png",
      alt: "A burning match giving out smoke particles, heat waves, and light rays."
    },
    meaningZh: "「燃燒中的火柴放出煙、熱和光。哪一項是物質？」",
    hint: "物質要有質量並佔空間。煙是微小粒子，有質量、有體積；熱和光是能量，不是物質。",
    keywords: [
      { word: "matter", zh: "物質", desc: "有質量並佔有空間的東西。" },
      { word: "smoke", zh: "煙", desc: "由微小固體或液體粒子組成，是物質。" },
      { word: "heat", zh: "熱", desc: "能量的一種，不是物質。" },
      { word: "light", zh: "光", desc: "能量的一種，不是物質。" }
    ],
    explanation: {
      A: "正確！煙是粒子組成，有質量和體積，所以是物質。",
      B: "不正確。熱是能量，不是物質。",
      C: "不正確。煙是物質，但光不是物質。",
      D: "不正確。熱和光都是能量，不是物質。"
    }
  },
  {
    id: 15,
    topic: "Density",
    question: "The diagram below shows a beaker which contains four different substances. Which of the following correctly arranges the densities of the substances in decreasing order?",
    options: {
      A: "V, W, Y, Z",
      B: "V, Y, W, Z",
      C: "Z, W, Y, V",
      D: "Z, Y, W, V"
    },
    optionVocab: {
      A: [{ term: "decreasing order", translation: "由大至小排列" }],
      B: [{ term: "density", translation: "密度" }],
      C: [{ term: "Z, W, Y, V", translation: "由最密至最疏" }],
      D: [{ term: "arranges", translation: "排列" }]
    },
    decoderChunks: [
      { eng: "arranges the densities", translation: "排列密度" },
      { eng: "in decreasing order", translation: "由大至小" },
      { eng: "look at floating and sinking", translation: "看浮沉位置判斷" }
    ],
    correctAnswer: "C",
    visual: {
      image: "q15-density-layers.png",
      alt: "A beaker with two liquid layers, a floating cube, and a sinking ball.",
      overlays: [
        { kind: "badge", text: "V", x: 78, y: 31 },
        { kind: "badge", text: "W", x: 78, y: 65, tone: "dark" },
        { kind: "badge", text: "Y", x: 50, y: 49, tone: "warn" },
        { kind: "badge", text: "Z", x: 50, y: 79, tone: "dark" }
      ]
    },
    meaningZh: "「哪一項正確把四種物質的密度由大至小排列？」",
    hint: "decreasing order 即由最大去最小。沉到底的 Z 密度最大；下層液體 W 比上層液體 V 大；Y 停在兩層之間，密度介乎 W 和 V 之間。",
    keywords: [
      { word: "density", zh: "密度", desc: "單位體積內有多少質量，密度大通常會沉到密度較小的物質下方。" },
      { word: "decreasing order", zh: "遞減次序", desc: "由大排到小。" },
      { word: "substances", zh: "物質", desc: "不同材料或液體。" },
      { word: "sinks", zh: "下沉", desc: "物體密度比周圍液體大時會下沉。" }
    ],
    explanation: {
      A: "不正確。V 在最上層，密度應較小，不應排第一。",
      B: "不正確。V 仍被放在最大，但上層液體通常密度較低。",
      C: "正確！Z 沉到底最大，其次是下層 W，再到停在中間的 Y，最小是上層 V。",
      D: "不正確。Y 在 W 上方，代表 Y 密度小於 W，所以 W 應排在 Y 前。"
    }
  },
  {
    id: 16,
    topic: "Microscope",
    question: "Peter is observing two very small letters ‘bp’ under a light microscope. Which of the following shows the image observed by him?",
    options: {
      A: "qb",
      B: "bp",
      C: "dq",
      D: "qd"
    },
    optionVocab: {
      A: [{ term: "qb", translation: "只像部分倒轉" }],
      B: [{ term: "bp", translation: "原本方向" }],
      C: [{ term: "dq", translation: "上下左右倒轉後的影像" }],
      D: [{ term: "qd", translation: "次序不對" }]
    },
    decoderChunks: [
      { eng: "observing two very small letters", translation: "觀察兩個很細的英文字母" },
      { eng: "under a light microscope", translation: "在光學顯微鏡下" },
      { eng: "the image observed", translation: "看到的影像" }
    ],
    correctAnswer: "C",
    visual: {
      image: "q16-microscope-inversion.png",
      alt: "A light microscope with a blank circular viewing field for showing an inverted image.",
      overlays: [
        { kind: "label", text: "bp", x: 18, y: 57, size: "big" },
        { kind: "label", text: "dq", x: 78, y: 57, tone: "answer", size: "big" }
      ]
    },
    meaningZh: "「Peter 用光學顯微鏡觀察很細的『bp』，他會看到哪個影像？」",
    hint: "顯微鏡影像會上下左右倒轉，可以想像把紙轉 180 度。bp 轉 180 度後會變成 dq。",
    keywords: [
      { word: "observing", zh: "觀察", desc: "用眼睛或儀器仔細看。" },
      { word: "light microscope", zh: "光學顯微鏡", desc: "用光和透鏡放大細小物件的儀器。" },
      { word: "image", zh: "影像", desc: "透過鏡片看到的圖像。" },
      { word: "inverted", zh: "倒轉", desc: "上下左右方向和原物不同。" }
    ],
    explanation: {
      A: "不正確。這不是把整個 bp 旋轉 180 度後的結果。",
      B: "不正確。顯微鏡下影像不會保持原本方向。",
      C: "正確！光學顯微鏡影像倒轉，bp 會看成 dq。",
      D: "不正確。旋轉後的左右次序也會改變，所以不是 qd。"
    }
  },
  {
    id: 17,
    topic: "Human reproduction",
    question: "The following diagram shows a foetus inside a female’s body. What is the function of the part A marked in the diagram?",
    options: {
      A: "It prevents the foetus from dryness.",
      B: "It provides food and oxygen to the foetus.",
      C: "It connects the foetus with the placenta.",
      D: "It takes oxygen away from the foetus."
    },
    optionVocab: {
      A: [{ term: "prevents", translation: "防止" }, { term: "dryness", translation: "乾燥" }],
      B: [{ term: "provides", translation: "提供" }, { term: "oxygen", translation: "氧氣" }],
      C: [{ term: "connects", translation: "連接" }, { term: "placenta", translation: "胎盤" }],
      D: [{ term: "takes away", translation: "帶走" }]
    },
    decoderChunks: [
      { eng: "a foetus inside a female's body", translation: "女性身體內的胎兒" },
      { eng: "the part A marked in the diagram", translation: "圖中標示 A 的部分" },
      { eng: "What is the function?", translation: "功能是甚麼？" }
    ],
    correctAnswer: "C",
    visual: {
      image: "q17-umbilical-cord.png",
      alt: "A foetus, placenta, and umbilical cord inside the uterus.",
      overlays: [
        { kind: "badge", text: "A", x: 43, y: 49, tone: "warn" }
      ]
    },
    meaningZh: "「圖中顯示女性身體內的胎兒，A 部分有甚麼功能？」",
    hint: "A 指向連住胎兒和胎盤的管狀結構，即臍帶。臍帶的功能重點係 connect，連接胎兒和胎盤。",
    keywords: [
      { word: "foetus", zh: "胎兒", desc: "在母體子宮內發育中的未出生嬰兒。" },
      { word: "function", zh: "功能", desc: "某個部分的作用。" },
      { word: "placenta", zh: "胎盤", desc: "母體與胎兒交換物質的重要結構。" },
      { word: "umbilical cord", zh: "臍帶", desc: "連接胎兒和胎盤的管狀結構。" }
    ],
    explanation: {
      A: "不正確。防止乾燥主要是羊水的作用。",
      B: "不正確。提供食物和氧氣主要與胎盤交換有關；A 指的是連接結構。",
      C: "正確！A 是臍帶，功能是連接胎兒和胎盤。",
      D: "不正確。臍帶會運送物質，但這句說法不是 A 的最佳功能描述，而且不是單純帶走氧氣。"
    }
  }
];

const shortSteps = [
  { title: "Read", zh: "讀題", icon: "book-open" },
  { title: "Understand", zh: "明白題意", icon: "languages" },
  { title: "Marks", zh: "拆分", icon: "table-2" },
  { title: "Build", zh: "造句", icon: "blocks" },
  { title: "Mistakes", zh: "常見錯誤", icon: "alert-triangle" },
  { title: "Model", zh: "參考答案", icon: "badge-check" }
];

const frameBank = [
  { type: "Explain", frames: ["It is because ________.", "This is because ________."] },
  { type: "Compare", frames: ["________ is higher than ________.", "________ is lower than ________.", "________ is greater than ________.", "________ is smaller than ________."] },
  { type: "Energy conversion", frames: ["________ energy is converted into ________ energy."] },
  { type: "Fair test", frames: ["The independent variable is ________.", "The controlled variables are ________.", "The dependent variable is ________."] },
  { type: "Cause and effect", frames: ["When ________ decreases, ________ also decreases.", "There is not enough ________, so ________ decreases."] }
];

const shortQuestionDatabase = [
  {
    id: "D1",
    topic: "Chromosomes and DNA",
    type: "Biology short answer",
    keySkill: "Use correct biology terms and DNA base pairs.",
    originalQuestion: "How many pairs of chromosomes are present in a typical human cell? In which part of a cell are chromosomes found? What are the sex chromosomes in a female? Explain the importance of sex chromosomes in reproduction. Complete the DNA complementary base pairing.",
    difficultWords: [
      { term: "chromosomes", zh: "染色體", note: "在細胞核內，帶有遺傳資料。" },
      { term: "typical human cell", zh: "一般人類細胞", note: "普通體細胞，不是精子或卵子。" },
      { term: "sex chromosomes", zh: "性染色體", note: "決定性別的染色體，例如 XX 或 XY。" },
      { term: "reproduction", zh: "繁殖", note: "產生下一代的過程。" },
      { term: "complementary base pairing", zh: "互補鹼基配對", note: "DNA 中 A 配 T，C 配 G。" }
    ],
    chunks: [
      { eng: "How many pairs of chromosomes", zh: "有多少對染色體" },
      { eng: "are present in a typical human cell?", zh: "存在於一般人類細胞？" },
      { eng: "In which part of a cell", zh: "在細胞的哪一部分" },
      { eng: "are chromosomes found?", zh: "可以找到染色體？" },
      { eng: "Complete the DNA complementary base pairing.", zh: "完成 DNA 互補鹼基配對。" }
    ],
    meaningZh: "這題問染色體數目、位置、女性性染色體、性染色體在繁殖的重要性，以及 DNA 鹼基點樣配對。",
    marks: [
      { mark: "1", write: "寫出一般人類細胞有 23 pairs of chromosomes", words: "23 pairs" },
      { mark: "1", write: "寫出染色體在 nucleus", words: "nucleus" },
      { mark: "1", write: "寫出女性性染色體是 XX", words: "XX" },
      { mark: "1", write: "解釋性染色體決定 offspring 的 sex", words: "determine, sex" },
      { mark: "2", write: "正確配對 DNA bases", words: "A-T, C-G" }
    ],
    wordBank: ["23 pairs", "nucleus", "XX", "sex", "offspring", "A", "T", "C", "G"],
    frames: [
      { label: "Chromosome number", parts: ["A typical human cell has ", { answer: "23 pairs", options: ["23 pairs", "23", "46 pairs", "2 pairs"] }, " of chromosomes."] },
      { label: "Chromosome position", parts: ["Chromosomes are found in the ", { answer: "nucleus", options: ["nucleus", "cytoplasm", "cell membrane", "vacuole"] }, "."] },
      { label: "Female sex chromosomes", parts: ["The sex chromosomes in a female are ", { answer: "XX", options: ["XX", "XY", "YY", "X"] }, "."] },
      { label: "Importance", parts: ["Sex chromosomes determine the ", { answer: "sex", options: ["sex", "mass", "habitat", "diet"] }, " of the ", { answer: "offspring", options: ["offspring", "parent", "chromosome", "cell wall"] }, "."] },
      { label: "Base pairing", parts: ["In DNA, ", { answer: "A", options: ["A", "C", "G", "T"] }, " pairs with ", { answer: "T", options: ["T", "C", "A", "G"] }, ", and ", { answer: "C", options: ["C", "A", "T", "G"] }, " pairs with ", { answer: "G", options: ["G", "T", "A", "C"] }, "."] }
    ],
    modelAnswer: ["A typical human cell has 23 pairs of chromosomes.", "Chromosomes are found in the nucleus.", "The sex chromosomes in a female are XX.", "Sex chromosomes determine the sex of the offspring.", "In DNA, A pairs with T and C pairs with G."],
    mistakes: [
      { mistake: "Writing 46 pairs instead of 23 pairs.", correction: "A typical human body cell has 46 chromosomes, i.e. 23 pairs." },
      { mistake: "Mixing up DNA base pairs.", correction: "A pairs with T, C pairs with G." }
    ]
  },
  {
    id: "D2",
    topic: "Food Chain",
    type: "Cause and effect explanation",
    keySkill: "Explain using feed on and not enough food.",
    originalQuestion: "The feeding relationship is Lobster → Octopus → Shark. State the habitat. Classify lobster and octopus as invertebrates. If the number of lobsters decreases sharply, how does it affect the number of octopuses? Explain your answer.",
    difficultWords: [
      { term: "feeding relationship", zh: "攝食關係", note: "誰吃誰的關係。" },
      { term: "habitat", zh: "棲息地", note: "生物生活的地方。" },
      { term: "invertebrates", zh: "無脊椎動物", note: "沒有脊骨的動物。" },
      { term: "decreases sharply", zh: "急劇下降", note: "數量大幅減少。" },
      { term: "affect", zh: "影響", note: "令某事改變。" }
    ],
    chunks: [
      { eng: "How does it affect", zh: "它會怎樣影響" },
      { eng: "the number of octopuses?", zh: "章魚的數量？" },
      { eng: "Explain your answer.", zh: "解釋你的答案。" },
      { eng: "Octopuses feed on lobsters.", zh: "章魚以龍蝦為食。" }
    ],
    meaningZh: "這題問：龍蝦數量急跌，會令章魚數量點樣改變？你要用食物鏈解釋原因。",
    marks: [
      { mark: "1", write: "寫出 habitat 是 sea / ocean / marine habitat", words: "sea, ocean" },
      { mark: "1", write: "寫出 lobster and octopus are invertebrates", words: "invertebrates" },
      { mark: "1", write: "寫出 octopuses decrease", words: "decrease" },
      { mark: "1", write: "解釋 octopuses feed on lobsters / not enough food", words: "feed on, not enough food" }
    ],
    wordBank: ["sea", "invertebrates", "octopuses", "decreases", "feed on", "lobsters", "not enough food"],
    frames: [
      { label: "Habitat", parts: ["The habitat is the ", { answer: "sea", options: ["sea", "desert", "forest", "pond"] }, "."] },
      { label: "Classification", parts: ["Lobster and octopus are ", { answer: "invertebrates", options: ["invertebrates", "mammals", "birds", "plants"] }, "."] },
      { label: "Change", parts: ["The number of ", { answer: "octopuses", options: ["octopuses", "sharks", "lobsters", "plants"] }, " ", { answer: "decreases", options: ["decreases", "increases", "stays the same", "is zero"] }, "."] },
      { label: "Reason", parts: ["It is because octopuses ", { answer: "feed on", options: ["feed on", "produce", "live in", "change into"] }, " ", { answer: "lobsters", options: ["lobsters", "sharks", "seaweed", "water"] }, ", so there is ", { answer: "not enough food", options: ["not enough food", "more sunlight", "more space", "more oxygen"] }, "."] }
    ],
    modelAnswer: ["The habitat is the sea.", "Lobster and octopus are invertebrates.", "The number of octopuses decreases.", "It is because octopuses feed on lobsters, so there is not enough food."],
    mistakes: [
      { mistake: "Only writing decreases without explanation.", correction: "Add because octopuses feed on lobsters." },
      { mistake: "Writing sharks decrease instead of octopuses decrease.", correction: "The question asks the number of octopuses." }
    ]
  },
  {
    id: "D3",
    topic: "Vacuum Flask",
    type: "Heat transfer explanation",
    keySkill: "Link flask structures with conduction and convection.",
    originalQuestion: "The diagram shows the structure of a vacuum flask. Write down how the stopper and vacuum prevent heat transfer by conduction or convection.",
    difficultWords: [
      { term: "vacuum flask", zh: "真空瓶 / 保溫瓶", note: "用來減慢熱傳遞。" },
      { term: "stopper", zh: "瓶塞", note: "塞住瓶口，減少空氣流動。" },
      { term: "vacuum", zh: "真空層", note: "沒有粒子的空間。" },
      { term: "conduction", zh: "傳導", note: "粒子接觸傳熱。" },
      { term: "convection", zh: "對流", note: "流體流動傳熱。" }
    ],
    chunks: [
      { eng: "Write down the ways", zh: "寫出方法" },
      { eng: "to prevent heat transfer", zh: "去防止熱傳遞" },
      { eng: "from the following structure", zh: "由以下結構做到" },
      { eng: "by conduction or convection", zh: "透過傳導或對流" }
    ],
    meaningZh: "這題不是叫你背整個保溫瓶，而是要把結構和熱傳遞方式連起來：stopper 防止空氣流動；vacuum 沒有粒子。",
    marks: [
      { mark: "1", write: "stopper reduces heat transfer by convection / prevents air movement", words: "stopper, convection" },
      { mark: "1", write: "vacuum prevents conduction and convection because there are no particles", words: "vacuum, no particles" }
    ],
    wordBank: ["stopper", "vacuum", "convection", "conduction", "air movement", "no particles"],
    frames: [
      { label: "Stopper", parts: ["The ", { answer: "stopper", options: ["stopper", "vacuum", "silvered surface", "glass wall"] }, " reduces heat transfer by ", { answer: "convection", options: ["convection", "radiation", "photosynthesis", "evaporation"] }, " because it prevents ", { answer: "air movement", options: ["air movement", "light", "DNA", "food"] }, "."] },
      { label: "Vacuum", parts: ["The ", { answer: "vacuum", options: ["vacuum", "stopper", "cap", "water"] }, " prevents heat transfer by ", { answer: "conduction", options: ["conduction", "digestion", "classification", "reproduction"] }, " and convection because there are ", { answer: "no particles", options: ["no particles", "many animals", "many chromosomes", "more lobsters"] }, "."] }
    ],
    modelAnswer: ["The stopper reduces heat transfer by convection because it prevents air movement.", "The vacuum prevents heat transfer by conduction and convection because there are no particles."],
    mistakes: [
      { mistake: "Saying vacuum prevents radiation.", correction: "Vacuum mainly prevents conduction and convection because there are no particles." },
      { mistake: "Only naming stopper without heat transfer method.", correction: "Write stopper + prevents convection / air movement." }
    ]
  },
  {
    id: "D4",
    topic: "Energy Conversion",
    type: "Energy change and comparison",
    keySkill: "Use converted into and compare kinetic energy.",
    originalQuestion: "Peter jumps into a pool from a 10-meter diving board. State the energy conversion. Compare jumping from a 3 m board and a 10 m board. Explain using kinetic energy, mass and speed.",
    difficultWords: [
      { term: "diving board", zh: "跳水板", note: "跳入泳池前站立的平台。" },
      { term: "potential energy", zh: "位能", note: "因高度而有的能量。" },
      { term: "kinetic energy", zh: "動能", note: "因移動而有的能量。" },
      { term: "converted into", zh: "轉化成", note: "一種能量變成另一種能量。" },
      { term: "mass and speed", zh: "質量和速度", note: "影響動能的因素。" }
    ],
    chunks: [
      { eng: "Peter jumps into a pool", zh: "Peter 跳入泳池" },
      { eng: "from a 10-meter diving board", zh: "由 10 米跳水板" },
      { eng: "potential energy is converted into kinetic energy", zh: "位能轉化成動能" },
      { eng: "kinetic energy depends on mass and speed", zh: "動能取決於質量和速度" }
    ],
    meaningZh: "這題問能量轉換，並比較 3 m 和 10 m 跳水時動能大小。高度越高，落水前速度越大，動能越大。",
    marks: [
      { mark: "1", write: "寫出 potential energy converted into kinetic energy", words: "potential, kinetic" },
      { mark: "1", write: "10 m gives greater kinetic energy than 3 m", words: "greater kinetic energy" },
      { mark: "1", write: "解釋 same mass but greater speed", words: "same mass, greater speed" }
    ],
    wordBank: ["potential", "kinetic", "10 m", "3 m", "greater", "same mass", "higher speed"],
    frames: [
      { label: "Energy conversion", parts: [{ answer: "potential", options: ["potential", "chemical", "sound", "light"] }, " energy is converted into ", { answer: "kinetic", options: ["kinetic", "heat", "electrical", "nuclear"] }, " energy."] },
      { label: "Compare", parts: ["Jumping from ", { answer: "10 m", options: ["10 m", "3 m", "1 m", "0 m"] }, " gives ", { answer: "greater", options: ["greater", "smaller", "no", "less"] }, " kinetic energy than jumping from ", { answer: "3 m", options: ["3 m", "10 m", "20 m", "sea level"] }, "."] },
      { label: "Reason", parts: ["It is because Peter has the ", { answer: "same mass", options: ["same mass", "smaller mass", "no mass", "same chromosome"] }, " but a ", { answer: "higher speed", options: ["higher speed", "lower speed", "smaller habitat", "lower humidity"] }, "."] }
    ],
    modelAnswer: ["Potential energy is converted into kinetic energy.", "Jumping from 10 m gives greater kinetic energy than jumping from 3 m.", "It is because Peter has the same mass but a higher speed."],
    mistakes: [
      { mistake: "Only writing kinetic energy.", correction: "Write the full conversion: potential energy is converted into kinetic energy." },
      { mistake: "Explaining with mass only.", correction: "Peter's mass is the same; speed is higher from 10 m." }
    ]
  },
  {
    id: "D5",
    topic: "Evaporation Fair Test",
    type: "Fair test variables",
    keySkill: "Separate independent, controlled and dependent variables.",
    originalQuestion: "To investigate how humidity affects the rate of evaporation, Olivia does a fair test. Identify the independent variable, controlled variables and dependent variable. Which filter paper dries more quickly? Explain using humidity and rate of evaporation.",
    difficultWords: [
      { term: "humidity", zh: "濕度", note: "空氣中水蒸氣多少。" },
      { term: "rate of evaporation", zh: "蒸發速率", note: "水蒸發得快或慢。" },
      { term: "independent variable", zh: "自變量", note: "實驗中刻意改變的因素。" },
      { term: "controlled variables", zh: "控制變量", note: "要保持相同的因素。" },
      { term: "dependent variable", zh: "因變量", note: "實驗中量度的結果。" }
    ],
    chunks: [
      { eng: "To investigate how humidity affects", zh: "為了探究濕度怎樣影響" },
      { eng: "the rate of evaporation", zh: "蒸發速率" },
      { eng: "independent variable", zh: "我們改變的因素" },
      { eng: "dependent variable", zh: "我們量度的結果" }
    ],
    meaningZh: "這題考 fair test：改變的是 humidity，量度的是 drying time / rate of evaporation，其他如 filter paper size、water amount、temperature 要相同。",
    marks: [
      { mark: "1", write: "independent variable is humidity", words: "humidity" },
      { mark: "2", write: "controlled variables such as size of filter paper, amount of water, temperature", words: "same size, same amount" },
      { mark: "1", write: "dependent variable is rate of evaporation / drying time", words: "rate, time" },
      { mark: "2", write: "低濕度的 filter paper dries more quickly，因 evaporation rate higher", words: "lower humidity, higher rate" }
    ],
    wordBank: ["humidity", "size of filter paper", "amount of water", "rate of evaporation", "lower", "higher", "dries more quickly"],
    frames: [
      { label: "Independent variable", parts: ["The independent variable is ", { answer: "humidity", options: ["humidity", "mass", "chromosomes", "sex"] }, "."] },
      { label: "Controlled variables", parts: ["The controlled variables are ", { answer: "size of filter paper", options: ["size of filter paper", "number of octopuses", "type of chromosome", "height of board"] }, " and ", { answer: "amount of water", options: ["amount of water", "sex chromosomes", "shark size", "DNA bases"] }, "."] },
      { label: "Dependent variable", parts: ["The dependent variable is the ", { answer: "rate of evaporation", options: ["rate of evaporation", "habitat", "offspring", "vacuum"] }, "."] },
      { label: "Conclusion", parts: ["When humidity is ", { answer: "lower", options: ["lower", "higher", "unchanged", "not measured"] }, ", the rate of evaporation is ", { answer: "higher", options: ["higher", "lower", "zero", "the same"] }, " and the filter paper ", { answer: "dries more quickly", options: ["dries more quickly", "produces sperms", "feeds on lobsters", "implants"] }, "."] }
    ],
    modelAnswer: ["The independent variable is humidity.", "The controlled variables are size of filter paper and amount of water.", "The dependent variable is the rate of evaporation.", "When humidity is lower, the rate of evaporation is higher and the filter paper dries more quickly."],
    mistakes: [
      { mistake: "Confusing independent variable and dependent variable.", correction: "Independent variable = what we change. Dependent variable = what we measure." },
      { mistake: "Writing humidity is controlled.", correction: "Humidity is changed, so it is the independent variable." }
    ]
  },
  {
    id: "D6",
    topic: "Reproductive System",
    type: "Diagram labels and functions",
    keySkill: "Distinguish fertilization and implantation.",
    originalQuestion: "Use letters from the male and female reproductive system diagrams to identify the structures for producing sperms, producing fluid that contains nutrients for sperms, fertilization, and implantation of an embryo.",
    difficultWords: [
      { term: "sperms", zh: "精子", note: "男性配子。" },
      { term: "nutrients", zh: "營養物質", note: "提供能量和養分。" },
      { term: "fertilization", zh: "受精", note: "精子和卵子結合。" },
      { term: "implantation", zh: "著床", note: "胚胎附在子宮內壁。" },
      { term: "embryo", zh: "胚胎", note: "受精後早期發育的個體。" }
    ],
    chunks: [
      { eng: "producing sperms", zh: "製造精子" },
      { eng: "producing fluid that contains nutrients", zh: "製造含營養的液體" },
      { eng: "fertilization", zh: "受精" },
      { eng: "implantation of an embryo", zh: "胚胎著床" }
    ],
    meaningZh: "這題要看圖用字母回答結構。學習重點是功能：testis 製造精子；seminal vesicle / prostate gland 提供營養液；fertilization 在 oviduct；implantation 在 uterus。",
    marks: [
      { mark: "1", write: "producing sperms: testis", words: "testis" },
      { mark: "1", write: "producing nutrient fluid: seminal vesicle / prostate gland", words: "fluid, nutrients" },
      { mark: "1", write: "fertilization occurs in oviduct", words: "oviduct" },
      { mark: "1", write: "implantation occurs in uterus", words: "uterus" }
    ],
    wordBank: ["testis", "seminal vesicle", "oviduct", "uterus", "fertilization", "implantation"],
    frames: [
      { label: "Sperms", parts: ["Sperms are produced in the ", { answer: "testis", options: ["testis", "uterus", "oviduct", "ovary"] }, "."] },
      { label: "Nutrient fluid", parts: ["Fluid that contains nutrients for sperms is produced by the ", { answer: "seminal vesicle", options: ["seminal vesicle", "oviduct", "uterus", "vagina"] }, "."] },
      { label: "Fertilization", parts: [{ answer: "fertilization", options: ["fertilization", "implantation", "evaporation", "classification"] }, " occurs in the ", { answer: "oviduct", options: ["oviduct", "uterus", "testis", "penis"] }, "."] },
      { label: "Implantation", parts: [{ answer: "implantation", options: ["implantation", "fertilization", "convection", "base pairing"] }, " of an embryo occurs in the ", { answer: "uterus", options: ["uterus", "oviduct", "testis", "seminal vesicle"] }, "."] }
    ],
    modelAnswer: ["Sperms are produced in the testis.", "Fluid that contains nutrients for sperms is produced by the seminal vesicle.", "Fertilization occurs in the oviduct.", "Implantation of an embryo occurs in the uterus."],
    mistakes: [
      { mistake: "Mixing up fertilization and implantation.", correction: "Fertilization occurs in the oviduct. Implantation occurs in the uterus." },
      { mistake: "Writing ovary produces sperms.", correction: "Testis produces sperms. Ovary produces ova." }
    ]
  }
];

let currentQuestionIndex = 0;
let selectedAnswer = null;
let hasChecked = false;
let attemptsCount = {};
let correctOnFirstTry = {};
let userAnswers = {};
let wrongQuestionPool = [];
let inWrongOnlyMode = false;
let wrongModeIndex = 0;
let currentShortIndex = 0;
let currentShortStep = 0;

const screens = {
  home: document.getElementById("home-screen"),
  practice: document.getElementById("practice-screen"),
  short: document.getElementById("short-screen"),
  review: document.getElementById("review-screen")
};

const startBtn = document.getElementById("start-btn");
const shortStartBtn = document.getElementById("short-start-btn");
const currentQNum = document.getElementById("current-q-num");
const totalQNum = document.getElementById("total-q-num");
const progressBar = document.getElementById("progress-bar");
const liveScore = document.getElementById("live-score");
const totalPoints = document.getElementById("total-points");
const liveCorrect = document.getElementById("live-correct");
const liveAttempts = document.getElementById("live-attempts");
const questionJumpList = document.getElementById("question-jump-list");
const questionNavCount = document.getElementById("question-nav-count");
const qTopic = document.getElementById("question-topic");
const qAttemptsBadge = document.getElementById("question-attempts-badge");
const qText = document.getElementById("question-text");
const diagramContainer = document.getElementById("diagram-container");
const optionsContainer = document.getElementById("options-container");
const feedbackBox = document.getElementById("feedback-box");
const hintBtn = document.getElementById("hint-btn");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const meaningZh = document.getElementById("meaning-zh");
const keywordsContainer = document.getElementById("keywords-container");
const hintBox = document.getElementById("hint-box");
const hintText = document.getElementById("hint-text");
const decoderContainer = document.getElementById("decoder-container");
const finalScore = document.getElementById("final-score");
const finalTotal = document.getElementById("final-total");
const firstTryCount = document.getElementById("first-try-count");
const totalAttemptsCount = document.getElementById("total-attempts-count");
const topicsAnalysisContainer = document.getElementById("topics-analysis-container");
const diagnosticRecommendation = document.getElementById("diagnostic-recommendation");
const masterVocabGrid = document.getElementById("master-vocab-grid");
const vocabCounter = document.getElementById("vocab-counter");
const retryAllBtn = document.getElementById("retry-all-btn");
const retryWrongBtn = document.getElementById("retry-wrong-btn");
const shortHomeBackBtn = document.getElementById("short-home-back-btn");
const shortModeHomeBtn = document.getElementById("short-mode-home-btn");
const shortModeBankBtn = document.getElementById("short-mode-bank-btn");
const shortModePracticeBtn = document.getElementById("short-mode-practice-btn");
const shortHomeView = document.getElementById("short-home-view");
const shortGuidedView = document.getElementById("short-guided-view");
const shortFrameBankView = document.getElementById("short-frame-bank-view");
const shortPracticeView = document.getElementById("short-practice-view");
const shortQuestionCards = document.getElementById("short-question-cards");
const shortGuidedKicker = document.getElementById("short-guided-kicker");
const shortGuidedTitle = document.getElementById("short-guided-title");
const shortGuidedSkill = document.getElementById("short-guided-skill");
const shortPrevQBtn = document.getElementById("short-prev-q-btn");
const shortNextQBtn = document.getElementById("short-next-q-btn");
const shortStepProgress = document.getElementById("short-step-progress");
const shortStepTabs = document.getElementById("short-step-tabs");
const shortStepContent = document.getElementById("short-step-content");
const shortFrameBankList = document.getElementById("short-frame-bank-list");
const shortPracticeSelect = document.getElementById("short-practice-select");
const shortPracticeContent = document.getElementById("short-practice-content");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showScreen(screenKey) {
  Object.keys(screens).forEach((key) => {
    screens[key].classList.toggle("hidden", key !== screenKey);
  });
  window.scrollTo(0, 0);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setShortMode(mode) {
  const isHome = mode === "home";
  const isBank = mode === "bank";
  const isPractice = mode === "practice";
  shortHomeView.classList.toggle("hidden", !isHome);
  shortGuidedView.classList.add("hidden");
  shortFrameBankView.classList.toggle("hidden", !isBank);
  shortPracticeView.classList.toggle("hidden", !isPractice);
  [[shortModeHomeBtn, isHome], [shortModeBankBtn, isBank], [shortModePracticeBtn, isPractice]].forEach(([button, active]) => {
    button.classList.toggle("active", active);
  });
  if (isHome) renderShortCards();
  if (isBank) renderFrameBank();
  if (isPractice) renderPracticeMode();
  refreshIcons();
}

function openShortQuestion(index, step = 0) {
  currentShortIndex = Math.max(0, Math.min(index, shortQuestionDatabase.length - 1));
  currentShortStep = Math.max(0, Math.min(step, shortSteps.length - 1));
  shortHomeView.classList.add("hidden");
  shortFrameBankView.classList.add("hidden");
  shortPracticeView.classList.add("hidden");
  shortGuidedView.classList.remove("hidden");
  [shortModeHomeBtn, shortModeBankBtn, shortModePracticeBtn].forEach((button) => button.classList.remove("active"));
  renderShortGuidedQuestion();
  shortGuidedView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderShortCards() {
  shortQuestionCards.innerHTML = "";
  shortQuestionDatabase.forEach((q, index) => {
    const card = document.createElement("article");
    card.className = "short-question-card bg-white rounded-3xl border border-slate-100 shadow-sm p-5 space-y-4";
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <span class="bg-indigo-50 text-indigo-700 font-black px-3 py-1 rounded-full text-sm">${q.id}</span>
        <span class="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-full text-xs">${q.type}</span>
      </div>
      <div>
        <h3 class="font-header text-2xl font-black text-slate-900">${q.topic}</h3>
        <p class="text-slate-500 font-semibold mt-2">${q.keySkill}</p>
      </div>
      <button class="short-card-start w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl px-4 py-3 flex items-center justify-center gap-2 transition-all" type="button">
        Start guided answer <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    `;
    card.querySelector(".short-card-start").addEventListener("click", () => openShortQuestion(index));
    shortQuestionCards.appendChild(card);
  });
  refreshIcons();
}

function renderShortGuidedQuestion() {
  const q = shortQuestionDatabase[currentShortIndex];
  shortGuidedKicker.innerText = `${q.id} / ${shortQuestionDatabase.length} questions`;
  shortGuidedTitle.innerText = q.topic;
  shortGuidedSkill.innerText = q.keySkill;
  shortPrevQBtn.disabled = currentShortIndex === 0;
  shortNextQBtn.disabled = currentShortIndex === shortQuestionDatabase.length - 1;
  shortStepProgress.style.width = `${((currentShortStep + 1) / shortSteps.length) * 100}%`;
  shortStepTabs.innerHTML = "";
  shortSteps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `short-step-tab ${index === currentShortStep ? "active" : ""}`;
    button.innerHTML = `<i data-lucide="${step.icon}" class="w-4 h-4"></i><span>${index + 1}. ${step.title}</span><small>${step.zh}</small>`;
    button.addEventListener("click", () => {
      currentShortStep = index;
      renderShortGuidedQuestion();
    });
    shortStepTabs.appendChild(button);
  });
  const renderers = [renderReadStep, renderUnderstandStep, renderMarksStep, renderBuildStep, renderMistakesStep, renderModelStep];
  shortStepContent.innerHTML = renderers[currentShortStep](q, "guided");
  attachShortBuilderHandlers(shortStepContent);
  refreshIcons();
}

function renderReadStep(q) {
  return `
    <div class="grid grid-cols-1 xl:grid-cols-5 gap-5">
      <section class="short-panel xl:col-span-3">
        <div class="short-section-title"><i data-lucide="book-open" class="w-5 h-5"></i> Step 1: Read the Question</div>
        <p class="short-original">${escapeHtml(q.originalQuestion)}</p>
        <div class="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl text-amber-900 font-semibold">
          先不要急住睇完整中文翻譯。先圈出生字，再逐段拆句。
        </div>
      </section>
      <section class="short-panel xl:col-span-2">
        <div class="short-section-title"><i data-lucide="sparkles" class="w-5 h-5"></i> Difficult Words</div>
        <div class="space-y-3">
          ${q.difficultWords.map((word) => `
            <div class="short-word-card">
              <div class="flex flex-wrap items-center gap-2">
                <span class="short-word">${escapeHtml(word.term)}</span>
                <span class="short-word-zh">${escapeHtml(word.zh)}</span>
              </div>
              <p>${escapeHtml(word.note)}</p>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderUnderstandStep(q) {
  return `
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
      <section class="short-panel">
        <div class="short-section-title"><i data-lucide="align-left" class="w-5 h-5"></i> Sentence Breakdown</div>
        <div class="space-y-3">
          ${q.chunks.map((chunk) => `
            <div class="short-chunk">
              <span>${escapeHtml(chunk.eng)}</span>
              <strong>${escapeHtml(chunk.zh)}</strong>
            </div>
          `).join("")}
        </div>
      </section>
      <section class="short-panel">
        <div class="short-section-title"><i data-lucide="messages-square" class="w-5 h-5"></i> What is the question asking?</div>
        <p class="short-meaning">${escapeHtml(q.meaningZh)}</p>
      </section>
    </div>
  `;
}

function renderMarksStep(q) {
  return `
    <section class="short-panel">
      <div class="short-section-title"><i data-lucide="table-2" class="w-5 h-5"></i> Step 3: Know the Marks</div>
      <div class="overflow-x-auto">
        <table class="short-mark-table">
          <thead><tr><th>Mark</th><th>What you need to write</th><th>Helpful words</th></tr></thead>
          <tbody>
            ${q.marks.map((row) => `
              <tr>
                <td><span class="short-mark-badge">${escapeHtml(row.mark)}</span></td>
                <td>${escapeHtml(row.write)}</td>
                <td><span class="short-helpful">${escapeHtml(row.words)}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderFrameBuilder(q, context) {
  const bank = q.wordBank.map((word) => `<button type="button" class="short-bank-word" data-word="${escapeHtml(word)}">${escapeHtml(word)}</button>`).join("");
  const frames = q.frames.map((frame, frameIndex) => {
    const parts = frame.parts.map((part) => {
      if (typeof part === "string") return `<span>${escapeHtml(part)}</span>`;
      return `
        <select class="short-blank" data-answer="${escapeHtml(part.answer)}" aria-label="Fill blank">
          <option value="">______</option>
          ${part.options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
        </select>
      `;
    }).join("");
    return `
      <div class="short-frame-card">
        <h4>${escapeHtml(frame.label)}</h4>
        <div class="short-frame-line">${parts}</div>
      </div>
    `;
  }).join("");
  return `
    <div class="space-y-4 short-builder" data-context="${context}">
      <div class="short-word-bank">
        <p class="font-bold text-slate-700">Word Bank 詞彙庫：按字可以填入第一個合適空格</p>
        <div class="flex flex-wrap gap-2 mt-2">${bank}</div>
      </div>
      ${frames}
      <div class="flex flex-wrap gap-3">
        <button type="button" class="short-reveal-model bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-xl flex items-center gap-2">
          <i data-lucide="eye" class="w-4 h-4"></i> Show model answer
        </button>
        <button type="button" class="short-clear-builder bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl flex items-center gap-2">
          <i data-lucide="eraser" class="w-4 h-4"></i> Clear
        </button>
      </div>
      <div class="short-model-box hidden">
        <h4>Model Answer 參考答案</h4>
        ${q.modelAnswer.map((line) => `<p>${highlightShortKeywords(line)}</p>`).join("")}
      </div>
    </div>
  `;
}

function renderBuildStep(q) {
  return `
    <section class="short-panel">
      <div class="short-section-title"><i data-lucide="blocks" class="w-5 h-5"></i> Step 4: Build Your Answer</div>
      <p class="text-slate-500 font-semibold mb-4">先用 sentence frames 砌短句。這裡不判分，只幫你建立完整英文答案。</p>
      ${renderFrameBuilder(q, "guided")}
    </section>
  `;
}

function renderMistakesStep(q) {
  return `
    <section class="short-panel">
      <div class="short-section-title"><i data-lucide="alert-triangle" class="w-5 h-5"></i> Step 5: Common Mistakes 常見錯誤</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${q.mistakes.map((item) => `
          <div class="short-mistake-card">
            <p class="mistake"><strong>Mistake:</strong> ${escapeHtml(item.mistake)}</p>
            <p class="correction"><strong>Correction:</strong> ${escapeHtml(item.correction)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function highlightShortKeywords(line) {
  const terms = ["23 pairs", "nucleus", "XX", "A pairs with T", "C pairs with G", "decreases", "feed on", "not enough food", "stopper", "vacuum", "conduction", "convection", "potential", "kinetic", "independent variable", "controlled variables", "dependent variable", "fertilization", "implantation", "oviduct", "uterus"];
  let output = escapeHtml(line);
  terms.forEach((term) => {
    output = output.replaceAll(escapeHtml(term), `<mark>${escapeHtml(term)}</mark>`);
  });
  return output;
}

function renderModelStep(q) {
  return `
    <section class="short-panel">
      <div class="short-section-title"><i data-lucide="badge-check" class="w-5 h-5"></i> Step 6: Model Answer</div>
      <div class="short-model-answer-list">
        ${q.modelAnswer.map((line, index) => `
          <div class="short-model-answer">
            <span>${index + 1}</span>
            <p>${highlightShortKeywords(line)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function attachShortBuilderHandlers(root) {
  root.querySelectorAll(".short-blank").forEach((select) => {
    select.addEventListener("change", () => {
      const frameCard = select.closest(".short-frame-card");
      frameCard.classList.toggle("completed", [...frameCard.querySelectorAll(".short-blank")].every((item) => item.value));
    });
  });
  root.querySelectorAll(".short-bank-word").forEach((button) => {
    button.addEventListener("click", () => {
      const builder = button.closest(".short-builder");
      const blanks = [...builder.querySelectorAll(".short-blank")];
      const matchingBlank = blanks.find((select) => !select.value && [...select.options].some((option) => option.value === button.dataset.word));
      if (!matchingBlank) return;
      matchingBlank.value = button.dataset.word;
      matchingBlank.dispatchEvent(new Event("change"));
    });
  });
  root.querySelectorAll(".short-reveal-model").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".short-builder").querySelector(".short-model-box").classList.remove("hidden");
    });
  });
  root.querySelectorAll(".short-clear-builder").forEach((button) => {
    button.addEventListener("click", () => {
      const builder = button.closest(".short-builder");
      builder.querySelectorAll(".short-blank").forEach((select) => { select.value = ""; });
      builder.querySelectorAll(".short-frame-card").forEach((card) => { card.classList.remove("completed"); });
      builder.querySelector(".short-model-box").classList.add("hidden");
    });
  });
}

function renderFrameBank() {
  shortFrameBankList.innerHTML = frameBank.map((group) => `
    <section class="short-panel">
      <div class="short-section-title"><i data-lucide="quote" class="w-5 h-5"></i> ${escapeHtml(group.type)}</div>
      <div class="space-y-2">
        ${group.frames.map((frame) => `<div class="short-bank-frame">${escapeHtml(frame)}</div>`).join("")}
      </div>
    </section>
  `).join("");
}

function renderPracticeMode() {
  shortPracticeSelect.innerHTML = shortQuestionDatabase.map((q, index) => `<option value="${index}">${q.id} ${q.topic}</option>`).join("");
  shortPracticeSelect.value = String(currentShortIndex);
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const q = shortQuestionDatabase[Number(shortPracticeSelect.value || 0)];
  currentShortIndex = Number(shortPracticeSelect.value || 0);
  shortPracticeContent.innerHTML = `
    <div class="grid grid-cols-1 xl:grid-cols-5 gap-5">
      <section class="short-panel xl:col-span-2">
        <div class="short-section-title"><i data-lucide="book-open" class="w-5 h-5"></i> Practice Question</div>
        <p class="short-original">${escapeHtml(q.originalQuestion)}</p>
        <div class="mt-4">
          <h4 class="font-bold text-slate-800 mb-2">Difficult words only</h4>
          <div class="space-y-2">
            ${q.difficultWords.map((word) => `<div class="short-mini-word"><strong>${escapeHtml(word.term)}</strong><span>${escapeHtml(word.zh)}</span></div>`).join("")}
          </div>
        </div>
      </section>
      <section class="short-panel xl:col-span-3">
        <div class="short-section-title"><i data-lucide="blocks" class="w-5 h-5"></i> Complete the sentence frames</div>
        ${renderFrameBuilder(q, "practice")}
      </section>
    </div>
  `;
  attachShortBuilderHandlers(shortPracticeContent);
  refreshIcons();
}

function getActiveQuestion() {
  if (inWrongOnlyMode) {
    const originalId = wrongQuestionPool[wrongModeIndex];
    return questionDatabase.find((q) => q.id === originalId);
  }
  return questionDatabase[currentQuestionIndex];
}

function getCurrentQuestionId() {
  const q = getActiveQuestion();
  return q ? q.id : null;
}

function renderVisual(visual) {
  const overlays = (visual.overlays || []).map((overlay) => {
    const x = `${overlay.x}%`;
    const y = `${overlay.y}%`;
    if (overlay.kind === "label") {
      const tone = overlay.tone ? ` ${overlay.tone}` : "";
      const size = overlay.size ? ` ${overlay.size}` : "";
      return `<span class="visual-label${tone}${size}" style="left:${x};top:${y};">${overlay.text}</span>`;
    }
    const tone = overlay.tone ? ` ${overlay.tone}` : "";
    return `<span class="visual-badge${tone}" style="left:${x};top:${y};">${overlay.text}</span>`;
  }).join("");

  const caption = visual.caption ? `<div class="visual-caption">${visual.caption}</div>` : "";

  return `
    <figure class="question-visual">
      <img src="${imageBase}${visual.image}" alt="${visual.alt}" loading="eager">
      ${overlays}
      ${caption}
    </figure>
  `;
}

function updateLiveStats() {
  const totalAtts = Object.values(attemptsCount).reduce((a, b) => a + b, 0);
  const totalCorr = Object.keys(userAnswers).filter((qId) => {
    const q = questionDatabase.find((x) => x.id === Number(qId));
    return q && userAnswers[qId] === q.correctAnswer;
  }).length;
  const firstTryScore = Object.values(correctOnFirstTry).filter(Boolean).length;

  liveAttempts.innerText = totalAtts;
  liveCorrect.innerText = totalCorr;
  liveScore.innerText = firstTryScore;
  totalPoints.innerText = questionDatabase.length;
  renderQuestionNavigator();
}

function getQuestionStatus(q) {
  if (!userAnswers[q.id]) {
    return {
      label: "未做",
      icon: "circle",
      className: "border-slate-100 bg-slate-50/70 text-slate-600 hover:border-cyan-200 hover:bg-white"
    };
  }

  if (userAnswers[q.id] === q.correctAnswer) {
    return {
      label: "已答對",
      icon: "check-circle",
      className: "border-emerald-100 bg-emerald-50/80 text-emerald-800 hover:border-emerald-300"
    };
  }

  return {
    label: "待重做",
    icon: "alert-circle",
    className: "border-rose-100 bg-rose-50/80 text-rose-800 hover:border-rose-300"
  };
}

function renderQuestionNavigator() {
  if (!questionJumpList) return;

  const activeId = getCurrentQuestionId();
  questionNavCount.innerText = `${questionDatabase.length} Qs`;
  questionJumpList.innerHTML = "";

  questionDatabase.forEach((q) => {
    const status = getQuestionStatus(q);
    const isActive = q.id === activeId;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.questionId = q.id;
    button.className = [
      "w-full text-left p-3 rounded-2xl border transition-all group",
      isActive ? "border-teal-500 bg-teal-50 text-teal-900 shadow-sm" : status.className
    ].join(" ");

    const shortQuestion = q.question.length > 82 ? `${q.question.slice(0, 82)}...` : q.question;
    button.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-header font-bold text-base">Q${q.id}</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-teal-100 text-teal-800" : "bg-white/70 text-current"}">${status.label}</span>
          </div>
          <div class="text-sm font-bold text-slate-400 mt-1 truncate">${q.topic}</div>
          <div class="text-sm text-slate-600 leading-snug mt-1 line-clamp-2">${shortQuestion}</div>
        </div>
        <i data-lucide="${isActive ? "arrow-right-circle" : status.icon}" class="w-4 h-4 flex-shrink-0 mt-0.5"></i>
      </div>
    `;
    button.addEventListener("click", () => jumpToQuestion(q.id));
    questionJumpList.appendChild(button);
  });

  refreshIcons();
}

function jumpToQuestion(questionId) {
  const nextIndex = questionDatabase.findIndex((q) => q.id === questionId);
  if (nextIndex === -1) return;

  inWrongOnlyMode = false;
  wrongModeIndex = 0;
  currentQuestionIndex = nextIndex;
  renderQuestion();
  updateLiveStats();
  screens.practice.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const q = getActiveQuestion();
  if (!q) return;

  selectedAnswer = null;
  hasChecked = false;
  attemptsCount[q.id] = attemptsCount[q.id] || 0;

  hintBox.classList.add("hidden");
  feedbackBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  checkBtn.classList.remove("hidden");
  checkBtn.disabled = true;

  qTopic.innerText = q.topic;
  qText.innerText = q.question;
  meaningZh.innerText = q.meaningZh;
  hintText.innerText = q.hint;
  diagramContainer.innerHTML = renderVisual(q.visual);

  const curAtt = attemptsCount[q.id];
  if (curAtt === 0) {
    qAttemptsBadge.innerText = "第一次嘗試 (First Attempt)";
    qAttemptsBadge.className = "text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full";
  } else {
    qAttemptsBadge.innerText = `第 ${curAtt + 1} 次嘗試`;
    qAttemptsBadge.className = "text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full";
  }

  const totalCount = inWrongOnlyMode ? wrongQuestionPool.length : questionDatabase.length;
  const currentIndex = inWrongOnlyMode ? wrongModeIndex : currentQuestionIndex;
  currentQNum.innerText = currentIndex + 1;
  totalQNum.innerText = totalCount;
  progressBar.style.width = `${((currentIndex + 1) / totalCount) * 100}%`;

  decoderContainer.innerHTML = "";
  q.decoderChunks.forEach((chunk) => {
    const block = document.createElement("div");
    block.className = "p-2.5 bg-slate-50 rounded-xl border border-slate-200/60";
    block.innerHTML = `
      <div class="text-sm font-bold text-indigo-700 font-mono tracking-wider">${chunk.eng}</div>
      <div class="text-sm font-semibold text-slate-500 mt-0.5">${chunk.translation}</div>
    `;
    decoderContainer.appendChild(block);
  });

  optionsContainer.innerHTML = "";
  Object.keys(q.options).forEach((key) => {
    const optionText = q.options[key];
    const vocabs = q.optionVocab[key] || [];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn w-full text-left p-4 rounded-2xl border-2 border-slate-100 bg-white hover:border-teal-300 hover:bg-teal-50/20 flex flex-col gap-2 transition-all";
    btn.dataset.option = key;

    const vocabPillsMarkup = vocabs.length > 0 ? `
      <div class="flex flex-wrap gap-1.5 mt-1 border-t border-slate-100 pt-2 w-full">
        ${vocabs.map((v) => `
          <span class="vocab-pill inline-flex items-center gap-1 text-sm bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-semibold">
            <span class="text-indigo-600">${v.term}</span>
            <span class="text-slate-400 font-normal">=</span>
            <span class="text-teal-700">${v.translation}</span>
          </span>
        `).join("")}
      </div>
    ` : "";

    btn.innerHTML = `
      <div class="flex items-start gap-3 w-full">
        <span class="option-letter w-7 h-7 flex-shrink-0 rounded-lg bg-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center border border-slate-200">${key}</span>
        <span class="option-text text-slate-700 pt-0.5 text-base md:text-lg font-bold">${optionText}</span>
      </div>
      ${vocabPillsMarkup}
    `;
    btn.addEventListener("click", () => selectOption(key));
    optionsContainer.appendChild(btn);
  });

  keywordsContainer.innerHTML = "";
  q.keywords.forEach((kw) => {
    const kwCard = document.createElement("button");
    kwCard.type = "button";
    kwCard.className = "w-full text-left p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors group cursor-pointer";
    kwCard.innerHTML = `
      <div class="flex justify-between items-center gap-2 mb-1">
        <span class="keyword-word font-bold text-teal-700 text-base font-header group-hover:underline">${kw.word}</span>
        <span class="keyword-zh text-sm bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">${kw.zh}</span>
      </div>
      <p class="keyword-desc text-sm text-slate-500 leading-normal">${kw.desc}</p>
    `;
    kwCard.addEventListener("click", () => highlightWordInQuestion(kw.word));
    keywordsContainer.appendChild(kwCard);
  });

  renderQuestionNavigator();
  refreshIcons();
}

function selectOption(key) {
  if (hasChecked) return;

  selectedAnswer = key;
  checkBtn.disabled = false;

  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    const opt = btn.dataset.option;
    const indexCircle = btn.querySelector(".option-letter");
    if (opt === key) {
      btn.className = "option-btn w-full text-left p-4 rounded-2xl border-2 border-teal-500 bg-teal-50/40 flex flex-col gap-2 transition-all";
      indexCircle.className = "option-letter w-7 h-7 flex-shrink-0 rounded-lg bg-teal-500 text-white font-bold text-sm flex items-center justify-center border border-teal-600";
    } else {
      btn.className = "option-btn w-full text-left p-4 rounded-2xl border-2 border-slate-100 bg-white hover:border-teal-300 hover:bg-teal-50/20 flex flex-col gap-2 transition-all";
      indexCircle.className = "option-letter w-7 h-7 flex-shrink-0 rounded-lg bg-slate-100 text-slate-600 font-bold text-sm flex items-center justify-center border border-slate-200";
    }
  });
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightWordInQuestion(word) {
  const q = getActiveQuestion();
  const originalText = q.question;
  const regex = new RegExp(`(${escapeRegExp(word)})`, "gi");

  if (originalText.toLowerCase().includes(word.toLowerCase())) {
    qText.innerHTML = originalText.replace(regex, `<span class="bg-yellow-200 text-slate-900 px-1 py-0.5 rounded font-bold transition-all">$1</span>`);
    setTimeout(() => {
      qText.innerText = originalText;
    }, 2500);
  }
}

hintBtn.addEventListener("click", () => {
  hintBox.classList.remove("hidden");
  hintBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

checkBtn.addEventListener("click", () => {
  const q = getActiveQuestion();
  if (!selectedAnswer || hasChecked) return;

  hasChecked = true;
  checkBtn.classList.add("hidden");
  attemptsCount[q.id]++;

  const isCorrect = selectedAnswer === q.correctAnswer;
  if (attemptsCount[q.id] === 1) {
    correctOnFirstTry[q.id] = isCorrect;
  }
  userAnswers[q.id] = selectedAnswer;
  updateLiveStats();

  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    const opt = btn.dataset.option;
    const indexCircle = btn.querySelector(".option-letter");
    if (opt === q.correctAnswer) {
      btn.className = "option-btn w-full text-left p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-50/30 flex flex-col gap-2 transition-all animate-success";
      indexCircle.className = "option-letter w-7 h-7 flex-shrink-0 rounded-lg bg-emerald-500 text-white font-bold text-sm flex items-center justify-center border border-emerald-600";
    } else if (opt === selectedAnswer && !isCorrect) {
      btn.className = "option-btn w-full text-left p-4 rounded-2xl border-2 border-rose-400 bg-rose-50/30 flex flex-col gap-2 transition-all";
      indexCircle.className = "option-letter w-7 h-7 flex-shrink-0 rounded-lg bg-rose-400 text-white font-bold text-sm flex items-center justify-center border border-rose-500";
    } else {
      btn.className = "option-btn w-full text-left p-4 rounded-2xl border border-slate-100 bg-slate-50/40 opacity-50 flex flex-col gap-2 transition-all cursor-not-allowed";
    }
  });

  feedbackBox.classList.remove("hidden");
  if (isCorrect) {
    feedbackBox.className = "p-5 rounded-3xl border border-emerald-200 bg-emerald-50 text-emerald-900 space-y-2";
    feedbackBox.innerHTML = `
      <div class="flex items-center gap-2 font-bold font-header text-lg">
        <i data-lucide="smile-plus" class="w-6 h-6 text-emerald-600"></i> 答對了！(Correct!)
      </div>
      <p class="text-sm leading-relaxed">${q.explanation[q.correctAnswer]}</p>
    `;
    nextBtn.classList.remove("hidden");
  } else {
    feedbackBox.className = "p-5 rounded-3xl border border-rose-200 bg-rose-50 text-rose-950 space-y-3";
    if (!wrongQuestionPool.includes(q.id)) {
      wrongQuestionPool.push(q.id);
    }
    feedbackBox.innerHTML = `
      <div class="flex items-center gap-2 font-bold font-header text-base">
        <i data-lucide="frown" class="w-5 h-5 text-rose-600"></i> 不正確，請再試一次！
      </div>
      <p class="text-xs md:text-sm leading-relaxed">${q.explanation[selectedAnswer] || "這裡好像還有不對的地方。"}</p>
      <div class="pt-2 flex flex-wrap gap-3">
        <button id="try-again-btn" class="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5 shadow">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> 再試一次這題 (Try Again)
        </button>
        <button id="skip-btn" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5">
          跳過此題 <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
    document.getElementById("try-again-btn").addEventListener("click", renderQuestion);
    document.getElementById("skip-btn").addEventListener("click", advanceQuestion);
  }

  refreshIcons();
});

nextBtn.addEventListener("click", advanceQuestion);

function advanceQuestion() {
  if (inWrongOnlyMode) {
    if (wrongModeIndex < wrongQuestionPool.length - 1) {
      wrongModeIndex++;
      renderQuestion();
      updateLiveStats();
    } else {
      compileReviewPage();
    }
    return;
  }

  if (currentQuestionIndex < questionDatabase.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    updateLiveStats();
  } else {
    compileReviewPage();
  }
}

function compileReviewPage() {
  showScreen("review");

  const totalQuestions = questionDatabase.length;
  const firstTryCountVal = Object.values(correctOnFirstTry).filter(Boolean).length;
  const totalAttemptsCountVal = Object.values(attemptsCount).reduce((a, b) => a + b, 0);

  finalScore.innerText = firstTryCountVal;
  finalTotal.innerText = totalQuestions;
  firstTryCount.innerText = firstTryCountVal;
  totalAttemptsCount.innerText = totalAttemptsCountVal;

  if (wrongQuestionPool.length > 0) {
    retryWrongBtn.classList.remove("hidden");
    retryWrongBtn.innerHTML = `<i data-lucide="alert-circle" class="w-4 h-4"></i> 專注重做 ${wrongQuestionPool.length} 題答錯題目`;
  } else {
    retryWrongBtn.classList.add("hidden");
  }

  topicsAnalysisContainer.innerHTML = "";
  const topicsList = [...new Set(questionDatabase.map((q) => q.topic))];
  topicsList.forEach((topic) => {
    const questionsInTopic = questionDatabase.filter((q) => q.topic === topic);
    const answeredCorrectFirstTry = questionsInTopic.filter((q) => correctOnFirstTry[q.id] === true).length;
    const totalInTopic = questionsInTopic.length;
    const pct = Math.round((answeredCorrectFirstTry / totalInTopic) * 100);
    let colorClass = "from-emerald-400 to-emerald-500";
    if (pct < 50) colorClass = "from-rose-400 to-rose-500";
    else if (pct < 80) colorClass = "from-amber-400 to-amber-500";

    const topicBar = document.createElement("div");
    topicBar.className = "space-y-1.5";
    topicBar.innerHTML = `
      <div class="flex justify-between text-xs font-semibold gap-3">
        <span class="text-slate-700">${topic}</span>
        <span class="text-slate-500">${answeredCorrectFirstTry}/${totalInTopic} (${pct}%)</span>
      </div>
      <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
        <div class="bg-gradient-to-r ${colorClass} h-full rounded-full" style="width: ${pct}%;"></div>
      </div>
    `;
    topicsAnalysisContainer.appendChild(topicBar);
  });

  if (firstTryCountVal === totalQuestions) {
    diagnosticRecommendation.innerHTML = `
      <div class="p-3 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-xs md:text-sm space-y-2">
        <p class="font-bold">非常卓越！首推全對！</p>
        <p>你對這 ${totalQuestions} 條中一關鍵科學 MC 的理解以及英文題意解讀能力都達到極佳水平。</p>
      </div>
    `;
  } else {
    const weakTopics = questionDatabase
      .filter((q) => !correctOnFirstTry[q.id])
      .map((q) => q.topic);
    const uniqueWeakTopics = [...new Set(weakTopics)];

    diagnosticRecommendation.innerHTML = `
      <div class="space-y-3">
        <p class="text-xs md:text-sm">你在以下幾個科學課題中似乎遇見了英文生字或概念死角，建議重點溫習：</p>
        <div class="flex flex-wrap gap-2">
          ${uniqueWeakTopics.map((t) => `<span class="bg-rose-50 text-rose-700 border border-rose-100 text-xs font-bold px-2.5 py-1 rounded-lg">${t}</span>`).join("")}
        </div>
        <p class="text-xs text-slate-500 leading-normal">
          下一步：先用下方的生字字典閃卡庫，一邊看中文，一邊大聲朗讀和默寫高頻核心字。
        </p>
      </div>
    `;
  }

  masterVocabGrid.innerHTML = "";
  let wordsCount = 0;
  questionDatabase.forEach((q) => {
    q.keywords.forEach((kw) => {
      wordsCount++;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "bg-slate-50 border border-slate-100 p-4 rounded-2xl text-left space-y-2 hover:bg-white hover:shadow-md transition-all group cursor-pointer relative";
      card.innerHTML = `
        <div class="flex justify-between items-start gap-2">
          <span class="font-bold text-teal-800 font-header group-hover:text-indigo-600 transition-colors">${kw.word}</span>
          <span class="bg-slate-200 text-slate-700 font-bold text-[10px] px-2 py-0.5 rounded">${kw.zh}</span>
        </div>
        <p class="text-xs text-slate-500 border-t pt-1.5 border-dashed border-slate-200 mt-1">${kw.desc}</p>
      `;
      masterVocabGrid.appendChild(card);
    });
  });

  vocabCounter.innerText = `${wordsCount} 個高頻生字`;
  refreshIcons();
}

retryAllBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  selectedAnswer = null;
  hasChecked = false;
  attemptsCount = {};
  correctOnFirstTry = {};
  userAnswers = {};
  wrongQuestionPool = [];
  inWrongOnlyMode = false;
  wrongModeIndex = 0;
  updateLiveStats();
  showScreen("practice");
  renderQuestion();
});

retryWrongBtn.addEventListener("click", () => {
  if (wrongQuestionPool.length === 0) return;
  inWrongOnlyMode = true;
  wrongModeIndex = 0;
  selectedAnswer = null;
  hasChecked = false;
  wrongQuestionPool.forEach((id) => {
    attemptsCount[id] = 0;
  });
  showScreen("practice");
  renderQuestion();
  updateLiveStats();
});

startBtn.addEventListener("click", () => {
  showScreen("practice");
  renderQuestion();
  updateLiveStats();
});

shortStartBtn.addEventListener("click", () => {
  showScreen("short");
  setShortMode("home");
});

shortHomeBackBtn.addEventListener("click", () => {
  showScreen("home");
});

shortModeHomeBtn.addEventListener("click", () => setShortMode("home"));
shortModeBankBtn.addEventListener("click", () => setShortMode("bank"));
shortModePracticeBtn.addEventListener("click", () => setShortMode("practice"));

shortPrevQBtn.addEventListener("click", () => {
  if (currentShortIndex > 0) openShortQuestion(currentShortIndex - 1, currentShortStep);
});

shortNextQBtn.addEventListener("click", () => {
  if (currentShortIndex < shortQuestionDatabase.length - 1) openShortQuestion(currentShortIndex + 1, currentShortStep);
});

shortPracticeSelect.addEventListener("change", renderPracticeQuestion);

document.addEventListener("DOMContentLoaded", refreshIcons);
refreshIcons();
