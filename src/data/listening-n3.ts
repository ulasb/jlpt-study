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
  }
]
