var verbs = [
	{id: "A", first_form: "awake", second_form: "awoke", third_form: "awaken", translate: "a trezi"},
	{id: "B", first_form: "be", second_form: "was/were", third_form: "been", translate: "a fi"},
	{id: "B", first_form: "become", second_form: "became", third_form: "become", translate: "a deveni"},
	{id: "B", first_form: "burnt", second_form: "burnt", third_form: "burn", translate: "a arde"},
	{id: "B", first_form: "build", second_form: "built", third_form: "built", translate: "a construi"},
	{id: "B", first_form: "bet", second_form: "bet", third_form: "bet", translate: "a paria"},
	{id: "B", first_form: "buy", second_form: "bought", third_form: "bought", translate: "a cumpara"},
	{id: "B", first_form: "bring", second_form: "brought", third_form: "brought", translate: "a aduce"},
	{id: "B", first_form: "break", second_form: "broke", third_form: "broken", translate: "a rupe, a sparge"},
	{id: "B", first_form: "begin", second_form: "began", third_form: "begun", translate: "a incepe"},
	{id: "B", first_form: "blow", second_form: "blew", third_form: "blown", translate: "a sufla"},
	{id: "B", first_form: "bleed", second_form: "bled", third_form: "bled", translate: "a sangera"},
	
	{id: "C", first_form: "cut", second_form: "cut", third_form: "cut", translate: "a taia"},
	{id: "C", first_form: "cost", second_form: "cost", third_form: "cost", translate: "a costa"},
	{id: "C", first_form: "choose", second_form: "chose", third_form: "chosen", translate: "a alege"},
	{id: "C", first_form: "catch", second_form: "caught", third_form: "caught", translate: "a prinde"},
	{id: "C", first_form: "come", second_form: "came", third_form: "come", translate: "a veni"},
	
	{id: "D", first_form: "do", second_form: "did", third_form: "done", translate: "a face"},
	{id: "D", first_form: "dig", second_form: "dug", third_form: "dug", translate: "a sapa"},
	{id: "D", first_form: "dream", second_form: "dreamt", third_form: "dreamt", translate: "a visa"},
	{id: "D", first_form: "drink", second_form: "drank", third_form: "drunk", translate: "a bea"},
	{id: "D", first_form: "draw", second_form: "drew", third_form: "drawn", translate: "a visa"},
	{id: "D", first_form: "drive", second_form: "drove", third_form: "driven", translate: "a conduce"},
	
	{id: "E", first_form: "eat", second_form: "ate", third_form: "eaten", translate: "a manca"},
	
	{id: "F", first_form: "fall", second_form: "fell", third_form: "fallen", translate: "a cadea"},
	{id: "F", first_form: "feel", second_form: "felt", third_form: "felt", translate: "a simti"},
	{id: "F", first_form: "feed", second_form: "fed", third_form: "fed", translate: "a hrani"},	
	{id: "F", first_form: "fight", second_form: "fought", third_form: "fought", translate: "a lupta"},
	{id: "F", first_form: "find", second_form: "found", third_form: "found", translate: "a gasi"},
	{id: "F", first_form: "fly", second_form: "flew", third_form: "flown", translate: "a zbura"},
	{id: "F", first_form: "forget", second_form: "forgot", third_form: "forgotten", translate: "a uita"},
	{id: "F", first_form: "forgive", second_form: "forgave", third_form: "forgiven", translate: "a ierta"},
	{id: "F", first_form: "freeze", second_form: "froze", third_form: "frozen", translate: "a ingheta"},
	
	{id: "G", first_form: "get", second_form: "got", third_form: "got", translate: "a primi"},
	{id: "G", first_form: "give", second_form: "gave", third_form: "given", translate: "a da"},
	{id: "G", first_form: "go", second_form: "went", third_form: "gone", translate: "a merge"},
	{id: "G", first_form: "grow", second_form: "grew", third_form: "grown", translate: "a creste"},

	{id: "H", first_form: "have", second_form: "had", third_form: "had", translate: "a avea"},
	{id: "H", first_form: "hear", second_form: "heard", third_form: "heard", translate: "a auzi"},
	{id: "H", first_form: "hide", second_form: "hid", third_form: "hidden", translate: "a ascunde"},
	{id: "H", first_form: "hit", second_form: "hit", third_form: "hit", translate: "a lovi"},
	{id: "H", first_form: "hold", second_form: "held", third_form: "held", translate: "a tine"},
	{id: "H", first_form: "hurt", second_form: "hurt", third_form: "hurt", translate: "a rani"},
	
	{id: "K", first_form: "keep", second_form: "kept", third_form: "kept", translate: "a pastra"},
	{id: "K", first_form: "know", second_form: "knew", third_form: "known", translate: "a sti"},
	
	{id: "L", first_form: "learn", second_form: "learnt", third_form: "learnt", translate: "a invata"},
	{id: "L", first_form: "leave", second_form: "left", third_form: "left", translate: "a parasi, a pleca"},
	{id: "L", first_form: "lend", second_form: "lent", third_form: "lent", translate: "a imprumuta"},
	{id: "L", first_form: "let", second_form: "let", third_form: "let", translate: "a lasa"},
	{id: "L", first_form: "light", second_form: "lit", third_form: "lit", translate: "a aprinde"},
	{id: "L", first_form: "lose", second_form: "lost", third_form: "lost", translate: "a pierde"},

	{id: "M", first_form: "make", second_form: "made", third_form: "made", translate: "a face"},
	{id: "M", first_form: "mean", second_form: "meant", third_form: "meant", translate: "a insemna"},
	{id: "M", first_form: "meet", second_form: "met", third_form: "met", translate: "a intalni"},

	{id: "P", first_form: "pay", second_form: "paid", third_form: "paid", translate: "a plati"},
	{id: "P", first_form: "put", second_form: "put", third_form: "put", translate: "a pune"},

	{id: "Q", first_form: "quit", second_form: "quit", third_form: "quit", translate: "a renunta"},

	{id: "R", first_form: "read", second_form: "read", third_form: "read", translate: "a citi"},
	{id: "R", first_form: "ride", second_form: "rode", third_form: "ridden", translate: "a calari"},
	{id: "R", first_form: "ring", second_form: "rang", third_form: "rung", translate: "a suna"},
	{id: "R", first_form: "rise", second_form: "rose", third_form: "risen", translate: "a rasari"},
	{id: "R", first_form: "run", second_form: "ran", third_form: "run", translate: "a alerga"},
	
	{id: "S", first_form: "say", second_form: "said", third_form: "said", translate: "a spune"},
	{id: "S", first_form: "see", second_form: "saw", third_form: "seen", translate: "a vedea"},
	{id: "S", first_form: "sell", second_form: "sold", third_form: "sold", translate: "a vinde"},
	{id: "S", first_form: "send", second_form: "sent", third_form: "sent", translate: "a trimite"},
	{id: "S", first_form: "set", second_form: "set", third_form: "set", translate: "a regla, a seta"},
	{id: "S", first_form: "shake", second_form: "shook", third_form: "shaken", translate: "a scutura"},
	{id: "S", first_form: "shoot", second_form: "shot", third_form: "shot", translate: "a trage (cu arma)"},
	{id: "S", first_form: "shut", second_form: "shut", third_form: "shut", translate: "a inchide"},
	{id: "S", first_form: "sing", second_form: "sang", third_form: "sung", translate: "a canta"},
	{id: "S", first_form: "sink", second_form: "sank", third_form: "sunk", translate: "(a se) scufunda"},
	{id: "S", first_form: "sit", second_form: "sat", third_form: "sat", translate: "a aseza, a se aseza"},
	{id: "S", first_form: "sleep", second_form: "slept", third_form: "slept", translate: "a adormi"},
	{id: "S", first_form: "smell", second_form: "smelt", third_form: "smelt", translate: "a mirosi"},
	{id: "S", first_form: "speak", second_form: "spoke", third_form: "spoken", translate: "a vorbi"},
	{id: "S", first_form: "spend", second_form: "spent", third_form: "spent", translate: "a cheltui, a petrece timp"},
	{id: "S", first_form: "stand", second_form: "stood", third_form: "stood", translate: "a sta in picioare"},
	{id: "S", first_form: "steal", second_form: "stole", third_form: "stolen", translate: "a fura"},
	{id: "S", first_form: "sting", second_form: "stung", third_form: "stung", translate: "a impunge"},
	{id: "S", first_form: "stink", second_form: "stank", third_form: "stunk", translate: "a pute, a mirosi urat"},
	{id: "S", first_form: "swim", second_form: "swam", third_form: "swum", translate: "a inota"},
	
	{id: "T", first_form: "take", second_form: "took", third_form: "taken", translate: "a duce, a prinde"},
	{id: "T", first_form: "teach", second_form: "taught", third_form: "taught", translate: "a invsta"},
	{id: "T", first_form: "tell", second_form: "told", third_form: "told", translate: "a spune, a povesti"},
	{id: "T", first_form: "think", second_form: "thought", third_form: "thought", translate: "a se gandi"},
	{id: "T", first_form: "throw", second_form: "threw", third_form: "thrown", translate: "a arunca"},

	{id: "U", first_form: "understand", second_form: "understood", third_form: "understood", translate: "a intelege"},

	{id: "W", first_form: "wake", second_form: "woke", third_form: "woken", translate: "a trezi"},
	{id: "W", first_form: "wear", second_form: "wore", third_form: "worn", translate: "a purta"},
	{id: "W", first_form: "weep", second_form: "wept", third_form: "wept", translate: "a plange"},
	{id: "W", first_form: "wet", second_form: "wet", third_form: "wet", translate: "a uda"},
	{id: "W", first_form: "win", second_form: "won", third_form: "won", translate: "a castiga"},
	{id: "W", first_form: "write", second_form: "wrote", third_form: "written", translate: "a scrie"},
];