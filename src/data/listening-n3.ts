// AUTO-GENERATED listening scripts for N3. Assembled from verified
// fragments; regenerate rather than hand-editing. Audio: scripts/gen-audio.mjs.
import type { Listening } from '../types'

export const N3_LISTENING: Listening[] = [
  {
    "id": "listening:N3:meeting-voicemail",
    "level": "N3",
    "title": "留守番電話[るすばんでんわ]のメッセージ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、田中[たなか]です。明日[あした]の会議[かいぎ]のことですが、部長[ぶちょう]の都合[つごう]が悪[わる]くなったので、三時[さんじ]からではなく、四時[よじ]からに変更[へんこう]になりました。場所[ばしょ]は同[おな]じ、二階[にかい]の会議室[かいぎしつ]です。資料[しりょう]は私[わたし]が印刷[いんさつ]しておきますから、何[なに]も持[も]って来[こ]なくて大丈夫[だいじょうぶ]です。よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Woman: Hello, this is Tanaka. About tomorrow's meeting — the department manager's schedule changed, so the meeting has been moved from 3 o'clock to 4 o'clock. The place is the same, the meeting room on the second floor. I will print the handouts, so you don't need to bring anything. Thank you.",
    "questions": [
      {
        "question": "会議[かいぎ]は 何時[なんじ]からに なりましたか。",
        "questionTranslation": "What time will the meeting now start?",
        "options": [
          {
            "text": "二時",
            "explanation": "Wrong — two o'clock is never mentioned; 二階 (second floor) refers to the floor, not the time."
          },
          {
            "text": "三時",
            "explanation": "Wrong — 3 o'clock was the ORIGINAL time; the message says 三時からではなく (not from 3 o'clock)."
          },
          {
            "text": "四時",
            "explanation": "Correct — the message says the meeting was changed to 四時から (from 4 o'clock)."
          },
          {
            "text": "五時",
            "explanation": "Wrong — five o'clock is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "メッセージを聞[き]いた人[ひと]は、会議[かいぎ]に何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What should the listener bring to the meeting?",
        "options": [
          {
            "text": "何も持って行かなくてもいい",
            "explanation": "Correct — Tanaka will print the handouts, so 何も持って来なくて大丈夫です (it's fine not to bring anything)."
          },
          {
            "text": "印刷した資料",
            "explanation": "Wrong — Tanaka herself will print the handouts, not the listener."
          },
          {
            "text": "部長のパソコン",
            "explanation": "Wrong — a computer is never mentioned."
          },
          {
            "text": "会議室のかぎ",
            "explanation": "Wrong — a key is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:weather-forecast",
    "level": "N3",
    "title": "天気予報[てんきよほう]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "天気予報[てんきよほう]をお伝[つた]えします。今日[きょう]の午前中[ごぜんちゅう]は晴[は]れますが、午後[ごご]からは雲[くも]が多[おお]くなり、夕方[ゆうがた]には雨[あめ]が降[ふ]り始[はじ]めるでしょう。夜[よる]には風[かぜ]も強[つよ]くなりますので、お出[で]かけの方[かた]は傘[かさ]を忘[わす]れずにお持[も]ちください。明日[あした]の朝[あさ]には雨[あめ]は止[や]む見込[みこ]みです。"
      }
    ],
    "translation": "Announcement: Here is the weather forecast. This morning will be sunny, but from the afternoon clouds will increase, and in the evening rain will begin to fall. At night the wind will also grow strong, so if you are going out, please do not forget your umbrella. The rain is expected to stop by tomorrow morning.",
    "questions": [
      {
        "question": "雨[あめ]は いつ 降[ふ]り始[はじ]めると 言[い]っていますか。",
        "questionTranslation": "When does the forecast say the rain will begin?",
        "options": [
          {
            "text": "今日の午前中",
            "explanation": "Wrong — the morning will be sunny."
          },
          {
            "text": "今日の午後すぐ",
            "explanation": "Wrong — in the afternoon clouds increase, but the rain itself starts in the evening."
          },
          {
            "text": "今日の夕方",
            "explanation": "Correct — the forecast says 夕方には雨が降り始めるでしょう (rain will likely begin to fall in the evening)."
          },
          {
            "text": "明日の朝",
            "explanation": "Wrong — by tomorrow morning the rain is expected to STOP, not start."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "明日[あした]の朝[あさ]の天気[てんき]は どうなると 言[い]っていますか。",
        "questionTranslation": "What does the forecast say about tomorrow morning?",
        "options": [
          {
            "text": "雨が止む",
            "explanation": "Correct — the forecast says 明日の朝には雨は止む見込みです (the rain is expected to stop)."
          },
          {
            "text": "雨が降り始める",
            "explanation": "Wrong — the rain begins this evening; by tomorrow morning it stops."
          },
          {
            "text": "風が強くなる",
            "explanation": "Wrong — the wind strengthens TONIGHT, not tomorrow morning."
          },
          {
            "text": "雪が降る",
            "explanation": "Wrong — snow is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:a-meeting-time-change",
    "level": "N3",
    "title": "会議[かいぎ]の時間変更[じかんへんこう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "田中[たなか]さん、明日[あした]の会議[かいぎ]のことなんですが、部長[ぶちょう]の都合[つごう]で、午前[ごぜん]十時[じゅうじ]から午後[ごご]に変更[へんこう]になりそうなんです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。午後[ごご]は二時[にじ]から別[べつ]の打[う]ち合[あ]わせが入[はい]っているんですが。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "では、三時[さんじ]からはどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "三時[さんじ]なら大丈夫[だいじょうぶ]です。ただ、会議室[かいぎしつ]が空[あ]いているかどうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "大[おお]きい会議室[かいぎしつ]はもう予約[よやく]されているはずです。小[ちい]さいほうなら空[あ]いていると思[おも]います。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "人数[にんずう]は六人[ろくにん]だから、小[ちい]さいほうで十分[じゅうぶん]ですね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、私[わたし]が予約[よやく]して、そのあと、みんなにメールで知[し]らせておきます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "お願[ねが]いします。"
      }
    ],
    "translation": "Woman: Mr. Tanaka, about tomorrow's meeting — because of the department manager's schedule, it looks like it will move from 10 a.m. to the afternoon.\nMan: I see. I have another meeting starting at 2 p.m., though.\nWoman: Then how about from 3 o'clock?\nMan: Three is fine for me. But I wonder if a meeting room is free.\nWoman: The big meeting room should already be booked. I think the small one is free.\nMan: There will be six of us, so the small one is plenty.\nWoman: OK, I'll reserve it, and after that I'll let everyone know by email.\nMan: Please do.",
    "questions": [
      {
        "question": "会議[かいぎ]は何時[なんじ]から始[はじ]まることになりましたか。",
        "questionTranslation": "What time did they decide the meeting will start?",
        "options": [
          {
            "text": "午前十時から",
            "explanation": "10 a.m. was the original time, but the woman says it is being changed because of the manager's schedule."
          },
          {
            "text": "午後一時から",
            "explanation": "1 p.m. is never mentioned in the conversation."
          },
          {
            "text": "午後二時から",
            "explanation": "At 2 p.m. the man already has a different meeting (別の打ち合わせ, 'another meeting'), so this time was rejected."
          },
          {
            "text": "午後三時から",
            "explanation": "Correct. The woman proposes 3 p.m. and the man answers 三時なら大丈夫です ('3 o'clock is fine')."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "女[おんな]の人[ひと]はこのあと、まず何[なに]をしますか。",
        "questionTranslation": "What will the woman do first after this?",
        "options": [
          {
            "text": "部長に都合を聞く",
            "explanation": "Asking the manager about his schedule is not mentioned as her next task; the change already comes from his schedule."
          },
          {
            "text": "小さい会議室を予約する",
            "explanation": "Correct. She says 私が予約して、そのあと、みんなにメールで知らせておきます ('I'll reserve it, and after that notify everyone by email'), so the reservation comes first."
          },
          {
            "text": "みんなにメールを送る",
            "explanation": "She will email everyone, but only after reserving the room, so it is not the first thing she does."
          },
          {
            "text": "大きい会議室を予約する",
            "explanation": "The big meeting room should already be booked by someone else, so she reserves the small one instead."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:a-copy-machine-trouble",
    "level": "N3",
    "title": "資料[しりょう]のコピー",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "佐藤[さとう]さん、悪[わる]いんだけど、二時[にじ]までにこの資料[しりょう]を十部[じゅうぶ]コピーしてもらえる？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。あ、でも今[いま]、このフロアのコピー機[き]、故障[こしょう]していて使[つか]えないんです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "えっ、本当[ほんとう]？修理[しゅうり]の人[ひと]は呼[よ]んだの？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。でも、来[く]るのは夕方[ゆうがた]になるそうです。三階[さんがい]のコピー機[き]なら使[つか]えますが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、そっちでお願[ねが]い。あ、それから、会議[かいぎ]で使[つか]うパソコンの準備[じゅんび]もしてくれる？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "パソコンは山田[やまだ]さんがもう準備[じゅんび]してくれました。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そう、助[たす]かるよ。じゃあ、コピーだけよろしく。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。すぐ行[い]ってきます。"
      }
    ],
    "translation": "Man: Sato-san, sorry to ask, but could you make ten copies of this document by two o'clock?\nWoman: Sure. Oh, but right now the copier on this floor is broken and can't be used.\nMan: What, really? Did you call the repair person?\nWoman: Yes. But apparently they won't come until the evening. The copier on the third floor works, though.\nMan: Then please use that one. Oh, and could you also set up the computer we'll use in the meeting?\nWoman: Yamada-san has already set up the computer.\nMan: Oh, that's a help. Then just the copies, please.\nWoman: Understood. I'll go right away.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどうして三階[さんがい]のコピー機[き]を使[つか]いますか。",
        "questionTranslation": "Why will the woman use the copier on the third floor?",
        "options": [
          {
            "text": "このフロアのは故障しているから",
            "explanation": "Correct. She says このフロアのコピー機、故障していて使えないんです ('the copier on this floor is broken and can't be used')."
          },
          {
            "text": "三階のほうが速いから",
            "explanation": "Nothing is said about the third-floor copier being faster."
          },
          {
            "text": "このフロアのは使用中だから",
            "explanation": "The copier on their floor is broken, not in use by someone else."
          },
          {
            "text": "三階のほうが近いから",
            "explanation": "Distance is never mentioned; she goes to the third floor only because the nearby machine is broken."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "女[おんな]の人[ひと]はこれから何[なに]をしますか。",
        "questionTranslation": "What will the woman do now?",
        "options": [
          {
            "text": "修理の人を呼ぶ",
            "explanation": "She has already called the repair person; they will come in the evening."
          },
          {
            "text": "パソコンを準備する",
            "explanation": "The computer has already been set up by Yamada-san, so she does not need to do it."
          },
          {
            "text": "三階でコピーをする",
            "explanation": "Correct. The man says to use the third-floor copier, and she answers すぐ行ってきます ('I'll go right away')."
          },
          {
            "text": "会議の資料を作る",
            "explanation": "She was asked to copy the document, not to create it."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:a-morning-shift-swap",
    "level": "N3",
    "title": "朝[あさ]の電話当番[でんわとうばん]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "鈴木[すずき]さん、ちょっとお願[ねが]いがあるんだけど。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、何[なん]でしょうか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "明日[あした]の朝[あさ]、歯医者[はいしゃ]に行[い]かなくちゃいけなくて、十時[じゅうじ]ごろまで来[こ]られないんだ。九時[くじ]からの電話当番[でんわとうばん]、代[か]わってもらえないかな。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "明日[あした]の朝[あさ]ですか。九時[くじ]半[はん]からお客[きゃく]さんが来[く]ることになっているんですが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか。じゃあ、木村[きむら]さんに頼[たの]んでみるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、待[ま]ってください。そのお客[きゃく]さん、午後[ごご]に変更[へんこう]になったんでした。大丈夫[だいじょうぶ]です、代[か]わります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "本当[ほんとう]？助[たす]かるよ。お礼[れい]に今度[こんど]、昼[ひる]ごはんをおごるね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ふふ、楽[たの]しみにしています。"
      }
    ],
    "translation": "Man: Suzuki-san, I have a small favor to ask.\nWoman: Yes, what is it?\nMan: Tomorrow morning I have to go to the dentist, so I can't come in until around ten. Could you take my phone duty that starts at nine?\nWoman: Tomorrow morning? A client is supposed to come at nine thirty, though.\nMan: I see. Then I'll try asking Kimura-san.\nWoman: Oh, wait. That client's visit was changed to the afternoon. It's fine — I'll cover for you.\nMan: Really? That's a big help. To thank you, I'll treat you to lunch sometime.\nWoman: Haha, I'll look forward to it.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどうして明日[あした]の朝[あさ]、遅[おく]れますか。",
        "questionTranslation": "Why will the man be late tomorrow morning?",
        "options": [
          {
            "text": "歯医者に行くから",
            "explanation": "Correct. He says 歯医者に行かなくちゃいけなくて ('I have to go to the dentist') and cannot come until around ten."
          },
          {
            "text": "お客さんに会うから",
            "explanation": "The client meeting belongs to the woman's schedule, not his, and it was moved to the afternoon anyway."
          },
          {
            "text": "電車が遅れるから",
            "explanation": "Trains are never mentioned in the conversation."
          },
          {
            "text": "別の会社に行くから",
            "explanation": "He is going to the dentist, not visiting another company."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "女[おんな]の人[ひと]は明日[あした]の朝[あさ]、何[なに]をしますか。",
        "questionTranslation": "What will the woman do tomorrow morning?",
        "options": [
          {
            "text": "お客さんに会う",
            "explanation": "The client's visit was changed to the afternoon, so she is free in the morning."
          },
          {
            "text": "歯医者に行く",
            "explanation": "It is the man, not the woman, who is going to the dentist."
          },
          {
            "text": "電話当番を代わる",
            "explanation": "Correct. She says 大丈夫です、代わります ('It's fine, I'll cover for you'), agreeing to take his nine o'clock phone duty."
          },
          {
            "text": "木村さんに頼む",
            "explanation": "Asking Kimura-san was the man's backup idea, and it became unnecessary once she agreed."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "女[おんな]の人[ひと]はどうして代[か]わることができますか。",
        "questionTranslation": "Why is the woman able to cover for him?",
        "options": [
          {
            "text": "仕事が全部終わったから",
            "explanation": "She never says her work is finished."
          },
          {
            "text": "木村さんが手伝ってくれるから",
            "explanation": "Kimura-san ends up not being involved at all."
          },
          {
            "text": "朝の会議がなくなったから",
            "explanation": "There was no meeting; it was a client visit that moved."
          },
          {
            "text": "客の予定が午後に変わったから",
            "explanation": "Correct. She remembers そのお客さん、午後に変更になったんでした ('that client's visit was changed to the afternoon'), so her morning is free."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N3:a-camera-repair",
    "level": "N3",
    "title": "カメラの修理[しゅうり]",
    "script": [
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "すみません、このカメラ、落[お]としてしまって、電源[でんげん]が入[はい]らなくなったんです。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "拝見[はいけん]します。中[なか]の部品[ぶひん]が壊[こわ]れているようですね。修理[しゅうり]には十日[とおか]ほどかかります。"
      },
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "十日[とおか]ですか。実[じつ]は来週[らいしゅう]の土曜日[どようび]から旅行[りょこう]に行[い]くので、それまでに直[なお]してほしいんですが。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "お急[いそ]ぎ便[びん]ですと五日[いつか]で仕上[しあ]がりますが、料金[りょうきん]が三千円[さんぜんえん]高[たか]くなります。"
      },
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "五日[いつか]なら間[ま]に合[あ]いますね。うーん、でも三千円[さんぜんえん]か。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "あるいは、修理[しゅうり]の間[あいだ]、無料[むりょう]で代[か]わりのカメラをお貸[か]しすることもできますよ。"
      },
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "え、無料[むりょう]なんですか。じゃあ、普通[ふつう]の修理[しゅうり]にして、旅行[りょこう]には借[か]りたカメラを持[も]って行[い]きます。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "かしこまりました。では、こちらの用紙[ようし]にご記入[きにゅう]ください。"
      }
    ],
    "translation": "Female customer: Excuse me, I dropped this camera and now it won't turn on.\nMale clerk: Let me take a look. It seems a part inside is broken. The repair will take about ten days.\nFemale customer: Ten days? Actually, I'm going on a trip starting next Saturday, so I'd like it fixed by then.\nMale clerk: With the express service it would be finished in five days, but the fee is 3,000 yen higher.\nFemale customer: Five days would make it in time. Hmm, but 3,000 yen...\nMale clerk: Alternatively, we can lend you a replacement camera for free while yours is being repaired.\nFemale customer: Oh, it's free? Then I'll go with the regular repair and take the borrowed camera on my trip.\nMale clerk: Certainly. Then please fill in this form.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどうすることにしましたか。",
        "questionTranslation": "What did the woman decide to do?",
        "options": [
          {
            "text": "急ぎの修理を頼む",
            "explanation": "She considered the express repair but decided against paying the extra 3,000 yen."
          },
          {
            "text": "普通の修理にしてカメラを借りる",
            "explanation": "Correct. She says 普通の修理にして、旅行には借りたカメラを持って行きます ('I'll go with the regular repair and take the borrowed camera on my trip')."
          },
          {
            "text": "新しいカメラを買う",
            "explanation": "Buying a new camera is never discussed."
          },
          {
            "text": "旅行にカメラを持って行かない",
            "explanation": "She will take a camera on the trip — the free loaner from the shop."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "急[いそ]ぎの修理[しゅうり]について、正[ただ]しいものはどれですか。",
        "questionTranslation": "Which statement about the express repair is correct?",
        "options": [
          {
            "text": "十日かかる",
            "explanation": "Ten days is the time for the regular repair, not the express one."
          },
          {
            "text": "無料でできる",
            "explanation": "The free service mentioned is the loaner camera, not the express repair."
          },
          {
            "text": "五日で三千円高くなる",
            "explanation": "Correct. The clerk says the express service finishes in five days (五日で仕上がります, 'it will be finished in five days') but costs 3,000 yen more."
          },
          {
            "text": "部品がないのでできない",
            "explanation": "The clerk never says the express repair is impossible; a part is broken but repair is offered."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:a-reservation-change",
    "level": "N3",
    "title": "予約[よやく]の変更[へんこう]",
    "script": [
      {
        "speaker": "男[おとこ]の客[きゃく]",
        "text": "すみません。今週[こんしゅう]の金曜日[きんようび]の七時[しちじ]に四人[よにん]で予約[よやく]した田中[たなか]ですが、予約[よやく]を変更[へんこう]したいんです。"
      },
      {
        "speaker": "女[おんな]の店員[てんいん]",
        "text": "田中様[たなかさま]ですね。ご変更[へんこう]の内容[ないよう]をお伺[うかが]いします。"
      },
      {
        "speaker": "男[おとこ]の客[きゃく]",
        "text": "金曜日[きんようび]から土曜日[どようび]に変[か]えたいんです。時間[じかん]は同[おな]じ七時[しちじ]で。"
      },
      {
        "speaker": "女[おんな]の店員[てんいん]",
        "text": "申[もう]し訳[わけ]ございません。土曜日[どようび]の七時[しちじ]は満席[まんせき]でして、六時[ろくじ]か八時[はちじ]でしたらご案内[あんない]できますが。"
      },
      {
        "speaker": "男[おとこ]の客[きゃく]",
        "text": "うーん、六時[ろくじ]はちょっと早[はや]いな。じゃあ、八時[はちじ]でお願[ねが]いします。"
      },
      {
        "speaker": "女[おんな]の店員[てんいん]",
        "text": "かしこまりました。人数[にんずう]は四名様[よんめいさま]のままでよろしいですか。"
      },
      {
        "speaker": "男[おとこ]の客[きゃく]",
        "text": "あ、二人[ふたり]増[ふ]えて、六人[ろくにん]になります。"
      },
      {
        "speaker": "女[おんな]の店員[てんいん]",
        "text": "土曜日[どようび]の八時[はちじ]、六名様[ろくめいさま]ですね。お待[ま]ちしております。"
      }
    ],
    "translation": "Male customer: Excuse me. I'm Tanaka — I have a reservation for four people this Friday at seven, and I'd like to change it.\nFemale clerk: Mr. Tanaka, yes. What change would you like to make?\nMale customer: I'd like to change it from Friday to Saturday. Same time, seven o'clock.\nFemale clerk: I'm very sorry. Saturday at seven is fully booked; we could seat you at six or at eight.\nMale customer: Hmm, six is a bit early. Then eight o'clock, please.\nFemale clerk: Certainly. Shall we keep the party at four people?\nMale customer: Oh, two more are joining, so it will be six people.\nFemale clerk: Saturday at eight, for six — we'll be expecting you.",
    "questions": [
      {
        "question": "予約[よやく]はどうなりましたか。",
        "questionTranslation": "What did the reservation end up being?",
        "options": [
          {
            "text": "金曜日の七時に四人",
            "explanation": "That was the original reservation before the change."
          },
          {
            "text": "土曜日の七時に六人",
            "explanation": "Saturday at seven was fully booked, so this time was not possible."
          },
          {
            "text": "土曜日の八時に六人",
            "explanation": "Correct. The clerk confirms 土曜日の八時、六名様 ('Saturday at eight, party of six')."
          },
          {
            "text": "土曜日の六時に四人",
            "explanation": "The customer rejected six o'clock as too early, and the party grew to six people."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして土曜日[どようび]の七時[しちじ]に予約[よやく]できませんでしたか。",
        "questionTranslation": "Why couldn't he reserve Saturday at seven?",
        "options": [
          {
            "text": "店が休みだから",
            "explanation": "The restaurant is open on Saturday; other times that day were offered."
          },
          {
            "text": "満席だから",
            "explanation": "Correct. The clerk says 土曜日の七時は満席でして ('Saturday at seven is fully booked')."
          },
          {
            "text": "人数が多すぎるから",
            "explanation": "The party size increase was accepted without any problem."
          },
          {
            "text": "予約が消えていたから",
            "explanation": "His original reservation was found without any issue."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:a-sweater-exchange",
    "level": "N3",
    "title": "セーターの交換[こうかん]",
    "script": [
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "あのう、昨日[きのう]こちらでこのセーターを買[か]ったんですが、家[いえ]で開[あ]けたら、そでに小[ちい]さい穴[あな]が開[あ]いていたんです。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "申[もう]し訳[わけ]ございません。すぐに新[あたら]しいものとお取[と]り替[か]えいたします。"
      },
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "お願[ねが]いします。同[おな]じ白[しろ]のエムサイズなんですが。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "少々[しょうしょう]お待[ま]ちください。申[もう]し訳[わけ]ありません。白[しろ]のエムサイズは売[う]り切[き]れでして、グレーでしたらございますが。"
      },
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "うーん、白[しろ]が気[き]に入[い]って買[か]ったので。返金[へんきん]もできますか。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "はい、できます。あるいは、他[ほか]の店[みせ]から白[しろ]をお取[と]り寄[よ]せして、ご自宅[じたく]にお送[おく]りすることもできます。一週間[いっしゅうかん]ほどかかりますが、送料[そうりょう]は無料[むりょう]です。"
      },
      {
        "speaker": "女[おんな]の客[きゃく]",
        "text": "急[いそ]ぎませんから、それでお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の店員[てんいん]",
        "text": "かしこまりました。では、ご住所[じゅうしょ]をお願[ねが]いいたします。"
      }
    ],
    "translation": "Female customer: Um, I bought this sweater here yesterday, but when I opened it at home, there was a small hole in the sleeve.\nMale clerk: I'm very sorry. We will exchange it for a new one right away.\nFemale customer: Please. It's the same one — white, size M.\nMale clerk: One moment, please. I'm sorry — the white in size M is sold out; we do have it in gray, though.\nFemale customer: Hmm, I bought it because I liked the white. Could I also get a refund?\nMale clerk: Yes, that's possible. Or we can order the white one from another store and send it to your home. It takes about a week, but shipping is free.\nFemale customer: I'm not in a hurry, so please do that.\nMale clerk: Certainly. Then may I have your address, please?",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどうすることにしましたか。",
        "questionTranslation": "What did the woman decide to do?",
        "options": [
          {
            "text": "グレーのセーターに交換する",
            "explanation": "Gray was offered, but she declined because she bought the sweater for its white color."
          },
          {
            "text": "返金してもらう",
            "explanation": "She asked whether a refund was possible, but in the end she chose the home-delivery option instead."
          },
          {
            "text": "そでを直してもらう",
            "explanation": "Repairing the sleeve is never offered or discussed."
          },
          {
            "text": "白いのを家に送ってもらう",
            "explanation": "Correct. To the offer of ordering the white one and shipping it home, she answers 急ぎませんから、それでお願いします ('I'm not in a hurry, so please do that')."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "女[おんな]の人[ひと]はどうしてセーターを店[みせ]に持[も]って来[き]ましたか。",
        "questionTranslation": "Why did the woman bring the sweater to the store?",
        "options": [
          {
            "text": "そでに穴が開いていたから",
            "explanation": "Correct. She says そでに小さい穴が開いていたんです ('there was a small hole in the sleeve')."
          },
          {
            "text": "サイズが合わなかったから",
            "explanation": "Size was not the problem; she wants the same size M again."
          },
          {
            "text": "色が気に入らなかったから",
            "explanation": "On the contrary, she liked the white color — that is why she refused the gray one."
          },
          {
            "text": "ボタンが取れていたから",
            "explanation": "Buttons are never mentioned; the defect was a hole in the sleeve."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:a-elective-course-advice",
    "level": "N3",
    "title": "選択科目[せんたくかもく]の相談[そうだん]",
    "script": [
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "先生[せんせい]、来学期[らいがっき]の選択科目[せんたくかもく]のことで、ご相談[そうだん]したいんですが。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "はい、どうぞ。何[なに]を迷[まよ]っているんですか。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "経済学[けいざいがく]と心理学[しんりがく]の、どちらを取[と]るか迷[まよ]っています。どちらも面白[おもしろ]そうで。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "そうですね。将来[しょうらい]は何[なに]をしたいんですか。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "貿易[ぼうえき]の会社[かいしゃ]で働[はたら]きたいと思[おも]っています。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "それなら経済学[けいざいがく]が役[やく]に立[た]つでしょうね。ただ、経済学[けいざいがく]は火曜日[かようび]の二限[にげん]ですよ。あなたの必修[ひっしゅう]の英語[えいご]と重[かさ]なっていませんか。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "あ、本当[ほんとう]だ。英語[えいご]も火曜日[かようび]の二限[にげん]です。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "心理学[しんりがく]は木曜日[もくようび]ですから、来学期[らいがっき]は心理学[しんりがく]を取[と]って、経済学[けいざいがく]は来年[らいねん]取[と]ればいいんじゃないですか。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "そうします。ありがとうございました。"
      }
    ],
    "translation": "Male student: Professor, I'd like to ask your advice about next semester's elective courses.\nFemale teacher: Sure, go ahead. What are you unsure about?\nMale student: I can't decide whether to take economics or psychology. They both look interesting.\nFemale teacher: I see. What do you want to do in the future?\nMale student: I'm thinking I'd like to work at a trading company.\nFemale teacher: Then economics would probably be useful. But economics is Tuesday, second period. Doesn't that overlap with your required English class?\nMale student: Oh, you're right. English is also Tuesday, second period.\nFemale teacher: Psychology is on Thursday, so why not take psychology next semester and take economics next year?\nMale student: I'll do that. Thank you very much.",
    "questions": [
      {
        "question": "学生[がくせい]は来学期[らいがっき]、何[なに]を取[と]ることにしましたか。",
        "questionTranslation": "What did the student decide to take next semester?",
        "options": [
          {
            "text": "経済学",
            "explanation": "Economics clashes with his required English class, so he will postpone it to next year."
          },
          {
            "text": "心理学",
            "explanation": "Correct. Following the teacher's suggestion, he will take psychology next semester and economics next year."
          },
          {
            "text": "経済学と心理学の両方",
            "explanation": "He takes only psychology next semester; economics is postponed, not taken alongside."
          },
          {
            "text": "何も取らない",
            "explanation": "He agrees to the teacher's plan, so he will take psychology."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "学生[がくせい]はどうして経済学[けいざいがく]を取[と]りませんか。",
        "questionTranslation": "Why won't the student take economics?",
        "options": [
          {
            "text": "面白くなさそうだから",
            "explanation": "He actually says both courses look interesting."
          },
          {
            "text": "先生が反対したから",
            "explanation": "The teacher even said economics would be useful for his future; she only pointed out the schedule problem."
          },
          {
            "text": "来年はなくなるから",
            "explanation": "On the contrary, the plan is to take economics next year."
          },
          {
            "text": "必修の英語と時間が重なるから",
            "explanation": "Correct. Economics is Tuesday second period, the same slot as his required English class (必修の英語, 'required English')."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "学生[がくせい]は将来[しょうらい]、何[なに]をしたいと言[い]っていますか。",
        "questionTranslation": "What does the student say he wants to do in the future?",
        "options": [
          {
            "text": "大学の先生になる",
            "explanation": "Becoming a professor is never mentioned."
          },
          {
            "text": "心理学者になる",
            "explanation": "He takes psychology only because of the schedule, not as a career goal."
          },
          {
            "text": "貿易の会社で働く",
            "explanation": "Correct. He says 貿易の会社で働きたい ('I want to work at a trading company')."
          },
          {
            "text": "銀行で働く",
            "explanation": "A bank is never mentioned; he names a trading company."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:a-report-deadline",
    "level": "N3",
    "title": "レポートの締[し]め切[き]り",
    "script": [
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "先生[せんせい]、レポートの締[し]め切[き]りのことで、お願[ねが]いがあるんですが。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "金曜日[きんようび]までのレポートですね。どうしましたか。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "実[じつ]は先週[せんしゅう]、風邪[かぜ]で三日間[みっかかん]休[やす]んでしまって、まだ資料[しりょう]が集[あつ]められていないんです。締[し]め切[き]りを延[の]ばしていただけないでしょうか。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "そうでしたか。体[からだ]のほうはもういいんですか。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "はい、おかげさまで、もう大丈夫[だいじょうぶ]です。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "では、月曜日[げつようび]の朝[あさ]までなら待[ま]ちましょう。その代[か]わり、金曜日[きんようび]までに、どこまで書[か]けたかをメールで知[し]らせてください。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "わかりました。必[かなら]ずメールします。ありがとうございます。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "無理[むり]をしないで、体[からだ]に気[き]をつけてくださいね。"
      }
    ],
    "translation": "Female student: Professor, I have a request about the report deadline.\nMale teacher: The report due Friday, right? What's the matter?\nFemale student: The truth is, last week I was out for three days with a cold, and I still haven't been able to gather my materials. Could you possibly extend the deadline?\nMale teacher: I see. Are you feeling better now?\nFemale student: Yes, thank you, I'm fine now.\nMale teacher: Then I'll wait until Monday morning. In exchange, by Friday, let me know by email how far you've gotten.\nFemale student: Understood. I will definitely email you. Thank you very much.\nMale teacher: Don't overdo it, and take care of yourself.",
    "questions": [
      {
        "question": "新[あたら]しい締[し]め切[き]りはいつですか。",
        "questionTranslation": "When is the new deadline?",
        "options": [
          {
            "text": "金曜日",
            "explanation": "Friday was the original deadline; by Friday she only has to send a progress email."
          },
          {
            "text": "土曜日の朝",
            "explanation": "Saturday is never mentioned."
          },
          {
            "text": "月曜日の朝",
            "explanation": "Correct. The teacher says 月曜日の朝までなら待ちましょう ('I'll wait until Monday morning')."
          },
          {
            "text": "来週の金曜日",
            "explanation": "The extension is only until Monday morning, not a full week."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "学生[がくせい]は金曜日[きんようび]までに、何[なに]をしなければなりませんか。",
        "questionTranslation": "What must the student do by Friday?",
        "options": [
          {
            "text": "レポートを出す",
            "explanation": "The report itself is now due Monday morning, not Friday."
          },
          {
            "text": "進み具合をメールで知らせる",
            "explanation": "Correct. The teacher asks her to report by email どこまで書けたか ('how far she has gotten') by Friday."
          },
          {
            "text": "資料を先生に渡す",
            "explanation": "She must gather materials for her own report, not hand them to the teacher."
          },
          {
            "text": "病院に行く",
            "explanation": "She says she has already recovered, so a hospital visit is not required."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "学生[がくせい]はどうして締[し]め切[き]りを延[の]ばしてほしいのですか。",
        "questionTranslation": "Why does the student want the deadline extended?",
        "options": [
          {
            "text": "アルバイトが忙しかったから",
            "explanation": "A part-time job is never mentioned."
          },
          {
            "text": "パソコンが壊れたから",
            "explanation": "Nothing is said about a broken computer."
          },
          {
            "text": "テーマを変えたいから",
            "explanation": "She never asks to change her topic."
          },
          {
            "text": "風邪で休んで資料が集まっていないから",
            "explanation": "Correct. She explains 風邪で三日間休んでしまって ('I was out for three days with a cold') and has not yet gathered her materials."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N3:a-exam-range-mixup",
    "level": "N3",
    "title": "試験[しけん]の範囲[はんい]",
    "script": [
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "先生[せんせい]、来週[らいしゅう]の試験[しけん]なんですが、教科書[きょうかしょ]の一課[いっか]から五課[ごか]までを勉強[べんきょう]すればいいんですよね。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "あれ、先週[せんしゅう]の授業[じゅぎょう]で言[い]いましたよ。範囲[はんい]が変[か]わって、三課[さんか]から六課[ろっか]までになりました。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "えっ、そうなんですか。先週[せんしゅう]は休[やす]んでしまって、知[し]りませんでした。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "それから、六課[ろっか]はまだ授業[じゅぎょう]でやっていないので、プリントを配[くば]りました。それを読[よ]んでおいてください。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "そのプリント、もらっていないんですが、どうすればいいですか。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "研究室[けんきゅうしつ]の前[まえ]の棚[たな]に置[お]いてありますから、自由[じゆう]に取[と]っていいですよ。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "わかりました。すぐ取[と]りに行[い]きます。ありがとうございました。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "頑張[がんば]ってくださいね。"
      }
    ],
    "translation": "Male student: Professor, about next week's exam — I just need to study chapters one through five of the textbook, right?\nFemale teacher: Oh? I announced it in last week's class. The range changed — it's now chapters three through six.\nMale student: What, really? I was absent last week, so I didn't know.\nFemale teacher: Also, since we haven't covered chapter six in class yet, I handed out a printout. Please read it beforehand.\nMale student: I haven't received that printout — what should I do?\nFemale teacher: Copies are on the shelf in front of my office, so feel free to take one.\nMale student: Understood. I'll go get one right away. Thank you very much.\nFemale teacher: Good luck with your studying.",
    "questions": [
      {
        "question": "試験[しけん]の範囲[はんい]はどこですか。",
        "questionTranslation": "What is the range of the exam?",
        "options": [
          {
            "text": "一課から五課まで",
            "explanation": "That was the old range the student believed; it has since been changed."
          },
          {
            "text": "一課から六課まで",
            "explanation": "The range starts from chapter three, not chapter one."
          },
          {
            "text": "三課から五課まで",
            "explanation": "Chapter six is included via the printout, so the range goes to six."
          },
          {
            "text": "三課から六課まで",
            "explanation": "Correct. The teacher says 三課から六課までになりました ('it is now chapters three through six')."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "学生[がくせい]はこのあと、まず何[なに]をしますか。",
        "questionTranslation": "What will the student do first after this?",
        "options": [
          {
            "text": "六課の授業を受ける",
            "explanation": "Chapter six will not be covered in class; that is exactly why the printout exists."
          },
          {
            "text": "棚のプリントを取りに行く",
            "explanation": "Correct. He says すぐ取りに行きます ('I'll go get one right away') about the printout on the shelf in front of the office."
          },
          {
            "text": "先生にメールを送る",
            "explanation": "Email is never mentioned in this conversation."
          },
          {
            "text": "新しい教科書を買う",
            "explanation": "He needs a printout, not a new textbook."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "学生[がくせい]はどうして範囲[はんい]の変更[へんこう]を知[し]りませんでしたか。",
        "questionTranslation": "Why didn't the student know about the change in the exam range?",
        "options": [
          {
            "text": "先週の授業を休んだから",
            "explanation": "Correct. He says 先週は休んでしまって、知りませんでした ('I was absent last week, so I didn't know'); the change was announced in that class."
          },
          {
            "text": "メールを見なかったから",
            "explanation": "The announcement was made in class, not by email."
          },
          {
            "text": "先生が言い忘れたから",
            "explanation": "The teacher did announce it — in last week's class."
          },
          {
            "text": "掲示板を見なかったから",
            "explanation": "A notice board is never mentioned; he missed the in-class announcement."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:b-hanabi-taikai-announcement",
    "level": "N3",
    "title": "花火大会[はなびたいかい]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "本日[ほんじつ]はさくら花火大会[はなびたいかい]にお越[こ]しいただき、ありがとうございます。花火[はなび]は午後七時半[ごごしちじはん]から始[はじ]まります。雨[あめ]の場合[ばあい]は、明日[あした]に延期[えんき]になりますが、小雨[こさめ]の場合[ばあい]はそのまま行[おこな]います。会場[かいじょう]の中[なか]では、たばこを吸[す]うことができません。おたばこは、入口[いりぐち]の近[ちか]くにある喫煙所[きつえんじょ]をご利用[りよう]ください。また、ごみは必[かなら]ずお持[も]ち帰[かえ]りください。写真[しゃしん]を撮[と]る方[かた]は、ほかのお客様[きゃくさま]のご迷惑[めいわく]にならないよう、ご注意[ちゅうい]ください。"
      }
    ],
    "translation": "Announcement: Thank you for coming to the Sakura Fireworks Festival today. The fireworks will begin at 7:30 p.m. In case of rain, the festival will be postponed to tomorrow, but if it is only light rain, it will be held as planned. Smoking is not allowed inside the venue. For smoking, please use the smoking area near the entrance. Also, please be sure to take your trash home with you. If you take photos, please be careful not to bother the other guests.",
    "questions": [
      {
        "question": "雨[あめ]がたくさん降[ふ]ったら、花火大会[はなびたいかい]はどうなりますか。",
        "questionTranslation": "What will happen to the fireworks festival if it rains heavily?",
        "options": [
          {
            "text": "明日に延期になる",
            "explanation": "Correct. The announcement says 雨の場合は、明日に延期になります (in case of rain, it will be postponed to tomorrow)."
          },
          {
            "text": "そのまま行われる",
            "explanation": "The festival goes ahead as planned only in the case of 小雨 (light rain), not heavy rain."
          },
          {
            "text": "中止になる",
            "explanation": "The announcement says the festival will be postponed to tomorrow, not cancelled."
          },
          {
            "text": "時間が遅くなる",
            "explanation": "Nothing is said about changing the starting time; rain leads to postponement to the next day."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "会場[かいじょう]でしてはいけないことはどれですか。",
        "questionTranslation": "Which of these is not allowed at the venue?",
        "options": [
          {
            "text": "写真を撮ること",
            "explanation": "Taking photos is allowed; guests are only asked not to bother other people while doing so."
          },
          {
            "text": "喫煙所以外でたばこを吸うこと",
            "explanation": "Correct. Smoking inside the venue is prohibited, and smokers are told to use the 喫煙所 (smoking area) near the entrance."
          },
          {
            "text": "ごみを持って帰ること",
            "explanation": "Taking trash home is exactly what guests are asked to do, not something forbidden."
          },
          {
            "text": "午後七時半に来ること",
            "explanation": "7:30 p.m. is simply when the fireworks start; nothing forbids arriving at that time."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "ごみはどうしなければなりませんか。",
        "questionTranslation": "What must people do with their trash?",
        "options": [
          {
            "text": "会場のごみ箱に捨てる",
            "explanation": "No trash cans at the venue are mentioned; guests are told to take trash home."
          },
          {
            "text": "係の人に渡す",
            "explanation": "Handing trash to staff is never mentioned in the announcement."
          },
          {
            "text": "家に持って帰る",
            "explanation": "Correct. The announcement says ごみは必ずお持ち帰りください (please be sure to take your trash home)."
          },
          {
            "text": "入口の近くに置く",
            "explanation": "The entrance area is mentioned only as the location of the smoking area, not as a place to leave trash."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:b-bijutsukan-guided-tour",
    "level": "N3",
    "title": "美術館[びじゅつかん]のガイドツアー",
    "script": [
      {
        "speaker": "ガイド",
        "text": "皆様[みなさま]、本日[ほんじつ]は市立美術館[しりつびじゅつかん]へようこそ。これから一時間[いちじかん]ほど、館内[かんない]をご案内[あんない]します。まず二階[にかい]の日本画[にほんが]の部屋[へや]から見[み]ていただき、その後[あと]、一階[いっかい]の写真展[しゃしんてん]をご覧[らん]いただきます。館内[かんない]では、写真[しゃしん]を撮[と]ってもかまいませんが、フラッシュは使[つか]わないでください。また、作品[さくひん]には絶対[ぜったい]に手[て]を触[ふ]れないようにお願[ねが]いします。途中[とちゅう]でトイレに行[い]きたい方[かた]は、ガイドに声[こえ]をかけてください。それでは、まいりましょう。"
      }
    ],
    "translation": "Guide: Everyone, welcome to the City Art Museum. I will now show you around the museum for about one hour. First we will see the Japanese painting room on the second floor, and after that, the photo exhibition on the first floor. Inside the museum, you may take photos, but please do not use flash. Also, please never touch the artworks. If you want to go to the restroom during the tour, please tell the guide. Now, let us begin.",
    "questions": [
      {
        "question": "見学[けんがく]はどこから始[はじ]まりますか。",
        "questionTranslation": "Where does the tour start?",
        "options": [
          {
            "text": "一階の写真展",
            "explanation": "The photo exhibition on the first floor is visited after the Japanese painting room, not first."
          },
          {
            "text": "二階の日本画の部屋",
            "explanation": "Correct. The guide says まず二階の日本画の部屋から見ていただき (first you will see the Japanese painting room on the second floor)."
          },
          {
            "text": "一階の日本画の部屋",
            "explanation": "The Japanese painting room is on the second floor, not the first floor."
          },
          {
            "text": "二階の写真展",
            "explanation": "The photo exhibition is on the first floor, and it comes second on the tour."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "館内[かんない]でしてもいいことはどれですか。",
        "questionTranslation": "Which of these is allowed inside the museum?",
        "options": [
          {
            "text": "作品に手を触れること",
            "explanation": "The guide asks visitors to 絶対に手を触れない (never touch the artworks)."
          },
          {
            "text": "フラッシュを使うこと",
            "explanation": "The guide explicitly says フラッシュは使わないでください (please do not use flash)."
          },
          {
            "text": "フラッシュなしで写真を撮ること",
            "explanation": "Correct. The guide says 写真を撮ってもかまいません (you may take photos) as long as flash is not used."
          },
          {
            "text": "黙って一人でトイレに行くこと",
            "explanation": "Visitors who want to go to the restroom are asked to tell the guide first."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:b-chocolate-koujou-kengaku",
    "level": "N3",
    "title": "工場見学[こうじょうけんがく]の案内[あんない]",
    "script": [
      {
        "speaker": "ガイド",
        "text": "ただいまから、チョコレート工場[こうじょう]の見学[けんがく]を始[はじ]めます。見学[けんがく]の前[まえ]に、いくつかお願[ねが]いがあります。工場[こうじょう]の中[なか]は機械[きかい]が動[うご]いていますので、白[しろ]い線[せん]の内側[うちがわ]を歩[ある]いてください。また、安全[あんぜん]のため、必[かなら]ず帽子[ぼうし]をかぶってください。工場[こうじょう]の中[なか]の写真撮影[しゃしんさつえい]は禁止[きんし]ですが、最後[さいご]の売店[ばいてん]では自由[じゆう]に撮[と]っていただけます。見学[けんがく]は四十分[よんじゅっぷん]ぐらいで、終[お]わったらチョコレートの試食[ししょく]があります。それでは、こちらへどうぞ。"
      }
    ],
    "translation": "Guide: We will now begin the tour of the chocolate factory. Before the tour, I have a few requests. Inside the factory the machines are running, so please walk inside the white line. Also, for safety, please be sure to wear a hat. Taking photos inside the factory is prohibited, but at the shop at the end you may take photos freely. The tour takes about forty minutes, and when it is over there will be a chocolate tasting. Now then, this way, please.",
    "questions": [
      {
        "question": "見学[けんがく]する人[ひと]がしなければならないことは何[なん]ですか。",
        "questionTranslation": "What must the visitors do?",
        "options": [
          {
            "text": "写真をたくさん撮る",
            "explanation": "Photos are prohibited inside the factory; only at the shop at the end are they allowed, and they are not required."
          },
          {
            "text": "白い線の外側を歩く",
            "explanation": "Visitors are told to walk on the inside of the white line, not the outside."
          },
          {
            "text": "チョコレートを買う",
            "explanation": "A shop is mentioned, but nobody is required to buy chocolate."
          },
          {
            "text": "帽子をかぶる",
            "explanation": "Correct. The guide says 必ず帽子をかぶってください (please be sure to wear a hat) for safety."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "写真[しゃしん]はどこで撮[と]ってもいいですか。",
        "questionTranslation": "Where are visitors allowed to take photos?",
        "options": [
          {
            "text": "工場の中のどこでも",
            "explanation": "Photography inside the factory is prohibited, so it is not allowed everywhere."
          },
          {
            "text": "機械の近くだけ",
            "explanation": "The machines are mentioned only as a safety reason to stay inside the white line, not as a photo spot."
          },
          {
            "text": "最後の売店だけ",
            "explanation": "Correct. The guide says photos are prohibited in the factory, but at the shop at the end 自由に撮っていただけます (you may take them freely)."
          },
          {
            "text": "どこでも撮ってはいけない",
            "explanation": "Photos are allowed at the shop at the end, so there is one place where taking photos is fine."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:b-shimin-pool-announcement",
    "level": "N3",
    "title": "市民[しみん]プールのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "市民[しみん]プールをご利用[りよう]の皆様[みなさま]にお知[し]らせします。本日[ほんじつ]は午後五時[ごごごじ]から、プールの掃除[そうじ]を行[おこな]いますので、午後四時半[ごごよじはん]までにプールから出[で]てください。また、来週[らいしゅう]の月曜日[げつようび]から水曜日[すいようび]まで、機械[きかい]の点検[てんけん]のため、プールはお休[やす]みになります。その間[あいだ]、会員[かいいん]の方[かた]は、隣[となり]の市[し]のプールを無料[むりょう]で利用[りよう]できます。ご利用[りよう]の際[さい]は、会員[かいいん]カードを忘[わす]れずにお持[も]ちください。会員[かいいん]でない方[かた]は、隣[となり]の市[し]のプールを無料[むりょう]で利用[りよう]することはできませんので、ご注意[ちゅうい]ください。"
      }
    ],
    "translation": "Announcement: An announcement for everyone using the city pool. Today, cleaning of the pool will start at 5 p.m., so please leave the pool by 4:30 p.m. Also, from Monday to Wednesday next week, the pool will be closed for inspection of the machinery. During that time, members can use the pool in the neighboring city for free. When you use it, please do not forget to bring your membership card. Please note that people who are not members cannot use the neighboring city's pool for free.",
    "questions": [
      {
        "question": "今日[きょう]、プールにいる人[ひと]は何[なに]をしなければなりませんか。",
        "questionTranslation": "What must the people at the pool do today?",
        "options": [
          {
            "text": "午後五時までに掃除を手伝う",
            "explanation": "The cleaning starting at 5 p.m. is done by the pool, not by the visitors."
          },
          {
            "text": "会員カードを見せる",
            "explanation": "The membership card is needed when using the neighboring city's pool next week, not today."
          },
          {
            "text": "隣の市のプールに行く",
            "explanation": "The neighboring city's pool is an option for members during next week's closure, not something to do today."
          },
          {
            "text": "午後四時半までにプールから出る",
            "explanation": "Correct. Because cleaning starts at 5 p.m., visitors are told 午後四時半までにプールから出てください (please leave the pool by 4:30 p.m.)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "来週[らいしゅう]、会員[かいいん]の人[ひと]は何[なに]ができますか。",
        "questionTranslation": "What can members do next week?",
        "options": [
          {
            "text": "隣の市のプールを無料で使う",
            "explanation": "Correct. The announcement says members 隣の市のプールを無料で利用できます (can use the neighboring city's pool for free) during the closure."
          },
          {
            "text": "割引でこのプールを使う",
            "explanation": "This pool is completely closed from Monday to Wednesday next week, so it cannot be used at a discount."
          },
          {
            "text": "点検の間もこのプールを使う",
            "explanation": "The pool is closed during the inspection, so no one can use it then."
          },
          {
            "text": "カードなしで隣の市のプールを使う",
            "explanation": "Members are told not to forget their membership card, so the card is required."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "来週[らいしゅう]、プールが休[やす]みになるのはどうしてですか。",
        "questionTranslation": "Why will the pool be closed next week?",
        "options": [
          {
            "text": "掃除をするから",
            "explanation": "The cleaning takes place today from 5 p.m., not next week."
          },
          {
            "text": "機械の点検をするから",
            "explanation": "Correct. The announcement says the pool will close 機械の点検のため (because of inspection of the machinery)."
          },
          {
            "text": "水が冷たいから",
            "explanation": "Water temperature is never mentioned in the announcement."
          },
          {
            "text": "会員が少ないから",
            "explanation": "The number of members is never given as a reason for closing."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:b-asagohan-radio",
    "level": "N3",
    "title": "朝[あさ]ごはんについてのラジオ",
    "script": [
      {
        "speaker": "ラジオ",
        "text": "皆[みな]さん、おはようございます。今日[きょう]は、朝[あさ]ごはんについてお話[はな]しします。最近[さいきん]、朝[あさ]ごはんを食[た]べない若[わか]い人[ひと]が増[ふ]えているそうです。しかし、朝[あさ]ごはんを食[た]べないと、頭[あたま]がよく働[はたら]かず、仕事[しごと]や勉強[べんきょう]に集中[しゅうちゅう]できません。忙[いそが]しい人[ひと]は、バナナやヨーグルトなど、簡単[かんたん]なものでもいいので、何[なに]か食[た]べてから家[いえ]を出[で]ましょう。また、夜遅[よるおそ]くに食事[しょくじ]をすると、朝[あさ]、おなかがすかないので、夕食[ゆうしょく]は寝[ね]る三時間前[さんじかんまえ]までに済[す]ませるといいですよ。"
      }
    ],
    "translation": "Radio: Good morning, everyone. Today I will talk about breakfast. Recently, the number of young people who do not eat breakfast is apparently increasing. However, if you do not eat breakfast, your brain does not work well and you cannot concentrate on work or study. If you are busy, something simple like a banana or yogurt is fine, so eat something before leaving home. Also, if you eat late at night you will not be hungry in the morning, so it is good to finish dinner at least three hours before going to bed.",
    "questions": [
      {
        "question": "朝[あさ]ごはんを食[た]べないと、どうなると言[い]っていますか。",
        "questionTranslation": "According to the speaker, what happens if you do not eat breakfast?",
        "options": [
          {
            "text": "おなかが痛くなる",
            "explanation": "A stomachache is never mentioned in the talk."
          },
          {
            "text": "夜眠れなくなる",
            "explanation": "Sleep problems are not mentioned as a result of skipping breakfast."
          },
          {
            "text": "仕事や勉強に集中できなくなる",
            "explanation": "Correct. The speaker says 頭がよく働かず、仕事や勉強に集中できません (your brain does not work well and you cannot concentrate on work or study)."
          },
          {
            "text": "太りやすくなる",
            "explanation": "Gaining weight is never mentioned in the talk."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "夕食[ゆうしょく]について、何[なん]と言[い]っていますか。",
        "questionTranslation": "What does the speaker say about dinner?",
        "options": [
          {
            "text": "寝る三時間前までに食べるといい",
            "explanation": "Correct. The speaker says 夕食は寝る三時間前までに済ませるといい (it is good to finish dinner by three hours before going to bed)."
          },
          {
            "text": "食べないほうがいい",
            "explanation": "The speaker never says to skip dinner, only to finish it earlier."
          },
          {
            "text": "バナナやヨーグルトがいい",
            "explanation": "Bananas and yogurt are suggested as a simple breakfast for busy people, not as dinner."
          },
          {
            "text": "夜遅く食べてもいい",
            "explanation": "The speaker warns that eating late at night makes you not hungry in the morning, so this is the opposite of the advice."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:b-ryouri-kyoushitsu-phone",
    "level": "N3",
    "title": "料理教室[りょうりきょうしつ]への電話[でんわ]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、みどり料理教室[りょうりきょうしつ]でございます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あのう、初心者向[しょしんしゃむ]けのパン教室[きょうしつ]について聞[き]きたいんですが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、パン教室[きょうしつ]は毎週土曜日[まいしゅうどようび]の午前十時[ごぜんじゅうじ]からです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "料金[りょうきん]はいくらですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "一回三千円[いっかいさんぜんえん]ですが、初[はじ]めての方[かた]は半額[はんがく]の千五百円[せんごひゃくえん]になります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。何[なに]か持[も]っていくものはありますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "エプロンとタオルをお持[も]ちください。材料[ざいりょう]はこちらで用意[ようい]します。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。じゃあ、今度[こんど]の土曜日[どようび]にお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、お待[ま]ちしております。"
      }
    ],
    "translation": "Man: Hello, this is Midori Cooking School.\nWoman: Um, I would like to ask about the bread-baking class for beginners.\nMan: Yes, the bread class is every Saturday from 10 a.m.\nWoman: How much is the fee?\nMan: It is 3,000 yen per lesson, but for first-time participants it is half price, 1,500 yen.\nWoman: I see. Is there anything I need to bring?\nMan: Please bring an apron and a towel. We prepare the ingredients here.\nWoman: Understood. Then please sign me up for this Saturday.\nMan: Certainly, we look forward to seeing you.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]が初[はじ]めて行[い]くとき、料金[りょうきん]はいくらですか。",
        "questionTranslation": "How much is the fee when the woman goes for the first time?",
        "options": [
          {
            "text": "三千円",
            "explanation": "3,000 yen is the regular fee per lesson, but first-timers pay half price."
          },
          {
            "text": "千五百円",
            "explanation": "Correct. The man says 初めての方は半額の千五百円になります (first-time participants pay half price, 1,500 yen)."
          },
          {
            "text": "二千円",
            "explanation": "2,000 yen is never mentioned in the conversation."
          },
          {
            "text": "無料",
            "explanation": "The first lesson is half price, not free."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]は何[なに]を持[も]っていかなければなりませんか。",
        "questionTranslation": "What must the woman bring with her?",
        "options": [
          {
            "text": "パンの材料",
            "explanation": "The man says 材料はこちらで用意します (we prepare the ingredients here), so she does not need to bring them."
          },
          {
            "text": "お弁当",
            "explanation": "A packed lunch is never mentioned in the conversation."
          },
          {
            "text": "エプロンとタオル",
            "explanation": "Correct. The man says エプロンとタオルをお持ちください (please bring an apron and a towel)."
          },
          {
            "text": "会員カード",
            "explanation": "A membership card is never mentioned in the conversation."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:b-sports-club-phone",
    "level": "N3",
    "title": "スポーツクラブへの電話[でんわ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、さくらスポーツクラブです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、入会[にゅうかい]について教[おし]えてください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ありがとうございます。入会[にゅうかい]には、身分証明書[みぶんしょうめいしょ]と月会費[げっかいひ]が必要[ひつよう]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "月会費[げっかいひ]はいくらですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "一[いっ]か月[げつ]六千円[ろくせんえん]です。ただ、今月中[こんげつちゅう]に入会[にゅうかい]すると、最初[さいしょ]の月[つき]は半額[はんがく]になります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。学生[がくせい]の割引[わりびき]はありますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "申[もう]し訳[わけ]ありません、学生割引[がくせいわりびき]はございません。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。じゃあ、今週中[こんしゅうちゅう]に行[い]きます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、お待[ま]ちしております。"
      }
    ],
    "translation": "Woman: Hello, this is Sakura Sports Club.\nMan: Excuse me, could you tell me about joining?\nWoman: Thank you. To join, you need an ID and the monthly fee.\nMan: How much is the monthly fee?\nWoman: It is 6,000 yen per month. However, if you join within this month, the first month is half price.\nMan: I see. Is there a student discount?\nWoman: I am sorry, we do not have a student discount.\nMan: Understood. Then I will come sometime this week.\nWoman: Yes, we look forward to seeing you.",
    "questions": [
      {
        "question": "今月中[こんげつちゅう]に入会[にゅうかい]すると、最初[さいしょ]の月[つき]の会費[かいひ]はいくらですか。",
        "questionTranslation": "If he joins within this month, how much is the first month's fee?",
        "options": [
          {
            "text": "六千円",
            "explanation": "6,000 yen is the regular monthly fee; the first month becomes half price if he joins this month."
          },
          {
            "text": "千五百円",
            "explanation": "Half of 6,000 yen is 3,000 yen, not 1,500 yen."
          },
          {
            "text": "無料",
            "explanation": "The first month is half price, not free."
          },
          {
            "text": "三千円",
            "explanation": "Correct. The regular fee is 6,000 yen and the first month is 半額 (half price), which is 3,000 yen."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "入会[にゅうかい]のとき、何[なに]が必要[ひつよう]ですか。",
        "questionTranslation": "What is needed when joining?",
        "options": [
          {
            "text": "学生証だけ",
            "explanation": "A student ID alone is not mentioned; in fact there is no student discount at this club."
          },
          {
            "text": "身分証明書と月会費",
            "explanation": "Correct. The woman says 身分証明書と月会費が必要です (an ID and the monthly fee are necessary)."
          },
          {
            "text": "写真と印鑑",
            "explanation": "A photo and a personal seal are never mentioned in the conversation."
          },
          {
            "text": "会員の紹介",
            "explanation": "An introduction from an existing member is never mentioned in the conversation."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:b-doubutsuen-phone",
    "level": "N3",
    "title": "動物園[どうぶつえん]への電話[でんわ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、ひがし動物園[どうぶつえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、営業時間[えいぎょうじかん]を教[おし]えてください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午前九時[ごぜんくじ]から午後五時[ごごごじ]までです。ただし、入園[にゅうえん]は午後四時[ごごよじ]までです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "日曜日[にちようび]もやっていますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、お休[やす]みは毎週火曜日[まいしゅうかようび]だけです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "子供[こども]の入園料[にゅうえんりょう]はいくらですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "小学生[しょうがくせい]は二百円[にひゃくえん]ですが、五歳以下[ごさいいか]のお子様[こさま]は無料[むりょう]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。ありがとうございます。"
      }
    ],
    "translation": "Woman: Hello, this is Higashi Zoo.\nMan: Excuse me, could you tell me your opening hours?\nWoman: We are open from 9 a.m. to 5 p.m. However, entry is only until 4 p.m.\nMan: Are you open on Sundays too?\nWoman: Yes, we are closed only on Tuesdays.\nMan: How much is the entrance fee for children?\nWoman: Elementary school children are 200 yen, but children five and under are free.\nMan: Understood. Thank you.",
    "questions": [
      {
        "question": "動物園[どうぶつえん]に入[はい]りたい人[ひと]は、何時[なんじ]までに入[はい]らなければなりませんか。",
        "questionTranslation": "By what time must people enter the zoo?",
        "options": [
          {
            "text": "午後五時",
            "explanation": "5 p.m. is the closing time, but entry ends earlier."
          },
          {
            "text": "午前九時",
            "explanation": "9 a.m. is the opening time, not a deadline for entering."
          },
          {
            "text": "午後三時",
            "explanation": "3 p.m. is never mentioned in the conversation."
          },
          {
            "text": "午後四時",
            "explanation": "Correct. The woman says 入園は午後四時までです (entry is only until 4 p.m.)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "動物園[どうぶつえん]が休[やす]みなのはいつですか。",
        "questionTranslation": "When is the zoo closed?",
        "options": [
          {
            "text": "毎週月曜日",
            "explanation": "Monday is not mentioned; the closed day is Tuesday."
          },
          {
            "text": "毎週日曜日",
            "explanation": "The woman confirms the zoo is open on Sundays."
          },
          {
            "text": "毎週火曜日",
            "explanation": "Correct. The woman says お休みは毎週火曜日だけです (we are closed only on Tuesdays)."
          },
          {
            "text": "休みはない",
            "explanation": "The zoo does have a closed day: every Tuesday."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "五歳[ごさい]の子供[こども]の入園料[にゅうえんりょう]はいくらですか。",
        "questionTranslation": "How much is the entrance fee for a five-year-old child?",
        "options": [
          {
            "text": "無料",
            "explanation": "Correct. The woman says 五歳以下のお子様は無料です (children five and under are free), and a five-year-old is included."
          },
          {
            "text": "二百円",
            "explanation": "200 yen is the fee for elementary school children; a five-year-old falls under the free category."
          },
          {
            "text": "百円",
            "explanation": "100 yen is never mentioned in the conversation."
          },
          {
            "text": "五百円",
            "explanation": "500 yen is never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:b-bus-tour-phone",
    "level": "N3",
    "title": "バスツアーの予約[よやく]の電話[でんわ]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、あおぞら観光[かんこう]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あのう、紅葉[こうよう]を見[み]るバスツアーについて聞[き]きたいんですが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、山[やま]の紅葉[こうよう]ツアーですね。毎日午前八時[まいにちごぜんはちじ]に駅前[えきまえ]から出発[しゅっぱつ]します。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "料金[りょうきん]に昼[ひる]ごはんは付[つ]いていますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、一人五千円[ひとりごせんえん]で、お弁当[べんとう]とお茶[ちゃ]が付[つ]いています。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "予約[よやく]は必要[ひつよう]ですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、前[まえ]の日[ひ]の午後三時[ごごさんじ]までにお電話[でんわ]でご予約[よやく]ください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "雨[あめ]の日[ひ]はどうなりますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "雨[あめ]でもツアーは行[おこな]いますが、台風[たいふう]のときは中止[ちゅうし]になります。"
      }
    ],
    "translation": "Man: Hello, this is Aozora Tours.\nWoman: Um, I would like to ask about the bus tour to see the autumn leaves.\nMan: Yes, the mountain autumn-leaves tour. It departs from in front of the station every day at 8 a.m.\nWoman: Does the price include lunch?\nMan: Yes, it is 5,000 yen per person, and a boxed lunch and tea are included.\nWoman: Do I need a reservation?\nMan: Yes, please make a reservation by phone by 3 p.m. the day before.\nWoman: What happens on rainy days?\nMan: The tour runs even in rain, but it is cancelled in case of a typhoon.",
    "questions": [
      {
        "question": "ツアーに参加[さんか]したい人[ひと]は、どうしなければなりませんか。",
        "questionTranslation": "What must a person who wants to join the tour do?",
        "options": [
          {
            "text": "当日の朝、駅前で申し込む",
            "explanation": "The station is only the departure point; signing up on the morning of the tour is not mentioned."
          },
          {
            "text": "前の日の午後三時までに電話で予約する",
            "explanation": "Correct. The man says 前の日の午後三時までにお電話でご予約ください (please make a reservation by phone by 3 p.m. the day before)."
          },
          {
            "text": "インターネットで予約する",
            "explanation": "Reservations are made by phone; the internet is never mentioned."
          },
          {
            "text": "三日前までにお金を払う",
            "explanation": "Paying three days in advance is never mentioned in the conversation."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "台風[たいふう]のとき、ツアーはどうなりますか。",
        "questionTranslation": "What happens to the tour in case of a typhoon?",
        "options": [
          {
            "text": "中止になる",
            "explanation": "Correct. The man says 台風のときは中止になります (in case of a typhoon it is cancelled)."
          },
          {
            "text": "そのまま行われる",
            "explanation": "The tour goes ahead in ordinary rain, but not in a typhoon."
          },
          {
            "text": "次の日に延期になる",
            "explanation": "Postponement to the next day is never mentioned; a typhoon means cancellation."
          },
          {
            "text": "出発の時間が変わる",
            "explanation": "A change of departure time is never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:c-jitensha-shuuri-mitsumori",
    "level": "N3",
    "title": "自転車[じてんしゃ]の修理[しゅうり]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、この自転車[じてんしゃ]、ブレーキから変[へん]な音[おと]がするんですが、見[み]てもらえますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、拝見[はいけん]します。ああ、ブレーキのゴムがすり減[へ]っていますね。それから、後[うし]ろのタイヤ、空気[くうき]が抜[ぬ]けています。中[なか]のチューブに穴[あな]が開[あ]いているようです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "両方[りょうほう]直[なお]すと、いくらぐらいかかりますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "チューブの交換[こうかん]が千五百円[せんごひゃくえん]、ブレーキのゴムの交換[こうかん]が二千円[にせんえん]ですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、合[あ]わせると三千五百円[さんぜんごひゃくえん]か。タイヤは今日[きょう]直[なお]してほしいんですが、ブレーキは来月[らいげつ]、給料[きゅうりょう]が出[で]てからでもいいですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "ええ、大丈夫[だいじょうぶ]ですよ。音[おと]がするだけで、まだ危[あぶ]なくはないですから。では、今日[きょう]はチューブの交換[こうかん]だけですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、お願[ねが]いします。三十分[さんじゅっぷん]ぐらいでできますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "申[もう]し訳[わけ]ありません、今[いま]ほかの修理[しゅうり]が入[はい]っていて、二時間[にじかん]ほどいただきます。五時[ごじ]ごろのお渡[わた]しになりますが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "分[わ]かりました。じゃあ、五時[ごじ]に取[と]りに来[き]ます。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "かしこまりました。こちらの預[あず]かり証[しょう]をお持[も]ちください。"
      }
    ],
    "translation": "A man brings his bicycle to a repair shop because the brakes make a strange noise. The clerk finds the brake rubber is worn and the rear tire is flat with a punctured tube. Fixing both would cost 3,500 yen: 1,500 for the tube, 2,000 for the brake rubber. The man asks to fix only the tire today and to leave the brakes until next month after payday; the clerk agrees since the brakes are not yet dangerous. It cannot be done in thirty minutes because other repairs are queued — it will take about two hours, ready around five o'clock. The man says he will come back at five, and the clerk hands him a claim ticket.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は今日[きょう]、何[なに]を修理[しゅうり]してもらいますか。",
        "questionTranslation": "What will the man have repaired today?",
        "options": [
          {
            "text": "後ろのタイヤ",
            "explanation": "Correct. He decides to have only the tube of the rear tire replaced today (「今日はチューブの交換だけですね」)."
          },
          {
            "text": "ブレーキ",
            "explanation": "He postpones the brake repair until next month, after he gets paid."
          },
          {
            "text": "タイヤとブレーキの両方",
            "explanation": "He asks the price for both, but 3,500 yen is too much, so he only fixes the tire today."
          },
          {
            "text": "前のタイヤ",
            "explanation": "The flat tire is the rear one (後ろのタイヤ), not the front."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "男[おとこ]の人[ひと]は何時[なんじ]に自転車[じてんしゃ]を取[と]りに来[き]ますか。",
        "questionTranslation": "At what time will the man come to pick up the bicycle?",
        "options": [
          {
            "text": "三十分後",
            "explanation": "He asked if it could be done in thirty minutes, but the clerk said other repairs are queued."
          },
          {
            "text": "二時",
            "explanation": "The repair takes two hours (二時間), but that is a duration, not the pickup time."
          },
          {
            "text": "五時",
            "explanation": "Correct. The clerk says it will be ready around five, and the man says 「五時に取りに来ます」."
          },
          {
            "text": "明日の朝",
            "explanation": "The repair is finished today; nothing is said about tomorrow morning."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:c-takuhaibin-saihaitatsu",
    "level": "N3",
    "title": "宅配便[たくはいびん]の再配達[さいはいたつ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、荷物[にもつ]の再配達[さいはいたつ]をお願[ねが]いしたいんですが。ポストに不在票[ふざいひょう]が入[はい]っていました。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ありがとうございます。不在票[ふざいひょう]の番号[ばんごう]をお願[ねが]いします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、1234の567です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "確認[かくにん]いたしました。お荷物[にもつ]は本日[ほんじつ]、夜[よる]七時[しちじ]から九時[くじ]の間[あいだ]でしたらお届[とど]けできますが。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "今日[きょう]の夜[よる]はこれから出[で]かけるので、ちょっと…。明日[あした]の午前中[ごぜんちゅう]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "申[もう]し訳[わけ]ありません、明日[あした]の午前中[ごぜんちゅう]はもう予約[よやく]がいっぱいでして。午後[ごご]二時[にじ]以降[いこう]でしたら大丈夫[だいじょうぶ]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午後[ごご]は仕事[しごと]なんです。夕方[ゆうがた]六時[ろくじ]から八時[はちじ]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、六時[ろくじ]から八時[はちじ]でお受[う]けできます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "では、それでお願[ねが]いします。あ、近[ちか]くのコンビニで受[う]け取[と]ることもできるんですよね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、できますが、お荷物[にもつ]が大[おお]きいので、お持[も]ち帰[かえ]りが大変[たいへん]かもしれません。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですね。じゃあ、やっぱり家[いえ]に届[とど]けてください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "かしこまりました。明日[あした]の夕方[ゆうがた]六時[ろくじ]から八時[はちじ]にお届[とど]けします。"
      }
    ],
    "translation": "A woman calls a delivery company to arrange redelivery after finding a missed-delivery slip in her mailbox. The agent offers tonight between 7 and 9, but she is going out. Tomorrow morning is fully booked; after 2 p.m. is possible, but she works in the afternoon. They settle on tomorrow evening between 6 and 8. She asks about picking the package up at a nearby convenience store; the agent says it is possible but the package is large and would be hard to carry home, so she decides on home delivery after all.",
    "questions": [
      {
        "question": "荷物[にもつ]はいつ届[とど]きますか。",
        "questionTranslation": "When will the package be delivered?",
        "options": [
          {
            "text": "今日の夜七時から九時",
            "explanation": "The agent offered tonight 7–9, but the woman is going out this evening."
          },
          {
            "text": "明日の午前中",
            "explanation": "She asked for tomorrow morning, but it was already fully booked."
          },
          {
            "text": "明日の午後二時",
            "explanation": "After 2 p.m. was possible, but she works in the afternoon, so this was rejected."
          },
          {
            "text": "明日の夕方六時から八時",
            "explanation": "Correct. They agree on tomorrow evening 6–8 (「明日の夕方六時から八時にお届けします」)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "女[おんな]の人[ひと]はどうしてコンビニで受[う]け取[と]りませんか。",
        "questionTranslation": "Why doesn't the woman pick the package up at the convenience store?",
        "options": [
          {
            "text": "コンビニが家から遠いから",
            "explanation": "Distance is never mentioned; she says the store is nearby (近くのコンビニ)."
          },
          {
            "text": "荷物が大きくて持って帰るのが大変だから",
            "explanation": "Correct. The agent warns the package is large and hard to carry home, so she chooses home delivery."
          },
          {
            "text": "コンビニでは受け取れない荷物だから",
            "explanation": "The agent says convenience-store pickup is possible (「はい、できますが」)."
          },
          {
            "text": "明日は家にいないから",
            "explanation": "She will be home tomorrow evening — that's when the delivery is scheduled."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-haisha-yoyaku-henkou",
    "level": "N3",
    "title": "歯医者[はいしゃ]の予約[よやく]の変更[へんこう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、さくら歯科[しか]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あの、金曜日[きんようび]の午後[ごご]三時[さんじ]に予約[よやく]している田中[たなか]ですが、急[きゅう]に出張[しゅっちょう]が入[はい]ってしまって。予約[よやく]を変[か]えていただきたいんです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "かしこまりました。来週[らいしゅう]でしたら、いつがよろしいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "火曜日[かようび]の夕方[ゆうがた]は空[あ]いていますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "申[もう]し訳[わけ]ありません、火曜日[かようび]は一日中[いちにちじゅう]いっぱいでして。水曜日[すいようび]の午前[ごぜん]十時[じゅうじ]はいかがですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "水曜日[すいようび]の午前[ごぜん]は仕事[しごと]があって行[い]けないんです。夕方[ゆうがた]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "水曜日[すいようび]の夕方[ゆうがた]もいっぱいですね…。木曜日[もくようび]でしたら、夕方[ゆうがた]六時[ろくじ]が空[あ]いていますが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "木曜日[もくようび]の六時[ろくじ]ですね。はい、それでお願[ねが]いします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "かしこまりました。では、木曜日[もくようび]の午後[ごご]六時[ろくじ]にお待[ま]ちしております。保険証[ほけんしょう]を忘[わす]れずにお持[も]ちください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、ありがとうございます。"
      }
    ],
    "translation": "A man calls Sakura Dental Clinic to change his Friday 3 p.m. appointment because a business trip suddenly came up. He asks about Tuesday evening, but Tuesday is fully booked all day. The receptionist offers Wednesday at 10 a.m., but he has work in the morning; Wednesday evening is also full. Thursday at 6 p.m. is open, and he takes it. The receptionist reminds him to bring his health insurance card.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は予約[よやく]をいつに変更[へんこう]しましたか。",
        "questionTranslation": "To when did the man change his appointment?",
        "options": [
          {
            "text": "火曜日の夕方",
            "explanation": "He asked about Tuesday evening, but Tuesday was fully booked all day."
          },
          {
            "text": "水曜日の午前十時",
            "explanation": "The receptionist offered this slot, but he has work on Wednesday morning."
          },
          {
            "text": "木曜日の夕方六時",
            "explanation": "Correct. Thursday 6 p.m. was open and he accepted it (「木曜日の六時ですね。はい、それでお願いします」)."
          },
          {
            "text": "金曜日の午後三時",
            "explanation": "That was his original appointment, which he is canceling because of the business trip."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "男[おとこ]の人[ひと]はどうして予約[よやく]を変更[へんこう]しますか。",
        "questionTranslation": "Why is the man changing his appointment?",
        "options": [
          {
            "text": "急に出張が入ったから",
            "explanation": "Correct. He says 「急に出張が入ってしまって」— a sudden business trip came up."
          },
          {
            "text": "歯が痛くなくなったから",
            "explanation": "He never says his tooth stopped hurting; he still wants an appointment."
          },
          {
            "text": "病気になったから",
            "explanation": "Illness is not mentioned; the reason is a business trip."
          },
          {
            "text": "旅行に行くから",
            "explanation": "It is a business trip (出張), not a leisure trip (旅行)."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:c-shiyakusho-juuminhyou",
    "level": "N3",
    "title": "市役所[しやくしょ]の窓口[まどぐち]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、住民票[じゅうみんひょう]を取[と]りたいんですが、どこへ行[い]けばいいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "住民票[じゅうみんひょう]でしたら、二番[にばん]の窓口[まどぐち]です。あちらの機械[きかい]で番号札[ばんごうふだ]をお取[と]りになって、番号[ばんごう]が呼[よ]ばれるまでお待[ま]ちください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "分[わ]かりました。何[なに]か必要[ひつよう]なものはありますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "本人確認[ほんにんかくにん]ができるものをお願[ねが]いします。運転免許証[うんてんめんきょしょう]やパスポートなどですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "免許証[めんきょしょう]なら持[も]っています。手数料[てすうりょう]はかかりますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、一通[いっつう]三百円[さんびゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "分[わ]かりました。あと、パスポートの申請[しんせい]もここでできますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "パスポートは市役所[しやくしょ]ではなくて、駅前[えきまえ]の県[けん]のセンターになります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。じゃあ、それはまた今度[こんど]にします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。では、まず番号札[ばんごうふだ]をどうぞ。"
      }
    ],
    "translation": "At city hall, a man asks where to get a certificate of residence (juminhyo). The clerk directs him to counter No. 2 and tells him to first take a numbered ticket from the machine and wait until his number is called. He needs photo ID such as a driver's license or passport — he has his license. The fee is 300 yen per copy. He also asks about applying for a passport, but that is handled not at city hall but at the prefectural center in front of the station, so he decides to do that another time. The clerk tells him to start by taking a numbered ticket.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]をしに市役所[しやくしょ]へ来[き]ましたか。",
        "questionTranslation": "What did the man come to city hall to do?",
        "options": [
          {
            "text": "住民票を取りに来た",
            "explanation": "Correct. His first line is 「住民票を取りたいんですが」."
          },
          {
            "text": "パスポートを申請しに来た",
            "explanation": "He only asks about passports in passing; they are handled at the prefectural center, and he puts it off."
          },
          {
            "text": "運転免許証を作りに来た",
            "explanation": "The driver's license is just the ID he already has for identity verification."
          },
          {
            "text": "引っ越しの手続きに来た",
            "explanation": "Moving procedures are never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "住民票[じゅうみんひょう]の手数料[てすうりょう]はいくらですか。",
        "questionTranslation": "How much is the fee for the certificate of residence?",
        "options": [
          {
            "text": "100円",
            "explanation": "The clerk says 300 yen per copy, not 100 yen."
          },
          {
            "text": "200円",
            "explanation": "The clerk says 300 yen per copy, not 200 yen."
          },
          {
            "text": "300円",
            "explanation": "Correct. The clerk says 「一通三百円です」— 300 yen per copy."
          },
          {
            "text": "無料",
            "explanation": "It is not free; the clerk clearly states a fee of 300 yen."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあと、まず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "二番の窓口に並ぶ",
            "explanation": "He goes to counter No. 2 only after his number is called, not by lining up first."
          },
          {
            "text": "番号札を取る",
            "explanation": "Correct. The clerk twice tells him to take a numbered ticket from the machine first (「まず番号札をどうぞ」)."
          },
          {
            "text": "免許証を取りに家へ帰る",
            "explanation": "He already has his driver's license with him (「免許証なら持っています」)."
          },
          {
            "text": "駅前のセンターへ行く",
            "explanation": "The passport center visit is postponed to another day (「また今度にします」)."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-rentacar-henkou",
    "level": "N3",
    "title": "レンタカーの変更[へんこう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、今日[きょう]の十時[じゅうじ]から予約[よやく]している山田[やまだ]です。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "山田様[やまださま]ですね。小型車[こがたしゃ]を一日[いちにち]のご予約[よやく]で承[うけたまわ]っております。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それなんですが、行[い]く人[ひと]が三人[さんにん]から五人[ごにん]に増[ふ]えてしまって。もっと大[おお]きい車[くるま]に変[か]えられますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "五名様[ごめいさま]ですと、あいにく中型車[ちゅうがたしゃ]は本日[ほんじつ]全部[ぜんぶ]出[で]ておりまして、ワゴン車[しゃ]ならご用意[ようい]できます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ワゴン車[しゃ]ですか。料金[りょうきん]はどうなりますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "小型車[こがたしゃ]より二千円[にせんえん]高[たか]くなりまして、一日[いちにち]九千円[きゅうせんえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "分[わ]かりました。じゃあ、それでお願[ねが]いします。返[かえ]すのは今日[きょう]の夜[よる]九時[くじ]ごろになりそうなんですが。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "当店[とうてん]の営業[えいぎょう]は八時[はちじ]までなんです。八時[はちじ]を過[す]ぎる場合[ばあい]は、駐車場[ちゅうしゃじょう]に車[くるま]を止[と]めて、鍵[かぎ]を入[い]り口[ぐち]横[よこ]のボックスに入[い]れてください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "鍵[かぎ]をボックスに入[い]れるんですね。分[わ]かりました。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。では、こちらの用紙[ようし]にご記入[きにゅう]をお願[ねが]いします。"
      }
    ],
    "translation": "A woman arrives at a car rental shop where she reserved a compact car for the day. Her group has grown from three to five people, so she asks for a bigger car. All mid-size cars are already out today, but a van is available for 2,000 yen more — 9,000 yen per day — and she accepts. She expects to return the car around 9 p.m., but the shop closes at 8, so the clerk tells her to park in the lot and drop the key into the box beside the entrance if she returns after eight. She then fills out the rental form.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどの車[くるま]を借[か]りますか。",
        "questionTranslation": "Which car will the woman rent?",
        "options": [
          {
            "text": "小型車",
            "explanation": "The compact car was her original reservation, but it is too small for five people."
          },
          {
            "text": "中型車",
            "explanation": "All mid-size cars are already out today (「中型車は本日全部出ておりまして」)."
          },
          {
            "text": "ワゴン車",
            "explanation": "Correct. The van is the only larger car available and she accepts it (「じゃあ、それでお願いします」)."
          },
          {
            "text": "バス",
            "explanation": "A bus is never mentioned in the conversation."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "車[くるま]を返[かえ]す時[とき]、女[おんな]の人[ひと]はどうしますか。",
        "questionTranslation": "What will the woman do when returning the car?",
        "options": [
          {
            "text": "夜九時に店員に鍵を渡す",
            "explanation": "The shop closes at 8 p.m., so no clerk will be there at 9."
          },
          {
            "text": "鍵を入り口横のボックスに入れる",
            "explanation": "Correct. After hours she should park the car and put the key in the box next to the entrance."
          },
          {
            "text": "翌朝までに店に電話する",
            "explanation": "Calling the shop is never mentioned as part of the return procedure."
          },
          {
            "text": "八時までに必ず店に戻る",
            "explanation": "She expects to return around 9; the clerk explains the after-hours procedure instead of requiring an 8 p.m. return."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-gym-plan-henkou",
    "level": "N3",
    "title": "ジムの会員[かいいん]プランの変更[へんこう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、会員[かいいん]をやめたいんですが、手続[てつづ]きをお願[ねが]いできますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "かしこまりました。よろしければ、ご理由[りゆう]を伺[うかが]ってもいいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "仕事[しごと]が忙[いそが]しくなって、平日[へいじつ]は全然[ぜんぜん]来[こ]られなくなったんです。月[つき]八千円[はっせんえん]払[はら]うのはもったいなくて。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "そうでしたか。それでしたら、土日[どにち]だけ使[つか]える週末会員[しゅうまつかいいん]はいかがですか。月会費[げっかいひ]は四千五百円[よんせんごひゃくえん]になります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "へえ、そんなプランがあるんですか。週末[しゅうまつ]なら来[こ]られると思[おも]います。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "プールもスタジオも、土日[どにち]は全部[ぜんぶ]ご利用[りよう]いただけますよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、やめないで、そのプランに変[か]えます。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "ありがとうございます。お手続[てつづ]きには会員[かいいん]カードが必要[ひつよう]ですが、お持[も]ちですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、あります。新[あたら]しいプランはいつからですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "今月[こんげつ]は今[いま]のままで、来月[らいげつ]の一日[ついたち]からのご利用[りよう]になります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "分[わ]かりました。お願[ねが]いします。"
      }
    ],
    "translation": "A woman comes to her sports gym to cancel her membership: work has gotten busy, she can no longer come on weekdays, and paying 8,000 yen a month feels like a waste. The staff member suggests a weekend-only membership for 4,500 yen a month, with full use of the pool and studio on Saturdays and Sundays. Since she can come on weekends, she decides to switch plans instead of quitting. The procedure requires her membership card, which she has. This month stays as is; the new plan starts on the first of next month.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどうすることにしましたか。",
        "questionTranslation": "What did the woman decide to do?",
        "options": [
          {
            "text": "会員をやめる",
            "explanation": "She came to quit, but changed her mind after hearing about the weekend plan (「やめないで、そのプランに変えます」)."
          },
          {
            "text": "週末会員のプランに変える",
            "explanation": "Correct. She switches to the weekend-only plan instead of canceling."
          },
          {
            "text": "別のジムに移る",
            "explanation": "Moving to another gym is never mentioned."
          },
          {
            "text": "今のまま続ける",
            "explanation": "She does not keep the current 8,000-yen plan; she changes to the cheaper weekend plan."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "新[あたら]しいプランはいつから使[つか]えますか。",
        "questionTranslation": "From when can she use the new plan?",
        "options": [
          {
            "text": "今日から",
            "explanation": "The staff member says this month stays under the current plan."
          },
          {
            "text": "今週の土曜日から",
            "explanation": "Weekends are when she can visit, but the plan itself starts next month, not this Saturday."
          },
          {
            "text": "来月の一日から",
            "explanation": "Correct. The clerk says 「来月の一日からのご利用になります」— from the first of next month."
          },
          {
            "text": "来年から",
            "explanation": "It starts next month, not next year."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:c-kutsu-shuuri-uketori",
    "level": "N3",
    "title": "靴[くつ]の修理[しゅうり]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、この靴[くつ]のかかとが取[と]れてしまって。直[なお]せますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "拝見[はいけん]します。ああ、これなら、かかとの部分[ぶぶん]を新[あたら]しいものに交換[こうかん]すれば大丈夫[だいじょうぶ]ですよ。千二百円[せんにひゃくえん]になります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "よかった。今[いま]、待[ま]っていればできますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "申[もう]し訳[わけ]ありません。普段[ふだん]は三十分[さんじゅっぷん]ほどでできるんですが、今日[きょう]は担当[たんとう]の職人[しょくにん]が出[で]ておりまして、仕上[しあ]がりは明日[あした]の午後[ごご]になります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "明日[あした]の午後[ごご]ですか…。金曜日[きんようび]の夜[よる]のパーティーでこの靴[くつ]をはきたいんです。明日[あした]なら間[ま]に合[あ]いますね。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、明日[あした]の二時[にじ]以降[いこう]でしたら、いつでもお渡[わた]しできます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、お願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "あと、五百円[ごひゃくえん]で防水[ぼうすい]のスプレーもかけられますが、いかがですか。雨[あめ]の日[ひ]も安心[あんしん]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うーん、今回[こんかい]はけっこうです。修理[しゅうり]だけでお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "かしこまりました。では、こちらの引[ひ]き換[か]え券[けん]をお持[も]ちください。"
      }
    ],
    "translation": "A woman brings a shoe with a broken heel to a repair shop. The clerk says replacing the heel piece will fix it for 1,200 yen. She asks if she can wait for it, but the repair craftsman is out today, so it will be ready tomorrow afternoon — normally it takes only thirty minutes. She wants to wear the shoes to a party on Friday night, so tomorrow is fine; pickup is any time after 2 p.m. The clerk also offers a waterproofing spray for an extra 500 yen, but she declines and asks for the repair only. She receives a claim ticket.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はいつ靴[くつ]を受[う]け取[と]れますか。",
        "questionTranslation": "When can the woman pick up the shoes?",
        "options": [
          {
            "text": "今日の三十分後",
            "explanation": "Thirty minutes is the usual time, but today the craftsman is out, so it can't be done today."
          },
          {
            "text": "今日の夕方",
            "explanation": "Nothing can be finished today; the craftsman is away."
          },
          {
            "text": "明日の午後二時以降",
            "explanation": "Correct. The clerk says pickup is possible any time after 2 p.m. tomorrow."
          },
          {
            "text": "金曜日の夜",
            "explanation": "Friday night is the party she wants the shoes for, not the pickup time."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "女[おんな]の人[ひと]はいくら払[はら]いますか。",
        "questionTranslation": "How much will the woman pay?",
        "options": [
          {
            "text": "500円",
            "explanation": "500 yen is the price of the waterproofing spray, which she declined."
          },
          {
            "text": "1,200円",
            "explanation": "Correct. She only gets the heel repair, which costs 1,200 yen; she declined the 500-yen spray."
          },
          {
            "text": "1,700円",
            "explanation": "That would be repair plus waterproofing, but she said no to the spray (「今回はけっこうです」)."
          },
          {
            "text": "2,000円",
            "explanation": "No 2,000-yen price appears in the conversation."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-eakon-shuuri-denwa",
    "level": "N3",
    "title": "エアコンの修理[しゅうり]の電話[でんわ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、みどり電気[でんき]サービスセンターです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あの、エアコンの調子[ちょうし]が悪[わる]くて、お電話[でんわ]しました。スイッチは入[はい]るんですが、冷[つめ]たい風[かぜ]が全然[ぜんぜん]出[で]ないんです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "かしこまりました。それでは、修理[しゅうり]の者[もの]がお宅[たく]に伺[うかが]って点検[てんけん]いたします。出張費[しゅっちょうひ]が三千円[さんぜんえん]で、部品[ぶひん]の交換[こうかん]が必要[ひつよう]な場合[ばあい]は部品代[ぶひんだい]が別[べつ]にかかりますが、よろしいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、大丈夫[だいじょうぶ]です。今日[きょう]来[き]てもらえますか。この暑[あつ]さで困[こま]っていて。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "申[もう]し訳[わけ]ありません、本日[ほんじつ]の予約[よやく]はいっぱいでして。明日[あした]の午前中[ごぜんちゅう]はいかがですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "明日[あした]の午前[ごぜん]は出[で]かける用事[ようじ]があるんです。午後[ごご]なら家[いえ]にいます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "では、明日[あした]の午後[ごご]二時[にじ]ごろはいかがでしょうか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、それでお願[ねが]いします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "点検[てんけん]の時[とき]はお部屋[へや]の中[なか]に入[はい]りますので、必[かなら]ずどなたかご在宅[ざいたく]でお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "分[わ]かりました。よろしくお願[ねが]いします。"
      }
    ],
    "translation": "A man calls an electric appliance service center because his air conditioner turns on but blows no cold air at all. The agent explains a technician will visit and inspect it: the call-out fee is 3,000 yen, and if parts need replacing, the parts cost is extra. He asks for a same-day visit because of the heat, but today is fully booked. Tomorrow morning he has an errand, so they agree on tomorrow around 2 p.m. The agent notes that someone must be home because the technician needs to enter the room.",
    "questions": [
      {
        "question": "エアコンはどんな調子[ちょうし]ですか。",
        "questionTranslation": "What is wrong with the air conditioner?",
        "options": [
          {
            "text": "スイッチが入らない",
            "explanation": "The man says the switch does turn on (「スイッチは入るんですが」)."
          },
          {
            "text": "冷たい風が全然出ない",
            "explanation": "Correct. He says cold air doesn't come out at all even though it powers on."
          },
          {
            "text": "変な音がする",
            "explanation": "No strange noise is mentioned — the problem is no cold air."
          },
          {
            "text": "水が漏れている",
            "explanation": "A water leak is never mentioned in the call."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "修理[しゅうり]の人[ひと]はいつ来[き]ますか。",
        "questionTranslation": "When will the repair person come?",
        "options": [
          {
            "text": "今日の午後",
            "explanation": "Today is fully booked, so a same-day visit was impossible."
          },
          {
            "text": "明日の午前中",
            "explanation": "The agent offered tomorrow morning, but the man has an errand then."
          },
          {
            "text": "明日の午後二時ごろ",
            "explanation": "Correct. They agree on tomorrow around 2 p.m., when he will be home."
          },
          {
            "text": "あさっての朝",
            "explanation": "The day after tomorrow is never discussed."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "修理[しゅうり]には最低[さいてい]いくらかかりますか。",
        "questionTranslation": "What is the minimum the repair will cost?",
        "options": [
          {
            "text": "無料",
            "explanation": "It is not free; the call-out fee always applies."
          },
          {
            "text": "3,000円",
            "explanation": "Correct. The call-out fee is 3,000 yen, and parts cost extra only if replacement is needed."
          },
          {
            "text": "5,000円",
            "explanation": "No 5,000-yen figure appears; 3,000 yen is the stated call-out fee."
          },
          {
            "text": "部品代だけ",
            "explanation": "Parts are the extra charge; the 3,000-yen visit fee is charged regardless."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-haitatsu-machigai",
    "level": "N3",
    "title": "届[とど]いた商品[しょうひん]の間違[まちが]い",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、そちらのオンラインショップで買[か]い物[もの]をした者[もの]ですが、届[とど]いた商品[しょうひん]が注文[ちゅうもん]したものと違[ちが]うんです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "大変[たいへん]申[もう]し訳[わけ]ございません。ご注文[ちゅうもん]の内容[ないよう]を確認[かくにん]いたしますので、注文番号[ちゅうもんばんごう]をお願[ねが]いできますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "A-58の320です。白[しろ]のマグカップのセットを頼[たの]んだんですが、届[とど]いたのは黒[くろ]でした。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "確認[かくにん]いたしました。こちらの手違[てちが]いで、誠[まこと]に申[もう]し訳[わけ]ございません。ご返金[へんきん]か、正[ただ]しい商品[しょうひん]との交換[こうかん]か、どちらがよろしいでしょうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "プレゼント用[よう]に買[か]ったので、白[しろ]のものと交換[こうかん]してください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "かしこまりました。正[ただ]しい商品[しょうひん]は木曜日[もくようび]にお届[とど]けします。その時[とき]に、配達員[はいたついん]がお手元[てもと]の黒[くろ]い商品[しょうひん]をお引[ひ]き取[と]りいたします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "箱[はこ]に入[い]れて返[かえ]せばいいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、届[とど]いた時[とき]の箱[はこ]のままで結構[けっこう]です。送料[そうりょう]はもちろんかかりません。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "分[わ]かりました。じゃあ、木曜日[もくようび]にお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "この度[たび]は誠[まこと]に申[もう]し訳[わけ]ございませんでした。"
      }
    ],
    "translation": "A woman calls an online shop because the item she received is different from what she ordered: she ordered a set of white mugs but black ones arrived. The staff member confirms it was the shop's mistake and offers either a refund or an exchange. Since she bought them as a present, she chooses the exchange for white ones. The correct item will be delivered on Thursday, and the delivery driver will collect the black set at the same time — she can return it in the box it came in, with no shipping charge.",
    "questions": [
      {
        "question": "何[なに]が問題[もんだい]でしたか。",
        "questionTranslation": "What was the problem?",
        "options": [
          {
            "text": "商品が壊れていた",
            "explanation": "Nothing was broken; the item was the wrong color."
          },
          {
            "text": "注文した色と違う色が届いた",
            "explanation": "Correct. She ordered white mugs but black ones were delivered."
          },
          {
            "text": "商品がまだ届いていない",
            "explanation": "The package did arrive — it just contained the wrong color."
          },
          {
            "text": "数が足りなかった",
            "explanation": "The quantity is never mentioned as a problem, only the color."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]はこのあとどうしますか。",
        "questionTranslation": "What will the woman do?",
        "options": [
          {
            "text": "返金してもらう",
            "explanation": "A refund was offered, but she chose the exchange because it's a present."
          },
          {
            "text": "木曜日に白い商品と交換してもらう",
            "explanation": "Correct. The white set arrives Thursday and the driver takes back the black one then."
          },
          {
            "text": "店に商品を持って行く",
            "explanation": "She doesn't need to go anywhere; the driver collects the wrong item at her home."
          },
          {
            "text": "黒いものをそのまま使う",
            "explanation": "She doesn't keep the black set; she wants white ones for a present."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-cleaning-yarinaoshi",
    "level": "N3",
    "title": "クリーニング店[てん]で",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、昨日[きのう]受[う]け取[と]ったこのジャケットなんですが、家[いえ]で見[み]たら、そでのしみが残[のこ]っていて。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "大変[たいへん]申[もう]し訳[わけ]ございません。拝見[はいけん]します。ああ、本当[ほんとう]ですね。これは油[あぶら]のしみなので、特別[とくべつ]な方法[ほうほう]でもう一度[いちど]洗[あら]わせていただきます。もちろん料金[りょうきん]はいただきません。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "お願[ねが]いします。いつできますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "通常[つうじょう]ですと、土曜日[どようび]のお渡[わた]しになります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "土曜日[どようび]ですか。実[じつ]は金曜日[きんようび]の夜[よる]に着[き]たいんです。出張[しゅっちょう]で使[つか]うので。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "そうですか…。では、工場[こうじょう]に急[いそ]いでもらって、金曜日[きんようび]の夕方[ゆうがた]六時[ろくじ]までにご用意[ようい]します。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "六時[ろくじ]ですね。助[たす]かります。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "この度[たび]は申[もう]し訳[わけ]ございませんでした。仕上[しあ]がりましたら、お電話[でんわ]いたします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、よろしくお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "お預[あず]かりいたします。"
      }
    ],
    "translation": "A man returns to a dry cleaner with a jacket he picked up yesterday: at home he noticed a stain still on the sleeve. The clerk apologizes — it is an oil stain, so they will wash it again with a special method at no charge. Normally it would be ready Saturday, but he wants to wear it Friday night for a business trip. The clerk arranges a rush job at the plant so it will be ready by 6 p.m. Friday and promises to call when it is finished.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどうして店[みせ]に来[き]ましたか。",
        "questionTranslation": "Why did the man come to the shop?",
        "options": [
          {
            "text": "新しい服を初めて出しに来た",
            "explanation": "He already had this jacket cleaned; this is a return visit about the result."
          },
          {
            "text": "そでにしみが残っていたから",
            "explanation": "Correct. He found a stain still on the sleeve of the jacket he picked up yesterday."
          },
          {
            "text": "別の人の服が入っていたから",
            "explanation": "A mixed-up garment is never mentioned; the issue is a remaining stain."
          },
          {
            "text": "ボタンが取れていたから",
            "explanation": "Buttons are never mentioned; the problem is an oil stain."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]はいつジャケットを受[う]け取[と]りますか。",
        "questionTranslation": "When will the man receive the jacket?",
        "options": [
          {
            "text": "今日の夜",
            "explanation": "The re-cleaning cannot be done the same day."
          },
          {
            "text": "金曜日の夕方六時まで",
            "explanation": "Correct. The clerk rushes the plant so it will be ready by 6 p.m. Friday, in time for his trip."
          },
          {
            "text": "土曜日",
            "explanation": "Saturday is the normal schedule, which was too late for his Friday-night need."
          },
          {
            "text": "来週の月曜日",
            "explanation": "Monday is never mentioned as an option."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-toshokan-card-saihakkou",
    "level": "N3",
    "title": "図書館[としょかん]カードの再発行[さいはっこう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、図書館[としょかん]のカードをなくしてしまったんですが、新[あたら]しいのを作[つく]ってもらえますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "再発行[さいはっこう]ですね。ご住所[じゅうしょ]が確認[かくにん]できるものをお持[も]ちですか。運転免許証[うんてんめんきょしょう]や保険証[ほけんしょう]などです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "免許証[めんきょしょう]は持[も]っていないんですが、保険証[ほけんしょう]ならあります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "保険証[ほけんしょう]に今[いま]のご住所[じゅうしょ]が書[か]いてあれば大丈夫[だいじょうぶ]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、書[か]いてあります。あの、お金[かね]はかかりますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "再発行[さいはっこう]の手数料[てすうりょう]として百円[ひゃくえん]いただいています。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "分[わ]かりました。カードはすぐできますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、五分[ごふん]ほどでお作[つく]りします。ただ、なくしたカードが見[み]つかっても、もう使[つか]えなくなりますので、ご注意[ちゅうい]ください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "分[わ]かりました。あ、それから、前[まえ]のカードで借[か]りていた本[ほん]は、新[あたら]しいカードで返[かえ]せますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、記録[きろく]は全部[ぜんぶ]新[あたら]しいカードに移[うつ]りますので、そのままご返却[へんきゃく]いただけます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "よかった。じゃあ、お願[ねが]いします。"
      }
    ],
    "translation": "A woman at the library asks for a new card because she lost hers. For reissue she needs something confirming her address, such as a driver's license or health insurance card; she has no license but her insurance card shows her current address, which is fine. The reissue fee is 100 yen and the card takes about five minutes to make. The staff member warns that the lost card will no longer work even if found. Her borrowing records all transfer to the new card, so she can return the books she borrowed on the old card as usual.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]をしに図書館[としょかん]へ来[き]ましたか。",
        "questionTranslation": "What did the woman come to the library to do?",
        "options": [
          {
            "text": "本を借りに来た",
            "explanation": "Borrowing books is not her purpose today; she needs a new card."
          },
          {
            "text": "カードを再発行してもらいに来た",
            "explanation": "Correct. She lost her library card and asks for a new one to be made."
          },
          {
            "text": "本を返しに来た",
            "explanation": "She asks whether she can return books with the new card, but that is not why she came."
          },
          {
            "text": "住所の変更をしに来た",
            "explanation": "Her address hasn't changed; the insurance card shows her current address."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "再発行[さいはっこう]に何[なに]が必要[ひつよう]ですか。",
        "questionTranslation": "What is needed for the reissue?",
        "options": [
          {
            "text": "運転免許証だけ",
            "explanation": "A license is one example, but she doesn't have one — her insurance card works instead."
          },
          {
            "text": "住所が確認できるものと手数料百円",
            "explanation": "Correct. She needs proof of address (her insurance card qualifies) and a 100-yen fee."
          },
          {
            "text": "写真とサイン",
            "explanation": "Photos and signatures are never mentioned."
          },
          {
            "text": "なくした前のカード",
            "explanation": "The old card is lost — that's the whole reason for the reissue; it isn't required."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-sumaho-gamen-shuuri",
    "level": "N3",
    "title": "スマホの画面[がめん]の修理[しゅうり]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、スマホを落[お]として、画面[がめん]が割[わ]れてしまったんですが、直[なお]りますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "拝見[はいけん]します。はい、画面[がめん]の交換[こうかん]で直[なお]りますよ。この機種[きしゅ]ですと一万二千円[いちまんにせんえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "一万二千円[いちまんにせんえん]ですか。分[わ]かりました、お願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "それから、バッテリーもだいぶ古[ふる]くなっていますね。一緒[いっしょ]に交換[こうかん]されると、プラス八千円[はっせんえん]ですが、いかがですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、バッテリーはまだ大丈夫[だいじょうぶ]なので、今回[こんかい]は画面[がめん]だけでお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "かしこまりました。お店[みせ]でお待[ま]ちいただく場合[ばあい]は二時間[にじかん]ほどでできます。郵送[ゆうそう]での修理[しゅうり]ですと一週間[いっしゅうかん]ほどかかりますが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "今日中[きょうじゅう]に使[つか]いたいので、待[ま]ちます。近[ちか]くで買[か]い物[もの]でもしてきます。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。それから、修理[しゅうり]の前[まえ]にデータのバックアップをおすすめしていますが、お済[す]みですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、昨日[きのう]パソコンにとってあります。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "では、お預[あず]かりします。二時間後[にじかんご]、四時[よじ]ごろにお戻[もど]りください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "分[わ]かりました。よろしくお願[ねが]いします。"
      }
    ],
    "translation": "A man dropped his smartphone and cracked the screen. The clerk says a screen replacement will fix it for 12,000 yen on his model. The clerk also notes the battery is quite old and offers to replace it for an extra 8,000 yen, but the man declines — the battery is still fine, so screen only. In-store repair takes about two hours; mail-in repair takes about a week. Since he wants the phone back today, he chooses to wait and will go shopping nearby in the meantime. Asked about backing up his data before the repair, he says he backed it up to his computer yesterday. He should return around 4 o'clock, two hours later.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を修理[しゅうり]してもらいますか。",
        "questionTranslation": "What will the man have repaired?",
        "options": [
          {
            "text": "画面だけ",
            "explanation": "Correct. He declines the battery offer and asks for the screen only (「今回は画面だけでお願いします」)."
          },
          {
            "text": "バッテリーだけ",
            "explanation": "The battery replacement was offered but he said the battery is still fine."
          },
          {
            "text": "画面とバッテリーの両方",
            "explanation": "He rejected the additional 8,000-yen battery replacement."
          },
          {
            "text": "カメラ",
            "explanation": "The camera is never mentioned; the damage is a cracked screen."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "修理代[しゅうりだい]はいくらですか。",
        "questionTranslation": "How much does the repair cost?",
        "options": [
          {
            "text": "8,000円",
            "explanation": "8,000 yen is the extra cost of the battery replacement, which he declined."
          },
          {
            "text": "12,000円",
            "explanation": "Correct. The screen replacement on his model costs 12,000 yen, and that's all he gets."
          },
          {
            "text": "20,000円",
            "explanation": "That would be screen plus battery, but he only has the screen replaced."
          },
          {
            "text": "無料",
            "explanation": "The repair is not free; the price 12,000 yen is clearly stated."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]は待[ま]っている間[あいだ]、何[なに]をしますか。",
        "questionTranslation": "What will the man do while he waits?",
        "options": [
          {
            "text": "店の中で待つ",
            "explanation": "He waits for the repair but not inside the shop — he goes out."
          },
          {
            "text": "近くで買い物をする",
            "explanation": "Correct. He says 「近くで買い物でもしてきます」and will return around 4 o'clock."
          },
          {
            "text": "家に帰る",
            "explanation": "He does not go home; he stays nearby to pick the phone up in two hours."
          },
          {
            "text": "パソコンでバックアップをとる",
            "explanation": "The backup was already done yesterday, before coming to the shop."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-hikkoshi-mitsumori",
    "level": "N3",
    "title": "引[ひ]っ越[こ]しの見積[みつ]もり",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、引[ひ]っ越[こ]しをお願[ねが]いしたくて、お電話[でんわ]しました。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ありがとうございます。お引[ひ]っ越[こ]しはいつごろのご予定[よてい]ですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "三月[さんがつ]の終[お]わりの土曜日[どようび]、二十八日[にじゅうはちにち]を考[かんが]えています。市内[しない]で、一人分[ひとりぶん]の荷物[にもつ]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "三月[さんがつ]の終[お]わりは一年[いちねん]で一番[いちばん]混[こ]む時期[じき]でして、土曜日[どようび]ですと五万五千円[ごまんごせんえん]ほどになります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "五万五千円[ごまんごせんえん]ですか。思[おも]ったより高[たか]いですね…。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "平日[へいじつ]でしたらお安[やす]くなりますよ。たとえば二十六日[にじゅうろくにち]の木曜日[もくようび]なら四万円[よんまんえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "一万五千円[いちまんごせんえん]も違[ちが]うんですか。木曜日[もくようび]なら休[やす]みが取[と]れると思[おも]うので、そちらでお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "かしこまりました。正確[せいかく]なお見積[みつ]もりのために、一度[いちど]お宅[たく]に伺[うかが]って、荷物[にもつ]の量[りょう]を見[み]せていただきたいのですが。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "分[わ]かりました。今週[こんしゅう]の水曜日[すいようび]の夜[よる]なら家[いえ]にいます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "では、水曜日[すいようび]の七時[しちじ]ごろに伺[うかが]います。よろしくお願[ねが]いいたします。"
      }
    ],
    "translation": "A woman calls a moving company. She is planning to move within the city on Saturday, March 28, with one person's worth of belongings. The agent explains that late March is the busiest season of the year: Saturday would cost about 55,000 yen, more than she expected. A weekday is cheaper — Thursday the 26th would be 40,000 yen, a 15,000-yen difference. She can take that day off, so she chooses Thursday. For an accurate estimate, the company wants to visit her home to see the amount of luggage; she is home Wednesday evening this week, so the agent will come around 7 o'clock on Wednesday.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はいつ引[ひ]っ越[こ]しますか。",
        "questionTranslation": "When will the woman move?",
        "options": [
          {
            "text": "三月二十六日の木曜日",
            "explanation": "Correct. She switches to Thursday the 26th because it is 15,000 yen cheaper and she can take the day off."
          },
          {
            "text": "三月二十八日の土曜日",
            "explanation": "That was her first plan, but Saturday costs 55,000 yen, so she gave it up."
          },
          {
            "text": "四月の初め",
            "explanation": "Early April is never discussed as a moving date."
          },
          {
            "text": "今週の水曜日",
            "explanation": "Wednesday is when the company visits her home for the estimate, not the moving day."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "今週[こんしゅう]の水曜日[すいようび]に何[なに]がありますか。",
        "questionTranslation": "What happens this Wednesday?",
        "options": [
          {
            "text": "引っ越しをする",
            "explanation": "The move is on Thursday, March 26, not this Wednesday."
          },
          {
            "text": "見積もりのために会社の人が家に来る",
            "explanation": "Correct. The agent visits around 7 p.m. Wednesday to see the luggage and give an exact estimate."
          },
          {
            "text": "荷物を会社に送る",
            "explanation": "Sending luggage to the company is never mentioned."
          },
          {
            "text": "契約書にサインする",
            "explanation": "Signing a contract is never mentioned; Wednesday is for the estimate visit."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:c-rusuden-tokei-shuuri",
    "level": "N3",
    "title": "時計店[とけいてん]からの留守番電話[るすばんでんわ]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "こちらは駅前[えきまえ]の山川時計店[やまかわとけいてん]です。お預[あず]かりしておりました腕時計[うでどけい]の修理[しゅうり]が終[お]わりましたので、ご連絡[れんらく]いたしました。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "時計[とけい]が止[と]まっていた原因[げんいん]は電池[でんち]ではなく、中[なか]の部品[ぶひん]が古[ふる]くなっていたためでした。そのため、部品[ぶひん]の交換[こうかん]をいたしまして、料金[りょうきん]は初[はじ]めにお伝[つた]えした三千円[さんぜんえん]ではなく、四千五百円[よんせんごひゃくえん]になります。申[もう]し訳[わけ]ございません。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "お受[う]け取[と]りは明日[あした]から可能[かのう]です。営業時間[えいぎょうじかん]は午前[ごぜん]十時[じゅうじ]から午後[ごご]七時[しちじ]までです。なお、水曜日[すいようび]は定休日[ていきゅうび]ですので、ご注意[ちゅうい]ください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "お受[う]け取[と]りの際[さい]は、お渡[わた]しした預[あず]かり証[しょう]をお持[も]ちください。お支払[しはら]いは現金[げんきん]のほか、カードもご利用[りよう]いただけます。ご来店[らいてん]をお待[ま]ちしております。"
      }
    ],
    "translation": "A voicemail from Yamakawa Watch Shop in front of the station: the wristwatch left for repair is finished. The watch had stopped not because of the battery but because an internal part had worn out, so the part was replaced, and the price is 4,500 yen instead of the initially quoted 3,000 yen — they apologize. Pickup is possible from tomorrow; business hours are 10 a.m. to 7 p.m., and the shop is closed on Wednesdays. When picking up, bring the claim ticket; payment can be made in cash or by card.",
    "questions": [
      {
        "question": "何[なん]の連絡[れんらく]ですか。",
        "questionTranslation": "What is this message about?",
        "options": [
          {
            "text": "時計の修理が終わったこと",
            "explanation": "Correct. The shop says the repair of the wristwatch is finished (「修理が終わりましたので、ご連絡いたしました」)."
          },
          {
            "text": "修理ができないと分かったこと",
            "explanation": "The repair was possible and is already done."
          },
          {
            "text": "店が長い休みに入ること",
            "explanation": "Only the regular Wednesday closing day is mentioned, not a long holiday."
          },
          {
            "text": "時計をなくしてしまったこと",
            "explanation": "The watch is safe at the shop, waiting to be picked up."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "料金[りょうきん]はいくらになりましたか。",
        "questionTranslation": "How much did the repair end up costing?",
        "options": [
          {
            "text": "3,000円",
            "explanation": "3,000 yen was the original quote, before the worn part was found."
          },
          {
            "text": "4,500円",
            "explanation": "Correct. Because an internal part had to be replaced, the price rose to 4,500 yen."
          },
          {
            "text": "7,500円",
            "explanation": "That would be the two amounts added together; the final price is 4,500 yen."
          },
          {
            "text": "無料",
            "explanation": "It is not free; the message apologizes for the price being higher than quoted."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "受[う]け取[と]りの時[とき]、何[なに]を持[も]って行[い]かなければなりませんか。",
        "questionTranslation": "What must be brought at pickup?",
        "options": [
          {
            "text": "預かり証",
            "explanation": "Correct. The message says to bring the claim ticket the shop handed over (「預かり証をお持ちください」)."
          },
          {
            "text": "保険証",
            "explanation": "A health insurance card is never mentioned."
          },
          {
            "text": "新しい電池",
            "explanation": "The battery was not the problem, and the customer need not bring one."
          },
          {
            "text": "保証書",
            "explanation": "A warranty card is never mentioned in the message."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:c-depaato-onaoshi-announce",
    "level": "N3",
    "title": "お直[なお]しコーナーのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "ご来店[らいてん]のお客様[きゃくさま]にお知[し]らせいたします。五階[ごかい]、洋服[ようふく]のお直[なお]しコーナーは、売[う]り場[ば]の改装[かいそう]のため、来週[らいしゅう]の月曜日[げつようび]から三階[さんがい]に移[うつ]ります。"
      },
      {
        "speaker": "アナウンス",
        "text": "本日[ほんじつ]のお直[なお]しの受[う]け付[つ]けは、引[ひ]っ越[こ]しの準備[じゅんび]のため、いつもより二時間[にじかん]早[はや]い午後[ごご]五時[ごじ]までとさせていただきます。明日[あした]から日曜日[にちようび]までは、受[う]け付[つ]けをお休[やす]みいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "仕上[しあ]がった品物[しなもの]のお受[う]け取[と]りは、日曜日[にちようび]までは今[いま]までどおり五階[ごかい]で承[うけたまわ]ります。来週[らいしゅう]の月曜日[げつようび]からは、受[う]け付[つ]けもお受[う]け取[と]りも、すべて三階[さんがい]の新[あたら]しいコーナーになります。"
      },
      {
        "speaker": "アナウンス",
        "text": "場所[ばしょ]は、三階[さんがい]のエレベーターを出[で]てすぐ右側[みぎがわ]です。お客様[きゃくさま]にはご不便[ふべん]をおかけいたしますが、どうぞよろしくお願[ねが]いいたします。"
      }
    ],
    "translation": "A department store announcement: the clothing alteration corner on the fifth floor will move to the third floor starting next Monday because of floor renovations. Today, to prepare for the move, alteration requests are accepted only until 5 p.m., two hours earlier than usual. From tomorrow through Sunday, no new requests will be accepted. Finished items can be picked up on the fifth floor as before until Sunday; from next Monday, both requests and pickups will all be handled at the new corner on the third floor, immediately to the right as you exit the elevator. The store apologizes for the inconvenience.",
    "questions": [
      {
        "question": "今日[きょう]、お直[なお]しの受[う]け付[つ]けは何時[なんじ]までですか。",
        "questionTranslation": "Until what time are alteration requests accepted today?",
        "options": [
          {
            "text": "午後三時まで",
            "explanation": "The announcement says until 5 p.m., not 3 p.m."
          },
          {
            "text": "午後五時まで",
            "explanation": "Correct. Today closes two hours earlier than usual, at 5 p.m., to prepare for the move."
          },
          {
            "text": "午後七時まで",
            "explanation": "7 p.m. is the usual closing time; today it is two hours earlier."
          },
          {
            "text": "今日は受け付けていない",
            "explanation": "Requests are accepted today until 5 p.m.; it is from tomorrow that they stop."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "来週[らいしゅう]の月曜日[げつようび]から、お直[なお]しコーナーはどこになりますか。",
        "questionTranslation": "From next Monday, where will the alteration corner be?",
        "options": [
          {
            "text": "五階の同じ場所",
            "explanation": "The fifth-floor location is only used for pickups until Sunday; then it moves."
          },
          {
            "text": "三階のエレベーターを出て右側",
            "explanation": "Correct. From Monday everything moves to the third floor, just right of the elevator."
          },
          {
            "text": "三階のエレベーターを出て左側",
            "explanation": "The announcement says to the right of the elevator, not the left."
          },
          {
            "text": "一階の入り口の近く",
            "explanation": "The first floor is never mentioned; the new corner is on the third floor."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:d-group-happyou-buntan",
    "level": "N3",
    "title": "発表[はっぴょう]の分担[ぶんたん]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "来週[らいしゅう]の発表[はっぴょう]の準備[じゅんび]、そろそろ始[はじ]めない?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうだね。まず、資料[しりょう]を集[あつ]める人[ひと]と、スライドを作[つく]る人[ひと]を決[き]めよう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "私[わたし]、スライドを作[つく]るのは得意[とくい]だから、やろうか?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "助[たす]かるよ。じゃあ、僕[ぼく]が図書館[としょかん]で資料[しりょう]を集[あつ]めるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、でも、みんなに配[くば]る資料[しりょう]も要[い]るよね。誰[だれ]が作[つく]る?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それは佐藤[さとう]さんに頼[たの]もうと思[おも]ったんだけど、今週[こんしゅう]は忙[いそが]しいって言[い]ってた。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、私[わたし]がスライドと一緒[いっしょ]に作[つく]ろうか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いや、それは大変[たいへん]だから、配[くば]る資料[しりょう]は僕[ぼく]がやるよ。スライドができてからのほうが作[つく]りやすいし。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ありがとう。じゃあ、発表[はっぴょう]の練習[れんしゅう]はいつする?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "金曜日[きんようび]はどう?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "金曜日[きんようび]は授業[じゅぎょう]が五時[ごじ]まであるから、木曜日[もくようび]がいいな。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかった。じゃあ、木曜日[もくようび]の午後[ごご]、教室[きょうしつ]でね。まず僕[ぼく]は今日[きょう]、図書館[としょかん]に行[い]ってくる。"
      }
    ],
    "translation": "W: Shouldn't we start getting ready for next week's presentation? M: Yeah. First let's decide who gathers the materials and who makes the slides. W: I'm good at making slides, so shall I do that? M: That helps. Then I'll collect materials at the library. W: Oh, but we also need handouts to give everyone. Who makes those? M: I was going to ask Sato, but he said he's busy this week. W: Then shall I make them together with the slides? M: No, that's too much — I'll do the handouts. They're easier to make once the slides are done anyway. W: Thanks. So when do we practice the presentation? M: How about Friday? W: On Friday I have class until five, so Thursday would be better. M: Got it. Thursday afternoon in the classroom, then. First, I'll go to the library today.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "スライドを作る",
            "explanation": "Making the slides is the woman's job — she said she is good at it and offered to do it."
          },
          {
            "text": "図書館で資料を集める",
            "explanation": "Correct. At the end he says 「まず僕は今日、図書館に行ってくる」 — he will go to the library today to gather materials."
          },
          {
            "text": "配る資料を作る",
            "explanation": "He will make the handouts, but he said they are easier to make after the slides are done, so it is not his first task."
          },
          {
            "text": "佐藤さんに頼みに行く",
            "explanation": "Asking Sato was rejected — he already said Sato is busy this week."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]はいつ発表[はっぴょう]の練習[れんしゅう]をしますか。",
        "questionTranslation": "When will the two of them practice the presentation?",
        "options": [
          {
            "text": "金曜日の午後",
            "explanation": "Friday was proposed by the man but rejected because the woman has class until five that day."
          },
          {
            "text": "木曜日の午前",
            "explanation": "They agreed on Thursday afternoon (木曜日の午後), not the morning."
          },
          {
            "text": "木曜日の午後",
            "explanation": "Correct. The man says 「じゃあ、木曜日の午後、教室でね」 after the woman said Thursday works for her."
          },
          {
            "text": "金曜日の五時",
            "explanation": "Five o'clock is when the woman's Friday class ends — it is the reason Friday was rejected, not the practice time."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:d-zemi-erabi-soudan",
    "level": "N3",
    "title": "ゼミ選[えら]びの相談[そうだん]",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、今[いま]、ちょっとよろしいですか。来年[らいねん]のゼミのことで相談[そうだん]したいんですが。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいですよ。どのゼミにするか、迷[まよ]っているんですか。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい。環境[かんきょう]のゼミと観光[かんこう]のゼミ、どちらにするか決[き]められなくて。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "そうですか。将来[しょうらい]はどんな仕事[しごと]がしたいんですか。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "旅行[りょこう]の会社[かいしゃ]で働[はたら]きたいと思[おも]っています。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "それなら、観光[かんこう]のゼミのほうが役[やく]に立[た]つでしょうね。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "でも、観光[かんこう]のゼミは毎週[まいしゅう]発表[はっぴょう]があると聞[き]いて、少[すこ]し心配[しんぱい]なんです。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "確[たし]かに大変[たいへん]ですが、発表[はっぴょう]の練習[れんしゅう]は就職[しゅうしょく]してからも必[かなら]ず役[やく]に立[た]ちますよ。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "そうですね。じゃあ、観光[かんこう]のゼミにします。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "申込書[もうしこみしょ]は金曜日[きんようび]までに事務室[じむしつ]に出[だ]してくださいね。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。今日[きょう]、事務室[じむしつ]へもらいに行[い]きます。ありがとうございました。"
      }
    ],
    "translation": "Student: Professor, do you have a moment? I'd like to ask your advice about next year's seminar. Teacher: Sure. Are you unsure which seminar to take? Student: Yes. I can't decide between the environment seminar and the tourism seminar. Teacher: I see. What kind of work do you want to do in the future? Student: I want to work at a travel company. Teacher: In that case, the tourism seminar would be more useful. Student: But I heard the tourism seminar has presentations every week, so I'm a little worried. Teacher: It certainly is demanding, but presentation practice will definitely help you even after you start working. Student: That's true. Then I'll take the tourism seminar. Teacher: Please submit the application form to the office by Friday. Student: Understood. I'll go to the office to get one today. Thank you very much.",
    "questions": [
      {
        "question": "学生[がくせい]はどのゼミに入[はい]ることにしましたか。",
        "questionTranslation": "Which seminar did the student decide to join?",
        "options": [
          {
            "text": "環境のゼミ",
            "explanation": "The environment seminar was one of the two choices, but the student did not pick it."
          },
          {
            "text": "観光のゼミ",
            "explanation": "Correct. After the teacher's advice, the student says 「じゃあ、観光のゼミにします」."
          },
          {
            "text": "両方のゼミ",
            "explanation": "The student was choosing between the two, not planning to take both."
          },
          {
            "text": "まだ決めていない",
            "explanation": "The student does decide during the conversation — the tourism seminar."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "学生[がくせい]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the student do first after this?",
        "options": [
          {
            "text": "発表の練習をする",
            "explanation": "Weekly presentations are part of the seminar next year, not something to do now."
          },
          {
            "text": "申込書を先生に出す",
            "explanation": "The form goes to the office (事務室), not to the teacher, and first the student has to get one."
          },
          {
            "text": "事務室へ申込書をもらいに行く",
            "explanation": "Correct. The student says 「今日、事務室へもらいに行きます」 — going today to pick up the application form."
          },
          {
            "text": "旅行会社を調べる",
            "explanation": "Working at a travel company is the student's future goal; nothing was said about researching companies now."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "学生[がくせい]はどうして観光[かんこう]のゼミに決[き]めましたか。",
        "questionTranslation": "Why did the student decide on the tourism seminar?",
        "options": [
          {
            "text": "発表の練習が毎週あるから",
            "explanation": "The weekly presentations were actually the thing the student was worried about, not the reason for choosing it."
          },
          {
            "text": "環境に興味がなくなったから",
            "explanation": "The student never says they lost interest in the environment seminar."
          },
          {
            "text": "将来、旅行の会社で働きたいから",
            "explanation": "Correct. The student wants to work at a travel company, and the teacher says the tourism seminar would be more useful for that."
          },
          {
            "text": "申込書が簡単に出せるから",
            "explanation": "The application procedure is the same for any seminar and was not a reason."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:d-baito-shift-koukan",
    "level": "N3",
    "title": "アルバイトのシフト交換[こうかん]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "田中[たなか]さん、ちょっとお願[ねが]いがあるんだけど。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "何[なに]?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "今度[こんど]の土曜日[どようび]の夜[よる]のシフト、代[か]わってもらえないかな。田舎[いなか]から母[はは]が来[く]ることになって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "土曜日[どようび]の夜[よる]か。その日[ひ]は友達[ともだち]と映画[えいが]に行[い]く約束[やくそく]があるんだ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうか。じゃあ、日曜日[にちようび]の昼[ひる]はどう?私[わたし]が代[か]わりに田中[たなか]さんの月曜日[げつようび]に入[はい]るから。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ごめん、日曜日[にちようび]は一日中[いちにちじゅう]レポートを書[か]かなきゃいけなくて。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うーん、困[こま]ったな。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あ、でも土曜日[どようび]の昼[ひる]なら大丈夫[だいじょうぶ]だよ。映画[えいが]は夜[よる]七時[しちじ]からだから。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "本当[ほんとう]?でも、母[はは]が着[つ]くのは夕方[ゆうがた]だから、昼[ひる]は私[わたし]も入[はい]れるんだ。代[か]わってほしいのは夜[よる]なんだよね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか…。じゃあ、山田[やまだ]さんに聞[き]いてみたら?先週[せんしゅう]、シフトを増[ふ]やしたいって言[い]ってたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、そうなんだ。じゃあ、山田[やまだ]さんに連絡[れんらく]してみる。だめだったら店長[てんちょう]に相談[そうだん]するよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん、それがいいよ。"
      }
    ],
    "translation": "W: Tanaka, can I ask you a favor? M: What is it? W: Could you take my shift this Saturday night? My mother is coming from my hometown. M: Saturday night? That day I've promised to go to a movie with a friend. W: I see. Then how about Sunday afternoon? I'd take your Monday shift in exchange. M: Sorry, on Sunday I have to write a report all day. W: Hmm, that's a problem. M: Oh, but Saturday afternoon would be fine — the movie is from seven at night. W: Really? But my mother arrives in the evening, so I can work the afternoon myself. It's the night shift I need covered. M: I see... Then why don't you ask Yamada? Last week she said she wanted more shifts. W: Oh, really? Then I'll contact Yamada. If that doesn't work, I'll talk to the manager. M: Yeah, that's a good idea.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the woman do first after this?",
        "options": [
          {
            "text": "店長に相談する",
            "explanation": "She will only talk to the manager if Yamada cannot help — 「だめだったら店長に相談するよ」."
          },
          {
            "text": "母を駅に迎えに行く",
            "explanation": "Her mother arrives Saturday evening; nothing was said about picking her up now."
          },
          {
            "text": "山田さんに連絡する",
            "explanation": "Correct. She says 「じゃあ、山田さんに連絡してみる」 after hearing Yamada wants more shifts."
          },
          {
            "text": "田中さんの月曜日のシフトに入る",
            "explanation": "That was part of her Sunday-swap proposal, which Tanaka turned down because of his report."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "男[おとこ]の人[ひと]はどうして土曜日[どようび]の夜[よる]のシフトに入[はい]れませんか。",
        "questionTranslation": "Why can't the man take the Saturday night shift?",
        "options": [
          {
            "text": "レポートを書かなければならないから",
            "explanation": "The report is why he cannot work Sunday, not Saturday night."
          },
          {
            "text": "友達と映画を見に行く約束があるから",
            "explanation": "Correct. He says he has promised to see a movie with a friend, which starts at seven that night."
          },
          {
            "text": "お母さんが来るから",
            "explanation": "It is the woman's mother who is coming, not his."
          },
          {
            "text": "アルバイトを増やしたくないから",
            "explanation": "Wanting more shifts was mentioned about Yamada; the man never says he doesn't want extra work."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:d-bunkasai-junbi-buntan",
    "level": "N3",
    "title": "文化祭[ぶんかさい]の準備[じゅんび]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "文化祭[ぶんかさい]まであと一週間[いっしゅうかん]だね。喫茶店[きっさてん]の準備[じゅんび]、何[なに]から始[はじ]める?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "まず、ポスターと看板[かんばん]と、材料[ざいりょう]の買[か]い物[もの]が残[のこ]ってるよね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "僕[ぼく]、絵[え]が好[す]きだから、看板[かんばん]を描[か]こうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うん、お願[ねが]い。ポスターは美術部[びじゅつぶ]の中村[なかむら]さんが作[つく]ってくれるって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "よかった。じゃあ、買[か]い物[もの]は?今日[きょう]、帰[かえ]りにスーパーに寄[よ]ろうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "待[ま]って。何[なに]をいくつ買[か]うか、まだ決[き]まってないよ。先[さき]にみんなで数[かず]を決[き]めないと。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうだね。じゃあ、明日[あした]の放課後[ほうかご]、クラスで決[き]めてから買[か]いに行[い]こう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うん。あ、教室[きょうしつ]の飾[かざ]りはどうする?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それは文化祭[ぶんかさい]の前[まえ]の日[ひ]に、みんなでやればいいよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうだね。じゃあ、私[わたし]は今日[きょう]、中村[なかむら]さんにポスターのことをもう一度[いちど]お願[ねが]いしてくる。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん。僕[ぼく]は看板[かんばん]に使[つか]う板[いた]を先生[せんせい]に借[か]りてくるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかった。じゃあ、また明日[あした]。"
      }
    ],
    "translation": "M: Only one week until the culture festival. Where should we start with the cafe preparations? W: What's left is the poster, the sign, and shopping for ingredients. M: I like drawing, so shall I paint the sign? W: Yes, please. Nakamura from the art club says she'll make the poster. M: Great. Then what about the shopping? Shall we stop by the supermarket on the way home today? W: Wait — we haven't decided what to buy or how much. We need to decide the amounts with everyone first. M: True. Then let's decide with the class tomorrow after school and go buy things after that. W: OK. Oh, what about decorating the classroom? M: We can all do that the day before the festival. W: Right. Then today I'll go ask Nakamura about the poster once more. M: OK. I'll go borrow the board for the sign from the teacher. W: Got it. See you tomorrow.",
    "questions": [
      {
        "question": "二人[ふたり]はいつ買[か]い物[もの]に行[い]きますか。",
        "questionTranslation": "When will they go shopping?",
        "options": [
          {
            "text": "今日の学校の帰り",
            "explanation": "The man suggested stopping by the supermarket today, but the woman rejected it because the quantities aren't decided yet."
          },
          {
            "text": "明日の放課後",
            "explanation": "Correct. The man says 「明日の放課後、クラスで決めてから買いに行こう」 — decide with the class, then shop."
          },
          {
            "text": "文化祭の前の日",
            "explanation": "The day before the festival is when everyone will decorate the classroom, not go shopping."
          },
          {
            "text": "文化祭の朝",
            "explanation": "Nothing was planned for the morning of the festival."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "看板の絵を描く",
            "explanation": "He will paint the sign eventually, but first he needs the board — he said he'd go borrow it."
          },
          {
            "text": "スーパーで買い物をする",
            "explanation": "Shopping was postponed to tomorrow after the class decides the quantities."
          },
          {
            "text": "先生に板を借りに行く",
            "explanation": "Correct. He says 「僕は看板に使う板を先生に借りてくるよ」 — borrowing the board for the sign from the teacher."
          },
          {
            "text": "ポスターを作る",
            "explanation": "The poster is being made by Nakamura of the art club; the woman will go talk to her."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:d-kangeikai-junbi",
    "level": "N3",
    "title": "歓迎会[かんげいかい]の準備[じゅんび]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "新[あたら]しく入[はい]ったリンさんの歓迎会[かんげいかい]、今度[こんど]の金曜日[きんようび]でいいかな。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あ、リンさん、金曜日[きんようび]は日本語[にほんご]の学校[がっこう]があるって言[い]ってたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうなんだ。じゃあ、来週[らいしゅう]の水曜日[すいようび]は?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "水曜日[すいようび]なら、みんな大丈夫[だいじょうぶ]だと思[おも]う。課長[かちょう]にも聞[き]いておくよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "お願[ねが]い。お店[みせ]はどうする?駅前[えきまえ]のイタリア料理[りょうり]の店[みせ]はどう?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あそこ、人気[にんき]があるから、水曜日[すいようび]でも予約[よやく]が取[と]れないかもしれないよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、会社[かいしゃ]の近[ちか]くの居酒屋[いざかや]は?個室[こしつ]もあるし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいね。じゃあ、予約[よやく]は僕[ぼく]がしておくよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ありがとう。会費[かいひ]は一人[ひとり]三千円[さんぜんえん]でいいかな。集[あつ]めるのは私[わたし]がやる。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん。あ、プレゼントはどうする?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "花[はな]でいいんじゃない?当日[とうじつ]、私[わたし]が買[か]ってくるよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかった。じゃあ、僕[ぼく]はまず課長[かちょう]の予定[よてい]を確認[かくにん]してから、お店[みせ]に電話[でんわ]するね。"
      }
    ],
    "translation": "W: For new employee Lin's welcome party, is this Friday OK? M: Ah, Lin said she has Japanese school on Fridays. W: I see. Then how about next Wednesday? M: Wednesday should work for everyone, I think. I'll check with the section chief too. W: Please do. What about the restaurant? How about the Italian place in front of the station? M: That place is popular, so we might not get a reservation even on a Wednesday. W: Then how about the izakaya near the office? It has a private room too. M: Sounds good. I'll make the reservation. W: Thanks. Is 3,000 yen each OK for the fee? I'll collect the money. M: Sure. Oh, what about a present? W: Flowers should be fine, right? I'll buy them on the day. M: Got it. Then I'll first check the section chief's schedule, and then call the restaurant.",
    "questions": [
      {
        "question": "歓迎会[かんげいかい]はいつになりましたか。",
        "questionTranslation": "When will the welcome party be?",
        "options": [
          {
            "text": "今度の金曜日",
            "explanation": "Friday was rejected because Lin has Japanese school that day."
          },
          {
            "text": "今週の水曜日",
            "explanation": "The Wednesday they chose is next week's, not this week's."
          },
          {
            "text": "来週の水曜日",
            "explanation": "Correct. The woman proposes 「来週の水曜日は?」 and the man says everyone should be free then."
          },
          {
            "text": "来週の金曜日",
            "explanation": "Fridays don't work for Lin at all because of her Japanese school."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "居酒屋を予約する",
            "explanation": "He will reserve the izakaya, but only after confirming the section chief's schedule — 「まず課長の予定を確認してから、お店に電話するね」."
          },
          {
            "text": "課長の予定を確認する",
            "explanation": "Correct. He says he will first check the section chief's schedule, then call the restaurant."
          },
          {
            "text": "会費を集める",
            "explanation": "Collecting the 3,000-yen fee is the woman's job."
          },
          {
            "text": "花を買いに行く",
            "explanation": "The woman will buy the flowers, and on the day of the party, not now."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうしてイタリア料理[りょうり]の店[みせ]にしませんでしたか。",
        "questionTranslation": "Why didn't they choose the Italian restaurant?",
        "options": [
          {
            "text": "予約が取れないかもしれないから",
            "explanation": "Correct. The man says the place is popular and they might not get a reservation even on a Wednesday."
          },
          {
            "text": "値段が高いから",
            "explanation": "Price was never mentioned in the conversation."
          },
          {
            "text": "会社から遠いから",
            "explanation": "Distance was not the reason; the izakaya being near the office was just a plus."
          },
          {
            "text": "リンさんがイタリア料理が嫌いだから",
            "explanation": "Nothing was said about Lin's food preferences."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:d-kaigi-shiryou-junbi",
    "level": "N3",
    "title": "会議[かいぎ]の準備[じゅんび]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "山下[やました]さん、明日[あした]の会議[かいぎ]の準備[じゅんび]、お願[ねが]いできる?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。資料[しりょう]のコピーは二十部[にじゅうぶ]でよかったですよね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、それが、営業部[えいぎょうぶ]から五人[ごにん]参加[さんか]することになったから、二十五部[にじゅうごぶ]にしてくれる?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。二十五部[にじゅうごぶ]ですね。場所[ばしょ]は第一会議室[だいいちかいぎしつ]ですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それがね、第一会議室[だいいちかいぎしつ]は午前中[ごぜんちゅう]、他[ほか]の部[ぶ]が使[つか]うことになって。第二会議室[だいにかいぎしつ]に変[か]わったの。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。じゃあ、みなさんにメールで知[し]らせておきます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それはもう私[わたし]がしたから大丈夫[だいじょうぶ]。それより、第二会議室[だいにかいぎしつ]のパソコンとスクリーンが動[うご]くかどうか、確認[かくにん]しておいてくれる?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。今日中[きょうじゅう]に見[み]ておきます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あと、お茶[ちゃ]の用意[ようい]もお願[ねが]い。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "何時[なんじ]までに準備[じゅんび]すればいいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "会議[かいぎ]は十時[じゅうじ]からだから、九時半[くじはん]までにお願[ねが]いね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。じゃあ、まず会議室[かいぎしつ]の機械[きかい]を確認[かくにん]してきます。"
      }
    ],
    "translation": "W: Yamashita, can I ask you to prepare for tomorrow's meeting? M: Yes. Twenty copies of the materials was right, wasn't it? W: Actually, five people from the sales department are now attending, so could you make it twenty-five? M: Understood, twenty-five. Is the place Meeting Room 1? W: About that — another department is using Meeting Room 1 in the morning, so it's changed to Meeting Room 2. M: Got it. Then I'll let everyone know by email. W: I've already done that, so it's fine. Instead, could you check whether the computer and screen in Meeting Room 2 work? M: Yes, I'll check them today. W: Also, please prepare the tea. M: By what time should things be ready? W: The meeting starts at ten, so by nine thirty, please. M: Understood. Then I'll go check the equipment in the meeting room first.",
    "questions": [
      {
        "question": "資料[しりょう]のコピーは何部[なんぶ]用意[ようい]しますか。",
        "questionTranslation": "How many copies of the materials will be prepared?",
        "options": [
          {
            "text": "二十部",
            "explanation": "Twenty was the original number before the sales department's five people were added."
          },
          {
            "text": "二十五部",
            "explanation": "Correct. Five more attendees from sales were added, so the woman asks for twenty-five copies."
          },
          {
            "text": "三十部",
            "explanation": "Thirty was never mentioned; the new total is twenty-five."
          },
          {
            "text": "五部",
            "explanation": "Five is the number of extra attendees from sales, not the number of copies."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "資料をコピーする",
            "explanation": "Copying is one of his tasks, but his last line says he will check the equipment first."
          },
          {
            "text": "みんなにメールを送る",
            "explanation": "He offered to email everyone, but the woman said she had already done it."
          },
          {
            "text": "お茶を用意する",
            "explanation": "The tea needs to be ready by 9:30 tomorrow, before the meeting — not right now."
          },
          {
            "text": "会議室のパソコンとスクリーンを確認する",
            "explanation": "Correct. He says 「まず会議室の機械を確認してきます」 — checking the computer and screen in Meeting Room 2 first."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "どうして会議[かいぎ]の場所[ばしょ]が変[か]わりましたか。",
        "questionTranslation": "Why did the meeting location change?",
        "options": [
          {
            "text": "参加する人が増えたから",
            "explanation": "More attendees is why the number of copies increased, not why the room changed."
          },
          {
            "text": "第一会議室を他の部が使うから",
            "explanation": "Correct. The woman says another department will use Meeting Room 1 in the morning, so it changed to Meeting Room 2."
          },
          {
            "text": "第二会議室のほうが広いから",
            "explanation": "Nothing was said about the size of the rooms."
          },
          {
            "text": "パソコンが壊れたから",
            "explanation": "The computer isn't broken — the man is simply asked to confirm the equipment works."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:d-gasshuku-bus-kime",
    "level": "N3",
    "title": "合宿[がっしゅく]の行[い]き方[かた]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ゼミの合宿[がっしゅく]、行[い]き方[かた]を決[き]めないとね。電車[でんしゃ]とバス、どっちがいいかな。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "電車[でんしゃ]だと、駅[えき]から宿[やど]まで歩[ある]いて三十分[さんじゅっぷん]もかかるんだよね。荷物[にもつ]もあるし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか。じゃあ、バスを借[か]りるのはどう?十五人[じゅうごにん]いれば、一人[ひとり]三千円[さんぜんえん]ぐらいで借[か]りられるらしいよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "電車[でんしゃ]だといくら?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "宿[やど]までのバス代[だい]も入[い]れると、三千五百円[さんぜんごひゃくえん]ぐらいかな。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、借[か]りるバスのほうが安[やす]いし、楽[らく]だね。参加[さんか]する人[ひと]は今[いま]、何人[なんにん]?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "十三人[じゅうさんにん]。あと二人[ふたり]、返事[へんじ]を待[ま]ってるところ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "十五人[じゅうごにん]集[あつ]まらなかったら、どうする?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "十三人[じゅうさんにん]でも一人[ひとり]三千五百円[さんぜんごひゃくえん]ぐらいだから、電車[でんしゃ]と同[おな]じだよ。それなら楽[らく]なバスのほうがいいと思[おも]う。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうだね。じゃあ、バスに決[き]めよう。予約[よやく]はどうする?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "僕[ぼく]が今日[きょう]、バス会社[がいしゃ]に電話[でんわ]するよ。そのかわり、返事[へんじ]がまだの二人[ふたり]に聞[き]いてもらえる?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかった。今晩[こんばん]、連絡[れんらく]してみる。"
      }
    ],
    "translation": "M: We need to decide how to get to the seminar retreat. Train or bus, which is better? W: With the train, it's a thirty-minute walk from the station to the lodge, right? And we'll have luggage. M: True. Then how about renting a bus? Apparently with fifteen people it's about 3,000 yen per person. W: How much is the train? M: Including the bus fare to the lodge, about 3,500 yen. W: Then the rented bus is cheaper and easier. How many people are joining so far? M: Thirteen. We're waiting on replies from two more. W: What if we don't get fifteen? M: Even with thirteen it's about 3,500 yen each — same as the train. In that case the bus is still more comfortable, so I think it's better. W: Right. Then let's decide on the bus. What about the reservation? M: I'll call the bus company today. In exchange, could you ask the two who haven't replied? W: OK. I'll contact them tonight.",
    "questions": [
      {
        "question": "二人[ふたり]はどうやって合宿[がっしゅく]に行[い]くことにしましたか。",
        "questionTranslation": "How did they decide to travel to the retreat?",
        "options": [
          {
            "text": "電車で行く",
            "explanation": "The train was rejected — a thirty-minute walk from the station with luggage, and no cheaper."
          },
          {
            "text": "借りたバスで行く",
            "explanation": "Correct. They agree the rented bus is cheaper and easier, and the woman says 「じゃあ、バスに決めよう」."
          },
          {
            "text": "電車とバスで行く",
            "explanation": "The train-plus-local-bus option (3,500 yen) was the alternative they decided against."
          },
          {
            "text": "まだ決めていない",
            "explanation": "They do decide during the conversation — the rented bus, whatever the final headcount."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]はこのあと何[なに]をしますか。",
        "questionTranslation": "What will the woman do after this?",
        "options": [
          {
            "text": "バス会社に電話する",
            "explanation": "Calling the bus company is the man's task — he said he'd do it today."
          },
          {
            "text": "宿を予約する",
            "explanation": "The lodge reservation was never discussed as a task here."
          },
          {
            "text": "返事をしていない二人に連絡する",
            "explanation": "Correct. The man asks her to check with the two who haven't replied, and she says she'll contact them tonight."
          },
          {
            "text": "お金を集める",
            "explanation": "Collecting money was not mentioned in the conversation."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:d-sempai-happyou-soudan",
    "level": "N3",
    "title": "発表[はっぴょう]のアドバイス",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "先輩[せんぱい]、ちょっと相談[そうだん]してもいいですか。来週[らいしゅう]、ゼミで初[はじ]めて発表[はっぴょう]するんですが、緊張[きんちょう]してしまって…。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ああ、最初[さいしょ]はみんな緊張[きんちょう]するよ。原稿[げんこう]はもう書[か]いたの?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。全部[ぜんぶ]覚[おぼ]えようと思[おも]っています。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、全部[ぜんぶ]覚[おぼ]えるのはやめたほうがいいよ。忘[わす]れたとき、頭[あたま]が真[ま]っ白[しろ]になるから。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、原稿[げんこう]を読[よ]みながら発表[はっぴょう]してもいいでしょうか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ずっと下[した]を向[む]いて読[よ]むのもよくないなあ。大事[だいじ]な言葉[ことば]だけを小[ちい]さいカードに書[か]いて、それを見[み]ながら話[はな]すといいよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "なるほど。カードですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それから、時間[じかん]を計[はか]りながら、声[こえ]に出[だ]して何回[なんかい]も練習[れんしゅう]すること。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。やってみます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "よかったら、木曜日[もくようび]の夕方[ゆうがた]、練習[れんしゅう]を聞[き]いてあげるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "本当[ほんとう]ですか。ありがとうございます。じゃあ、それまでにカードを作[つく]って練習[れんしゅう]しておきます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん、がんばって。"
      }
    ],
    "translation": "W: Sempai, may I ask your advice? Next week I'm giving my first presentation in the seminar, and I'm so nervous... M: Ah, everyone is nervous the first time. Have you written the script? W: Yes. I'm planning to memorize all of it. M: Hmm, you'd better not memorize the whole thing. If you forget, your mind will go blank. W: Then is it OK to read the script during the presentation? M: Reading with your face down the whole time isn't good either. Write only the important words on small cards and speak while glancing at them. W: I see — cards. M: Also, practice out loud many times while timing yourself. W: Understood. I'll try that. M: If you like, I'll listen to your practice on Thursday evening. W: Really? Thank you. Then I'll make the cards and practice before then. M: Good luck.",
    "questions": [
      {
        "question": "先輩[せんぱい]は、発表[はっぴょう]のとき、どうするといいと言[い]っていますか。",
        "questionTranslation": "What does the sempai say she should do during the presentation?",
        "options": [
          {
            "text": "原稿を全部覚えて話す",
            "explanation": "He explicitly advises against memorizing everything — your mind goes blank if you forget."
          },
          {
            "text": "原稿を読みながら話す",
            "explanation": "He says reading with your face down the whole time is also not good."
          },
          {
            "text": "大事な言葉を書いたカードを見ながら話す",
            "explanation": "Correct. He says to write only the important words on small cards and speak while looking at them."
          },
          {
            "text": "何も準備しないで話す",
            "explanation": "He never suggests speaking without preparation — he even tells her to practice many times."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "女[おんな]の人[ひと]は木曜日[もくようび]までに何[なに]をしますか。",
        "questionTranslation": "What will the woman do before Thursday?",
        "options": [
          {
            "text": "カードを作って発表の練習をする",
            "explanation": "Correct. She says 「それまでにカードを作って練習しておきます」 before the sempai listens on Thursday evening."
          },
          {
            "text": "原稿を書く",
            "explanation": "The script is already written — she said so at the start."
          },
          {
            "text": "ゼミで発表をする",
            "explanation": "The presentation itself is next week, after Thursday's practice."
          },
          {
            "text": "先輩の発表を聞きに行く",
            "explanation": "It's the other way around — the sempai will listen to her practice."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:d-setsumeikai-tantou",
    "level": "N3",
    "title": "説明会[せつめいかい]の担当[たんとう]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "明後日[あさって]の会社説明会[かいしゃせつめいかい]の担当[たんとう]、決[き]めておこうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですね。受付[うけつけ]と、会場[かいじょう]の案内[あんない]と、あとは資料[しりょう]の準備[じゅんび]ですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "資料[しりょう]はもう印刷[いんさつ]してあるよね?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。でも、参加者[さんかしゃ]の名簿[めいぼ]がまだです。申[もう]し込[こ]みが今日[きょう]の五時[ごじ]までなので、明日[あした]の朝[あさ]、印刷[いんさつ]します。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかった。じゃあ、当日[とうじつ]の受付[うけつけ]は誰[だれ]がやる?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "私[わたし]がやります。説明会[せつめいかい]は一時[いちじ]からですよね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん。受付[うけつけ]は十二時半[じゅうにじはん]から始[はじ]めよう。僕[ぼく]は午前中[ごぜんちゅう]に会場[かいじょう]の椅子[いす]と机[つくえ]を並[なら]べておくよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "お願[ねが]いします。案内[あんない]は誰[だれ]に頼[たの]みますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "新人[しんじん]の木村[きむら]さんに頼[たの]もうと思[おも]ったんだけど、その日[ひ]は研修[けんしゅう]で出[で]られないんだって。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、鈴木[すずき]さんはどうですか。去年[きょねん]も案内[あんない]をしてくれましたし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうだね。じゃあ、僕[ぼく]から鈴木[すずき]さんに頼[たの]んでおくよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "お願[ねが]いします。じゃあ、私[わたし]は名簿[めいぼ]の準備[じゅんび]を忘[わす]れないようにします。"
      }
    ],
    "translation": "M: Shall we decide who's in charge of what for the company information session the day after tomorrow? W: Yes. There's the reception desk, guiding people around the venue, and preparing the materials. M: The materials are already printed, right? W: Yes. But the participant list isn't done yet. Applications close at five today, so I'll print it tomorrow morning. M: Got it. Then who does the reception on the day? W: I'll do it. The session starts at one, right? M: Yes. Let's open reception at twelve thirty. I'll set up the chairs and desks in the venue during the morning. W: Please do. Who should we ask to do the guiding? M: I was going to ask Kimura, the new hire, but apparently he can't come that day because of training. W: Then how about Suzuki? She did the guiding last year too. M: Right. I'll ask Suzuki, then. W: Please. And I'll make sure not to forget preparing the list.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は明日[あした]の朝[あさ]、何[なに]をしますか。",
        "questionTranslation": "What will the woman do tomorrow morning?",
        "options": [
          {
            "text": "資料を印刷する",
            "explanation": "The session materials are already printed — she confirmed that."
          },
          {
            "text": "参加者の名簿を印刷する",
            "explanation": "Correct. Applications close at five today, so she will print the participant list tomorrow morning."
          },
          {
            "text": "椅子と机を並べる",
            "explanation": "Setting up chairs and desks is the man's job, on the morning of the session."
          },
          {
            "text": "受付を始める",
            "explanation": "Reception starts at twelve thirty on the day of the session, not tomorrow morning."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "会場[かいじょう]の案内[あんない]は誰[だれ]がしますか。",
        "questionTranslation": "Who will guide people around the venue?",
        "options": [
          {
            "text": "女の人",
            "explanation": "The woman is doing the reception desk."
          },
          {
            "text": "男の人",
            "explanation": "The man is setting up the venue in the morning and will ask Suzuki about guiding."
          },
          {
            "text": "木村さん",
            "explanation": "Kimura was the first idea, but he can't come because of new-hire training that day."
          },
          {
            "text": "鈴木さん",
            "explanation": "Correct. They agree to ask Suzuki, who also did the guiding last year."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "受付[うけつけ]は何時[なんじ]から始[はじ]めますか。",
        "questionTranslation": "What time will reception open?",
        "options": [
          {
            "text": "十二時",
            "explanation": "Twelve o'clock was not mentioned — reception opens at twelve thirty."
          },
          {
            "text": "十二時半",
            "explanation": "Correct. The man says 「受付は十二時半から始めよう」, half an hour before the one o'clock start."
          },
          {
            "text": "一時",
            "explanation": "One o'clock is when the information session itself starts."
          },
          {
            "text": "一時半",
            "explanation": "One thirty was never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:d-open-campus-tetsudai",
    "level": "N3",
    "title": "オープンキャンパスの手伝[てつだ]い",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "学生[がくせい]のみなさんにお知[し]らせします。今度[こんど]の土曜日[どようび]のオープンキャンパスを手伝[てつだ]ってくれるみなさんは、明日[あした]の昼休[ひるやす]み、十二時二十分[じゅうにじにじゅっぷん]に、三階[さんがい]の会議室[かいぎしつ]に集[あつ]まってください。説明会[せつめいかい]では、当日[とうじつ]の仕事[しごと]の分担[ぶんたん]を決[き]めます。仕事[しごと]は、受付[うけつけ]、キャンパスの案内[あんない]、教室[きょうしつ]の準備[じゅんび]の三[みっ]つです。希望[きぼう]する仕事[しごと]がある人[ひと]は、説明会[せつめいかい]のときに言[い]ってください。なお、土曜日[どようび]の朝[あさ]は、九時[くじ]までに正門[せいもん]の前[まえ]に集[あつ]まってください。昼[ひる]ご飯[はん]はこちらで用意[ようい]します。飲[の]み物[もの]は各自[かくじ]で持[も]ってきてください。都合[つごう]が悪[わる]くなった人[ひと]は、今日中[きょうじゅう]に学生課[がくせいか]の田中[たなか]まで連絡[れんらく]してください。よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Attention, students. Everyone helping with this Saturday's open campus, please gather tomorrow at lunchtime, at 12:20, in the third-floor meeting room. At the briefing we will decide who does which job on the day. There are three jobs: reception, campus guiding, and classroom preparation. If there is a job you would like to do, please say so at the briefing. Also, on Saturday morning, please assemble in front of the main gate by nine o'clock. Lunch will be provided by us. Please bring your own drinks. Anyone who can no longer make it should contact Tanaka at the student affairs office by the end of today. Thank you.",
    "questions": [
      {
        "question": "説明会[せつめいかい]はいつ、どこでありますか。",
        "questionTranslation": "When and where is the briefing?",
        "options": [
          {
            "text": "明日の昼休みに三階の会議室で",
            "explanation": "Correct. The announcement says to gather tomorrow at lunchtime, 12:20, in the third-floor meeting room."
          },
          {
            "text": "今日の昼休みに学生課で",
            "explanation": "The student affairs office is only where you contact Tanaka if you can no longer help."
          },
          {
            "text": "土曜日の朝に正門の前で",
            "explanation": "The main gate at nine on Saturday is the assembly point for the open campus itself, not the briefing."
          },
          {
            "text": "明日の朝九時に会議室で",
            "explanation": "The briefing is at 12:20 during lunch break; nine o'clock is Saturday's assembly time."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "土曜日[どようび]、学生[がくせい]は何[なに]を持[も]っていかなければなりませんか。",
        "questionTranslation": "What must the students bring on Saturday?",
        "options": [
          {
            "text": "昼ご飯",
            "explanation": "Lunch will be provided by the school — 「昼ご飯はこちらで用意します」."
          },
          {
            "text": "飲み物",
            "explanation": "Correct. The announcement says 「飲み物は各自で持ってきてください」 — bring your own drinks."
          },
          {
            "text": "名札",
            "explanation": "Name tags were not mentioned in the announcement."
          },
          {
            "text": "何も持っていかなくてもいい",
            "explanation": "They do need to bring something — their own drinks."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "都合[つごう]が悪[わる]くなった人[ひと]はどうしますか。",
        "questionTranslation": "What should people do if they can no longer help?",
        "options": [
          {
            "text": "今日中に学生課の田中さんに連絡する",
            "explanation": "Correct. The announcement says to contact Tanaka at the student affairs office by the end of today."
          },
          {
            "text": "明日の説明会で言う",
            "explanation": "The briefing is where you state your preferred job, not where you cancel."
          },
          {
            "text": "土曜日の朝、正門で伝える",
            "explanation": "The main gate on Saturday is the assembly point; cancellations must be made by today."
          },
          {
            "text": "会議室にメモを置いておく",
            "explanation": "Leaving a note was never mentioned — they must contact Tanaka directly."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:d-rusuden-shuugou-henkou",
    "level": "N3",
    "title": "集合時間[しゅうごうじかん]の変更[へんこう]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "もしもし、営業部[えいぎょうぶ]の高橋[たかはし]です。明日[あした]の商品説明会[しょうひんせつめいかい]の準備[じゅんび]のことで連絡[れんらく]しました。集合[しゅうごう]は九時[くじ]と言[い]いましたが、会場[かいじょう]の確認[かくにん]をしたいので、三十分[さんじゅっぷん]早[はや]めて八時半[はちじはん]にお願[ねが]いします。場所[ばしょ]は変[か]わらず、駅前[えきまえ]のホールの入口[いりぐち]です。それから、プロジェクターは会場[かいじょう]のものが使[つか]えることになったので、持[も]ってこなくて大丈夫[だいじょうぶ]です。そのかわり、パソコンとパンフレットをお願[ねが]いします。パンフレットは五十部[ごじゅうぶ]、事務所[じむしょ]の棚[たな]の上[うえ]の箱[はこ]に入[はい]っています。もし箱[はこ]が見[み]つからなかったら、今日中[きょうじゅう]に私[わたし]の携帯[けいたい]に電話[でんわ]をください。では、明日[あした]、よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Hello, this is Takahashi from the sales department. I'm calling about the preparations for tomorrow's product information session. I said we would meet at nine, but I want to check the venue, so please come thirty minutes earlier, at eight thirty. The place is unchanged: the entrance of the hall in front of the station. Also, it turns out we can use the venue's projector, so you don't need to bring one. Instead, please bring the laptop and the pamphlets. There are fifty pamphlets in the box on top of the shelf in the office. If you can't find the box, please call my mobile phone by the end of today. Well then, see you tomorrow.",
    "questions": [
      {
        "question": "明日[あした]、何時[なんじ]にどこに集[あつ]まりますか。",
        "questionTranslation": "What time and where do they meet tomorrow?",
        "options": [
          {
            "text": "九時に駅前のホールの入口",
            "explanation": "Nine o'clock was the original time; it was moved thirty minutes earlier."
          },
          {
            "text": "八時半に駅前のホールの入口",
            "explanation": "Correct. The meeting time was moved up to eight thirty to check the venue; the place is still the hall entrance in front of the station."
          },
          {
            "text": "八時半に事務所",
            "explanation": "The office is only where the pamphlet box is — the meeting point is the hall entrance."
          },
          {
            "text": "九時に駅の改札",
            "explanation": "Neither the time nor the place matches — it's eight thirty at the hall entrance."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "明日[あした]、何[なに]を持[も]っていきますか。",
        "questionTranslation": "What should be brought tomorrow?",
        "options": [
          {
            "text": "プロジェクターとパソコン",
            "explanation": "The projector is no longer needed because the venue's can be used."
          },
          {
            "text": "パンフレットだけ",
            "explanation": "The laptop is also needed, not just the pamphlets."
          },
          {
            "text": "パソコンとパンフレット",
            "explanation": "Correct. Takahashi says 「そのかわり、パソコンとパンフレットをお願いします」 — fifty pamphlets from the box in the office."
          },
          {
            "text": "プロジェクターとパンフレット",
            "explanation": "The projector was explicitly cancelled; the laptop is what's needed instead."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:d-benkyoukai-basho-kime",
    "level": "N3",
    "title": "勉強会[べんきょうかい]の場所[ばしょ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "レポートの相談[そうだん]、みんなでいつ集[あつ]まる?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "火曜日[かようび]はどう?授業[じゅぎょう]が三時[さんじ]に終[お]わるから。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "私[わたし]は火曜日[かようび]、四時[よじ]までアルバイトの研修[けんしゅう]があるんだ。水曜日[すいようび]なら大丈夫[だいじょうぶ]。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、水曜日[すいようび]にしよう。場所[ばしょ]はどこにする?図書館[としょかん]のグループ学習室[がくしゅうしつ]は?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "さっき見[み]たら、水曜日[すいようび]はもう全部[ぜんぶ]予約[よやく]が入[はい]ってた。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか。じゃあ、食堂[しょくどう]は?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "食堂[しょくどう]は人[ひと]が多[おお]くて、うるさいよ。パソコンも使[つか]いにくいし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それなら、空[あ]いている教室[きょうしつ]を借[か]りるのはどう?先生[せんせい]に頼[たの]めば、使[つか]わせてくれるって聞[き]いたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいね。誰[だれ]が頼[たの]む?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "僕[ぼく]が明日[あした]の授業[じゅぎょう]のあとで、先生[せんせい]に聞[き]いてみるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ありがとう。じゃあ、私[わたし]はほかの二人[ふたり]に水曜日[すいようび]の予定[よてい]を聞[き]いておくね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん、お願[ねが]い。"
      }
    ],
    "translation": "W: When should we all get together to discuss the report? M: How about Tuesday? Class ends at three. W: On Tuesday I have part-time job training until four. Wednesday works for me. M: Then let's make it Wednesday. Where should we meet? How about the group study room in the library? W: I checked earlier — Wednesday is already fully booked. M: I see. Then the cafeteria? W: The cafeteria is crowded and noisy. And it's hard to use laptops there. M: In that case, how about borrowing an empty classroom? I heard that if you ask a teacher, they'll let you use one. W: Good idea. Who asks? M: I'll ask the teacher after class tomorrow. W: Thanks. Then I'll check the other two people's Wednesday plans. M: Great, please do.",
    "questions": [
      {
        "question": "二人[ふたり]はどこで集[あつ]まることにしましたか。",
        "questionTranslation": "Where did they decide to meet?",
        "options": [
          {
            "text": "図書館のグループ学習室",
            "explanation": "The study room was already fully booked for Wednesday."
          },
          {
            "text": "食堂",
            "explanation": "The cafeteria was rejected as crowded, noisy, and bad for laptops."
          },
          {
            "text": "空いている教室",
            "explanation": "Correct. They agree to borrow an empty classroom, which the man will arrange with the teacher."
          },
          {
            "text": "女の人の家",
            "explanation": "Meeting at someone's home was never suggested."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "女[おんな]の人[ひと]はどうして火曜日[かようび]に集[あつ]まれませんか。",
        "questionTranslation": "Why can't the woman meet on Tuesday?",
        "options": [
          {
            "text": "授業が四時まであるから",
            "explanation": "It's the man whose class ends at three; her conflict is job training, not class."
          },
          {
            "text": "アルバイトの研修が四時まであるから",
            "explanation": "Correct. She says she has part-time job training until four on Tuesday."
          },
          {
            "text": "図書館の予約があるから",
            "explanation": "The library booking issue was about the study room being full on Wednesday."
          },
          {
            "text": "先生と会う約束があるから",
            "explanation": "Meeting the teacher is the man's plan for tomorrow, not her Tuesday conflict."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]は明日[あした]、何[なに]をしますか。",
        "questionTranslation": "What will the man do tomorrow?",
        "options": [
          {
            "text": "先生に教室を使えるか聞く",
            "explanation": "Correct. He says he'll ask the teacher after class tomorrow whether they can use an empty classroom."
          },
          {
            "text": "グループ学習室を予約する",
            "explanation": "The study room is already fully booked for Wednesday, so there's nothing to reserve."
          },
          {
            "text": "ほかの二人に予定を聞く",
            "explanation": "Checking the other two people's plans is the woman's task."
          },
          {
            "text": "レポートを書き始める",
            "explanation": "Writing the report was not assigned — they are meeting Wednesday to discuss it."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:d-kyuuka-mae-hikitsugi",
    "level": "N3",
    "title": "休[やす]みの前[まえ]の引[ひ]き継[つ]ぎ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "佐藤[さとう]さん、来週[らいしゅう]、休[やす]みをもらうことになったので、仕事[しごと]のお願[ねが]いをしてもいいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。旅行[りょこう]でしたっけ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、五日間[いつかかん]、実家[じっか]に帰[かえ]ります。まず、お客様[きゃくさま]からのメールなんですが、返事[へんじ]をお願[ねが]いできますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。急[いそ]ぎのものだけでいいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。急[いそ]がないものは、戻[もど]ってから私[わたし]が返事[へんじ]します。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "木曜日[もくようび]の会議[かいぎ]はどうしますか。僕[ぼく]が代[か]わりに出[で]ましょうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それは課長[かちょう]が出[で]てくださることになったので、大丈夫[だいじょうぶ]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。ほかには?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "火曜日[かようび]に新[あたら]しい商品[しょうひん]の見本[みほん]が届[とど]きます。届[とど]いたら、私[わたし]の机[つくえ]の横[よこ]の棚[たな]に入[い]れておいてもらえますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "机[つくえ]の横[よこ]の棚[たな]ですね。わかりました。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "何[なに]か困[こま]ったことがあったら、携帯[けいたい]にメッセージを送[おく]ってください。電話[でんわ]には出[で]られないかもしれないので。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。ゆっくり休[やす]んでください。"
      }
    ],
    "translation": "W: Sato, I'm taking time off next week, so may I ask you to cover some work? M: Sure. It was a trip, right? W: Yes, I'm going back to my parents' home for five days. First, about emails from customers — could you reply to them? M: OK. Just the urgent ones? W: Yes. I'll answer the non-urgent ones myself when I'm back. M: What about Thursday's meeting? Shall I attend in your place? W: The section chief has kindly agreed to attend, so that's covered. M: Understood. Anything else? W: Samples of the new product will arrive on Tuesday. When they arrive, could you put them on the shelf next to my desk? M: The shelf next to your desk. Got it. W: If anything comes up, please send a message to my mobile. I may not be able to answer calls. M: Understood. Have a good rest.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は、メールにどう返事[へんじ]しますか。",
        "questionTranslation": "How will the man handle the email replies?",
        "options": [
          {
            "text": "全部のメールに返事をする",
            "explanation": "Only the urgent ones — the woman will answer the non-urgent ones after she returns."
          },
          {
            "text": "急ぎのメールにだけ返事をする",
            "explanation": "Correct. He asks 「急ぎのものだけでいいですか」 and she confirms she'll handle the rest when back."
          },
          {
            "text": "返事をしないで待つ",
            "explanation": "He was asked to reply to urgent customer emails, not to wait."
          },
          {
            "text": "課長に返事を頼む",
            "explanation": "The section chief is covering the meeting, not the emails."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "木曜日[もくようび]の会議[かいぎ]には誰[だれ]が出[で]ますか。",
        "questionTranslation": "Who will attend Thursday's meeting?",
        "options": [
          {
            "text": "女の人",
            "explanation": "The woman will be away at her parents' home for five days."
          },
          {
            "text": "男の人",
            "explanation": "He offered to attend in her place, but she said the section chief is going."
          },
          {
            "text": "課長",
            "explanation": "Correct. She says 「課長が出てくださることになった」 — the section chief will attend."
          },
          {
            "text": "誰も出ない",
            "explanation": "Someone is attending — the section chief."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "困[こま]ったことがあったら、男[おとこ]の人[ひと]はどうしますか。",
        "questionTranslation": "What should the man do if a problem comes up?",
        "options": [
          {
            "text": "携帯にメッセージを送る",
            "explanation": "Correct. She asks him to message her mobile because she may not be able to answer calls."
          },
          {
            "text": "携帯に電話をかける",
            "explanation": "She specifically said she might not be able to answer the phone, so a message is preferred."
          },
          {
            "text": "会社のメールを送る",
            "explanation": "She asked for a message to her mobile, not a company email."
          },
          {
            "text": "実家に電話する",
            "explanation": "Calling her parents' home was never suggested."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:d-shinjin-kenshuu-junbi",
    "level": "N3",
    "title": "新人研修[しんじんけんしゅう]の準備[じゅんび]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "来週[らいしゅう]の月曜日[げつようび]の新人研修[しんじんけんしゅう]、準備[じゅんび]を確認[かくにん]しよう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。テキストの印刷[いんさつ]と、名札[なふだ]の準備[じゅんび]と、会場[かいじょう]の準備[じゅんび]ですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "テキストは何部[なんぶ]印刷[いんさつ]する?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "新人[しんじん]が二十人[にじゅうにん]と、教[おし]える人[ひと]が四人[よにん]なので、少[すこ]し多[おお]めに三十部[さんじゅうぶ]印刷[いんさつ]します。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん、それでいい。でも、部長[ぶちょう]がまだテキストを直[なお]しているから、印刷[いんさつ]は最後[さいご]のデータをもらってからにして。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いつもらえますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "金曜日[きんようび]の朝[あさ]には送[おく]るって言[い]ってたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。じゃあ、金曜日[きんようび]の午後[ごご]に印刷[いんさつ]します。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "名札[なふだ]は僕[ぼく]が今日[きょう]、作[つく]っておくよ。会場[かいじょう]の机[つくえ]は、四人[よにん]ずつのグループにしたいんだけど。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "研修[けんしゅう]は月曜日[げつようび]の何時[なんじ]からですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "十時[じゅうじ]から。でも、部屋[へや]は前[まえ]の日[ひ]が休[やす]みで使[つか]えないから、当日[とうじつ]の朝[あさ]、二人[ふたり]で九時[くじ]に来[き]て準備[じゅんび]しよう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。九時[くじ]ですね。"
      }
    ],
    "translation": "M: Let's check the preparations for Monday's new employee training. W: Yes. Printing the textbook, preparing the name tags, and setting up the room. M: How many copies of the textbook will you print? W: Twenty new employees plus four instructors, so I'll print a few extra — thirty copies. M: Fine. But the department head is still revising the textbook, so print only after you get the final file. W: When can I get it? M: He said he'd send it by Friday morning. W: Understood. Then I'll print on Friday afternoon. M: I'll make the name tags today. For the room, I want the desks in groups of four. W: What time does the training start on Monday? M: At ten. But the room can't be used the day before because it's a holiday, so let's both come at nine on the morning of the day and set up. W: Got it. Nine o'clock.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はいつテキストを印刷[いんさつ]しますか。",
        "questionTranslation": "When will the woman print the textbook?",
        "options": [
          {
            "text": "今日",
            "explanation": "Today is when the man makes the name tags; printing must wait for the final file."
          },
          {
            "text": "金曜日の朝",
            "explanation": "Friday morning is when the department head sends the final file, not when she prints."
          },
          {
            "text": "金曜日の午後",
            "explanation": "Correct. She says 「金曜日の午後に印刷します」, after receiving the final data on Friday morning."
          },
          {
            "text": "月曜日の朝",
            "explanation": "Monday morning at nine is for setting up the room, not printing."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうしてすぐに印刷[いんさつ]しませんか。",
        "questionTranslation": "Why doesn't she print right away?",
        "options": [
          {
            "text": "部長がまだテキストを直しているから",
            "explanation": "Correct. The man says the department head is still revising the textbook, so printing must wait for the final data."
          },
          {
            "text": "印刷する数が決まっていないから",
            "explanation": "The number is decided — thirty copies."
          },
          {
            "text": "プリンターが使えないから",
            "explanation": "Nothing was said about the printer being unavailable."
          },
          {
            "text": "新人の人数がわからないから",
            "explanation": "The headcount is known: twenty new employees and four instructors."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "月曜日[げつようび]、二人[ふたり]は何時[なんじ]に会場[かいじょう]に行[い]きますか。",
        "questionTranslation": "What time will the two of them go to the room on Monday?",
        "options": [
          {
            "text": "八時",
            "explanation": "Eight o'clock was never mentioned."
          },
          {
            "text": "九時",
            "explanation": "Correct. The room can't be used the day before, so they'll come at nine on the morning of the training to set up."
          },
          {
            "text": "九時半",
            "explanation": "Nine thirty was never mentioned — they meet at nine."
          },
          {
            "text": "十時",
            "explanation": "Ten o'clock is when the training itself starts."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:d-shiken-mae-shift-soudan",
    "level": "N3",
    "title": "試験前[しけんまえ]のシフトの相談[そうだん]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "店長[てんちょう]、ちょっとご相談[そうだん]したいことがあるんですが。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "どうしたの?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "実[じつ]は、再来週[さらいしゅう]から大学[だいがく]の試験[しけん]が始[はじ]まるので、来週[らいしゅう]と再来週[さらいしゅう]のシフトを減[へ]らしていただけないでしょうか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか、試験[しけん]か。今[いま]は週[しゅう]に三回[さんかい]入[はい]ってもらってるよね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。試験[しけん]が終[お]わるまで、週[しゅう]に一回[いっかい]にしていただきたいんです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、来週[らいしゅう]は水曜日[すいようび]に新[あたら]しい商品[しょうひん]が入[はい]るから、人[ひと]が足[た]りないんだよね。週[しゅう]に二回[にかい]じゃだめかな。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "二回[にかい]ですか…。あの、土日[どにち]は勉強[べんきょう]に使[つか]いたいので、平日[へいじつ]の夜[よる]なら二回[にかい]でも大丈夫[だいじょうぶ]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかった。じゃあ、来週[らいしゅう]は水曜日[すいようび]と金曜日[きんようび]の夜[よる]でどう?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、それでお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そのかわり、試験[しけん]が終[お]わったら、また週[しゅう]三回[さんかい]お願[ねが]いね。夏休[なつやす]みは忙[いそが]しくなるから。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、もちろんです。ありがとうございます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "試験[しけん]、がんばってね。"
      }
    ],
    "translation": "W: Manager, there's something I'd like to talk to you about. M: What is it? W: Actually, my university exams start the week after next, so could you reduce my shifts for next week and the week after? M: Ah, exams. Right now you work three times a week, right? W: Yes. Until the exams are over, I'd like to work once a week. M: Hmm, next week new products arrive on Wednesday, so we're short-staffed. Would twice a week work? W: Twice... Well, I want to keep weekends for studying, so if it's weekday evenings, twice is fine. M: Got it. Then for next week, how about Wednesday and Friday evenings? W: Yes, that works, please. M: In exchange, once your exams are over, please go back to three times a week. Summer vacation gets busy. W: Yes, of course. Thank you. M: Good luck with your exams.",
    "questions": [
      {
        "question": "来週[らいしゅう]、女[おんな]の人[ひと]は週[しゅう]に何回[なんかい]シフトに入[はい]りますか。",
        "questionTranslation": "How many shifts a week will the woman work next week?",
        "options": [
          {
            "text": "週に一回",
            "explanation": "Once a week was her request, but the manager said they're short-staffed and asked for twice."
          },
          {
            "text": "週に二回",
            "explanation": "Correct. They settle on twice a week — Wednesday and Friday evenings."
          },
          {
            "text": "週に三回",
            "explanation": "Three times is her normal schedule, which she'll resume after the exams."
          },
          {
            "text": "一回も入らない",
            "explanation": "She never asked for zero shifts — she asked for a reduction."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]はどうしてシフトを減[へ]らしたいのですか。",
        "questionTranslation": "Why does the woman want to reduce her shifts?",
        "options": [
          {
            "text": "大学の試験が始まるから",
            "explanation": "Correct. She says her university exams start the week after next, so she wants fewer shifts until they're over."
          },
          {
            "text": "新しい商品の仕事が大変だから",
            "explanation": "The new products arriving Wednesday are the manager's reason for needing staff, not her reason."
          },
          {
            "text": "夏休みに旅行に行くから",
            "explanation": "Summer vacation was mentioned by the manager as the busy season, not as her travel plan."
          },
          {
            "text": "体の調子が悪いから",
            "explanation": "Her health was never mentioned."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "来週[らいしゅう]、女[おんな]の人[ひと]はいつ働[はたら]きますか。",
        "questionTranslation": "When will the woman work next week?",
        "options": [
          {
            "text": "土曜日と日曜日",
            "explanation": "She wants to keep weekends for studying, so weekend shifts were ruled out."
          },
          {
            "text": "水曜日と金曜日の昼",
            "explanation": "The days are right but she agreed to evenings, since she can only do weekday nights."
          },
          {
            "text": "水曜日と金曜日の夜",
            "explanation": "Correct. The manager proposes 「水曜日と金曜日の夜でどう?」 and she accepts."
          },
          {
            "text": "月曜日と水曜日の夜",
            "explanation": "Monday was never proposed — the agreed days are Wednesday and Friday."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:e-toshokan-kyuukan-oshirase",
    "level": "N3",
    "title": "図書館[としょかん]の休館[きゅうかん]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "ご利用[りよう]の皆様[みなさま]にお知[し]らせいたします。中央[ちゅうおう]図書館[としょかん]は、コンピューターシステムの入[い]れ替[か]えのため、来週[らいしゅう]の火曜日[かようび]から金曜日[きんようび]まで休館[きゅうかん]いたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "土曜日[どようび]からは、いつもどおり午前[ごぜん]9時[くじ]に開館[かいかん]いたします。なお、毎週[まいしゅう]月曜日[げつようび]はもともと休館日[きゅうかんび]ですので、ご注意[ちゅうい]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "休館中[きゅうかんちゅう]も、本[ほん]は入口[いりぐち]の横[よこ]にある返却[へんきゃく]ポストにお返[かえ]しいただけます。"
      },
      {
        "speaker": "アナウンス",
        "text": "ただし、CDとDVDは壊[こわ]れやすいので、ポストには入[い]れないでください。図書館[としょかん]が開[あ]いてから、カウンターまでお持[も]ちください。"
      },
      {
        "speaker": "アナウンス",
        "text": "また、休館中[きゅうかんちゅう]に返却日[へんきゃくび]になる本[ほん]は、返却日[へんきゃくび]を一週間[いっしゅうかん]延[の]ばします。特別[とくべつ]な手続[てつづ]きは必要[ひつよう]ありません。"
      },
      {
        "speaker": "アナウンス",
        "text": "ご迷惑[めいわく]をおかけしますが、ご協力[きょうりょく]をお願[ねが]いいたします。"
      }
    ],
    "translation": "Attention, library users. The Central Library will be closed from Tuesday through Friday of next week to replace its computer system. From Saturday we will open as usual at 9 a.m. Please note that the library is regularly closed every Monday. While we are closed, books can still be returned via the return box next to the entrance. However, please do not put CDs or DVDs in the box, as they break easily; please bring them to the counter after the library reopens. Also, for books whose due date falls during the closure, the due date will be extended by one week — no special procedure is needed. We apologize for the inconvenience and thank you for your cooperation.",
    "questions": [
      {
        "question": "システムの入[い]れ替[か]えのため、図書館[としょかん]はいつからいつまで休[やす]みになりますか。",
        "questionTranslation": "Because of the system replacement, from when to when will the library be closed?",
        "options": [
          {
            "text": "月曜日から金曜日まで",
            "explanation": "Monday is the regular weekly closing day; the special closure for the system replacement is Tuesday through Friday."
          },
          {
            "text": "火曜日から金曜日まで",
            "explanation": "Correct. The announcement says the library will be closed from next Tuesday through Friday for the computer system replacement."
          },
          {
            "text": "火曜日から土曜日まで",
            "explanation": "The library reopens on Saturday at 9 a.m., so Saturday is not part of the closure."
          },
          {
            "text": "水曜日から日曜日まで",
            "explanation": "The closure starts Tuesday and ends Friday; Wednesday through Sunday was never mentioned."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "借[か]りているCDは、どうしますか。",
        "questionTranslation": "What should people do with CDs they have borrowed?",
        "options": [
          {
            "text": "返却ポストに入れる",
            "explanation": "The return box is only for books; the announcement explicitly says not to put CDs or DVDs in it because they break easily."
          },
          {
            "text": "図書館が開いてからカウンターに返す",
            "explanation": "Correct. The announcement says to bring CDs and DVDs to the counter after the library reopens."
          },
          {
            "text": "郵便で図書館に送る",
            "explanation": "Mailing items back is never mentioned in the announcement."
          },
          {
            "text": "返却日を延ばす手続きをする",
            "explanation": "Due dates are extended automatically and no procedure is needed — and that applies to books, not a way to return CDs."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-shimin-kouen-furima",
    "level": "N3",
    "title": "公園[こうえん]のフリーマーケットのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "市民[しみん]の皆様[みなさま]にお知[し]らせします。今度[こんど]の日曜日[にちようび]、市民公園[しみんこうえん]でフリーマーケットを行[おこな]います。"
      },
      {
        "speaker": "アナウンス",
        "text": "時間[じかん]は午前[ごぜん]9時[くじ]から午後[ごご]3時[さんじ]までです。洋服[ようふく]や食器[しょっき]、おもちゃなど、いろいろな物[もの]が並[なら]びます。"
      },
      {
        "speaker": "アナウンス",
        "text": "雨[あめ]の場合[ばあい]は中止[ちゅうし]ではなく、次[つぎ]の日曜日[にちようび]に延期[えんき]します。"
      },
      {
        "speaker": "アナウンス",
        "text": "行[おこな]うかどうかは、当日[とうじつ]の朝[あさ]7時[しちじ]に、市[し]のホームページでお知[し]らせしますので、ご確認[かくにん]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、公園[こうえん]の駐車場[ちゅうしゃじょう]は使[つか]えません。お車[くるま]での来場[らいじょう]はご遠慮[えんりょ]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "駅前[えきまえ]から公園[こうえん]まで、無料[むりょう]のバスが20分[にじゅっぷん]おきに出[で]ますので、どうぞご利用[りよう]ください。皆様[みなさま]のお越[こ]しをお待[ま]ちしております。"
      }
    ],
    "translation": "Attention, residents. This Sunday, a flea market will be held at Citizens' Park. It runs from 9 a.m. to 3 p.m., with clothes, tableware, toys, and many other items on sale. In case of rain, it will not be canceled but postponed to the following Sunday. Whether it will be held will be announced on the city website at 7 a.m. on the day, so please check there. Please note that the park's parking lot cannot be used, so please refrain from coming by car. A free bus will run from the station to the park every 20 minutes, so please make use of it. We look forward to seeing you.",
    "questions": [
      {
        "question": "雨[あめ]が降[ふ]ったら、フリーマーケットはどうなりますか。",
        "questionTranslation": "What happens to the flea market if it rains?",
        "options": [
          {
            "text": "中止になる",
            "explanation": "The announcement explicitly says it will NOT be canceled (中止ではなく) in case of rain."
          },
          {
            "text": "次の日曜日に行われる",
            "explanation": "Correct. The announcement says that in case of rain it will be postponed to the following Sunday."
          },
          {
            "text": "建物の中で行われる",
            "explanation": "Moving the event indoors is never mentioned."
          },
          {
            "text": "時間を短くして行われる",
            "explanation": "Shortening the hours is never mentioned; the rain plan is postponement."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "公園[こうえん]へは、どうやって行[い]けばいいと言[い]っていますか。",
        "questionTranslation": "How does the announcement say people should get to the park?",
        "options": [
          {
            "text": "自分の車で行く",
            "explanation": "The park's parking lot cannot be used, and people are asked to refrain from coming by car."
          },
          {
            "text": "駅前から無料のバスに乗る",
            "explanation": "Correct. A free bus runs from the station to the park every 20 minutes, and listeners are invited to use it."
          },
          {
            "text": "市役所の駐車場に車を止める",
            "explanation": "The city hall parking lot is never mentioned."
          },
          {
            "text": "タクシーで行く",
            "explanation": "Taxis are never mentioned; the recommended way is the free bus from the station."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "フリーマーケットを行[おこな]うかどうかは、どうやって分[わ]かりますか。",
        "questionTranslation": "How can people find out whether the flea market will be held?",
        "options": [
          {
            "text": "市のホームページを見る",
            "explanation": "Correct. The decision will be announced on the city website at 7 a.m. on the day of the event."
          },
          {
            "text": "市役所に電話する",
            "explanation": "Calling city hall is never mentioned as a way to check."
          },
          {
            "text": "公園の入口の看板を見る",
            "explanation": "A sign at the park entrance is never mentioned."
          },
          {
            "text": "当日の新聞を見る",
            "explanation": "The newspaper is never mentioned; the information will be on the city website."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:e-taifuu-sonae-radio",
    "level": "N3",
    "title": "ラジオの台風[たいふう]情報[じょうほう]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "こんばんは。7時[しちじ]のラジオニュースです。大型[おおがた]の台風[たいふう]12号[じゅうにごう]が、ゆっくりと北[きた]に進[すす]んでいます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "この地方[ちほう]では、明日[あした]の夕方[ゆうがた]から夜[よる]にかけて、雨[あめ]と風[かぜ]が最[もっと]も強[つよ]くなる見込[みこ]みです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ベランダの植木鉢[うえきばち]や物干[ものほ]しざおなど、風[かぜ]で飛[と]びやすい物[もの]は、今日[きょう]のうちに家[いえ]の中[なか]に入[い]れておいてください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "また、停電[ていでん]に備[そな]えて、携帯電話[けいたいでんわ]の充電[じゅうでん]と、懐中電灯[かいちゅうでんとう]の準備[じゅんび]もお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "電車[でんしゃ]は、明日[あした]の午後[ごご]から止[と]まる可能性[かのうせい]があります。お勤[つと]めの方[かた]は、明日[あした]はできるだけ早[はや]く帰宅[きたく]してください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "明日[あした]の夜[よる]は、外出[がいしゅつ]をしないでください。次[つぎ]の情報[じょうほう]は9時[くじ]にお伝[つた]えします。"
      }
    ],
    "translation": "Good evening. This is the 7 o'clock radio news. Large Typhoon No. 12 is moving slowly northward. In this region, the rain and wind are expected to be at their strongest from tomorrow evening into tomorrow night. Please bring things that can be blown away by the wind — flower pots and laundry poles on your balcony — inside the house today. Also, in case of a power outage, please charge your mobile phone and prepare a flashlight. Trains may stop running from tomorrow afternoon, so if you work, please go home as early as possible tomorrow. Do not go out tomorrow night. The next update will be at 9 o'clock.",
    "questions": [
      {
        "question": "雨[あめ]と風[かぜ]は、いつ一番[いちばん]強[つよ]くなりますか。",
        "questionTranslation": "When will the rain and wind be at their strongest?",
        "options": [
          {
            "text": "今日の夜",
            "explanation": "Tonight is when the news is being broadcast; the peak is forecast for tomorrow evening into the night."
          },
          {
            "text": "明日の朝",
            "explanation": "Tomorrow morning is not mentioned; the peak is from tomorrow evening into the night."
          },
          {
            "text": "明日の夕方から夜",
            "explanation": "Correct. The forecast says rain and wind will be strongest from tomorrow evening into tomorrow night."
          },
          {
            "text": "あさっての午後",
            "explanation": "The day after tomorrow is never mentioned; the peak is tomorrow evening to night."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "今日[きょう]のうちにしておくことは、何[なん]だと言[い]っていますか。",
        "questionTranslation": "What does the speaker say to do before the end of today?",
        "options": [
          {
            "text": "できるだけ早く帰宅すること",
            "explanation": "Going home early is the advice for tomorrow, when trains may stop, not for today."
          },
          {
            "text": "ベランダの物を家の中に入れること",
            "explanation": "Correct. The speaker says to bring things that can be blown away, like flower pots and laundry poles, inside the house today (今日のうちに)."
          },
          {
            "text": "会社を休む連絡をすること",
            "explanation": "Contacting one's company about taking the day off is never mentioned."
          },
          {
            "text": "夜の外出をやめること",
            "explanation": "Not going out at night is the instruction for tomorrow night, not something to do today."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-netsuchuushou-radio",
    "level": "N3",
    "title": "ラジオの健康[けんこう]情報[じょうほう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "皆[みな]さん、こんにちは。「昼[ひる]の健康[けんこう]メモ」の時間[じかん]です。今日[きょう]は熱中症[ねっちゅうしょう]についてお話[はな]しします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "今週[こんしゅう]は気温[きおん]が35度[さんじゅうごど]を超[こ]える日[ひ]が続[つづ]きます。熱中症[ねっちゅうしょう]に十分[じゅうぶん]注意[ちゅうい]してください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "大切[たいせつ]なのは、のどが渇[かわ]く前[まえ]に水分[すいぶん]をとることです。渇[かわ]いたと感[かん]じたときは、もう遅[おそ]いと言[い]われています。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "また、汗[あせ]をたくさんかいたときは、水[みず]だけではなく、塩分[えんぶん]も一緒[いっしょ]にとってください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "運動[うんどう]は、気温[きおん]が最[もっと]も高[たか]くなる昼[ひる]の12時[じゅうにじ]から午後[ごご]3時[さんじ]までは避[さ]けて、朝[あさ]の涼[すず]しい時間[じかん]にしましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それから、お年寄[としよ]りは家[いえ]の中[なか]でも熱中症[ねっちゅうしょう]になることがあります。我慢[がまん]しないで、エアコンを使[つか]ってください。それでは、今日[きょう]も元気[げんき]にお過[す]ごしください。"
      }
    ],
    "translation": "Hello, everyone. It's time for the 'Midday Health Memo.' Today I'll talk about heatstroke. This week we will have a string of days with temperatures over 35 degrees, so please be very careful about heatstroke. The important thing is to drink fluids before you feel thirsty — they say that by the time you feel thirsty, it is already too late. Also, when you sweat a lot, don't drink only water; take in salt together with it. As for exercise, avoid the hottest hours from noon to 3 p.m. and do it during the cool morning hours. Also, elderly people can get heatstroke even inside the house, so don't hold back — use the air conditioner. Have a healthy day.",
    "questions": [
      {
        "question": "水分[すいぶん]のとり方[かた]について、何[なん]と言[い]っていますか。",
        "questionTranslation": "What does the speaker say about drinking fluids?",
        "options": [
          {
            "text": "のどが渇いてから飲む",
            "explanation": "The speaker says that when you feel thirsty it is already too late, so this is the opposite of the advice."
          },
          {
            "text": "のどが渇く前に飲む",
            "explanation": "Correct. The speaker says the important thing is to take in fluids before you feel thirsty."
          },
          {
            "text": "冷たい水だけを飲む",
            "explanation": "Cold water is never mentioned, and the speaker actually warns against drinking only water when you sweat a lot."
          },
          {
            "text": "運動の後だけ飲む",
            "explanation": "Drinking only after exercise is never mentioned; the point is to drink before feeling thirsty."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "汗[あせ]をたくさんかいたときは、どうすればいいですか。",
        "questionTranslation": "What should you do when you have sweated a lot?",
        "options": [
          {
            "text": "水だけを飲む",
            "explanation": "The speaker explicitly says not to take only water (水だけではなく) when you sweat a lot."
          },
          {
            "text": "水と塩分を一緒にとる",
            "explanation": "Correct. The speaker says that when you sweat a lot, you should take salt together with water."
          },
          {
            "text": "甘い物を食べる",
            "explanation": "Eating sweets is never mentioned."
          },
          {
            "text": "何も飲まないで休む",
            "explanation": "Resting without drinking anything is never suggested; taking in fluids is the main advice."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "運動[うんどう]は、いつするのがいいと言[い]っていますか。",
        "questionTranslation": "When does the speaker say it is good to exercise?",
        "options": [
          {
            "text": "昼の12時から午後3時の間",
            "explanation": "Noon to 3 p.m. is exactly the time band the speaker says to avoid, because it is the hottest."
          },
          {
            "text": "朝の涼しい時間",
            "explanation": "Correct. The speaker says to avoid noon to 3 p.m. and exercise during the cool morning hours."
          },
          {
            "text": "夕方の涼しい時間",
            "explanation": "The evening is not what the speaker recommends; she specifically says the cool morning hours."
          },
          {
            "text": "夜寝る前",
            "explanation": "Exercising before bed is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-suidou-kouji-oshirase",
    "level": "N3",
    "title": "水道[すいどう]工事[こうじ]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "こちらは市役所[しやくしょ]です。水道[すいどう]工事[こうじ]についてお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "水道管[すいどうかん]の取[と]り替[か]え工事[こうじ]のため、木曜日[もくようび]の夜[よる]10時[じゅうじ]から金曜日[きんようび]の朝[あさ]5時[ごじ]まで、桜町[さくらまち]全体[ぜんたい]で水道[すいどう]が止[と]まります。"
      },
      {
        "speaker": "アナウンス",
        "text": "この間[あいだ]は、水[みず]が全[まった]く出[で]ませんので、飲[の]み水[みず]やトイレに使[つか]う水[みず]を、前[まえ]もってためておいてください。"
      },
      {
        "speaker": "アナウンス",
        "text": "工事[こうじ]が終[お]わった直後[ちょくご]は、水[みず]が白[しろ]く濁[にご]ることがあります。"
      },
      {
        "speaker": "アナウンス",
        "text": "その場合[ばあい]は、しばらく水[みず]を流[なが]してから、お使[つか]いください。すぐに飲[の]まないようにお願[ねが]いします。"
      },
      {
        "speaker": "アナウンス",
        "text": "工事[こうじ]は、雨[あめ]の場合[ばあい]、次[つぎ]の週[しゅう]の木曜日[もくようび]に変更[へんこう]になります。ご不明[ふめい]な点[てん]は、市役所[しやくしょ]水道課[すいどうか]までお問[と]い合[あ]わせください。"
      }
    ],
    "translation": "This is city hall with an announcement about water main construction. Because of work to replace the water pipes, the water supply will be shut off in all of Sakura-machi from 10 p.m. on Thursday until 5 a.m. on Friday. During that time no water will come out at all, so please store drinking water and water for the toilet in advance. Right after the work finishes, the water may look cloudy and white. In that case, let the water run for a while before using it, and please do not drink it right away. If it rains, the work will be moved to Thursday of the following week. For questions, please contact the Water Department at city hall.",
    "questions": [
      {
        "question": "水道[すいどう]は、いつ止[と]まりますか。",
        "questionTranslation": "When will the water supply be shut off?",
        "options": [
          {
            "text": "木曜日の朝から夜まで",
            "explanation": "The outage is overnight, from Thursday night to Friday morning, not during Thursday daytime."
          },
          {
            "text": "木曜日の夜10時から金曜日の朝5時まで",
            "explanation": "Correct. The announcement says the water will stop from 10 p.m. Thursday until 5 a.m. Friday."
          },
          {
            "text": "金曜日の夜から土曜日の朝まで",
            "explanation": "The outage starts Thursday night, not Friday night."
          },
          {
            "text": "木曜日から金曜日まで丸一日",
            "explanation": "It is a seven-hour overnight outage, not a full day."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "工事[こうじ]の後[あと]、水[みず]が白[しろ]く濁[にご]っていたら、どうしますか。",
        "questionTranslation": "What should people do if the water is cloudy and white after the construction?",
        "options": [
          {
            "text": "そのまま飲んでもいい",
            "explanation": "The announcement explicitly asks people NOT to drink it right away."
          },
          {
            "text": "しばらく水を流してから使う",
            "explanation": "Correct. The announcement says to let the water run for a while before using it."
          },
          {
            "text": "市役所に電話して待つ",
            "explanation": "Contacting city hall is only for questions in general, not the instruction for cloudy water."
          },
          {
            "text": "次の日まで水を使わない",
            "explanation": "Waiting until the next day is never mentioned; running the water for a while is enough."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-byouin-denwa-annai",
    "level": "N3",
    "title": "病院[びょういん]の電話[でんわ]案内[あんない]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "お電話[でんわ]ありがとうございます。こちらは、みどり病院[びょういん]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "診察[しんさつ]時間[じかん]は、平日[へいじつ]が午前[ごぜん]9時[くじ]から午後[ごご]5時[ごじ]まで、土曜日[どようび]は午前[ごぜん]9時[くじ]から12時[じゅうにじ]までです。日曜日[にちようび]と祝日[しゅくじつ]はお休[やす]みです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "診察[しんさつ]のご予約[よやく]は、お電話[でんわ]の場合[ばあい]、平日[へいじつ]の午後[ごご]2時[にじ]から4時[よじ]の間[あいだ]にお願[ねが]いいたします。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "病院[びょういん]のホームページからは、24時間[にじゅうよじかん]いつでもご予約[よやく]いただけます。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "本日[ほんじつ]は祝日[しゅくじつ]のため、休診[きゅうしん]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "急[きゅう]な病気[びょうき]やけがの方[かた]は、市[し]の救急[きゅうきゅう]センター、電話[でんわ]0120の55の119番[ばん]にご連絡[れんらく]ください。それでは、失礼[しつれい]いたします。"
      }
    ],
    "translation": "Thank you for calling. This is Midori Hospital. Consultation hours are 9 a.m. to 5 p.m. on weekdays and 9 a.m. to noon on Saturdays. We are closed on Sundays and national holidays. To make an appointment by phone, please call on weekdays between 2 p.m. and 4 p.m. Appointments can also be made anytime, 24 hours a day, through the hospital website. Today is a national holiday, so the hospital is closed. If you have a sudden illness or injury, please contact the city emergency center at 0120-55-119. Thank you, and goodbye.",
    "questions": [
      {
        "question": "電話[でんわ]で予約[よやく]したい人[ひと]は、いつ電話[でんわ]しますか。",
        "questionTranslation": "When should people call if they want to make an appointment by phone?",
        "options": [
          {
            "text": "平日の午前9時から午後5時の間",
            "explanation": "9 a.m. to 5 p.m. is the consultation time on weekdays, not the window for phone appointments."
          },
          {
            "text": "平日の午後2時から4時の間",
            "explanation": "Correct. The message says phone appointments should be made on weekdays between 2 p.m. and 4 p.m."
          },
          {
            "text": "土曜日の午前中",
            "explanation": "Saturday morning is a consultation time; phone appointments are taken on weekdays from 2 to 4 p.m."
          },
          {
            "text": "いつ電話してもいい",
            "explanation": "It is the website, not the phone, that accepts appointments 24 hours a day."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "今日[きょう]、急[きゅう]に具合[ぐあい]が悪[わる]くなった人[ひと]は、どうしますか。",
        "questionTranslation": "What should someone who suddenly feels ill today do?",
        "options": [
          {
            "text": "みどり病院に行く",
            "explanation": "Midori Hospital is closed today because it is a national holiday."
          },
          {
            "text": "明日まで待つ",
            "explanation": "Waiting until tomorrow is never suggested; for emergencies there is a phone number to call."
          },
          {
            "text": "市の救急センターに電話する",
            "explanation": "Correct. The message says people with sudden illness or injury should call the city emergency center at 0120-55-119."
          },
          {
            "text": "ホームページで予約する",
            "explanation": "The website is for making regular appointments, not for handling a sudden illness today."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:e-suizokukan-iruka-show",
    "level": "N3",
    "title": "水族館[すいぞくかん]のイルカショーの案内[あんない]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "ご来館[らいかん]の皆様[みなさま]にご案内[あんない]いたします。本日[ほんじつ]のイルカショーについてお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "午前[ごぜん]の回[かい]は、予定[よてい]どおり11時[じゅういちじ]から始[はじ]まります。"
      },
      {
        "speaker": "アナウンス",
        "text": "午後[ごご]の回[かい]は、プールの点検[てんけん]のため、2時[にじ]からではなく、3時[さんじ]からに変更[へんこう]になりました。"
      },
      {
        "speaker": "アナウンス",
        "text": "会場[かいじょう]は屋外[おくがい]のイルカスタジアムです。席[せき]には、ショーが始[はじ]まる30分前[さんじゅっぷんまえ]からお入[はい]りいただけます。"
      },
      {
        "speaker": "アナウンス",
        "text": "前[まえ]から3列目[さんれつめ]までの席[せき]は、水[みず]がかかることがあります。入口[いりぐち]でレインコートを100円[ひゃくえん]で販売[はんばい]しておりますので、ご利用[りよう]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、ショーの間[あいだ]、写真[しゃしん]は撮[と]っていただけますが、フラッシュはイルカが驚[おどろ]きますので、お使[つか]いにならないでください。ごゆっくりお楽[たの]しみください。"
      }
    ],
    "translation": "Attention, visitors. Here is an announcement about today's dolphin show. The morning show will start as scheduled at 11 o'clock. The afternoon show has been changed: because of a pool inspection, it will start at 3 o'clock instead of 2 o'clock. The venue is the outdoor Dolphin Stadium, and you may enter the seating area starting 30 minutes before the show begins. Seats in the first three rows may get splashed with water; raincoats are sold at the entrance for 100 yen, so please make use of them. During the show you are welcome to take photos, but please do not use a flash, as it startles the dolphins. Enjoy your visit.",
    "questions": [
      {
        "question": "午後[ごご]のショーは、何時[なんじ]から始[はじ]まりますか。",
        "questionTranslation": "What time does the afternoon show start?",
        "options": [
          {
            "text": "11時",
            "explanation": "11 o'clock is the morning show, which runs as scheduled."
          },
          {
            "text": "2時",
            "explanation": "2 o'clock was the original time, but it was changed because of the pool inspection."
          },
          {
            "text": "3時",
            "explanation": "Correct. The afternoon show was moved from 2 o'clock to 3 o'clock because of a pool inspection."
          },
          {
            "text": "3時半",
            "explanation": "3:30 is never mentioned; 30 minutes before the show is when seating opens."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "ショーの写真[しゃしん]について、何[なん]と言[い]っていますか。",
        "questionTranslation": "What does the announcement say about photos of the show?",
        "options": [
          {
            "text": "写真は撮ってはいけない",
            "explanation": "Photos are allowed; only the flash is prohibited."
          },
          {
            "text": "フラッシュを使わなければ撮ってもいい",
            "explanation": "Correct. The announcement says photos are fine, but the flash must not be used because it startles the dolphins."
          },
          {
            "text": "フラッシュを使って撮ってもいい",
            "explanation": "The flash is exactly what is prohibited, because it startles the dolphins."
          },
          {
            "text": "ショーの前だけ撮ってもいい",
            "explanation": "There is no rule limiting photos to before the show; photos during the show are allowed without flash."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "前[まえ]の方[ほう]の席[せき]について、何[なん]と言[い]っていますか。",
        "questionTranslation": "What does the announcement say about the front seats?",
        "options": [
          {
            "text": "予約が必要だ",
            "explanation": "Reservations are never mentioned; seating opens 30 minutes before the show."
          },
          {
            "text": "水がかかることがある",
            "explanation": "Correct. The first three rows may get splashed, which is why raincoats are sold at the entrance."
          },
          {
            "text": "子どもしか座れない",
            "explanation": "A children-only rule is never mentioned."
          },
          {
            "text": "追加料金がかかる",
            "explanation": "An extra seat charge is never mentioned; the 100 yen is for an optional raincoat."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-eigakan-jouei-annai",
    "level": "N3",
    "title": "映画館[えいがかん]の案内[あんない]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "本日[ほんじつ]は、さくらシネマにご来場[らいじょう]いただき、ありがとうございます。まもなく映画[えいが]が始[はじ]まります。"
      },
      {
        "speaker": "アナウンス",
        "text": "上映中[じょうえいちゅう]は、携帯電話[けいたいでんわ]の電源[でんげん]をお切[き]りください。マナーモードでも、画面[がめん]の光[ひかり]が周[まわ]りのお客様[きゃくさま]のご迷惑[めいわく]になります。"
      },
      {
        "speaker": "アナウンス",
        "text": "映画[えいが]の録画[ろくが]や録音[ろくおん]は、法律[ほうりつ]で禁止[きんし]されています。"
      },
      {
        "speaker": "アナウンス",
        "text": "前[まえ]の席[せき]を蹴[け]ったり、大[おお]きな声[こえ]で話[はな]したりしないよう、お願[ねが]いいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "非常口[ひじょうぐち]は、スクリーンに向[む]かって左右[さゆう]の前[まえ]と、後[うし]ろの二[に]か所[しょ]にございます。地震[じしん]などの場合[ばあい]は、係員[かかりいん]の案内[あんない]に従[したが]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "お忘[わす]れ物[もの]をされた場合[ばあい]は、1階[いっかい]のサービスカウンターまでお越[こ]しください。それでは、最後[さいご]までごゆっくりお楽[たの]しみください。"
      }
    ],
    "translation": "Thank you for coming to Sakura Cinema today. The movie will begin shortly. During the screening, please turn off your mobile phone — even in silent mode, the light of the screen disturbs the customers around you. Recording video or audio of the movie is prohibited by law. Please refrain from kicking the seat in front of you or talking in a loud voice. The emergency exits are located at the front on both sides facing the screen, and at the back. In the event of an earthquake or other emergency, please follow the staff's instructions. If you lose something, please come to the service counter on the first floor. Now, please sit back and enjoy the movie to the end.",
    "questions": [
      {
        "question": "映画[えいが]の間[あいだ]、携帯電話[けいたいでんわ]はどうしますか。",
        "questionTranslation": "What should you do with your mobile phone during the movie?",
        "options": [
          {
            "text": "マナーモードにする",
            "explanation": "Silent mode is not enough — the announcement says the screen's light still disturbs others, so the power must be turned off."
          },
          {
            "text": "電源を切る",
            "explanation": "Correct. The announcement asks customers to turn off their phone's power during the screening."
          },
          {
            "text": "音を小さくする",
            "explanation": "Lowering the volume is never mentioned; the phone must be turned off completely."
          },
          {
            "text": "ロビーに預ける",
            "explanation": "Leaving phones in the lobby is never mentioned."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "忘[わす]れ物[もの]をした人[ひと]は、どこへ行[い]きますか。",
        "questionTranslation": "Where should people go if they lose something?",
        "options": [
          {
            "text": "非常口の近く",
            "explanation": "The emergency exits are for evacuation, not for lost items."
          },
          {
            "text": "1階のサービスカウンター",
            "explanation": "Correct. The announcement says lost items are handled at the first-floor service counter."
          },
          {
            "text": "2階の売店",
            "explanation": "A second-floor shop is never mentioned."
          },
          {
            "text": "スクリーンの前",
            "explanation": "The front of the screen is only mentioned in connection with the emergency exits."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-marason-koutsuu-kisei",
    "level": "N3",
    "title": "マラソン大会[たいかい]の交通[こうつう]規制[きせい]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "市民[しみん]の皆様[みなさま]にお知[し]らせします。今度[こんど]の日曜日[にちようび]、市民[しみん]マラソン大会[たいかい]が行[おこな]われます。"
      },
      {
        "speaker": "アナウンス",
        "text": "このため、駅前通[えきまえどお]りと中央通[ちゅうおうどお]りは、朝[あさ]8時[はちじ]から午後[ごご]1時[いちじ]まで、車[くるま]が通[とお]れなくなります。"
      },
      {
        "speaker": "アナウンス",
        "text": "バスは、この時間[じかん]、道[みち]を変[か]えて走[はし]ります。駅前[えきまえ]と中央公園前[ちゅうおうこうえんまえ]のバス停[てい]は使[つか]えませんので、ご注意[ちゅうい]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "電車[でんしゃ]は、いつもどおり動[うご]きます。"
      },
      {
        "speaker": "アナウンス",
        "text": "日曜日[にちようび]に駅[えき]の近[ちか]くへおいでになる方[かた]は、車[くるま]ではなく、電車[でんしゃ]をご利用[りよう]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "大会[たいかい]のコースなど、詳[くわ]しいことは、市[し]のホームページをご覧[らん]ください。ご協力[きょうりょく]をお願[ねが]いいたします。"
      }
    ],
    "translation": "Attention, residents. This coming Sunday, the citizens' marathon will be held. Because of this, Ekimae Street and Chuo Street will be closed to cars from 8 a.m. until 1 p.m. Buses will run on detour routes during that time, and the bus stops in front of the station and in front of Central Park cannot be used, so please take note. Trains will run as usual. If you are coming to the area near the station on Sunday, please use the train rather than a car. For details such as the marathon course, please see the city website. Thank you for your cooperation.",
    "questions": [
      {
        "question": "道[みち]は、いつ車[くるま]が通[とお]れなくなりますか。",
        "questionTranslation": "When will the roads be closed to cars?",
        "options": [
          {
            "text": "朝8時から午後1時まで",
            "explanation": "Correct. The announcement says the two streets will be closed to cars from 8 a.m. to 1 p.m."
          },
          {
            "text": "朝8時から午後3時まで",
            "explanation": "The closure ends at 1 p.m., not 3 p.m."
          },
          {
            "text": "朝9時から午後1時まで",
            "explanation": "The closure starts at 8 a.m., not 9 a.m."
          },
          {
            "text": "日曜日の一日中",
            "explanation": "The closure is only from 8 a.m. to 1 p.m., not all day."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "日曜日[にちようび]に駅[えき]の近[ちか]くへ行[い]く人[ひと]は、どうすればいいですか。",
        "questionTranslation": "What should people do if they are going near the station on Sunday?",
        "options": [
          {
            "text": "車で行く",
            "explanation": "The announcement asks people not to come by car because of the road closures."
          },
          {
            "text": "バスで行く",
            "explanation": "Buses will be on detours and the station-front bus stop cannot be used, so the bus is not the recommended way."
          },
          {
            "text": "電車で行く",
            "explanation": "Correct. Trains run as usual, and the announcement asks people to use the train instead of a car."
          },
          {
            "text": "行くのをやめる",
            "explanation": "The announcement never tells people not to come; it recommends taking the train."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:e-onsen-riyou-annai",
    "level": "N3",
    "title": "温泉[おんせん]の利用[りよう]案内[あんない]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "ゆざわ温泉[おんせん]センターをご利用[りよう]いただき、ありがとうございます。ご利用[りよう]の前[まえ]に、いくつかお願[ねが]いがございます。"
      },
      {
        "speaker": "アナウンス",
        "text": "営業[えいぎょう]は夜[よる]11時[じゅういちじ]までですが、受付[うけつけ]は10時[じゅうじ]までです。10時[じゅうじ]を過[す]ぎますと、お入[はい]りいただけません。"
      },
      {
        "speaker": "アナウンス",
        "text": "お風呂[ふろ]に入[はい]る前[まえ]には、必[かなら]ず体[からだ]を洗[あら]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "タオルは、お湯[ゆ]の中[なか]に入[い]れないでください。髪[かみ]の長[なが]い方[かた]は、結[むす]んでからお入[はい]りください。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、本日[ほんじつ]、サウナは機械[きかい]の点検[てんけん]のため、ご利用[りよう]いただけません。申[もう]し訳[わけ]ございません。"
      },
      {
        "speaker": "アナウンス",
        "text": "お風呂[ふろ]から上[あ]がったら、水分[すいぶん]を十分[じゅうぶん]におとりください。2階[にかい]の休憩室[きゅうけいしつ]に、無料[むりょう]のお茶[ちゃ]をご用意[ようい]しております。ごゆっくりおくつろぎください。"
      }
    ],
    "translation": "Thank you for visiting Yuzawa Onsen Center. Before you use the facilities, we have a few requests. We are open until 11 p.m., but reception closes at 10 p.m. — after 10 you cannot enter. Before getting into the bath, please be sure to wash your body. Do not put towels in the bath water, and if you have long hair, please tie it up before entering. Also, the sauna cannot be used today because of a machine inspection — we apologize. After you get out of the bath, please be sure to drink plenty of fluids; free tea is available in the second-floor rest area. Please relax and enjoy your stay.",
    "questions": [
      {
        "question": "何時[なんじ]までに受付[うけつけ]をしなければなりませんか。",
        "questionTranslation": "By what time must you check in at reception?",
        "options": [
          {
            "text": "夜9時",
            "explanation": "9 p.m. is never mentioned; reception closes at 10 p.m."
          },
          {
            "text": "夜10時",
            "explanation": "Correct. The announcement says reception is open until 10 p.m., and after that you cannot enter."
          },
          {
            "text": "夜11時",
            "explanation": "11 p.m. is the closing time of the facility, not the deadline for reception."
          },
          {
            "text": "夜12時",
            "explanation": "Midnight is never mentioned; reception closes at 10 p.m."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "今日[きょう]、使[つか]えないのは、どれですか。",
        "questionTranslation": "Which of these cannot be used today?",
        "options": [
          {
            "text": "2階の休憩室",
            "explanation": "The second-floor rest area is open, and free tea is available there."
          },
          {
            "text": "サウナ",
            "explanation": "Correct. The sauna is unavailable today because of a machine inspection."
          },
          {
            "text": "大きいお風呂",
            "explanation": "The baths themselves are open as usual; only the sauna is closed."
          },
          {
            "text": "無料のお茶",
            "explanation": "The free tea is available in the second-floor rest area."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "お風呂[ふろ]に入[はい]る前[まえ]に、何[なに]をしなければなりませんか。",
        "questionTranslation": "What must you do before getting into the bath?",
        "options": [
          {
            "text": "水分をとる",
            "explanation": "Drinking fluids is what the announcement recommends after the bath, not before."
          },
          {
            "text": "体を洗う",
            "explanation": "Correct. The announcement says to be sure to wash your body before getting into the bath."
          },
          {
            "text": "タオルをお湯に入れる",
            "explanation": "Putting towels in the bath water is exactly what is prohibited."
          },
          {
            "text": "2階の休憩室で休む",
            "explanation": "Resting in the second-floor rest area is suggested for after the bath, not required before it."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-pasokon-kyoushitsu-boshuu",
    "level": "N3",
    "title": "公民館[こうみんかん]のパソコン教室[きょうしつ]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "中央[ちゅうおう]公民館[こうみんかん]からお知[し]らせします。9月[くがつ]から、初心者[しょしんしゃ]のためのパソコン教室[きょうしつ]を開[ひら]きます。"
      },
      {
        "speaker": "アナウンス",
        "text": "教室[きょうしつ]は、9月[くがつ]の毎週[まいしゅう]水曜日[すいようび]、午前[ごぜん]10時[じゅうじ]から12時[じゅうにじ]まで、全部[ぜんぶ]で4回[よんかい]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "メールの書[か]き方[かた]や、インターネットでの調[しら]べ方[かた]を、ゆっくり練習[れんしゅう]します。"
      },
      {
        "speaker": "アナウンス",
        "text": "パソコンは公民館[こうみんかん]のものを使[つか]いますので、お持[も]ちいただく必要[ひつよう]はありません。"
      },
      {
        "speaker": "アナウンス",
        "text": "参加[さんか]は無料[むりょう]ですが、テキスト代[だい]として500円[ごひゃくえん]がかかります。"
      },
      {
        "speaker": "アナウンス",
        "text": "定員[ていいん]は20名[にじゅうめい]で、申[もう]し込[こ]み順[じゅん]です。お申[もう]し込[こ]みは、8月[はちがつ]1日[ついたち]から、公民館[こうみんかん]の窓口[まどぐち]またはお電話[でんわ]でお願[ねが]いします。皆様[みなさま]のご参加[さんか]をお待[ま]ちしております。"
      }
    ],
    "translation": "An announcement from the Central Community Center. Starting in September, we will hold a computer class for beginners. The class meets every Wednesday in September, from 10 a.m. to noon, four sessions in total. You will practice slowly, learning how to write email and how to look things up on the internet. The community center's computers will be used, so there is no need to bring your own. Participation is free, but there is a 500-yen charge for the textbook. Capacity is 20 people, first come, first served. Applications are accepted starting August 1, at the community center counter or by phone. We look forward to your participation.",
    "questions": [
      {
        "question": "教室[きょうしつ]に参加[さんか]する人[ひと]は、いくら払[はら]いますか。",
        "questionTranslation": "How much do participants in the class pay?",
        "options": [
          {
            "text": "何も払わなくてもいい",
            "explanation": "Participation itself is free, but the 500-yen textbook fee is required."
          },
          {
            "text": "テキスト代の500円だけ",
            "explanation": "Correct. The announcement says participation is free but a 500-yen textbook fee applies."
          },
          {
            "text": "参加費500円とテキスト代500円",
            "explanation": "There is no participation fee; the only cost is the 500-yen textbook."
          },
          {
            "text": "毎回500円",
            "explanation": "The 500 yen is a one-time textbook fee, not a per-session charge."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "パソコンについて、何[なん]と言[い]っていますか。",
        "questionTranslation": "What does the announcement say about computers?",
        "options": [
          {
            "text": "自分のパソコンを持って行く",
            "explanation": "The announcement says there is no need to bring your own computer."
          },
          {
            "text": "公民館のパソコンを使う",
            "explanation": "Correct. The community center's computers will be used, so participants need not bring one."
          },
          {
            "text": "新しく買わなければならない",
            "explanation": "Buying a computer is never mentioned."
          },
          {
            "text": "借りるのに500円かかる",
            "explanation": "The 500 yen is for the textbook, not for borrowing a computer."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "申[もう]し込[こ]みは、どうしますか。",
        "questionTranslation": "How do people apply?",
        "options": [
          {
            "text": "9月1日から窓口で申し込む",
            "explanation": "Applications start on August 1, not September 1."
          },
          {
            "text": "8月1日から窓口か電話で申し込む",
            "explanation": "Correct. Applications open August 1 and are taken at the community center counter or by phone."
          },
          {
            "text": "ホームページから申し込む",
            "explanation": "Online applications are never mentioned; it is the counter or the phone."
          },
          {
            "text": "はがきを送って申し込む",
            "explanation": "Applying by postcard is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-depaato-tennai-housou",
    "level": "N3",
    "title": "デパートの店内[てんない]放送[ほうそう]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "ご来店[らいてん]のお客様[きゃくさま]に、迷子[まいご]のお知[し]らせをいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "青[あお]いシャツに白[しろ]い帽子[ぼうし]の、5歳[ごさい]ぐらいの男[おとこ]のお子様[こさま]を、5階[ごかい]のおもちゃ売[う]り場[ば]でお預[あず]かりしました。"
      },
      {
        "speaker": "アナウンス",
        "text": "ただいま、1階[いっかい]の案内所[あんないじょ]でお待[ま]ちになっています。お心当[こころあ]たりのお客様[きゃくさま]は、1階[いっかい]の案内所[あんないじょ]までお越[こ]しください。"
      },
      {
        "speaker": "アナウンス",
        "text": "続[つづ]きまして、お車[くるま]でお越[こ]しのお客様[きゃくさま]にお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "地下[ちか]駐車場[ちゅうしゃじょう]の、青[あお]い車[くるま]、ナンバー1723のお客様[きゃくさま]、ライトがついたままになっております。"
      },
      {
        "speaker": "アナウンス",
        "text": "お心当[こころあ]たりのお客様[きゃくさま]は、お車[くるま]にお戻[もど]りください。本日[ほんじつ]も、ご来店[らいてん]ありがとうございます。"
      }
    ],
    "translation": "Attention, shoppers: an announcement about a lost child. A boy of about five, wearing a blue shirt and a white hat, was found alone in the toy department on the fifth floor. He is now waiting at the information desk on the first floor. If you know this child, please come to the first-floor information desk. Next, an announcement for customers who came by car. To the owner of the blue car with license number 1723 in the basement parking lot: your lights have been left on. If this is your car, please return to it. Thank you for shopping with us today.",
    "questions": [
      {
        "question": "男[おとこ]の子[こ]の家族[かぞく]は、どこへ行[い]きますか。",
        "questionTranslation": "Where should the boy's family go?",
        "options": [
          {
            "text": "5階のおもちゃ売り場",
            "explanation": "The fifth-floor toy department is where the boy was found, but he is now waiting at the first-floor information desk."
          },
          {
            "text": "1階の案内所",
            "explanation": "Correct. The boy is now waiting at the information desk on the first floor, and the family is asked to come there."
          },
          {
            "text": "地下の駐車場",
            "explanation": "The basement parking lot is part of the separate announcement about a car with its lights on."
          },
          {
            "text": "2階のサービスカウンター",
            "explanation": "A second-floor service counter is never mentioned."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "青[あお]い車[くるま]のお客[きゃく]さんは、どうしてほしいと言[い]われていますか。",
        "questionTranslation": "What is the owner of the blue car being asked to do?",
        "options": [
          {
            "text": "車を別の場所に動かす",
            "explanation": "Moving the car is never mentioned; the problem is that the lights were left on."
          },
          {
            "text": "ライトがついているので、車に戻る",
            "explanation": "Correct. The announcement says the car's lights are still on and asks the owner to return to the car."
          },
          {
            "text": "1階の案内所に行く",
            "explanation": "The first-floor information desk is where the lost child's family should go, not the car's owner."
          },
          {
            "text": "駐車料金を払う",
            "explanation": "Parking fees are never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-gomi-dashikata-henkou",
    "level": "N3",
    "title": "ごみの出[だ]し方[かた]の変更[へんこう]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "こちらは市役所[しやくしょ]です。ごみの出[だ]し方[かた]の変更[へんこう]についてお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "来月[らいげつ]から、ペットボトルの集[あつ]め方[かた]が変[か]わります。"
      },
      {
        "speaker": "アナウンス",
        "text": "今[いま]までは、第[だい]2と第[だい]4水曜日[すいようび]に集[あつ]めていましたが、来月[らいげつ]からは、毎週[まいしゅう]金曜日[きんようび]に集[あつ]めます。"
      },
      {
        "speaker": "アナウンス",
        "text": "出[だ]すときは、ふたとラベルを取[と]って、中[なか]を水[みず]で軽[かる]く洗[あら]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "取[と]ったふたとラベルは、プラスチックごみの日[ひ]に出[だ]してください。"
      },
      {
        "speaker": "アナウンス",
        "text": "ごみは、当日[とうじつ]の朝[あさ]8時半[はちじはん]までに、決[き]められた場所[ばしょ]に出[だ]してください。前[まえ]の日[ひ]の夜[よる]に出[だ]すことは、カラスが来[く]るため、おやめください。ご協力[きょうりょく]をお願[ねが]いします。"
      }
    ],
    "translation": "This is city hall with an announcement about a change in how to put out garbage. Starting next month, the collection of plastic (PET) bottles will change. Until now they were collected on the second and fourth Wednesdays, but from next month they will be collected every Friday. When putting bottles out, remove the caps and labels and rinse the inside lightly with water. Put the removed caps and labels out on plastic-garbage day. Please put garbage out at the designated spot by 8:30 a.m. on collection day. Please do not put it out the night before, as crows will get into it. Thank you for your cooperation.",
    "questions": [
      {
        "question": "来月[らいげつ]から、ペットボトルはいつ出[だ]しますか。",
        "questionTranslation": "From next month, when should plastic bottles be put out?",
        "options": [
          {
            "text": "第2・第4水曜日",
            "explanation": "The second and fourth Wednesdays were the old schedule, which is being replaced."
          },
          {
            "text": "毎週水曜日",
            "explanation": "The new day is Friday, not Wednesday, and the old Wednesday schedule was only twice a month."
          },
          {
            "text": "毎週金曜日",
            "explanation": "Correct. From next month, plastic bottles will be collected every Friday."
          },
          {
            "text": "毎月最初の金曜日",
            "explanation": "Collection is every Friday, not only the first Friday of the month."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "ペットボトルを出[だ]す前[まえ]に、何[なに]をしますか。",
        "questionTranslation": "What should you do before putting out plastic bottles?",
        "options": [
          {
            "text": "ふたとラベルを取って、中を洗う",
            "explanation": "Correct. The announcement says to remove the caps and labels and rinse the inside lightly with water."
          },
          {
            "text": "小さくつぶして袋に入れる",
            "explanation": "Crushing the bottles is never mentioned."
          },
          {
            "text": "ラベルだけ取る",
            "explanation": "Both the caps and the labels must be removed, and the inside must be rinsed."
          },
          {
            "text": "ふたをしっかり閉める",
            "explanation": "The caps must be removed, not tightened; they go out on plastic-garbage day."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "ごみは、いつ出[だ]せばいいですか。",
        "questionTranslation": "When should garbage be put out?",
        "options": [
          {
            "text": "前の日の夜",
            "explanation": "Putting garbage out the night before is exactly what is prohibited, because crows get into it."
          },
          {
            "text": "当日の朝8時半まで",
            "explanation": "Correct. Garbage must be at the designated spot by 8:30 a.m. on collection day."
          },
          {
            "text": "当日の昼12時まで",
            "explanation": "The deadline is 8:30 a.m., not noon."
          },
          {
            "text": "いつ出してもいい",
            "explanation": "There is a clear rule: by 8:30 a.m. on the day, and not the night before."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-yakyuujou-shiai-okure",
    "level": "N3",
    "title": "野球場[やきゅうじょう]のアナウンス",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "本日[ほんじつ]は、みなと球場[きゅうじょう]にご来場[らいじょう]いただき、ありがとうございます。お客様[きゃくさま]にお知[し]らせいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "雨[あめ]のため、午後[ごご]6時[ろくじ]開始[かいし]予定[よてい]の試合[しあい]は、30分[さんじゅっぷん]遅[おく]れて、6時半[ろくじはん]に始[はじ]まります。"
      },
      {
        "speaker": "アナウンス",
        "text": "今後[こんご]、雨[あめ]が強[つよ]くなった場合[ばあい]は、試合[しあい]が中止[ちゅうし]になることもあります。"
      },
      {
        "speaker": "アナウンス",
        "text": "中止[ちゅうし]の場合[ばあい]、チケットの払[はら]い戻[もど]しの方法[ほうほう]は、球場[きゅうじょう]のホームページでお知[し]らせいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、観客席[かんきゃくせき]では、後[うし]ろのお客様[きゃくさま]が見[み]えなくなるため、傘[かさ]は使[つか]えません。"
      },
      {
        "speaker": "アナウンス",
        "text": "レインコートをご利用[りよう]ください。売店[ばいてん]でも販売[はんばい]しております。皆様[みなさま]のご協力[きょうりょく]をお願[ねが]いいたします。"
      }
    ],
    "translation": "Thank you for coming to Minato Stadium today. An announcement for our guests: because of the rain, the game scheduled to start at 6 p.m. will start 30 minutes late, at 6:30. If the rain gets heavier, the game may be canceled. In the event of cancellation, information about ticket refunds will be posted on the stadium website. Also, umbrellas cannot be used in the stands, as they block the view of the guests behind you. Please use a raincoat instead — they are also sold at the concession stands. Thank you for your cooperation.",
    "questions": [
      {
        "question": "試合[しあい]は、何時[なんじ]に始[はじ]まりますか。",
        "questionTranslation": "What time will the game start?",
        "options": [
          {
            "text": "6時",
            "explanation": "6 p.m. was the originally scheduled time; the start has been delayed 30 minutes because of rain."
          },
          {
            "text": "6時半",
            "explanation": "Correct. The game will start 30 minutes late, at 6:30, because of the rain."
          },
          {
            "text": "7時",
            "explanation": "The delay is 30 minutes, so the game starts at 6:30, not 7."
          },
          {
            "text": "7時半",
            "explanation": "7:30 is never mentioned; the new start time is 6:30."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "席[せき]で雨[あめ]が降[ふ]ってきたら、どうしますか。",
        "questionTranslation": "What should spectators do if it rains while they are in their seats?",
        "options": [
          {
            "text": "傘をさす",
            "explanation": "Umbrellas are not allowed in the stands because they block the view of people behind."
          },
          {
            "text": "レインコートを着る",
            "explanation": "Correct. The announcement asks spectators to use raincoats, which are also sold at the concession stands."
          },
          {
            "text": "屋根のある席に移る",
            "explanation": "Moving to covered seats is never mentioned."
          },
          {
            "text": "家に帰る",
            "explanation": "Going home is never suggested; the game is still expected to be played."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "試合[しあい]が中止[ちゅうし]になったら、チケットはどうなりますか。",
        "questionTranslation": "What happens with tickets if the game is canceled?",
        "options": [
          {
            "text": "使えなくなって、お金は返ってこない",
            "explanation": "Refunds are available; the method will be announced on the website."
          },
          {
            "text": "払い戻しの方法がホームページで知らされる",
            "explanation": "Correct. The announcement says the refund procedure will be posted on the stadium website if the game is canceled."
          },
          {
            "text": "次の試合でそのまま使える",
            "explanation": "Using tickets for a later game is never mentioned; the announcement talks about refunds."
          },
          {
            "text": "売店でレインコートと交換できる",
            "explanation": "The concession stands sell raincoats; exchanging tickets there is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:e-yuuenchi-unten-chuushi",
    "level": "N3",
    "title": "遊園地[ゆうえんち]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みどりランドにご来園[らいえん]の皆様[みなさま]にお知[し]らせいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "ただいま、風[かぜ]が強[つよ]くなっているため、観覧車[かんらんしゃ]とジェットコースターの運転[うんてん]を止[と]めております。"
      },
      {
        "speaker": "アナウンス",
        "text": "そのほかの乗[の]り物[もの]は、いつもどおりお楽[たの]しみいただけます。"
      },
      {
        "speaker": "アナウンス",
        "text": "風[かぜ]が弱[よわ]くなりましたら、運転[うんてん]を再開[さいかい]し、あらためて放送[ほうそう]でお知[し]らせいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "観覧車[かんらんしゃ]とジェットコースターのチケットをお持[も]ちの方[かた]は、入口[いりぐち]の案内所[あんないじょ]で、ほかの乗[の]り物[もの]のチケットとお取[と]り替[か]えいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、午後[ごご]5時[ごじ]からのパレードは、予定[よてい]どおり行[おこな]います。ご迷惑[めいわく]をおかけしますが、ご理解[りかい]をお願[ねが]いいたします。"
      }
    ],
    "translation": "Attention, guests of Midori Land. Because the wind has grown strong, we have currently stopped operating the Ferris wheel and the roller coaster. All other rides can be enjoyed as usual. When the wind dies down, we will resume operation and let you know with another announcement. If you have tickets for the Ferris wheel or the roller coaster, you can exchange them for tickets for other rides at the information desk by the entrance. Please note that the parade starting at 5 p.m. will be held as scheduled. We apologize for the inconvenience and thank you for your understanding.",
    "questions": [
      {
        "question": "今[いま]、止[と]まっている乗[の]り物[もの]は、どれですか。",
        "questionTranslation": "Which rides are currently stopped?",
        "options": [
          {
            "text": "すべての乗り物",
            "explanation": "Only two rides are stopped; the other rides are operating as usual."
          },
          {
            "text": "観覧車とジェットコースター",
            "explanation": "Correct. The announcement says the Ferris wheel and the roller coaster have been stopped because of the strong wind."
          },
          {
            "text": "観覧車だけ",
            "explanation": "The roller coaster is also stopped, not just the Ferris wheel."
          },
          {
            "text": "ジェットコースターとパレード",
            "explanation": "The parade is not a ride and will be held as scheduled at 5 p.m."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "止[と]まっている乗[の]り物[もの]のチケットを持[も]っている人[ひと]は、どうすることができますか。",
        "questionTranslation": "What can people do who have tickets for the stopped rides?",
        "options": [
          {
            "text": "案内所でほかの乗り物のチケットと取り替える",
            "explanation": "Correct. Tickets for the Ferris wheel and roller coaster can be exchanged for other ride tickets at the information desk by the entrance."
          },
          {
            "text": "入口でお金を返してもらう",
            "explanation": "Refunds are never mentioned; the offer is an exchange for other ride tickets."
          },
          {
            "text": "明日また使う",
            "explanation": "Using the tickets tomorrow is never mentioned."
          },
          {
            "text": "パレードの特別席と取り替える",
            "explanation": "Special parade seats are never mentioned; the exchange is for other ride tickets."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-ryokou-yosan-soudan",
    "level": "N3",
    "title": "旅行[りょこう]の計画[けいかく]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ねえ、来月[らいげつ]の連休[れんきゅう]、どこか旅行[りょこう]に行[い]かない？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいね。北海道[ほっかいどう]はどう？おいしいものがたくさんあるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "北海道[ほっかいどう]か。でも飛行機代[ひこうきだい]が高[たか]いよ。予算[よさん]は一人[ひとり]三万円[さんまんえん]までにしたいな。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "三万円[さんまんえん]じゃ北海道[ほっかいどう]は無理[むり]だね。じゃあ、京都[きょうと]は？新幹線[しんかんせん]で行[い]けるし。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "京都[きょうと]もいいけど、来月[らいげつ]は梅雨[つゆ]でしょう。お寺[てら]を歩[ある]いて回[まわ]るのに、雨[あめ]はちょっと…。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか。じゃあ、長野[ながの]はどう？山[やま]の方[ほう]は雨[あめ]が少[すく]ないって聞[き]いたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "長野[ながの]なら電車[でんしゃ]で行[い]けるし、宿[やど]も安[やす]いね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん、温泉[おんせん]もあるし。一泊二日[いっぱくふつか]で二万五千円[にまんごせんえん]ぐらいで行[い]けると思[おも]う。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいね。じゃあ長野[ながの]に決[き]めよう。宿[やど]は私[わたし]が探[さが]すよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ありがとう。じゃあ、電車[でんしゃ]の切符[きっぷ]は僕[ぼく]が買[か]っておくね。"
      }
    ],
    "translation": "Woman: Hey, want to go on a trip somewhere over next month's long weekend? / Man: Sounds good. How about Hokkaido? There's lots of good food. / Woman: Hokkaido, huh. But the airfare is expensive. I'd like to keep the budget to 30,000 yen per person. / Man: With 30,000 yen, Hokkaido is impossible. Then how about Kyoto? We can get there by shinkansen. / Woman: Kyoto would be nice too, but next month is the rainy season, right? Rain would be a problem when we'd be walking around temples... / Man: I see. Then how about Nagano? I heard it doesn't rain much up in the mountains. / Woman: If it's Nagano, we can go by train, and the inns are cheap too. / Man: Yeah, and there are hot springs. I think we can do two days, one night for about 25,000 yen. / Woman: Nice. Then let's decide on Nagano. I'll look for an inn. / Man: Thanks. Then I'll buy the train tickets.",
    "questions": [
      {
        "question": "二人[ふたり]はどこへ旅行[りょこう]に行[い]きますか。",
        "questionTranslation": "Where will the two of them go on their trip?",
        "options": [
          {
            "text": "北海道",
            "explanation": "Hokkaido was rejected because the airfare exceeds the 30,000-yen budget."
          },
          {
            "text": "京都",
            "explanation": "Kyoto was rejected because next month is the rainy season and they would be walking around temples."
          },
          {
            "text": "長野",
            "explanation": "Correct. The woman says 「じゃあ長野に決めよう」 — they settle on Nagano, reachable by train with cheap inns and hot springs."
          },
          {
            "text": "沖縄",
            "explanation": "Okinawa is never mentioned in the conversation."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして京都[きょうと]に行[い]きませんか。",
        "questionTranslation": "Why aren't they going to Kyoto?",
        "options": [
          {
            "text": "飛行機代が高いから",
            "explanation": "Expensive airfare was the reason for rejecting Hokkaido, not Kyoto."
          },
          {
            "text": "梅雨で雨が心配だから",
            "explanation": "Correct. The woman says next month is the rainy season (梅雨) and rain would be a problem for walking around temples."
          },
          {
            "text": "宿が取れないから",
            "explanation": "Nothing is said about inns being fully booked; inns are only mentioned as cheap in Nagano."
          },
          {
            "text": "新幹線が止まっているから",
            "explanation": "The man actually says they CAN get to Kyoto by shinkansen; nothing about it being stopped."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]はこのあと何[なに]をしますか。",
        "questionTranslation": "What will the woman do after this?",
        "options": [
          {
            "text": "電車の切符を買う",
            "explanation": "The man said he would buy the train tickets, not the woman."
          },
          {
            "text": "宿を探す",
            "explanation": "Correct. The woman says 「宿は私が探すよ」 — she will look for an inn."
          },
          {
            "text": "天気予報を調べる",
            "explanation": "The weather was discussed, but nobody says they will check the forecast now."
          },
          {
            "text": "飛行機を予約する",
            "explanation": "They decided against flying; they are going to Nagano by train."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:f-onsen-ryokou-nittei",
    "level": "N3",
    "title": "温泉[おんせん]旅行[りょこう]の日[ひ]にち",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "再来週[さらいしゅう]の土曜日[どようび]に予約[よやく]した温泉[おんせん]だけど、天気予報[てんきよほう]見[み]た？台風[たいふう]が来[く]るらしいよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "え、本当[ほんとう]？山[やま]の中[なか]の旅館[りょかん]だから、台風[たいふう]だと危[あぶ]ないね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん。それで、日[ひ]にちを変[か]えられるか、旅館[りょかん]に電話[でんわ]して聞[き]いてみたんだ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "どうだった？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "その次[つぎ]の週末[しゅうまつ]は紅葉[こうよう]のシーズンでもういっぱいだって。さらにその次[つぎ]の土曜日[どようび]なら空[あ]いてるって言[い]われたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "その土曜日[どようび]か…。あ、その日[ひ]は妹[いもうと]の引[ひ]っ越[こ]しの手伝[てつだ]いがあるんだった。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか。じゃあ、その週[しゅう]の日曜日[にちようび]から一泊[いっぱく]はどう？次[つぎ]の月曜日[げつようび]は祝日[しゅくじつ]で休[やす]みだし。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、それならいいね。手伝[てつだ]いは土曜日[どようび]だけだから。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "よし。じゃあ、日曜日[にちようび]からに変更[へんこう]できるか、もう一度[いちど]旅館[りょかん]に電話[でんわ]するよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "お願[ねが]い。料金[りょうきん]が変[か]わるかどうかも聞[き]いておいてね。"
      }
    ],
    "translation": "Man: About the hot spring inn we booked for the Saturday after next — did you see the weather forecast? Apparently a typhoon is coming. / Woman: What, really? The inn is up in the mountains, so a typhoon would be dangerous. / Man: Yeah. So I called the inn and asked if we could change the date. / Woman: What did they say? / Man: The weekend after that is fully booked because of the autumn-leaves season. They said the Saturday after that one is available. / Woman: That Saturday... Oh, that's the day I'm helping my younger sister move. / Man: I see. Then how about staying one night starting the Sunday of that week? The following Monday is a public holiday, so it's a day off. / Woman: Oh, that works. I'm only helping on Saturday. / Man: Okay. Then I'll call the inn again to see if we can change it to start Sunday. / Woman: Please. And ask whether the price changes too.",
    "questions": [
      {
        "question": "二人[ふたり]はいつ温泉[おんせん]に行[い]くつもりですか。",
        "questionTranslation": "When do the two plan to go to the hot spring?",
        "options": [
          {
            "text": "予約した土曜日",
            "explanation": "The originally booked Saturday was dropped because a typhoon is coming."
          },
          {
            "text": "その次の週末",
            "explanation": "The following weekend is fully booked because of the autumn-leaves season."
          },
          {
            "text": "引っ越しを手伝う日の次の日の日曜日",
            "explanation": "Correct. Saturday she helps her sister move, so the man proposes leaving the next day, Sunday, since Monday is a holiday, and she agrees."
          },
          {
            "text": "祝日の月曜日",
            "explanation": "Monday is the holiday they will use as the return day; they depart on Sunday, not Monday."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして最初[さいしょ]に予約[よやく]した日[ひ]に行[い]きませんか。",
        "questionTranslation": "Why aren't they going on the originally booked date?",
        "options": [
          {
            "text": "旅館がいっぱいだから",
            "explanation": "Being fully booked was the problem with the FOLLOWING weekend, not the original date."
          },
          {
            "text": "台風が来るから",
            "explanation": "Correct. The man says the forecast shows a typhoon coming, and a mountain inn would be dangerous."
          },
          {
            "text": "妹の引っ越しがあるから",
            "explanation": "The sister's move is on the later Saturday the inn offered, not on the original date."
          },
          {
            "text": "料金が高くなったから",
            "explanation": "The price is only mentioned at the end as something to ask about; it is not the reason."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "旅館に電話する",
            "explanation": "Correct. He says 「日曜日からに変更できるか、もう一度旅館に電話するよ」."
          },
          {
            "text": "妹の引っ越しを手伝う",
            "explanation": "It is the woman who will help her sister move, and that is on a later Saturday."
          },
          {
            "text": "天気予報を調べる",
            "explanation": "He already checked the forecast; that is how the conversation started."
          },
          {
            "text": "別の旅館を予約する",
            "explanation": "They are keeping the same inn and only changing the date."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-sofu-no-tanjoubi",
    "level": "N3",
    "title": "祖父[そふ]の誕生日[たんじょうび]プレゼント",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ねえ、おじいちゃんの誕生日[たんじょうび]、来週[らいしゅう]だよ。プレゼント、どうする？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "去年[きょねん]はセーターをあげたよね。今年[ことし]もセーターでいいんじゃない？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "セーターはもうタンスにいっぱいあるって、おばあちゃんが言[い]ってたよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、お酒[さけ]は？おじいちゃん、日本酒[にほんしゅ]が好[す]きだよね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それがね、お医者[いしゃ]さんにお酒[さけ]を止[と]められてるんだって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうなんだ。じゃあ、何[なに]がいいかなあ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "この前[まえ]、昔[むかし]の写真[しゃしん]を見[み]ながら、最近[さいきん]の家族[かぞく]の写真[しゃしん]が少[すく]ないって言[い]ってたよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、みんなで写真[しゃしん]を撮[と]って、アルバムにして贈[おく]るのはどう？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいね！誕生日[たんじょうび]の日[ひ]にみんなでレストランで食事[しょくじ]して、そこで写真[しゃしん]を撮[と]ろうよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "よし、じゃあ僕[ぼく]はレストランを予約[よやく]するよ。アルバムのほうは頼[たの]んでいい？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うん、私[わたし]がかわいいのを探[さが]しておく。"
      }
    ],
    "translation": "Woman: Hey, Grandpa's birthday is next week. What should we do about a present? / Man: We gave him a sweater last year, right? Wouldn't a sweater be fine this year too? / Woman: Grandma said his dresser is already full of sweaters. / Man: Then how about sake? Grandpa likes Japanese sake, right? / Woman: Well, apparently his doctor has told him to stop drinking. / Man: Really. Then what would be good? / Woman: The other day, while looking at old photos, he said there aren't many recent family photos. / Man: Then how about everyone takes pictures together and we give him an album? / Woman: Great idea! On his birthday, let's all have a meal at a restaurant and take the photos there. / Man: Okay, then I'll book the restaurant. Can I leave the album to you? / Woman: Yes, I'll find a cute one.",
    "questions": [
      {
        "question": "二人[ふたり]はおじいさんに何[なに]をあげますか。",
        "questionTranslation": "What will the two give their grandfather?",
        "options": [
          {
            "text": "セーター",
            "explanation": "A sweater was rejected — Grandma said his dresser is already full of them."
          },
          {
            "text": "日本酒",
            "explanation": "Sake was rejected because his doctor has told him to stop drinking."
          },
          {
            "text": "家族の写真のアルバム",
            "explanation": "Correct. They decide to take family photos at the birthday meal and give him an album of them."
          },
          {
            "text": "昔の写真",
            "explanation": "Old photos are what he was looking at; the problem was too few RECENT family photos."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうしてお酒[さけ]をあげませんか。",
        "questionTranslation": "Why won't they give him sake?",
        "options": [
          {
            "text": "おじいさんはお酒が好きではないから",
            "explanation": "The man says the grandfather LIKES Japanese sake."
          },
          {
            "text": "医者に止められているから",
            "explanation": "Correct. The woman says the doctor has told him to stop drinking alcohol."
          },
          {
            "text": "去年もお酒をあげたから",
            "explanation": "What they gave last year was a sweater, not sake."
          },
          {
            "text": "値段が高すぎるから",
            "explanation": "Price is never mentioned in the conversation."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]はこのあと何[なに]をしますか。",
        "questionTranslation": "What will the woman do after this?",
        "options": [
          {
            "text": "レストランを予約する",
            "explanation": "The man said he would book the restaurant."
          },
          {
            "text": "アルバムを探す",
            "explanation": "Correct. She agrees to handle the album, saying 「私がかわいいのを探しておく」."
          },
          {
            "text": "セーターを買いに行く",
            "explanation": "The sweater idea was rejected at the start."
          },
          {
            "text": "おばあさんに電話する",
            "explanation": "Grandma is only quoted; nobody says they will call her."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:f-kekkon-iwai-erabi",
    "level": "N3",
    "title": "結婚[けっこん]祝[いわ]いの品物[しなもの]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、友達[ともだち]の結婚[けっこん]祝[いわ]いを探[さが]しているんですが。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "ありがとうございます。ご予算[よさん]はどのくらいでしょうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "五千円[ごせんえん]ぐらいで考[かんが]えています。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "それでしたら、こちらのペアのワイングラスが人気[にんき]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "きれいですね。あ、でも友達[ともだち]はお酒[さけ]を飲[の]まないんです。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "では、こちらのペアのマグカップはいかがですか。コーヒーがお好[す]きな方[かた]でしたら。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。あの、あちらのお皿[さら]のセットはおいくらですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "あちらは五枚[ごまい]セットで八千円[はっせんえん]になります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "八千円[はっせんえん]ですか…。ちょっと予算[よさん]オーバーですね。じゃあ、やっぱりマグカップにします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "かしこまりました。お祝[いわ]い用[よう]の包装[ほうそう]は無料[むりょう]でできますが、いかがなさいますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、お願[ねが]いします。リボンは白[しろ]いのにしてください。"
      }
    ],
    "translation": "Woman: Excuse me, I'm looking for a wedding gift for a friend. / Clerk: Thank you. What is your budget? / Woman: I'm thinking around 5,000 yen. / Clerk: In that case, this pair of wine glasses is popular. / Woman: They're pretty. Oh, but my friend doesn't drink alcohol. / Clerk: Then how about this pair of mugs? If they like coffee. / Woman: That's nice. Um, how much is that plate set over there? / Clerk: That one is a set of five for 8,000 yen. / Woman: 8,000 yen... That's a bit over my budget. Then I'll go with the mugs after all. / Clerk: Certainly. We can gift-wrap it for free — would you like that? / Woman: Yes, please. Please use a white ribbon.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the woman buy?",
        "options": [
          {
            "text": "ペアのワイングラス",
            "explanation": "The wine glasses were rejected because her friend doesn't drink alcohol."
          },
          {
            "text": "ペアのマグカップ",
            "explanation": "Correct. After the plate set turns out to be over budget, she says 「やっぱりマグカップにします」."
          },
          {
            "text": "お皿のセット",
            "explanation": "The five-plate set costs 8,000 yen, which is over her 5,000-yen budget."
          },
          {
            "text": "コーヒーメーカー",
            "explanation": "A coffee maker is never mentioned; coffee only comes up as something the friend might like."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうしてワイングラスを買[か]いませんか。",
        "questionTranslation": "Why doesn't she buy the wine glasses?",
        "options": [
          {
            "text": "予算より高いから",
            "explanation": "Being over budget was the problem with the plate set, not the wine glasses."
          },
          {
            "text": "友達がお酒を飲まないから",
            "explanation": "Correct. She says 「でも友達はお酒を飲まないんです」."
          },
          {
            "text": "デザインが好きではないから",
            "explanation": "She actually says the glasses are pretty (きれいですね)."
          },
          {
            "text": "売り切れているから",
            "explanation": "Nothing is sold out in this conversation."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうしてお皿[さら]のセットを買[か]いませんか。",
        "questionTranslation": "Why doesn't she buy the plate set?",
        "options": [
          {
            "text": "枚数が少ないから",
            "explanation": "The number of plates (a five-piece set) is stated but never criticized."
          },
          {
            "text": "友達が使わないから",
            "explanation": "That was the reason against the wine glasses, not the plates."
          },
          {
            "text": "予算より高いから",
            "explanation": "Correct. The set is 8,000 yen and she says it's over her roughly 5,000-yen budget."
          },
          {
            "text": "包装ができないから",
            "explanation": "Gift wrapping is free and she accepts it; it is not a problem."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:f-hikkoshi-no-tetsudai",
    "level": "N3",
    "title": "引[ひ]っ越[こ]しの手伝[てつだ]い",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "もしもし？あのさ、今度[こんど]の週末[しゅうまつ]、引[ひ]っ越[こ]しをするんだけど、手伝[てつだ]ってくれない？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいよ。土曜日[どようび]？それとも日曜日[にちようび]？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "土曜日[どようび]なんだ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ごめん、土曜日[どようび]は午後[ごご]からアルバイトがあるんだ。午前中[ごぜんちゅう]だけでもいい？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "もちろん。トラックが朝[あさ]九時[くじ]に来[く]るから、八時半[はちじはん]ごろ来[き]てくれると助[たす]かるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかった。何[なに]か持[も]って行[い]くものはある？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "軍手[ぐんて]があれば持[も]ってきて。段[だん]ボールはもう全部[ぜんぶ]あるから大丈夫[だいじょうぶ]。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "軍手[ぐんて]ね、了解[りょうかい]。お昼[ひる]までしか手伝[てつだ]えなくてごめんね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "大丈夫[だいじょうぶ]。大[おお]きい家具[かぐ]は午前中[ごぜんちゅう]に運[はこ]ぶから、それで十分[じゅうぶん]だよ。お礼[れい]に今度[こんど]ご飯[はん]をおごるね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "楽[たの]しみにしてる。じゃあ、土曜日[どようび]の八時半[はちじはん]に。"
      }
    ],
    "translation": "Man: Hello? Hey, I'm moving house this weekend — could you help me? / Woman: Sure. Saturday? Or Sunday? / Man: It's Saturday. / Woman: Sorry, on Saturday I have a part-time job from the afternoon. Is just the morning okay? / Man: Of course. The truck comes at 9 a.m., so it would help if you came around 8:30. / Woman: Got it. Is there anything I should bring? / Man: Bring work gloves if you have them. We already have all the cardboard boxes, so that's fine. / Woman: Work gloves, got it. Sorry I can only help until noon. / Man: No problem. We'll move the big furniture in the morning, so that's plenty. I'll treat you to a meal sometime as thanks. / Woman: Looking forward to it. See you Saturday at 8:30 then.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何時[なんじ]に行[い]きますか。",
        "questionTranslation": "What time will the woman go?",
        "options": [
          {
            "text": "8時",
            "explanation": "8:00 is not mentioned; he asked her to come around 8:30."
          },
          {
            "text": "8時半",
            "explanation": "Correct. The man asks her to come around 8:30, before the truck arrives at 9, and she confirms it at the end."
          },
          {
            "text": "9時",
            "explanation": "9:00 is when the truck arrives, not when she is asked to come."
          },
          {
            "text": "午後1時",
            "explanation": "In the afternoon she has her part-time job; she helps only in the morning."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]は何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the woman bring?",
        "options": [
          {
            "text": "段ボール",
            "explanation": "The man says they already have all the cardboard boxes."
          },
          {
            "text": "お弁当",
            "explanation": "A boxed lunch is never mentioned; the man offers to treat her to a meal later instead."
          },
          {
            "text": "軍手",
            "explanation": "Correct. The man asks her to bring work gloves if she has them, and she says 「軍手ね、了解」."
          },
          {
            "text": "何も持って行かない",
            "explanation": "She was asked to bring one thing: work gloves."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして女[おんな]の人[ひと]は午前中[ごぜんちゅう]しか手伝[てつだ]えませんか。",
        "questionTranslation": "Why can the woman only help in the morning?",
        "options": [
          {
            "text": "午後からアルバイトがあるから",
            "explanation": "Correct. She says 「土曜日は午後からアルバイトがあるんだ」."
          },
          {
            "text": "日曜日に用事があるから",
            "explanation": "Sunday plans are never mentioned; the move is on Saturday anyway."
          },
          {
            "text": "朝が苦手だから",
            "explanation": "She has no problem coming early — she agrees to 8:30."
          },
          {
            "text": "トラックが午前中しか使えないから",
            "explanation": "The truck simply arrives at 9; nothing is said about it being available only in the morning."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-hikkoshi-gyousha-rusuden",
    "level": "N3",
    "title": "引[ひ]っ越[こ]し会社[がいしゃ]からの電話[でんわ]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "さくら引[ひ]っ越[こ]しセンターの山田[やまだ]です。二十日[はつか]、土曜日[どようび]のお引[ひ]っ越[こ]しの件[けん]でお電話[でんわ]しました。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "大変[たいへん]申[もう]し訳[わけ]ないのですが、当日[とうじつ]の朝[あさ]に別[べつ]の作業[さぎょう]が入[はい]ってしまいまして、お伺[うかが]いする時間[じかん]を午前[ごぜん]九時[くじ]から午後[ごご]一時[いちじ]に変更[へんこう]させていただきたいと思[おも]います。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "作業[さぎょう]の時間[じかん]は三時間[さんじかん]ほどで、料金[りょうきん]は変[か]わりません。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "また、段[だん]ボール箱[ばこ]は前[まえ]の日[ひ]の金曜日[きんようび]の夕方[ゆうがた]にお届[とど]けしますので、ご在宅[ざいたく]をお願[ねが]いいたします。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "時間[じかん]の変更[へんこう]でご都合[つごう]が悪[わる]い場合[ばあい]は、明日[あす]の午後[ごご]六時[ろくじ]までに、この番号[ばんごう]にお電話[でんわ]ください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "それでは、よろしくお願[ねが]いいたします。"
      }
    ],
    "translation": "Voicemail: This is Yamada from Sakura Moving Center. I'm calling about your move on Saturday the 20th. We are very sorry, but another job has come up that morning, so we would like to change our arrival time from 9 a.m. to 1 p.m. The work will take about three hours, and the price will not change. Also, we will deliver the cardboard boxes the day before, on Friday evening, so please be at home. If the time change is inconvenient for you, please call this number by 6 p.m. tomorrow. Thank you very much.",
    "questions": [
      {
        "question": "引[ひ]っ越[こ]しの日[ひ]、会社[かいしゃ]の人[ひと]は何時[なんじ]に来[き]ますか。",
        "questionTranslation": "On moving day, what time will the company staff come?",
        "options": [
          {
            "text": "午前9時",
            "explanation": "9 a.m. was the ORIGINAL time; it has been changed because another job came up."
          },
          {
            "text": "午前10時",
            "explanation": "10 a.m. is never mentioned."
          },
          {
            "text": "午後1時",
            "explanation": "Correct. The message says the arrival time is changed from 9 a.m. to 1 p.m."
          },
          {
            "text": "午後6時",
            "explanation": "6 p.m. tomorrow is the deadline for calling back if the change is inconvenient."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "金曜日[きんようび]の夕方[ゆうがた]、何[なに]がありますか。",
        "questionTranslation": "What happens on Friday evening?",
        "options": [
          {
            "text": "引っ越しの作業が始まる",
            "explanation": "The move itself is on Saturday the 20th, in the afternoon."
          },
          {
            "text": "段ボール箱が届く",
            "explanation": "Correct. The boxes will be delivered the day before, Friday evening, and the customer is asked to be home."
          },
          {
            "text": "料金の説明の電話が来る",
            "explanation": "No call about pricing is planned; the price stays the same."
          },
          {
            "text": "会社の人が家具を見に来る",
            "explanation": "No inspection visit is mentioned in the message."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "時間[じかん]の変更[へんこう]で都合[つごう]が悪[わる]いとき、どうしなければなりませんか。",
        "questionTranslation": "If the time change is inconvenient, what must the customer do?",
        "options": [
          {
            "text": "明日の午後6時までに電話する",
            "explanation": "Correct. The message says to call this number by 6 p.m. tomorrow if the change is inconvenient."
          },
          {
            "text": "今日中にお店に行く",
            "explanation": "Visiting the office is never mentioned; they ask for a phone call."
          },
          {
            "text": "金曜日の夕方までにメールする",
            "explanation": "Email is never mentioned, and Friday evening is when the boxes arrive."
          },
          {
            "text": "土曜日の朝に電話する",
            "explanation": "The deadline is tomorrow at 6 p.m., well before Saturday morning."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-jimu-puran-erabi",
    "level": "N3",
    "title": "スポーツジムの入会[にゅうかい]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、入会[にゅうかい]を考[かんが]えているんですが、料金[りょうきん]プランを教[おし]えてもらえますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。一番[いちばん]安[やす]いのは、平日[へいじつ]の昼間[ひるま]だけ使[つか]えるデイプランで、月[つき]五千円[ごせんえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "昼間[ひるま]は仕事[しごと]があるので、それは無理[むり]ですね。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "では、平日[へいじつ]の夜[よる]だけのナイトプランが月[つき]七千円[ななせんえん]、いつでも使[つか]えるフルプランが月[つき]一万円[いちまんえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、週末[しゅうまつ]も来[き]たいから、フルプランかなあ。でも一万円[いちまんえん]はちょっと高[たか]いなあ。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "今月中[こんげつちゅう]にご入会[にゅうかい]の方[かた]は、キャンペーンで最初[さいしょ]の三[さん]か月[げつ]は千円引[せんえんび]きになりますよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、最初[さいしょ]は九千円[きゅうせんえん]になるんですね。それなら、フルプランにします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "ありがとうございます。それでは、こちらの用紙[ようし]にお名前[なまえ]とご住所[じゅうしょ]をお書[か]きください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。あの、身分証明書[みぶんしょうめいしょ]は運転免許証[うんてんめんきょしょう]でいいですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、結構[けっこう]です。ご記入[きにゅう]が終[お]わりましたら、お声[こえ]をおかけください。"
      }
    ],
    "translation": "Man: Excuse me, I'm thinking of joining — could you tell me about the price plans? / Clerk: Yes. The cheapest is the Day Plan, usable only on weekday daytimes, at 5,000 yen a month. / Man: I work during the day, so that's impossible for me. / Clerk: Then the Night Plan, weekday evenings only, is 7,000 yen a month, and the Full Plan, usable anytime, is 10,000 yen a month. / Man: Hmm, I want to come on weekends too, so the Full Plan, I guess. But 10,000 yen is a bit expensive. / Clerk: If you join within this month, there's a campaign: 1,000 yen off for the first three months. / Man: So at first it would be 9,000 yen. In that case, I'll take the Full Plan. / Clerk: Thank you. Then please write your name and address on this form. / Man: Sure. Um, is a driver's license okay as ID? / Clerk: Yes, that's fine. Please let me know when you've finished filling it in.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどのプランに入[はい]りますか。",
        "questionTranslation": "Which plan will the man join?",
        "options": [
          {
            "text": "デイプラン",
            "explanation": "The Day Plan was rejected because he works during weekday daytimes."
          },
          {
            "text": "ナイトプラン",
            "explanation": "The Night Plan is weekday evenings only, but he also wants to come on weekends."
          },
          {
            "text": "フルプラン",
            "explanation": "Correct. He wants weekend access, and after hearing about the discount he says 「それなら、フルプランにします」."
          },
          {
            "text": "週末プラン",
            "explanation": "A weekend-only plan is never offered."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "男[おとこ]の人[ひと]は最初[さいしょ]の三[さん]か月[げつ]、一[いっ]か月[げつ]にいくら払[はら]いますか。",
        "questionTranslation": "How much will the man pay per month for the first three months?",
        "options": [
          {
            "text": "5,000円",
            "explanation": "5,000 yen is the Day Plan price, which he did not choose."
          },
          {
            "text": "7,000円",
            "explanation": "7,000 yen is the Night Plan price, which he did not choose."
          },
          {
            "text": "9,000円",
            "explanation": "Correct. The Full Plan is 10,000 yen, and the campaign takes 1,000 yen off for the first three months."
          },
          {
            "text": "10,000円",
            "explanation": "10,000 yen is the regular Full Plan price; with the campaign discount he pays less at first."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあとまず何[なに]をしますか。",
        "questionTranslation": "What will the man do first after this?",
        "options": [
          {
            "text": "用紙に名前と住所を書く",
            "explanation": "Correct. The clerk hands him a form and asks him to write his name and address."
          },
          {
            "text": "運転免許証を取りに帰る",
            "explanation": "He asks if a driver's license is okay as ID, implying he has it with him; he doesn't go home."
          },
          {
            "text": "お金を払う",
            "explanation": "Payment is not mentioned as the next step; filling in the form is."
          },
          {
            "text": "ジムの中を見学する",
            "explanation": "A tour of the gym is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-walking-no-yakusoku",
    "level": "N3",
    "title": "運動[うんどう]の約束[やくそく]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "最近[さいきん]、全然[ぜんぜん]運動[うんどう]してなくて。健康診断[けんこうしんだん]の結果[けっか]もよくなかったし、何[なに]か始[はじ]めようと思[おも]うんだ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "僕[ぼく]も同[おな]じこと考[かんが]えてた。一緒[いっしょ]に朝[あさ]、ジョギングしない？六時[ろくじ]ごろ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "朝[あさ]の六時[ろくじ]？早[はや]すぎるよ。私[わたし]、朝[あさ]は本当[ほんとう]に弱[よわ]いんだ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、仕事[しごと]の後[あと]はどう？夜[よる]のジョギング。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うーん、ずっと運動[うんどう]してないから、いきなり走[はし]るのはきついよ。まずはウォーキングから始[はじ]めたいな。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ウォーキングか。まあ、やらないよりずっといいね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "駅前[えきまえ]の公園[こうえん]、夜[よる]でも明[あか]るくて歩[ある]きやすいよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいね。毎日[まいにち]だと続[つづ]かないだろうから、週[しゅう]二回[にかい]にしよう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "火曜日[かようび]と金曜日[きんようび]はどう？その日[ひ]は残業[ざんぎょう]がないから。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "オッケー。じゃあ、火曜[かよう]と金曜[きんよう]の七時[しちじ]に、公園[こうえん]の入口[いりぐち]で会[あ]おう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うん。三日坊主[みっかぼうず]にならないように、頑張[がんば]ろうね。"
      }
    ],
    "translation": "Woman: I haven't exercised at all lately. My health checkup results weren't good either, so I'm thinking of starting something. / Man: I was thinking the same thing. Want to go jogging together in the morning? Around six. / Woman: Six in the morning? Too early. I'm really bad with mornings. / Man: Then how about after work? Evening jogging. / Woman: Hmm, I haven't exercised in ages, so suddenly running would be too hard. I'd like to start with walking first. / Man: Walking, huh. Well, it's much better than doing nothing. / Woman: The park in front of the station is bright even at night and easy to walk in. / Man: Nice. Every day probably wouldn't last, so let's make it twice a week. / Woman: How about Tuesdays and Fridays? I don't have overtime on those days. / Man: Okay. Then let's meet Tuesdays and Fridays at seven, at the park entrance. / Woman: Yeah. Let's stick with it and not give up after three days.",
    "questions": [
      {
        "question": "二人[ふたり]は何[なに]をすることにしましたか。",
        "questionTranslation": "What did the two decide to do?",
        "options": [
          {
            "text": "朝、ジョギングをする",
            "explanation": "Morning jogging was rejected because the woman is bad with mornings."
          },
          {
            "text": "夜、ジョギングをする",
            "explanation": "Evening jogging was rejected because running would be too hard for her after not exercising for so long."
          },
          {
            "text": "夜、公園でウォーキングをする",
            "explanation": "Correct. They agree to walk in the park by the station in the evenings, meeting at 7."
          },
          {
            "text": "ジムに通う",
            "explanation": "A gym is never mentioned in this conversation."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "二人[ふたり]はいつ会[あ]いますか。",
        "questionTranslation": "When will the two meet?",
        "options": [
          {
            "text": "毎日、朝6時",
            "explanation": "Every day was rejected as unsustainable, and 6 a.m. was the rejected jogging idea."
          },
          {
            "text": "週2回、火曜日と金曜日の7時",
            "explanation": "Correct. They settle on twice a week, Tuesdays and Fridays at 7, at the park entrance."
          },
          {
            "text": "週2回、月曜日と木曜日の7時",
            "explanation": "Monday and Thursday are not the days chosen; they chose Tuesday and Friday, days without overtime."
          },
          {
            "text": "週末だけ、朝9時",
            "explanation": "Weekends and 9 a.m. are never mentioned."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうして朝[あさ]のジョギングをしませんか。",
        "questionTranslation": "Why won't they jog in the morning?",
        "options": [
          {
            "text": "女の人が朝早く起きるのが苦手だから",
            "explanation": "Correct. She says 6 a.m. is too early and that she is really bad with mornings."
          },
          {
            "text": "公園が朝は閉まっているから",
            "explanation": "The park's hours are never mentioned; it's described as bright at night."
          },
          {
            "text": "男の人が朝は仕事だから",
            "explanation": "The man is the one who PROPOSED morning jogging; his work schedule isn't the issue."
          },
          {
            "text": "朝は寒すぎるから",
            "explanation": "The cold is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-tougei-taiken",
    "level": "N3",
    "title": "陶芸[とうげい]教室[きょうしつ]の体験[たいけん]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、そちらの陶芸[とうげい]教室[きょうしつ]の体験[たいけん]レッスンに申[もう]し込[こ]みたいんですが。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "ありがとうございます。体験[たいけん]レッスンは、土曜日[どようび]の午前[ごぜん]十時[じゅうじ]と、水曜日[すいようび]の夜[よる]七時[しちじ]からやっています。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "土曜日[どようび]の午前[ごぜん]がいいです。今週[こんしゅう]の土曜日[どようび]は空[あ]いていますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "申[もう]し訳[わけ]ありません。土曜日[どようび]のクラスは人気[にんき]で、来月[らいげつ]までいっぱいなんです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。早[はや]く体験[たいけん]してみたいので、じゃあ、水曜日[すいようび]の夜[よる]でお願[ねが]いします。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "今週[こんしゅう]の水曜日[すいようび]でよろしいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、大丈夫[だいじょうぶ]です。あの、何[なに]か持[も]って行[い]くものはありますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "土[つち]や道具[どうぐ]はこちらで用意[ようい]します。服[ふく]が汚[よご]れることがあるので、エプロンだけお持[も]ちください。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "エプロンですね、わかりました。料金[りょうきん]はいくらですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "体験[たいけん]は二千円[にせんえん]です。作[つく]った物[もの]は、一[いっ]か月後[げつご]に焼[や]き上[あ]がってからお渡[わた]しします。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "楽[たの]しみです。では、水曜日[すいようび]の七時[しちじ]にうかがいます。"
      }
    ],
    "translation": "Woman: Hello, I'd like to sign up for your pottery class trial lesson. / Teacher: Thank you. Trial lessons are held Saturdays at 10 a.m. and Wednesdays from 7 p.m. / Woman: Saturday morning would be good. Is this Saturday open? / Teacher: I'm sorry. The Saturday class is popular and fully booked until next month. / Woman: I see. I want to try it soon, so Wednesday evening then, please. / Teacher: Is this Wednesday all right? / Woman: Yes, that's fine. Um, is there anything I should bring? / Teacher: We provide the clay and tools. Your clothes may get dirty, so please just bring an apron. / Woman: An apron, understood. How much is the fee? / Teacher: The trial is 2,000 yen. Your piece will be given to you a month later, after it's fired. / Woman: I'm looking forward to it. Then I'll come Wednesday at seven.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はいつ体験[たいけん]レッスンに行[い]きますか。",
        "questionTranslation": "When will the woman go to the trial lesson?",
        "options": [
          {
            "text": "今週の土曜日の午前",
            "explanation": "This Saturday is unavailable — the Saturday class is fully booked until next month."
          },
          {
            "text": "来月の土曜日の午前",
            "explanation": "She doesn't wait until next month; she wants to try soon, so she picks Wednesday."
          },
          {
            "text": "今週の水曜日の夜",
            "explanation": "Correct. She agrees to this Wednesday and confirms she'll come at 7 p.m."
          },
          {
            "text": "来週の水曜日の昼",
            "explanation": "The Wednesday lesson is in the evening (7 p.m.), and she goes this week, not next week."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "女[おんな]の人[ひと]は何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the woman bring?",
        "options": [
          {
            "text": "土と道具",
            "explanation": "The clay and tools are provided by the class."
          },
          {
            "text": "エプロン",
            "explanation": "Correct. The teacher says clothes may get dirty, so she should bring just an apron."
          },
          {
            "text": "タオルと飲み物",
            "explanation": "A towel and a drink are never mentioned."
          },
          {
            "text": "作った物を入れる箱",
            "explanation": "Her piece will be handed over a month later after firing; no box is needed."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうして土曜日[どようび]のクラスに行[い]きませんか。",
        "questionTranslation": "Why isn't she going to the Saturday class?",
        "options": [
          {
            "text": "来月までいっぱいだから",
            "explanation": "Correct. The teacher apologizes that the popular Saturday class is fully booked until next month."
          },
          {
            "text": "土曜日は仕事があるから",
            "explanation": "Her Saturday schedule is not the problem; she actually preferred Saturday morning."
          },
          {
            "text": "料金が高いから",
            "explanation": "The fee is 2,000 yen regardless of the day; price is not the reason."
          },
          {
            "text": "先生が土曜日は休みだから",
            "explanation": "The teacher does hold Saturday classes; they are just full."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-kouminkan-shumi-kouza",
    "level": "N3",
    "title": "公民館[こうみんかん]からのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさまにお知[し]らせします。来月[らいげつ]から始[はじ]まる秋[あき]の趣味[しゅみ]講座[こうざ]の申[もう]し込[こ]みを、本日[ほんじつ]から受[う]け付[つ]けています。"
      },
      {
        "speaker": "アナウンス",
        "text": "今年[ことし]は、ギター、生[い]け花[ばな]、写真[しゃしん]、そば打[う]ちの四[よっ]つの講座[こうざ]があります。"
      },
      {
        "speaker": "アナウンス",
        "text": "人気[にんき]のそば打[う]ち講座[こうざ]は、先着[せんちゃく]二十名[にじゅうめい]までですので、お早[はや]めにお申[もう]し込[こ]みください。"
      },
      {
        "speaker": "アナウンス",
        "text": "お申[もう]し込[こ]みは、一階[いっかい]の受付[うけつけ]か、公民館[こうみんかん]のホームページからできます。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、生[い]け花[ばな]講座[こうざ]は、先生[せんせい]のご都合[つごう]により、毎週[まいしゅう]木曜日[もくようび]から毎週[まいしゅう]金曜日[きんようび]に変[か]わりました。ご注意[ちゅうい]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "また、写真[しゃしん]講座[こうざ]では、カメラをお持[も]ちでない方[かた]に、初回[しょかい]はカメラの貸[か]し出[だ]しをいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "受講料[じゅこうりょう]はどの講座[こうざ]も月[つき]二千円[にせんえん]で、道具代[どうぐだい]は別[べつ]になります。"
      },
      {
        "speaker": "アナウンス",
        "text": "詳[くわ]しくは、受付[うけつけ]でパンフレットをお受[う]け取[と]りください。"
      }
    ],
    "translation": "Announcement: Attention, everyone. Applications for the autumn hobby courses starting next month are being accepted from today. This year there are four courses: guitar, flower arranging, photography, and soba-noodle making. The popular soba-making course is limited to the first twenty applicants, so please apply early. You can apply at the first-floor reception desk or on the community center's website. Please note that, due to the teacher's schedule, the flower-arranging course has changed from every Thursday to every Friday. Also, in the photography course, cameras will be lent to those who don't own one for the first session. The fee for every course is 2,000 yen per month, with equipment costs separate. For details, please pick up a pamphlet at the reception desk.",
    "questions": [
      {
        "question": "生[い]け花[ばな]講座[こうざ]は何曜日[なんようび]にありますか。",
        "questionTranslation": "On what day is the flower-arranging course held?",
        "options": [
          {
            "text": "木曜日",
            "explanation": "Thursday was the OLD day; it was changed due to the teacher's schedule."
          },
          {
            "text": "金曜日",
            "explanation": "Correct. The announcement says the course changed from every Thursday to every Friday."
          },
          {
            "text": "土曜日",
            "explanation": "Saturday is never mentioned."
          },
          {
            "text": "毎日",
            "explanation": "It is a weekly course, not daily."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "そば打[う]ち講座[こうざ]に入[はい]りたい人[ひと]は、どうしたらいいですか。",
        "questionTranslation": "What should people who want to join the soba-making course do?",
        "options": [
          {
            "text": "早めに申し込む",
            "explanation": "Correct. It is limited to the first twenty applicants, so the announcement says to apply early."
          },
          {
            "text": "来月まで待つ",
            "explanation": "The courses START next month, but applications are open from today — waiting risks missing the twenty spots."
          },
          {
            "text": "道具を先に買う",
            "explanation": "Equipment costs are mentioned as separate, but buying tools first is never required."
          },
          {
            "text": "先生に電話する",
            "explanation": "Applications are made at reception or on the website, not by calling the teacher."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "申[もう]し込[こ]みはどこでできますか。",
        "questionTranslation": "Where can people apply?",
        "options": [
          {
            "text": "二階の教室",
            "explanation": "A second-floor classroom is never mentioned as an application point."
          },
          {
            "text": "一階の受付かホームページ",
            "explanation": "Correct. The announcement says applications can be made at the first-floor reception desk or on the website."
          },
          {
            "text": "電話だけ",
            "explanation": "Applying by phone is never mentioned."
          },
          {
            "text": "パンフレットのはがき",
            "explanation": "The pamphlet gives details; applying by postcard is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:f-camp-to-tenki",
    "level": "N3",
    "title": "キャンプの予定[よてい]と天気[てんき]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "今週末[こんしゅうまつ]のキャンプだけど、天気予報[てんきよほう]見[み]た？土曜日[どようび]の夜[よる]から雨[あめ]らしいよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "えー、テントで泊[と]まるのに雨[あめ]は嫌[いや]だなあ。中止[ちゅうし]にする？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "せっかく道具[どうぐ]も借[か]りたし、中止[ちゅうし]はもったいないよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、日帰[ひがえ]りにする？土曜日[どようび]の昼間[ひるま]は晴[は]れみたいだし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、バーベキューだけして帰[かえ]るのもなあ。あ、あのキャンプ場[じょう]、ロッジもあるんじゃなかった？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、そうだ。屋根[やね]のあるバーベキュー場[じょう]もあるってホームページに書[か]いてあったよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、テントはやめてロッジに泊[と]まろう。それなら雨[あめ]が降[ふ]っても大丈夫[だいじょうぶ]だし。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "賛成[さんせい]。でも、ロッジ、まだ空[あ]いてるかな。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "確[たし]かめないとね。もしいっぱいだったら、日帰[ひがえ]りにしよう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかった。じゃあ、私[わたし]が今[いま]すぐキャンプ場[じょう]に電話[でんわ]して聞[き]いてみるね。"
      }
    ],
    "translation": "Man: About this weekend's camping trip — did you see the forecast? Apparently it'll rain from Saturday night. / Woman: Ugh, rain is awful when we're sleeping in a tent. Should we cancel? / Man: We went to the trouble of borrowing the gear; canceling would be a waste. / Woman: Then make it a day trip? Saturday daytime looks sunny. / Man: Hmm, just doing a barbecue and going home, though... Oh, didn't that campsite have lodges too? / Woman: Oh, right. The website also said there's a roofed barbecue area. / Man: Then let's skip the tent and stay in a lodge. That way we're fine even if it rains. / Woman: Agreed. But I wonder if the lodges are still available. / Man: We need to check. If they're full, let's make it a day trip. / Woman: Got it. Then I'll call the campsite right now and ask.",
    "questions": [
      {
        "question": "二人[ふたり]はどうすることにしましたか。",
        "questionTranslation": "What did the two decide to do?",
        "options": [
          {
            "text": "キャンプを中止する",
            "explanation": "Canceling was rejected as a waste since they already borrowed the gear."
          },
          {
            "text": "テントに泊まる",
            "explanation": "The tent was dropped because it will rain from Saturday night."
          },
          {
            "text": "ロッジに泊まる",
            "explanation": "Correct. They decide to stay in a lodge instead of the tent, if one is still available."
          },
          {
            "text": "別のキャンプ場に行く",
            "explanation": "They stay with the same campsite; a different one is never discussed."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうしてテントに泊[と]まりませんか。",
        "questionTranslation": "Why won't they stay in the tent?",
        "options": [
          {
            "text": "土曜日の夜から雨が降るから",
            "explanation": "Correct. The forecast says rain from Saturday night, and the woman hates the idea of a tent in the rain."
          },
          {
            "text": "テントを借りられなかったから",
            "explanation": "They already borrowed the gear — that's why canceling felt wasteful."
          },
          {
            "text": "テントが壊れているから",
            "explanation": "Nothing is said about the tent being broken."
          },
          {
            "text": "キャンプ場がテントを禁止しているから",
            "explanation": "No ban is mentioned; the weather is the problem."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "女[おんな]の人[ひと]はこのあとすぐ何[なに]をしますか。",
        "questionTranslation": "What will the woman do right after this?",
        "options": [
          {
            "text": "キャンプ場に電話する",
            "explanation": "Correct. She says she'll call the campsite right now to ask if a lodge is available."
          },
          {
            "text": "ホームページで予約する",
            "explanation": "The website is only mentioned as where she read about the barbecue area; she will phone instead."
          },
          {
            "text": "道具を返しに行く",
            "explanation": "Returning the gear is never mentioned; they plan to use it."
          },
          {
            "text": "天気予報をもう一度見る",
            "explanation": "The forecast has already been checked; the next step is calling about the lodge."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-haha-no-hi",
    "level": "N3",
    "title": "母[はは]の日[ひ]のプレゼント",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ねえ、母[はは]の日[ひ]のプレゼント、もう決[き]めた？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "まだ。毎年[まいとし]カーネーションだから、今年[ことし]は違[ちが]うものにしたいんだよね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ケーキはどう？お母[かあ]さん、甘[あま]いものが好[す]きだし。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "だめだめ。今[いま]、ダイエット中[ちゅう]だって言[い]ってたよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうか。じゃあ、エプロンとか？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "エプロンは去年[きょねん]あげたじゃない。覚[おぼ]えてないの？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あ、そうだった。うーん、何[なに]がいいかなあ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "この前[まえ]、「たまには作[つく]らないで、おいしいものが食[た]べたい」って言[い]ってたから、レストランに連[つ]れて行[い]くのはどう？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいね。駅前[えきまえ]に新[あたら]しくできたイタリアンの店[みせ]、評判[ひょうばん]がいいらしいよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そこにしよう。予約[よやく]、お願[ねが]いできる？私[わたし]は花[はな]を一輪[いちりん]だけ買[か]っておくから。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "了解[りょうかい]。じゃあ、日曜日[にちようび]のお昼[ひる]で予約[よやく]するね。"
      }
    ],
    "translation": "Man: Hey, have you decided on a Mother's Day present yet? / Woman: Not yet. It's carnations every year, so this year I want to do something different. / Man: How about a cake? Mom likes sweets. / Woman: No, no. She said she's on a diet right now. / Man: I see. Then, an apron or something? / Woman: We gave her an apron last year, didn't we? Don't you remember? / Man: Oh, right. Hmm, what would be good? / Woman: The other day she said, \"For once I'd like to eat something delicious without cooking,\" so how about taking her to a restaurant? / Man: Nice. That new Italian place in front of the station apparently has a good reputation. / Woman: Let's go there. Can you make the reservation? I'll just buy a single flower. / Man: Got it. Then I'll book it for Sunday lunch.",
    "questions": [
      {
        "question": "二人[ふたり]は母[はは]の日[ひ]に何[なに]をしますか。",
        "questionTranslation": "What will the two do for Mother's Day?",
        "options": [
          {
            "text": "ケーキをあげる",
            "explanation": "Cake was rejected because their mother is on a diet."
          },
          {
            "text": "エプロンをあげる",
            "explanation": "An apron is what they gave LAST year."
          },
          {
            "text": "レストランに連れて行く",
            "explanation": "Correct. They decide to take her to the new Italian restaurant for Sunday lunch."
          },
          {
            "text": "料理を作ってあげる",
            "explanation": "Her wish was to eat out WITHOUT anyone cooking; making a meal is not the plan."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうしてケーキをあげませんか。",
        "questionTranslation": "Why won't they give her a cake?",
        "options": [
          {
            "text": "お母さんは甘いものが嫌いだから",
            "explanation": "The man says she LIKES sweets; that's not the problem."
          },
          {
            "text": "お母さんがダイエット中だから",
            "explanation": "Correct. The woman says their mother said she is on a diet right now."
          },
          {
            "text": "去年もケーキをあげたから",
            "explanation": "What they gave last year was an apron, not a cake."
          },
          {
            "text": "ケーキの店が閉まっているから",
            "explanation": "No cake shop is mentioned as closed."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]はこのあと何[なに]をしますか。",
        "questionTranslation": "What will the man do after this?",
        "options": [
          {
            "text": "花を買う",
            "explanation": "The woman said she would buy the single flower."
          },
          {
            "text": "レストランを予約する",
            "explanation": "Correct. The woman asks him to book, and he says he'll reserve Sunday lunch."
          },
          {
            "text": "ケーキを注文する",
            "explanation": "The cake idea was rejected because of the diet."
          },
          {
            "text": "エプロンを探す",
            "explanation": "The apron was last year's gift; nobody is buying one now."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:f-kekkonshiki-e-no-ikikata",
    "level": "N3",
    "title": "結婚式[けっこんしき]への行[い]き方[かた]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "来月[らいげつ]の友[とも]だちの結婚式[けっこんしき]、大阪[おおさか]までどうやって行[い]く？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "新幹線[しんかんせん]が一番[いちばん]速[はや]いけど、往復[おうふく]で三万円[さんまんえん]近[ちか]くかかるんだよね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "高[たか]いね。夜行[やこう]バスなら往復[おうふく]一万円[いちまんえん]ぐらいだよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "夜行[やこう]バスかあ。安[やす]いけど、朝[あさ]着[つ]いてそのまま式[しき]に出[で]るのは疲[つか]れそうだなあ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "確[たし]かに。バスで寝[ね]られなかったら、式[しき]の間[あいだ]、眠[ねむ]くなっちゃうね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "飛行機[ひこうき]はどう？早[はや]く予約[よやく]すれば、新幹線[しんかんせん]より安[やす]くなるって聞[き]いたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ちょっと調[しら]べてみる。…あ、本当[ほんとう]だ。早[はや]めの予約[よやく]なら、往復[おうふく]二万円[にまんえん]だって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "でも、空港[くうこう]から式場[しきじょう]までは遠[とお]くない？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "大丈夫[だいじょうぶ]。式場[しきじょう]は空港[くうこう]から電車[でんしゃ]で三十分[さんじゅっぷん]だって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、飛行機[ひこうき]にしよう。前[まえ]の日[ひ]に行[い]く？"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ううん、朝[あさ]の便[びん]で十分[じゅうぶん]間[ま]に合[あ]うよ。じゃあ、今日中[きょうじゅう]に二人分[ふたりぶん]予約[よやく]しちゃうね。"
      }
    ],
    "translation": "Woman: For our friend's wedding next month, how should we get to Osaka? / Man: The shinkansen is fastest, but it costs nearly 30,000 yen round trip. / Woman: Expensive. A night bus would be about 10,000 yen round trip. / Man: A night bus, huh. It's cheap, but arriving in the morning and going straight to the ceremony sounds exhausting. / Woman: True. If we can't sleep on the bus, we'd get sleepy during the ceremony. / Man: How about flying? I heard that if you book early, it's cheaper than the shinkansen. / Woman: Let me check... Oh, it's true. If you book early, it's 20,000 yen round trip. / Man: But isn't the wedding venue far from the airport? / Woman: It's fine. The venue is thirty minutes from the airport by train. / Man: Then let's fly. Should we go the day before? / Woman: No, the morning flight gets us there with plenty of time. Then I'll book for the two of us today.",
    "questions": [
      {
        "question": "二人[ふたり]は大阪[おおさか]までどうやって行[い]きますか。",
        "questionTranslation": "How will the two get to Osaka?",
        "options": [
          {
            "text": "新幹線で行く",
            "explanation": "The shinkansen was rejected as too expensive at nearly 30,000 yen round trip."
          },
          {
            "text": "夜行バスで行く",
            "explanation": "The night bus is cheap but was rejected because going straight to the ceremony would be exhausting."
          },
          {
            "text": "飛行機で行く",
            "explanation": "Correct. With the early-booking fare of 20,000 yen round trip, they decide to fly."
          },
          {
            "text": "車で行く",
            "explanation": "Driving is never discussed."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして夜行[やこう]バスで行[い]きませんか。",
        "questionTranslation": "Why aren't they taking the night bus?",
        "options": [
          {
            "text": "値段が一番高いから",
            "explanation": "The bus is actually the cheapest option at about 10,000 yen round trip."
          },
          {
            "text": "疲れて式の間に眠くなりそうだから",
            "explanation": "Correct. They worry that arriving in the morning after a sleepless bus ride would leave them exhausted and sleepy at the ceremony."
          },
          {
            "text": "バスが満席だから",
            "explanation": "Nothing is said about the bus being sold out."
          },
          {
            "text": "式場までバスが行かないから",
            "explanation": "The route of the bus is not the issue; distance from the AIRPORT was raised, and it turned out fine."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]はいつ出発[しゅっぱつ]しますか。",
        "questionTranslation": "When will the two depart?",
        "options": [
          {
            "text": "結婚式の前の日の夜",
            "explanation": "The night-before idea was declined; the morning flight is enough."
          },
          {
            "text": "結婚式の前の日の朝",
            "explanation": "They are not going the day before at all."
          },
          {
            "text": "結婚式の日の朝",
            "explanation": "Correct. The woman says the morning flight will get them there in plenty of time."
          },
          {
            "text": "結婚式の日の昼",
            "explanation": "A midday departure is never mentioned and would be too late for the ceremony."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N3:f-yoga-kyoushitsu-henkou",
    "level": "N3",
    "title": "ヨガ教室[きょうしつ]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "会員[かいいん]のみなさまにお知[し]らせいたします。"
      },
      {
        "speaker": "アナウンス",
        "text": "毎週[まいしゅう]水曜日[すいようび]、午前[ごぜん]十時[じゅうじ]からのヨガ教室[きょうしつ]は、担当[たんとう]の先生[せんせい]のご都合[つごう]により、今月[こんげつ]は木曜日[もくようび]の午前[ごぜん]十時[じゅうじ]に変[か]わります。"
      },
      {
        "speaker": "アナウンス",
        "text": "場所[ばしょ]はいつもと同[おな]じ、二階[にかい]のスタジオです。"
      },
      {
        "speaker": "アナウンス",
        "text": "なお、来月[らいげつ]からは、元[もと]の水曜日[すいようび]に戻[もど]ります。"
      },
      {
        "speaker": "アナウンス",
        "text": "また、今週[こんしゅう]の木曜日[もくようび]は、レッスンの後[あと]に、初[はじ]めての方[かた]のための説明会[せつめいかい]を三十分[さんじゅっぷん]ほど行[おこな]います。参加[さんか]は無料[むりょう]ですので、ご興味[きょうみ]のある方[かた]はぜひご参加[さんか]ください。"
      },
      {
        "speaker": "アナウンス",
        "text": "レッスンには、タオルと飲[の]み物[もの]を各自[かくじ]でお持[も]ちください。マットは教室[きょうしつ]で貸[か]し出[だ]します。"
      },
      {
        "speaker": "アナウンス",
        "text": "ご不明[ふめい]な点[てん]は、一階[いっかい]の受付[うけつけ]までお願[ねが]いいたします。"
      }
    ],
    "translation": "Announcement: Attention, members. The yoga class held every Wednesday from 10 a.m. will, due to the instructor's schedule, move to Thursdays at 10 a.m. for this month. The location is the same as always, the second-floor studio. From next month, it will return to the original Wednesday slot. Also, this Thursday, after the lesson, we will hold a thirty-minute information session for beginners. Participation is free, so if you are interested, please join. For lessons, please bring your own towel and drink. Mats are lent out by the class. For any questions, please ask at the first-floor reception desk.",
    "questions": [
      {
        "question": "今月[こんげつ]、ヨガ教室[きょうしつ]は何曜日[なんようび]にありますか。",
        "questionTranslation": "On what day is the yoga class this month?",
        "options": [
          {
            "text": "水曜日",
            "explanation": "Wednesday is the USUAL day and the day it returns to next month; this month it has moved."
          },
          {
            "text": "木曜日",
            "explanation": "Correct. Due to the instructor's schedule, this month the class moves to Thursdays at 10 a.m."
          },
          {
            "text": "金曜日",
            "explanation": "Friday is never mentioned."
          },
          {
            "text": "水曜日と木曜日",
            "explanation": "The class is not held twice a week; it simply moved to Thursday for this month."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "レッスンに参加[さんか]する人[ひと]は、何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What should people attending the lesson bring?",
        "options": [
          {
            "text": "マットとタオル",
            "explanation": "Mats are lent out by the class, so only the towel part is right."
          },
          {
            "text": "タオルと飲み物",
            "explanation": "Correct. The announcement asks everyone to bring their own towel and drink; mats are provided."
          },
          {
            "text": "飲み物とマット",
            "explanation": "Mats do not need to be brought; they are lent out."
          },
          {
            "text": "何も持って行かなくてよい",
            "explanation": "A towel and a drink must be brought by each person."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "来月[らいげつ]、ヨガ教室[きょうしつ]はどうなりますか。",
        "questionTranslation": "What happens with the yoga class next month?",
        "options": [
          {
            "text": "元の水曜日に戻る",
            "explanation": "Correct. The announcement says that from next month the class returns to the original Wednesday."
          },
          {
            "text": "木曜日のままになる",
            "explanation": "Thursday is only for this month."
          },
          {
            "text": "教室がなくなる",
            "explanation": "Nothing says the class is ending."
          },
          {
            "text": "場所が一階に変わる",
            "explanation": "The location stays the same second-floor studio; the first floor is only the reception desk."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N3:f-suiei-de-kenkou",
    "level": "N3",
    "title": "健康[けんこう]のための運動[うんどう]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "健康診断[けんこうしんだん]、どうだった？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、また太[ふと]ったって。医者[いしゃ]に、運動[うんどう]しなさいって言[い]われたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "だから言[い]ったでしょう。ジョギングでも始[はじ]めたら？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それが、走[はし]るのは膝[ひざ]によくないって医者[いしゃ]が言[い]うんだ。体重[たいじゅう]が重[おも]い人[ひと]は特[とく]にって。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、ゴルフは？会社[かいしゃ]の人[ひと]とよく行[い]ってるじゃない。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ゴルフは月[つき]に一回[いっかい]だけだし、お金[かね]もかかるから、毎週[まいしゅう]の運動[うんどう]としてはちょっとね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それなら、水泳[すいえい]はどう？膝[ひざ]に負担[ふたん]がかからないって聞[き]くよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "水泳[すいえい]か。でも、ジムのプールは会費[かいひ]が高[たか]いんだよなあ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "市民[しみん]プールなら一回[いっかい]四百円[よんひゃくえん]だよ。駅[えき]の近[ちか]くだから、仕事[しごと]の帰[かえ]りに寄[よ]れるし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それはいいね。じゃあ、週[しゅう]二回[にかい]、仕事[しごと]の帰[かえ]りに行[い]くことにするよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ちゃんと続[つづ]けてよね。私[わたし]も時々[ときどき]一緒[いっしょ]に行[い]くから。"
      }
    ],
    "translation": "Woman: How was your health checkup? / Man: Hmm, they said I gained weight again. The doctor told me to exercise. / Woman: That's what I've been telling you. Why not take up jogging? / Man: Well, the doctor says running is bad for the knees — especially for heavier people. / Woman: Then golf? You often go with people from work. / Man: Golf is only once a month, and it costs money, so as weekly exercise it's not great. / Woman: In that case, how about swimming? I hear it doesn't strain the knees. / Man: Swimming, huh. But the gym pool's membership fee is expensive. / Woman: The municipal pool is 400 yen per visit. It's near the station, so you can stop by on the way home from work. / Man: That's good. Then I'll go twice a week on the way home from work. / Woman: Keep it up, okay? I'll come along with you sometimes too.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどんな運動[うんどう]をすることにしましたか。",
        "questionTranslation": "What exercise did the man decide to do?",
        "options": [
          {
            "text": "ジョギング",
            "explanation": "Jogging was rejected because the doctor says running is bad for the knees, especially for heavier people."
          },
          {
            "text": "ゴルフ",
            "explanation": "Golf is only once a month and costs money, so it doesn't work as regular exercise."
          },
          {
            "text": "市民プールで水泳",
            "explanation": "Correct. He decides to swim at the municipal pool, 400 yen per visit and near the station."
          },
          {
            "text": "ジムでトレーニング",
            "explanation": "The gym pool was rejected because the membership fee is expensive."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうしてジョギングをしませんか。",
        "questionTranslation": "Why won't he jog?",
        "options": [
          {
            "text": "医者に膝によくないと言われたから",
            "explanation": "Correct. The doctor says running is bad for the knees, especially for heavier people."
          },
          {
            "text": "走るのが嫌いだから",
            "explanation": "His likes and dislikes are never mentioned; the doctor's advice is the reason."
          },
          {
            "text": "時間がないから",
            "explanation": "Lack of time is never given as a reason."
          },
          {
            "text": "お金がかかるから",
            "explanation": "Cost was the problem with golf and the gym pool, not jogging."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "男[おとこ]の人[ひと]はいつ運動[うんどう]しますか。",
        "questionTranslation": "When will the man exercise?",
        "options": [
          {
            "text": "毎朝、出勤の前",
            "explanation": "Mornings are never discussed."
          },
          {
            "text": "週2回、仕事の帰り",
            "explanation": "Correct. He says he'll go twice a week on the way home from work, since the pool is near the station."
          },
          {
            "text": "月に1回、週末",
            "explanation": "Once a month is how often he plays golf — that was rejected as too infrequent."
          },
          {
            "text": "毎日、昼休み",
            "explanation": "Lunch breaks are never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:f-onsen-omiyage",
    "level": "N3",
    "title": "旅行[りょこう]のお土産[みやげ]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そろそろ帰[かえ]りの電車[でんしゃ]の時間[じかん]だね。その前[まえ]に、お土産[みやげ]を買[か]わないと。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうだね。会社[かいしゃ]のみんなには、この温泉[おんせん]まんじゅうはどう？二十個[にじゅっこ]入[い]りで千円[せんえん]だって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいね、それにしよう。それから、お隣[となり]の田中[たなか]さんにも何[なに]か買[か]いたいな。猫[ねこ]の世話[せわ]をお願[ねが]いしたから。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、ちょっといいものがいいね。このお酒[さけ]はどう？この土地[とち]の有名[ゆうめい]なお酒[さけ]だって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "田中[たなか]さん、お酒[さけ]は飲[の]まないって言[い]ってたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうだったね。あ、このきれいな箱[はこ]のおせんべいは？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、せんべいは固[かた]いから、お年寄[としよ]りにはどうかなあ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、この温泉[おんせん]の入浴剤[にゅうよくざい]のセットは？家[いえ]でも温泉[おんせん]の気分[きぶん]が楽[たの]しめるって。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あ、それいいね。田中[たなか]さん、お風呂[ふろ]が好[す]きだって言[い]ってたし。それにしよう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "決[き]まり。じゃあ、まんじゅうと入浴剤[にゅうよくざい]をレジに持[も]って行[い]くね。"
      }
    ],
    "translation": "Man: It's almost time for our train home. Before that, we have to buy souvenirs. / Woman: Right. For everyone at the office, how about these hot-spring manju buns? Twenty for 1,000 yen. / Man: Good, let's go with that. And I want to get something for our neighbor Tanaka-san too, since we asked her to look after the cat. / Woman: Then something a bit nicer would be good. How about this sake? It says it's this region's famous sake. / Man: Tanaka-san said she doesn't drink alcohol. / Woman: Oh, that's right. Ah, what about these rice crackers in the pretty box? / Man: Hmm, crackers are hard — I'm not sure about them for an elderly person. / Woman: Then how about this set of hot-spring bath salts? It says you can enjoy the hot-spring feeling at home. / Man: Oh, that's good. Tanaka-san did say she loves baths. Let's go with that. / Woman: Decided. Then I'll take the manju and the bath salts to the register.",
    "questions": [
      {
        "question": "隣[となり]の田中[たなか]さんには何[なに]を買[か]いますか。",
        "questionTranslation": "What will they buy for their neighbor Tanaka-san?",
        "options": [
          {
            "text": "温泉まんじゅう",
            "explanation": "The manju are for everyone at the office, not for Tanaka-san."
          },
          {
            "text": "地元のお酒",
            "explanation": "The local sake was rejected because Tanaka-san doesn't drink alcohol."
          },
          {
            "text": "おせんべい",
            "explanation": "The crackers were rejected as too hard for an elderly person."
          },
          {
            "text": "入浴剤のセット",
            "explanation": "Correct. They choose the hot-spring bath salts because Tanaka-san loves baths."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "どうして田中[たなか]さんにお土産[みやげ]を買[か]いますか。",
        "questionTranslation": "Why are they buying a souvenir for Tanaka-san?",
        "options": [
          {
            "text": "猫の世話をしてもらったから",
            "explanation": "Correct. The man says they asked her to look after the cat while they were away."
          },
          {
            "text": "旅行に誘ってくれたから",
            "explanation": "Nobody says Tanaka-san invited them on the trip."
          },
          {
            "text": "誕生日だから",
            "explanation": "A birthday is never mentioned."
          },
          {
            "text": "お酒が好きだから",
            "explanation": "The opposite — she doesn't drink alcohol, which is why the sake was rejected."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "どうしておせんべいを買[か]いませんか。",
        "questionTranslation": "Why don't they buy the rice crackers?",
        "options": [
          {
            "text": "値段が高いから",
            "explanation": "The price of the crackers is never mentioned."
          },
          {
            "text": "固くて、お年寄りには心配だから",
            "explanation": "Correct. The man worries the hard crackers aren't suitable for an elderly person."
          },
          {
            "text": "箱がきれいではないから",
            "explanation": "The box is actually described as pretty."
          },
          {
            "text": "売り切れているから",
            "explanation": "Nothing is sold out in this conversation."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N3:f-shinkyo-no-kagu",
    "level": "N3",
    "title": "新[あたら]しい部屋[へや]の家具[かぐ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "引[ひ]っ越[こ]し、お疲[つか]れさま。新[あたら]しい部屋[へや]はどう？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うん、前[まえ]より広[ひろ]くて気持[きも]ちいいよ。ただ、家具[かぐ]が足[た]りなくて。今日[きょう]はそれを見[み]に来[き]たんだ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "何[なに]を買[か]うの？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "本棚[ほんだな]とソファー。あと、できればテーブルも。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "全部[ぜんぶ]買[か]ったら、結構[けっこう]な値段[ねだん]になるんじゃない？"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうなんだよ。予算[よさん]は五万円[ごまんえん]なんだけど、このソファー、それだけで四万円[よんまんえん]もする。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ソファーは急[いそ]がなくてもいいんじゃない？前[まえ]の部屋[へや]のクッションもあるし。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それもそうだね。本[ほん]は箱[はこ]に入[い]れたままだと困[こま]るから、本棚[ほんだな]は今日[きょう]、絶対[ぜったい]必要[ひつよう]なんだ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "この本棚[ほんだな]、一万五千円[いちまんごせんえん]だって。あっちの白[しろ]いテーブルは二万円[にまんえん]。合[あ]わせても予算[よさん]の中[なか]だよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、今日[きょう]はその二[ふた]つにして、ソファーはボーナスが出[で]てから考[かんが]えるよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "それがいいよ。じゃあ、店[みせ]の人[ひと]に配達[はいたつ]の日[ひ]を聞[き]いてみよう。"
      }
    ],
    "translation": "Woman: Good work on the move. How's the new place? / Man: Yeah, it's bigger than before and feels nice. But I don't have enough furniture. That's what I came to look at today. / Woman: What are you buying? / Man: A bookshelf and a sofa. And a table too, if possible. / Woman: If you buy all of that, won't it get pretty expensive? / Man: Exactly. My budget is 50,000 yen, but this sofa alone costs 40,000. / Woman: The sofa doesn't have to be right away, does it? You still have the cushions from your old room. / Man: True. My books are a problem if they stay in boxes, so the bookshelf is absolutely necessary today. / Woman: This bookshelf is 15,000 yen, it says. That white table over there is 20,000. Even together they're within your budget. / Man: Then today I'll get those two, and I'll think about the sofa after my bonus comes. / Woman: Good idea. Then let's ask the shop staff about the delivery date.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は今日[きょう]、何[なに]を買[か]いますか。",
        "questionTranslation": "What will the man buy today?",
        "options": [
          {
            "text": "本棚とソファー",
            "explanation": "The sofa is postponed until his bonus comes; it alone would use up most of the budget."
          },
          {
            "text": "本棚とテーブル",
            "explanation": "Correct. The bookshelf (15,000 yen) and white table (20,000 yen) together fit his 50,000-yen budget."
          },
          {
            "text": "ソファーとテーブル",
            "explanation": "The sofa is not being bought today."
          },
          {
            "text": "本棚だけ",
            "explanation": "He buys the table as well, since both together are within budget."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうしてソファーを買[か]いませんか。",
        "questionTranslation": "Why doesn't he buy the sofa?",
        "options": [
          {
            "text": "部屋に入らないから",
            "explanation": "The size of the room is never the problem — the new room is bigger."
          },
          {
            "text": "高くて、急がなくてもいいから",
            "explanation": "Correct. The sofa alone is 40,000 yen of a 50,000-yen budget, and the woman points out he can use his old cushions for now."
          },
          {
            "text": "デザインが好きではないから",
            "explanation": "The design is never criticized."
          },
          {
            "text": "売り切れているから",
            "explanation": "The sofa is on sale in the store; nothing is sold out."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]はこのあと何[なに]をしますか。",
        "questionTranslation": "What will the two do after this?",
        "options": [
          {
            "text": "店の人に配達の日を聞く",
            "explanation": "Correct. The woman says 「店の人に配達の日を聞いてみよう」."
          },
          {
            "text": "別の店にソファーを見に行く",
            "explanation": "The sofa decision is postponed until the bonus, not moved to another store."
          },
          {
            "text": "本を箱から出す",
            "explanation": "Unpacking books needs the bookshelf first; it's not the immediate next step here."
          },
          {
            "text": "ボーナスの金額を調べる",
            "explanation": "The bonus is only mentioned as a future point for the sofa decision."
          }
        ],
        "correctIndex": 0
      }
    ]
  }
]
