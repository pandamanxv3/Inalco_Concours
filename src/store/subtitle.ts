export type subtitleType = {
	fr: string;
	kr: string;
	arabic: string
	startTimer: number;
	endTimer: number;
}

export const frSubtitle: subtitleType[] = [
	{
		fr: "Ici, je me suis toujours sentie chez moi et j'en connais chaque recoin.",
		kr: "여기서 나는 항상 집 같은 느낌을 받았고, 이곳의 모든 곳을 알고 있어.",
		arabic: "هنا، شعرت دائمًا بأنني في منزلي وأعرف كل زاوية منه.",
		startTimer: 0,
		endTimer: 4
		
	},
	{
		fr: "Agile et discrète, j'ai appris à filer entre les ombres de ceux qui marchent à mes côtés et éviter les regards indiscrets.",
		kr: "날렵하고 조용한 나는 내 곁을 걷는 사람들의 그림자 사이를 미끄러져 다니며, 눈길을 피해왔어.",
		arabic: "رشيقة وخفية، تعلمت كيف أتسلل بين ظلال الذين يمشون بجانبي وأتجنب الأنظار الفضولية.",
		startTimer: 5,
		endTimer: 9
	},
	{
		fr: "La ville m'offre sa vitalité, son énergie, mais cache aussi ses pièges, ses zones d'ombre où il faut savoir montrer les croc.",
		kr: "이 도시는 나에게 활력과 에너지를 주지만, 함정과 어두운 구역도 숨기고 있어. 그곳에서는 날카로운 이빨을 보여줄 줄 알아야 해.",
		arabic: "تمنحني المدينة حيويتها وطاقتها، لكنها أيضًا تخبئ مكائدها ومناطقها المظلمة التي يجب فيها أن أظهر الأنياب.",
		startTimer: 10,
		endTimer: 14
	},
	{
		fr: "Dans cette jungle, je joue un double jeu",
		kr: "이 정글과 같은 세상에서, 나는 이중적인 역할을 하고 있어.",
		arabic: "في هذه الغابة، ألعب دوراً مزدوجاً.",
		startTimer: 15,
		endTimer: 19
	},
	{
		fr: "Je me fonds dans la masse pour éviter d'être remarquée, tout en me tenant prête à bondir vers les rêves que j'ai choisis de chasser. ",
		kr: "나는 주목받지 않기 위해 사람들 속에 녹아들지만, 내가 추구하는 꿈을 위해 뛰어올라야 할 준비를 해.",
		arabic: "أذوب وسط الجموع لأتجنب اللفت للنظر، مع البقاء مستعدة للانقضاض نحو الأحلام التي اخترت أن أطاردها.",
		startTimer: 20,
		endTimer: 29
	},
	{
		fr: "Toujours en mouvement, je dois prouver davantage que les autres, cherchant à laisser ma marque.",
		kr: "항상 움직이며, 나는 다른 사람들보다 더 많이 증명해야 하며, 내 흔적을 남기려고 노력해.",
		arabic: "دائمًا في حركة، يجب أن أثبت أكثر من الآخرين، وأسعى لترك بصمتي.",
		startTimer: 30,
		endTimer: 39
	},
	{
		fr: "Mais la plus part du temps je pense que c’est bien tel quel.",
		kr: "하지만 대부분의 시간에는 그것이 그대로 좋다고 생각해.",
		arabic: "ولكن معظم الوقت أعتقد أنها جيدة كما هي.",
		startTimer: 40,
		endTimer: 49
	},
	{
		fr: "Et puis, soudainement, une pensée me traverse l'esprit. ",
		kr: "그리고 갑자기, 한 가지 생각이 내 마음을 스쳐 지나가.",
		arabic: "ثم فجأة، فكرة واحدة تعبر عقلي.",
		startTimer: 50,
		endTimer: 59
	},
	{
		fr: "Ma vie est-elle une course vers ce qui me semble juste, ou simplement une suite de réflexes appris ?",
		kr: "내 삶은 내가 옳다고 생각하는 것으로 가는 경주인가, 아니면 그저 배운 반사들의 연속일까?",
		arabic: "هل حياتي سباق نحو ما أعتقد أنه صحيح، أم مجرد سلسلة من الردود المعتادة؟",
		startTimer: 60,
		endTimer: 69
	},
	{
		fr: "En réalité, je ne sais pas.",
		kr: "사실, 아모고또 모르겠어.",
		arabic: "في الواقع، لا أعرف.",
		startTimer: 70,
		endTimer: 79
	},
	{
		fr: "En m’écoutant sincèrement, je veux simplement inspirer et épauler celles qui m'entourent, car je sais que nous progresserons mieux ensemble.",
		kr: "솔직하게 내 안을 들여다보며, 나는 그저 내 주변의 여성들에게 영감을 주고 도와주고 싶어. 왜냐하면 우리는 함께 더 나은 성장을 할 수 있다는 것을 알기 때문이야.",
		arabic: "بالاستماع إلى نفسي بصدق، أريد أن ألهم وأدعم النساء من حولي، لأنني أعلم أننا سنتقدم بشكل أفضل معًا.",
		startTimer: 80,
		endTimer: 89
	},
	{
		fr: "Dans ce ballet urbain, je ne perds jamais de vue que chaque jour est une chasse, chaque interaction une danse.",
		kr: "도시의 발레에서, 나는 매일이 사냥이고, 모든 상호작용이 춤이라는 것을 결코 잊지 않아.",
		arabic: "في هذا الباليه الحضري، لا أفقد من الأفق أن كل يوم هو صيد، وكل تفاعل هو رقص.",
		startTimer: 90,
		endTimer: 99
	},
	{
		fr: "Je suis à la fois chasseuse et camarade, solitaire mais jamais vraiment seule. Cette dualité est mon essence.",
		kr: "나는 동시에 사냥꾼이자 동료이며, 외로운 존재지만, 진정으로 혼자가 되지는 않아. 이 이중성이 나의 본질이야.",
		arabic: "أنا في نفس الوقت صيادة ورفيقة، وحيدة ولكن ليست حقًا وحيدة. هذا التناقض هو جوهري.",
		startTimer: 100,
		endTimer: 109
	},
	{
		fr: "Suis-je la seule à penser ainsi ?",
		kr: "나만 이런생각하나?",
		arabic: "هل أنا الوحيدة التي تفكر هكذا؟",
		startTimer: 110,
		endTimer: 119
	}
]

export const krSubtitle: subtitleType[] = [
	{
		fr: "Je me sens souvent perdu, comme emporté par des courants invisibles, incertain de la direction de ma vie.",
		kr: "어두운 밤에 물살에 휩쓸려 가는 것처럼, 삶의 방향을 확신할 수 없는 길을 잃은 공포를 느낄때가 가끔 있어.",
		arabic: "أشعر كثيرًا بأنني ضائع، كما لو كنت محمولًا بتيارات غير مرئية، غير متأكد من اتجاه حياتي.",
		startTimer: 0,
		endTimer: 10
	},
	{
		fr: "Parfois, je rêve d'acheter un camping-car, de laisser le vent me guider et de m'y installer.",
		kr: "가끔 캠핑카나 사서 바람부는 방향 따라 여행을 하거나, 그러다 발길 닿는 곳에 잠깐 머물러도 보고싶어.",
		arabic: "أحيانًا، أحلم بشراء عربة سكن وأترك الرياح ترشدني وأقيم فيها.",
		startTimer: 10,
		endTimer: 19
	},
	{
		fr: "Mais je pense aussi à vendre tout ce que je possède pour vivre dans une forêt, peut-être sur l'île de Jeju, où le ciel semble sans fin.",
		kr: "근데 또, 대부분은 지금 이대로도 괜찮다 싶어.",
		arabic: "لكن معظم الوقت، أعتقد أنها جيدة كما هي.",
		startTimer: 20,
		endTimer: 29
	},
	{
		fr: "Le matin, je me sens léger, presque éthéré, surfant sur l'océan.",
		kr: "새벽엔 뭐 서핑이나 바다수영 이런거 하면 거기가 극락이지.",
		arabic: "في الصباح، أشعر بخفة، تقريبًا طيفي، أتزلج على المحيط.",
		startTimer: 30,
		endTimer: 39
	},
	{
		fr: "Parfois, j'ai envie de m'envoler pour l'Europe ou l'Italie, de trouver une maison abandonnée pour un euro, de la rénover et d'y vivre.",
		kr: "어쩔땐 유럽 어드메 이탈리아같은데, 1유로짜리 폐가 하나 사가지구 리모델링해서 살아보고도 싶고.",
		arabic: "أحيانًا، أرغب في الطيران إلى أوروبا أو إيطاليا، لإيجاد منزل مهجور يباع بيورو واحد، لتجديده والعيش فيه.",
		startTimer: 40,
		endTimer: 49
	},
	{
		fr: "Mais la plupart du temps, je pense que c'est bien tel quel.",
		kr: "근데 또, 대부분은 지금 이대로도 괜찮다 싶어.",
		arabic: "لكن معظم الوقت، أعتقد أنها جيدة كما هي.",
		startTimer: 50,
		endTimer: 59
	},
	{
		fr: "Et puis, soudainement, une pensée me traverse l'esprit.",
		kr: "그러다 문득 그런 생각 드는거지.",
		arabic: "ومن ثم، فجأة، يخطر ببالي فكرة.",
		startTimer: 60,
		endTimer: 69
	},
	{
		fr: "Qu'est-ce que je cherche? Qu'est-ce que je poursuis? Est-ce vraiment nécessaire dans la vie? Ma vie est-elle trop impulsive?",
		kr: "내가 뭘 찾고 있는거지? 내가 대체 쫓고있는 게 뭐지? 삶에서 그게 정말 필요하긴 한건가? 나 너무 아무생각 없이 사나?",
		arabic: "ما الذي أبحث عنه؟ ما الذي أتابعه؟ هل هذا ضروري حقًا في الحياة؟ هل حياتي متهورة جدًا؟",
		startTimer: 70,
		endTimer: 79
	},
	{
		fr: "En réalité, je ne sais pas.",
		kr: "사실, 아모고또 모르겠어.",
		arabic: "في الواقع، لا أعرف.",
		startTimer: 80,
		endTimer: 89
	},
	{
		fr: "À trente et un ans, presque trente-deux en âge coréen, je dérive encore, incertain de ce que je veux faire de ma vie.",
		kr: "서른하나, 한국나이로 서른둘씩이나 먹고서 아직도 확신없이 표류하고 있는 기분 드는 거, 괜찮은 건가?",
		arabic: "في سن الواحد والثلاثين، تقريبًا الثانية والثلاثين بالعمر الكوري، ما زلت أطفو، غير متأكد مما أريد أن أفعله بحياتي.",
		startTimer: 90,
		endTimer: 99
	},
	{
		fr: "Qui aurait pensé que je remettrais encore en question ma carrière? Et me voilà, célibataire, libre comme l'air.",
		kr: "이나이까지 진로고민 하고있을 줄 누가 알았겠니. 게다가 지금 공기만치 자유를 만끽하는 싱글이란 말이야?",
		arabic: "من كان يظن أنني سأشكك مجددًا في مسيرتي المهنية؟ وها أنا، أعزب، حر كالهواء.",
		startTimer: 100,
		endTimer: 109
	},
	{
		fr: "Mes parents vieillissent, et j'aimerais leur donner un petit-enfant,",
		kr: "엄마아빠는 늙어가는데 손자 한번 안겨주고싶긴 하다가, ",
		arabic: "والديّ يتقدمان في العمر، وأود أن أعطيهما حفيدًا،",
		startTimer: 110,
		endTimer: 119
	},
	{
		fr: "mais quand je pense à la Terre malade, je me demande parfois si nous, en tant qu'humains, sommes comme des oiseaux insouciants, ignorant les avertissements d'une tempête imminente.",
		kr: "병들어가는 지구를 보면 그냥 인류는 필멸의 존재다, 번식을 멈추자 이런생각든다? 인간이란게, 마치 폭풍경보를 못알아듣는 탓에 근심걱정이 없는 새들같아.",
		arabic: "لكن عندما أفكر في الأرض المريضة، أتساءل أحيانًا إذا كنا نحن البشر مثل الطيور اللا مبالية، نتجاهل تحذيرات من عاصفة وشيكة.",
		startTimer: 120,
		endTimer: 129
	},
	{
		fr: "Suis-je la seule à penser ainsi ?",
		kr: "나만 이런생각하나?",
		arabic: "هل أنا الوحيدة التي تفكر هكذا؟",
		startTimer: 130,
		endTimer: 139
	}
]

export const arabicSubtitle: subtitleType[] = [
	{
		fr: "J'ai appris bien tôt dans mon enfance à taire ma voix pour mieux exister. ",
		kr: "나는 어린 시절 일찍이 내 목소리를 숨기는 법을 배웠다. 그렇게 함으로써 나는 더 잘 존재할 수 있었다.",
		arabic: "تعلمت منذ صغري في طفولتي أن أكتم صوتي لأتمكن من الوجود بشكل أفضل. ",
		startTimer: 0,
		endTimer: 10
	},
	{
		fr: "Je me glisse souvent, seule, dans les quartiers populaires de Rabat pour retrouver les sons, la force des bruits qui m'animaient.",
		kr: "자주 혼자서 라바트의 대중적인 지역으로 몰래 가서, 나를 활기차게 해주었던 소리와 소음의 힘을 다시 찾곤 했다.",
		arabic: "غالبًا ما أتسلل وحدي إلى الأحياء الشعبية في الرباط لأستعيد أصوات وقوة الضجيج الذي كان يحييني.",
		startTimer: 10,
		endTimer: 10
	},
	{
		fr: "Je ne sais pas trop ce qui me pousse à venir ici, le soleil aride de l'après midi réconfortant ma peau ou encore simplement le mouvement des foules occupées?",
		kr: "여기에 오게 만드는 것이 정확히 무엇인지 모르겠다. 오후의 메마른 태양이 내 피부를 위로해 주는 것인지, 아니면 바쁜 군중의 움직임 때문인지?",
		arabic: "لا أعرف حقًا ما الذي يدفعني للمجيء إلى هنا، هل هو الشمس القاحلة في فترة بعد الظهر التي تريح بشرتي، أو ربما مجرد حركة الحشود المشغولة؟",
		startTimer: 20,
		endTimer: 10
	},
	{
		fr: "Ces lieux où ma présence se dissout, étouffée par la foule.",
		kr: "내 존재가 사라지고, 군중에 의해 질식하는 그런 장소들.",
		arabic: "هذه الأماكن التي تذوب فيها وجودي، مختنقة بالجموع.",
		startTimer: 30,
		endTimer: 10
	},
	{
		fr: "Etre invisible, une idée qui m'a longtemps hanté. Pourtant, un confort que j'ai fini par adopter.",
		kr: "보이지 않는다는 것, 그것은 오랫동안 나를 괴롭혔던 생각이었다. 그러나 결국, 나는 그것이 주는 안락함을 받아들였다.",
		arabic: "كوني غير مرئية، فكرة طاردتني طويلًا. ومع ذلك، أصبحت راحة تبنيتها في النهاية.",
		startTimer: 40,
		endTimer: 10
	},
	{
		fr: "Mais la plupart du temps, je pense que c'est bien tel quel.",
		kr: "대부분의 경우, 그냥 그대로가 좋다고 생각한다.",
		arabic: "لكن في أغلب الأوقات، أعتقد أن الأمور جيدة كما هي.",
		startTimer: 50,
		endTimer: 10
	},
	{
		fr: "N'est-ce pas mieux ainsi? En retrait, là où le seul sifflement est celui de ma tranquillité intérieure. Invisible, calme, et estimée.",
		kr: "이렇게 뒤로 물러서 있는 것이 더 나은 것은 아닐까? 내면의 평온만이 속삭이는 곳에서. 보이지 않고, 조용하며, 평가받는.",
		arabic: "أليس من الأفضل هكذا؟ في الخلف، حيث الصفير الوحيد هو صفير سكينتي الداخلية. غير مرئية، هادئة، ومقدرة.",
		startTimer: 60,
		endTimer: 10
	},
	{
		fr: "Vivre dans l'ombre, là où on ne me reproche pas d'être, n'est-ce pas la voie vers l'appréciation, vers l'amour?",
		kr: "그림자 속에서 살아가는 것, 내가 있는 것 자체로 비난받지 않는 그런 곳. 그것이 평가받고, 사랑받는 길이 아닐까?",
		arabic: "العيش في الظل، حيث لا يُعاب عليّ الوجود، أليست هذه الطريق نحو التقدير، نحو الحب؟",
		startTimer: 70,
		endTimer: 10
	},
	{
		fr: "En réalité, je ne sais pas.",
		kr: "사실, 아모고또 모르겠어.",
		arabic: "في الواقع، لا أعرف.",
		startTimer: 80,
		endTimer: 10
	},
	{
		fr: "Je désire me retrouver mais quand vient le moment de parler, ma voix s'évanouit dans le vent alors que mon cœur est une tempête de sable.",
		kr: "나는 나 자신을 찾고 싶지만, 말할 때가 되면 내 목소리는 바람에 사라지고, 내 마음은 모래 폭풍이다.",
		arabic: "أرغب في إيجاد نفسي لكن عندما يأتي وقت الكلام، يتلاشى صوتي في الريح بينما قلبي عاصفة رملية.",
		startTimer: 90,
		endTimer: 10
	},
	{
		fr: "Les émotions que je porte ne franchissent jamais mes lèvres; peut-être n'atteindrai-je jamais mes rêves?",
		kr: "가슴속에 품은 감정들이 결코 내 입술을 넘지 못한다; 나는 결코 내 꿈에 도달하지 못할 수도 있다.",
		arabic: "المشاعر التي أحملها لا تتخطى شفتيّ أبدًا؛ ربما لن أصل إلى أحلامي أبدًا؟",
		startTimer: 100,
		endTimer: 10
	},
	{
		fr: "Perdue et désorientée, je songe à disparaître, tiraillée entre la dette envers ce lieu et le désir de m'évader.",
		kr: "분실되고 혼란스러워, 이 장소에 대한 빚과 탈출하고 싶은 욕망 사이에서 찢기며 사라지고 싶다는 생각을 한다.",
		arabic: "ضائعة ومشوشة، أفكر في الاختفاء، ممزقة بين الدين لهذا المكان والرغبة في الهروب.",
		startTimer: 110,
		endTimer: 10
	},
	{
		fr: "Vers l'infini ou peut-être juste le désert, là où l'immensité s'ouvre devant moi, je pourrais embrasser le silence volontairement, me fondant dans la douce étreinte des dunes.",
		kr: "무한대로, 아니면 그냥 사막으로. 광활함이 내 앞에 펼쳐지는 곳에서, 나는 자발적으로 침묵을 안을 수 있다, 부드러운 모래 언덕의 포옹 속으로 스며들면서.",
		arabic: "نحو اللانهاية أو ربما مجرد الصحراء، حيث تفتح الرحابة أمامي، قد أعانق الصمت بإرادتي، ذائبة في عناق رقيق للكثبان.",
		startTimer: 120,
		endTimer: 10
	},
	{
		fr: "Suis-je la seule à penser ainsi ?",
		kr: "나만 이런생각하나?",
		arabic: "هل أنا الوحيدة التي تفكر هكذا؟",
		startTimer: 130,
		endTimer: 10
	},
]



